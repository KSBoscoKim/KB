<template>
  <div>
    <input type="text" v-on:input="$emit('update:name', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'EmitChild',
  props: ['name'],
  emits: ['update:name'],
};
</script>
