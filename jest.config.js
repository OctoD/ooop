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
  moduleNameMapper: {
    "@InternalErrors/(.*)": "<rootDir>/src/Errors/$1",
    "@Reflection/(.*)": "<rootDir>/src/Reflection/$1",
    "@Operators/(.*)": "<rootDir>/src/Operators/$1",
    "@Types/(.*)": "<rootDir>/src/Types/$1",
  },
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