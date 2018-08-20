<template>
  <ii-cell center :title="title" :border="border" :class="b()">
    <ii-switch v-bind="$props" @input="$emit('input', $event)" />
  </ii-cell>
</template>

<script>
import IISwitch from '../switch';
import create from '../utils/create';

export default create({
  name: 'switch-cell',

  components: {
    IISwitch
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '26px'
    }
  },

  watch: {
    value() {
      this.$emit('change', this.value);
    }
  }
});
</script>
