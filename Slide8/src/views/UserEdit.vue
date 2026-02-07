<template>
    <div v-if="user">
        <h3 class="mb-3">Chỉnh sửa thông tin</h3>
        <form @submit.prevent="saveUser">
            <div class="mb-3">
                <label class="form-label">Họ tên</label>
                <input v-model="user.name" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="user.profile.email" type="email" class="form-control" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Công việc</label>
                <input v-model="user.profile.job" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Thành phố</label>
                <input v-model="user.profile.city" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Tiểu sử</label>
                <textarea v-model="user.profile.bio" class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
            <button type="button" @click="cancel" class="btn btn-secondary ms-2">Hủy</button>
        </form>
    </div>
    <div v-else>
        <p>Đang tải thông tin...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const user = ref(null);
const API_URL = 'http://localhost:3000'; // Địa chỉ của json-server

onMounted(async () => {
    const userId = route.params.id;
    try {
        // Gọi API lấy thông tin user (json-server tự map id trong mảng)
        const response = await fetch(`${API_URL}/users/${userId}`);
        if (response.ok) {
            user.value = await response.json();
        }
    } catch (e) {
        console.error('Lỗi khi tải dữ liệu:', e);
    }
});

const saveUser = async () => {
    try {
        // Gửi request PUT để cập nhật dữ liệu vào file json thật
        await fetch(`${API_URL}/users/${user.value.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user.value)
        });
        
        alert('Đã cập nhật thông tin thành công vào file JSON!');
        router.push(`/user/${user.value.id}/profile`);
    } catch (e) {
        console.error('Lỗi khi lưu dữ liệu:', e);
        alert('Có lỗi xảy ra khi lưu.');
    }
};

const cancel = () => {
    router.push(`/user/${user.value.id}/profile`);
};
</script>