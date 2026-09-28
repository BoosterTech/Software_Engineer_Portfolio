module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      url: ["/"],
      // Median of 3 runs — Lighthouse metrics swing ±20% between runs;
      // a single run lets timing noise pass/fail the gate randomly.
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Calibrated 2026-03 from measured medians (LCP ~2.8s, TBT ~1.3s,
        // CLS 0, weight ~235 KiB, perf ~0.68): ~20-50% headroom so real
        // regressions fail while normal run-to-run noise stays green. TBT
        // gets the widest margin — it's the most volatile metric.
        "largest-contentful-paint": ["error", { maxNumericValue: 3500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.05 }],
        "total-blocking-time": ["error", { maxNumericValue: 2000 }],
        "total-byte-weight": ["error", { maxNumericValue: 300 * 1024 }],
        "categories:performance": ["error", { minScore: 0.6 }],
      },
    },
    upload: {
      target: "filesystem",
      // Default ./ dumps localhost--*.report.html into the project root.
      outputDir: ".lighthouseci",
    },
  },
};
