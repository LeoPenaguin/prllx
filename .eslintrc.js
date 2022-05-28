module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  ignorePatterns: ['dist'],
};
