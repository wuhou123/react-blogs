import styles from './index.module.scss'
import React, { useState } from 'react'

const Navs = ({ tools }: any) => {
  // const [activeIndex, setActiveIndex] = useState(-1)
  const tabs = [
    {
      name: '首页',
    },
    {
      name: '测试1',
    },
  ]

  const handlerSet = (index: number) => {
    // setActiveIndex(index)
    tools.setTab(index)
    tools.goTab(index)
  }

  const shareContent = {
    url: location.href,
    title: '完美电竞嘉年华邀你来玩！完聚狂欢，痛快约战！',
    pic:
      'https://img.dota2.com.cn/file/c1/70/c170fd10afbe632d0df0d478a0be3ace1607930928.jpg',
  }
  const hanlderShare = (index: number) => {
    if (index === 0) {
      window.wmShare.sinaT(
        shareContent.url,
        shareContent.title,
        shareContent.pic,
      )
    } else if (index === 1) {
    } else if (index === 2) {
      window.wmShare.qqZone(
        shareContent.url,
        shareContent.title,
        shareContent.pic,
      )
    } else if (index === 3) {
      window.wmShare.baiduT(
        shareContent.url,
        shareContent.title,
        shareContent.pic,
      )
    }
  }

  return (
    <nav className={styles.navMain}>
      {/* <img
        src="https://img.csgo.com.cn/csgo/80/f7/80f79cce9d1ce5633a46673ccfc13e271608099016.png"
        alt="logo"
        className={styles.miniLogo}
      /> */}
      <ul className={styles.navUl}>
        {tabs.map((item, index) => (
          <li
            key={index}
            className={
              tools.tab === index
                ? tools.tab === 0
                  ? styles.active1
                  : styles.active2
                : ''
            }
            onClick={() => handlerSet(index)}>
            {item.name}
          </li>
        ))}
      </ul>
      {/* <ul className={styles.share}>
        <p>分享页面：</p>
        {Array(4)
          .fill({})
          .map((v, index) => {
            return <a key={index} onClick={() => hanlderShare(index)}></a>
          })}
      </ul> */}
    </nav>
  )
}

export default Navs
