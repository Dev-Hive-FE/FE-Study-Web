<template>
    <Navbar />
    <h4>여기는 홈페이지 입니다.</h4>
    <router-view :textData="textData" />
    <!-- <TextDetail :textData="textData" /> -->
</template>

<script>
import Navbar from "./components/NavBar.vue";
import data from "./data/data.js";
export default {
    name: "App",
    components: {
        Navbar,
    },
    data() {
        return {
        textData: data,
        };
    },
};
</script>

<style>
html {
    text-align: center;
}
</style>
