<template>
  <div>
    <demo-section>
      <ii-notice-bar>{{ $t('tips') }}</ii-notice-bar>
      <demo-block :title="$t('basicUsage')">
        <ii-cell-swipe :right-width="65" :left-width="65">
          <span slot="left">{{ $t('button1') }}</span>
          <ii-cell-group>
            <ii-cell :title="$t('title')" :value="$t('content')" />
          </ii-cell-group>
          <span slot="right">{{ $t('button2') }}</span>
        </ii-cell-swipe>
      </demo-block>

      <demo-block :title="$t('title2')">
        <ii-cell-swipe :right-width="65" :left-width="65" :on-close="onClose">
          <span slot="left">{{ $t('button1') }}</span>
          <ii-cell-group>
            <ii-cell :title="$t('title')" :value="$t('content')" />
          </ii-cell-group>
          <span slot="right">{{ $t('button2') }}</span>
        </ii-cell-swipe>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      button1: '选择',
      button2: '删除',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例'
    },
    'en-US': {
      button1: 'Select',
      button2: 'Delete',
      title: 'Cell',
      title2: 'Async close',
      confirm: 'Are you sure to delete?',
      tips: 'Please try this demo in mobile mode'
    }
  },

  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: this.$t('confirm')
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-cell-swipe {
  user-select: none;

  .ii-cell-swipe {
    &__left,
    &__right {
      color: #FFFFFF;
      font-size: 15px;
      width: 65px;
      height: 44px;
      display: inline-block;
      text-align: center;
      line-height: 44px;
      background-color: #F44;
    }
  }
}
</style>
