import http from './http'
export default {
  getArtical(params) {
    return http.get('/api/v1/article', params)
  },
  getTag(params) {
    return http.get('/api/v1/category', params)
  },
  getDetail(params) {
    return http.get(`/api/v1/article/${params.id}`, params)
  },
  submmitReply(params) {
    return http.post('/api/v1/comment', params)
  },
  reply(params) {
    return http.post('/api/v1/reply', params)
  },
  getAds(params) {
    return http.get('/api/v1/advertise', params)
  },
  movieSeach(params){
    return http.get('https://api.eyunzhu.com/api/vatfs/resource_site_collect/search',params)
  }
}
