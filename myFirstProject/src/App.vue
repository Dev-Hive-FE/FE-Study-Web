<template>
  <ModalWindow
    :rooms="rooms"
    :modalOpen="modalOpen"
    @closeModal="changeModal"
    :index="index"
  />

  <!-- 메뉴목록 -->
  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>

  <div class="sortBtn">
    <button @click="nameSort">이름정렬</button>
    <button @click="priceSort">가격정렬</button>
    <button @click="backOrigin">원상복구</button>
  </div>

  <!--원룸 목록-->
  <div v-for="(i, key) in rooms" :key="key">
    <img :src="i.image" />
    <h4 @click="clickHandler(), (index = key)">{{ i.title }}</h4>
    <p>{{ i.price }}</p>
  </div>
</template>

<script>
import 원룸데이터 from "./data/data.js";
import ModalWindow from "./components/ModalWindow.vue";

export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      modalOpen: false,
      rooms: 원룸데이터,
      index: 0,
      copy: [...원룸데이터],
    };
  },
  methods: {
    clickHandler() {
      this.modalOpen = true;
    },
    changeModal() {
      this.modalOpen = "$event";
    },
    nameSort() {
      this.rooms.sort(function (a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },
    priceSort() {
      this.rooms.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    backOrigin() {
      this.rooms = this.copy;
    },
  },
  components: {
    ModalWindow,
  },
};
</script>

<style scoped="scoped">
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.sortBtn {
  text-align: center;
}

button {
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
}

img {
  width: 100%;
}

body {
  margin: 0;
  text-align: center;
}
div {
  box-sizing: border-box;
  text-align: center;
}
</style>
