<template>
  <div id="app1">
    <div id="nav">
      <router-link to="/">Home1</router-link> |
      <router-link to="/about">About1</router-link>
    </div>
    <div id="common_subapp1"/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: null;
    &.router-link-exact-active {
      // color: #42b983;
    }
  }
}
#common_subapp1 {
  width: 300px;
  height: 300px;
  border: 1px solid pink;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
