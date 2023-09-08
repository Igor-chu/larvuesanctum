import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/', component: () => import('./components/Home.vue')},
    {
        path: '/contacts', component: () => import('./components/Contacts.vue'),
        name: 'contacts.index'
    },
    {
        path: '/about', component: () => import('./components/About.vue'),
        name: 'about.index'
    },
    {
        path: '/get', component: () => import('./components/Get.vue'),
        name: 'get.index'
    },
    {
        path: '/user/login', component: () => import('./components/Login.vue'),
        name: 'user.login'
    },
    {
        path: '/user/registration', component: () => import('./components/Registration.vue'),
        name: 'user.registration'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
