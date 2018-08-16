<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-panel :title="$t('title')" :desc="$t('desc')" :status="$t('status')">
        <div>{{ $t('content') }}</div>
      </ii-panel>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-panel :title="$t('title')" :desc="$t('desc')" :status="$t('status')">
        <div>{{ $t('content') }}</div>
        <div slot="footer">
          <ii-button size="small">{{ $t('button') }}</ii-button>
          <ii-button size="small" type="danger">{{ $t('button') }}</ii-button>
        </div>
      </ii-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.demo-panel {
  .ii-panel__footer {
    text-align: right;

    .ii-button {
      margin-left: 5px;
    }
  }

  .ii-panel__content {
    padding: 20px;
  }
}
</style>
