import canvas from '@/pages/canvas/index'
import elec from '@/pages/checkElec/Electric'

var routes = [{
  path: '/',
  name: 'canvas',
  component: canvas
}, {
  path: '/canvas',
  name: 'canvas',
  component: canvas
}, {
  path: '/elec',
  name: 'elec',
  component: elec
}]

export default routes
