<template>
  <div>
    <MyHeader></MyHeader>
    <div class="box">
      <div>

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
</style>
