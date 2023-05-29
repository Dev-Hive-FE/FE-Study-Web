<template>
  <ModalWindow
    :rooms="rooms"
    :modalOpen="modalOpen"
    @closeModal="modalOpen = false"
    :index="index"
  />

  <!-- 메뉴목록 -->
  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
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
    };
  },
  methods: {
    clickHandler() {
      this.modalOpen = true;
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

img {
  width: 100%;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
</style>
