// Read more here: https://github.com/okonet/lint-staged#using-js-functions-to-customize-tasks
module.exports = {
  // Test build on commit
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',

  '*.{ts,tsx,js,jsx}': () => {
    return [
      // Run eslint
      "eslint './src/**/*.{ts,tsx}' --fix",

      // Lint css
      "stylelint '**/*.pcss' --fix",
    ];
  },
};
