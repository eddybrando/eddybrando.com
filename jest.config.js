module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!<rootDir>/src/main.js",
  ],
  coverageReporters: ["html", "text", "text-summary"],
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  modulePaths: ["<rootDir>/src"],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.js", "!<rootDir>/src/main.js"],
  transform: {
    ".*\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
};
