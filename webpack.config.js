/**
 * Configure WebPack to transpile both server and client -side code
 */
(function () {
  var path = require('path');
  var fs = require('fs');
  var _ = require('lodash');

  var nodeModules = (function () {
    var nodeModules = {};
    fs.readdirSync('node_modules')
      .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
      })
      .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
      });
    return nodeModules;
  }());

  var babelLoader = {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react']
    }
  };

  var serverExport = {
    module: {
      loaders: [babelLoader]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      modulesDirectories: ['node_modules', 'src']
    },
    target: 'node',
    entry: './src/server/server.js',
    externals: nodeModules,
    output: {
      path: path.join(__dirname, 'output'),
      filename: 'server.js'
    }
  };
  
  var clientExport = {
    module: {
      loaders: [babelLoader]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      modulesDirectories: ['node_modules', 'src']
    },
    target: 'web',
    entry: './src/client/client.js',
    output: {
      path: path.join(__dirname, 'output/public'),
      filename: 'client.js'
    }
  };

  module.exports = [serverExport, clientExport];
}());