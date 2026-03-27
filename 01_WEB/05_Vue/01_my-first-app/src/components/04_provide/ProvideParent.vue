<template>
  <div>
    <ProvideChild :drilling="drilling" />
  </div>
</template>

<script>
import ProvideChild from './ProvideChild.vue';

export default {
  components: {
    ProvideChild,
  },
  //   data는 해당 component에서만
  data() {
    return {
      drilling: '어디까지 내려가는 거에요~~~',
    };
  },
  //   provide는 vue 전체에서 관리
  provide() {
    return {
      fly: '한번에 갔슈~',
    };
  },
};
</script>
