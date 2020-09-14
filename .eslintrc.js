module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  globals: {
    use: true,
    browser: true,
  },
  rules: {
    'no-console': 'off',
  },
};
