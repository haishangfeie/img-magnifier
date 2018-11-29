import Vue from 'vue'
import App from './App.vue'
import router from './router'
import imgMagnifier from 'img-magnifier'
import 'img-magnifier/lib/img-magnifier.css'

Vue.config.productionTip = false
Vue.use(imgMagnifier)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
