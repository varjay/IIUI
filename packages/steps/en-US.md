## Steps

### Install
``` javascript
import { Step, Steps } from 'vant';

Vue.use(Step).use(Steps);
```

### Usage

#### Basic Usage

```html
<ii-steps :active="active">
  <ii-step>Step1</ii-step>
  <ii-step>Step2</ii-step>
  <ii-step>Step3</ii-step>
  <ii-step>Step4</ii-step>
</ii-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

#### Description

```html
<ii-steps
  :active="active"
  icon="logistics"
  title="Title"
  description="Description"
>
  <ii-step>Step1</ii-step>
  <ii-step>Step2</ii-step>
  <ii-step>Step3</ii-step>
  <ii-step>Step4</ii-step>
</ii-steps>
```

#### Vertical Steps

```html
<ii-steps direction="vertical" :active="0" active-color="#f60">
  <ii-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </ii-step>
  <ii-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </ii-step>
  <ii-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </ii-step>
</ii-steps>
```

### Steps API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| active | Active step | `Number` | 0 |
| icon | Action step icon | `String` | - |
| icon-class | Icon class | `String` | - |
| title | Title | `String` | - |
| description | Description | `String` | - |
| direction | Can be set to `horizontal` `vertical` | `String` | `horizontal` |
| active-color | Active step color | `String` | `#06bf04` |

### Steps Slot

| Name | Description |
|-----------|-----------|
| icon | Custom icon |
| message-extra | Extra content |
