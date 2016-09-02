'use strict';

// Depends
var config = require('../global');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Development config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of development settings
 */
module.exports = (ENV, ROOT) => {
  let Config = config(ENV, ROOT);
  let Plugins = Config.plugins;
  let Loaders = Config.module.loaders;

  // enable stylus loader as css module
  Loaders.push({
    test: /.styl$/,
    loaders: ['style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader', 'stylus-loader']
  });

  Plugins.push(new ExtractTextPlugin('style.[hash].css', { allChunks: true }));

  return {
    context: ROOT,
    debug: true,
    devtool: 'eval',
    devServer: {
      contentBase: './',
      stats: 'minimal',
      inline: true
    },
    module: {
      preLoaders: [
        { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
        { test: /\.styl$/, loader: 'stylint' }
      ],
      loaders: Loaders
    },
    plugins: Plugins
  };
};
