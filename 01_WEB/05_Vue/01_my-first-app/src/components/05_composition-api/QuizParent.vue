<template>
  <div>
    <h1>{{ msg }}</h1>
    <QuizChild :answer="answer" @submit="submitHander" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import QuizChild from './QuizChild.vue';

const rand = parseInt(Math.random() * 20);
const answer = ref(rand);
const msg = ref('랜덤 숫자를 맞춰 주세요!');

const submitHander = (value) => {
  msg.value = value;
};
</script>
