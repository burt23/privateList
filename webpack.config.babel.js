const  { resolve }  = require('path');
// var SRC_DIR = path.join(__dirname, '/react/src');
// var DIST_DIR = path.join(__dirname, '/react/dist');


module.exports = env => {
  return {
    context: resolve('react/src'),
    entry: './index.jsx',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
       loaders: [{ test : /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ }]
    }
  }
}


// module.exports = {
//   context
//   entry: resolve('react/src/index.js'),
//   output: {
//     filename: 'webpack.js',
//     path: path(src),
//   }
// }