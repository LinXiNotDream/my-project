import canvas from '@/pages/canvas/index'
import elec from '@/pages/checkElec/Electric'
import login from '@/pages/subhome/login/index'

import HomePage from './home'

var routes = [
  {
    path: '/',
    name: 'canvas',
    component: canvas
  }, {
    path: '/elec',
    name: 'elec',
    component: elec
  }, {
    path: '/login',
    name: 'login',
    component: login
  },
  ...HomePage
]

export default routes
