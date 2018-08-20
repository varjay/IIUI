<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div>
        <ii-switch-cell v-model="checked" :title="$t('title')" />
      </div>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <div>
        <ii-switch-cell v-model="checked" disabled :title="$t('title')" />
      </div>
    </demo-block>

    <demo-block :title="$t('loading')">
      <div>
        <ii-switch-cell v-model="checked" loading :title="$t('title')" />
      </div>
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
