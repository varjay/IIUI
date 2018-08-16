<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-progress :percentage="50" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-progress inactive :percentage="50" />
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-progress :pivot-text="$t('orange')" color="#f2826a" :percentage="25" />
      <ii-progress :pivot-text="$t('red')" color="#f3594b" :percentage="50" />
      <ii-progress
        :percentage="75"
        :pivot-text="$t('purple')"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '置灰',
      title3: '样式定制'
    },
    'en-US': {
      title2: 'Inactive',
      title3: 'Custom Style'
    }
  }
};
</script>

<style lang="postcss">
.demo-progress {
  .ii-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
