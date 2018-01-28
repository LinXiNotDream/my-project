<template>
  <div>
    <MyHeader></MyHeader>
    <div class="box">
      <div class="login-box">
        <div class="username">
          <span>用户名</span>
          <el-input prefix-icon="el-icon-search"></el-input>
        </div>
        <div class="password">
          <span>密码</span>
          <el-input prefix-icon="el-icon-search"></el-input>
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
  }
}
</script>

<style scoped>
.box {
  background: url(../../../assets/bgimg/0416.jpg) no-repeat;
  background-position: 100% 34%;
  background-size: 1400px;
}
.login-box {
  width: 320px;
  height: 300px;
  position: absolute;
  top: 35%;
  right: 24%;
  padding: 20px;
  border: 1px solid;
}
.login-box div {
  margin-bottom: 10px;
}
.login-box div span {
  display: inline-block;
  width: 55px;
  text-align-last: justify;
}
.el-input {
  width: 250px;
}
</style>
