<template>
  <div class="menu">
    <a v-for="(메뉴, i) in 메뉴들" :key="메뉴">{{ 메뉴들[i] }}</a>
  </div>
  
  <post
    v-if="모달창열렸니[currentIndex] == true"
    :datas="원룸들"
    :index="this.currentIndex"
    :boolean="모달창열렸니"
    @childEvent="handleEvent($event)">
  </post>
  <button class="btn" @click="namesort()">이름</button>
  <button class ="btn" @click="pricesort()">가격순</button>
  <button class="btn" @click="backsort()">복구</button>
  <div v-for="(item, i) in 원룸들" :key="i">
    <img :src="item.image" class="room-img" />
    <h1 @click="clickHandler(i, item)">{{ item.title }}</h1>
    <p>{{ item.price }}원</p>
  </div>
</template>
<script>
import 원룸데이터 from "./data/data";
import post from "./components/MyPost.vue";

export default {
  name: "App",
  components: {
    post,
  },
  data() {
    return {
      메뉴들: ["Home", "Shop", "About"],
      currentIndex: 0,
      currentItem: {},
      모달창열렸니: [false, false, false, false, false, false],
      원룸들: 원룸데이터,
      원래데이터: 원룸데이터,
    };
  },
  methods: {
    clickHandler(i, item) {
      this.currentItem = item;
      this.currentIndex = i;
      this.모달창열렸니[this.currentIndex] = true;
    },
    handleEvent(event) {
      console.log(event);
      console.log(event.result);
      if (event.result) {
        this.모달창열렸니[this.currentIndex] = false
      }
    },
    namesort(){
      this.원룸들 =[...this.원래데이터].sort((a,b)=>{
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
      }) 
    },
    pricesort(){
      this.원룸들 = [...this.원래데이터].sort((a,b) => a.price - b.price)
    },
    backsort(){
      this.월룸들 = [...this.원래데이터].copy;
      
    }
  },
};
</script>

<style>
.room-img {
  widows: 70%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 70%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>