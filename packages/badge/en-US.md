## Badge

### Install
``` javascript
import { Badge, BadgeGroup } from 'vant';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### Usage

#### Basic Usage
Use `active-key` prop to set index of chosen 'badge'

```html
<ii-badge-group :active-key="activeKey">
  <ii-badge title="Title" @click="onClick" />
  <ii-badge title="Title" @click="onClick" info="8" />
  <ii-badge title="Title" @click="onClick" info="99" />
  <ii-badge title="Title" @click="onClick" info="199" />
</ii-badge-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
```

### BadgeGroup API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| active-key | Index of chosen badge | `String | Number` | `0` |

### Badge API
| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| title | Content | `String` | `''` |
| info | Info Message | `String | Number` | `''` |
| url | Link | `String` | - |
