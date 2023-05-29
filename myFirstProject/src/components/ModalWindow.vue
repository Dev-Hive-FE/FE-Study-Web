<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="rooms[index].image" />
      <h4>{{ rooms[index].title }}</h4>
      <p>{{ rooms[index].content }}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalOpen: Boolean,
    rooms: Object,
    index: Number,
  },
};
</script>

<style>
img {
  width: 100%;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
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
