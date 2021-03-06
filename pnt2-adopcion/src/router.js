import Vue from 'vue';
import VueRouter from 'vue-router';

import AnimalesEnAdopcion from '@/components/AnimalesEnAdopcion';
import DarEnAdopcion from '@/components/DarEnAdopcion';
import RequestsList from '@/components/RequestsList';
import LoginView from '@/components/LoginView';
import DetalleDeMascota from '@/components/DetalleDeMascota';
import ReporteAnual from '@/components/ReporteAnual';
import ProfileView from '@/components/ProfileView';

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
        path: '/reporte',
        component: ReporteAnual,
    },
    {
        path: '/profile',
        component: ProfileView
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;