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
  height: calc(100vh - 4px);
  width: 100%;
}

.enter {
  position: absolute;
}
</style>
