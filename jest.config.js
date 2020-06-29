module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**",'!**/main.js','!**/src/plugins/**','!**/coverage/**','!**/*.config.js'],
  "coverageReporters": ["html", "text-summary"]
};
