export default {
  install(Vue) {
    // 防抖 实时输入与点击搜索
    Vue.directive('anti-shake', {
      inserted(el, binding, vnode) {
        let timer = null
        if (binding.arg === 'click' || binding.arg === 'keyup') {
          el.addEventListener(binding.arg, () => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
              binding.value()
            }, 300)
          })
        }else{
          el.addEventListener('click', () => {
            if (timer) {
              clearTimeout(timer)
            }
            timer = setTimeout(() => {
              binding.value()
            }, 300)
          })
        }
      }
    })
    // Vue.directive('debounce', {
    //   inserted: function(el, binding) {
    //     let timer = null
    //     el.addEventListener('click', () => {
    //       if (timer) {
    //         clearTimeout(timer)
    //       }
    //       timer = setTimeout(() => {
    //         binding.value()
    //       }, 300)
    //     })
    //   }
    // })
    // 节流
    Vue.directive('throttle', {
      bind: function(
        el,
        {
          value: {
            fn = () => {
              console.log('触发节流指令')
            },
            time = 1000
          }
        }
      ) {
        if (typeof fn !== 'function') return
        el._flag = true // 开关默认为开
        el._timer = null
        el.handler = function() {
          if (!el._flag) return
          // 执行之后开关关闭
          el._flag && fn()
          el._flag = false
          if (el._timer !== null) {
            clearTimeout(el._timer)
            el._timer = null
          }
          el._timer = setTimeout(() => {
            el._flag = true
          }, time)
        }
        el.addEventListener('click', el.handler)
      },
      unbind: function(el, binding) {
        el.removeEventListener('click', el.handler)
      }
    })
  }
}

/*
// anti-shake就是指令，名称
Vue.directive(id: 'anti-shake', definition: {
  //只调用一次，指令第一次绑定到元素时调用。
  //在这里可以进行一次性的初始化设置。
  // el 为null
  bind: function (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {}, //被绑定元素插入父节点时调用〔仅保证父节点存在，但不一定已被插入文档中)。
  //在这里我们可以操作父节点
  inserted: function (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {}, //在组件的 VNode 更新时调用，但是可能发生在其子VNode 更新之前。
  //指令的值可能发生了改变，也可能没有。
  //但是你可以通过比较更新前后的值来忽略不必要的模板更新
  update: function (el: HTMLElement, binding: DirectiveBinding, vnode: VNode， oldVnode: VNode) {},
  //指令所在组件的 VNode及其子 VNode全部更新后调用。
  componentUpdated: function (el: HTMLElement, binding: DirectiveBinding, vnode: VNode， oldVnode: vNode) {},
  //只调用一次与元素解绑时调用
  unbind: function (el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {}
})
 */

// #region
// // 第一个参数是自定义指令的名称,第二个参数对象里面包含着钩子函数
// Vue.directive('test', {
//   // 只调用一次,指令第一次绑定元素的时调用
//   // 在这里可以进行一次性的初始化设置
//   bind: function(el, binding, vnode) {},
//   // 被绑定元素插入父节点时调用
//   // 仅保证父节点存在,但不一定已被插入文档中
//   inserted: function(el, binding, vnode) {},
//   // 所有组件的Vnode更新时调用
//   // 但是可能发生在其子Vnode更新之前
//   // 指令的值可能发生了改变,也可能没有
//   // 但是可以通过比较更新前后的值来忽略不必要的模版更新
//   update: function(el, binding, vnode, oldVnod) {},
//   // 指令所在组件的Vnode及其子VNode全部更新后调用
//   componentUpdate: function(el, binding, vnode, oldVnod) {},
//   // 只调用一次,指令与元素解绑时调用
//   upbind: function(el, binding, vnode) {}
// })
// #endregion
