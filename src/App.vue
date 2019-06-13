<template>
  <div id="app">
    <img alt="Vue logo" width="150" height="150" src="./assets/logo.jpg">
    <Root/>
  </div>
</template>

<script>
import Root from "./components/Root.vue";

export default {
  name: "app",
  components: {
    Root
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
