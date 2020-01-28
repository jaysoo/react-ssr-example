const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function getConfig(config) {
  config = require('@nrwl/react/plugins/webpack')(config);
  delete config.context;
  config.module.rules.forEach(r => {
    if (r.test.test('hello.css')) {
      r.oneOf = [
        {
          test: /\.module\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]'
                },
                importLoaders: 1
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                ident: 'extracted',
                plugins: () => [require('autoprefixer')]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: false
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                ident: 'extracted',
                plugins: () => [require('autoprefixer')]
              }
            }
          ]
        }
      ];
    }
  });
  return config;
};
