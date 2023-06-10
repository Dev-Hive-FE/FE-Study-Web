<template>
  <NavBar />
  <br />
  <h4>Vuelog</h4>
  <router-view />
</template>

<script>
import data from "./data/data.js";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  data() {
    return {
      data: data,
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  text-align: center;
}
</style>
