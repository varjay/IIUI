<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <ii-button @click="onClickAlert">Alert</ii-button>
      <ii-button @click="onClickAlert2">{{ $t('alert2') }}</ii-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-button @click="onClickConfirm">Confirm</ii-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-button @click="show = true">{{ $t('advancedUsage') }}</ii-button>
      <ii-dialog
        v-model="show"
        show-cancel-button
        :before-close="beforeClose"
      >
        <ii-field
          v-model="username"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
        />
        <ii-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
        />
      </ii-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '消息提示',
      title2: '消息确认',
      alert2: '无标题 Alert'
    },
    'en-US': {
      title1: 'Alert dialog',
      title2: 'Confirm dialog',
      alert2: 'Alert without title'
    }
  },

  data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-dialog {
  .van-doc-demo-block > .ii-button {
    margin: 15px;
  }
}
</style>
