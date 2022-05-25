<template>
  <div id="parallax-controls" :class="{ 'is-hidden': !isVisible }">
    <button @click="toggleVisibility" class="controls-toggle">Close</button>
    <div class="control">
      <label>Dev mode</label>
      <p>
        <input :value="isDevMode" @input="setIsDevMode(!isDevMode)" type="checkbox" />
        {{ isDevMode }}
      </p>
    </div>
    <div class="control">
      <label>Perspective</label>
      <div v-for="choice in perspectiveRangeChoices">
        <input type="radio" :id="choice.name" :name="choice.name" :value="choice.value" v-model="perspectiveRangeRef">
        <label :for="choice.name">{{choice.label}}</label>
      </div>
      {{ perspectiveRangeRef }}
    </div>
    <div class="control">
      <label>Ratio</label>
      <p>
        <select name="ratio" @change="setAspectRatio($event.target.value)">
          <option
            v-for="(ratio, index) in AspectRatio"
            :key="ratio"
            :value="ratio"
            :selected="AspectRatio.card === ratio"
          >
            {{ index }}
          </option>
        </select>
        {{ aspectRatio }}
      </p>
    </div>
    <div id="parallax-controls__layers">
      <ul>
        <li v-for="layer in layers" :key="layer.position">
          <img :src="layer.img" :alt="layer.name" />

          <input :value="layer.depth" @input="updateLayer({ ...layer, depth: $event.target.value })" type="number" />

          ({{ layer.position }}) {{ layer.name }} {{ layer.depth }}
        </li>
      </ul>
    </div>
    <div class="info">
      <p>x: {{ originRange.x }}</p>
      <p>y: {{ originRange.y }}</p>
    </div>
    <div class="control">
      <label>Background color</label>
      <p>
        <input
          :value="backgroundColor"
          @input="setBackgroundColor($event.target.value)"
          type="color"
          id="background"
          name="background"
        />
        {{ backgroundColor }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { defineComponent, inject, toRef, ref } from 'vue';
import { AspectRatio, PerpectiveDepth } from '../types/interfaces';

export default defineComponent({
  setup() {
    const { state, setIsDevMode, setPerspectiveDepth, setAspectRatio, setBackgroundColor, updateLayer } = inject('CARD-STORE');

    const isVisible = ref(true);

    let  perspectiveRange = toRef(state, 'perspectiveRange')

    let perspectiveRangeChoices = ref([
      {
        name: 'very-large',
        label: 'Very large',
        value: 1000
      },
      {
        name: 'large',
        label: 'Large',
        value: 1300
      },
      {
        name: 'medium',
        label: 'Medium',
        value: 1600
      },
      {
        name: 'small',
        label: 'Small',
        value: 2000
      }
    ])

    let perspectiveRangeRef = computed({
      set: (value) => { setPerspectiveDepth(value) },
      get() { return perspectiveRange.value.toString() }
    })

    return {
      isDevMode: toRef(state, 'isDevMode'),
      layers: toRef(state, 'layers'),
      aspectRatio: toRef(state, 'aspectRatio'),
      backgroundColor: toRef(state, 'backgroundColor'),
      originRange: toRef(state, 'originRange'),
      perspectiveRangeRef,
      perspectiveRangeChoices,
      setIsDevMode,
      setAspectRatio,
      setBackgroundColor,
      updateLayer,
      AspectRatio,
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
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 1rem;
  top: 1rem;
  bottom: 1rem;
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
  }
  .info {
    margin-bottom: 1rem;
  }
  &__layers {
    background: rgb(22, 22, 22);
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
