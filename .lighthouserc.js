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
        "largest-contentful-paint": ["error", { maxNumericValue: 4000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        // Regression sensors, not tight budgets: ceilings sit above the
        // measured post-remediation baselines (~1.4s TBT, ~244 KiB weight)
        // so real regressions fail CI without flapping on noise.
        "total-blocking-time": ["error", { maxNumericValue: 2600 }],
        "total-byte-weight": ["error", { maxNumericValue: 400 * 1024 }],
        "categories:performance": ["error", { minScore: 0.5 }],
      },
    },
    upload: {
      target: "filesystem",
      // Default ./ dumps localhost--*.report.html into the project root.
      outputDir: ".lighthouseci",
    },
  },
};
