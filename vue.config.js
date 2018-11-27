var path = require('path')

module.exports = {
  // lintOnSave: 'error',
  // baseUrl: './',
  // devServer: {
  //   host: '0.0.0.0'
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.join(__dirname, '/examples/components'),
        common: path.join(__dirname, '/examples/common')
      }
    }
  },
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}
