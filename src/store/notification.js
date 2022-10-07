import { defineStore } from 'pinia';

export const useNotificationStore = defineStore({
    id: 'notification',
    state: () => ({
        notificationList: [1, 2, 3],
    }),

    getters: {},

    actions: {
        clearNotificationList() {
            this.notificationList = [];
        },
    },
});
