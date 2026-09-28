const fs = require("fs");
const buf = fs.readFileSync("public/talking-portrait/profile-dark-en.mp4");
const N = buf.length;
console.log("FILE SIZE:", N, "=", (N / 1048576).toFixed(2), "MB");

function boxAt(p) {
  if (p + 8 > N) return null;
  let size = buf.readUInt32BE(p);
  const type = buf.toString("latin1", p + 4, p + 8);
  let hdr = 8;
  if (size === 1) { size = Number(buf.readBigUInt64BE(p + 8)); hdr = 16; }
  else if (size === 0) size = N - p;
  return { size, type, hdr, data: p + hdr, end: p + size };
}

// top-level map
let p = 0;
const order = [];
while (p + 8 <= N) {
  const b = boxAt(p);
  if (!b || b.size <= 0) break;
  order.push(`${b.type}@${p}`);
  p = b.end;
}
console.log("ATOMS:", order.join(" -> "));
console.log(
  "FASTSTART:",
  order.findIndex((t) => t.startsWith("moov")) < order.findIndex((t) => t.startsWith("mdat")),
  "\n"
);

const moovOff = +order.find((t) => t.startsWith("moov")).split("@")[1];
const moov = boxAt(moovOff);
const PROF = { 66: "Baseline", 77: "Main", 88: "Extended", 100: "High", 110: "High10", 122: "High4:2:2", 244: "High4:4:4" };
const traks = [];

for (let c = moov.data; c + 8 <= moov.end;) {
  const b = boxAt(c);
  if (!b || b.size <= 0) break;
  if (b.type !== "trak") { c = b.end; continue; }
  const T = {};
  for (let d = b.data; d + 8 <= b.end;) {
    const tb = boxAt(d);
    if (!tb || tb.size <= 0) break;
    if (tb.type === "tkhd") {
      T.w = buf.readUInt32BE(tb.end - 8) / 65536;
      T.h = buf.readUInt32BE(tb.end - 4) / 65536;
    }
    if (tb.type === "mdia") {
      for (let e = tb.data; e + 8 <= tb.end;) {
        const mb = boxAt(e);
        if (!mb || mb.size <= 0) break;
        if (mb.type === "mdhd") {
          const v = buf[mb.data];
          T.timescale = v === 1 ? buf.readUInt32BE(mb.data + 20) : buf.readUInt32BE(mb.data + 12);
          const dur = v === 1 ? Number(buf.readBigUInt64BE(mb.data + 24)) : buf.readUInt32BE(mb.data + 16);
          T.durS = dur / T.timescale;
        }
        if (mb.type === "hdlr") T.handler = buf.toString("ascii", mb.data + 8, mb.data + 12);
        if (mb.type === "minf") {
          for (let f = mb.data; f + 8 <= mb.end;) {
            const fb = boxAt(f);
            if (!fb || fb.size <= 0) break;
            if (fb.type === "stbl") {
              for (let g = fb.data; g + 8 <= fb.end;) {
                const sb = boxAt(g);
                if (!sb || sb.size <= 0) break;
                const c0 = sb.data;
                if (sb.type === "stsd") {
                  const esize = buf.readUInt32BE(c0 + 8);
                  const etype = buf.toString("ascii", c0 + 12, c0 + 16);
                  T.entry = etype;
                  const e2 = c0 + 8;
                  if (etype === "avc1") {
                    T.codedW = buf.readUInt16BE(e2 + 32);
                    T.codedH = buf.readUInt16BE(e2 + 34);
                    for (let h = e2 + 86; h + 8 <= e2 + esize;) {
                      const cb2 = boxAt(h);
                      if (!cb2 || cb2.size <= 0) break;
                      if (cb2.type === "avcC") {
                        T.prof = buf[cb2.data + 1];
                        T.lvl = buf[cb2.data + 3];
                        T.codec = `avc1.${buf[cb2.data + 1].toString(16).padStart(2, "0")}${buf[cb2.data + 2].toString(16).padStart(2, "0")}${buf[cb2.data + 3].toString(16).padStart(2, "0")}`;
                        const spsLen = buf.readUInt16BE(cb2.data + 6);
                        const sps = buf.slice(cb2.data + 8, cb2.data + 8 + spsLen);
                        try {
                          const u = [];
                          for (let i = 1; i < sps.length; i++)
                            if (!(i >= 3 && sps[i] === 3 && sps[i - 1] === 0 && sps[i - 2] === 0)) u.push(sps[i]);
                          let bit = 0;
                          const rb = () => (u[bit >> 3] >> (7 - (bit++ & 7))) & 1;
                          const bits = (n) => { let v = 0; for (let i = 0; i < n; i++) v = (v << 1) | rb(); return v; };
                          const ue = () => { let z = 0; while (rb() === 0 && z++ < 64); return (1 << z) - 1 + bits(z); };
                          const se = () => { const k = ue(); return k % 2 ? (k + 1) / 2 : -k / 2; };
                          const pIdc = bits(8); bits(8); bits(8); ue();
                          let cf = 1;
                          if ([100, 110, 122, 244, 44, 83, 86, 118, 128, 138, 139, 134, 135].includes(pIdc)) {
                            cf = ue();
                            if (cf === 3) bits(1);
                            ue(); ue(); bits(1);
                            if (bits(1)) {
                              const n2 = cf !== 3 ? 8 : 12;
                              for (let i2 = 0; i2 < n2; i2++) if (bits(1)) {
                                const sz = i2 < 6 ? 16 : 64;
                                let last = 8, nx = 8;
                                for (let j = 0; j < sz; j++) { if (nx) nx = (last + se() + 256) % 256; last = nx === 0 ? last : nx; }
                              }
                            }
                          }
                          ue();
                          const poc = ue();
                          if (poc === 0) ue();
                          else if (poc === 1) { bits(1); se(); se(); const nn = ue(); for (let i2 = 0; i2 < nn; i2++) se(); }
                          ue(); bits(1);
                          const wM = ue() + 1, hM = ue() + 1;
                          const fmo = bits(1);
                          if (!fmo) bits(1);
                          bits(1);
                          let cl = 0, cr = 0, ct2 = 0, cb2v = 0;
                          if (bits(1)) { cl = ue(); cr = ue(); ct2 = ue(); cb2v = ue(); }
                          const sW = cf === 1 || cf === 2 ? 2 : 1;
                          const sH = cf === 1 ? 2 : cf === 2 ? 1 : 1;
                          T.pixFmt = { 0: "mono", 1: "yuv420p", 2: "yuv422p", 3: "yuv444p" }[cf];
                          T.spsW = wM * 16 - (cl + cr) * sW;
                          T.spsH = hM * 16 * (2 - fmo) - (ct2 + cb2v) * sH * (2 - fmo);
                        } catch (err) { T.spsErr = String(err).slice(0, 80); }
                      }
                      h = cb2.end;
                    }
                  }
                  if (etype === "mp4a") {
                    T.channels = buf.readUInt16BE(e2 + 24);
                    T.sampleRate = buf.readUInt32BE(e2 + 32) / 65536;
                  }
                }
                if (sb.type === "stts") {
                  const n2 = buf.readUInt32BE(c0 + 4);
                  let tot = 0;
                  for (let i2 = 0; i2 < n2; i2++) tot += buf.readUInt32BE(c0 + 8 + i2 * 8);
                  T.samples = tot;
                }
                if (sb.type === "stss") {
                  const n2 = buf.readUInt32BE(c0 + 4);
                  T.keyframes = n2;
                  T.firstKeys = [];
                  for (let i2 = 0; i2 < Math.min(n2, 6); i2++) T.firstKeys.push(buf.readUInt32BE(c0 + 8 + i2 * 4));
                }
                if (sb.type === "ctts") {
                  const n2 = buf.readUInt32BE(c0 + 4);
                  let nz = 0;
                  for (let i2 = 0; i2 < n2; i2++) if (buf.readUInt32BE(c0 + 12 + i2 * 8) !== 0) nz += buf.readUInt32BE(c0 + 8 + i2 * 8);
                  T.bframes = nz;
                }
                if (sb.type === "stsz") {
                  const n2 = buf.readUInt32BE(c0 + 8);
                  let tot = 0;
                  for (let i2 = 0; i2 < n2; i2++) tot += buf.readUInt32BE(c0 + 12 + i2 * 4);
                  T.mediaBytes = tot;
                }
                g = sb.end;
              }
            }
            f = fb.end;
          }
        }
        e = mb.end;
      }
    }
    d = tb.end;
  }
  traks.push(T);
  c = b.end;
}

