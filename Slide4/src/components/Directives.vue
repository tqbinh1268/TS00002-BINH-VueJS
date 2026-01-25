<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-6">
                <div>
                    <button class="btn btn-danger">Danger</button>
                    <button class="btn btn-warning">Warning</button>
                    <button class="btn btn-success">Success</button>
                    <button class="btn btn-info">Info</button>
                    <button class="btn btn-primary">Primary</button>
                </div>
            </div>
            <div class="col-6">
                <div>
                    <button class="btn btn-danger">Danger</button>
                    <button class="btn btn-warning">Warning</button>
                    <button class="btn btn-success">Success</button>
                    <button class="btn btn-info">Info</button>
                    <button class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>

        <div>
            <label for="fullNameInput">Full Name:</label>
            <input id="fullNameInput" type="text" v-model="fullName" placeholder="Enter your full name" />
            <br />
            <label for="emailInput">Email:</label>
            <input id="emailInput" type="email" v-model="email" placeholder="Enter your email" />
            <br />
            <button v-on:click="show = !show" v-html="show ? 'Hide' : 'Show'"></button>
            <button @click="showInfo">Click</button>
            <br />
            <div v-if="show">
                <p>Your full name is: {{ fullName }}</p>
                <p>Your email is: {{ email }}</p>
            </div>
            <hr />
            <div v-show="show">
                <p>Your full name is: {{ fullName }}</p>
                <p>Your email is: {{ email }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
// const fullName = "Test Full Name";
const fullName = ref("Test Full Name");
const email = ref("testemail@gmail.com");
const show = ref(true);
const changeshow = () => (show.value = !show.value);
const showInfo = () => (
    fullName.value = fullName.value.split(' ').reverse().join(' ')
)
</script>

<style lang=""></style>
