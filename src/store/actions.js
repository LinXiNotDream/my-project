import * as types from './mutation-types'

export const do_login = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    // 登录方法
    commit(types.LOGIN)
    resolve()
  })
}

export const do_logout = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    commit(types.LOGIN_OUT)
    resolve()
  })
}
