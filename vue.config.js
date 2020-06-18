'use strict'

module.exports = {
  devServer: {
    host: '0.0.0.0',
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/binfen': {
        target: 'http://s4.binfenyingyu.com',
        chagneOrigin: true,
        ws: true,
      },
    },
  },
}
