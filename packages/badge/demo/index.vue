<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-badge-group :active-key="activeKey">
        <ii-badge :title="$t('title')" @click="onClick" />
        <ii-badge :title="$t('title')" @click="onClick" info="8" />
        <ii-badge :title="$t('title')" @click="onClick" info="99" />
        <ii-badge :title="$t('title')" @click="onClick" info="199" />
      </ii-badge-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称'
    }
  },

  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="postcss">
.demo-badge {
  .ii-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: #fff;

    &::after {
      display: none;
    }
  }

  .ii-badge {
    width: 85px;
    margin: 0 auto;
  }
}
</style>
