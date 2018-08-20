## ImagePreview 示例组件


### 使用指南
``` javascript
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
```

### 代码演示

#### 用法


```html
    <ii-image-preview
        v-if="imgDisplay"
        :imgSrc="imgSrc"
        :topNum="topNum"
        :leftNum="leftNum"
        :widthNum="widthNum"
        :heightNum="heightNum"
        @imgShow="imgShow"
    >
    </ii-image-preview>
```
#### js

```html
    data() {
        return {
          imgDisplay: false,
        }
    },
    
    methods: {
      imgShow (a, e) {
        if (a) {
          this.imgSrc = a.target.src
          this.topNum = a.target.y
          this.leftNum = a.target.x
          this.widthNum = a.target.offsetWidth
          this.heightNum = a.target.offsetHeight
        }
        this.imgDisplay = e
      }
    }
  ```

#### 	是否为禁用状态	

通过`imgDisplay`属性控制组件显示

```html 
    v-if="imgDisplay"
```


### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| imgDisplay | 	是否为禁用状态	 | `Boolean` | `false` |
| imgSrc | 地址 | `String` | `-` |
| topNum | Y轴位置  | `Number` | `-` |
| leftNum | x轴位置 | `Number` | `-` |
| widthNum | 尺寸 | `Number` | `-` |
| heightNum | 尺寸 | `Number` | `-` |
### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击获取父组件图片dom属性 | `$event, true` |

```html
 if (a) {
        this.imgSrc = a.target.src
        this.topNum = a.target.y
        this.leftNum = a.target.x
        this.widthNum = a.target.offsetWidth
        this.heightNum = a.target.offsetHeight
      }
      this.imgDisplay = e
```
