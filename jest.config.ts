import type { Config } from "jest";

module.exports = {
  preset: "ts-jest",
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ['react-jsx'],
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: { APP_NAME: "Jobsity Calendar App" },
  moduleNameMapper: {
    // tsconfig.paths
    "@/(.*)$": "<rootDir>/src/$1",

    // mocking assests and styling
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/mocks/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/tests/mocks/styleMock.ts",
    /* mock models and services folder */
    "(assets|models|services)": "<rootDir>/tests/mocks/fileMock.ts",
  },
};
