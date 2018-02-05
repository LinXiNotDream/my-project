<template>
  <div class="carousel">
    <transition-group tag='div' class="clearfix slide" name="image">
      <div class="li" v-for="(image, index) in imgs" :key="index" v-show="index===activedImg" @mouseenter="stop" @mouseleave="setTime">
        <a><img :src="image"></a>
      </div>
    </transition-group>
    <div class="bullet">
      <span v-for="(item, index) in imgs.length" :class="{active: index===activedImg}" :key="index" @click="changeImg(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgs'],
  data () {
    return {
      activedImg: 0,
      timer: ''
    }
  },
  methods: {
    changeImg (index) {
      this.activedImg = index
    },
    shufflingImg () {
      this.activedImg++
      this.activedImg === this.imgs.length && (this.activedImg = 0)
    },
    setTime () {
      this.timer = setInterval(() => this.shufflingImg(), 1000)
    },
    stop () {
      clearInterval(this.timer)
      this.timer = ''
    }
  },
  created () {
    this.setTime()
  }
}
</script>

<style scoped>
.clearfix {
  content: "";
  clear: both;
  display: block;
}

.carousel {
  width: 500px;
  height: 300px;
  overflow: hidden;
  position: absolute;
}

.slide {
  width: 500px;
  height: 300px;
}

.li {
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
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 1px solid;
  background: white;
  display: inline-block;
  margin-right: 10px;
}

.active {
  background: gray;
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
