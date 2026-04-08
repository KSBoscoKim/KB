<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const msg = ref('');
const imgSrc = ref('');

watch(
  () => route.params.mood,
  (cur, prev) => {
    if (cur === 'happy') {
      msg.value = '행복합니다';
      imgSrc.value = '';
    } else {
      msg.value = '흥미진진합니다';
      imgSrc.value = '';
    }
  },
  // watch는 기본적으로 값이 변경될 때마다 실행. 하지만 초기값도 감지하려면 immediate 옵션을 true로 설정해야한다.
  { immediate: true },
);
</script>

<template>
  <div>
    <h1>오늘의 기분은 {{ msg }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
