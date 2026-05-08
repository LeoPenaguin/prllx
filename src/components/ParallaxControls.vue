<template>
  <div
    class="w-62.5 p-2.5 bg-[rgba(211,211,211,0.7)] backdrop-blur-[10px] fixed top-4 rounded-2xl z-1000 text-white transition-[left] duration-300"
    :class="isVisible ? 'left-4' : '-left-75'"
  >
    <button
      class="absolute -right-15 top-0 bg-white w-12.5 h-12.5 rounded-[10px]"
      @click="toggleVisibility"
    >
      Close
    </button>
    <div>
      <div class="mb-2.5">
        <Checkbox
          :checked="card.isOverflowMode"
          label="OVERFLOW"
          @change="toggleIsOverflowMode()"
        />
      </div>
      <div class="mb-2.5">
        <Checkbox
          :checked="card.isFrameDisplayed"
          label="FRAME"
          @change="toggleIsFrameDisplayed()"
        />
      </div>
      <div class="mb-2.5">
        <RadioChoice
          :choices="form.perspectiveDepthChoices"
          :current-choice="card.perspectiveRange"
          label="DEPTH"
          @change="({ value }) => (card.perspectiveRange = value)"
        />
      </div>
      <div class="mb-2.5">
        <ColorPicker
          :color="card.backgroundColor"
          label="BACKGROUND"
          @change="(value) => (card.backgroundColor = value)"
        />
      </div>
      <div class="mb-2.5">
        <LayersList
          :layers="card.layers"
          label="LAYERS"
        />
      </div>
    </div>
    <div class="bg-[rgba(84,157,181,0.64)] p-2.5 rounded-[5px]">
      <div class="font-bold text-center mb-1.25">DETAILS</div>
      <p><span class="font-bold text-[rgb(0,62,82)]">Border radius</span> 20px</p>
      <p><span class="font-bold text-[rgb(0,62,82)]">Aspect ratio</span> 2.5 / 3.5</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCard } from '@/composables/useCard';
import { useForm } from '@/composables/useForm';
import Checkbox from '@/components/form/Checkbox.vue';
import RadioChoice from '@/components/form/RadioChoice.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import LayersList from '@/components/form/LayersList.vue';

const { card, toggleIsOverflowMode, toggleIsFrameDisplayed } = useCard();
const { form } = useForm();

const isVisible = ref(true);

function toggleVisibility() {
  isVisible.value = !isVisible.value;
}
</script>
