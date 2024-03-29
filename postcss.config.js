const path = require('path');
var cssMixins = require(path.join(__dirname, 'pcss/pixel/mixins/index.js')); //'pcss/pixel/mixins/index.js'

// const properties = require(path.join(__dirname, 'pcss/pixel/custom/properties.js')),
//   selectors = require(path.join(__dirname, 'pcss/pixel/custom/selectors.js')),
//   media = require(path.join(__dirname, 'pcss/pixel/custom/media.js'));

var presets = {
  properties:require(path.join(__dirname, 'pcss/pixel/custom/properties')),
  selectors:require(path.join(__dirname, 'pcss/pixel/custom/selectors')),
  media:require(path.join(__dirname, 'pcss/pixel/custom/media'))
}

var maps = {
  color:require(path.join(__dirname, 'pcss/pixel/maps/color')),
  font:require(path.join(__dirname, 'pcss/pixel/maps/font')),
  px:require(path.join(__dirname, 'pcss/pixel/maps/px'))
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-properties')({
      preserve:false,
      //importFrom: [
        // path.join(__dirname, 'pcss/dictionary/font.css'),
        // path.join(__dirname, 'pcss/dictionary/px.css'),
        // path.join(__dirname, 'pcss/dictionary/color.css'),
      //]
    }),
    require('postcss-preset-env')({
      preserve:false,
      importFrom: [
        presets.properties, presets.selectors, presets.media
      ],
      stage: 1,
      features: {
        'nesting-rules': true
      },
      autoprefixer: { grid: true }
    }),
    require('postcss-nested'),
    require('postcss-map')({
      //basePath: path.join(__dirname, 'lib/shared-styles/maps'),
      //maps: [ 'color.js', 'font.js', 'px.js' ]
      maps:[maps.color, maps.font, maps.px]
    }),
    require("postcss-mixins")({
      mixins: cssMixins
    }),
    require("postcss-flexbugs-fixes"),
    require('postcss-utilities')({
      centerMethod: 'flexbox'
    }),
    // require('autoprefixer'),
    // require('cssnano'),
    require('postcss-reporter')({ clearReportedMessages: false })
  ]
}
