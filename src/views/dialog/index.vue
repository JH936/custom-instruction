<template>
  <div class="message">
    <el-button @click="open">打开消息框</el-button>
    <el-button @click="open1">打开消息框</el-button>
  </div>
</template>

<script>
export default {
  name: 'MessageDialog',
  components: {
  },
  mounted() {
  },
  methods: {
    open() {
      this.$Message({
        title: '我是消息框'
      }, {
        content: 'MyForm'
      }).init()
    },
    open1() {
      this.$MyDialog({
        title: 'msg',
        content: '这是一个弹窗提示。'
      })
    }
  }
}
</script>

<style scoped>

</style>
