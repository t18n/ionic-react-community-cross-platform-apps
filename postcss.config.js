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
            '--viewport-tablet': '(width >= 48em)' /* 768px */,
            '--viewport-desktop': '(width >= 80em)' /* 1280px */,
            '--viewport-desktopLarge': '(width >= 100em)' /* 1600px */,
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
      camelCase: true,
      generateScopedName: '[local]___[hash:base64:5]',
      hashPrefix: 'br',
      globalModulePaths: [path.resolve(__dirname, './src/styles')],
    }),
  ],
};
