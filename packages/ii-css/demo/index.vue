<template>
  <demo-section>
    <demo-block :title="'文字省略'">
      <div class="ii-ellipsis">'当文字超出容器宽度之后，后面的内容会省略掉，以...结尾'</div>
    </demo-block>

    <demo-block :title="'1px 上边框'">
      <div class="demoline ii-hairline--top" />
    </demo-block>

    <demo-block :title="'1px 下边框'">
      <div class="demoline ii-hairline--bottom" />
    </demo-block>

    <demo-block :title="'1px 左边框'">
      <div class="demoline ii-hairline--left" />
    </demo-block>

    <demo-block :title="'1px 右边框'">
      <div class="demoline ii-hairline--right" />
    </demo-block>

    <demo-block :title="'1px 上下边框'">
      <div class="demoline ii-hairline--top-bottom" />
    </demo-block>

    <demo-block title="全边框">
      <div class="demoline ii-hairline--surround"/>
    </demo-block>

    <demo-block :title="'动画'">
      <a @click="show=!show">开关</a>
        <transition name="ii-fade">
          <div span="8" v-show="show">Fade动画</div>
        </transition>

        <transition name="ii-slide-bottom">
          <div span="8" v-show="show">Slide Bottom 下移动画</div>
        </transition>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="postcss">
.demo-ii-css {
  .demoline {
    height: 50px;
    width: 50%;
    margin: 0 auto;
    background-color: #fff;
  }
  .ii-ellipsis {
    font-size: 13px;
    margin-left: 15px;
    max-width: 250px;
  }

  .ii-col {
    height: 50px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    background-color: #39a9ed;
  }

  .ii-switch-cell {
    margin-bottom: 15px;
  }
}
</style>
