import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const BASE_URL = '/api';

// 관례?? 훅함수. use는 외부에서 특정 모듈을 꺼내쓰기위해.
// defineStore 첫 인자: 내가 만들 스토어의 이름.
// '여러 스토어를 사용할 때 이름을 기준으로 확인한다' pinia 내부적으로는 이름이 있어야 관리가 가능
// 익명함수: 스토어가 관리 할 상태. 그 상태를 변경할 수 있는 액션함수 정의해서 전달.
// 모듈임을 알리기 위해 맨 앞 export
// 관리할 상태값, 액션함수
export const useTodoStore = defineStore('todo', () => {
  const todoArr = ref([]);
  const isFetching = ref(false);
  const isError = ref(false);

  const resetCondition = () => {
    isFetching.value = true;
    isError.value = false;
  };

  const fetchTodoList = async () => {
    try {
      resetCondition();

      const fetchTodolistUrl = BASE_URL + '/todos';
      const fetchTodoListRes = await axios.get(fetchTodolistUrl);

      todoArr.value = fetchTodoListRes.data;
      isFetching.value = false;

      return todoArr.value;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      resetCondition();

      const addTodoUrl = BASE_URL + '/todos';
      const addTodoRes = await axios.post(addTodoUrl, newTodo);

      isFetching.value = false;
      return addTodoRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const fetchTodo = async (id) => {
    try {
      resetCondition();

      const fetchTodoUrl = BASE_URL + `/todos/${id}`;
      const fetchTodoRes = await axios.get(fetchTodoUrl);

      // 찍혔다는건 통신이 성공했다는 뜻이므로 isFetching은 false로 바꿔준다.
      // axios의 get요청은 서버로부터 받은 응답을 객체 형태로 반환한다.
      // 객체의 data속성에 실제 서버 데이터(JSON 객체)가 들어 있다.
      // 따라서 전체 응답 객체가 아닌 실제 데이터를 사용하기 위해 .data를 붙인다.
      isFetching.value = false;
      return fetchTodoRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const editTodo = async (editTodo) => {
    try {
      resetCondition();

      const editTodoUrl = BASE_URL + `/todos/${editTodo.id}`;
      const editTodoRes = await axios.patch(editTodoUrl, editTodo);

      isFetching.value = false;
      return editTodoRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      resetCondition();

      const deleteTodoUrl = BASE_URL + `/todos/${id}`;
      const deleteTodoRes = await axios.delete(deleteTodoUrl);

      isFetching.value = false;
      return deleteTodoRes.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    todoArr,
    isFetching,
    isError,
    fetchTodoList,
    fetchTodo,
    addTodo,
    editTodo,
    deleteTodo,
  };
});

// reactive 통으로 바꿀 땐
// export const useTodoStore = defineStore('todo', () => {
//   const todoArr = reactive({ arr: [] });
//   const isFetching = ref(false);
//   const isError = ref(false);

//   const fetchTodoList = async () => {
//     try {
//       isFetching.value = true;
//       const fetchTodolistUrl = BASE_URL + '/todos';
//       const fetchTodoListRes = await axios.get(fetchTodolistUrl);

//       todoArr = Object.assign(todoArr, fetchTodoListRes.data);
//       isFetching.value = false;

//       return todoArr.value;
//     } catch (error) {
//       isError.value = true;
//       console.error(error);
//     }
//   };

//   return { todoArr, isFetching, isError, fetchTodoList };
// });
