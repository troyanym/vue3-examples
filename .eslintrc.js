module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ["error", "always"],
    'comma-dangle': ["error", {
      'arrays': "never",
      'objects': "always",
      'imports': "never",
      'exports': "never",
      'functions': "never"
    }],
    'space-before-function-paren': ['error', 'never'],
    'semi-spacing': 'error',
    'switch-colon-spacing': 'error',
    'arrow-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-empty': 'error',
  }
}
