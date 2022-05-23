import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';
import LoginView from '@/components/LoginView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: AnimalesEnAdopcion,
    },
    {
        path:'/login',
        name: 'login',
        component: LoginView
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;