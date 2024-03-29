const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 2,
    }),
    require('postcss-nested'),
    require('postcss-custom-media')({
      importFrom: [
        {
          customMedia: {
            '--viewport-mobile': '(width >= 22.5em)' /* 360px * 640px */,
            '--viewport-tablet': '(width >= 48em)' /* 768px * 1024px */,
            '--viewport-desktop': '(width >= 85.375em)' /* 1366px * 768px */,
            '--viewport-desktopLarge': '(width >= 120em)' /* 1920px * 1080px */,
          },
        },
      ],
      preserve: false, // Remove custom media after parsing source to value
    }),
    require('postcss-inline-svg'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*', '!border-radius'],
      selectorBlackList: [],
      replace: true, // Replaces rules containing rems instead of adding fallbacks.
      mediaQuery: false, // Prevent px to be converted in media queries
      minPixelValue: 0, // Set the minimum pixel value to replace.
      exclude: /node_modules/i,
    }),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-modules')({
      localsConvention: 'camelCaseOnly', // Class names will be camelized, the original are removed
      generateScopedName: '[local]___[hash:base64:5]',
      hashPrefix: 'br',
      globalModulePaths: [path.resolve(__dirname, './src/styles')],
    }),
  ],
};
