<template>
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">Danh sách User</h5>
        </div>
        <div class="list-group list-group-flush">
            <div v-for="user in users.users" :key="user.id" 
                 class="list-group-item d-flex justify-content-between align-items-center"
                 :class="{ 'active-user': isActive(user.id) }">
                <div class="d-flex align-items-center">
                    <img :src="user.image" alt="Avatar" class="rounded-circle me-2" style="width: 40px; height: 40px; object-fit: cover;">
                    <span><strong>ID: {{ user.id }}</strong> - {{ user.name }}</span>
                </div>
                <div>
                    <RouterLink :to="`/user/${user.id}/profile`" class="btn btn-outline-primary btn-sm me-1">Profile</RouterLink>
                    <RouterLink :to="`/user/${user.id}/posts`" class="btn btn-outline-success btn-sm">Posts</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import users from '../users.json';
import { useRoute } from 'vue-router';

const route = useRoute();

// Kiểm tra xem user có đang được chọn không để highlight
const isActive = (id) => route.params.id == id;
</script>

<style scoped>
.list-group-item { margin-bottom: 5px; }
.active-user {
    background-color: #e9ecef;
    border-left: 4px solid #0d6efd;
}
</style>