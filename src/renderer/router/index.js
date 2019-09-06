import Vue from 'vue'
import Router from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
