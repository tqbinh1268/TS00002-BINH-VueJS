<template>
    <div>
        <label for="fullNameInput">Full Name:</label>
        <input id="fullNameInput" type="text" v-bind:value="fullName"
            placeholder="Enter your full name"> <br>
        <label for="emailInput">Email:</label>
        <input id="emailInput" type="email" v-model="email" placeholder="Enter your email"> <br>
        <button v-on:click="changeshow()" v-html="show?'Hide':'Show'"></button>
        <br>
        <div v-if="show">
            <p>Your full name is: {{ fullName }}</p>
            <p>Your email is: {{ email }}</p>
        </div>
        <hr>
        <div v-show="show">
            <p>Your full name is: {{ fullName }}</p>
            <p>Your email is: {{ email }}</p>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            fullName: 'Test Full Name',
            email: 'testemail@gmail.com',
            show: true
        }
    },
    methods: {
        changeshow(){
            this.show = !this.show
        }
    },
}
</script>
<style lang="">

</style>