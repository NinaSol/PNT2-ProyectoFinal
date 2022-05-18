import Vue from 'vue';
import VueRouter from 'vue-router';

import AppHome from '@/components/AppHome';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome,
    }
];

const router = new VueRouter({
    routes,
});

export default router;