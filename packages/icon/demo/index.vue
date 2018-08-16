<template>
  <demo-section>
    <demo-block :title="$t('title')">
      <ii-col span="8" v-for="icon in icons" :key="icon">
        <ii-icon :name="icon" />
        <span>{{ icon }}</span>
      </ii-col>
    </demo-block>
  </demo-section>
</template>

<script>
import icons from '../../../packages/icon/config';

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表'
    },
    'en-US': {
      title: 'Icon List'
    }
  },

  data() {
    this.icons = icons.glyphs.map(icon => icon.css);
    return {};
  }
};
</script>

<style lang="postcss">
.demo-icon {
  font-size: 0;

  .ii-col {
    text-align: center;
    height: 100px;
    float: none;
    display: inline-block;
    vertical-align: middle;
  }

  .ii-icon {
    display: block;
    font-size: 32px;
    margin: 15px 0;
    color: rgba(69, 90, 100, .8);
  }

  span {
    font-size: 14px;
  }
}
</style>
