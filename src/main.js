import Vue from 'vue'
import App from './App'
import '@/api'
import * as utils from '@/utils/index'

Vue.config.productionTip = false

Vue.prototype.$parseTime = utils.parseTime

App.mpType = 'app'

const env = process.env.NODE_ENV
// import Vconsole from 'vconsole'
// if (env === 'development') {
//   const vconsole = new Vconsole()
//   Vue.use(vconsole)
// }

const app = new Vue({
  ...App,
})
app.$mount()
