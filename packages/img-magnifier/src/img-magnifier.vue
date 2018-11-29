<template>
  <div class="img-magnifier"
       ref="imgMagnifier">
    <div @mouseover="showMagnifier"
         @mousemove="moveMagnifyingArea"
         @mouseout="hideMagnifier"
         ref="imgWrap">
      <img :src="smallSrc"
           :width="configs.smallImgWidth"
           :height="configs.smallImgHeight"
           ref="smallImg">
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @leave="leave"
                  v-bind:css="false">
        <div class="mask"
             :style="maskStyle"
             v-show="isShowMagnifier"
             ref="mask"></div>
      </transition>
    </div>
    <div ref="magnifierArea"
         class="magnifier-area"
         v-show="isShowMagnifier">
      <img class="magnifier-area-img magnifier-area-img-hook "
           :src="magnifierSrc"
           :width="configs.magnifierWidth"
           :height="configs.magnifierHeight">
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-magnifier',
  props: {
    smallSrc: {
      type: String
    },
    magnifierSrc: {
      type: String
    },
    maskStyle: {
      type: Object,
      required: true
    },
    configs: {
      type: Object,
      required: true
    },
    maskTransEnter: {
      type: Object
    },
    maskTransLeave: {
      type: Object
    }
  },
  data () {
    return {
      scaleX: null,
      scaleY: null,
      isShowMagnifier: false,
      imgMagnifier: null,
      mask: null,
      magnifierArea: null,
      magnifierAreaImg: null,
      isFirstShow: true
    }
  },
  methods: {
    initView () {
      // 将值重置
      this.isFirstShow = true
      // 设置放大视图显示的位置
      let magnifierArea = this.$refs.magnifierArea
      if (['absolute', 'fixed'].indexOf(this.configs.magnifierPosWay) !== -1) {
        magnifierArea.style.position = this.configs.magnifierPosWay
        magnifierArea.style.left = this.configs.magnifierPosLeft
        magnifierArea.style.top = this.configs.magnifierPosTop
      }
      // 计算缩放比
      this.scaleX = this.configs.magnifierWidth / this.configs.smallImgWidth
      this.scaleY = this.configs.magnifierHeight / this.configs.smallImgHeight
      // 保存  dom对象
      this.imgMagnifier = this.$refs.imgMagnifier
      this.mask = this.$refs.mask
      this.magnifierArea = magnifierArea
      this.magnifierAreaImg = magnifierArea.getElementsByClassName('magnifier-area-img-hook')[0]
    },
    showMagnifier () {
      this.isShowMagnifier = true
      // 仅在首次显示时设置放大镜的显示区域大小
      if (this.isFirstShow) {
        this.isFirstShow = false
        this.$nextTick(() => {
          let maskWidth = this.mask.offsetWidth
          let maskHeight = this.mask.offsetHeight
          this.magnifierArea.style.width = maskWidth * this.scaleX + 'px'
          this.magnifierArea.style.height = maskHeight * this.scaleY + 'px'
        })
      }
    },
    moveMagnifyingArea (e) {
      let rect = this.imgMagnifier.getBoundingClientRect()
      let maskWidth = this.mask.offsetWidth
      let maskHeight = this.mask.offsetHeight
      // 根据鼠标位置相对 .img-magnifier 的位置
      let mounseX = Math.round(e.clientX - rect.left)
      let mounseY = Math.round(e.clientY - rect.top)
      let maskX = Math.round(mounseX - maskWidth / 2)
      let maskY = Math.round(mounseY - maskHeight / 2)
      // 考虑边界修正 mask 的位置
      if (maskX < 0) {
        maskX = 0
      } else if (maskX + maskWidth > this.configs.smallImgWidth) {
        maskX = this.configs.smallImgWidth - maskWidth
      }
      if (maskY < 0) {
        maskY = 0
      } else if (maskY + maskHeight > this.configs.smallImgHeight) {
        maskY = this.configs.smallImgHeight - maskHeight
      }
      // 设置遮罩的移动
      this.mask.style.webkitTransform = `translate3d(${maskX}px,${maskY}px,0)`
      this.mask.style.transform = `translate3d(${maskX}px,${maskY}px,0)`
      // 设置大图的移动位置
      let magnifierX = -1 * maskX * this.scaleX
      let magnifierY = -1 * maskY * this.scaleY
      this.magnifierAreaImg.style.webkitTransform = `translate3d(${magnifierX}px,${magnifierY}px,0)`
      this.magnifierAreaImg.style.transform = `translate3d(${magnifierX}px,${magnifierY}px,0)`
    },
    hideMagnifier () {
      this.isShowMagnifier = false
    },
    beforeEnter (el) {
      if (!this.maskTransEnter) {
        return
      }
      for (let key in this.maskTransEnter) {
        el.style[key] = this.maskTransEnter[key]
      }
    },
    enter (el, done) {
      if (!this.maskTransEnter) {
        done()
        return
      }
      // 强制页面重绘
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight
      this.$nextTick(() => {
        for (let key in this.maskStyle) {
          el.style[key] = this.maskStyle[key]
        }
        el.addEventListener('transitioned', done)
      })
    },
    leave (el, done) {
      if (!this.maskTransLeave) {
        done()
        return
      }
      for (let key in this.maskTransLeave) {
        el.style[key] = this.maskTransLeave[key]
      }
      el.addEventListener('transitioned', done)
    }
  },
  mounted () {
    this.initView()
  }
}
</script>

<style lang="stylus" scoped>
.img-magnifier
  position: relative
  display: inline-block
  font-size: 0
  .mask
    position: absolute
    background-color: #000
    left: 0
    top: 0
    cursor: move
  .magnifier-area
    position: absolute
    left: 0
    top: 0
    overflow: hidden
</style>
