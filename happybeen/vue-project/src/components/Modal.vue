<template>
  <div class="black-bg">
    <div class="white-bg">
      <img :src="datas[index].image" />
      <h4>{{ datas[index].title }}</h4>
      <p>{{ datas[index].content }}</p>
      <button @click="closeModal()">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    datas:Object,
    index:Number,
    bool:Boolean,
  },
  data () {
    return {
      sibal : 0,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
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
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
.white-bg {
  width: 80%; background: white;
  border-radius: 8px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>