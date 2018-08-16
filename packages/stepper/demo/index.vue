<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-stepper v-model="stepper1" />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-stepper v-model="stepper1" disabled />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ii-stepper
        v-model="stepper2"
        integer
        :min="5"
        :max="40"
        :step="2"
        :default-value="9"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      stepper1: 1,
      stepper2: null
    };
  }
};
</script>

<style lang="postcss">
.demo-stepper {
  .ii-stepper {
    margin-left: 15px;
  }
}
</style>
