import qs from 'qs'
import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'

axios.defaults.baseURL = isProduction ? '/' : '/api/'
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.data.status === 'success') {
      return Promise.resolve(res.data)
    }
    return res.data || res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(params))
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
