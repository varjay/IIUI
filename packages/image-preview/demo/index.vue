<template>
  <demo-section>
    <demo-block title="图片预览">
      <em>{{test}}</em>
      <ii-image-preview></ii-image-preview>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      test: '这是domo里面的文本：'
    }
  }
};
</script>

<style lang="postcss" scoped>
em{
  color: red;
}
</style>
