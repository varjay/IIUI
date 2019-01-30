<template>
  <demo-section>
    <demo-block title="图片预览">
      <img class='img-demo' v-preview="1" src='/img/2.png' alt="">
      禁用预览
      <img class='img-demo' v-preview="0" src='/img/2.png' alt="">
      <ii-image-preview />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
    }
  },
};
</script>

<style lang="postcss" scoped>
em{
  color: red;
}
.img-demo{
  height: 20%;
  width: 50%;
}
</style>
