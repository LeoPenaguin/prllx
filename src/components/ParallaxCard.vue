<template>
  <div
    id="parallax-card__container"
    @mousemove="mousemove"
    :style="{ backgroundColor }"
    ref="container"
  >
    <div id="parallax-card__content" :style="style">
      <div
        id="parallax-card"
        ref="card"
        v-if="originRange"
        :style="{
          perspective: `${perspectiveRange}px`,
          perspectiveOrigin: `${originRange.x}% ${originRange.y}%`,
        }"
      >
        <div
          v-for="layer in layers"
          :key="layer.position"
          class="layer"
          :class="['layer_' + layer.position]"
          :style="{ transform: `translateZ(${layer.depth}px)` }"
        >
          <img :src="layer.img" :alt="layer.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject, toRef } from "vue";

export default defineComponent({
  name: "parallaxCard",
  setup() {
    const { state, setOrigin, calcCardRotation } = inject("CARD-STORE");

    const originRange = toRef(state, "originRange");

    const container = ref<HTMLInputElement | null>(null);
    const card = ref<HTMLInputElement | null>(null);
    const rotate3dValue = ref({});

    const mousemove = (event: MouseEvent) => {
      const percentOf = (val1: number, val2: number | undefined) =>
        (val1 / val2) * 100;

      const rect = container.value.getBoundingClientRect();
      const x = event.clientX - rect.left; // x position within the element.
      const y = event.clientY - rect.top; // y position within the element.

      setOrigin(
        percentOf(x, container?.value?.offsetWidth),
        percentOf(y, container?.value?.offsetHeight)
      );

      rotate3dValue.value = {
        transform: calcCardRotation(x, y, container.value),
      };
    };

    const style = computed(() => ({
      ...rotate3dValue.value,
      aspectRatio: state.aspectRatio,
    }));

    return {
      mousemove,
      container,
      card,
      rotate3dValue,
      originRange,
      style,
      perspectiveRange: toRef(state, "perspectiveRange"),
      layers: toRef(state, "layers"),
      backgroundColor: toRef(state, "backgroundColor"),
    };
  },
});
</script>

<style lang="scss">
#parallax-card__container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000;
}

#parallax-card__content {
  height: 60%;
  max-height: 80%;
  aspect-ratio: 2.5 / 3.5;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 10px inset;
  #parallax-card {
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    transform: translateZ(0px);
    .layer {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      transition: transform 1s;
      pointer-events: none;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
