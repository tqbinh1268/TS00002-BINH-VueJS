<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h3 class="mb-0 text-center">Đăng nhập</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleLogin">
                            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="username" v-model="username" placeholder="Nhập tên đăng nhập" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input type="password" class="form-control" id="password" v-model="password" placeholder="Nhập mật khẩu" required>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import users from '../users.json';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = () => {
    const user = users.users.find(u => u.userName === username.value && u.password === password.value);
    if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userLogin', JSON.stringify(user));
        router.push('/user');
        // dashboard
    } else {
        errorMessage.value = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
};
</script>