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
  const Nametab = () => {
    return (
      <ul className={styles.nameTab}>
        {names.map((v, index) => (
          <li
            key={index}
            className={activeName === index ? styles.active : ''}
            onClick={() => setActiveName(index)}>
            {v.name}
          </li>
        ))}
      </ul>
    )
  }

  const taskList = [
    [
      [
        { name: '11 : 00', intros: '入场' },
        { name: 'part 1', intros: 'CS:GO社区挑战赛' },
        { name: 'Part 2', intros: '《超级巴基球》表演赛' },
        { name: 'Part 3', intros: '城市挑战赛DOTA2总决赛' },
        { name: 'Part 4', intros: '2020校园解说孵化总决赛' },
        { name: 'Part 5', intros: '明星表演赛' },
        { name: '', intros: '实际时间以现场为准' },
      ],
      [
        { name: '11 : 00', intros: '入场' },
        { name: 'part 1', intros: 'DOTA2社区挑战赛' },
        { name: 'Part 2', intros: '展台巡礼' },
        { name: 'Part 3', intros: '城市挑战赛CS:GO总决赛' },
        { name: 'Part 4', intros: '展台巡礼' },
        { name: 'Part 5', intros: '明星表演赛' },
        { name: '', intros: '实际时间以现场为准' },
      ],
    ],
    [
      [
        { name: '辉耀瞬间', intros: '完成辉耀印记的收集，拔起辉耀' },
        { name: '不朽盾之梦', intros: '身临其境感受TI赛场的氛围' },
        { name: '肉山巢穴', intros: '偷尝肉山的奶酪时小心不要激怒它' },
        { name: '信仰痛车展', intros: '机车跑车正在等你为信仰飞驰一次' },
        { name: '破次元绝招', intros: '体验施法英雄技能的快乐' },
        { name: '知识之书', intros: '武装你的应该是知识' },
        { name: '海象神拳！', intros: 'Fight me！快来巨牙海民的拳击馆' },
        { name: '路人王挑战', intros: '1V1 solo赛，擂主将挑战神秘嘉宾' },
        { name: '多重施法', intros: '体验食人魔魔法师的精怪玻瓶' },
        { name: '五人齐', intros: '进入TP光柱，Show出你的特殊传送动作' },
        { name: '', intros: '更多精彩，现场等你' },
      ],
      [
        {
          name: 'CSGO血统验证',
          intros: '全场打卡后的最终挑战，开箱验证你的血统',
        },
        { name: '异次元心动', intros: '古堡龙姬破次元壁带来心动体验' },
        { name: '紧急拆弹！', intros: '最终CT挑战：紧急拆弹' },
        { name: '性感悍匪', intros: '性感老K突袭现场' },
        { name: '枪神挑战', intros: '是不是枪男用分说话' },
        { name: '赏你麻辣烫！', intros: 'A队附体爆弹狂魔' },
        { name: '真人RUSH B!', intros: '体验实景RUSHB突发神秘事件' },
        { name: '淬火、传说', intros: '巨型爪子刀等你打卡' },
        { name: '扭蛋追梦机', intros: '追梦少年扭一扭' },
        { name: '', intros: '更多精彩，现场等你' },
      ],
      [
        {
          name: '1V1挑战赛',
          intros: '进行1V1擂台赛，挑战明星5V5对战',
        },
        { name: '蒸汽平台', intros: '打卡体验蒸汽平台实验室' },
        { name: '灭神斩杀', intros: '超度违规行为，净化游戏环境！' },
        { name: '元气投篮', intros: '汇聚元气，只为这一投！' },
        { name: '战力测评', intros: '谁的战力爆表，谁又是战五渣？' },
        { name: '', intros: '更多精彩，现场等你' },
      ],
    ],
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
    <div className={styles.recommentConfig} id="position5">
      <img
        src="https://img.csgo.com.cn/csgo/77/39/7739d70f3522be83466e56aafb994e041607427065.png"
        alt=""
        className={styles.title}
      />
      <div className={styles.content}>
        <Nametab />
        <Datetab />
        <ul className={[styles.table, styles['table' + activeName]].join(' ')}>
          <li className={styles.hd}>
            <span>{['阶段', '活动名称'][activeName]}</span>
            <span>{['内容', '活动介绍'][activeName]}</span>
          </li>
          <ul
            className={[styles.tableContent, 'cscrollbars'].join(' ')}
            ref={config}>
            <Scrollbar
              style={{ height: '100%' }}
              ref={scrollEr}
              onMouseEnter={() => (window.scrollStop = true)}
              onMouseLeave={() => (window.scrollStop = false)}>
              {(taskList[activeName][activeDate] || []).map(
                (item: any, index: number) => (
                  <li key={index}>
                    <span>{item.name}</span>
                    <span>{item.intros}</span>
                  </li>
                ),
              )}
            </Scrollbar>
          </ul>
        </ul>
      </div>
      <img
        src="https://img.csgo.com.cn/csgo/28/22/2822cc62749cdad07c52ace882c38cac1607674705.gif"
        alt=""
        className={styles.gifTop}
      />
    </div>
  )
}

export default Research
