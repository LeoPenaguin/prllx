<template>
  <div>
    <ParallaxContainer />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ParallaxContainer from "./components/ParallaxContainer.vue";

export default defineComponent({
  components: {
    ParallaxContainer,
  },
});
</script>
