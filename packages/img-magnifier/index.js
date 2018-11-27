// sumFunction 插件对应组件的名字
import imgMagnifier from './src/img-magnifier.vue'

imgMagnifier.install = Vue => Vue.component(imgMagnifier.name, imgMagnifier)

export default imgMagnifier
