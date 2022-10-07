import { defineStore } from 'pinia';

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        menuList: [
            {
                name: 'Преимущества Tele2',
                id: 1,
            },
            {
                name: 'Тарифы',
                id: 2,
            },
            {
                name: 'Акции и спецпредложения',
                id: 3,
            },
            {
                name: 'Промотариф Tele2',
                id: 4,
            },
            {
                name: 'Технология eSIM',
                id: 5,
            },
            {
                name: 'Подключение нового абонента',
                id: 6,
            },
        ],

        selectedMenuItem: {},

        isActive: false,
    }),

    getters: {},

    actions: {
        selectItemFromMenu(item) {
            this.selectedMenuItem = item;
            this.isActive = false;
        },

        switchMenu() {
            this.isActive = !this.isActive;
        },
    },
});
