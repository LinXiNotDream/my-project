# testvue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
https://leetcode.com
http://www.codewars.com
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



******C:\Users\lWX458267\Desktop\make-file\src******

------C:\Users\lWX458267\Desktop\make-file\src\actions.js------
import * as types from './mutation-types'

export const do_login = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    // 登录方法
    commit(types.LOGIN)
  })
}

export const do_logout = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    commit(types.LOGIN_OUT)
  })
}

------C:\Users\lWX458267\Desktop\make-file\src\getters.js------
export const ISLOGIN = state => state.islogin

------C:\Users\lWX458267\Desktop\make-file\src\index.js------
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// 全局state
const state = {
  islogin: false
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
  },
  strict: debug
})

******C:\Users\lWX458267\Desktop\make-file\src\modules******

******C:\Users\lWX458267\Desktop\make-file\src\modules******

------C:\Users\lWX458267\Desktop\make-file\src\mutation-types.js------
export const LOGIN = 'LOGIN'
export const LOGIN_OUT = 'LOGIN_OUT'

------C:\Users\lWX458267\Desktop\make-file\src\mutations.js------
import * as types from './mutation-types'

export default {
  [types.LOGIN] (state) {
    state.islogin = true
  },
  [types.LOGIN_OUT] (state) {
    state.islogin = false
  }
}
