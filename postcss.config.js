const fs = require('fs');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 2,
    }),
    require('postcss-nested'),
    require('postcss-inline-svg'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-modules')({
      camelCase: true,
      generateScopedName: '[local]___[hash:base64:5]',
      hashPrefix: 'br',
      // getJSON: (cssFileName, json, outputFileName) => {
      //   console.log('outputFileName', outputFileName);
      //   const cssName = path.basename(cssFileName, '.css');
      //   const jsonFileName = path.resolve('./build/' + cssName + '.json');
      //   fs.writeFileSync(jsonFileName, JSON.stringify(json));
      // },
    }),
  ],
};
