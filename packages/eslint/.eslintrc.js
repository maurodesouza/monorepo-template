module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
