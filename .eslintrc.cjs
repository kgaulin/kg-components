module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  ignorePatterns: ["**/vite-env.d.ts", "**/custom-queries.ts", "**/test-utils.ts"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      "jsx": true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
