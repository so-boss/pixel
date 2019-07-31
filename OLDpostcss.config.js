const path = require('path');

// const variables = require('./src/lib/shared-styles/variables');
// const color = require('./src/lib/shared-styles/maps/color');
// const tokens = require('./src/lib/shared-styles/tokens');
const mixins = require(path.join(__dirname, 'src/lib/shared-styles/mixins/index.js'));
//const maps = '@web-core/shared-styles/maps'

// const postCssOptions = {
//   features: {
//     customMedia: {
//       extensions: variables.mediaQueries,
//     },
//     customProperties: {
//       variables: Object.assign(color, variables.properties),
//     },
//   },
// };

/*
module.exports = [
  // require('postcss-map')({
  //   basePath: maps,
  //   maps: [ 'font.json' ],
  // }),
  //require('postcss-simple-vars')(postCssOptions.features.customProperties),
  require('postcss-nested'),
  require('postcss-import'),
  require('postcss-mixins')({
    mixins: mixins,
  }),
  require('postcss-apply')({ sets: tokens }),
  require('postcss-cssnext')(postCssOptions),
  //require('postcss-preset-env')(postCssOptions),
  require('postcss-reporter')({ clearReportedMessages: true }),
];
*/
module.exports = {
  parser:"sugarss",
  plugins: [
    require('postcss-import'),
    require('postcss-mixins')({
      mixins: mixins,
    }),
    require('postcss-nested'),
    require('postcss-apply'),
    require('postcss-preset-env'),
    require('postcss-reporter'),
    // require('postcss-modular-scale'),
    // require('postcss-custom-properties')({
    //   preserve: true,
    // }),
  ]
};

//module.exports.postCssOptions = postCssOptions;
