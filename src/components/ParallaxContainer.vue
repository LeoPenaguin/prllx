<template>
  <div id="parallax-container">
    <ParallaxControls class="controls" />
    <ParallaxCard />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import ParallaxCard from "./ParallaxCard.vue";
import ParallaxControls from "./ParallaxControls.vue";
import cardStore from "./card-store.ts";

export default defineComponent({
  components: {
    ParallaxCard,
    ParallaxControls,
  },
  setup() {
    provide("CARD-STORE", cardStore);
  },
});
</script>

<style lang="scss">
#parallax-container {
  display: flex;
}
</style>
