<template>
  <div>
    <iframe src="./static/canvas/canvas.html" class="my-canvas" frameborder="0"></iframe>
    <button class="enter" @click="enter">开启旅程</button>
  </div>
</template>

<script>
 export default {
   data () {
     return {
     }
   },
   methods: {
     enter () {
       this.$router.push('/home')
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
  color: aqua;
}
</style>
