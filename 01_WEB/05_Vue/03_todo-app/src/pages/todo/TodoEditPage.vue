<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const BASE_URL = '/api';

const todo = ref({});
const editedTodo = ref('');
const editedDesc = ref('');
const editedDone = ref(false);

// fetchTodo가 왜 필요한지? 수정사항만 반영해서 put하면 되지 않나??
// 애초의 값을 받아오기 위한. 빈 input만으로는 제대로 된 수정이 안된다.
const fetchTodo = async () => {
  try {
    const todoUrl = BASE_URL + `todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todo.value = todoRes.data;

    // 이 부분 todo.todo, todo.desc, todo.done으로 써도 되는지?
    editedTodo.value = todo.value.todo;
    editedDesc.value = todo.value.desc;
    editedDone.value = todo.value.done;

    console.log('Todo 데이터 : ', todo.value);
  } catch (error) {
    alert('TODO DETAIL 통신에러');
    console.error(error);
  }
};

const editTodo = async (id) => {
  try {
    const todoUrl = BASE_URL + `todos/${id}`;
    // script파트에 editedTodo ref가 있는데 여기서 다시 객체선언한 이유는?
    // 한 번에 감싸서 보내기 위해
    const newEditedTodo = {
      todo: editedTodo.value,
      desc: editedDesc.value,
      done: editedDone.value,
    };

    const todoRes = await axios.put(todoUrl, newEditedTodo);
    router.push({ name: 'todo' });
  } catch (error) {
    alert('error발생');
    console.error(error);
  }
};

fetchTodo();
</script>

<template>
  <h1>TODO EDIT</h1>
  <div>
    <h2>todo: <input type="text" v-model.trim="editedTodo" /></h2>
    <h2>desc: <input type="text" v-model.trim="editedDesc" /></h2>
    <h2>done: <input type="checkbox" v-model="editedDone" /></h2>
    <button @click="editTodo(id)">수정</button>
    <button @click="router.push(`/todo/detail/${id}`)">취소</button>
    <!-- <button @click="router.push({name: 'todo/detail', params: {id: id}})">취소</button> -->
  </div>
</template>

<style lang="scss" scoped></style>
