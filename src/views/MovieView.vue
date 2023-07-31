<template>
  <div>
    <h1>Деталі фільму</h1>
    <b-card>
      <b-img :src="movie.image" height="300px"></b-img>
      <h5 class="mt-0">{{ movie.name }}</h5>
      <div v-html="movie.description"></div>
      <div v-html="movie.additional" class="additional"></div>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  async mounted() {
    const { id } = this.$route.params;

    this.getMovie(id);
  },

  computed: {
    ...mapState('movies', ['movie', 'loading']),
  },

  methods: {
    ...mapActions('movies', ['getMovie']),
  },
};
</script>
