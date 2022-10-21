<template>
  <div class="mb-5">
    <router-link class="mb-5" to="/">Sample Calendar</router-link>
    <router-link to="/fullcalender">Full Calendar</router-link>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
