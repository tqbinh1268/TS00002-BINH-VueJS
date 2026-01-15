<template>
    <div>
        <h1 >{{ msg }}</h1>
        <h3 v-html="msg"></h3>
        Count: {{count}} <br>
        <button @click="increment">Add</button>
        <button @click="count--">Sub</button>
        <button @click="reset">Reset</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 10,
            msg: "Test message"
        };
    },
    methods: {
        increment() {
            this.count++;// Dùng this để truy cập biến trong data
        },
        reset() {
            this.count = 0; //đặt lại count về 0
        }
    }
};
</script>
<style lang="">

</style>