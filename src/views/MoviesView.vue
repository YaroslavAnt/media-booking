<template>
  <div>
    <h1>Список фільмів</h1>

    <section class="pb-4">
      <b-form-group label="Genres:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>
    </section>

    <section class="pb-4">
      <b-form-input
        v-model="name"
        placeholder="Enter movie name"
      ></b-form-input>
    </section>

    <section class="d-flex" v-if="loading">
      <b-spinner
        style="width: 3rem; height: 3rem"
        class="mx-auto my-4"
      ></b-spinner>
    </section>

    <section v-else class="grid pb-4">
      <b-card
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.name"
        :img-src="movie.image"
        :img-alt="movie.name"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          <div v-html="movie.description"></div>
        </b-card-text>

        <b-button :to="`/movies/${movie.id}`" variant="primary">
          Деталі
        </b-button>
        <!-- <router-link :to="`/movies/${movie.id}`">Деталі</router-link> -->
      </b-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      selected: [],
      name: '',
      options: [
        { text: 'ACTION', value: 0 },
        { text: 'ADVENTURES', value: 1 },
        { text: 'COMEDY', value: 2 },
        { text: 'DRAMA', value: 3 },
        { text: 'HORROR', value: 4 },
        { text: 'WESTERNS', value: 5 },
      ],
    };
  },

  computed: {
    ...mapState('movies', ['movies', 'loading']),
  },

  async mounted() {
    this.getFilteredList();
  },

  methods: {
    ...mapActions({
      getFilteredListAction: 'movies/getMovies',
    }),

    async getFilteredList() {
      const paramsObj = {
        name: this.name,
      };
      this.selected.forEach((id, idx) => {
        paramsObj[`genres[${idx}]`] = id;
      });
      const searchParams = new URLSearchParams(paramsObj);

      this.getFilteredListAction(searchParams);
    },
  },

  watch: {
    selected() {
      this.getFilteredList();
    },
    name() {
      this.getFilteredList();
    },
  },
};
</script>

<style lang="scss" scoped></style>
