<template>
  <div class="header">
    <div class="header-box">
      <div v-for="item in navBar" v-if="ISLOGIN || !ISLOGIN && item.name === '首页'" class="title" :class="{active: item.path === active}" :key="item.name" @click="pageChange(item.path)">
        <span>{{item.name}}</span>
      </div>
      <div class="operate-area">
        <span v-if="ISLOGIN">欢迎aaaa</span>
        <button v-if="!ISLOGIN" class="btn primary-btn" @click="login">登录</button>
        <button v-if="ISLOGIN" class="btn warning-btn" @click="logout">退出</button>
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
          path: '/home/index',
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
      ],
      active: '/home/index'
    }
  },
  methods: {
    ...mapActions(['do_logout']),
    pageChange (pagePath) {
      this.active = pagePath
    },
    login () {
      this.$router.push('/login')
    },
    logout () {
      this.do_logout().then(() => this.$router.push('/'))
    }
  },
  computed: {
    ...mapGetters(['ISLOGIN'])
  },
  watch: {
    'active' (val) {
      this.$router.push(val)
    },
    '$route' (to, from) {
      this.active = to.path
    }
  },
  created () {
    this.active = this.$route.path
  }
}
</script>

<style scoped>
.header {
  height: 60px;
  background: #24292e;
  box-shadow: 0 0 13px #000;
  position: relative;
  z-index: 1;
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
