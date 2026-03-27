<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">+</button>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';

const count = ref(0);

// 익명함수 안에 반응형 데이터가 있으면 무조건 반응
watchEffect(() => {
  console.log(`카운트가 ${count.value}로 변경되었습니다.`);
});
</script>
