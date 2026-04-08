<script setup>
import { ref } from 'vue';
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    /
    <router-link to="/login">Login</router-link>
    /
    <router-link to="/todo">Todo</router-link>
  </nav>
</template>

<style lang="scss" scoped></style>
