<template>
  <div>
    <TodoInput :addTodo="addTodo" />
    <h2>할 일 목록</h2>
    <ul>
      <TodoItem
        v-for="(todo, index) in todolist"
        :key="todo.id"
        :todo="todo"
        :toggleCompleted="toggleCompleted"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

const now = new Date().getTime();

export default {
  name: 'TodoList',
  data() {
    return {
      todolist: [
        { id: now, todo: '자전거 타기', completed: false },
        { id: now + 1, todo: '딸과 공원 산책', completed: true },
        { id: now + 2, todo: '일요일 애견 카페', completed: false },
        { id: now + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  components: {
    TodoInput,
    TodoItem,
  },
  methods: {
    addTodo(todo) {
      this.todolist.push({
        id: new Date().getTime(),
        todo: todo,
        completed: false,
      });
    },
    deleteTodo(id) {
      let delIndex = -1;

      for (let i = 0; i < this.todolist.length; i++) {
        if (id === this.todolist[i].id) delIndex = i;
      }

      if (delIndex !== -1) this.todolist.splice(delIndex, 1);
    },

    toggleCompleted(id) {
      let toggleIndex = 0;

      for (let i = 0; i < this.todolist.length; i++) {
        if (id === this.todolist[i].id)
          this.todolist[i].completed = !this.todolist[i].completed;
      }
    },
  },
};
</script>

<style scoped></style>
