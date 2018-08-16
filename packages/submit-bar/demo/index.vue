<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-submit-bar
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-submit-bar
        disabled
        :price="3050"
        :button-text="$t('submit')"
        :tip="$t('tip1')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('loading')">
      <ii-submit-bar
        loading
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-submit-bar
        :price="3050"
        :button-text="$t('submit')"
        @submit="onClickButton"
      >
        <ii-checkbox v-model="checked">{{ $t('check') }}</ii-checkbox>
        <span slot="tip">
          {{ $t('tip2') }}<span class="van-edit-address" @click="onClickLink">{{ $t('tip3') }}</span>
        </span>
      </ii-submit-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      submit: '提交订单',
      tip1: '您的收货地址不支持同城送, 我们已为您推荐快递',
      tip2: '您的收货地址不支持同城送, ',
      tip3: '修改地址',
      check: '全选',
      clickButton: '点击按钮',
      clickLink: '修改地址'
    },
    'en-US': {
      submit: 'Submit',
      tip1: 'Some tips',
      tip2: 'Some tips, ',
      tip3: 'Link',
      check: 'Label',
      clickButton: 'Click button',
      clickLink: 'Click Link'
    }
  },

  data() {
    return {
      checked: true
    };
  },

  methods: {
    onClickButton() {
      this.$toast(this.$t('clickButton'));
    },
    onClickLink() {
      this.$toast(this.$t('clickLink'));
    }
  }
};
</script>

<style lang="postcss">
.demo-submit-bar {
  .ii-submit-bar {
    position: relative;
  }

  .ii-edit-address {
    color: #38f;
  }

  .ii-checkbox {
    margin-left: 15px;
  }
}
</style>
