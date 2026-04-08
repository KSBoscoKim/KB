<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const todoStore = useTodoStore();
const { fetchTodo, deleteTodo } = todoStore;

const todo = ref({});

async function initTodo() {
  try {
    todo.value = await fetchTodo(id);
  } catch (error) {
    alert('TODO DETAIL 통신 ERR 발생');
    console.error(error);
  }
}

async function deleteTodoHandler(id) {
  try {
    const deleteRes = await deleteTodo(id);
    console.log('삭제 통신 결과: ', deleteRes);

    router.push({ name: 'todo' });
  } catch (error) {
    alert('TODO 삭제 ERR 발생');
    console.error(error);
  }
}

initTodo();
</script>

<template>
  <div>
    <h1>TODO DETAIL</h1>
    <h2>id: {{ todo.id }}</h2>
    <h2>id: {{ todo.todo }}</h2>
    <h2>desc: {{ todo.desc }}</h2>
    <h2>done: {{ todo.done }}</h2>
    <button @click="router.push({ name: 'todo' })">목록</button>
    <button @click="router.push(`/todo/edit/${todo.id}`)">
      <!-- <button
      @click="router.push({name: 'todo/edit', params: {id:id}})"
    > -->
      수정
    </button>
    <button @click="deleteTodoHandler(todo.id)">삭제</button>
  </div>
</template>

<style lang="scss" scoped></style>
