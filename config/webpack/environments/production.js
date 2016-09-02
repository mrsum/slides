'use strict';

// Depends
var config = require('../global');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Production config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of proruction settings
 */
module.exports = (ENV, ROOT) => {
  let Config = config(ENV, ROOT);
  let Plugins = Config.plugins;
  let Loaders = Config.module.loaders;

  Loaders.push({
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader!stylus-loader')
  });

  Plugins.push(new ExtractTextPlugin('assets/css/[name].[chunkhash].css', { allChunks: true }));

  return {
    context: ROOT,
    debug: false,
    devtool: 'source-map',
    output: {
      publicPath: ''
    },
    plugins: Plugins,
    module: {
      loaders: Loaders
    }
  };
};
