<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-checkbox v-model="checkbox1">{{ $t('checkbox') }}</ii-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ii-checkbox :value="false" disabled>{{ $t('checkbox') }}</ii-checkbox>
      <ii-checkbox :value="true" disabled>{{ $t('checkbox') }}</ii-checkbox>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <ii-checkbox v-model="checkbox2">
        {{ $t('customIcon') }}
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        >
      </ii-checkbox>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-checkbox-group v-model="result">
        <ii-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </ii-checkbox>
      </ii-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <ii-checkbox-group v-model="result2" :max="2">
        <ii-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </ii-checkbox>
      </ii-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title5')">
      <ii-checkbox-group v-model="result3">
        <ii-cell-group >
          <ii-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="$t('checkbox') + item"
            @click="toggle(index)"
          >
            <ii-checkbox ref="checkboxes" :name="item" />
          </ii-cell>
        </ii-cell-group>
      </ii-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      title3: 'Checkbox 组',
      title4: '设置最大可选数',
      title5: '与 Cell 组件一起使用'
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style lang="postcss">
.demo-checkbox {
  .ii-checkbox {
    margin: 10px 0 0 20px;
  }

  .ii-cell {
    .ii-checkbox {
      margin: 0;
    }
  }

  img {
    width: 20px;
    display: block;
  }
}
</style>
