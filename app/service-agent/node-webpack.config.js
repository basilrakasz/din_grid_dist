// needed because sap-cloud-sdk has dependencies to native node modules which need to be polyfilled
// somehow more than listed in documentation (maybe due to different versions?)

const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      'crypto': require.resolve('crypto-browserify'),
      'stream': require.resolve('stream-browserify'),
      'zlib': require.resolve('browserify-zlib'),
      'path': require.resolve('path-browserify'),
      'os': require.resolve('os-browserify/browser'),
      'http': require.resolve('stream-http'),
      'https': require.resolve('https-browserify'),
      'assert': require.resolve('assert'),
      'url': require.resolve('url'),
      'constants': require.resolve('constants-browserify')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG),
      'process.type': JSON.stringify(process.type),
      'process.version': JSON.stringify(process.version)
    })
  ]
};
