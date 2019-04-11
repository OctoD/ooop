module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    '__avoid__',
    '__ignore__',
    'dist',
    'node_modules',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  roots: [
    "src/"
  ],
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "node_modules",
    "dist",
    "__ignore__",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
}