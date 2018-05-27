<template>
  <div class="box">
    <span @click="openDialog">开启</span>
    <lww-dialog :visible.sync="dialogVisible"></lww-dialog>
  </div>
</template>

<script>
import LwwDialog from '@/components/LwwDialog'
export default {
  components: {
    LwwDialog
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
</style>
