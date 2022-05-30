<template>
  <div
    id="parallax-controls"
    :class="{ 'is-hidden': !isVisible }"
  >
    <button
      class="controls-toggle"
      @click="toggleVisibility"
    >
      Close
    </button>
    <div class="controls">
      <div class="control">
        <Checkbox
          :checked="store.isDevMode"
          label="DEV MODE"
          @change="store.toggleDevMode()"
        />
      </div>
      <div class="control">
        <RadioChoice
          :choices="perspectiveDepthChoices"
          :current-choice="store.perspectiveRange"
          label="RANGE"
          @change="({value}) => store.perspectiveRange = value"
        />
      </div>
      <div class="control">
        <ColorPicker
          :color="store.backgroundColor"
          label="BACKGROUND"
          @change="(value) => store.backgroundColor = value"
        />
      </div>
      <div class="control">
        <LayersList
          :layers="store.layers"
          label="LAYERS"
        />
      </div>
    </div>

    <div class="info">
      <p>x: {{ store.originRange.x }}</p>
      <p>y: {{ store.originRange.y }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PerpectiveDepth, PerpectiveDepthChoice } from '@/types/interfaces';
import useCardStore from '@/stores/card';
import Checkbox from '@/components/form/Checkbox.vue';
import RadioChoice from '@/components/form/RadioChoice.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import LayersList from '@/components/form/LayersList.vue';

export default defineComponent({
  components: {
    Checkbox,
    RadioChoice,
    ColorPicker,
    LayersList,
  },
  setup() {
    const store = useCardStore();
    const isVisible = ref(true);

    const perspectiveDepthChoices = ref([
      {
        name: 'very-large',
        label: 'Very large',
        value: 1000,
      },
      {
        name: 'large',
        label: 'Large',
        value: 1300,
      },
      {
        name: 'medium',
        label: 'Medium',
        value: 1600,
      },
      {
        name: 'small',
        label: 'Small',
        value: 2000,
      },
    ] as PerpectiveDepthChoice[]);

    return {
      store,
      perspectiveDepthChoices,
      PerpectiveDepth,
      isVisible,
      toggleVisibility: () => {
        isVisible.value = !isVisible.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
#parallax-controls {
  width: 250px;
  padding: 10px;
  background: rgba(211, 211, 211, 0.7);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 1rem;
  top: 1rem;
  border-radius: 1rem;
  z-index: 1000;
  color: white;
  transition: left 0.3s;

  &.is-hidden {
    left: -300px;
  }

  .controls-toggle {
    position: absolute;
    right: -60px;
    top: 0px;
    background: rgb(255, 255, 255);
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .control {
    margin-bottom: 10px;
  }

  .info {
    margin-bottom: 1rem;
  }

}
</style>
