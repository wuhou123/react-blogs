import path from 'path'

export default {
  chunks: ['vendors', 'umi'],
  chainWebpack(config) {
    config.module
      .rule('jsx-px2rem-loader')
      .test(/\.js$/)
      .exclude.add([
        path.resolve('../src/pages/.umi'),
        path.resolve('node_modules'),
      ])
      .end()
      .use('../loader/jsx-px2rem-loader')
      .loader(path.join(__dirname, '../loader/jsx-px2rem-loader'))
  },
}
