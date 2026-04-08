<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const BASE_URL = '/api';
const router = useRouter();
const todo = ref('');
const desc = ref('');

const addTodo = async () => {
  try {
    const addTodoUrl = BASE_URL + '/todos';
    const newTodo = {
      // id를 만들지 않는 이유?: json-server가 id를 자동으로 만들어주기 때문에 우리가 id를 만들 필요가 없다.
      todo: todo.value,
      desc: desc.value,
      done: false,
    };

    // axios가 알아서 객체를 JSON으로 변환
    const addTodoRes = await axios.post(addTodoUrl, newTodo);

    return router.push({ name: 'todo' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <h1>TODO WRITE</h1>
    <h2>todo: <input type="text" v-model.trim="todo" /></h2>
    <h2>desc: <input type="text" v-model.trim="desc" /></h2>
    <button @click="addTodo">작성</button>
    <button @click="router.push({ name: 'todo' })">취소</button>
  </div>
</template>

<style lang="scss" scoped></style>
