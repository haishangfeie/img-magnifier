# img-magnifier

> 基于 vue 的图片放大组件

## 安装
在你的项目根目录下：

使用 npm

```bash
npm install img-magnifier --save # 或者 cnpm install img-magnifier --save
```

## 使用
在 `main.js` 文件中引入插件并注册

```js
# main.js
import imgMagnifier from 'img-magnifier'
import 'img-magnifier/lib/img-magnifier.css'

Vue.use(imgMagnifier)
```

在项目中使用

```html
<img-magnifier
  :smallSrc="smallImgSrc"
  :magnifierSrc="magnifierSrc"
  :maskStyle="maskStyle"
  :maskTransEnter="maskTransEnter"
  :maskTransLeave="maskTransLeave"
  :configs="configs"
></img-magnifier>
```

## 查看示例
```bash
# 使用npm
npm i # 或者使用cnpm cnpm i
# 启动
npm run serve
```

## API

### props

| 参数           | 描述                 | 类型   | 必填？ |
| -------------- | -------------------- | ------ | ------ |
| smallSrc       | 小图片的 src         | String | NO     |
| magnifierSrc   | 放大镜图片的 src     | String | NO     |
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
  export default {
    data() {
      return {
        smallImgSrc: '', // 小图片地址
        magnifierSrc: '', // 放大镜图片地址
        // 设置遮罩样式
        // 这里可以根据需要设置，但至少宽高是需要设置的
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
          // 这里仅为举例如何添加私有前缀，请勿真的使用transform为过渡，否则会影响组件的功能
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
