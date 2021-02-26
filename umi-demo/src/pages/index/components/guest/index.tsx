import styles from './index.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useEffect, useState } from 'react'
import { connect } from 'umi'
import Slider from 'react-slick'

const mapState = (state: any) => {
  const { index } = state
  return {
    baseInfo: index.baseInfo,
  }
}
interface IProps {
  baseInfo: any
}

const Guest = ({ baseInfo }: IProps) => {
  const [listO, setListO] = useState([])
  const [listT, setListT] = useState([])
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
  }
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    rtl: true,
  }

  useEffect(() => {
    if (!baseInfo.guest) return
    const list1 = baseInfo.guest.filter((v: any) => v.intro == '1')
    const list2 = baseInfo.guest.filter((v: any) => v.intro == '2')
    setListO(list1)
    setListT(list2)
  }, [baseInfo])

  return (
    <div className={styles.recommentConfig} id="position3">
      <img
        src="https://img.csgo.com.cn/csgo/83/00/83003f444d09f6b947399c89c1c9d0891607424994.png"
        alt=""
        className={styles.title}
      />
      <div className={styles.content}>
        <ul className={styles.dota2}>
          <Slider {...settings}>
            {listO.map((v: any, index: number) => (
              <li key={index}>
                <img src={v.image} alt="" />
                <p>{v.title}</p>
              </li>
            ))}
          </Slider>
        </ul>
        <ul className={styles.csgo}>
          <Slider {...settings2}>
            {listT.map((v: any, index: number) => (
              <li key={index}>
                <img src={v.image} alt="" />
                <p>{v.title}</p>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  )
}

export default connect(mapState)(Guest)
