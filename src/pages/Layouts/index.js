import React, { useState, useEffect, useCallback, useRef } from 'react'
import { AppContext } from '@/Context'
import { Layout, Menu, List, Space, Card, Input, BackTop } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import {
  LinkOutlined,
  GithubOutlined,
  CompassOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  VideoCameraAddOutlined
} from '@ant-design/icons'
import styles from './index.module.less'
import api from '@/utils/api'

import logo from '@/assets/images/logo.png'

const { Header, Content, Footer, Sider } = Layout
const { Meta } = Card
const { Search } = Input
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
}

const Layouts = withRouter((props) => {
  //   const { pathname } = props.location
  //   const [activeObj, setActiveObj] = useState(types['/redeem-perfectcard'])
  //   useEffect(() => {
  //     if (!pathname) return
  //     let pathObj = types[pathname] || types['/redeem-perfectcard']
  //     setActiveObj(pathObj)
  //     document.title = pathObj.title
  //   }, [pathname])
  const [loading, setLoading] = useState(false)
  const [adList, setAdList] = useState([])
  const [loadTime, setLoadTime] = useState(0)

  const data = [
    {
      icon: <GithubOutlined />,
      text: 'Github',
      href: 'https://github.com/wuhou123',
    },
    {
      icon: <CompassOutlined />,
      text: '前端导航',
      href: 'http://navigation.wuhou123.cn/home',
    },
    {
      icon: <VideoCameraOutlined />,
      text: 'VIP视频应用',
      href: 'https://github.com/wuhou123/electron-videoPlayer/releases',
    },
  ]

  const menus = [
    {
      name: '文章',
      path: '/',
    },
    {
      name: '实验室',
      path: '/test',
    },
    {
      name: '关于',
      path: '/about',
    },
  ]

  const IconText = ({ icon, text }) => (
    <Space>
      {icon}
      {text}
    </Space>
  )

  const timer = useRef(null)
  const handlerSearch = (value) => {
    clearTimeout(timer.current)
    setLoading(true)
    props.history.push({
      pathname: '/',
      params: {
        keyword: encodeURI(value),
      },
    })
    timer.current = setTimeout(() => setLoading(false), 1000)
  }

  const getAds = useCallback(async () => {
    try {
      let res = await api.getAds()
      if (res.code === 200) {
        let { data = [] } = res.data
        setAdList(data)
      }
    } catch (e) {}
  }, [])

  useEffect(() => {
    getAds()
    return () => clearTimeout(timer.current)
  }, [getAds])

  let { pathname } = window.location
  // 加载时间
  const time = +new Date()
  document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
      console.log(+new Date() - time)
      setLoadTime(+new Date() - time)
    }
  })
  return (
    <AppContext.Provider value={loadTime}>
      <Layout className="layout-container">
        <Header className="layout-header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <Menu
            mode="horizontal"
            defaultSelectedKeys={[pathname] || ['/']}
            style={{ height: '64px' }}
          >
            {menus.map((val, valIndex) => {
              return (
                <Menu.Item key={val.path}>
                  <Link to={val.path}>{val.name}</Link>
                </Menu.Item>
              )
            })}
            <li className="ant-menu-item ant-menu-item-only-child" key="nokey">
              <a
                href="http://doc.wuhou123.cn/"
                rel="noopener noreferrer"
                target="_blank"
              >
                文档管理中心
              </a>
            </li>
          </Menu>
          <Search
            placeholder="搜索文章..."
            loading={loading}
            style={{ width: 200 }}
            allowClear
            onSearch={(value) => handlerSearch(value)}
          />
        </Header>

        <Layout className="layout-content">
        <Sider theme="light" className="aside-left" width={120}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}><Link to='/'>HOME</Link></Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraAddOutlined />}><Link to='/movie'>SO计划</Link></Menu.Item>
        </Menu>
        </Sider>
          <Content className="site-layout">
            <div className={styles['container']}>{props.children}</div>
          </Content>
          <Sider theme="light" className="aside-right">
            {adList &&
              adList.map((item, index) => {
                const { title = '', link = '' } = item
                return (
                  <a
                    className="ad-a"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={link}
                    key={index}
                  >
                    <Card
                      hoverable
                      style={{
                        marginBottom: 20,
                      }}
                      cover={
                        <img
                          alt="标题图片"
                          // src={`https://cdn.seovx.com/?mom=302&key=${index}`}
                          src={`https://api.ixiaowai.cn/api/api.php?key=${index}`}
                        />
                      }
                    >
                      <Meta title={title} />
                    </Card>
                  </a>
                )
              })}
            <div className={styles['nav-right']}>
              <List
                size="small"
                header={
                  <IconText
                    icon={
                      <LinkOutlined
                        style={{
                          color: '#2f8cf0',
                        }}
                      />
                    }
                    text={<h2>链接</h2>}
                    key="list-vertical-like-o"
                  />
                }
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <IconText
                      icon={item.icon}
                      text={
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.text}
                        </a>
                      }
                      key="list-vertical-like-o"
                    />
                  </List.Item>
                )}
              />
            </div>
          </Sider>
        </Layout>

        <Footer
          style={{
            textAlign: 'center',
            background: '#282c34',
            color: '#fff',
          }}
        >
          <p>Copyright ©wuhou123</p>
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://beian.miit.gov.cn/"
            >
              鄂ICP备18001086号-1.
            </a>
          </p>
        </Footer>
        <BackTop>
          <div style={style}>TOP</div>
        </BackTop>
      </Layout>
    </AppContext.Provider>
  )
})
export default Layouts
