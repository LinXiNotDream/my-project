<template>
  <div class="box">
    <div class="carousel">
      <transition-group tag='ul' class="clearfix slide" name="image">
        <li v-for="(image, index) in imgs" :key="index" v-show="index===activedImg">
          <a><img :src="image"></a>
        </li>
      </transition-group>
      <div class="bullet">
        <span v-for="(item, index) in imgs.length" :class="{active: index===activedImg}" :key="index" @click="changeImg(index)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activedImg: 0,
      imgs: [
        'http://upload-images.jianshu.io/upload_images/3360875-5625658440cb542d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'http://upload-images.jianshu.io/upload_images/3360875-b70e9d81d26e2a27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'http://upload-images.jianshu.io/upload_images/3360875-dc724649454c2ddc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'http://upload-images.jianshu.io/upload_images/3360875-d2148a1bb7ea9d21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
      ]
    }
  },
  methods: {
    changeImg (index) {
      this.activedImg = index
    },
    shufflingImg () {
      this.activedImg++
      this.activedImg === 4 && (this.activedImg = 0)
    },
    setTime () {
      setInterval(this.shufflingImg, 4000)
    }
  },
  created () {
    this.setTime()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.clearfix {
  content: "";
  clear: both;
  display: block;
}

.carousel {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 500px;
  height: 300px;
}

li {
  position: absolute;
}

img {
  width: 500px;
  height: 300px;
}

.bullet {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
}

span {
  width: 20px;
  height: 5px;
  border: 1px solid;
  background: white;
  display: inline-block;
  margin-right: 10px;
}

.active {
  background: red;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}
</style>
