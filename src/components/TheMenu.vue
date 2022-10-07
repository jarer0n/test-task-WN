<template>
    <div :class="{ opened: menuStore.isActive }" class="tele2_menu">
        <ul class="tele2_menu__list">
            <li
                class="tele2_menu__item"
                :class="{
                    active: menuStore.selectedMenuItem.id === item.id,
                }"
                v-for="item in menuStore.menuList"
                :key="item.id"
                @click="menuStore.selectItemFromMenu(item)"
            >
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <div class="mobile_menu_footer">
            <img src="../assets/img/location.png" alt="location" />
            <span>Москва и область</span>
        </div>
    </div>
</template>

<script setup>
import { useMenuStore } from '~/store/menu';

const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
.tele2_menu {
    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border-bottom: 1px solid #d3d9df;
        min-height: 47px;
        margin-top: 40px;
    }
    &__item {
        margin-right: 18px;
        cursor: pointer;
        min-height: 47px;
        display: flex;
        align-items: center;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #1f2229;
            transform: scale(0);
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            color: darken(#7c8792, 10%);
        }
    }
    &__item.active {
        &::before {
            transform: scale(1);
        }
    }
}

.mobile_menu_footer {
    display: none;
    cursor: pointer;
}

@media (max-width: 910px) {
    .tele2_menu {
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 4;
        width: 100%;
        height: calc(100% - 40px);
        transition: all 0.3s ease-in-out;
        &__list {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            flex-wrap: nowrap;
            background: #f5f5f5;
            border: none;
            font-size: 16px;
            line-height: 22px;
            font-weight: bold;
            padding: 24px 18px;
        }

        &__item {
            border-bottom: 1px solid #d3d9df;
            width: 100%;
            margin: 0;
            min-height: auto;
            height: 30px;
            margin-bottom: 16px;
            &:last-child {
                margin-bottom: 56px;
            }
        }
    }

    .mobile_menu_footer {
        position: fixed;
        z-index: 4;
        bottom: 0;
        left: -100%;
        background: #f3f5f6;
        height: 56px;
        width: 100%;
        padding: 15px;
        font-weight: 400;
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;

        span {
            margin-left: 9px;
        }
    }

    .tele2_menu.opened {
        left: 0;
        & > .mobile_menu_footer {
            left: 0;
        }
    }
}
</style>
