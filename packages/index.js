// This file is auto gererated by build/build-entry.js
import Actionsheet from './actionsheet';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Example from './example';
import Field from './field';
import Icon from './icon';
import Loading from './loading';
import Locale from './locale';
import PasswordInput from './password-input';
import Popup from './popup';
import Search from './search';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';

var rem = (window.rem = document.documentElement.clientWidth / 16)
var em = (window.em = window.em = Math.sqrt((rem - 20) * 0.9) + 20)
document.querySelector('html').style.fontSize = rem + 'px'
document.body.style.fontSize = em + 'px'

const version = '1.0.5';
const components = [
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Example,
  Field,
  Icon,
  Loading,
  Locale,
  PasswordInput,
  Popup,
  Search,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell
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
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Example,
  Field,
  Icon,
  Loading,
  Locale,
  PasswordInput,
  Popup,
  Search,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell
};

export default {
  install,
  version
};
