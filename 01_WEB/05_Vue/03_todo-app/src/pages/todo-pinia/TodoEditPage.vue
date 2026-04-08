<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const todoStore = useTodoStore();
const { fetchTodo, editTodo } = todoStore;

const editedTodo = ref({});

async function initTodo() {
  try {
    editedTodo.value = await fetchTodo(id);

    console.log('TODO EDIT 데이터: ', editedTodo.value);
  } catch (error) {
    alert('TODO EDIT 통신 ERR 발생');
    console.error(error);
  }
}

async function onEditTodo() {
  try {
    const editRes = await editTodo(editedTodo.value);

    console.log('TODO 수정 통신 결과: ', editRes);
    router.push({ name: 'todo' });
  } catch (error) {
    alert('TODO 수정 통신 ERR 발생');
    console.error(error);
  }
}

initTodo();
</script>

<template>
  <h1>TODO EDIT</h1>
  <div>
    <h2>todo: <input type="text" v-model.trim="editedTodo.todo" /></h2>
    <h2>desc: <input type="text" v-model.trim="editedTodo.desc" /></h2>
    <h2>done: <input type="checkbox" v-model="editedTodo.done" /></h2>
    <button @click="onEditTodo()">수정</button>
    <button @click="router.push(`/todo/detail/${id}`)">취소</button>
    <!-- <button @click="router.push({name: 'todo/detail', params: {id: id}})">취소</button> -->
  </div>
</template>

<style lang="scss" scoped></style>
