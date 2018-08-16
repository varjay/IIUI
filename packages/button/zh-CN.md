## Button 按钮

### 使用指南
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`warning`、`danger`四种类型，默认为`default`

```html
<ii-button type="default">默认按钮</ii-button>
<ii-button type="primary">主要按钮</ii-button>
<ii-button type="warning">警告按钮</ii-button>
<ii-button type="danger">危险按钮</ii-button>
```

#### 朴素按钮

```html
<ii-button type="default" plain>默认按钮</ii-button>
<ii-button type="primary" plain>主要按钮</ii-button>
<ii-button type="warning" plain>警告按钮</ii-button>
<ii-button type="danger" plain>危险按钮</ii-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<ii-button size="large">大号按钮</ii-button>
<ii-button size="normal">普通按钮</ii-button>
<ii-button size="small">小型按钮</ii-button>
<ii-button size="mini">迷你按钮</ii-button>
```

#### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<ii-button disabled>禁用状态</ii-button>
```

#### 加载状态

```html 
<ii-button loading />
<ii-button loading type="primary" />
```

#### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签

```html 
<ii-button tag="a" href="#" target="_blank">
  按钮
</ii-button>
```


### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `primary` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| text | 按钮文字 | `String` | - |
| tag | 按钮 HTML 标签 | `String` | `button` |
| native-type | 按钮类型（原生） | `String` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| square | 是否为方形按钮 | `Boolean` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
