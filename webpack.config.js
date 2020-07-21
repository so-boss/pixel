const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
//const TextExtractPlugin = require('extract-text-webpack-plugin');
//const HTMLExtractor = new TextExtractPlugin('[name].html');
// const extractor = require("extract-loader");

// const pathToMainJs = require.resolve("./src/index.js");
// const pathToIndexHtml = require.resolve("./index.html");

module.exports = {
  mode:"development",
  target:"node",
  entry: [
    "./src/module.js"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:"module.js",
    library: "pixel",
  },
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_',
  //   },
  // },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          'svgo-loader',
        ]
      },
      {
        test: /\.css|.pcss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/i,
        use: [
          "html-loader"
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    //HTMLExtractor,
    //new SVGSpritemapPlugin("../assets/icons/standard/*.svg")
    new SVGSpritemapPlugin('../assets/icons/standard/*.svg', {
      output: {
        svg: {
          // Disable `width` and `height` attributes on the root SVG element
          // as these will skew the sprites when using the <view> via fragment identifiers
          sizes: false,
        },
        filename:"/dist/sprite.svg"
      },
      sprite: {
        generate: {
          // Generate <use> tags within the spritemap as the <view> tag will use this
          use: true,

          // Generate <view> tags within the svg to use in css via fragment identifier url
          // and add -fragment suffix for the identifier to prevent naming colissions with the symbol identifier
          // view: '-fragment',

          // Generate <symbol> tags within the SVG to use in HTML via <use> tag
          symbol: true
        },
      },
      // styles: {
      //   // Specifiy that we want to use URLs with fragment identifiers in a styles file as well
      //   format: 'fragment',
      //
      //   // Path to the styles file, note that this method uses the `output.publicPath` webpack option
      //   // to generate the path/URL to the spritemap itself so you might have to look into that
      //   filename: path.join(__dirname, 'src/scss/_sprites.scss')
      // }
    })
  ]
};
