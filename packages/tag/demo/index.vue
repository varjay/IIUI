<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-tag>{{ $t('tag') }}</ii-tag>
      <ii-tag type="danger">{{ $t('tag') }}</ii-tag>
      <ii-tag type="success">{{ $t('tag') }}</ii-tag>
      <ii-tag type="primary">{{ $t('tag') }}</ii-tag>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-tag plain>{{ $t('tag') }}</ii-tag>
      <ii-tag plain type="danger">{{ $t('tag') }}</ii-tag>
      <ii-tag plain type="primary">{{ $t('tag') }}</ii-tag>
      <ii-tag plain type="success">{{ $t('tag') }}</ii-tag>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-tag mark>{{ $t('tag') }}</ii-tag>
      <ii-tag mark type="danger">{{ $t('tag') }}</ii-tag>
      <ii-tag mark type="primary">{{ $t('tag') }}</ii-tag>
      <ii-tag mark type="success">{{ $t('tag') }}</ii-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '空心样式',
      title3: '圆角样式'
    },
    'en-US': {
      title2: 'Plain style',
      title3: 'Mark style'
    }
  }
};
</script>

<style lang="postcss">
.demo-tag {
  .ii-tag + .ii-tag {
    margin-left: 10px;
  }

  .ii-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
