<template>
  <div>
    <span>
      <input v-model.number="userInput" @keyup.enter="submit" />
      <button @click="submit">정답!</button>
    </span>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const userInput = ref(0);
const msg = ref('');
const attempt = ref(0);

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

watchEffect(() => {
  if (attempt.value === 3) return alert('3번째 시도입니다!');
});
</script>
