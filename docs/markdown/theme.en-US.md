## Custom Theme

`IIUI` provides a set of default themes, if you want to custom the theme color or other styles, you can use the following methods:

### Option 1. PostCSS Plugin
You can import the postcss source code in your own project, then use [postcss-theme-variables](https://www.npmjs.com/package/postcss-theme-variables) to replace the postcss variable.

```javascript
// import base style
import 'iiui/packages/iiui-css/src/base.css';

// import component style
import 'iiui/packages/iiui-css/src/button.css';
import 'iiui/packages/iiui-css/src/checkbox.css';
```

Then require the plugin in the postcss.config.js, and configure the variables according to project needs, you can view all the available variables in profile.

```javascript
module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: ['pcss', 'css']
    }),
    require('postcss-theme-variables')({
      vars: {
        red: '#F60',
        gray: '#CCC',
        blue: '#03A9F4'
      },
      prefix: '$'
    }),
    require('precss')(),
    require('postcss-calc')(),
    require('autoprefixer')({
      browsers: ['Android >= 4.0', 'iOS >= 7']
    })
  ]
};
```

### Option 2. Local build
IIUI also support local build to custom themes.

```bash
# Clone the repository
git clone git@github.com:varjay/IIUI.git
cd packages/iiui-css
```

In the local iiui-css repository, modify the variables in src/common/var.css, then execute the following build command to generate the style file.
```bash
npm run build
```
