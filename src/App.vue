<template>
  <div>
    <parallax-container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParallaxContainer from '@/components/ParallaxContainer.vue';

export default defineComponent({
  components: {
    ParallaxContainer,
  },
});
</script>

<style lang="scss">
@import '@/assets/reset.css';

html {
  font-family: sans-serif;
}
</style>
