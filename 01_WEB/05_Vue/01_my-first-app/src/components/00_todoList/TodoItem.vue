<template>
  <li
    @click="toggleCompleted(todo.id)"
    :class="todo.completed ? 'completed' : ''"
  >
    {{ todo.todo }}
    <button @click.stop="deleteTodo(todo.id)">삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'toggleCompleted', 'deleteTodo'],
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
