<script setup>
import axios from 'axios';
import { ref } from 'vue';

// 변수 이름이 전부 대문자 -> 상수
const CORS_URL =
  'https://port-0-kb7-back-node-mmc3pmla14c7b8b4.sel3.cloudtype.app';

const PROXY_URL = '/api';

async function checkCorsOn() {
  try {
    const corsUrl = CORS_URL + '/cors/on';
    const corsRes = await fetch(corsUrl);
    const data = await corsRes.json();
    console.log('CORS 응답 결과: ', data);
  } catch (e) {
    console.error('CORS 설정 ON 에러:', e);
  }
}

async function checkCorsOff() {
  try {
    const corsUrl = PROXY_URL + '/cors/off';
    const corsRes = await axios.get(corsUrl);
    const data = corsRes.data;

    // const corsRes = await fetch(corsUrl);
    // const data = await corsRes.json();
    console.log('CORS 응답 결과: ', data);
  } catch (e) {
    console.error('CORS 설정 OFF 에러:', e);
  }
}
</script>

<template>
  <div>
    <h1>CORS PAGE</h1>
    <button @click="checkCorsOn">CORS 설정 ON</button>
    <button @click="checkCorsOff">CORS 설정 OFF</button>
  </div>
</template>

<style lang="scss" scoped></style>
