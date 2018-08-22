<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-search :placeholder="$t('placeholder')" v-model="value" />
    </demo-block>

    <demo-block title="监听对应事件">
      <form action="/">
        <ii-search
          v-model="value"
          :placeholder="$t('placeholder')"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>

    <demo-block title="自定义行动按钮">
      <ii-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </ii-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  },

  methods: {
    onSearch() {
      console.log('点击了搜索', this.value)
    },
    onCancel() {
      console.log('点击了取消', this.value)
    }
  }
};
</script>
