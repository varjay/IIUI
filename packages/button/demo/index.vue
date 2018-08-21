<template>
  <demo-section>
    <demo-block title="按钮类型">
      <div class="demo-button-row">
        <ii-button type="default">{{ $t('default') }}</ii-button>
        <ii-button type="primary">{{ $t('primary') }}</ii-button>
      </div>
      <ii-button type="warning">{{ $t('warning') }}</ii-button>
      <ii-button type="danger">{{ $t('danger') }}</ii-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <div class="demo-button-row">
        <ii-button type="default" plain>{{ $t('default') }}</ii-button>
        <ii-button type="primary" plain>{{ $t('primary') }}</ii-button>
      </div>
      <ii-button type="warning" plain>{{ $t('warning') }}</ii-button>
      <ii-button type="danger" plain>{{ $t('danger') }}</ii-button>
    </demo-block>

    <demo-block title="按钮尺寸">
      <ii-button type="danger" size="large">{{ $t('large') }}</ii-button>
      <ii-button size="normal">{{ $t('normal') }}</ii-button>
      <ii-button size="small">{{ $t('small') }}</ii-button>
      <ii-button size="mini">{{ $t('mini') }}</ii-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-button disabled>{{ $t('disabled') }}</ii-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-button loading />
      <ii-button loading type="primary" />
    </demo-block>

    <demo-block :title="$t('title4')">
      <ii-button tag="a" href="#" target="_blank">
        {{ $t('button') }}
      </ii-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '按钮类型',
      title2: '按钮尺寸',
      title3: '加载状态',
      title4: '自定义按钮标签',
      title5: '页面底部操作按钮',
      default: '默认按钮',
      primary: '主要按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮'
    },
    'en-US': {
      title1: 'Type',
      title2: 'Size',
      title3: 'Loading',
      title4: 'Custom Tag',
      title5: 'Action Button',
      default: 'Default',
      primary: 'Primary',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain'
    }
  }
};
</script>

<style lang="postcss">
.demo-button {
  .ii-button {
    user-select: none;

    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .ii-loading {
      margin: 0 18px;
    }
  }

  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
}
</style>
