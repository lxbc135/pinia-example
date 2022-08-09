module.exports = {
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "ts"],
  moduleNameMapper: {
    // support @ -> src mapping for `import...from '@/file`
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
  "moduleFileExtensions": ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  testRegex: [
    ".*/tests/.*.spec\\.(js|jsx|ts|tsx)|.*/__tests__/.*\\.(js|jsx|ts|tsx)"
  ],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/dist/"]
};
