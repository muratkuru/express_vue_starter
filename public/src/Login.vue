<template>
  <div id="app">
    {{ message }}

    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Login Page'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
