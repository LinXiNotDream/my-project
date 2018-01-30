import * as types from './mutation-types'

export default {
  [types.LOGIN] (state) {
    state.islogin = true
  },
  [types.LOGIN_OUT] (state) {
    state.islogin = false
  }
}
