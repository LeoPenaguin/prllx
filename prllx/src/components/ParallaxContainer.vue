<template>
  <div id="parallax-container">
    <ParallaxControls
      :perspectiveRange="perspectiveRange"
      :layers="layers"
      :aspectRatio="aspectRatio"
      @update:perspectiveRange="(newValue) => (perspectiveRange = newValue)"
      @update:aspectRatio.x="(newValue) => (aspectRatio.x = newValue)"
      @update:aspectRatio.y="(newValue) => (aspectRatio.y = newValue)"
      class="controls"
    />
    <ParallaxCard :perspectiveRange="perspectiveRange" :layers="layers" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import ParallaxCard from "./ParallaxCard.vue";
import ParallaxControls from "./ParallaxControls.vue";
import { Layers } from "@/types/interfaces.ts";

export default defineComponent({
  components: {
    ParallaxCard,
    ParallaxControls,
  },
  setup() {
    const perspectiveRange = ref(1300);
    const layers: Ref<Layers[]> = ref([
      { position: 1, name: "lol0", img: "/src/assets/1.png" },
      { position: 2, name: "lol1", img: "/src/assets/2.png" },
      { position: 3, name: "lol2", img: "/src/assets/3.png" },
      { position: 4, name: "lol3", img: "/src/assets/4.png" },
      { position: 5, name: "lol4", img: "/src/assets/5.png" },
    ]);
    const aspectRatio = ref({ x: 2.5, y: 3.5 });

    return {
      perspectiveRange,
      layers,
      aspectRatio,
    };
  },
});
</script>

<style lang="scss">
#parallax-container {
  display: flex;
  .controls {
    width: 20%;
    padding: 10px;
    background: #00002c;
    color: white;
  }
}
</style>
