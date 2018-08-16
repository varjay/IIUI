## Radio

### Install
``` javascript
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### Usage

#### Basic Usage
Use `v-model` to bind the name of checked radio

```html
<ii-radio-group v-model="radio">
  <ii-radio name="1">Radio 1</ii-radio>
  <ii-radio name="2">Radio 2</ii-radio>
</ii-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### Disabled

```html
<ii-radio-group v-model="radio" disabled>
  <ii-radio name="1">Radio 1</ii-radio>
  <ii-radio name="2">Radio 2</ii-radio>
</ii-radio-group>
```

#### Inside a Cell

```html
<ii-radio-group v-model="radio">
  <ii-cell-group>
    <ii-cell title="Radio 1" clickable @click="radio = '1'">
      <ii-radio name="1" />
    </ii-cell>
    <ii-cell title="Radio 2" clickable @click="radio = '2'">
      <ii-radio name="2" />
    </ii-cell>
  </ii-cell-group>
</ii-radio-group>
```

### Radio API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| name | Radio name | `any` | - |
| disabled | Whether to disable radio | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| label-position | Can be set to `left` | `String` | `right` |

### RadioGroup API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| v-model | Name of checked radio | `any` | - |
| disabled | Diable all radios | `Boolean` | `false` |

### RadioGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |
