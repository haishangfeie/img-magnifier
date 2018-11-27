<template>
  <div class="container">
    <h2>淡入淡出效果</h2>
    <img-magnifier :smallSrc="smallImgSrc"
                   :magnifierSrc="magnifierSrc"
                   :maskStyle="maskStyle"
                   :maskTransEnter="maskTransEnter"
                   :maskTransLeave="maskTransLeave"
                   :configs="configs"></img-magnifier>
  </div>
</template>

<script>
import imgMagnifier from '@@/img-magnifier'
export default {
  components: {
    imgMagnifier
  },
  data () {
    return {
      smallImgSrc: require('../../common/img/demo.jpg'), // 小图片地址
      magnifierSrc: require('../../common/img/demo.jpg'), // 放大镜图片地址
      // 设置遮罩样式
      maskStyle: {
        width: '200px',
        height: '200px',
        background: '#000',
        opacity: 0.5,
        // 如果有多个过渡效果，可以设置 transition: 'opacity 2s,background 2s' ，请勿设置为：transition: 'all .8s' ，这将会影响移动的效果
        transition: 'opacity .8s'
      },
      // 设置遮罩进入的过渡效果，选填，要实现动画效果请在 maskStyle 中设置 transition
      // 注意此处是在js中设置样式，如果使用了CSS3的属性，请自行按需添加私有前缀
      maskTransEnter: {
        opacity: 0
      },
      // 设置遮罩离开的过渡效果，选填，要实现动画效果请在 maskStyle 中设置 transition
      // 同样请自行按需添加私有前缀
      maskTransLeave: {
        opacity: 0
      },
      configs: {
        // 小图片的宽高
        smallImgWidth: 400,
        smallImgHeight: 400,
        // 放大镜图片的宽高，注意是这里是图片的尺寸而不是
        magnifierWidth: 800,
        magnifierHeight: 800,
        magnifierPosWay: 'absolute',
        magnifierPosLeft: '420px',
        magnifierPosTop: 0
      }
    }
  }
}
</script>

<style scoped></style>
