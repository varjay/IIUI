## Button

### Install
``` javascript
import { Button } from 'vant';

Vue.use(Button);
```

### Usage

#### Type

```html
<ii-button type="default">Default</ii-button>
<ii-button type="primary">Primary</ii-button>
<ii-button type="warning">Warning</ii-button>
<ii-button type="danger">Danger</ii-button>
```

#### Plain

```html
<ii-button type="default" plain>Default</ii-button>
<ii-button type="primary" plain>Primary</ii-button>
<ii-button type="warning" plain>Warning</ii-button>
<ii-button type="danger" plain>Danger</ii-button>
```

#### Size

```html 
<ii-button size="large">Large</ii-button>
<ii-button size="normal">Normal</ii-button>
<ii-button size="small">Small</ii-button>
<ii-button size="mini">Mini</ii-button>
```

#### Disabled

```html
<ii-button disabled>Diabled</ii-button>
```

#### Loading

```html 
<ii-button loading />
<ii-button loading type="primary" />
```

#### Custom Tag
Use `tag` prop to custom button tag

```html 
<ii-button tag="a" href="#" target="_blank">
  Button
</ii-button>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| type | Can be set to `primary` `warning` `danger` | `String` | `default` |
| size | Can be set to `normal` `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| tag | Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| click | Triggered when click button and not disabled or loading | - |
