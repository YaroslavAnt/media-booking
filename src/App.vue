<template>
  <b-container>
    <nav>
      <router-link to="/">Фільми</router-link> |
      <router-link to="/sessions">Сеанси</router-link>
    </nav>
    <b-alert
      :show="message.length"
      dismissible
      @dismissed="hideAlert"
      v-bind="attrs"
    >
      {{ message }}
    </b-alert>
    <router-view />
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: {
    ...mapState('alert', ['message', 'attrs']),
  },
  methods: {
    ...mapActions('alert', ['hideAlert']),
  },
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
