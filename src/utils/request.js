// #ifdef MP-WEIXIN
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
// #endif
// #ifndef MP-WEIXIN
var fly = require('flyio')
// #endif

//设置超时
fly.config.timeout = 30000
//设置请求基地址
fly.config.baseURL = 'https://s3.binfenyingyu.com/' // http请求地址
fly.config.body = {
  app_id: 'com.flipped.wxapp',
  build: '1',
  os: 'wxapp',
}

// 添加请求拦截器
fly.interceptors.request.use(
  (request) => {
    // 在发送请求之前做些什么
    // let token = uni.getStorageSync('aliToken')
    // if (token) {
    //   request.headers['token'] = token
    // }
    return request
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

fly.interceptors.response.use(
  (response) => {
    const res = response.data
    // 对响应数据做些事
    if (res.status === 1001) {
      return res
    } else {
      return Promise.reject(res.message || 'error')
    }
  },
  (error) => {
    uni.showToast({
      title: '网络错误',
      duration: 2000,
      icon: 'none',
    })
    return Promise.reject(error)
  }
)

export default fly
