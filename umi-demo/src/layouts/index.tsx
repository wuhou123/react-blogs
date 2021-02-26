import React, { ReactNode } from 'react'
import { connect, IState } from 'umi'
import { Spin, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import '@/assets/css/global.scss'
import '@/utils/share'
interface IProps {
  children: ReactNode
  showLoading: boolean
}

const Layout = ({ children, showLoading }: IProps) => {
  return (
    <>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
      {showLoading && (
        <div id="loading">
          <Spin size="large" />
        </div>
      )}
    </>
  )
}

export default connect(({ index }: { index: IState }) => {
  return {
    showLoading: index.showLoading,
  }
})(Layout)
