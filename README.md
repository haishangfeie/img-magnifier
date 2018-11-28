# img-magnifier

# 暂时无法npm下载，组件可以直接在example/components/img-magnifier这个文件夹获取使用。

因为之前没有试过发布组件到npm，还在探索过程中。


> 基于 vue 的图片放大组件

## 安装

## API

### props

| 参数           | 描述                 | 类型   | 必填？ |
| -------------- | -------------------- | ------ | ------ |
| smallSrc       | 小图片的 src         | String | NO    |
| magnifierSrc   | 放大镜图片的 src     | String | NO    |
| maskStyle      | 遮罩的样式           | Object | YES    |
| configs        | 基本配置项           | Object | YES    |
| maskTransEnter | 遮罩显示过渡动画样式 | Object | NO     |
| maskTransLeave | 遮罩隐藏过渡动画样式 | Object | NO     |

## 例子

```html
<template>
  <div class="container">
    <img-magnifier
      :smallSrc="smallImgSrc"
      :magnifierSrc="magnifierSrc"
      :maskStyle="maskStyle"
      :maskTransEnter="maskTransEnter"
      :maskTransLeave="maskTransLeave"
      :configs="configs"
    ></img-magnifier>
  </div>
</template>

<script>
  import imgMagnifier from 'components/img-magnifier';
  export default {
    components: {
      imgMagnifier
    },
    data() {
      return {
        smallImgSrc: '', // 小图片地址
        magnifierSrc: '', // 放大镜图片地址
        // 设置遮罩样式
        maskStyle: {
          width: '200px',
          height: '200px',
          background: '#000',
          opacity: 0.5,
          // 如果有多个过渡效果，可以设置 transition: 'opacity 2s,background 2s' ，请勿设置为：transition: 'all .8s' ，这将会影响组件的实现。
          transition: 'opacity .8s'
        },
        // 设置遮罩进入的过渡效果，选填，要实现动画效果请在 maskStyle 中设置 transition
        // 注意此处是在js中设置样式，如果使用了CSS3的属性，请自行按需添加私有前缀
        maskTransEnter: {
          opacity: 0
          // 这里仅为举例如何添加私有前缀
          // webkitTransform:translate3d(0,0,0)`,
          // transform:translate3d(0,0,0)`
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
      };
    }
  };
</script>

<style scoped></style>
```
