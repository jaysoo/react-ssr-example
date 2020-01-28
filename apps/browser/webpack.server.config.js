const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = function getConfig(config) {
  config = require('@nrwl/react/plugins/webpack')(config);
  delete config.context;
  config.target = 'node';
  config.optimization = {
    minimize: false,
    concatenateModules: false
  };
  config.externals = [nodeExternals()];
  config.output.libraryTarget = 'commonjs2';
  config.plugins.push(
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  );
  config.module.rules.forEach(r => {
    if (r.test.test('hello.css')) {
      r.oneOf = [
        {
          test: /\.module\.css$/,
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                onlyLocals: true,
                modules: {
                  localIdentName: '[local]--[hash:base64:5]'
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1
              }
            }
          ]
        }
      ];
    }
  });
  return config;
};
