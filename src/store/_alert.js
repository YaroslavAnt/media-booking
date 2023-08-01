
export default {
  namespaced: true,

  state: () => ({
    message: '',
    attrs: {
      variant: 'primary'
    }
  }),

  actions: {
    showAlert({ commit }, [message, alertOptions]) {
      console.log({ message, alertOptions });
      commit('SET_MESSAGE', message)
      commit('SET_OPTIONS', alertOptions)
      setTimeout(() => {
        commit('SET_MESSAGE', '')
        commit('SET_OPTIONS', { variant: 'primary' })
      }, 5000);
    },

    hideAlert({ commit }) {
      commit('SET_MESSAGE', '')
      commit('SET_OPTIONS', { variant: 'primary' })
    }
  },

  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message
    }, // -> commit('movies/SET_MESSAGE')
    SET_OPTIONS(state, options) {
      state.attrs = { ...options }
    } // -> commit('movies/SET_MESSAGE')
  },

}