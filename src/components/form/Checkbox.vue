<template>
  <label
    v-if="label"
    id="checkbox"
    :class="{checked}"
  ><input
    :value="checked"
    type="checkbox"
    @input="$emit('change', checked)"
  >{{ label }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckBox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    }
  },
  emits: ["change"],
});
</script>

<style lang="scss">
#checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  background: rgba(0,0,0,0.1);
  padding: 10px;
  border-radius: 10px;

  &.checked {
    background: rgb(112, 171, 112);
  }

  input[type="checkbox"] {
    appearance: none;
    background-color: rgb(255, 255, 255);
    width: 1.3em;
    height: 1.3em;
    border: 0.15em solid black;
    border-radius: 0.3em;
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.7em;
    height: 0.7em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    background-color: rgb(0, 0, 0);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
}
</style>
