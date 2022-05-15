<template>
  <div id="parallax-controls">
    <div class="control">
      <label>perspective !</label>
      <input
        :value="perspectiveRange"
        @input="setPerspectiveRange($event.target.value)"
        type="range"
        min="1300"
        max="2000"
        data-units="px"
      />
      <p>{{ perspectiveRange }}</p>
    </div>
    <div class="control">
      <label>Ratio</label>
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
      <p>{{ aspectRatio }}</p>
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
    <p>{{ originRange }}</p>
    <div class="control">
      <input
        :value="backgroundColor"
        @input="setBackgroundColor($event.target.value)"
        type="color"
        id="background"
        name="background"
      />
      <p>{{ backgroundColor }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, toRef } from 'vue';
import { AspectRatio } from '../types/interfaces';

export default defineComponent({
  setup() {
    const { state, setPerspectiveRange, setAspectRatio, setBackgroundColor, updateLayer } = inject('CARD-STORE');

    return {
      perspectiveRange: toRef(state, 'perspectiveRange'),
      layers: toRef(state, 'layers'),
      aspectRatio: toRef(state, 'aspectRatio'),
      backgroundColor: toRef(state, 'backgroundColor'),
      originRange: toRef(state, 'originRange'),
      setPerspectiveRange,
      setAspectRatio,
      setBackgroundColor,
      updateLayer,
      AspectRatio,
    };
  },
});
</script>

<style lang="scss">
#parallax-controls {
  width: 20%;
  padding: 10px;
  background: #000000;
  color: white;
  &__layers {
    background: rgb(22, 22, 22);
    padding: 3px;

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
  }
}
</style>
