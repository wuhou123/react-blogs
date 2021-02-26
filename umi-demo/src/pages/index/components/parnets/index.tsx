import styles from './index.module.scss'
import React, { useEffect, useRef } from 'react'

const Parnets = () => {
  return (
    <div className={styles.recommentConfig} id="position7">
      <div className={styles.content}>
        <img
          src="https://img.csgo.com.cn/csgo/da/ea/daea49d64d2e2ba5949219fce2cd45371608541831.png"
          alt=""
        />
        <a
          href="https://pvp.wanmei.com/"
          className={styles.pvpBtn}
          target="_blank"></a>
        <img
          src="https://img.csgo.com.cn/csgo/71/b6/71b6b30364252f1848d0d35bc5bb489a1607671598.png"
          alt=""
          className={styles.pointer}
        />
      </div>
    </div>
  )
}

export default Parnets
