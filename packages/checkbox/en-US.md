## Checkbox

### Install
``` javascript
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
```

### Usage

#### Basic Usage

```html
<ii-checkbox v-model="checked">Checkbox</ii-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

#### Disabled

```html
<ii-checkbox v-model="checked" disabled>Checkbox</ii-checkbox>
```

#### Custom Icon
Use icon slot to custom icon

```html
<ii-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.normal"
  >
</ii-checkbox>
```

```js
export default {
  data() {
    checked: true,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    }
  }
}
```

#### Checkbox Group
When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<ii-checkbox-group v-model="result">
  <ii-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    Checkbox {{ item }}
  </ii-checkbox>
</ii-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

#### Maximum amount of checked options

```html
<ii-checkbox-group v-model="result" :max="2">
  <ii-checkbox
    v-for="(item, index) in list"
    :name="item"
    :key="item"
  >
    Checkbox {{ item }}
  </ii-checkbox>
</ii-checkbox-group>
```

#### Inside a Cell

```html
<ii-checkbox-group v-model="result">
  <ii-cell-group>
    <ii-cell
      v-for="item in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <ii-checkbox :name="item" ref="checkboxes" />
    </ii-cell>
  </ii-cell-group>
</ii-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```


### Checkbox API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| name | Checkbox name | `any` | - |
| v-model | Check status | `Boolean` | `false` |
| disabled | Diable checkbox | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| label-position | Can be set to `left` | `String` | `right` |
| shape | Can be set to `round` `square` | `String` | `round` |

### CheckboxGroup API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| v-model | Names of all checked checkboxes | `Array` | - |
| disabled | Disable all checkboxes | `Boolean` | `false` |
| max | Maximum amount of checked options | `Number` | `0`(Unlimited) |

### Checkbox Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |

### CheckboxGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |

### Checkbox Slot

| Name | Description | slot-scope |
|-----------|-----------|-----------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |

### Checkbox Methods

Use ref to get checkbox instance and call instance methods

| Name | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| toggle | - | - | Toggle check status |
