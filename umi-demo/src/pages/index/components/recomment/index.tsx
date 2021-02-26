import styles from './index.module.scss'
import React, { useEffect, useState } from 'react'
import { connect } from 'umi'
import { Modal } from 'antd'

const mapState = (state: any) => {
  const { index } = state
  return {
    baseInfo: index.baseInfo,
  }
}

interface IProps {
  baseInfo: any
}

const Recomment = ({ baseInfo }: IProps) => {
  const [list, setList] = useState([])

  useEffect(() => {
    if (!baseInfo.recommend || list.length) return
    setList(baseInfo.recommend)
    if (baseInfo.recommend.length > 1) {
      // 轮播初始化标志
      window.isInitCarcous = baseInfo.recommend.length
    }
  }, [baseInfo])

  const openDialog = (item: any) => {
    Modal.info({
      icon: <></>,
      getContainer: document.getElementById('dialog'),
      content: (
        <div className={styles.dialogCon}>
          <p className={styles.dtitle} title={item.title}>
            {item.title}
          </p>
          <div
            className={styles.intro}
            dangerouslySetInnerHTML={{
              __html: item.intro,
            }}></div>
          <img src={item.image} alt="" className={styles.dimg} />
        </div>
      ),
    })
  }

  const hanlderOpen = (v: any) => {
    openDialog(v)
  }

  return (
    <div className={styles.recommentConfig} id="position2">
      <img
        src="https://img.csgo.com.cn/csgo/71/88/718817a15b3719e06cc0cbf3b1debb7e1607424224.png"
        alt=""
        className={styles.title}
      />
      {/* className={active === index ? 'rotateOutUpLeft animated' : ''} */}
      <div className={styles.content}>
        <ul id="stack_dian" className="stack stack--dian">
          {list.map((v: any, index: number) => (
            <li key={index} className="stack__item">
              <img src={v.image} alt="" onClick={() => hanlderOpen(v)} />
            </li>
          ))}
        </ul>
        {list.length > 1 && (
          <>
            <button
              className={['button--reject', styles.pre].join(' ')}
              data-stack="stack_dian"></button>
            <button
              className={['button--accept', styles.next].join(' ')}
              data-stack="stack_dian"></button>
          </>
        )}
        {list.length > 0 && (
          <img
            src="https://img.csgo.com.cn/csgo/71/b6/71b6b30364252f1848d0d35bc5bb489a1607671598.png"
            alt=""
            className={styles.pointer}
          />
        )}
      </div>
      <img
        src="https://img.csgo.com.cn/csgo/0c/d3/0cd3a033e02b51c3259a485bcf674d061607673991.gif"
        alt=""
        className={styles.gifTop}
      />
    </div>
  )
}
export default connect(mapState)(Recomment)
