## GoodsAction

### Install
``` javascript
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
```

### Usage
#### Basic Usage

```html
<ii-goods-action>
  <ii-goods-action-mini-btn icon="chat" text="Icon1" @click="onClickMiniBtn" />
  <ii-goods-action-mini-btn icon="cart" text="Icon2" @click="onClickMiniBtn" />
  <ii-goods-action-big-btn text="Button1" @click="onClickBigBtn" />
  <ii-goods-action-big-btn text="Button2" @click="onClickBigBtn" primary />
</ii-goods-action>
```

```javascript
export default {
  methods: {
    onClickMiniBtn() {
      Toast('Click Icon');
    },
    onClickBigBtn() {
      Toast('Click Button');
    }
  }
}
```

#### Icon info
Use `info` prop to show messages in upper right corner of icon

```html
<ii-goods-action>
  <ii-goods-action-mini-btn icon="chat" text="Icon1" />
  <ii-goods-action-mini-btn icon="cart" text="Icon2" info="5" />
  <ii-goods-action-mini-btn icon="shop" text="Icon3" />
  <ii-goods-action-big-btn text="Button1" />
  <ii-goods-action-big-btn text="Button2" primary />
</ii-goods-action>
```

### API

#### GoodsActionMiniBtn

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| text | Button text | `String` | - |
| icon | Icon | `String` | - |
| icon-class | Icon class name | `String` | `''` |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` |


#### GoodsActionBigBtn

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| text | Button text | `String` | - |
| primary | Is primary button (red color) | `Boolean` | `false` |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` |
