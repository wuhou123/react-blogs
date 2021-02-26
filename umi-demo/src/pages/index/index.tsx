import styles from './index.module.scss'
import React, { useEffect, useRef, useState } from 'react'
import Navs from './components/navs'
import Banner from './components/banner'
import Douyin from './components/douyin'
import { connect, Dispatch } from 'umi'
import { Modal } from 'antd'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

window.Scrollbar = Scrollbar

//鼠标滚轮，横向滚动，触摸屏滚动
class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll'
  transformDelta(delta: any, fromEvent: any) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta
    }
    const { x, y } = delta
    // 滚轮在竖向上停止横向滚动
    if (window.scrollStop) {
      window.listerEvent({ deltaY: y })
      return { x: 0, y: 0 }
    }
    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
    }
  }
}

Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
interface IProps {
  dispatch: Dispatch
}

const Index = ({ dispatch }: IProps) => {
  const scrollCon: any = useRef(null)
  const [scroller, setScroller] = useState<any>({})
  const [show, setShow] = useState(true)
  const [tab, setTab] = useState(0)
  const [changeBg, setChangeBg] = useState(false)

  const initS = () => {
    window.scrollEr = Scrollbar.init(scrollCon.current, {
      alwaysShowTracks: true,
    })
    setScroller(window.scrollEr)
    const listener = (status: any) => {
      callback({ x: -status.offset.x })
    }
    window.scrollEr.addListener(listener)
  }

  useEffect(() => {
    dispatch({
      type: 'index/getDouyin',
      payload: {
        id: 148,
        page: 0,
      },
    })
    // 初始化滚动
    initS()
  }, [])

  const htmlFont: any = document.documentElement.style.fontSize
  const rote = 192 / parseFloat(htmlFont)
  const positionX = [0, -1530, -2046, -2790, -3619, -4342, -5065, -5094]
  // 监听滚动回调
  const callback = (pos?: any) => {
    // 左侧指示&背景变化
    setShow(pos.x >= 0)
    setChangeBg(pos.x * rote < -800)
    const index = positionX.findIndex(v => v <= Math.ceil(pos.x * rote))
    setTab(index < 0 ? 7 : index)
  }

  const goTab = (tab: number) => {
    if (!scroller.contentEl) return
    if (tab === 0) scroller.scrollTo(0, 0, 300)
    else scroller.scrollIntoView(document.getElementById('position' + tab))
  }

  const goHome = () => {
    scroller.scrollTo(0, 0, 300)
  }

  const openDialog = () => {
    Modal.info({
      icon: <></>,
      getContainer: document.getElementById('dialog-quan'),
      content: <></>,
    })
  }

  return (
    <div className={styles.page}>
      <Navs tools={{ tab, setTab, goTab }} />
      <div style={{ opacity: changeBg ? 0 : 1 }} className={styles.bannerCon}>
        <Banner />
      </div>
      {/* 左侧箭头和竖条 */}
      {show && !changeBg && <div className={styles.arrows}></div>}
      <div
        className={['mouse-wheel-wrapper', changeBg ? 'changebg' : ''].join(
          ' ',
        )}
        ref={scrollCon}>
        <div className="mouse-wheel-content">
          <div
            className={[styles.rightPage, changeBg ? styles.changebg : ''].join(
              ' ',
            )}>
            <Douyin />
            {/* 门条 */}
            <div
              className={[styles.leftDiv, changeBg ? 'fadeHide' : ''].join(
                ' ',
              )}></div>
          </div>
        </div>
      </div>

      {/* 右侧箭头和竖条 */}
      <div
        className={[styles.rightDiv, !changeBg ? 'fadeHide' : ''].join(' ')}
        onClick={() => goHome()}>
        <span className={styles.miniAllows}></span>
      </div>
    </div>
  )
}

export default connect()(Index)
