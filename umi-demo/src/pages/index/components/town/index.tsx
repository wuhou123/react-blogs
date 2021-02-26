import styles from './index.module.scss'
import React, { useEffect, useRef } from 'react'

const Town = () => {
  return (
    <div className={styles.recommentConfig} id="position4">
      <img
        src="https://img.csgo.com.cn/csgo/e7/66/e76631800cf4592e81df6e0ec4a6220b1607426495.png"
        alt=""
        className={styles.title}
      />
      <div className={styles.content}>
        <img
          src="https://img.csgo.com.cn/csgo/23/63/2363e4e2846b20dfc2a205179c4d5a4a1608290994.png"
          alt=""
          className={styles.bigImg}
          onClick={() =>
            window.open(
              'https://img.dota2.com.cn/file/70/4c/704cc6ff0691c7e1b536e5da3050ac761608440614.jpg',
              '_blank',
            )
          }
        />
        <img
          className={styles.tip}
          src="https://img.csgo.com.cn/csgo/8d/7f/8d7f7cbeb11930527c4e92ea01f2844b1608193990.png"
          onClick={() =>
            window.open(
              'https://img.dota2.com.cn/file/70/4c/704cc6ff0691c7e1b536e5da3050ac761608440614.jpg',
              '_blank',
            )
          }></img>
      </div>
      <img
        src="https://img.csgo.com.cn/csgo/71/b6/71b6b30364252f1848d0d35bc5bb489a1607671598.png"
        alt=""
        className={styles.pointer}
        onClick={() =>
          window.open(
            'https://img.dota2.com.cn/file/70/4c/704cc6ff0691c7e1b536e5da3050ac761608440614.jpg',
            '_blank',
          )
        }
      />
      <img
        src="https://img.csgo.com.cn/csgo/8b/e2/8be20cf659643d1463df31b060491c121607674296.gif"
        alt=""
        className={styles.gifTop}
      />
    </div>
  )
}

export default Town
