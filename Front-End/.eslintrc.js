module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'warn',
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    'react/prefer-stateless-function': [1, { 'ignorePureComponents': true }],
    "import/prefer-default-export": "off",
    "global-require":"off",
    "no-param-reassign":"off",
    "consistent-return": ["off"],
    "react/jsx-no-bind":"off",
    "react/forbid-prop-types":"off",
  },
};
