<template>
  <b-container>
    <nav>
      <router-link to="/">Фільми</router-link> |
      <router-link to="/sessions">Сеанси</router-link>
    </nav>
    <router-view />
  </b-container>
</template>

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
