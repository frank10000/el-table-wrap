import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
import ElTableWrap from '@/components/ElTableWrap'
// import ElTableWrap from '../lib/ElTableWrap.common'

Vue.config.productionTip = false

Vue.use(elementUI)
Vue.component('ElTableWrap', ElTableWrap)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
