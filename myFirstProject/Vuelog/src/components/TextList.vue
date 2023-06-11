<template>
  <div v-for="(item, index) in data" :key="item">
    <div class="card border-secondary mb-3" style="max-width: 30rem">
      <div class="card-header">{{ item.date }}</div>
      <div class="card-body text-secondary">
        <h5 class="card-title">{{ item.title }}</h5>
        <button @click="this.$router.push(`/TextList/Detail/${index}`)">
          상세보기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/data.js";

export default {
  name: "TextList",
  data() {
    return {};
  },
  props: {
    data: Array,
  },
};
</script>

<style>
body {
  text-align: center;
}
</style>
