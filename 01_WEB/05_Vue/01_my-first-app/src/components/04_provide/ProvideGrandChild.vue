<template>
  <div>
    <h1>도착한 props의 내용은?</h1>
    <h1>Inject로 날아온 데이터: {{ fly }}</h1>
    <h1>props로 굴러온 데이터: {{ drilling }}</h1>
  </div>
</template>

<script>
export default {
  props: ['drilling'],
  inject: ['fly'],
};
</script>
