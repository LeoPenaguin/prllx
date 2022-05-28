<template>
  <div id="parallax-container">
    <parallax-controls />
    <parallax-card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParallaxCard from '@/components/ParallaxCard.vue';
import ParallaxControls from '@/components/ParallaxControls.vue';

export default defineComponent({
  components: {
    ParallaxCard,
    ParallaxControls,
  },
});
</script>

<style lang="scss" scoped>
#parallax-container {
  display: flex;
}
</style>
