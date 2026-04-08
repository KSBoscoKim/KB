import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import('@/views/DynamicView.vue'),
      props: true,
    },
    {
      path: '/dynamic-watch/:mood',
      name: 'dynamic-watch',
      component: () => import('@/views/DynamicWatchView.vue'),
      props: true,
    },
    {
      path: '/cors',
      name: 'cors',
      component: () => import('@/views/CorsView.vue'),
    },
    {
      path: '/cors-ex',
      name: 'cors-ex',
      component: () => import('@/views/CorsExView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
