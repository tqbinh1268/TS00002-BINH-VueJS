<template>
    <div class="container mt-3">
        <h5 class="mb-4 text-center">Danh sách User</h5>
        <!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"> -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="user in users.users" :key="user.id">
                <div class="card h-100 shadow user-card" :class="{ 'border-primary bg-light': isActive(user.id) }">
                    <img :src="user.image" class="card-img-top" :alt="user.name" style="height: 150px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h5 class="card-title text-primary fw-bold">{{ user.name }}</h5>
                        <p class="card-text text-muted">ID: <span class="badge bg-secondary">{{ user.id }}</span></p>
                        <div class="d-flex justify-content-center gap-2">
                            <RouterLink :to="`/user/${user.id}/profile`" class="btn btn-primary btn-sm">Profile</RouterLink>
                            <RouterLink :to="`/user/${user.id}/posts`" class="btn btn-success btn-sm">Posts</RouterLink>
                        </div>
                    </div>
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
.user-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
}
</style>