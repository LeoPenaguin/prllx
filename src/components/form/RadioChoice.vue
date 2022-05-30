<template>
  <div id="radio-choice">
    <p>{{ label }}</p>

    <div id="choices">
      <div
        v-for="(choice, index) in choices"
        :key="index"
        class="choice-item"
      >
        <input
          :id="`choice-${index}`"
          class="input"
          type="radio"
          name="choice"
          :value="choice"
          :checked="choice.value === currentChoice"
          @input="$emit('change', choice)"
        >
        <label :for="`choice-${index}`">
          <img :src="choice.icon">
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PerpectiveDepthChoice } from '@/types/interfaces';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RadioChoice',
  props: {
    choices: {
      type: Array as PropType<PerpectiveDepthChoice[]>,
      required: true
    },
    currentChoice: {
      type: Number,
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
#radio-choice {
  padding: 10px;
  border: 0.15em solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  p {
    margin-bottom: 0.5rem;
  }
  #choices {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .choice-item {
      flex: 1;
      height: 40px;
      img {
        height: 100%;
      }
    }

    .input[type='radio'] {
      display: none;
    }

    .input[type='radio']~label {
      display: inline-block;
      background: rgb(255, 255, 255);
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: 0.15em solid rgba(0, 0, 0, 0.3);
    }

    .input[type='radio']:checked~label {
      background: rgb(112, 171, 112);
    }
  }
}

</style>
