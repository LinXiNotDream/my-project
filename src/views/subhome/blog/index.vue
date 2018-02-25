<template>
  <div class="box">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped>
.left {
  float: left;
  height: 200px;
  width: 100px;
  background-color: red;
}
.right {
  width: 200px;
  height: 200px;
  background-color: blue;
  float: right;
}
.main {
  margin-left: 120px;
  margin-right: 220px;
  height: 200px;
  background-color: green;
}
</style>
