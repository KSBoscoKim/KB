<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

const requestAPI = () => {
  // const url = 'http://localhost:3000/todos/1';
  axios.get(listUrl).then((response) => {
    console.log('# 응답객체 : ', response);
    console.log(typeof response.data);
  });
};
requestAPI();
</script>
