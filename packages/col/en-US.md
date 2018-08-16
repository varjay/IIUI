## Layout

Quickly and easily create layouts with `van-row` and `van-col`

### Install
``` javascript
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
```

### Usage

#### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.


```html
<ii-row>
  <ii-col span="8">span: 8</ii-col>
  <ii-col span="8">span: 8</ii-col>
  <ii-col span="8">span: 8</ii-col>
</ii-row>

<ii-row>
  <ii-col span="4">span: 4</ii-col>
  <ii-col span="10" offset="4">offset: 4, span: 10</ii-col>
  <ii-col span="6">span: 6</ii-col>
</ii-row>

<ii-row>
  <ii-col offset="12" span="12">offset: 12, span: 12</ii-col>
</ii-row>
```


#### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<ii-row gutter="20">
  <ii-col span="8">span: 8</ii-col>
  <ii-col span="8">span: 8</ii-col>
  <ii-col span="8">span: 8</ii-col>
</ii-row>
```

#### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<ii-row type="flex">
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
</ii-row>

<ii-row type="flex" justify="center">
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
</ii-row>

<ii-row type="flex" justify="end">
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
</ii-row>

<ii-row type="flex" justify="space-between">
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
</ii-row>

<ii-row type="flex" justify="space-around">
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
  <ii-col span="6">span: 6</ii-col>
</ii-row>
```


### API

#### Row

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| gutter | Grid spacing（px） | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | `String` | `start` |
| align | Flex cross axis, be set to  center/bottom | `String` | `top` |

#### Col

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| span | Number of column the grid spans | `String | Number` | - |
| offset | Number of spacing on the left side of the grid | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
