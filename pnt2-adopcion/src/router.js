import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: AnimalesEnAdopcion,
    }
];

const router = new VueRouter({
    routes,
});

export default router;