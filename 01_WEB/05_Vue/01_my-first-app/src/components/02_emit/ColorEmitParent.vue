<template>
  <div :style="{ backgroundColor: color }">
    <h1>저의 색상을 정해주세요!!</h1>
    <ColorEmitChild v-on:colorChanged="colorChangeHandler" />
  </div>
</template>
<script>
import ColorEmitChild from './ColorEmitChild.vue';
export default {
  data() {
    return {
      color: '',
    };
  },
  components: {
    ColorEmitChild,
  },
  methods: {
    colorChangeHandler(color) {
      this.color = color;
    },
  },
};
</script>
