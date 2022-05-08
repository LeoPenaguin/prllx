<template>
  <div id="parallax-controls">
    <p>
      <label>
        perspective
        <input
          :value="perspectiveRange"
          @input="
            $emit('update:perspectiveRange', parseInt($event.target.value))
          "
          type="range"
          min="1300"
          max="2000"
          data-units="px"
        />
        {{ perspectiveRange }}
      </label>
    </p>
    <p>
      <label>
        Ratio
        <input
          :value="aspectRatio.x"
          @input="$emit('update:aspectRatio.x', $event.target.value)"
          type="text"
        />
        <input
          :value="aspectRatio.y"
          @input="$emit('update:aspectRatio.y', $event.target.value)"
          type="text"
        />
        {{ aspectRatio }}
      </label>
    </p>
    <div id="parallax-controls__layers">
      <ul>
        <li v-for="layer in layers" :key="layer.position">
          <img :src="layer.img" :alt="layer.name" />

          ({{ layer.position }}) {{ layer.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Layers } from "@/types/interfaces.ts";

export default defineComponent({
  props: {
    perspectiveRange: {
      type: Number,
      required: true,
    },
    aspectRatio: {
      type: Object,
      required: true,
    },
    layers: {
      type: [] as PropType<Layers[]>,
      required: true,
    },
  },
  emits: [
    "update:perspectiveRange",
    "update:aspectRatio.x",
    "update:aspectRatio.y",
  ],
});
</script>

<style lang="scss">
#parallax-controls {
  &__layers {
    background: black;
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
      width: 30%;
      background: white;
      margin: 3px;
    }
  }
}
</style>
