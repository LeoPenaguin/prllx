<template>
  <div id="layers">
    <p>LAYERS</p>
    <ul>
      <li
        v-for="layer in layers"
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
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Layer } from '@/types/interfaces';

export default defineComponent({
  name: 'LayersList',
  props: {
    layers: {
      type: Array as PropType<Layer[]>,
      required: true
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
#layers {
  margin-bottom: 1rem;
  border: 0.15em solid rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 10px;
  p {
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;

    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 5px;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.1);
      padding-right: 5px;
      img {
        width: 50px;
        height: 40px;
        background: white;
        border-radius: 5px 0 0 5px;
      }

      input {
        width: 100%;
        font-size: 1rem;
        font-weight: bold;
        color: black;
        padding: 5px;
        border-radius: 5px;
        &:hover, &:focus {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