for (const [i, t] of traks.entries()) {
  const label = t.handler === "vide" ? "VIDEO" : t.handler === "soun" ? "AUDIO" : t.handler;
  console.log(`--- TRACK ${i} [${label}] ---`);
  console.log("duration:", t.durS ? t.durS.toFixed(2) + "s" : "n/a", "| timescale:", t.timescale);
  if (t.handler === "vide") {
    console.log("tkhd dims:", `${t.w}x${t.h}`, "| coded:", `${t.codedW}x${t.codedH}`, "| SPS:", `${t.spsW}x${t.spsH}`);
    console.log("codec:", t.codec, "=", PROF[t.prof] || t.prof, "@ Level", (t.lvl / 10).toFixed(1));
    console.log("pixel format:", t.pixFmt || "(parse failed: " + (t.spsErr || "n/a") + ")");
    console.log("frames:", t.samples, "| fps:", (t.samples / t.durS).toFixed(2));
    console.log("bitrate:", ((t.mediaBytes * 8) / t.durS / 1000).toFixed(0), "kbps");
    console.log("keyframes:", t.keyframes, "| first:", t.firstKeys);
    console.log("B-frames:", t.bframes !== undefined ? t.bframes : "no ctts — none");
  }
  if (t.handler === "soun") {
    console.log("codec:", t.entry, "| channels:", t.channels, "| sample rate:", t.sampleRate, "Hz");
    console.log("bitrate:", ((t.mediaBytes * 8) / t.durS / 1000).toFixed(0), "kbps |", "frames:", t.samples);
  }
  console.log();
}
