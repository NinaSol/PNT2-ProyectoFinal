import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';
import RequestsList from '@/components/RequestsList';
import LoginView from '@/components/LoginView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: AnimalesEnAdopcion,
    },{
        path: '/solicitudes',
        name: 'solicitudes',
        component: RequestsList,
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