## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### 代码演示

#### Circular

```html
<ii-loading color="black" />
<ii-loading color="white" />
```

#### Spinner

```html
<ii-loading type="spinner" color="black" />
<ii-loading type="spinner" color="white" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色，可选值为 `white` | `String` | `black` |
| type | 类型，可选值为 `spinner` | `String` | `circular` |
| size | 大小 | `String` | `30px` |
