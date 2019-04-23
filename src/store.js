import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// create state that holds data
const state = {
  currentUser: null
}

// uupdate state data through mutations
const mutations = {
  SET_USER(state, user) {
    state.currentUser = user;
  }
}

const actions = {
  // 1 argument: commit function
  // 2 argument: data
  setUser({
    commit
  }, user) {
    commit('SET_USER', user);
  }
}

const getters = {
  currentUser: state => state.currentUser
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})