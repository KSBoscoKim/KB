<template>
  <div>
    <input v-model.number="userInput" />
    <button @click="submit">정답 제출</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const userInput = ref(0);
const attempt = ref(0);
const msg = ref('');

const props = defineProps({
  answer: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['submit']);

const submit = () => {
  attempt.value++;

  if (props.answer > userInput.value) msg.value = 'UP';
  else if (props.answer < userInput.value) msg.value = 'DOWN';
  else msg.value = '정답입니다!';

  emit('submit', msg.value);
};

watch(attempt, (cur, prev) => {
  if (cur === 3) return alert('3번째 시도 입니다!');
});
</script>
