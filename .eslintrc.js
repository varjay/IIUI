module.exports = {
  root: true,
  env: {
    "jest": true
  },
  extends: [
    "plugin:vue-libs/recommended",
    "prettier",
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
