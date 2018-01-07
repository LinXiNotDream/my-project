<template>
  <div class="layout">
    <h1>租房小分队电费计算</h1>
    <div class="elec">
      <span class="title">姓名</span>
      <span class="title">本月电量</span>
      <span class="title">上月电量</span>
      <span class="title">用电量</span>
      <span class="title">应交电费</span>
      <div class="elecDiv" v-for="person in persionArray" :key="person.name">
        <span>{{person.name}}</span>
        <el-input class="input" v-model="person.pay" placeholder="本月应交电费"></el-input>
        <el-input class="input" v-model="person.elec" placeholder="本月用电量"></el-input>
        <el-input class="input" v-model="person.last" placeholder="请输入上月电量"></el-input>
        <el-input class="input" v-model="person.now" placeholder="请输入本月电量"></el-input>
      </div>
      <el-button type="warning" @click="resetData">重置数据</el-button>
      <el-button type="success" @click="checkElec">计算电费</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      persionArray: [{
        name: '总量',
        last: '',
        now: '',
        elec: '',
        pay: ''
      }, {
        name: '李明宪',
        last: '',
        now: '',
        elec: '',
        pay: ''
      }, {
        name: '马金博',
        last: '',
        now: '',
        elec: '',
        pay: ''
      }, {
        name: '林浩',
        last: '',
        now: '',
        elec: '',
        pay: ''
      }, {
        name: '王修胜',
        last: '',
        now: '',
        elec: '',
        pay: ''
      }],
      elecData: []
    }
  },
  methods: {
    checkElec () {
      this.elecData = this.persionArray
      let total = this.persionArray[0]
      let commonElec = total.now - total.last - (this.persionArray[1].now - this.persionArray[1].last) - (this.persionArray[2].now - this.persionArray[2].last) - (this.persionArray[3].now - this.persionArray[3].last) - (this.persionArray[4].now - this.persionArray[4].last)
      this.persionArray.forEach((item, index) => {
        this.persionArray[index].elec = (this.persionArray[index].now - this.persionArray[index].last).toFixed(1)
        if (index !== 0) {
          let payData = this.persionArray[index]
          this.persionArray[index].pay = ((payData.now - payData.last + commonElec / 4) * (total.pay / (total.now - total.last))).toFixed(2)
        }
      })
    },
    resetData () {
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  width: 100%;
  height: 933px;
  position: relative;
  border-radius: 4px;
  background: url(../../assets/bgimg/5562900520170226185214022.jpg) no-repeat;
  background-position: 53% 55%;
}
h1 {
  text-align: center;
}
.elecDiv {
  width: 900px;
  height: 36px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.elecDiv span {
  width: 50px;
  height: 36px;
  line-height: 36px;
}
.elec {
  text-align: center;
}
.input {
  width: 200px;
  float: right;
  padding-left: 5px;
}
.title {
  display: inline-block;
  width: 200px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.title:first-of-type {
  width: 80px;
}
</style>

