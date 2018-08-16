## Quickstart

### Starter kit

Use [vue-cli](https://github.com/vuejs/vue-cli) to create a iiui project.

```shell
vue init youzan/vue-cli-template-iiui projectName
```

### Install

#### NPM

```shell
npm i iiui -S
```

#### YARN

```shell
yarn add iiui
```

#### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://unpkg.com/iiui/lib/iiui-css/index.css" />

<!-- import script -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/iiui/lib/iiui.min.js"></script>
```

### Usage

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "iiui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

Then you can import components from iiui, equivalent to import manually below.

```js
import { Button } from 'iiui';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

#### 2. Manually import

```js
import Button from 'iiui/lib/button';
import 'iiui/lib/iiui-css/base.css';
import 'iiui/lib/iiui-css/button.css';
```
 
#### 3. Import all components

```js
import Vue from 'vue';
import IIUI from 'iiui';
import 'iiui/lib/iiui-css/index.css';

Vue.use(IIUI);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.


### Rem units

IIUI use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

postcss config example:

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    }
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```