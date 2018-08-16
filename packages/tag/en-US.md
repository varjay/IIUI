## Tag

### Install
``` javascript
import { Tag } from 'vant';

Vue.use(Tag);
```

### Usage

#### Basic Usage

```html
<ii-tag>Tag</ii-tag>
<ii-tag type="danger">Tag</ii-tag>
<ii-tag type="success">Tag</ii-tag>
<ii-tag type="primary">Tag</ii-tag>
```

#### Plain style

```html
<ii-tag plain>Tag</ii-tag>
<ii-tag plain type="danger">Tag</ii-tag>
<ii-tag plain type="primary">Tag</ii-tag>
<ii-tag plain type="success">Tag</ii-tag>
```

#### Mark style

```html
<ii-tag mark>Tag</ii-tag>
<ii-tag mark type="danger">Tag</ii-tag>
<ii-tag mark type="primary">Tag</ii-tag>
<ii-tag mark type="success">Tag</ii-tag>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Type, can be set to `primary` `success` `danger` | `String` | `''`|
| plain | Whether to be plain style | `Boolean` | `false` |
| mark | Wtether to be mark style | `Boolean` | `false` |

### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
