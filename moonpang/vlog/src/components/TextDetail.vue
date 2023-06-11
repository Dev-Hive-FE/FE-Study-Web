<template>
  <div>
    <h4>여기는 디테일 페이지 입니다</h4>
    {{ this.$route.params.detail }}
    {{ this.$route.params }}
    <p>
      {{ this.textData[this.$route.params.id].content }}
    </p>
  </div>
</template>

<script>
  export default {
    props:{
      textData: Array
    },
    data(){
      return{
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>