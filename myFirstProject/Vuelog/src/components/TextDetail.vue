<template>
  <div>
    <h4>여기는 디테일 페이지</h4>
    <p>{{ data[$route.params.id].content }}</p>
  </div>
</template>

<script>
import data from "../data/data.js";

export default {
  data() {
    return {};
  },
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
