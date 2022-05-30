<template>
  <div id="color-picker">
    <p>{{ label }}</p>
    <label
      id="color"
      for="background"
    ><input
      id="background"
      v-model="colorValue"
      type="color"
    ><div
      class="background-button"
      :style="{backgroundColor: color}"
    /></label>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColorPicker',
  props: {
    color: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const colorValue = computed({
      get() {
        props.color
      },
      set(value) {
        emit('change', value)
      }
    })

    return {
      colorValue
    }
  }
});
</script>

<style lang="scss">
#color-picker {
  padding: 10px;
  border: 0.15em solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  p {
    margin-bottom: 0.5rem;
  }
  #color {
    display: flex;
    #background {
      display: none;
    }
    .background-button {
      width: 100%;
      height: 50px;
      background: red;
      display: block;
      border-radius: 7px;
      border: 0.15em solid rgba(0, 0, 0, 0.3);
    }
  }
}

</style>
