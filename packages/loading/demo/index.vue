<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <ii-loading color="black" />
      <ii-loading color="white" />
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-loading type="spinner" color="black" />
      <ii-loading type="spinner" color="white" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: 'Circular',
      title2: 'Spinner'
    },
    'en-US': {
      title1: 'Circular',
      title2: 'Spinner'
    }
  }
};
</script>

<style lang="postcss">
.demo-loading {
  .ii-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;
  }

  .ii-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
