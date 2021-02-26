import http from './http'
import * as utils from './index'

interface IParams {
  [name: string]: any
}

const prefix = 'https://api.tophub.fun/v2/'

export default {
  //新闻
  getDouyin(params:IParams) {
    return http.get(`${prefix}/GetAllInfoGzip`,params)
  },
    //推荐
  getRecoment(params:IParams) {
    return http.get('/festival2020/act',params)
  },
}
