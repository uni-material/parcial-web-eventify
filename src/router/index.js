import HomeComponent from "../eventify/pages/home.component.vue";
import {createRouter, createWebHistory} from "vue-router";

const CheckInComponent = () => import('../eventify/components/check-in.component.vue');

const routes = [
    { path: '/home',                    name: 'home',       component: HomeComponent,               meta: { title: 'Home' } },
    { path: '/registration/event-check-ins/new', name: 'CheckIn', component: CheckInComponent, props: true,},
    { path: '/',                        name: 'default',    redirect: '/home'  },
];

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'Eventify';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;