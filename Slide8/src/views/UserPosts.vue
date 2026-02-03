<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import users from '../users.json';

const route = useRoute();
const user = computed(() => users.find(u => u.id == route.params.id));
</script>

<template>
    <div v-if="user && user.posts">
        <h2>User Posts Component</h2>
        <div v-for="post in user.posts" :key="post.id" class="card mb-3">
            <div class="card-header">{{ post.title }}</div>
            <div class="card-body">{{ post.content }}</div>
        </div>
    </div>
</template>