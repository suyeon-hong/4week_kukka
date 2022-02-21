module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
  },
};
