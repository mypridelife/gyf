import * as program from './program'
import Vue from 'vue'

const api = {
  ...program,
}

Vue.prototype.$api = api
export default api
