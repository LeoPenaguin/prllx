<template>
  <div id="parallax-container">
    <ParallaxControls />
    <ParallaxCard />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import ParallaxCard from './ParallaxCard.vue';
import ParallaxControls from './ParallaxControls.vue';
import cardStore from '../scripts/card-store';

export default defineComponent({
  components: {
    ParallaxCard,
    ParallaxControls,
  },
  setup() {
    provide('CARD-STORE', cardStore);
  },
});
</script>

<style lang="scss" scoped>
#parallax-container {
  display: flex;
}
</style>
