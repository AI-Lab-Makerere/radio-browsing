import Vue from 'vue'
import Router from 'vue-router'
import Radio from '@/components/radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Radio',
      component: radio
    }
  ]
})
