<template>
  <div>
    <h1>Список сеансів</h1>

    <section class="d-flex" v-if="loading">
      <b-spinner
        style="width: 3rem; height: 3rem"
        class="mx-auto my-4"
      ></b-spinner>
    </section>

    <section v-else>
      <MovieSession
        v-for="(dates, id) in sessions"
        :key="id"
        :movie-id="id"
        :dates="dates"
      />
    </section>
  </div>
</template>

<script>
import MovieSession from '@/components/MovieSession.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    MovieSession,
  },

  async mounted() {
    if (!this.movies?.length) {
      await this.getMovies();
    }
    this.getSessions();
  },

  computed: {
    ...mapState('sessions', ['sessions', 'loading']),
    ...mapState('movies', ['movies']),
  },

  methods: {
    ...mapActions('sessions', ['getSessions']),
    ...mapActions('movies', ['getMovies']),
  },
};
</script>

<style lang="scss" scoped></style>
