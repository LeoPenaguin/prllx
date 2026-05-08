<template>
  <label
    v-if="label"
    :class="[
      'flex items-center gap-2.5 select-none text-[1.3rem] font-bold text-black p-2.5 rounded-[10px]',
      checked ? 'bg-[rgb(112,171,112)]' : 'bg-black/10',
    ]"
  >
    <input
      :value="checked"
      type="checkbox"
      class="appearance-none bg-white w-[1.3em] h-[1.3em] border-[0.15em] border-solid border-black rounded-[0.3em] grid place-content-center before:content-[''] before:w-[0.7em] before:h-[0.7em] before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)] before:scale-0 before:bg-black checked:before:scale-100"
      @input="$emit('change')"
    >{{ label }}</label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    checked?: boolean;
    label?: string;
  }>(),
  {
    checked: false,
    label: undefined,
  },
);

defineEmits<{
  change: [];
}>();
</script>
