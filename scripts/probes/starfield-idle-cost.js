// Scratch: A/B trace — renderer cost of the 60-star twinkle animation,
// steady-state idle page, CPU-throttled 4x (mid-tier mobile profile).
// Scenarios: RUNNING -> FROZEN (animation:none) -> RUNNING again (noise bound).
const { chromium } = require("@playwright/test");

const URL_ = process.argv[2] || "http://localhost:3100/";
const WINDOW_MS = 6000;
const FREEZE_CSS = "span[style*='animation-delay'] { animation: none !important; }";

async function trace(page, session, ms) {
  const events = [];
  const onData = ({ value }) => events.push(...value);
  session.on("Tracing.dataCollected", onData);
  await session.send("Tracing.start", {
    categories: "devtools.timeline,disabled-by-default-devtools.timeline",
    transferMode: "ReportEvents",
  });
  await page.waitForTimeout(ms);
  await session.send("Tracing.end");
  await page.waitForTimeout(1200);
  session.off("Tracing.dataCollected", onData);
  return events;
}

const bucket = (events) => {
  const byName = {};
  for (const e of events) if (e.dur) byName[e.name] = (byName[e.name] || 0) + e.dur / 1000;
  return byName;
};

const report = (label, byName) => {
  const paintish = ["Paint", "UpdateLayerTree", "Layout", "UpdateLayoutTree", "CompositeLayers", "Animation"];
  let total = 0;
  let paint = 0;
  console.log(`\n== ${label} ==`);
  Object.entries(byName)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => {
      total += v;
      if (paintish.includes(k)) paint += v;
      if (v > 3) console.log(v.toFixed(1).padStart(9), k);
    });
  console.log(`${total.toFixed(1).padStart(9)} TOTAL renderer ms / ${WINDOW_MS / 1000}s`);
  console.log(`${paint.toFixed(1).padStart(9)} paint+layout+composite ms`);
  return { total, paint };
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1366, height: 800 } });
  const session = await page.context().newCDPSession(page);
  await session.send("Emulation.setCPUThrottlingRate", { rate: 4 });

  await page.goto(URL_, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000); // settle past load work

  const r1 = report("RUN #1 (stars running)", bucket(await trace(page, session, WINDOW_MS)));

  await page.addStyleTag({ content: FREEZE_CSS });
  await page.waitForTimeout(500);
  const fr = report("FROZEN (animation:none)", bucket(await trace(page, session, WINDOW_MS)));

  await page.evaluate(() => {
    for (const s of document.querySelectorAll("style"))
      if (s.textContent.includes("animation-delay")) s.remove();
  });
  await page.waitForTimeout(500);
  const r2 = report("RUN #2 (stars running again)", bucket(await trace(page, session, WINDOW_MS)));

  const runAvg = (r1.total + r2.total) / 2;
  console.log("\n======== VERDICT ========");
  console.log(`running avg total : ${runAvg.toFixed(1)} ms / ${WINDOW_MS / 1000}s window`);
  console.log(`frozen total      : ${fr.total.toFixed(1)} ms`);
  console.log(`starfield cost    : ${(runAvg - fr.total).toFixed(1)} ms per ${WINDOW_MS / 1000}s  (~${((runAvg - fr.total) / 60).toFixed(1)} ms/s of renderer time)`);
  console.log(`run1 vs run2 spread: ${Math.abs(r1.total - r2.total).toFixed(1)} ms (noise bound)`);

  await browser.close();
})();
