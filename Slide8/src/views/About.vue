<template lang="">
    <div>
        <h1>Đây là trang About</h1>
        <label>
            Search: <input type="text" v-model.trim="search" />
        </label>
    </div>
</template>
<script setup>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const search = computed({
        get() {
            return route.query.search ?? ''
        },
        set(search) {
            router.replace({
                query: {
                    search
                }
            })
        }
    });




</script>
    