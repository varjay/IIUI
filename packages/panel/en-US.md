## Panel

### Install
``` javascript
import { Panel } from 'vant';

Vue.use(Panel);
```

### Usage

#### Basic Usage

```html
<ii-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</ii-panel>
```

#### Advanced Usage

```html
<ii-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <div slot="footer">
    <ii-button size="small">Button</ii-button>
    <ii-button size="small" type="danger">Button</ii-button>
  </div>
</ii-panel>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| title | Title | `String` | - |
| desc | Description | `String` | - |
| status | Status | `String` | - |


### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
| header | Custom header |
| footer | Custom footer |
