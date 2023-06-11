<template>

  <modal
    v-if="모달창열렸니 == true"
    :datas="this.onerooms"
    :index="this.modalkey"
    :bool="this.모달창열렸니"
    @close-modal="this.모달창열렸니=false">
  </modal>

  <div class="menu">
    <a>Home</a>
    <a>Products</a>
    <a>About</a>
  </div>

  <div v-for="(item, key) in onerooms" :key="key">
    <img :src="item.image"/>
    <h2 @click="clickhandle(key)">{{ onerooms[key].title }}</h2>
    <p>가격 : {{ onerooms[key].price }} 원</p>
    <button @click="신고수[key]++">허위매물신고</button>
    <p></p>
    <span>신고수 : {{ 신고수[key] }}</span>
    <p></p>
  </div>
<!--
  <img src="./images/room0.jpg">
  <div v-for="item, key in products" :key="key">
    <h4 @click="모달창열렸니=true">{{ products[key] }} 원룸</h4>
    <p>{{ price[key] }} 만원</p>
    <button @click="신고수[key]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[key] }}</span>
  </div>
-->
</template>

<script>

import 원룸데이터 from './data/data.js';
import modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    modal,
  },
  data () {
    return {
      신고수 : [0, 0, 0, 0, 0, 0],
      모달창열렸니 : false,
      onerooms : 원룸데이터,
      modalkey : 0,
      modalitem : {},
    };
  },
  methods: {
    increase(){
      this.신고수++;
    },
    clickhandle(key){
      this.modalkey = key;
      this.모달창열렸니 = true;
    }
  }
}
</script>

<style>
body {
  text-align: center;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
img {
  width : 100%;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
button {
  background: white;
  color: red;
  padding: 5px;
}
</style>
