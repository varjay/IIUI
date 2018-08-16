<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-row>
        <ii-col span="8">span: 8</ii-col>
        <ii-col span="8">span: 8</ii-col>
        <ii-col span="8">span: 8</ii-col>
      </ii-row>

      <ii-row>
        <ii-col span="4">span: 4</ii-col>
        <ii-col span="10" offset="4">offset: 4, span: 10</ii-col>
      </ii-row>

      <ii-row>
        <ii-col offset="12" span="12">offset: 12, span: 12</ii-col>
      </ii-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-row gutter="20">
        <ii-col span="8">span: 8</ii-col>
        <ii-col span="8">span: 8</ii-col>
        <ii-col span="8">span: 8</ii-col>
      </ii-row>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-row type="flex">
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
      </ii-row>

      <ii-row type="flex" justify="center">
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
      </ii-row>

      <ii-row type="flex" justify="end">
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
      </ii-row>

      <ii-row type="flex" justify="space-between">
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
      </ii-row>

      <ii-row type="flex" justify="space-around">
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
        <ii-col span="6">span: 6</ii-col>
      </ii-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局'
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="postcss">
.demo-col {
  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .ii-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
