<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">+</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (current, prev) => {
  console.log(`카운트가 ${prev}에서 ${current}로 변경되었습니다.`);
});
</script>
