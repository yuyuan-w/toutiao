import axios from 'axios'
import store from '@/store'
// axios.defaults.baseURL = 'http://toutiao.itheima.net'
// axios.defaults.timeout = 3000
const request = axios.create({
  timeout: 3000,
  baseURL: 'http://toutiao.itheima.net'
})

/** 请求拦截器
 * config是每一次请求的配置对象
 * 全局配置每次请求加上请求头
 */
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const {
      getters: { isLogin },
      state: { tokenObj }
    } = store
    if (isLogin) {
      config.headers.Authorization = `Bearer ${tokenObj.token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
export default request
