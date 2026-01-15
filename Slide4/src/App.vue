<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Page21 from './components/Page21.vue';
import Page27 from './components/Page27.vue';
import Page34 from './components/Page34.vue';

</script>

<template>
  <Page34 msg="Test"/>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Page21/>
  <hr>
  <Page27/>
  <hr>
  <HelloWorld msg="00 - Binh"/> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
