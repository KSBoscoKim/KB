<script setup>
import { ref } from 'vue';
</script>

<template>
  <div>
    <h1>TODO PAGE</h1>
    <h2 v-if="isFetching">데이터 로딩 중</h2>
    <h2 v-else-if="isError">통신 중 에러 발생</h2>
    <div v-else>
      <ul>
        <li v-for="(item, idx) in todoArr">
          {{ item.id }} /
          <router-link :to="`/todo/detail/${item.id}`">
            {{ item.todo }}
          </router-link>
          / {{ item.done }}
        </li>
      </ul>
      <button>Todo 작성</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
