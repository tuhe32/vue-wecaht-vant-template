const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const port = 8081 // dev port

module.exports = {
  outputDir: 'dist',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue:16,
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change /api/login => api/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:9001`,
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          // ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    // after: require('./mock/mock-server.js')
  },
};