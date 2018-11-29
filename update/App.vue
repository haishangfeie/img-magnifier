<template>
  <div id="app"
       class="app">
    <h1 class="title">图片放大组件</h1>
    <div class="block">
      <img-magnifier :smallSrc="smallImgSrc"
                   :magnifierSrc="magnifierSrc"
                   :maskStyle="maskStyle"
                   :maskTransEnter="maskTransEnter"
                   :maskTransLeave="maskTransLeave"
                   :configs="configs"></img-magnifier>
    </div>
    <div class="test-bool"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      smallImgSrc: require('./common/img/demo.jpg'), // 小图片地址
      magnifierSrc: require('./common/img/demo.jpg'), // 放大镜图片地址
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

<style lang="stylus">
*
  margin: 0
  padding: 0
.app
  margin-top: 10px
  margin-left: 10px
  .block
    position relative
    z-index 10001
    display:inline-block
  .test-bool
    position: relative
    z-index: 10000
    display: inline-block
    width: 200px
    height: 200px
    background-color: pink
</style>
