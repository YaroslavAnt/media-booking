
import Vue from 'vue'

import Vuex from 'vuex'
import movies from './_movies'
import sessions from './_sessions'
import booking from './_booking'
import alert from './_alert'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movies,
    sessions,
    booking,
    alert
  }
})