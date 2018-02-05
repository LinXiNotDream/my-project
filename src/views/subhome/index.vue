<template>
  <div>
    <MyHeader></MyHeader>
    <router-view></router-view>
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

</style>
