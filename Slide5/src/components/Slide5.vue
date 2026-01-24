<template lang="">
    <div>
        <h1>FPT Polytechnic</h1>
        <h2>{{msg}}</h2>
        <input v-model="count">
        <button @click="nhandoi1">Nhân đôi</button>
        <h3>{{count}}</h3>
        <h3>{{number1}}</h3>
        <h3>{{nhandoi2}}</h3>
    </div>
</template>
<script setup>
import {computed, ref}from 'vue';
defineProps({
    msg: String,
})
const number1 = ref(0);
const number2 = ref(0);

const increment = () => {
    count.value++;
}

const nhandoi1 = () => {
    number1.value = count.value*2;
}

const nhandoi2 = computed(() => {
    return count.value*2;
})
const count = ref(5);
</script>
<style lang="">
    
</style>