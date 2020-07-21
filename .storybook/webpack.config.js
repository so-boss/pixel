const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
   exclude:[path.resolve(__dirname, "/node_modules/")]
  });

  // config.module.rules.push({
  //   test: /\.css|.pcss$/,
  //   use: [
  //     'style-loader',
  //     { loader: 'css-loader', options: { importLoaders: 1 } }
  //   ]
  // })

  // Return the altered config
  return config;
};
