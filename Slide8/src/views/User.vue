<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import users from '../users.json';

const route = useRoute();
// Tìm user dựa trên id từ params của route
const user = computed(() => users.users.find(u => u.id == route.params.id));

// Kiểm tra quyền sở hữu để hiện nút Edit
const userLogin = JSON.parse(localStorage.getItem('userLogin'));
const isOwner = computed(() => user.value && userLogin && String(user.value.id) === String(userLogin.id));
</script>

<template>
    <div v-if="user" class="container mt-4 p-3 border rounded">
        <div class="d-flex align-items-center mb-3">
            <img :src="user.image" :alt="user.name" class="rounded-circle me-3 border" style="width: 100px; height: 100px; object-fit: cover;">
            <div>
                <h1>User Page: {{ user.name }}</h1>
                <p class="mb-0 text-muted">User ID: {{ user.id }}</p>
                <p class="mb-0 text-muted">Username: {{ user.userName }}</p>
            </div>
        </div>
        
        <nav>
            <!-- Link điều hướng đến các route con -->
            <router-link :to="`/user/${user.id}/profile`" class="btn btn-outline-primary me-2">Profile</router-link>
            <router-link :to="`/user/${user.id}/posts`" class="btn btn-outline-success">Posts</router-link>
            <router-link v-if="isOwner" :to="`/user/${user.id}/edit`" class="btn btn-outline-warning">Edit</router-link>
        </nav>
        
        <hr />
        
        <!-- Nơi hiển thị UserProfile hoặc UserPosts -->
        <router-view></router-view>
    </div>
    <div v-else>Không tìm thấy user</div>
</template>
<style>
nav a {
  margin-right: 20px;
}
</style>