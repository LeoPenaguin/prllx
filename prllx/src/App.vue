<template>
  <div id="app" @mousemove="mousemove" ref="app">
    <div id="container"
     >
      <div id="card" ref="card" :style="{
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

    <div id="controls">
      <p>
        <label>
          perspective
          <input v-model="perspectiveRange" type="range" min="600" max="1000" data-units="px" />
          {{perspectiveRange}}
        </label>
      </p>
      <p>
        <label>
          perspective-origin x
          <input v-model="originXRange"
          class="origin-x-range" type="range" min="0" max="100" data-units="%" />
          {{originXRange}}
        </label>
      </p>
      <p>
        <label>
          perspective-origin y
          <input v-model="originYRange"
          class="origin-y-range" type="range" min="0" max="100" data-units="%" />
          {{originYRange}}
        </label>
      </p>
    </div>

  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
}

* {
    box-sizing: border-box;
  }

#app {
  background: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  height: 60%;
  max-height: 80%;
  aspect-ratio: 2.5 / 3.5;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 10px inset;
  #card {
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

#controls {
  position: fixed;
  bottom: 0;
  left: 0;
  color: white;
}
</style>

<script lang="ts">
import {
  defineComponent, ref,
} from 'vue';
import ParallaxCard from './components/ParallaxCard';

export default defineComponent({
  components: {
    ParallaxCard,
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
