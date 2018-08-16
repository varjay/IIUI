## Swipe

### Install
``` javascript
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
```

### Usage

#### Basic Usage
Use `autoplay` prop to set autoplay interval

```html
<ii-swipe :autoplay="3000">
  <ii-swipe-item>1</ii-swipe-item>
  <ii-swipe-item>2</ii-swipe-item>
  <ii-swipe-item>3</ii-swipe-item>
  <ii-swipe-item>4</ii-swipe-item>
</ii-swipe>
```

#### Image Lazyload
Use [Lazyload](#/en-US/lazyload) component to lazyload image

```html
<ii-swipe>
  <ii-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </ii-swipe-item>
</ii-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

#### change event

```html
<ii-swipe @change="onChange">
  <ii-swipe-item>1</ii-swipe-item>
  <ii-swipe-item>2</ii-swipe-item>
  <ii-swipe-item>3</ii-swipe-item>
  <ii-swipe-item>4</ii-swipe-item>
</ii-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    }
  }
}
```

#### Vertical Scrolling

```html
<ii-swipe :autoplay="3000" vertical>
  <ii-swipe-item>1</ii-swipe-item>
  <ii-swipe-item>2</ii-swipe-item>
  <ii-swipe-item>3</ii-swipe-item>
  <ii-swipe-item>4</ii-swipe-item>
</ii-swipe>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| autoplay | Autoplay interval (ms) | `Number` | - |
| duration | Animation duration (ms) | `Number` | `500` |
| loop | Whether to enable loop | `Boolean` | `true` |
| vertical | Vertical Scrolling | `Boolean` | `false` |
| touchable | Whether touchable | `Boolean` | `true` |
| show-indicators | Whether to show indocators | `Boolean` | `true` |
| initial-swipe | Index of initial swipe, start from 0 | `Number` | `0` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| change | Triggered when current swipe change | index: index of current swipe |

### Methods

Use ref to get swipe instance and call instance methods

| Name | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| swipeTo | index: 目标位置的索引 | void | 滚动到目标位置 |
