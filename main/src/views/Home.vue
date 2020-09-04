<template>
  <div class="home">
    <h1>我是主demo</h1>
    <div class="nav">
    </div>
    <div class="content">
      <div id="subappContent"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .home {
    height: 100%;
  }
  .nav {
    width: 200px;
    height: 100%;
    background: #dddddd;
    padding-top: 30px;
    float: left;
  }
  a {
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    color: #555;
  }
  .content {
    margin-left: 200px;
    height: 100%;
    background: olivedrab;
    padding-top: 30px;
  }
</style>
