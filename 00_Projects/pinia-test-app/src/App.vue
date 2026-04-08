<script setup>
import { ref, computed } from 'vue';
import { useTodoListStore } from './stores/todoList';

const todo = ref('');

const todoListStore = useTodoListStore();
const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;

const doneCount = computed(() => todoListStore.doneCount);

const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = '';
};
</script>

<template>
  <div>
    <h2>TodoList 테스트(Composition API)</h2>
    <hr />
    할 일 추가:
    <input type="text" v-model="todo" />
    <button @click="addTodoHandler">추가</button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
        </span>
        &nbsp;&nbsp;&nbsp;
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할 일 수: {{ doneCount }}</div>
  </div>
</template>

<style lang="scss" scoped></style>

<!-- <script setup>
import { ref, computed } from 'vue';
import { useCounterStore } from '@/stores/counter.js';

const { increment } = useCounterStore();
const store = useCounterStore();

const doubleCount = computed(() => store.doubleCount);

// const store = useCounterStore();
// console.log(store);
// console.log(store.count);
// store.count = 10;
</script>

<template>
  count: {{ store.count }} <br />
  doubleCount: {{ doubleCount }} <br />
  <button @click="increment">Increment</button>
</template>

<style lang="scss" scoped></style> -->
