import styles from './index.module.scss'
import React from 'react'
import { connect } from 'umi'

const mapState = (state: any) => {
  const { index } = state
  return {
    baseInfo: index.baseInfo,
  }
}

const Index = ({ baseInfo }: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.videoCover}>
          <video
            id="video-cover-video"
            autoPlay={true}
            muted={true}
            loop={true}>
            <source
              src="https://activity.hdslb.com/blackboard/static/20201028/b8f2b74d0482aed61472c7065dc1ed56/ictGGduDW.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* <img
          src="https://img.csgo.com.cn/csgo/e9/e3/e9e32576e105b386a5b526a3696663b71608294901.png"
          alt=""
          className={styles.logos}
        /> */}
      </div>
    </>
  )
}

export default connect(mapState)(Index)
