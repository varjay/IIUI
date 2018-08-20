<template>
  <demo-section>
    <demo-block title="图标列表">
      <div style="padding: 0 .7rem">
        <div v-for="icon in icons" :key="icon" class='icondemo-box'>
          <ii-icon :name="icon" />
          <span>{{ icon }}</span>
        </div>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import icons from '../../../packages/icon/config';
export default {

  data() {
    this.icons = icons.glyphs.map(icon => icon.css);
    return {};
  }
};
</script>
<style lang='postcss' scoped>
.icondemo-box{
  display: flex;
  flex-flow: column;
  width: 3em;
  height: 3em;
  text-align: center;
  float: left;
  i {
    font-size: 1.4em;
  }
  span {
    font-size: .6em;
  }
}
</style>