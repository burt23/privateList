var path = require('path');
const { resolve } = require('path');
var SRC_DIR = path.join(__dirname, '/react/src/containers');
var DIST_DIR = path.join(__dirname, '/react/dist');

module.exports = {
  entry: `${SRC_DIR}/Root.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules: [
      {
        test : /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader : 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react']
          }
        }
      }
    ]
  }
};

// module.exports = env => {
  
// }