import React, { useState } from 'react'
import { Input, Col, Row } from 'antd'
import { TagsTwoTone, CalendarTwoTone } from '@ant-design/icons'
import dayjs from 'dayjs'
import styles from './index.module.less'
import api from '@/utils/api'

const { Search } = Input

const Movie = (props) => {
  const [list, setList] = useState([])
  const handlerSearch = async (value) => {
    const res = await api.movieSeach({ kw: value })
    if (res.code === 1) {
      let { data } = res.data
      setList(data || [])
    }
  }

  return (
    <div className={styles['movie-config']}>
      <Search
        placeholder="SO一下"
        enterButton="SO"
        size="large"
        style={{
          width: '80%',
          textAlign: 'center',
          margin: '60px auto',
          display: 'block',
        }}
        onSearch={(value) => handlerSearch(value)}
      />
      <div className={styles['movie-container']}>
        <Row gutter={[16, 16]} justify="center">
          {list &&
            list.length > 0 &&
            list.map((item, index) => {
              const { label, name, pic, type, updateTime } = item
              return (
                <Col span={6} key={index}>
                  <div className={styles['card']}>
                    <div className={styles['card-img']}>
                      <img src={pic} alt="" />
                    </div>
                    <div className={styles['card-body']}>
                      <p className={styles['name']} title={name}>
                        {name}
                      </p>
                      <p className={styles['label']}>{label}</p>
                      <div className={styles['card-footer']}>
                        <p>
                          <TagsTwoTone />
                          {type}
                        </p>
                        <p>
                          <CalendarTwoTone />
                          {dayjs(updateTime * 1000).format('YYYY-MM-DD')}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
        </Row>
      </div>
    </div>
  )
}

export default Movie
