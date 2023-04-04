import { createRouter, createWebHistory } from 'vue-router';
import LandingLayout from './views/layout/LandingLayout.vue';
import HomePage from './views/pages/Home.vue';
import NuahOrg from "@/views/projects/NuahOrg";
import NuahUniversity from "@/views/projects/NuahUniversity";
import CultureBrand from "@/views/projects/CultureBrand";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingLayout,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    component: HomePage,
                },
            ]
        },
        {
            path: '/nuah',
            component: NuahOrg,
        },
        {
            path: '/university',
            component: NuahUniversity,
        },
        {
            path: '/culture',
            component: CultureBrand,
        },
        {
            path: '/:notFound(.*)',
            redirect: '/home'
        }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(to, from, savedPosition);
    //     if (savedPosition) {
    //         return savedPosition;
    //     }
    //     return {top: 0, left: 0};
    // }
});

export default router;