## Loading

### Install
``` javascript
import { Loading } from 'vant';

Vue.use(Loading);
```

### Usage

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

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| color | Can be set to `white` | `String` | `black` |  |
| type | Can be set to `spinner` | `String` | `circular` |
| size | Size | `String` | `30px` |
