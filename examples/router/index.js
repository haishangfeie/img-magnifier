import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@@/demo1/demo1'
import demo2 from '@@/demo2/demo2'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      redirect: '/demo1'
    },
    {
      path: '/demo1',
      component: demo1
    },
    {
      path: '/demo2',
      component: demo2
    }
  ]
})
