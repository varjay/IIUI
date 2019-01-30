<template>
  <div v-if="image" class="image-enlargement" @touchmove="move">
    <div class="bg"></div>
    <div class="image" @click="hideself">
      <img :src="image.src">
    </div>
    <ii-icon name="close" />
  </div>
</template>

<script>
import create from '../utils/create';
import vue from 'vue'

let image = ''
vue.directive('preview', {
  inserted: function (el, binding) {
    el.func = function () {
      if (binding.value === '1' || binding.value === 1 || binding.value === true) {
        image = {
          src: this.src,
          w: this.width,
          h: this.height,
        }
      }
    }
    el.addEventListener('click', el.func, false)
  },
  unbind: function (el) {
    el.removeEventListener('click', el.func)
  },
})

export default create({
  name: 'image-preview',
  props: ['imgSrc', 'topNum', 'leftNum', 'widthNum', 'heightNum'],
  data () {
    return {
      time: '0.3',
      show: false,
      topY: '',
      num: '',
      firstPageYNum: '',
      opacityNum: 0,
      status: '',
      image,
      t: null,
    }
  },
  mounted () {
    setInterval(() => {
      this.image = image
    }, 20)
  },
  methods: {
    hideself() {
      this.image = ''
      image = ''
    },
    move(e) {
      // e.preventDefault()
    }
  }
});
</script>
