import qs from 'qs'
import axios from 'axios'
import * as utils from './index'

const isProduction = utils.isProduction
axios.defaults.baseURL = isProduction ? '/':'/api'
axios.defaults.timeout = 5000
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post[
  'Content-Type'
] = `application/x-www-form-urlencoded;charset=UTF-8`

// axios.defaults.transformResponse = function(data) {
//   const newData = typeof data === "string" ? eval(data) : data;
//   return newData;
// };

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    // if (res.data.status === 'success') {
    //   return Promise.resolve(res.data)
    // }
    // return null
    return Promise.resolve(res.data)
  },
  error => {
    return Promise.reject(error)
  },
)

export default {
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  post(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(params))
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}
