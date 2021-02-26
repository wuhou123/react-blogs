import styles from './index.module.scss'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd'
import api from '@/utils/api'
import { formatDate } from '@/utils'

const News = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [currentList, setCurrentList] = useState([])

  const getList = async () => {
    const res: any = await api.getNews({})
    const { success = '', data = [] } = res || {}
    if (success) {
      setList(data)
      const arr = data.slice(0, 5)
      setCurrentList(arr)
    }
  }
  useEffect(() => {
    getList()
  }, [])

  const handlerPage = (num: number) => {
    const arr = list.slice(5 * (num - 1), num * 5)
    setPage(num)
    setCurrentList(arr)
  }

  return (
    <div className={styles.recommentConfig} id="position6">
      <img
        src="https://img.csgo.com.cn/csgo/d0/22/d022feca7869cb386d83298f9aaf7ded1607427486.png"
        alt=""
        className={styles.title}
      />
      <div className={styles.content}>
        <ul className={styles.ul}>
          {currentList.map((v: any, index: number) => (
            <li key={index}>
              <a href={v.publish_url} target="_blank">
                <div
                  className={styles.label}
                  dangerouslySetInnerHTML={{
                    __html: v.title,
                  }}></div>
                <p className={styles.date}>
                  {formatDate(v.publishtime * 1000, 'MM/dd')}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <div className="pageCon">
          <Pagination
            current={page}
            defaultPageSize={5}
            total={list.length}
            showSizeChanger={false}
            hideOnSinglePage={true}
            onChange={page => handlerPage(page)}
          />
        </div>
      </div>
      <img
        src="https://img.csgo.com.cn/csgo/fd/fd/fdfdeb08adf042ab2c0ddba08ae6bd6b1607674938.gif"
        alt=""
        className={styles.gifTop}
      />
    </div>
  )
}

export default News
