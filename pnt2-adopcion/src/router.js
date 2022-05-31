import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';
import DarEnAdopcion from '@/components/DarEnAdopcion';
import LoginView from '@/components/LoginView';
import DetalleDeMascota from '@/components/DetalleDeMascota';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: AnimalesEnAdopcion,
    },
    {
        path:'/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/mascota/:id',
        name: 'detalleMascota',
        component: DetalleDeMascota,
        props: true,
    },
    {
        path: '/dar-adopcion',
        component: DarEnAdopcion,
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;