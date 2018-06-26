<template>
  <button class="lww-button" :disabled="disabled" :class="[
  'lww-button-' + type,
  'lww-button-' + size,
  {
    'is-plain': plain,
    'is-disabled': disabled
  }
  ]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    type: { type: String, default: 'primary' },
    size: { type: String, default: 'middle' },
    plain: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  data () {
    return {}
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.lww-button button {
  border: 0;
  background: #fff;
  font-size: 14px;
}
</style>
