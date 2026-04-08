<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const counterStore = useCounterStore();

// 반응성을 유지하면서 꺼내올 값. 값이어야 함.
const { count, doubleCount } = storeToRefs(counterStore);
// 함수는 바로 꺼내도 괜찮다.
const { increment, decrement } = counterStore;
</script>

<template>
  <div>
    <h1>Counter</h1>
    <h2>count: {{ count }}</h2>
    <h2>count X 2: {{ doubleCount }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<style lang="scss" scoped></style>
