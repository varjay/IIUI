<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ii-swipe class="demo-swipe--vertical">
        <ii-swipe-item>
          <div class="facetest">
            <ul>
              <li v-for="(d, i) in faces">{{d.v}}</li>
            </ul>
          </div>
        </ii-swipe-item>
        <ii-swipe-item>2</ii-swipe-item>
        <ii-swipe-item>3</ii-swipe-item>
        <ii-swipe-item>4</ii-swipe-item>
      </ii-swipe>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ii-swipe :autoplay="3000">
        <ii-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" >
        </ii-swipe-item>
      </ii-swipe>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ii-swipe @change="onChange">
        <ii-swipe-item>1</ii-swipe-item>
        <ii-swipe-item>2</ii-swipe-item>
        <ii-swipe-item>3</ii-swipe-item>
        <ii-swipe-item>4</ii-swipe-item>
      </ii-swipe>
    </demo-block>

    <demo-block :title="$t('title4')">
      <ii-swipe :autoplay="3000" vertical class="demo-swipe--vertical">
        <ii-swipe-item>1</ii-swipe-item>
        <ii-swipe-item>2</ii-swipe-item>
        <ii-swipe-item>3</ii-swipe-item>
        <ii-swipe-item>4</ii-swipe-item>
      </ii-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '图片懒加载',
      title3: '监听 change 事件',
      title4: '纵向滚动',
      message: '当前 Swipe 索引：'
    },
    'en-US': {
      title2: 'Image Lazyload',
      title3: 'Change Event',
      title4: 'Vertical Scrolling',
      message: 'Current Swipe index:'
    }
  },

  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      faces: [
        {
          m: '😀',
          v: '😀',
        },
        {
          m: '😁',
          v: '😁',
        },
        {
          m: '😂',
          v: '😂',
        },
        {
          m: '😄',
          v: '😄',
        },
        {
          m: '😅',
          v: '😅',
        },
        {
          m: '[好玩]',
          v: '😆',
        },
        {
          m: '[笑笑]',
          v: '😊',
        },
        {
          m: '[啦啦]',
          v: '😋',
        },
        {
          m: '[安逸]',
          v: '😌',
        },
        {
          m: '[色色]',
          v: '😍',
        },
        {
          m: '[秋波]',
          v: '😘',
        },
        {
          m: '[亲亲]',
          v: '😙',
        },
        {
          m: '[调皮]',
          v: '😜',
        },
        {
          m: '[偷笑]',
          v: '😝',
        },
        {
          m: '[酷]',
          v: '😎',
        },
        {
          m: '[得意]',
          v: '😏',
        },
        {
          m: '[呵呵]',
          v: '😶',
        },
        {
          m: '[额]',
          v: '😑',
        },
        {
          m: '[好吧]',
          v: '😒',
        },
        {
          m: '[脸红]',
          v: '😳',
        },
        {
          m: '[唉]',
          v: '😞',
        },
        {
          m: '[惊讶]',
          v: '😟',
        },
        {
          m: '[生气]',
          v: '😠',
        },
        {
          m: '[发火]',
          v: '😡',
        },
        {
          m: '[无助]',
          v: '😔',
        },
        {
          m: '[不开心]',
          v: '😕',
        },
        {
          m: '[挣扎]',
          v: '😣',
        },
        {
          m: '[折磨]',
          v: '😖',
        },
        {
          m: '[难受]',
          v: '😫',
        },
        {
          m: '[火大]',
          v: '😤',
        },
        {
          m: '[天呐]',
          v: '😮',
        },
        {
          m: '[惊恐]',
          v: '😱',
        },
        {
          m: '[震惊]',
          v: '😨',
        },
        {
          m: '[汗颜]',
          v: '😰',
        },
      ],
    };
  },

  methods: {
    onChange(index) {
      console.log('onchange事件')
    }
  }
};
</script>

<style lang="postcss" scoped>
.facetest {
  line-height: 1;
  text-align: left;
  ul {
    li {
      float: left;
    }
  }
}
.demo-swipe {
  padding-bottom: 30px;

  .ii-swipe {
    cursor: pointer;

    &-item {
      color: #fff;
      font-size: 20px;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: #fff;
      pointer-events: none;
    }
  }

  &--vertical {
    height: 200px;

    .ii-swipe-item {
    }
  }
}
</style>
