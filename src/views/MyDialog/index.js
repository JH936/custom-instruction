import Vue from 'vue'
import EditionTip from './index.vue'

const EditionTipConstructor = Vue.extend(EditionTip)
let instance

const editionTip = function(options = {}) {
  instance = new EditionTipConstructor({
    data: options
  })
  document.body.appendChild(instance.$mount().$el)
  setTimeout(() => {
    this.$nextTick(() => {
      instance.dialogVisible = false
    })
  }, 3000)
}

export default editionTip
