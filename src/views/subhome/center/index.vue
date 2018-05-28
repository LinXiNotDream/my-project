<template>
  <div>
    <span @click="open">开启</span>
    <lww-dialog :visible.sync="showDialog" :width="300" :showTitle="true" :title="'Test'"></lww-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    open () {
      this.showDialog = true
    }
  }
}
</script>

<style scoped>
</style>
