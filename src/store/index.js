import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories.js'
import costs from './modules/costs.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories, costs
  }
})
