<template>
  <div
    id="parallax-controls"
    :class="{ 'is-hidden': !isVisible }"
  >
    <button
      class="controls-toggle"
      @click="toggleVisibility"
    >
      Close
    </button>
    <div class="controls">
      <div class="control">
        <label>Dev mode</label>
        <p>
          <input
            :value="store.isDevMode"
            type="checkbox"
            @input="store.toggleDevMode()"
          >
        </p>
      </div>
      <div class="control radio">
        <div
          v-for="choice in perspectiveRangeChoices"
          :key="choice.name"
        >
          <input
            :id="choice.name"
            v-model="store.perspectiveRange"
            class="perspective"
            type="radio"
            :name="choice.name"
            :value="choice.value"
          >
          <label :for="choice.name">{{ choice.name }}</label>
        </div>
      </div>
      <div class="control">
        <label>Background color</label>
        <p>
          <input
            id="background"
            v-model="store.backgroundColor"
            type="color"
            name="background"
          >
          {{ store.backgroundColor }}
        </p>
      </div>
    </div>
    <div id="parallax-controls__layers">
      <ul>
        <li
          v-for="layer in store.layers"
          :key="layer.position"
        >
          <img
            :src="layer.img"
            :alt="layer.name"
          >

          <input
            v-model="layer.depth"
            type="number"
          >

          ({{ layer.position }}) {{ layer.name }} {{ layer.depth }}
        </li>
      </ul>
    </div>
    <div class="info">
      <p>x: {{ store.originRange.x }}</p>
      <p>y: {{ store.originRange.y }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PerpectiveDepth } from '../types/interfaces';
import useCardStore from '../stores/card';

export default defineComponent({
  setup() {
    const store = useCardStore();
    const isVisible = ref(true);

    const perspectiveRangeChoices = ref([
      {
        name: 'very-large',
        label: 'Very large',
        value: 1000,
      },
      {
        name: 'large',
        label: 'Large',
        value: 1300,
      },
      {
        name: 'medium',
        label: 'Medium',
        value: 1600,
      },
      {
        name: 'small',
        label: 'Small',
        value: 2000,
      },
    ]);

    return {
      store,
      perspectiveRangeChoices,
      PerpectiveDepth,
      isVisible,
      toggleVisibility: () => {
        isVisible.value = !isVisible.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
#parallax-controls {
  width: 300px;
  padding: 1.5rem;
  background: rgba(211, 211, 211, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 1rem;
  top: 1rem;
  border-radius: 1rem;
  z-index: 1000;
  color: white;
  transition: left 0.3s;

  &.is-hidden {
    left: -300px;
  }

  .controls-toggle {
    position: absolute;
    right: -60px;
    background: red;
    width: 50px;
    height: 50px;
    border-radius: 1rem;
  }

  .control {
    margin-bottom: 1rem;

    &.radio {
      display: flex;
      justify-content: space-around;

      .perspective[type='radio'] {
        display: none;
      }

      .perspective[type='radio']~label {
        display: inline-block;
        background: black;
        width: 50px;
        height: 50px;
        border-radius: 10px;
      }

      .perspective[type='radio']:checked~label {
        background: #4dab00;
      }
    }
  }

  .info {
    margin-bottom: 1rem;
    background: red;
  }

  &__layers {
    background: rgb(255, 255, 255);
    padding: 3px;
    margin-bottom: 1rem;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;

      li {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
      }
    }

    img {
      width: 20%;
      background: white;
      margin: 3px;
    }

    input {
      width: 100px;
    }
  }
}
</style>
