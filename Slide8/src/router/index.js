// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import components for your routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';
import UserProfile from '../views/UserProfile.vue';
import UserPosts from '../views/UserPosts.vue';
import DanhSachUser from '../views/DanhSachUser.vue';
import Login from '../views/Login.vue';
import UserEdit from '../views/UserEdit.vue';

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
        component: DanhSachUser,
        meta: { requiresAuth: true } // Đánh dấu route này cần đăng nhập
    },
    {
        path: '/user/:id',
        component: User,
        meta: { requiresAuth: true }, // Đánh dấu route này cần đăng nhập
        children: [
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPosts
            },
            {
                path: 'edit',
                component: UserEdit,
                meta: { requiresAuth: true, requiresOwner: true } // Yêu cầu đăng nhập và phải là chính chủ
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// Kiểm tra quyền truy cập trước khi vào route
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login'); // Chuyển hướng về login nếu chưa đăng nhập
    } else if (to.meta.requiresOwner) {
        const userLogin = JSON.parse(localStorage.getItem('userLogin'));
        // Kiểm tra id của user đang login có trùng với id trên url không
        if (isAuthenticated && userLogin && String(userLogin.id) === String(to.params.id)) {
            next();
        } else {
            alert('Bạn không có quyền chỉnh sửa thông tin của người khác!');
            next(false); // Chặn truy cập
        }
    } else {
        next(); // Cho phép đi tiếp
    }
});

export default router;