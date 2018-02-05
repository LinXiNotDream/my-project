import { getAllUsers } from './api'

let state = {
  homeBlogs: []
}

let getters = {}

let mutations = {}

let actions = {
  async get_all_users ({ commit }) {
    let res = await getAllUsers()
    commit('SET_ALL_USERS', res)
    return res
  }
}

export default {
  state, getters, mutations, actions
}
