// This file is auto gererated by build/build-entry.js
import Button from './button';
import Cell from './cell';
import Example from './example';
import Icon from './icon';
import ImagePreview from './image-preview';
import Locale from './locale';

var rem = (window.rem = document.documentElement.clientWidth / 16)
var em = (window.em = window.em = Math.sqrt((rem - 20) * 0.9) + 20)
document.querySelector('html').style.fontSize = rem + 'px'
document.body.style.fontSize = em + 'px'

const version = '0.0.11';
const components = [
  Button,
  Cell,
  Example,
  Icon,
  ImagePreview,
  Locale
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Cell,
  Example,
  Icon,
  ImagePreview,
  Locale
};

export default {
  install,
  version
};
