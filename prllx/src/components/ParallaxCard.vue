<template>
  <div id="parallax-card__container" @mousemove="mousemove" ref="container">
    <div id="parallax-card__content" :style="rotate3dValue">
      <div
        id="parallax-card"
        ref="card"
        :style="{
          perspective: `${perspectiveRange}px`,
          perspectiveOrigin: `${originXRange}% ${originYRange}%`,
        }"
      >
        <div
          v-for="layer in layers"
          :key="layer.position"
          class="layer"
          :class="['layer_' + layer.position]"
        >
          <img :src="layer.img" :alt="layer.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Layers } from "@/types/interfaces.ts";

export default defineComponent({
  name: "parallaxCard",
  props: {
    perspectiveRange: {
      type: Number,
      required: true,
    },
    layers: {
      type: Array as PropType<Layers[]>,
      required: true,
    },
  },
  emits: ["update:originXRange", "update:originYRange"],
  setup() {
    const originXRange = ref(0);
    const originYRange = ref(0);
    const rotate3dValue = ref({});

    const container = ref<HTMLInputElement | null>(null);
    const card = ref<HTMLInputElement | null>(null);

    const mousemove = (event: MouseEvent) => {
      const percentOf = (val1: number, val2: number | undefined) =>
        (val1 / val2) * 100;

      const rect = container.value.getBoundingClientRect();
      const x = event.clientX - rect.left; // x position within the element.
      const y = event.clientY - rect.top; // y position within the element.

      originXRange.value = percentOf(x, container?.value?.offsetWidth);
      originYRange.value = percentOf(y, container?.value?.offsetHeight);

      const transforms = (
        xPostion: number,
        yPostion: number,
        component: HTMLInputElement
      ) => {
        const box = component.getBoundingClientRect();
        const calcX = -(yPostion - box.y - box.height / 2) / 500;
        const calcY = (xPostion - box.x - box.width / 2) / 500;

        return (
          `perspective(100px) ` +
          `rotateX(${calcX}deg) ` +
          `rotateY(${calcY}deg) `
        );
      };

      rotate3dValue.value = {
        transform: transforms(x, y, container.value),
      };
    };

    return {
      mousemove,
      container,
      card,
      rotate3dValue,
      originXRange,
      originYRange,
    };
  },
});
</script>

<style lang="scss">
#parallax-card__container {
  background: linear-gradient(
    140deg,
    rgb(2, 0, 36) 0%,
    rgb(0 0 46) 35%,
    rgb(0 57 68) 100%
  );

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
      background: rgba(white, 0.1);
      pointer-events: none;
      img {
        width: 100%;
        height: 100%;
      }
      &_1 {
        transform: translateZ(0px);
      }
      &_2 {
        transform: translateZ(50px);
      }
      &_3 {
        transform: translateZ(100px);
      }
      &_4 {
        transform: translateZ(150px);
      }
      &_5 {
        transform: translateZ(200px);
      }
      &_5 {
        transform: translateZ(250px);
      }
    }
  }
}
</style>
