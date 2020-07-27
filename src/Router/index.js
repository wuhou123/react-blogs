import React from 'react'
import { ConfigProvider } from 'antd'
import Layouts from '@/pages/Layouts'
import zhCN from 'antd/es/locale/zh_CN'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from '@/pages/Home'
import CacheRoute from 'react-router-cache-route'
import Loadable from '@/utils/loadable'

const Detail = Loadable(() => import('@/pages/Detail'))
const About = Loadable(() => import('@/pages/About'))
const Test = Loadable(() => import('@/pages/Test'))

export const navs = [
  // {
  //   path: '/',
  //   name: '首页',
  //   component: Home,
  // },
  {
    path: '/detail',
    name: '详情页',
    component: Detail,
  },
  {
    path: '/test',
    name: '实验室',
    component: Test,
  },
  {
    path: '/about',
    name: '关于',
    component: About,
  },
]

export default function () {
  return (
    <Router>
      <Route
        path="/"
        component={() => (
          <ConfigProvider locale={zhCN}>
            <Layouts>
              <CacheRoute exact path="/" component={Home} when="always" />
              <Switch>
                {navs.map((item) => (
                  <Route {...item} key={item.path} exact />
                ))}
                <Redirect to="/" />
              </Switch>
            </Layouts>
          </ConfigProvider>
        )}
      />
    </Router>
  )
}
