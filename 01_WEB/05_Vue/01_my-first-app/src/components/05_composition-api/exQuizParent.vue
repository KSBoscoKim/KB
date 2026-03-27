<template>
  <div>
    <h1>{{ msg }}</h1>
    <QuizChild :randNum="randNum" @send-msg="emitHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import QuizChild from './exQuizChild.vue';

const msg = ref('랜덤 숫자를 맞춰 주세요');
const randNum = ref(Math.floor(Math.random() * 20));
const emitHandler = (value) => {
  msg.value = value;
};
</script>
