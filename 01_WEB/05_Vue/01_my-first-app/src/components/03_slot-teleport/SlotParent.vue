<template>
  <div>
    <SlotChild>
      <h1>가냐?</h1>
      <img
        src="https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp"
      />
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue';

export default {
  components: {
    SlotChild,
  },
};
</script>
