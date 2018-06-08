// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 图片裁剪
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'

import LwwDialog from '@/components/LwwDialog'
import LwwInput from '@/components/LwwInput'
import LwwButton from '@/components/LwwButton'

// iview
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import './assets/iconfont/iconfont.css'

import './main.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Croppa, { componentName: 'image-croppa' })
Vue.component('LwwInput', LwwInput)
Vue.component('LwwDialog', LwwDialog)
Vue.component('LwwButton', LwwButton)
// .component('image-croppa', () => import(Croppa.component))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 不重定向白名单
const whiteList = ['/login', '/home/index', '/']
router.beforeEach((to, from, next) => {
  if (store.getters.ISLOGIN) next()
  else if (whiteList.includes(to.path)) next()
  else next('/login')
})
