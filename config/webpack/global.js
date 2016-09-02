'use strict';

// Depends
var webpack       = require('webpack');
var autoprefixer  = require('autoprefixer-core');
var HtmlPlugin    = require('html-webpack-plugin');
var SvgStore      = require('webpack-svgstore-plugin');

/**
 * Global webpack config
 * @param  {[type]} _path [description]
 * @return {[type]}       [description]
 */
module.exports = (ENV, ROOT) => {
  // define local variables
  var dependencies  = Object.keys(require(`${ROOT}/package`).dependencies);
  // return objecy
  return {
    // entry points
    entry: {
      application: `${ROOT}/app/app.js`,
      vendors: dependencies
    },

    // output system
    output: {
      path: 'dist/',
      filename: 'assets/js/[name].[hash].js',
      chunkFilename: 'assets/js/[name].bundle.[chunkhash].js',
      publicPath: '/'
    },

    // resolves modules
    resolve: {
      extensions: ['', '.js', '.jsx', '.styl'],
      modulesDirectories: ['node_modules', 'components'],
      alias: {
        _app: `${ROOT}/app`,
        _components: `${ROOT}/components`,
        'rds-components': `${ROOT}/rds-components`
      }
    },

    // modules resolvers
    module: {
      loaders: [
        {
          test: /.json$/, loader: 'json'
        },

        {
          test: /\.css$/, loader: 'style-loader!css-loader'
        },

        {
          test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
          loaders: [`file?context=${ROOT}/app&name=assets/static/[ext]/[name].[hash].[ext]`]
        },

        {
          test: /\.(js|jsx)$/i,
          loader: 'babel',
          query: {
            presets: ['stage-0', 'react'],
            ignore: ['node_modules', 'bower_components']
          },
        }
      ]
    },

    postcss: function() {
      return [autoprefixer];
    },

    // load plugins
    plugins: [
      new SvgStore({
        // svgo options
        svgoOptions: {
          plugins: [
            { removeTitle: true }
          ]
        }
      }),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'assets/js/vendors.[hash].js'),
      // create instance for entrypoint index.html building
      new HtmlPlugin({
        title: 'Sum / Slides',
        chunks: ['application', 'vendors'],
        filename: 'index.html',
        template: `${ROOT}/app/assets/templates/layouts/index.html`
      })
    ]
  };
};
