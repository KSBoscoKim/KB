<template>
  <div>
    <input type="text" v-model.trim="color" />
    <button @click="$emit('colorChanged', color)">색상 전달</button>
  </div>
</template>
<script>
export default {
  name: 'ColorEmitChild',
  emits: ['colorChanged'],
  data() {
    return {
      color: '',
    };
  },
};
</script>
