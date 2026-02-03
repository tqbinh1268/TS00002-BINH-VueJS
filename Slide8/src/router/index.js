// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import components for your routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';
import UserProfile from '../views/UserProfile.vue';
import UserPosts from '../views/UserPosts.vue';
import DanhSachUser from '../views/DanhSachUser.vue';

const routes = [
    {
        path: '/',
        // name: 'Home',
        component: Home
    },
    {
        path: '/about',
        // name: 'About',
        component: About
    },
    {
        path: '/user',
        component: DanhSachUser
    },
    {
        path: '/user/:id',
        component: User,
        children: [
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPosts
            }
        ]
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;