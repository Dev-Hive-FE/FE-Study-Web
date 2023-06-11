<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="rooms[index].image" />
      <h4>{{ rooms[index].title }}</h4>
      <p>{{ rooms[index].content }}</p>
      <p>{{ rooms[index].price }}원</p>
      <input type="text" v-model="data" />
      <h4>현재 {{ data * rooms[index].price }}원 입니다.</h4>
      <button @click="$emit('closeModal', false)">닫기</button>
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
  data() {
    return {
      data: "",
    };
  },
  methods: {},
  watch: {
    data(data) {
      if (data > 12) {
        alert("12개월까지만 입력");
        this.data = 1;
      }
      if (isNaN(data)) {
        alert("숫자만 입력해라");
        this.data = 1;
      }
    },
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
