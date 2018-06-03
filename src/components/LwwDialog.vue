<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="lww-dialog">
      <div class="dialog" :style="`width: ${width}px;`">
        <header>
          <span v-if="showTitle" class="title">{{ title }}</span>
          <div class="iconfont icon-jiantou close" @click="handleClose"></div>
        </header>
        <div class="content"></div>
      </div>
      <div class="lww-mask-layer"></div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },
  props: {
    visible: { type: Boolean, default: false },
    title: { type: String, default: '' },
    showTitle: { type: Boolean, default: false },
    beforeClose: Function,
    width: { type: Number, default: 592 }
  },
  data () {
    return {
    }
  },
  watch: {
    'visible' (val) {
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:visible', false)
    },
    handleClose () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide (cancel) {
      console.log(cancel, 'cancel')
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('visible-change', false)
      }
    }
  }
}
</script>

<style scoped>
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.5s;
}
.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}
.lww-dialog {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}
.lww-dialog .dialog {
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.lww-dialog .lww-mask-layer {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
.lww-dialog .close {
  position: absolute;
  top: 0;
  right: 0;
  height: 42px;
  width: 42px;
  cursor: pointer;
  color: gray;
}
.lww-dialog .close:hover {
  color: orange;
}
.lww-dialog .dialog header .title {
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
  height: 40px;
}
</style>
