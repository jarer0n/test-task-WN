<template>
    <TheHeader />
    <div class="container">
        <TheMenu />

        <div class="tele2_main flex-center">
            {{ menuStore.selectedMenuItem?.name }}
        </div>
    </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheMenu from './components/TheMenu.vue';
import { useMenuStore } from './store/menu';

const menuStore = useMenuStore();
</script>

<style scoped>
.tele2_main {
    margin-top: 70px;
}
</style>
