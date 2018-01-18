import canvas from '@/pages/canvas/index'
import elec from '@/pages/checkElec/Electric'

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
  },
  ...HomePage
]

export default routes
