<template>
  <div class="p-2.5 border-[0.15em] border-solid border-black/10 rounded-[10px] text-[1.3rem] font-bold text-black">
    <p class="mb-2">{{ label }}</p>
    <label
      for="background"
      class="flex"
    >
      <input
        id="background"
        v-model="colorValue"
        type="color"
        class="hidden"
      >
      <div
        class="w-full h-12.5 block rounded-[7px] border-[0.15em] border-solid border-black/30"
        :style="{ backgroundColor: color }"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  color: string;
  label?: string;
}>();

const emit = defineEmits<{
  change: [value: string];
}>();

const colorValue = computed({
  get() {
    return props.color;
  },
  set(value: string) {
    emit('change', value);
  },
});
</script>
