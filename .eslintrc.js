module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // Prettier as the last extension
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'simple-import-sort', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      'files': ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
    'react/prop-types': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': "off",
    '@typescript-eslint/no-empty-interface': 'off'
  }
};
