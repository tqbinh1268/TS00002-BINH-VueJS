<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isAuthenticated = ref(false);
const currentUser = ref(null);

const checkLogin = () => {
    isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated.value) {
        const userStr = localStorage.getItem('userLogin');
        if (userStr) currentUser.value = JSON.parse(userStr);
    }
};

watch(route, () => {
    checkLogin();
});

const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userLogin');
    isAuthenticated.value = false;
    currentUser.value = null;
    router.push('/login');
};
</script>

<template>
    <h3>Đây là trang chính APP.vue</h3>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/user">Danh sách User</RouterLink>
      <RouterLink v-if="!isAuthenticated" to="/login">Login</RouterLink>
      <template v-else>
          <span style="margin-right: 10px; font-weight: bold;">Xin chào, {{ currentUser?.name }}</span>
          <button @click="logout" class="btn-logout">Logout</button>
      </template>
    </nav>

    <main>
      <RouterView/>
    </main>
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

nav a {
  margin-right: 20px;
}

.btn-logout {
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
