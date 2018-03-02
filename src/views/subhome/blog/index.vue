<template>
  <div class="box">
    <div class="container">
      <div class="main"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
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
.container {
  display: flex;
}
.left {
  order: -1;
  flex: 0 1 200px;
  margin-right: 20px;
  height: 200px;
  background-color: red;
}
.right {
  order: 2;
  flex: 0 1 100px;
  height: 200px;
  margin-left: 10px;
  background-color: blue;
}
.main {
  flex-grow: 1;
  height: 200px;
  background-color: green;
}
</style>
