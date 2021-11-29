<template>
  <div class="edition-wrapper">
    <el-dialog
      custom-class="edition-dialog"
      :visible.sync="dialogVisible"
      width="560px"
      @close="close"
    >
      <div class="content">
        <!-- <div class="title">{{ title }}</div> -->
        <div class="text-content">{{ content }}</div>
        <div class="btn-group">
          <div class="btn sure" @click="close">确认</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      title: '',
      content: ''
    }
  },
  methods: {
    close() {
      this.$nextTick(() => {
        this.dialogVisible = false
        this.$el.parentNode.removeChild(this.$el)
      })
    }
  }
}
</script>
