import React, { useState, useEffect, useCallback } from 'react'
import { Skeleton, List, Space, Button, Tag, Tabs } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, EyeOutlined } from '@ant-design/icons'
import LazyLoad from 'react-lazyload'
import api from '@/utils/api'
import 'antd/lib/button/style/index.css'

const { TabPane } = Tabs

const Home = (props) => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [tabList, setTabList] = useState([{ name: '全部', id: '' }])
  const [tabIndex, setTabIndex] = useState(0)
  const [list, setList] = useState([])
  const keyword = props.location.params ? props.location.params.keyword : ''

  const getArticals = async (page = 1, id) => {
    setPage(page)
    setLoading(true)
    setTabIndex(keyword ? 0 : tabIndex)
    try {
      let res = await api.getArtical({
        page: page,
        category_id: Number(id) || null,
        keyword: keyword || null,
      })
      setLoading(false)
      if (res.code === 200) {
        let { data = [] } = res.data
        let { total_pages = 0 } = res.data.meta
        setTotalPage(total_pages)
        if (page === 1) setList(data)
        else setList([...list, ...data])
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getTags = useCallback(async () => {
    try {
      let res = await api.getTag()
      if (res.code === 200) {
        let { data = [] } = res
        setTabList([...tabList, ...data])
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    getTags()
  }, [getTags])

  useEffect(() => {
    getArticals()
  }, [keyword])

  const handlerLoadMore = () => {
    if (!totalPage || totalPage === page) return
    const pageNum = page + 1
    getArticals(pageNum)
  }
  const handlerChangeTab = (activeKey) => {
    if (activeKey === tabIndex) return
    setTabIndex(activeKey)
    getArticals(1, activeKey)
  }
  const IconText = ({ icon, text, className }) => (
    <Space className={className}>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  const loadMore = (
    <div
      style={{
        textAlign: 'center',
        marginTop: '12px',
        height: '32px',
        lineHeight: '32px',
      }}
    >
      {!totalPage || totalPage === page ? null : (
        <Button type="primary" size="small" onClick={() => handlerLoadMore()}>
          loading more
        </Button>
      )}
    </div>
  )

  return (
    <div className="App">
      <div>
        <Tabs type="card" onChange={(activeKey) => handlerChangeTab(activeKey)}>
          {tabList.map((item, index) => {
            return <TabPane tab={item.name} key={index}></TabPane>
          })}
        </Tabs>
        <Skeleton loading={loading}>
          <List
            itemLayout="vertical"
            size="large"
            locale={{ emptyText: '暂无文章' }}
            dataSource={list}
            loadMore={loadMore}
            renderItem={(item, index) => {
              const {
                title = '',
                category = '',
                author = '',
                browse = '',
                content = '',
                description = '',
                id = '',
                cover = '',
              } = item
              return (
                <List.Item
                  className="artical-list"
                  key={index}
                  actions={[
                    <Tag color="blue">{category.name}</Tag>,
                    <IconText
                      icon={UserOutlined}
                      text={author}
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={EyeOutlined}
                      text={browse}
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <LazyLoad once>
                      <img alt="logo" src={cover} />
                    </LazyLoad>
                  }
                >
                  <List.Item.Meta
                    title={<Link to={`/detail?id=${id}`}>{title}</Link>}
                    description={description}
                  />
                  {content}
                </List.Item>
              )
            }}
          />
        </Skeleton>
      </div>
    </div>
  )
}

export default Home
