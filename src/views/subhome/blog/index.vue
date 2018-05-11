<template>
  <div class="box">
    <image-croppa v-model="myCroppa" :prevent-white-space="true" :width="croppaWidth" :height="croppaHeight"></image-croppa>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myCroppa: {},
      croppaWidth: 400,
      croppaHeight: 250
    }
  },
  methods: {
    uploadCroppedImage () {
      this.myCroppa.generateBlob((blob) => {
         // write code to upload the cropped image file (a file is a blob)
      }, 'image/jpeg', 0.8) // 80% compressed jpeg file
    }
  }
}
</script>

<style scoped>

</style>
