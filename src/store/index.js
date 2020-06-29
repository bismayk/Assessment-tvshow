import Vue from 'vue'
import Vuex from 'vuex'

import showList from './modules/showList'
import details from './modules/details'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    showList,
    details,
    search
  },
  
})
