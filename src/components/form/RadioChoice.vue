<template>
  <div class="p-2.5 border-[0.15em] border-solid border-black/10 rounded-[10px] text-[1.3rem] font-bold text-black">
    <p class="mb-2">{{ label }}</p>
    <div class="flex justify-between gap-2.5">
      <div
        v-for="(choice, index) in choices"
        :key="index"
        class="flex-1 h-10"
      >
        <input
          :id="`choice-${index}`"
          class="peer hidden"
          type="radio"
          name="choice"
          :value="choice"
          :checked="choice.value === currentChoice"
          @input="$emit('change', choice)"
        >
        <label
          :for="`choice-${index}`"
          class="flex items-center justify-center bg-white w-full h-full rounded-[10px] border-[0.15em] border-solid border-black/30 cursor-pointer peer-checked:bg-[rgb(112,171,112)]"
        >
          <img
            :src="choice.icon"
            class="h-full w-auto"
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PerspectiveDepthChoice } from '@/types/interfaces';

defineProps<{
  choices: PerspectiveDepthChoice[];
  currentChoice: number;
  label?: string;
}>();

defineEmits<{
  change: [choice: PerspectiveDepthChoice];
}>();
</script>
