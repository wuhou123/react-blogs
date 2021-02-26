import { defineConfig } from 'umi'
import getCSSModuleLocalIdent from 'react-dev-utils/getCSSModuleLocalIdent'
import px2rem from 'postcss-plugin-px2rem'

const isProduction = process.env.NODE_ENV === 'production'
const preFixed = isProduction
  ? '/festival2020/index'
  : '//esports-yangfei.wanmei.com/festival2020/index'

const config = {
  publicPath: isProduction ? '/festival2020/index/' : '/',
  sass: {
    prependData: `@import "@/assets/css/base.scss";@import "@/assets/css/vars.scss";`,
  },
  cssLoader: {
    localsConvention: 'camelCase',
    importLoaders: 1,
    modules: {
      auto: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
  },
  extraPostCSSPlugins: [
    //https://www.npmjs.com/package/postcss-plugin-px2rem
    px2rem({
      rootValue: 192,
      minPixelValue: 2,
    }),
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  polyfill: {
    imports: ['core-js/stable'],
  },
  hash: true,
  favicon: '//esports.wanmei.com/images/libs/favicon-wanmei.ico',
  title: 'SEO尝试demo',
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
    },
    {
      name: 'wap-font-scale',
      content: 'no',
    },
    {
      name: 'browsermode',
      content: 'application',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge,chrome=1',
    },
    {
      name: 'force-rendering',
      content: 'webkit',
    },
    {
      name: 'renderer',
      content: 'webkit',
    },
  ],
  headScripts: [],
  links: [
    {
      rel: 'dns-prefetch',
      href: '//img.csgo.com.cn',
    },
    {
      rel: 'preconnect',
      href: 'https://img.csgo.com.cn',
    },
    {
      rel: 'stylesheet',
      href: `${preFixed}/css/component.css`,
    },
    {
      rel: 'prefetch',
      as: 'image',
      href:
        '//img.csgo.com.cn/csgo/bf/2f/bf2fa699ad58fdd4483a38b73ef730dd1608294436.png',
    },
  ],
  scripts: [
    {
      src: `${preFixed}/flexible.js`,
    },
    {
      src: `${preFixed}/dynamics.min.js`,
    },
    {
      src: `${preFixed}/main.js`,
    },
    {
      src: '//res.wx.qq.com/open/js/jweixin-1.2.0.js',
      defer: true,
    },
    {
      src: '//static.games.wanmei.com/public/js/stat.js',
      defer: true,
    },
    {
      src: '//static.games.wanmei.com/public/js/wmshare.js',
      defer: true,
    },
    {
      src: '//pwl.pwesports.cn/js/libs/ie_es5_shim.min.js',
      async: true,
    },
  ],
  targets: {
    ie: 9,
  },
  alias: {},
  proxy: {
    '/api': {
      target: 'http://esports-yangfei.wanmei.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    },
  },
  antd: {},
  dva: {},
  dynamicImport: {
    loading: '@/components/loading/index.tsx',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          exact: true,
          path: '/',
          component: './index/index.tsx',
        },
        {
          exact: true,
          path: '*',
          redirect: '/',
        },
      ],
    },
  ],
}

const ssr = {
  // ssr: { removeWindowInitialProps: true },
  // exportStatic: {
  //   htmlSuffix: true,
  // },
}

export default defineConfig(isProduction ? Object.assign(config, ssr) : config)
