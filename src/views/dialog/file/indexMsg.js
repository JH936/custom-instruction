// 引入写好的全局组件
import Message from './index.vue'
// 默认导出插件
export default {
  install: function(Vue) {
    // 在自定义的插件中注册为全局组件
    Vue.component('msg', Message)
    // 也可以往Vue的原型对象上添加属性或者方法，名字可以自定义
    // 在其他.vue结尾的文件中，可以通过this，访问自己添加的属性和方法
    Vue.prototype.num = 10
    Vue.prototype.$sayHi = () => {
      alert('Hi~')
    }
  }
}
