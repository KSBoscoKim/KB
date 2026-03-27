<template>
  <div>
    <!-- 콧수염, 부모 컴포넌트가 보내준다 -->
    <h2>{{ todo }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  props: ['todo'],
};
</script>

<style scoped></style>
