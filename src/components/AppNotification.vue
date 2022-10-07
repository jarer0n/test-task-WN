<template>
    <div
        :class="{
            notification_animation: notificationStore.notificationList.length
                ? true
                : false,
        }"
        class="notification"
        @click="notificationStore.clearNotificationList()"
    >
        <img src="../assets/img/notification-bell.png" alt="notification" />
    </div>
</template>

<script setup>
import { useNotificationStore } from '../store/notification';
const notificationStore = useNotificationStore();
</script>

<style lang="scss" scoped>
.notification {
    cursor: pointer;
    position: relative;
}

.notification.notification_animation {
    &::before {
        content: '';
        position: absolute;
        top: 20%;
        right: 15%;
        width: 6px;
        height: 6px;
        background: #3fcbff;
        border-radius: 50%;
        z-index: 5;
    }
    &::after {
        content: '';
        position: absolute;
        top: 15%;
        right: 10%;
        width: 9px;
        height: 9px;
        background: #1f2229;
        border-radius: 50%;
        z-index: 4;
    }
}

.notification_animation {
    -webkit-animation: notification 5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        infinite both;
    animation: notification 5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite
        both;
}

@-webkit-keyframes notification {
    0%,
    100% {
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    50%,
    54%,
    58% {
        -webkit-transform: rotate(18deg);
        transform: rotate(18deg);
    }
    52%,
    56%,
    60% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
@keyframes notification {
    0%,
    100% {
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    50%,
    54%,
    58% {
        -webkit-transform: rotate(18deg);
        transform: rotate(18deg);
    }
    52%,
    56%,
    60% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
</style>
