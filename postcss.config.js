const postCssCustomProperties = require('postcss-custom-properties');
const postCssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postCssNested = require('postcss-nested');
const postCssBEM = require('postcss-bem');
const postCssCustomMedia = require('postcss-custom-media');
const postCssInlineSvg = require('postcss-inline-svg');
const postCssAutoprefixer = require('autoprefixer');
const postCssPxToRem = require('postcss-pxtorem');
const postCssNano = require('cssnano');

module.exports = {
  plugins: [
    postCssImport,
    postcssPresetEnv({ stage: 2 }),
    postCssNested,
    postCssBEM({
      defaultNamespace: undefined, // default namespace to use, none by default
      style: 'bem', // suit or bem, suit by default,
      shortcuts: {
        utility: 'util', //override at-rule name
      },
    }),
    postCssCustomProperties({ preserve: true }),
    postCssCustomMedia({
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
    postCssInlineSvg,
    postCssAutoprefixer,
    postCssPxToRem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*', '!border-radius'],
      selectorBlackList: [],
      replace: true, // Replaces rules containing rems instead of adding fallbacks.
      mediaQuery: false, // Prevent px to be converted in media queries
      minPixelValue: 0, // Set the minimum pixel value to replace.
      exclude: /node_modules/i,
    }),
    postCssNano({
      preset: [
        'default', // https://cssnano.co/guides/optimisations
        {
          discardComments: { removeAll: true },
          svgo: {
            plugins: [{ removeDoctype: false }],
          },
        },
      ],
    }),
    // TODO: Activate Postcss modiles
    // require('postcss-modules')({
    //   localsConvention: 'camelCaseOnly', // Class names will be camelized, the original are removed
    //   generateScopedName: '[local]___[hash:base64:5]',
    //   hashPrefix: 'br',
    //   globalModulePaths: [path.resolve(__dirname, './src/styles')],
    // }),
  ],
};
