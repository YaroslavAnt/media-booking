
export default {
  namespaced: true,

  state: () => ({
    sessions: [],
    loading: false
  }),

  actions: {
    async getSessions({ commit, state }, movie_id = '') {

      try {
        commit('SET_LOADING', true);
        const raw = await fetch(
          `https://cinema-api-test.y-media.io/v1/movieShows?movie_id=${movie_id}`,
        );
        if (raw.ok) {
          const { data } = await raw.json();
          state.sessions = data;
          return data
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        commit('SET_LOADING', false)
      }
    },
  },

  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    } // -> commit('movies/SET_LOADING')
  },

}