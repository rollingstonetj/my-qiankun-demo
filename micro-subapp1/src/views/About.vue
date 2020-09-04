<template>
  <div class="about">
    <h1>我是子项目1的About路由</h1>
  </div>
</template>

<script>
// import { loadMicroApp } from 'qiankun'
export default {
  data () {
    return {
      microApp: ''
    }
  },
  mounted () {
    // this.microApp = loadMicroApp(
    //   { name: 'app1', entry: '//localhost:1234', container: this.containerRef.current, props: { name: 'qiankun' } },
    // )
  }
}
</script>
