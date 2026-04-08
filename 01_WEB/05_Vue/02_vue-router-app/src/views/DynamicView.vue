<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mood = computed(() => route.params.mood);
const msg = computed(() =>
  mood.value === 'happy' ? '행복하다' : '흥미진진하다',
);
// const imgSrc = computed(() => mood.value ? )
</script>

<template>
  <div>
    <h1>오늘의 기분은 {{ msg }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
