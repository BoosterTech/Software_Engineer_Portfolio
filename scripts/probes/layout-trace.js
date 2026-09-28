// Scratch: capture a devtools.timeline trace of the prod build and attribute
// forced layout / style-layout cost to JS call sites.
const { chromium } = require("@playwright/test");

const URL_ = process.argv[2] || "http://localhost:3100/";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const session = await page.context().newCDPSession(page);

  const events = [];
  session.on("Tracing.dataCollected", ({ value }) => events.push(...value));
  session.on("Tracing.tracingComplete", () => {});
  await session.send("Tracing.start", {
    categories:
      "disabled-by-default-devtools.timeline,devtools.timeline,disabled-by-default-devtools.timeline.stack,blink.user_timing",
    transferMode: "ReportEvents",
  });

  await page.goto(URL_, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await session.send("Tracing.end");
  await page.waitForTimeout(1200);

  const byName = {};
  const layoutStacks = {};
  const layoutEvents = [];
  for (const e of events) {
    if (e.dur) byName[e.name] = (byName[e.name] || 0) + e.dur / 1000;
    if (e.name === "UpdateLayoutTree" || e.name === "Layout") {
      const data = e.args?.beginData || e.args?.data || {};
      layoutEvents.push({ dur: (e.dur || 0) / 1000, data });
      const st = data.stackTrace || data.stack || e.args?.stackTrace;
      if (st?.length) {
        const top = st
          .slice(0, 3)
          .map((f) => `${f.functionName || "anon"}@${f.url?.split("/").pop()}:${f.lineNumber}:${f.columnNumber}`)
          .join(" <- ");
        layoutStacks[top] = (layoutStacks[top] || 0) + (e.dur || 0) / 1000;
      }
    }
  }

  console.log("== event totals (ms, top 15) ==");
  Object.entries(byName)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([k, v]) => console.log(v.toFixed(1).padStart(8), k));

  const totalLayout = layoutEvents.reduce((s, e) => s + e.dur, 0);
  console.log(`\n== layout events: ${layoutEvents.length}, total ${totalLayout.toFixed(1)}ms ==`);
  const forced = layoutEvents.filter((e) => e.data?.dirtyObjects !== undefined || e.data?.root);
  console.log("== top stacks attributed to layout ==");
  Object.entries(layoutStacks)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .forEach(([k, v]) => console.log(v.toFixed(1).padStart(8), k));

  await browser.close();
})();
