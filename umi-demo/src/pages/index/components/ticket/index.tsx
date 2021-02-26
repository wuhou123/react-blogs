import styles from './index.module.scss'
import React, { useEffect, useRef } from 'react'
import { Modal } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'

const Ticket = () => {
  const openDialog = () => {
    Modal.info({
      icon: <></>,
      getContainer: document.getElementById('dialog-ticket'),
      content: (
        <div className={styles.dialogCon}>
          <Scrollbars
            style={{ height: '100%' }}
            renderThumbVertical={() => (
              <div className={styles.thumbVertical}></div>
            )}>
            <div className={styles.ruleText}>
              <p>
                2021年完美电竞嘉年华将于1月16-17日在上海杨浦滨江船厂举行，本次活动将对CSGO，DOTA2核心用户开放现场免费逛展。门票领取将通过完美电竞官方社区【完美世界电竞APP】进行发放，玩家在完成实名认证后领取门票，即可取得逛展资格。
              </p>
              <p className={styles.ruleTitle}>1. 资格限制</p>
              <p>
                每位用户需要下载完美世界电竞APP，在活动页面进行门票领取。需要满足如下条件：
              </p>
              <p>
                DOTA2：12月22日中午12:00前，历史国服登陆天数大于等于40天，或票务领取账号为PLUS会员状态。
              </p>
              <p>
                CSGO：12月22日中午12:00前，完成过荣耀认证，或者曾进行过一次国服比赛的玩家。
              </p>
              <p>
                竞技平台：12月22日中午12:00前，完成过PWA绿色认证且进行过3场PWA天梯匹配的玩家。
              </p>
              <p>
                符合条件的用户可在12月24日12:00开始填写身份信息进行门票领取。
              </p>
              <p className={styles.ruleTitle}>2. 实名证件登记</p>
              <p>
                身份信息一经填入后不可修改，请反复确认后再提交。每人的身份信息只可提交一次。首届完美电竞嘉年华入场的唯一凭证为本人有效身份证，无实体门票或电子票据。需通过有效身份证件和购票信息验证一致后方可实名入场。
              </p>
              <p className={styles.ruleTitle}>3. 门票领取</p>
              <p>
                活动举办时间为2021年1月16日-1月17日，每位用户只可领取一次单日票，选择对应的入场时间段进行入场。请查看活动介绍和对应的活动时间表，选定自己合适的时间。本次活动的举办地点在上海·杨浦，建议您反复确认可以来到现场之后再进行门票领取，友好看展，拒绝咕咕。
              </p>
              <p className={styles.ruleTitle}>4. 同行人</p>
              <p>
                每位用户领票时可以选择1张或2张门票，单人出行则只需要填写个人身份证，选择双人出行则需要将领票数量调整为2张，并填写双人身份证。每个自然人的身份信息只能在系统中唯一存在，不可重复。
              </p>
              <p className={styles.ruleTitle}>注意事项：</p>
              <p>
                1.
                由于疫情期间，现场的人流需要动态控制。如果您领取后有事不能来，请务必在2021年1月10日前在页面上取消领取，以便我们能将票重新发放给其他想来的玩家。如果没有取消领取且没有到场的用户，您在完美世界电竞APP的信用将会下降，可能会影响您之后相关的赛事活动体验的参与资格。
              </p>
              <p>
                2.
                本次活动遵守当地公安的防疫规范，对场馆内的实时观众人数进行动态管理。建议您提前确认您来的时间段，并在准确时间段内尽早到来。如果场馆内人数众多，我们会及时对逛展观众进行引导疏散，同时为等待观众提供外场娱乐游玩体验。
              </p>
            </div>
          </Scrollbars>
        </div>
      ),
    })
  }

  return (
    <div className={styles.ticketConfig} id="position1">
      <img
        src="https://img.csgo.com.cn/csgo/80/46/8046da3128c33ab3774f5baba3d7ed5b1607423151.png"
        alt=""
        className={styles.title}
      />
      <div className={styles.content}>
        <img
          src="https://img.csgo.com.cn/csgo/5d/f0/5df0388d0146e4805826275ff3b9c4ef1607423226.png"
          alt=""
          className={styles.pic}
        />
        <p className={styles.scan}>
          <a onClick={() => openDialog()}>
            点击查看
            <span className="text-white">
              《完美电竞嘉年华门票领取及入场须知》
            </span>
          </a>
        </p>
      </div>
      <div className={styles.step}>
        <img
          src="https://img.csgo.com.cn/csgo/66/46/6646145f14d1d4da41da6c755b3d99bc1608101103.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Ticket
