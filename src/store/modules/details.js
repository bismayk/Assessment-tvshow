import { getShowDetailsById } from '@/services/api'

export default {
  namespaced: true,
  state: {
    tvShow: {},
    cast: [],
    loading: false,
    error: ''
  },
  mutations: {
    TV_SHOWS(state, payload) {
      state.tvShow = payload
    },
    TV_SHOWS_CAST(state, payload) {
      state.cast = payload
    },
    LOADING(state, payload) {
      state.loading = payload
    },
    ERRORS(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getTvShowDetailsById({ commit }, payload) {
      commit('LOADING', true)
      getShowDetailsById(payload)
        .then(res => {
          commit('TV_SHOWS', res)
          commit('TV_SHOWS_CAST', res._embedded.cast)
          commit('LOADING', false)
        })
        .catch(error => {
          commit('ERRORS', error)
        })
    }
  },
  getters: {
    getTvShow: state => {
      return state.tvShow
    },
    getTvShowCast: state => {
      return state.cast
    },
    loading: state => {
      return state.loading
    }
  }
}

