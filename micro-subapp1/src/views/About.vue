<template>
  <div class="about">
    <h1>我是子项目1的About路由</h1>
    <button @click="increment(1)">加1</button>
    <div>count 为{{count}}</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      microApp: ''
    }
  },
  computed: {
    ...mapState({
      count: state => state.user.count,
      propsFromMainApp: state => state.propsFromMainApp
    })
  },
  methods: {
    ...mapMutations('user', ['increment'])
  },
  mounted () {
  }
}
</script>
