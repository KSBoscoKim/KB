<template>
  <div>
    할 일 <input type="text" v-model="todo" v-on:keyup.enter="handleAddtodo" />
    <button @click="handleAddtodo">추가</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: ['addTodo'],
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    handleAddtodo() {
      if (this.todo.trim() === '') return (this.todo = '');

      this.$emit('addTodoEmit', this.todo);

      this.todo = '';
    },
  },
};
</script>

<style scoped></style>
