import Vue from 'vue';
import VueRouter from 'vue-router';

import AppHome from '@/components/AppHome';
import LoginView from '@/components/LoginView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome,
    },
    {
        path:'/login',
        name: 'login',
        component: LoginView
    }
];

const router = new VueRouter({
    routes,
});

export default router;