import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/persional/index'
import Elec from '@/pages/checkElec/Electric'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/elec',
    name: 'Elec',
    component: Elec
  }]
})
