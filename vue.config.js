var path = require('path')
module.exports = {
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
      entry:
        process.env.NODE_ENV === 'update'
          ? 'update/main.js'
          : 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}
