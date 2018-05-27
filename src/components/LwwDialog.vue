<template>
  <transition name="dialog-fade">
    <div v-if="visible" class="lww-dialog" @click="closeDialog">
      <div class="dialog"></div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },
  props: {
    visible: { type: Boolean, default: false }
  },
  data () {
    return {
    }
  },
  watch: {
    'visible' (val) {
      if (val) this.creatMaskLayer()
    }
  },
  methods: {
    creatMaskLayer () {
      const div = document.createElement('div')
      div.className = 'lww-mask-layer'
      document.body.appendChild(div)
    },
    closeDialog () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped>
.dialog-fade-enter {
}
.dialog-fade-enter-active {
  transition: all 2s ease-out;
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
  width: 400px;
  height: 400px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<style>
.lww-mask-layer {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000;
  opacity: 0.5;
  z-index: 99;
}
</style>

