<template>
  <input type="text" class="lww-input" :style="`width: ${width}px; height: ${height}px;`" placeholder="呵呵">
</template>

<script>
export default {
  components: {},
  props: {
    width: { type: Number, default: null },
    height: { type: Number, default: 32 }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
input.lww-input {
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  padding: 0 12px;
  border: 1px solid #e4e4eb;
  border-radius: 2px;
  outline: none;
  caret-color: #ff822e;
}
input.lww-input:hover,
input.lww-input:focus {
  border-color: #ff822e;
}
input::-moz-placeholder {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: red;
}
input::-webkit-input-placeholder {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: red;
}
</style>