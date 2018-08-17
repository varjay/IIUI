// This file is auto gererated by build/build-entry.js
import Button from './button';
import Locale from './locale';

const version = '0.0.8';
const components = [
  Button,
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
  Locale
};

export default {
  install,
  version
};
