<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <!-- v-model: 올려보낼 커스텀 이벤트? -->
    <VmodelEmitChild v-model:name="name" />
  </div>
</template>

<script>
import VmodelEmitChild from './VmodelEmitChild.vue';

export default {
  name: 'EmitParent',
  components: { VmodelEmitChild },
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
