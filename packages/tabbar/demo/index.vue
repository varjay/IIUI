<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-tabbar v-model="active">
        <ii-tabbar-item icon="shop">{{ $t('tab') }}</ii-tabbar-item>
        <ii-tabbar-item icon="chat" dot>{{ $t('tab') }}</ii-tabbar-item>
        <ii-tabbar-item icon="records" info="5">{{ $t('tab') }}</ii-tabbar-item>
        <ii-tabbar-item icon="gold-coin" info="20">{{ $t('tab') }}</ii-tabbar-item>
      </ii-tabbar>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-tabbar v-model="active2">
        <ii-tabbar-item icon="shop">
          <span>{{ $t('custom') }}</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </ii-tabbar-item>
        <ii-tabbar-item icon="chat">{{ $t('tab') }}</ii-tabbar-item>
        <ii-tabbar-item icon="records">{{ $t('tab') }}</ii-tabbar-item>
      </ii-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义图标'
    },
    'en-US': {
      title2: 'Custom icon'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  }
};
</script>

<style lang="postcss">
.demo-tabbar {
  .ii-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
