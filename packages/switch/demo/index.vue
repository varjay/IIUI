<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-switch v-model="checked" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-switch v-model="checked" disabled />
    </demo-block>

    <demo-block :title="$t('loading')">
      <ii-switch v-model="checked" loading />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-switch :value="checked2" size="36px" @input="onInput" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked2: true
    };
  },

  methods: {
    onInput(checked) {
        this.checked2 = checked;
    }
  }
};
</script>

<style lang="postcss">
.demo-switch {
  .van-switch {
    margin: 0 15px;
  }
}
</style>
