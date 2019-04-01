import axios from 'axios'
import store from '@/store'
import router  from '../router';
import baseUtil from './baseUtil'

// create an axios instance
console.log('[process.env.NODE_ENV]',process.env.NODE_ENV)
let baseUrl = process.env.NODE_ENV === 'production'?'http://127.0.0.1:9001':'http://192.168.2.115:9001'
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 30000, // request timeout
  method:'POST'
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  // console.log('[config]',config)
  if (store.getters.token) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['token'] = baseUtil.getStore("token")
  }
  // const url = document.location.href
  // config.headers['faceUrl'] = url;
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    // console.log('[res]',response)
    if (response.status !== 200) {
      // Message({
      //   message: res.msg,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      return Promise.reject('error')
    } else {
      if (res.code === -1) {
        // MessageBox.confirm('你已被登出，可以重新登录，或者取消继续留在该页面', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     location.reload() // 为了重新实例化vue-router对象 避免bug
        //   })
        // })
        store.dispatch('LogOut').then(() => {
            router.go(0)
        })
        // baseUtil.removeStore('token')
        // baseUtil.removeStore('user')
        // return Promise.reject('error')
      }else if (res.code == 1) {
        //统一处理异常提示
        // Message({
        //   message: res.msg,
        //   type: 'error',
        //   duration: 4 * 1000
        // })
        // return Promise.reject('error');
          return res;
      }
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  })

export default service