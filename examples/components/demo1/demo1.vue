<template>
  <div>
    <img-magnifier :smallSrc="smallImgSrc"
                   :magnifierSrc="magnifierSrc"
                   :maskStyle="maskStyle"
                   :configs="configs"></img-magnifier>
  </div>
</template>

<script>
export default {
  data () {
    return {
      smallImgSrc: require('../../common/img/demo.jpg'), // 小图片地址
      magnifierSrc: require('../../common/img/demo.jpg'), // 放大镜图片地址
      // 设置遮罩样式
      maskStyle: {
        width: '200px',
        height: '200px',
        background: '#000',
        opacity: 0.5
      },
      configs: {
        // 小图片的宽高
        smallImgWidth: 400,
        smallImgHeight: 400,
        // 放大镜图片的宽高，注意是这里是图片的尺寸而不是放大镜显示的区域
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

<style scoped>
</style>
