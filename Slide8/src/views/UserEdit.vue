<template>
    <div v-if="user" class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4 text-start">
                    <div class="card-header bg-white border-bottom py-4 px-4">
                        <h4 class="mb-0 fw-bold text-dark">Chỉnh sửa hồ sơ</h4>
                        <p class="text-muted small mb-0">Cập nhật thông tin cá nhân của bạn để mọi người biết bạn là ai.</p>
                    </div>

                    <div class="card-body p-4">
                        <form @submit.prevent="saveUser">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold text-secondary small uppercase">Họ và tên</label>
                                    <div class="input-group">
                                        <input v-model="user.name" type="text" class="form-control form-control-lg bg-light border-0 shadow-none rounded-3" placeholder="Ví dụ: Nguyễn Văn An" required>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label fw-bold text-secondary small">Địa chỉ Email</label>
                                    <input v-model="user.profile.email" type="email" class="form-control form-control-lg bg-light border-0 shadow-none rounded-3" placeholder="name@example.com" required>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label fw-bold text-secondary small">Nghề nghiệp</label>
                                    <input v-model="user.profile.job" type="text" class="form-control form-control-lg bg-light border-0 shadow-none rounded-3" placeholder="Frontend Developer">
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label fw-bold text-secondary small">Nơi sống</label>
                                    <input v-model="user.profile.city" type="text" class="form-control form-control-lg bg-light border-0 shadow-none rounded-3" placeholder="Hà Nội, Việt Nam">
                                </div>

                                <div class="col-12">
                                    <label class="form-label fw-bold text-secondary small">Giới thiệu ngắn</label>
                                    <textarea v-model="user.profile.bio" class="form-control bg-light border-0 shadow-none rounded-3" rows="4" placeholder="Chia sẻ một chút về bản thân bạn..."></textarea>
                                </div>

                                <div class="col-12 d-flex justify-content-end gap-3 mt-4">
                                    <button type="button" @click="cancel" class="btn btn-link text-decoration-none text-muted fw-semibold">
                                        Bỏ qua
                                    </button>
                                    <button type="submit" class="btn btn-primary px-5 py-2 fw-bold rounded-pill shadow-sm" :disabled="isSaving">
                                        <span v-if="isSaving" class="spinner-border spinner-border-sm me-2"></span>
                                        {{ isSaving ? 'Đang lưu...' : 'Lưu thay đổi' }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="d-flex flex-column align-items-center justify-content-center" style="min-height: 50vh;">
        <div class="spinner-grow text-primary" role="status"></div>
        <p class="mt-3 text-muted fw-medium">Đang chuẩn bị dữ liệu...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const user = ref(null);
const isSaving = ref(false);
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
    isSaving.value = true;
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
    } finally {
        isSaving.value = false;
    }
};

const cancel = () => {
    router.push(`/user/${user.value.id}/profile`);
};
</script>