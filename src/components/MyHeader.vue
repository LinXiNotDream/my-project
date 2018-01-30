<template>
  <div class="header">
    <div class="header-box">
      <div v-if="ISLOGIN" class="title" v-for="item in navBar" :class="{active: item.isActive}" :key="item.name" @click="pageChange(item.name, item.path)">
        <span>{{item.name}}</span>
      </div>
      <div class="operate-area">
        <span v-if="ISLOGIN">欢迎aaaa</span>
        <el-button v-if="!ISLOGIN" type="primary" size="mini" round @click="login">登录</el-button>
        <el-button v-if="ISLOGIN" type="warning" size="mini" round @click="logout">退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions(['do_login', 'do_logout']),
    pageChange (pageName, pagePath) {
      let navBar = this.navBar
      navBar.forEach(nav => {
        nav.isActive = nav.name === pageName
      })
      this.$router.push(pagePath)
    },
    login () {
      this.do_login()
    },
    logout () {
      this.do_logout()
    }
  },
  computed: {
    ...mapGetters(['ISLOGIN'])
  }
}
</script>

<style scoped>
.header {
  height: 60px;
  background: #24292e;
  box-shadow: 0 0 13px #000;
  position: relative;
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
