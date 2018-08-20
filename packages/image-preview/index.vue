<template>
  <div class="Image-enlargement">
    <transition
      @enter="enter"
      @after-enter="afterEnter"
    >
      <img
        v-show="show"
        @touchmove="drag($event)"
        @touchstart="touchStart($event)"
        @touchend="touchend($event)"
        :src=imgSrc
        :style="{
          top:topNum + 'px',
          left:leftNum + 'px',
          width:widthNum+ 'px',
          height:heightNum+ 'px',
        }"
        alt=""
      >
    </transition>
    <!--背景-->
    <div ref="box" :style="{zIndex:'100',width:'100vw',height:'100vh',opacity:opacityNum,backgroundColor:'#050505',transition : 'all 0.6s ease'}">
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'image-preview',
  data () {
    return {
      time: '0.3',
      show: false,
      topY: '',
      num: '',
      firstPageYNum: '',
      opacityNum: 0,
      status: ''
    }
  },
  props: ['imgSrc', 'topNum', 'leftNum', 'widthNum', 'heightNum'],
  mounted () {
    // 在点击开始后执行
    setTimeout(() => {
      this.show = !this.show
    }, 100)
  },
  methods: {
    enter (el, done) {
      // 刷新动画效果
      // 动画完成后的样式
      console.log(el.offsetWidth)
      let davStyle = el.style
      davStyle.transitionDuration = this.time + 's'
      davStyle.width = '100vw'
      davStyle.height = 'auto'
      this.opacityNum = 1
      // 控制最大最小
      this.imgSize(el)
      davStyle.transform = 'translate(' + -this.leftNum + 'px,' + 0 + 'px)'
      davStyle.transform = 'transition3d(0,0,0)'
      done()
    },
    imgSize (el) {
      let h = el.offsetHeight
      let w = el.offsetWidth
      if (h < w) {
        el.style.height = w + 'px'
        if (h > this.$refs.box.offsetHeight) {
          el.style.height = '90vw'
        }
      }
      if (h > this.$refs.box.offsetHeight) {
        el.style.height = '90vw'
      }
    },
    afterEnter (el) {
      // return
      // 动画结束后使用的确定位置
      setTimeout(() => {
        let a = this.$refs.box.offsetHeight
        this.topY = (a - el.offsetHeight) / 3
        if (this.topNum > this.topY ) {
          this.topY = -this.topY * 2
        }
        el.style.transform = 'translate(' + -this.leftNum + 'px,' + this.topY + 'px)'
      }, this.time * 1000 - 100)
      // 动画完成之后调用
    },
    drag (e) {
      let divStyle = e.target.style
      divStyle.transitionDuration = '0s'
      let pageY = e.targetTouches[0].pageY
      let a = Number(pageY - this.firstPageYNum)
      let b = pageY - this.firstPageYNum
      let numYData = Number(this.topY)
      divStyle.transform = 'translate(' + (-this.leftNum) + 'px,' + (numYData + a) + 'px)'
      if (this.firstPageYNum < pageY) {
        // 拉低
        this.num -= 0.01
        this.$refs.box.style.opacity = this.num
      } else {
        this.$refs.box.style.opacity = 1
      }
      if (b > 100) {
        this.status = 2
      } else {
        this.status = 1
      }
      // 阻止手机端事件
      e.preventDefault()
    },
    touchStart (e) {
      // 进入手势位置
      this.firstPageYNum = e.targetTouches[0].pageY
    },
    touchend (e) {
      // 离开手势
      this.num = 1
      let divStyle = e.target.style
      if (this.status === 1) {
        divStyle.transitionDuration = this.time + 's'
        this.$refs.box.style.opacity = this.num
        divStyle.transform = 'translate(' + (-this.leftNum) + 'px,' + this.topY + 'px)'
      } else if (this.status === 2) {
        // 关闭组件
        divStyle.height = e.target.offsetHeight + 'px'
        this.End(e)
      }
    },
    End (e) {
      this.$refs.box.style.opacity = 0
      console.log(e.target.offsetHeight)
      let divStyle = e.target.style
      divStyle.transitionDuration = this.time + 's'
      divStyle.height = this.heightNum + 'px'
      divStyle.width = this.widthNum + 'px'
      divStyle.transform = 'translate(' + this.leftNum + 'px,' + this.topNum + 'px)'
      divStyle.opacity = 0.1
      setTimeout(() => {
        this.$emit('imgShow', '', false)
      }, this.time * 1000)
    }
  }
});
</script>
