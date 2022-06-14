import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';
import DarEnAdopcion from '@/components/DarEnAdopcion';
import RequestsList from '@/components/RequestsList';
import LoginView from '@/components/LoginView';
import DetalleDeMascota from '@/components/DetalleDeMascota';
import DataView from '@/components/DataView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: AnimalesEnAdopcion,
    },{
        path: '/solicitudes-enviadas',
        name: 'solicitudes-enviadas',
        component: RequestsList,
        props: {showSent: true}
    },{
        path: '/solicitudes-recibidas',
        name: 'solicitudes-recibidas',
        component: RequestsList,
        props: {showReceived: true}
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
        path: '/mascota',
        name: 'misMascotas',
        component: AnimalesEnAdopcion,
        props: true,
    },
    {
        path: '/dar-adopcion',
        component: DarEnAdopcion,
    },
    {
        path: '/pets-data',
        name: 'pets-data',
        component: DataView
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;