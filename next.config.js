
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config, { isServer }) =>  {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({silent: true}));
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}