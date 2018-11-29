<template>
  <div class="container">
    <img-magnifier :smallSrc="smallImgSrc"
                   :magnifierSrc="magnifierSrc"
                   :maskStyle="maskStyle"
                   :maskTransEnter="maskTransEnter"
                   :maskTransLeave="maskTransLeave"
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
        opacity: 0.5,
        transition: 'opacity .8s'
      },
      maskTransEnter: {
        opacity: 0
      },
      maskTransLeave: {
        opacity: 0
      },
      configs: {
        smallImgWidth: 400,
        smallImgHeight: 400,
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
