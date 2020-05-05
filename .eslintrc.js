module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'ibm'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
