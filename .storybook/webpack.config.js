const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
   exclude:[path.resolve(__dirname, "/node_modules/")]
  });

  // Return the altered config
  return config;
};
