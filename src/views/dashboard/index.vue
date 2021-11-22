<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div style="width: 500px">
      <el-form ref="form" :model="sizeForm" label-width="100px">
        <!-- 防抖 -->
        <el-form-item label="自定义指令">
          <el-input v-model="sizeForm.name" v-anti-shake="onSearch" />
          <br>
        </el-form-item>
        <el-form-item label="自定义指令">
          <el-input v-model="sizeForm.name" v-anti-shake:keyup="onSearch" />
          {{ this.sizeForm.search }}
          <br>
        </el-form-item>
        <!-- 节流 -->
        <el-form-item>
          <el-button
            v-anti-shake:click="onSearch"
            type="primary"
          >搜索防抖</el-button>
          <el-button
            v-throttle="{ fn: onSubmit, time: 300 }"
            type="primary"
          >提交防抖</el-button>
          <el-button
            v-throttle="{ fn: onSubmit }"
            type="primary"
          >提交防抖</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      sizeForm: {
        name: '',
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onSearch() {
      if(this.sizeForm.name){
        console.log(this.sizeForm.name)
        this.sizeForm.search = this.sizeForm.name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
