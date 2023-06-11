<template>
    <h4>여기는 디테일 입니다.</h4>
    <div class="box">
        <h2>{{data[$route.params.id].title }}</h2>
        <div class="text_sty">
            <p>
                {{ data[$route.params.id].content }}
            </p>
            <p>
                {{ data[$route.params.id].date }}
            </p>
        </div>
    </div>
    <button @click="$router.push('/TextList')">BACK</button>

</template>

<script>
import data from '../data/data.js'

export default {
    data() {
        return {
            data: data
        }
    }
}
</script>

<style>
.box {
    width: 1000px;
    height: 500px;
    margin: 84px 20px;
    border: 1px solid;
    background-color: white;
    display: inline-block;
}
</style>