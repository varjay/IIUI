<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-radio-group v-model="radio1" class="demo-radio-group">
        <ii-radio name="1">{{ $t('radio') }} 1</ii-radio>
        <ii-radio name="2">{{ $t('radio') }} 2</ii-radio>
      </ii-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <ii-radio name="1">{{ $t('radio') }} 1</ii-radio>
        <ii-radio name="2">{{ $t('radio') }} 2</ii-radio>
      </ii-radio-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-radio-group v-model="radio3">
        <ii-cell-group>
          <ii-cell :title="$t('radio') + 1" clickable @click="radio3 = '1'">
            <ii-radio name="1" />
          </ii-cell>
          <ii-cell :title="$t('radio') + 2" clickable @click="radio3 = '2'">
            <ii-radio name="2" />
          </ii-cell>
        </ii-cell-group>
      </ii-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      title3: '与 Cell 组件一起使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      title: 'Inside a Cell'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1'
    };
  }
};
</script>

<style lang="postcss">
.demo-radio {
  &-group {
    padding: 0 17px;

    .ii-radio {
      margin-bottom: 10px;
    }
  }
}
</style>
