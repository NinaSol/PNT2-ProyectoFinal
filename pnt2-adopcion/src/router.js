import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';
import DarEnAdopcion from '@/components/DarEnAdopcion';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: AnimalesEnAdopcion,
    },
    {
        path: '/dar-adopcion',
        component: DarEnAdopcion,
    }
];

const router = new VueRouter({
    routes,
    mode:"history",
});

export default router;