<template>
  <div
    id="parallax-card__container"
    ref="container"
    :class="{ 'dev-mode': store.isDevMode }"
    :style="{ backgroundColor: store.backgroundColor }"
    @mousemove="mousemove"
  >
    <div
      id="parallax-card__content"
      :style="style"
    >
      <div
        v-if="store.originRange"
        id="parallax-card"
        ref="card"
        :style="{
          perspective: `${store.perspectiveRange}px`,
          perspectiveOrigin: `${store.originRange.x}% ${store.originRange.y}%`,
        }"
      >
        <div
          v-for="layer in store.layers"
          :key="layer.position"
          class="layer"
          :class="['layer_' + layer.position]"
          :style="{ transform: `translateZ(${layer.depth}px)` }"
        >
          <img
            :src="layer.img"
            :alt="layer.name"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import useCardStore from '@/stores/card'

export default defineComponent({
    name: 'ParallaxCard',
    setup() {
        const store = useCardStore()

        const container = ref<HTMLInputElement>();
        const card = ref<HTMLInputElement | null>(null);
        const rotate3dValue = ref({});

        const mousemove = (event: MouseEvent) => {
            const percentOf = (val1: number, val2: number) => (val1 / val2) * 100;

            if (!container.value) {
              return
            }

            const rect = container.value.getBoundingClientRect();
            const x = event.clientX - rect.left; // x position within the element.
            const y = event.clientY - rect.top; // y position within the element.

            store.setOrigin(percentOf(x, container.value.offsetWidth), percentOf(y, container.value.offsetHeight));

            rotate3dValue.value = {
                transform: store.calcCardRotation(x, y, container.value),
            };
        };

        const style = computed(() => ({
            ...rotate3dValue.value,
            aspectRatio: store.aspectRatio,
        }));

        return {
            mousemove,
            container,
            card,
            rotate3dValue,
            style,
            store,
        };
    },
});
</script>

<style lang="scss" scoped>
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

#parallax-card__container.dev-mode {
    #parallax-card__content {
        overflow: visible;

        #parallax-card {
            .layer {
                &:nth-child(1n) {
                    border: 3px solid green;
                }

                &:nth-child(2n) {
                    border: 3px solid red;
                }

                &:nth-child(3n) {
                    border: 3px solid blue;
                }

                &:nth-child(4n) {
                    border: 3px solid rgb(255, 0, 255);
                }

                &:nth-child(5n) {
                    border: 3px solid rgb(255, 238, 0);
                }
            }
        }
    }
}
</style>
