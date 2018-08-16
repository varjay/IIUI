<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-cell-group>
        <ii-cell :title="$t('cell')" :value="$t('content')" />
        <ii-cell :title="$t('cell')" :value="$t('content')" :label="$t('desc')" />
      </ii-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-cell-group>
        <ii-cell :value="$t('content')" />
      </ii-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-cell-group>
        <ii-cell :title="$t('cell')" icon="location" />
      </ii-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <ii-cell-group>
        <ii-cell :title="$t('cell')" is-link />
        <ii-cell :title="$t('cell')" is-link :value="$t('content')" />
        <ii-cell :title="$t('cell')" is-link arrow-direction="down" :value="$t('content')" />
      </ii-cell-group>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-cell-group>
        <ii-cell :value="$t('content')" icon="shop" is-link>
          <template slot="title">
            <span class="van-cell-text">{{ $t('cell') }}</span>
            <ii-tag type="danger">{{ $t('tag') }}</ii-tag>
          </template>
        </ii-cell>
        <ii-cell :title="$t('cell')" icon="location" is-link />
        <ii-cell :title="$t('cell')">
          <ii-icon slot="right-icon" name="search" class="van-cell__right-icon" />
        </ii-cell>
      </ii-cell-group>
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
  .ii-cell-text {
    margin-right: 5px;
  }

  .ii-cell-text,
  .ii-tag--danger {
    vertical-align: middle;
  }
}
</style>
