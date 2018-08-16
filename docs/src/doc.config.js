/* eslint-disable */
const version = require('../../package.json').version;

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: '',
        title: 'IIUI',
        version,
        href: '#/'
      },
      nav: {
        'Vue 组件': '#/',
        lang: {
          text: 'En',
          from: 'zh-CN',
          to: 'en-US'
        },
        github: 'https://github.com/varjay/IIUI'
      }
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/quickstart',
                title: '快速上手'
              },
              {
                path: '/changelog',
                title: '更新日志'
              },
              {
                path: '/ii-css',
                title: '内置样式'
              },
              {
                path: '/theme',
                title: '定制主题'
              },
              {
                path: '/contribution',
                title: '开发指南'
              },
              {
                path: '/style-guide',
                title: '风格指南'
              },
              {
                path: '/locale',
                title: '国际化'
              }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '基础组件',
            list: [
              {
                path: '/button',
                title: 'Button 按钮'
              },
              {
                path: '/lazyload',
                title: 'Lazyload 图片懒加载'
              }
            ]
          },
          {
            groupName: '高阶组件',
            list: [
              {
                path: '/cell-swipe',
                title: 'CellSwipe 滑动单元格'
              }
            ]
          }
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image: '',
        title: 'IIUI',
        version,
        href: '#/'
      },
      nav: {
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        },
        github: 'https://github.com/varjay/IIUI'
      }
    },
    nav: [
      {
        name: 'Essentials',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction'
              },
              {
                path: '/quickstart',
                title: 'Quickstart'
              },
              {
                path: '/changelog',
                title: 'Changelog'
              },
              {
                path: '/ii-css',
                title: 'Built-in style'
              },
              {
                path: '/theme',
                title: 'Custom Theme'
              },
              {
                path: '/locale',
                title: 'Internationalization'
              }
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Basic Components',
            list: [
              {
                path: '/col',
                title: 'Layout'
              },
              {
                path: '/badge',
                title: 'Badge'
              },
              {
                path: '/button',
                title: 'Button'
              },
              {
                path: '/cell',
                title: 'Cell'
              },
              {
                path: '/icon',
                title: 'Icon'
              },
              {
                path: '/lazyload',
                title: 'Lazyload'
              },
              {
                path: '/list',
                title: 'List'
              },
              {
                path: '/loading',
                title: 'Loading'
              },
              {
                path: '/nav-bar',
                title: 'NavBar'
              },
              {
                path: '/notice-bar',
                title: 'NoticeBar'
              },
              {
                path: '/pagination',
                title: 'Pagination'
              },
              {
                path: '/panel',
                title: 'Panel'
              },
              {
                path: '/popup',
                title: 'Popup'
              },
              {
                path: '/progress',
                title: 'Progress'
              },
              {
                path: '/steps',
                title: 'Steps'
              },
              {
                path: '/swipe',
                title: 'Swipe'
              },
              {
                path: '/tabbar',
                title: 'Tabbar'
              },
              {
                path: '/tag',
                title: 'Tag'
              },
              {
                path: '/waterfall',
                title: 'Waterfall'
              }
            ]
          },
          {
            groupName: 'Form Components',
            list: [
              {
                path: '/checkbox',
                title: 'Checkbox'
              },
              {
                path: '/field',
                title: 'Field'
              },
              {
                path: '/number-keyboard',
                title: 'NumberKeyboard'
              },
              {
                path: '/password-input',
                title: 'PasswordInput'
              },
              {
                path: '/radio',
                title: 'Radio'
              },
              {
                path: '/rate',
                title: 'Rate'
              },
              {
                path: '/search',
                title: 'Search'
              },
              {
                path: '/slider',
                title: 'Slider'
              },
              {
                path: '/stepper',
                title: 'Stepper'
              },
              {
                path: '/switch',
                title: 'Switch'
              },
              {
                path: '/uploader',
                title: 'Uploader'
              }
            ]
          },
          {
            groupName: 'Action Components',
            list: [
              {
                path: '/actionsheet',
                title: 'Actionsheet'
              },
              {
                path: '/datetime-picker',
                title: 'DatetimePicker'
              },
              {
                path: '/dialog',
                title: 'Dialog'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh'
              },
              {
                path: '/toast',
                title: 'Toast'
              }
            ]
          },
          {
            groupName: 'Advanced Components',
            list: [
              {
                path: '/cell-swipe',
                title: 'CellSwipe'
              },
              {
                path: '/image-preview',
                title: 'ImagePreview'
              },
              {
                path: '/switch-cell',
                title: 'SwitchCell'
              },
              {
                path: '/tree-select',
                title: 'TreeSelect'
              }
            ]
          },
          {
            groupName: 'Business Components',
            list: [
              {
                path: '/address-edit',
                title: 'AddressEdit'
              },
              {
                path: '/address-list',
                title: 'AddressList'
              },
              {
                path: '/area',
                title: 'Area'
              },
              {
                path: '/card',
                title: 'Card'
              },
              {
                path: '/contact-card',
                title: 'Contact'
              },
              {
                path: '/coupon-list',
                title: 'Coupon'
              },
              {
                path: '/goods-action',
                title: 'GoodsAction'
              },
              {
                path: '/submit-bar',
                title: 'SubmitBar'
              },
              {
                path: '/sku',
                title: 'Sku'
              }
            ]
          }
        ]
      }
    ]
  }
};
