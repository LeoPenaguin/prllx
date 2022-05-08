<template>
    <div id="parallax-card__container" @mousemove="mousemove" ref="app">
      <div id="parallax-card_content">
        <div id="parallax-card" ref="card" :style="{
          perspective: `${perspectiveRange}px`,
          perspectiveOrigin: `${originXRange}% ${originYRange}%`
        }">
          <div class="layer layer_back">
            <img src="./assets/1.png" alt="" srcset="">
          </div>
          <div class="layer layer_1">
            <img src="./assets/2.png" alt="" srcset="">
          </div>
          <div class="layer layer_2">
            <img src="./assets/3.png" alt="" srcset="">
          </div>
          <div class="layer layer_3">
            <img src="./assets/4.png" alt="" srcset="">
          </div>
          <div class="layer layer_4">
            <img src="./assets/5.png" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  props: {
    perspectiveRange: Number,
    originXRange: Number,
    originYRange: Number,
    layers: [],
  },
  setup() {
    const perspectiveRange = ref(700);
    const originXRange = ref(50);
    const originYRange = ref(50);

    const app = ref<HTMLInputElement | null>(null);
    const card = ref<HTMLInputElement | null>(null);

    const mousemove = (event: MouseEvent) => {
      originXRange.value = ((event.clientX / app.value?.offsetWidth) * 100);
      originYRange.value = ((event.clientY / app.value?.offsetHeight) * 100);
    };

    return {
      perspectiveRange,
      originXRange,
      originYRange,
      mousemove,
      app,
      card,
    };
  },
});
</script>

<style lang="scss">

#parallax-card__container {
  background: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
      img {
        width: 100%;
        height: 100%;
      }
      &.layer_back {
        transform: translateZ(0px);
        background:  rgba(white, 1);
      }
      &_1 {
          transform: translateZ(50px);
          background:  rgba(white, 0.1);
          pointer-events: none;
      }
      &_2 {
          transform: translateZ(100px);
          background:  rgba(white, 0.1);
          pointer-events: none;
      }
      &_3 {
          transform: translateZ(150px);
          background:  rgba(white, 0.1);
          pointer-events: none;
      }
      &_4 {
          transform: translateZ(200px);
          background:  rgba(white, 0.1);
          pointer-events: none;
      }
    }
  }
}

</style>
