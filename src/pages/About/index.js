import React from 'react'
import { Timeline } from 'antd'
import styles from './index.module.less'

import logo from '@/assets/images/logo.png'
const About = (props) => {
  return (
    <div className={styles['about-container']}>
      <Timeline mode="right">
        <Timeline.Item
          label="2020-07-16"
          dot={<img src={logo} className={styles['logo']} alt="logo" />}
        >
          <p>第五次折腾了，</p>
          <p>React Hooks重构，</p>
          <p>练手吧，以供后续研究！！！</p>
        </Timeline.Item>
        <Timeline.Item label="2019-11-01">
          <p>第四版</p>
          <p>nuxt+ts重构，</p>
          <p>友好了SEO和首屏渲染，</p>
          <p>进度80%</p>
          <p>太难，几近放弃！</p>
        </Timeline.Item>
        <Timeline.Item label="2019-09-12">
          <p>第三版</p>
          <p>Vue+Koa+Mysql+Nginx</p>
          <p>在学生机上搭建完毕，</p>
          <p>服务器已到极限!</p>
        </Timeline.Item>
        <Timeline.Item label="2018-04-15">
          <p>第二版</p>
          <p>使用Hexo搭建，</p>
          <p>静态化，更新太难！</p>
        </Timeline.Item>
        <Timeline.Item label="2017-10-08">
          <p>第一版</p>
          <p>JQ模板一套，能用就行</p>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default About
