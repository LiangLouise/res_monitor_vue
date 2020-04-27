import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  mounted() {
    this.$store.dispatch('Mem/initMemData')
    this.$store.dispatch('Cpu/initCpuData')
  },
  beforeDestroy() {
    this.$store.dispatch('Mem/clearInterval')
    this.$store.dispatch('Cpu/clearInterval')

  }
}).$mount('#app')


