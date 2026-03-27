<template>
  <div>
    <span>
      <input type="number" v-model.trim="userInput" />
      <button @click="checkAnswer">정답!</button>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref(0);
const props = defineProps(['randNum']);
const msg = ref('');
const emit = defineEmits(['send-msg']);

const checkAnswer = () => {
  if (userInput.value > props.randNum) {
    msg.value = 'DOWN';
  } else if (userInput.value < props.randNum) {
    msg.value = 'UP';
  } else {
    msg.value = '정답입니다!';
  }

  emit('send-msg', msg.value);
};
</script>
