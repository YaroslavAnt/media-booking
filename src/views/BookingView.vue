<template>
  <div>
    <b-form @submit.prevent="submitForm" @reset.prevent="resetForm">
      <b-form-group
        :label="label"
        v-for="({ type, component, label }, key) of form"
        :key="key"
      >
        <component
          v-model="form[key].value"
          :type="type"
          :is="`b-form-${component}`"
          :options="form[key].options"
        >
          <template #first>
            <b-form-select-option value="" disabled>
              -- Оберіть одну з опцій --
            </b-form-select-option>
          </template>
        </component>
      </b-form-group>

      <b-button class="m-2" type="submit" variant="primary">
        Бронювати
      </b-button>
      <b-button class="m-2" type="reset" variant="secondary">
        Відмінити
      </b-button>
    </b-form>
  </div>
</template>

<script>
const INIT_FORM = {
  showdate: { value: null, label: 'Дата', type: 'select', component: 'select' },
  daytime: { value: null, label: 'Час', type: 'select', component: 'select' },
  row: { value: null, label: 'Ряд', type: 'number', component: 'input' },
  seat: { value: null, label: 'Місце', type: 'number', component: 'input' },
};
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      form: INIT_FORM,
    };
  },

  async mounted() {
    const sessions = await this.getSessions(this.movieId);
    if (sessions[this.movieId]) {
      const options = sessions[this.movieId].map((el) => el.showdate);

      this.$set(this.form.showdate, 'options', options);
    }
  },

  computed: {
    ...mapState('sessions', ['sessions', 'loading']),
    movieId() {
      return this.$route.params?.id;
    },
  },

  methods: {
    ...mapActions('sessions', ['getSessions']),
    ...mapActions('booking', ['bookTicket']),

    async submitForm() {
      const formEntries = Object.entries(this.form).map(([key, val]) => [
        key,
        val.value,
      ]);

      const submitObject = Object.fromEntries(formEntries);

      this.bookTicket({
        ...submitObject,
        movie_id: this.movieId,
      });

      this.resetForm();
    },

    resetForm() {
      Object.keys(this.form).forEach((key) => {
        this.form[key].value = null;
      });
    },
  },

  watch: {
    'form.showdate.value': {
      handler(newValue) {
        if (newValue) {
          const session = this.sessions[this.movieId].find(
            ({ showdate }) => showdate === newValue,
          );
          const timeOptions = session?.daytime.split(';');

          this.$set(this.form.daytime, 'options', timeOptions);
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
