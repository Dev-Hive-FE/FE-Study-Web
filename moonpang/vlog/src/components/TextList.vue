<template>
  <div v-for="item,index in textData" :key="item">
    <h5 @click="this.$router.push(`/TextList/Detail/${index}`)">{{item.title}}</h5>
    <p>{{item.date}}</p>
  </div>
</template>

<script>
import data from '../data/data.js'

  export default {
    name: 'TextList',
    data() {
      return {
        textData: data
      }
    }
  }
</script>

<style>

</style>