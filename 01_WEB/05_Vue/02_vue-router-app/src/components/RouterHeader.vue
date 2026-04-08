<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 주소 값을 변경할 수 있는 작업군 router
const router = useRouter();
// 현재 값?
const route = useRoute();

watch(
  // route.path처럼 값으로 전달하면, 최초 받아온 값만 감지. 따라서 함수로 전달해야한다.
  // 자바스크립트 클로져
  () => route.path,
  (newRoute) => console.log(newRoute),
);
</script>

<template>
  <header>
    <nav>
      <button @click="router.push('/')">Home</button>
      <button @click="router.push('/about')">About</button>
      <button @click="router.back()">뒤로</button>
      <button @click="router.forward()">앞으로</button>
      <button @click="router.go(-2)">뒤로 2번</button>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
