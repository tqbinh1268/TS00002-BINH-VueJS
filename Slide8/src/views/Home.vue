<template lang="">
    <div>
        <h1>Đây là trang Home</h1>
    </div>
    <button @click="gotoAbout">Go to About</button>
</template>
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    
    const gotoAbout = () => {
        router.push('/about')
    }
</script>
<style lang="">
    
</style>