<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="ii-hairline--top-bottom">
        <ii-cell :title="$t('cell')" :value="$t('content')" />
        <ii-cell :title="$t('cell')" :value="$t('content')" :label="$t('desc')" />
      </div>
    </demo-block>

    <demo-block :title="$t('title2')">
      <div class="ii-hairline--top-bottom">
        <ii-cell :value="$t('content')" />
      </div>
    </demo-block>

    <demo-block title="展示图标">
      <div class="ii-hairline--top-bottom">
        <ii-cell :title="$t('cell')" icon="settings" />
      </div>
    </demo-block>

    <demo-block :title="$t('title4')">
      <div class="ii-hairline--top-bottom">
        <ii-cell :title="$t('cell')" is-link />
        <ii-cell :title="$t('cell')" is-link :value="$t('content')" />
        <ii-cell :title="$t('cell')" is-link arrow-direction="down" :value="$t('content')" />
      </div>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <div class="ii-hairline--top-bottom">
        <ii-cell :value="$t('content')" icon="shop" is-link>
          <template slot="title">
            <span class="van-cell-text">{{ $t('cell') }}</span>
          </template>
        </ii-cell>
        <ii-cell :title="$t('cell')" icon="location" is-link />
        <ii-cell :title="$t('cell')">
        </ii-cell>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      title2: '只设置 value',
      title3: '展示图标',
      title4: '展示箭头'
    },
    'en-US': {
      cell: 'Cell title',
      title2: 'Value only',
      title3: 'Left Icon',
      title4: 'Link'
    }
  }
};
</script>

<style lang="postcss">
.demo-cell {
  .van-cell-text {
    margin-right: 5px;
  }

  .van-cell-text,
  .van-tag--danger {
    vertical-align: middle;
  }
}
</style>
