<template>
  <div>
    <div v-if="value" @click="onCancel" class="withtitle-bg"></div>
    <transition name="ii-slide-bottom">
      <div v-if="value" :class="b({ 'withtitle': title })">
        <div v-if="title" class="ii-hairline--top-bottom" :class="b('header')">
          <div v-text="title" />
          <ii-icon name="close" @click="onCancel" />
        </div>
        <ul v-else class="ii-hairline--bottom">
          <li
            v-for="item in actions"
            :class="[b('item', { disabled: item.disabled || item.loading }), item.className, 'ii-hairline--top']"
            @click.stop="onSelect(item)"
          >
            <template v-if="!item.loading">
              <span :class="b('name')">{{ item.name }}</span>
              <span :class="b('subname')" v-if="item.subname">{{ item.subname }}</span>
            </template>
          </li>
        </ul>
        <div :class="b('content')">
          <slot />
        </div>
        <div
          v-if="cancelText"
          v-text="cancelText"
          :class="[b('cancel'), 'ii-hairline--top']"
          @click="onCancel"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import create from '../utils/create';
// import Popup from '../mixins/popup';

export default create({
  name: 'actionsheet',

  // mixins: [Popup],

  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: () => []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onSelect(item) {
      if (!item.disabled && !item.loading) {
        item.callback && item.callback(item);
        this.$emit('select', item);
      }
    },

    onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
});
</script>
