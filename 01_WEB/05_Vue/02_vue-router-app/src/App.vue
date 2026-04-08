<script setup>
import { RouterLink, RouterView } from 'vue-router';
import RouterHeader from './components/RouterHeader.vue';

window.localStorage.setItem('name', '이효석');
console.log(window.localStorage.getItem('name'));
localStorage.setItem('judengchi', '구치파치');

localStorage.removeItem('name');
localStorage.clear();
console.log(localStorage);
</script>

<template>
  <header>
    <nav>
      <!-- 주소값만 변경. 라우터가 인지. -->
      <!-- a 링크 데이터 바뀔 때 페이지 새로고침 -> 라우터 링크 데이터 바뀔 때 페이지 새로고침 X -->
      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">Happy</RouterLink>
      /
      <RouterLink to="/dynamic/exciting">Exciting</RouterLink>
      /
      <RouterLink to="/dynamic-watch/happy">Happy (Watch)</RouterLink>
      /
      <RouterLink to="/dynamic-watch/exciting">Exciting (Watch)</RouterLink>
      /
      <RouterLink to="/cors">CORS</RouterLink>
      /
      <RouterLink to="/cors-ex">CORS_EX</RouterLink>
    </nav>
  </header>
  <RouterHeader />
  <RouterView />
</template>

<style scoped></style>
