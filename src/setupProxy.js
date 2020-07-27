const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = proxy
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://www.wuhou123.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
