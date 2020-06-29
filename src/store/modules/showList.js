import { getAllShows } from '@/services/api'
import { sortTvSHow } from '@/utils/ratingSort'

export default {
  namespaced: true,
  state: {
    allTvShows: [],
    error: ''
  },
  mutations: {
    ALL_TV_SHOWS(state, payload) {
      state.allTvShows = payload
    },
    ERRORS(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getTvShows({ commit }) {
      getAllShows()
        .then(res => {
          commit('ALL_TV_SHOWS', res)
        })
        .catch(error => {
          commit('ERRORS', error)
        })
    }
  },
  getters: {
    getAllTvShows: state => {
      return state.allTvShows.sort(sortTvSHow) // sorting All TV Shows using external function. "sortTvSHow"
    }
  }
}
