<template>
  <div>
    <iframe src="../../../static/canvas/canvas.html" class="my-canvas" frameborder="0"></iframe>
    <el-button class="enter">开启旅程</el-button>
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
.my-canvas {
  width: 100%;
  height: calc(100vh);
  display: block;
}
.enter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  background: transparent;
  border: 0;
}
</style>
