import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    // { path: '/', redirect: '/todos' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/todos', component: () => import('@/pages/TodoList.vue') },
    { path: '/todos/add', component: () => import('@/pages/AddTodo.vue') },
    {
      path: '/todos/edit/:id',
      component: () => import('@/pages/EditTodo.vue'),
    },
    { path: '/:paths(.*)*', component: () => import('@/pages/NotFound.vue') },
  ],
});

export default router;
