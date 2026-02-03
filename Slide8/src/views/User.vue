<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import users from '../users.json';

const route = useRoute();
// Tìm user dựa trên id từ params của route
const user = computed(() => users.find(u => u.id === parseInt(route.params.id)));
</script>

<template>
    <div v-if="user" class="container mt-4 p-3 border rounded">
        <h1>User Page: {{ user.name }}</h1>
        <p>User ID: {{ user.id }}</p>
        
        <nav>
            <!-- Link điều hướng đến các route con -->
            <router-link :to="`/user/${user.id}/profile`" class="btn btn-outline-primary me-2">Profile</router-link>
            <router-link :to="`/user/${user.id}/posts`" class="btn btn-outline-success">Posts</router-link>
        </nav>
        
        <hr />
        
        <!-- Nơi hiển thị UserProfile hoặc UserPosts -->
        <router-view></router-view>
    </div>
    <div v-else>Không tìm thấy user</div>
</template>