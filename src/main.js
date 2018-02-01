// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// iview
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import './main.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

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
