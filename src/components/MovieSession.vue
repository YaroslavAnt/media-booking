<template>
  <div>
    <b-list-group>
      <b-list-group-item class="d-flex align-items-center my-2">
        <b-avatar
          size="10rem"
          variant="info"
          :src="movie.image"
          class="p-3"
        ></b-avatar>
        <div class="pb-2">
          <h2 class="mr-auto">{{ movie.name }}</h2>
          <div
            class="pb-2"
            v-for="({ daytime, showdate }, idx) in dates"
            :key="idx"
          >
            <b-button>{{ showdate }}</b-button>
            <span>{{ daytime }}</span>
          </div>
        </div>
        <b-button
          variant="outline-primary"
          :to="`/booking/${movieId}`"
          class="mx-auto"
          >Бронювати</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    movieId: {
      type: String,
      default: '0',
    },
    dates: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapState('movies', ['movies']),

    movie() {
      return this.movies.find(({ id }) => id === Number(this.movieId));
    },
  },
};
</script>

<style lang="scss" scoped></style>
