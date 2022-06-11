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
          :checked="store.isOverflowMode"
          label="OVERFLOW"
          @change="store.toggleisOverflowMode()"
        />
      </div>
      <div class="control">
        <Checkbox
          :checked="store.isFrameDisplayed"
          label="FRAME"
          @change="store.toggleIsFrameDisplayed()"
        />
      </div>
      <div class="control">
        <RadioChoice
          :choices="formStore.perspectiveDepthChoices"
          :current-choice="store.perspectiveRange"
          label="DEPTH"
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
      <div class="info--head">
        DETAILS
      </div>
      <p><span>Border radius</span> 20px</p>
      <p><span>Aspect ratio</span> 2.5 / 3.5</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PerpectiveDepth } from '@/types/interfaces';
import useCardStore from '@/stores/card';
import useFormStore from '@/stores/form';
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
    const formStore = useFormStore();

    const isVisible = ref(true);

    return {
      store,
      formStore,
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
    background: rgba(84, 157, 181, 0.64);
    padding: 10px;
    border-radius: 5px;
    &--head {
      font-weight: bold;
      text-align: center;
      margin-bottom: 5px;
    }
    p {
      span {
        font-weight: bold;
        color: rgb(0, 62, 82);
      }
    }
  }

}
</style>
