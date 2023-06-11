<template>
  <div class="black-bg">
    <div class="white-bg">
      <button @click="$emit('childEvent', { result: true })">닫기</button>
      <img :src="this.datas[this.index].image" class="room-img" />
      <h4>{{ this.datas[this.index].title }}</h4>
      <p>{{ this.datas[index].content }}</p>
      <input  type="text" v-model.number="data">
      <p>입력값 {{ data }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    datas: Object,
    index: Number,
    boolean: Boolean,
  },
  name: "App",
  data(){
    return {
      data:  "",
    }
  },
  methods:{  
  },
  watch:{
    data(data){
      if (data <100)
      alert("100안넘")
    }
  }
};
</script>

<style>
.room-img {
  widows: 100%;
  margin-top: 40px;
}

body {
  margin: 0;
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
