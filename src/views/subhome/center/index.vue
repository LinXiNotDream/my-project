<template>
  <div>
    <span @click="open">开启</span>
    <lww-dialog :visible.sync="showDialog" :width="300" :showTitle="true" :title="'Test'"></lww-dialog>
    <lww-input></lww-input>
    <lww-button>test</lww-button>
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
.test {
  width: 400px;
  height: 400px;
  overflow: auto;
}
.content {
  width: 80%;
  height: 800px;
  background: gray;
}
</style>
