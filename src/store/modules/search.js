
import { getSearchResult } from '@/services/api'

export default {
    namespaced: true,
    state: {
        results: [],
        error: ''
    },
    mutations: {
        UPDATE_RESULTS(state, payload) {
            state.results = payload
        },
        CLEAR(state) {
            state.results = []
        },
        ERR(state, payload) {
            state.error = payload
        }
    },
    actions: {
        getResult({ commit }, payload) {
            getSearchResult(payload)
                .then(res => {
                    commit('UPDATE_RESULTS', res)
                })
                .catch(error => {
                    commit('ERR', error)
                })
        },
        clearResult({ commit }) {
            commit('CLEAR')
        }
    },
    getters: {
        getResult: state => {
            return state.results
        }
    }
}