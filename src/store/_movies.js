
export default {
  namespaced: true,

  state: () => ({
    movies: [],
    movie: {},
    loading: false
  }),

  actions: {
    async getMovies({ commit, state }, searchParams) {
      try {
        commit('SET_LOADING', true);
        const raw = await fetch(
          `https://cinema-api-test.y-media.io/v1/movies?${searchParams}`,
        );
        if (raw.ok) {
          const { data } = await raw.json();
          state.movies = data;
          return data
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async getMovie({ commit, state }, id) {
      try {
        commit('SET_LOADING', true);
        const raw = await fetch(
          `https://cinema-api-test.y-media.io/v1/movies?movie_id=${id}`,
        );
        if (raw.ok) {
          const { data } = await raw.json();
          state.movie = data[0] || {};
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