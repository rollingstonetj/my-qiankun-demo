<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    我是子项目2的Home路由
    <el-button type="primary" @click="openMsgBox">按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  methods: {
    openMsgBox () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          console.log(this, 'this')
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  },
  mounted () {
    console.log(window.onresize, window)
    // window.onresize = function () {
    //   console.log(111)
    // }
  }
}
</script>
