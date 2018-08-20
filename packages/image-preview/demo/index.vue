<template>
  <demo-section>
    <demo-block title="图片预览">
      <img class='img-dome' @click="imgShow($event,true)" src='/img/1.jpg' alt="">
      <ii-image-preview
        v-if="imgDisplay"
        :imgSrc="imgSrc"
        :topNum="topNum"
        :leftNum="leftNum"
        :widthNum="widthNum"
        :heightNum="heightNum"
        @imgShow="imgShow"
      >
      </ii-image-preview>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      imgDisplay: false,
    }
  },
  methods: {
    imgShow (a, e) {
      if (a) {
        this.imgSrc = a.target.src
        this.topNum = a.target.y
        this.leftNum = a.target.x
        this.widthNum = a.target.offsetWidth
        this.heightNum = a.target.offsetHeight
      }
      this.imgDisplay = e
    }
  }

};
</script>

<style lang="postcss" scoped>
em{
  color: red;
}
  .img-dome{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 20%;
    width: 50%;
  }
</style>
