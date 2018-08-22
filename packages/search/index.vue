<template>
  <div :class="b({ 'show-action': showAction })" :style="{ background }">
    <div :class="b('input-container')">
      <ii-icon name="search"></ii-icon>
      <input
        v-bind="$attrs"
        v-on="listeners"
        type="search"
        :value="value"
        ref="input"
      />
    </div>
    <div v-if="showAction" :class="b('action')">
      <slot name="action">
        <div @click="onBack">取消</div>
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'search',

  inheritAttrs: false,

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },

  methods: {
    onInput(value) {
      this.$emit('input', event.target.value);
    },

    onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },

    onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
});
</script>
