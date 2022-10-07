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

                    <div class="notification">
                        <img
                            src="../assets/img/notification.png"
                            alt="notification"
                        />
                    </div>
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
import { useMenuStore } from '../store/menu';
import { computed } from 'vue';

const menuStore = useMenuStore();

const burgerImg = computed(() => {
    let url = menuStore.isActive
        ? '/src/assets/img/Close.png'
        : '/src/assets/img/hamburger.png';

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
        & > .notification {
            margin-left: 32px;

            cursor: pointer;
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
} ;
</style>
