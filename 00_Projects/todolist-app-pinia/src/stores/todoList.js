import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import axios from 'axios';

export const useTodoListStore = defineStore('todoList', () => {
  const BASEURI = '/api/todos';
  const state = reactive({
    todoList: [],
    // 데이터 없는 버전 -> 통신(통신의 상태 값 isLoading) ->  데이터 있는 버전
    isLoading: false,
  });

  //TodoList 목록조회
  const fetchTodoList = async () => {
    state.isLoading = true;
    try {
      const response = await axios.get(BASEURI);
      if (response.status === 200) {
        state.todoList = response.data;
      } else {
        alert('데이터 조회 실패');
      }
    } catch (error) {
      alert('에러 발생: ' + error);
    } finally {
      state.isLoading = false;
    }
  };

  const addTodo = async ({ todo, desc }, successCallback) => {
    try {
      state.isLoading = true;

      const payload = { todo, desc };
      const response = await axios.post(BASEURI, payload);
      if (response.status === 201) {
        state.todoList.push({ ...response.data, done: false });
        successCallback();
      } else {
        alert('Todo 추가 실패');
      }
    } catch (error) {
      alert('에러 발생: ' + error);
    } finally {
      state.isLoading = false;
    }
  };

  const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
    try {
      const payload = { id, todo, desc, done };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.status === 200) {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[index] = payload;
        successCallback();
      } else {
        alert('Todo 수정 실패');
      }
    } catch (error) {
      alert('에러 발생: ' + error);
    }
  };

  const deleteTodo = async (id) => {
    state.isLoading = true;
    try {
      const response = await axios.delete(BASEURI + `/${id}`);
      console.log(response.status, response.data);
      if (response.status === 200) {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList.splice(index, 1);
      } else {
        alert('Todo 삭제 실패');
      }
    } catch (error) {
      alert('에러 발생: ' + error);
    } finally {
      state.isLoading = false;
    }
  };

  const toggleDone = async (id) => {
    try {
      let todo = state.todoList.find((todo) => todo.id === id);
      let payload = { ...todo, done: !todo.done };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.status === 200) {
        todo.done = payload.done;
      } else {
        alert('Todo 상태 변경 실패');
      }
    } catch (error) {
      alert('에러 발생: ' + error);
    }
  };

  const todoList = computed(() => state.todoList);
  const isLoading = computed(() => state.isLoading);
  const doneCount = computed(() => {
    const filtered = state.todoList.filter(
      (todoItem) => todoItem.done === true,
    );
    return filtered.length;
  });

  return {
    todoList,
    isLoading,
    doneCount,
    fetchTodoList,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleDone,
  };
});
