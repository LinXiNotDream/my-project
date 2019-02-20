<template>
  <div @click.stop>
    <!-- <span @click="open">开启</span>
    <lww-dialog :visible.sync="showDialog" :width="300" :showTitle="true" :title="'Test'"></lww-dialog>
    <lww-input></lww-input> -->
    <input ref="input" v-model="schoolName" @input="getSuggestion(schoolName)" />
    <div class="school-suggestion" v-show="showSuggestion">
      <ul>
        <li v-for="(item, index) in schoolSuggestions" :key="index" @click="setName(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      showDialog: false,
      schoolName: '',
      showSuggestion: false,
      schoolSuggestions: [],
      isSelect: false
    }
  },
  mounted () {
    let old = document.onclick || (() => {})
    document.addEventListener('click', () => {
      old()
      this.showSuggestion = false
    })
  },
  methods: {
    open () {
      this.showDialog = true
    },
    getSuggestion (val) {
      let str = this.schoolName
      if (val.length) {
        this.schoolSuggestions = [{name: '111+'}, {name: '22222+'}, {name: str + 'hehe'}]
        if (this.isSelect) {
          this.isSelect = false
        } else {
          this.showSuggestion = true
        }
      }
    },
    loseSuggestion () {
      setTimeout(console.log('aaa'), 2000)
      this.showSuggestion = false
      console.log('bbb')
    },
    setName (name) {
      this.isSelect = true
      this.schoolName = name
      this.showSuggestion = false
      console.log('setName')
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
