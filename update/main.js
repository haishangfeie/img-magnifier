import Vue from 'vue'
import App from './App.vue'
import router from './router'
import imgMagnifier from '../packages/index'

Vue.config.productionTip = false
Vue.use(imgMagnifier)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
