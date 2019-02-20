<template>
  <div class="box">
    <image-croppa
      v-model="myCroppa"
      :prevent-white-space="true"
      :width="croppaWidth"
      :height="croppaHeight"
      @init="onInit"
    ></image-croppa>
    <button @click="upload">上传</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myCroppa: {},
      croppaWidth: 400,
      croppaHeight: 400
    }
  },
  methods: {
    uploadCroppedImage () {
      this.myCroppa.generateBlob((blob) => {
         // write code to upload the cropped image file (a file is a blob)
      }, 'image/jpeg', 0.8) // 80% compressed jpeg file
    },
    onInit () {
      this.myCroppa.addClipPlugin(function (ctx, x, y, w, h) {
        ctx.beginPath()
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true)
        ctx.closePath()
      })
    },
    upload () {
      if (!this.myCroppa.hasImage()) {
        alert('no image to upload')
        return
      }
      this.myCroppa.generateBlob((blob) => {
        var fd = new FormData()
        fd.append('file', blob)
        fd.append('other', 'blahblahblah')
        console.log(blob)
      })
    }
  }
}
</script>

<style scoped>
</style>
