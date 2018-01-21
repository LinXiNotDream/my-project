<template>
  <div class="box">
    <!-- <Carousel :imgs="imgs"></Carousel> -->
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  data () {
    return {
      imgs: [
        'http://upload-images.jianshu.io/upload_images/3360875-5625658440cb542d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'http://upload-images.jianshu.io/upload_images/3360875-b70e9d81d26e2a27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'http://upload-images.jianshu.io/upload_images/3360875-dc724649454c2ddc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'http://upload-images.jianshu.io/upload_images/3360875-d2148a1bb7ea9d21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
      ]
    }
  },
  methods: {
  },
  created () {
  },
  components: {
    Carousel
  }
}
</script>

<style scoped>

</style>
