<template>
  <div>
    <h1>{{ msg }}</h1>
    <ExQuizChild :answer="answer" @submit="submitHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ExQuizChild from './exQuizChild.vue';
const msg = ref('랜덤 숫자를 맞춰 주세요');
const answer = ref(parseInt(Math.random() * 20));

const submitHandler = (value) => {
  msg.value = value;
};
</script>
