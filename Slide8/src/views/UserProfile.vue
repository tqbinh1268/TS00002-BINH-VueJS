<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import users from '../users.json';

const route = useRoute();
const user = computed(() => users.find(u => u.id == route.params.id));
</script>

<template>
    <div v-if="user && user.profile">
        <h2>User Profile Component</h2>
        <ul class="list-group">
            <li class="list-group-item"><strong>Email:</strong> {{ user.profile.email }}</li>
            <li class="list-group-item"><strong>Job:</strong> {{ user.profile.job }}</li>
            <li class="list-group-item"><strong>City:</strong> {{ user.profile.city }}</li>
            <li class="list-group-item"><strong>Bio:</strong> {{ user.profile.bio }}</li>
        </ul>
    </div>
</template>