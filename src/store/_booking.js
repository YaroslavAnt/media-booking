export default {
  namespaced: true,

  state: () => ({
    loading: false,
  }),

  actions: {
    async bookTicket({ commit, dispatch }, data = {}) {
      try {
        commit('SET_LOADING', true);
        const raw = await fetch(
          `https://cinema-api-test.y-media.io/v1/bookPlace`,
          {
            method: 'POST',
            body: JSON.stringify(data),
          },
        );
        if (raw.ok) {
          const data = await raw.json();
          dispatch(
            'alert/showAlert',
            ['Квиток заброньовано успішно', { variant: 'success' }],
            { root: true },
          );
          return data;
        } else {
          dispatch(
            'alert/showAlert',
            ['Сталася помилка', { variant: 'danger' }],
            { root: true, }
          );
        }
      } catch (error) {
        console.log({ error });
        dispatch(
          'alert/showAlert',
          [error.message, { variant: 'danger' }],
          { root: true, }
        );
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },

  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    }, // -> commit('movies/SET_LOADING')
  },
};
