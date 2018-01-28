<template>
  <div class="header">
    <div class="header-box">
      <div class="title" v-for="item in navBar" :class="{active: item.isActive}" :key="item.name" @click="pageChange(item.name, item.path)">
        <span>{{item.name}}</span>
      </div>
      <div class="operate-area">
        <span>欢迎aaaa</span>
        <el-button type="primary" size="mini" round>登录</el-button>
        <el-button type="warning" size="mini" round>退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navBar: [
        {
          name: '首页',
          path: '/home',
          isActive: true
        }, {
          name: '干货分享',
          path: '/home/blog',
          isActive: false
        }, {
          name: '个人中心',
          path: '/home/center',
          isActive: false
        }
      ]
    }
  },
  methods: {
    pageChange (pageName, pagePath) {
      let navBar = this.navBar
      navBar.forEach(nav => {
        nav.isActive = nav.name === pageName
      })
      this.$router.push(pagePath)
    }
  }
}
</script>

<style scoped>
.header {
  height: 60px;
  background: #24292e;
  box-shadow: 0 0 13px #000;
}
.header-box {
  width: 1200px;
  margin: 0 auto;
}
.title {
  display: inline-block;
  width: 130px;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
}
.title:hover {
  color: #f6f9d3;
  background: #3c4040;
}
.active {
  color: #ffd04b;
  background: #3c4040;
}
.operate-area {
  float: right;
  height: 60px;
  line-height: 60px;
}
</style>
