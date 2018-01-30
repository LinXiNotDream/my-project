<template>
  <div>
    <MyHeader></MyHeader>
    <div class="box">
      <div class="login-box">
        <div class="username">
          <span>用户名</span>
          <el-input></el-input>
        </div>
        <div class="password">
          <span>密码</span>
          <el-input></el-input>
        </div>
        <div class="login-btn">
          <button @click="enter">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
export default {
  data () {
    return {
    }
  },
  components: {
    MyHeader
  },
  methods: {
    enter () {
      this.$router.push('/home/index')
    }
  }
}
</script>

<style scoped>
.box {
  background: url(../../../assets/bgimg/0416.jpg) no-repeat;
  background-position: 100% 49%;
  background-size: 1400px;
}
.login-box {
  width: 320px;
  height: 155px;
  position: absolute;
  top: 30%;
  right: 25%;
  padding: 50px 20px;
  box-shadow: 1px 3px 45px 3px #489;
  border-radius: 10px;
}
.login-box div {
  margin-bottom: 10px;
}
.login-box div span {
  display: inline-block;
  width: 55px;
  padding-right: 8px;
  text-align-last: justify;
}
.el-input {
  width: 250px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 150px;
  height: 35px;
  line-height: 35px;
  border: 0;
  background: #409eff;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
}
.login-btn button:hover {
  background: #66b1ff;
}
</style>
<style>
.login-box .el-input__inner {
  background: transparent;
}
</style>

