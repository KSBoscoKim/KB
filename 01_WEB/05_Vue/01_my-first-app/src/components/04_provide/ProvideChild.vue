<template>
  <div>
    <ProvideGrandChild :drilling="drilling" />
    <h1>{{ drilling }}</h1>
  </div>
</template>

<script>
import ProvideGrandChild from './ProvideGrandChild.vue';

export default {
  components: {
    ProvideGrandChild,
  },
  props: ['drilling'],
};
</script>
