import canvas from '@/views/canvas'
import elec from '@/views/checkElec/Electric'
import login from '@/views/login'

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
