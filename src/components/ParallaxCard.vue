<template>
  <div
    ref="container"
    class="w-screen h-screen flex items-center justify-center"
    :style="{
      backgroundColor: card.backgroundColor,
      perspective: `${card.perspectiveRange}px`,
      perspectiveOrigin: `${card.originRange.x}% ${card.originRange.y}%`,
    }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div
      :class="[
        'h-[60%] max-h-[80%] aspect-2.5/3.5 relative rounded-[20px] bg-[rgb(67,67,67)]',
        card.isOverflowMode ? '' : 'overflow-hidden',
        settling ? 'transition-transform duration-500 ease-out' : '',
      ]"
      :style="cardStyle"
    >
      <div
        v-for="layer in card.layers"
        :key="layer.position"
        :class="['absolute inset-0 pointer-events-none', settling ? 'transition-transform duration-500 ease-out' : '']"
        :style="{ transform: layerTransform(layer.depth) }"
      >
        <img
          :src="layer.img"
          :alt="layer.name"
          class="w-full h-full"
        >
      </div>
      <div
        v-if="card.isFrameDisplayed"
        class="absolute inset-0 pointer-events-none"
        :style="{ transform: layerTransform(maxLayerDepth + 50) }"
      >
        <img
          :src="card.frame"
          alt=""
          class="w-full h-full"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCard } from '@/composables/useCard';

const { card, setOrigin } = useCard();

const container = ref<HTMLDivElement>();
const rotation = ref({ x: 0, y: 0 });
const settling = ref(false);

const MAX_ROTATION = 15;

const maxLayerDepth = computed(() => Math.max(...card.layers.map((l) => l.depth)));

const onMouseMove = (event: MouseEvent) => {
  if (!container.value) return;

  settling.value = false;

  const { offsetWidth: w, offsetHeight: h } = container.value;
  const rect = container.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  setOrigin((x / w) * 100, (y / h) * 100);

  rotation.value = {
    x: -((y - h / 2) / (h / 2)) * MAX_ROTATION,
    y: ((x - w / 2) / (w / 2)) * MAX_ROTATION,
  };
};

const onMouseLeave = () => {
  settling.value = true;
  rotation.value = { x: 0, y: 0 };
  setOrigin(50, 50);
};

const cardStyle = computed(() => ({
  transform: `rotateX(${rotation.value.x}deg) rotateY(${rotation.value.y}deg)`,
}));

function layerTransform(depth: number): string {
  const tx = Math.sin(rotation.value.y * (Math.PI / 180)) * depth;
  const ty = -Math.sin(rotation.value.x * (Math.PI / 180)) * depth;
  return `translateX(${tx}px) translateY(${ty}px)`;
}
</script>
