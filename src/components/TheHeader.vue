<template>
    <header class="tele2_header">
        <div class="container">
            <div class="tele2_header__wrapper">
                <div class="tele2_header__logo">
                    <a href="/">
                        <img src="../assets/img/Logo.png" alt="tele2" />
                    </a>
                </div>

                <div class="tele2_header__rightmenu flex-center">
                    <div class="location flex-center">
                        <img src="../assets/img/location.png" alt="location" />
                        <span>Москва и область</span>
                    </div>

                    <NotificationIcon style="margin-left: 32px" />

                    <div
                        @click="menuStore.switchMenu()"
                        class="burger flex-center"
                    >
                        <img :src="burgerImg" alt="burger" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import NotificationIcon from './NotificatonIcon.vue';
import { useMenuStore } from '~/store/menu';

import { computed } from 'vue';

import CloseIcon from '~/assets/img/Close.png';
import HamburgerIcon from '~/assets/img/hamburger.png';

const menuStore = useMenuStore();

const burgerImg = computed(() => {
    let url = menuStore.isActive ? CloseIcon : HamburgerIcon;

    return url;
});
</script>

<style scoped lang="scss">
.tele2_header {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: #1f2229;
    &__wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__rightmenu {
        & > .location {
            cursor: pointer;
            span {
                margin-left: 9px;
            }
        }

        & > .burger {
            width: 24px;
            height: 24px;
            margin-left: 22px;
            display: none;
            cursor: pointer;
        }
    }
}

@media (max-width: 910px) {
    .location {
        display: none !important;
    }

    .burger {
        display: flex !important;
    }
}
</style>
