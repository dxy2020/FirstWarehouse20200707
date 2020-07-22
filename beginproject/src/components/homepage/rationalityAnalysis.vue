<template>
  <el-container v-show="mouseClick">
    <span class="choose">
      <el-tag type="info">选择分析因子</el-tag>
      <el-radio-group v-model="radio">
        <el-radio :label="1">土地利用总体规划符合性分析</el-radio>
        <el-radio :label="2">占用永久基本农田分析</el-radio>
        <el-radio :label="3">占用高标准农田分析</el-radio>
        <el-radio :label="4">矿产资源规划符合性分析</el-radio>
        <el-radio :label="5">禁止勘查符合性分析</el-radio>
        <el-radio :label="6">压覆国家级自然保护区分析</el-radio>
        <el-radio :label="7">压覆国家级风景名胜区分析</el-radio>
        <el-radio :label="8">压覆国家公园分析</el-radio>
        <el-radio :label="9">土地整治规划符合性分析</el-radio>
      </el-radio-group>
    </span>
    <span class="choose">
      <el-tag type="info" class="tag">选择分析范围</el-tag>
      <el-row>
        <el-button class="btn-first">自定义范围</el-button>
        <el-button class="btn-second">范围线导入</el-button>
        <el-button class="btn-third">范围线提取</el-button>
      </el-row>
    </span>
    <span class="choose">
      <el-tag type="info" class="cache">是否进行缓冲区分析</el-tag>
      <span class="inputNumber">
        <span>缓冲距离：</span>
        <el-input type="text" v-model="num"></el-input>
        <span>米</span></span
      >
      <el-button type="primary" class="priBtn">开始分析</el-button>
    </span>
  </el-container>
</template>

<script>
export default {
  name: "rationalityAnalysis",
  props: ["mouseClick"],
  data() {
    return {
      radio: 1,
      num: ""
    };
  }
};
</script>

<style scoped>
.el-container {
  width: 92%;
  height: 700px;
  background-color: #fff;
  border: 1px solid #c1c1c1;
  margin-top: 20px;
  margin-left: 10px;
}
.choose {
  position: relative;
}
.el-tag {
  width: 220px;
  height: 30px;
  margin: 10px;
  text-align: left;
  color: #676767;
  padding-right: 140px;
}
.el-radio-group {
  position: absolute;
  text-align: left;
  height: 30px;
  line-height: 30px;
  color: #616065;
  top: 60px;
  left: 20px;
}
.tag {
  position: absolute;
  top: 330px;
  left: -240px;
  margin: 10px;
}
.el-row {
  position: absolute;
  top: 394px;
  left: -240px;
}
.el-button {
  position: absolute;
  padding: 14px;
}
.btn-first {
  left: 14px;
}
.btn-second {
  left: 114px;
}
.btn-third {
  top: 56px;
  left: 4px;
}
.cache {
  top: 504px;
  position: absolute;
  left: -240px;
}
.inputNumber {
  position: absolute;
  top: 570px;
  left: -90px;
}
.inputNumber > span:nth-child(1) {
  position: absolute;
  left: -130px;
  top: 10px;
}
.inputNumber > span:last-child {
  position: absolute;
  top: 10px;
  left: 60px;
}
.el-input {
  position: relative;
  left: -50px;
}
.priBtn {
  top: 640px;
  left: -160px;
}
</style>
<!--<style>-->
<!--inputNumber > .el-input input.el-input__inner {-->
<!--  border-radius: 5px;-->
<!--}-->
<!--</style>-->
