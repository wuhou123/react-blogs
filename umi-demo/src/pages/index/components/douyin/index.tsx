import styles from './index.module.scss'
import React, { useEffect, useState, useRef } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'

interface nameProps {
  name: string
  opation: Array<string>
}

const Research = () => {
  const config: any = useRef(null)
  const [activeDate, setActiveDate] = useState(0)
  const [activeName, setActiveName] = useState(0)
  const scrollEr = useRef<any>(null)

  const Datetab = () => {
    return (
      <ul className={styles.dateTab}>
        {names[activeName].opation.map((v: any, index: number) => (
          <li
            key={index}
            className={activeDate === index ? styles.active : ''}
            onClick={() => setActiveDate(index)}>
            {v}
          </li>
        ))}
      </ul>
    )
  }

  const names: Array<nameProps> = [
    {
      name: '主舞台',
      opation: ['1月16日', '1月17日'],
    },
    {
      name: '部分展区活动',
      opation: ['DOTA2展区', 'CS:GO展区', '其他展区'],
    },
  ]

  const taskList = [
    { name: '辉耀瞬间', intros: '5小时' },
    { name: '不朽盾之梦', intros: '3小时' },
    { name: '肉山巢穴', intros: '5小时' },
    { name: '信仰痛车展', intros: '5小时' },
    { name: '破次元绝招', intros: '5小时' },
    { name: '知识之书', intros: '5小时' },
    { name: '海象神拳！', intros: '5小时' },
    { name: '路人王挑战', intros: '5小时' },
    { name: '多重施法', intros: '5小时' },
    { name: '五人齐', intros: '5小时' },
  ]

  useEffect(() => {
    setActiveDate(0)
  }, [activeName])

  useEffect(() => {
    if (!scrollEr.current) return
    scrollEr.current.scrollToTop()
  }, [activeName, activeDate])

  // 监听滚动
  const wheelScroll = (e: any) => {
    if (e.deltaY < 0) scrollEr.current.scrollToTop(e.deltaY)
    else scrollEr.current.scrollToBottom(e.deltaY)
  }
  useEffect(() => {
    window.listerEvent = wheelScroll
  }, [])

  return (
    <div className={styles.recommentConfig} id="position1">
      <div className={styles.title}>
        <h2>嘉宾介绍</h2>
        <h3>排名不分先后</h3>
      </div>
      <ul className={styles.content}>
        <Scrollbar
          style={{ height: '100%' }}
          ref={scrollEr}
          onMouseEnter={() => (window.scrollStop = true)}
          onMouseLeave={() => (window.scrollStop = false)}>
          {taskList.map((item: any, index: number) => (
            <li key={index}>
              <p className={styles.name}>{item.name}</p>
              <span className={styles.date}>{item.intros}</span>
            </li>
          ))}
        </Scrollbar>
      </ul>
    </div>
  )
}

export default Research
