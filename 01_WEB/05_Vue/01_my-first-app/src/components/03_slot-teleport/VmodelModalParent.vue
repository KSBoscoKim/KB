<template>
  <div>
    <button @click="isModalVisible = true">모달 열기</button>
    <div class="content">
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
      <h1>원래 부모 요소의 컨텐츠입니다!</h1>
    </div>
    <!-- props로 전해줌 -->
    <VmodelModalChild v-model:visible="isModalVisible">
      <h1>Modal</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consequuntur dolor facere possimus rem corporis pariatur id dolores
        ipsum repudiandae, eligendi, reiciendis officia aperiam libero nobis
        dolore dicta illo atque.
      </p>
    </VmodelModalChild>
  </div>
</template>

<script>
import VmodelModalChild from './VmodelModalChild.vue';

export default {
  components: {
    VmodelModalChild,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
};
</script>

<style scoped></style>
