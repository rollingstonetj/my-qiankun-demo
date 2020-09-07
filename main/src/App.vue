<template>
  <div id="app">
    <div class="home">
      <h3>我是主demo， 当前加载的子应用是<span style="color: purple;">{{currentMicroApp}}</span></h3>
      <div class="nav">
        <router-link to="/app1">跳转之微前端子应用1</router-link>
        <router-link to="/app2">跳转至微前端子应用2</router-link>
      </div>
      <div class="content">
        <div id="subappContent"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    loading: Boolean,
    content: String
  },
  computed: {
    ...mapState(['currentMicroApp'])
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .home {
    height: 100%;
  }
  .nav {
    width: 200px;
    height: 100%;
    background: #dddddd;
    padding-top: 30px;
    float: left;
    a {
      text-decoration: none;
      display: block;
      margin-bottom: 10px;
      color: #555;
    }
  }
  .content {
    margin-left: 200px;
    height: 100%;
    background: olivedrab;
    padding-top: 30px;
  }
}
html, body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#subappContent {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
#common_subapp1 {
  width: 300px;
  height: 300px;
  overflow: scroll;
}
</style>
