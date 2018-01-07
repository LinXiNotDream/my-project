<template>
  <el-menu class="el-menu-demo" :default-active="activeIndex" @select="handleSelect" router mode="horizontal" theme="dark">
    <!-- 有二级菜单 -->
    <el-submenu v-for="item in navBar" v-if="item.children" :key="item.name" :index="item.index" v-show="item.show">
      <template slot="title">{{item.name}}</template>
      <el-menu-item v-for="child in item.children" :key="child.name" :index="child.index">{{item.name}}</el-menu-item>
    </el-submenu>
    <!-- 没有二级菜单 -->
    <el-menu-item v-else :index="item.index" v-show="item.show">{{item.name}}</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/persional/index',
      navBar: [{
        name: '首页',
        index: '/persional/index',
        show: true
      }, {
        name: '干货分享',
        index: '/persional/blog',
        show: true
      }, {
        name: '个人中心',
        index: '/persional/center',
        show: true
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

</style>
