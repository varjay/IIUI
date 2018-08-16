<p align="center">
    <!-- <img alt="logo" src="" width="120" height="120" style="margin-bottom: 10px;"> -->
</p>

<h3 align="center" style="margin: 30px 0 35px;">Lightweight Mobile UI Components built on Vue</h3>

<p align="center">
    <img src="https://img.shields.io/npm/v/iiui.svg?style=flat" alt="npm version" />
    <img src="https://travis-ci.org/youzan/iiui.svg?branch=master" alt="Build Status" />
    <img src="https://img.shields.io/npm/dt/iiui.svg" alt="downloads" />
    <img src="http://img.badgesize.io/https://unpkg.com/iiui/lib/iiui.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size" alt="JS Gzip Size" />
    <img src="http://img.badgesize.io/https://unpkg.com/iiui/lib/iiui-css/index.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size" alt="CSS Gzip Size" />
    <img src="https://img.shields.io/codecov/c/github/youzan/iiui/dev.svg" alt="Coverage Status" />
</p>

<p align="center"><a href="./README.zh-CN.md">🇨🇳访问中文版</a></p>

---

## Features

* 50+ Reusable components
* 80%+ Unit test coverage
* Extensive documentation and demos
* Support [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* Support TypeScript
* Support SSR

## Install

#### NPM

```shell
npm i iiui -S
```

#### YARN

```shell
yarn add iiui
```

## Quickstart

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

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Browser Support

Modern browsers and Android 4.0+, iOS 6+.

## Links

* [Changelog](https://youzan.github.io/iiui#/en-US/changelog)

## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
