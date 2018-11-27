<template>
  <div id="app"
       class="app">
    <h1>图片放大组件</h1>
    <div class="tab">
      <router-link class="btn"
                   to="/demo1">demo1</router-link>
      <router-link class="btn"
                   to="/demo2">demo2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.app
  margin: 0
  padding: 0
  .tab
    height: 40px
    line-height: 40px
    font-size: 0
  .btn
    display: inline-block
    height: 40px
    padding: 0 10px
    border-radius: 5px
    background-color: #17cc10
    color: #fff
    font-size: 16px
    text-decoration: none
    margin-right: 10px
    &:last-child
      margin: 0
    &:hover
      opacity: 0.8
    &:active
      opacity: 0.5
</style>
