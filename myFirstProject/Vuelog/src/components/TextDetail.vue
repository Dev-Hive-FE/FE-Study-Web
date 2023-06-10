<template>
  <div>
    <h4>여기는 디테일 페이지</h4>
    <p>{{ this.data[this.$route.params.index].content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
