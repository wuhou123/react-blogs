import React from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'

//通用的过场组件
const loadingComponent = () => {
  return (
    <div className="loading-container">
      <Spin tip="加载中..." delay={100} />
    </div>
  )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  })
}
