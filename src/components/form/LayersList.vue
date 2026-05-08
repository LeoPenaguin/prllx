<template>
  <div class="mb-4 border-[0.15em] border-solid border-black/10 rounded-[7px] p-2.5">
    <p class="mb-2.5 text-[1.3rem] font-bold text-black">LAYERS</p>
    <ul class="list-none p-0 m-0 flex flex-col gap-1.25">
      <li
        v-for="layer in layers"
        :key="layer.position"
        class="flex items-center gap-1.25 rounded-[5px] bg-black/10 pr-1.25"
      >
        <img
          :src="layer.img"
          :alt="layer.name"
          class="w-12.5 h-10 bg-white rounded-tl-[5px] rounded-bl-[5px]"
        >
        <input
          v-model="layer.depth"
          type="number"
          class="w-full text-base font-bold text-black p-1.25 rounded-[5px] border-0 outline-none bg-transparent hover:bg-black/10 focus:bg-black/10"
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Layer } from '@/types/interfaces';

defineProps<{
  layers: Layer[];
  label?: string;
}>();
</script>
