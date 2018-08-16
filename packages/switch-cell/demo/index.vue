<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-cell-group>
        <ii-switch-cell v-model="checked" :title="$t('title')" />
      </ii-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-cell-group>
        <ii-switch-cell v-model="checked" disabled :title="$t('title')" />
      </ii-cell-group>
    </demo-block>

    <demo-block :title="$t('loading')">
      <ii-cell-group>
        <ii-switch-cell v-model="checked" loading :title="$t('title')" />
      </ii-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
