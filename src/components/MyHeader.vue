<template>
  <div class="header">
    <div class="title" v-for="item in navBar" :key="item.name">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/persional/index',
      navBar: [{
        name: '首页',
        path: '/persional/index'
      }, {
        name: '干货分享',
        path: '/persional/blog'
      }, {
        name: '个人中心',
        path: '/persional/center'
      }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
