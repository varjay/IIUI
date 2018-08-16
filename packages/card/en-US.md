## Card

### Install
``` javascript
import { Card } from 'vant';

Vue.use(Card);
```

### Usage

#### Basic Usage

```html
<ii-card
  title="Title"
  desc="Description"
  num="2"
  price="2.00"
  :thumb="imageURL"
/>
```

#### Advanced Usage
Use `slot` to custom content.

```html
<ii-card
  title="Title"
  desc="Description"  
  num="2"
  price="2.00"
  :thumb="imageURL"
>
  <div slot="footer">
    <ii-button size="mini">Button</ii-button>
    <ii-button size="mini">Button</ii-button>
  </div>
</ii-card>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| thumb | Left thumb | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| num | Number of goods | `String | Number` | - |
| price | Price of goods | `String | Number` | - |
| centered | Whether content vertical centered | `String` | `false` |
| currency | Currency symbol |  `String` | `¥` |

### Slot

| name | Description |
|-----------|-----------|
| title | Custom title |
| desc | Custom description |
| tags | Custom tags |
| thumb | Custom thumb |
| footer | Custom footer |
