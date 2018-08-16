<p align="center">
    <!-- <img alt="logo" src="" width="120" style="margin-bottom: 10px;"> -->
</p>
<h3 align="center" style="margin: 30px 0 35px;">轻量、可靠的移动端 Vue 组件库</h3>

<p align="center">
    <img src="https://img.shields.io/npm/v/iiui.svg?style=flat" alt="npm version" />
    <img src="https://travis-ci.org/youzan/iiui.svg?branch=master" alt="Build Status" />
    <img src="https://img.shields.io/npm/dt/iiui.svg" alt="downloads" />
    <img src="http://img.badgesize.io/https://unpkg.com/iiui/lib/iiui.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size" alt="JS Gzip Size" />
    <img src="http://img.badgesize.io/https://unpkg.com/iiui/lib/iiui-css/index.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size" alt="CSS Gzip Size" />
    <img src="https://img.shields.io/codecov/c/github/youzan/iiui/dev.svg" alt="Coverage Status" />
</p>

## 特性

* 经过线上业务检验的组件
* 支持 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* 支持 TypeScript
* 支持 SSR

## 安装

#### NPM

```shell
npm i iiui -S
```

#### YARN

```shell
yarn add iiui
```

#### CDN

访问下面的文件 URL，会自动重定向至最新版本的 CDN 链接，建议使用固定版本的 CDN 链接，避免升级时受到非兼容性更新的影响。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/iiui/lib/iiui-css/index.css">

<!-- 引入组件 -->
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://unpkg.com/iiui/lib/iiui.min.js"></script>
```

## 快速上手

#### 方式一. 使用  [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory。
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

接着你可以在代码中直接引入 IIUI 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'iiui';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'iiui/lib/button';
import 'iiui/lib/iiui-css/base.css';
import 'iiui/lib/iiui-css/button.css';
```

#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import IIUI from 'iiui';
import 'iiui/lib/iiui-css/index.css';

Vue.use(IIUI);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件

## 贡献代码

使用过程中发现任何问题都可以提 [Issue](https://github.com/varjay/IIUI/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/varjay/IIUI/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 6+.

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
