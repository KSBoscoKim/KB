<template>
  <div>
    <button @click="showModal">모달 열기</button>
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
    <ModalChild :visible="isModalVisible" @close="hideModal">
      <h1>Modal</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consequuntur dolor facere possimus rem corporis pariatur id dolores
        ipsum repudiandae, eligendi, reiciendis officia aperiam libero nobis
        dolore dicta illo atque.
      </p>
    </ModalChild>
  </div>
</template>

<script>
import ModalChild from './ModalChild.vue';

export default {
  components: {
    ModalChild,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    hideModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped></style>
