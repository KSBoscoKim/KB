import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/pages/todo-pinia/TodoListPage.vue'),
      // meta는 특정 기능 추가
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/todo/detail/:id',
      name: 'todo/detail',
      component: () => import('@/pages/todo-pinia/TodoDetailPage.vue'),
      meta: {
        requiresAuth: true,
      },
      // 라우터의 props(소품이라는 의미). :뒤 부분이 고정된 주소값이 아님을 라우터에게 알려준다.
      props: true,
    },
    {
      path: '/todo/write',
      name: 'todo/write',
      component: () => import('@/pages/todo-pinia/TodoWritePage.vue'),
      // meta는 특정 기능 추가
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/todo/edit/:id',
      name: 'todo/edit',
      component: () => import('@/pages/todo-pinia/TodoEditPage.vue'),
      meta: { requireAuth: true },
      props: true,
    },
  ],
});

router.beforeEach(function (to, from) {
  // 이동할 라우트(to)에 매칭된 라우트 레코드 중 meta.requiresAuth 속성이 true인지 확인
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth') !== 'true') {
      alert('로그인이 필요한 서비스입니다.');
      return { name: 'login' };
    }
  }

  // 인증이 필요없을 때
  return true;
});

export default router;
