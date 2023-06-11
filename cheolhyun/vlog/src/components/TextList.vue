<template>
    <div v-for="(item, index) in  textData " :key="item">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.content }}</p>
                <a href="#" class="btn btn-primary"
                    @click="this.$router.push({ path: '/TextList/detail/' + index, params: { id: index } });">Go somewhere</a>
            </div>
        </div>
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
body {
    text-align: center;
}

.card h5 {
    font-size: 24px;
}

.card{
    display: flex;
    float: left;
    height: 200px;
    margin-right: 20px;
}
</style>