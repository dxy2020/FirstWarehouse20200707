<template>
    <div id="ra01">
        <el-container>
            <span class="choose01">
                <el-tag type="info">选择分析因子</el-tag>
                <el-radio-group v-model="radio">
                    <el-radio v-for="(values,index) in radata" :key="index" :label="index">{{ values }}</el-radio>
                </el-radio-group>
            </span>
            <span class="choose02">
                <el-tag type="info" class="tag">选择分析范围</el-tag>
                <el-row>
                    <el-button class="btn-first">自定义范围</el-button>
                    <el-button class="btn-second">范围线导入</el-button>
                    <el-button class="btn-third">范围线提取</el-button>
                </el-row>
            </span>
            <span class="choose03">
                <el-tag type="info" class="cache">是否进行缓冲区分析</el-tag>
                <span class="inputNumber">
                    <span>缓冲距离：</span>
                    <el-input v-model="num" type="text" />
                    <span>米</span>
                </span>
                <el-button type="primary" class="priBtn" @click="isopendrawerchart">开始分析</el-button>
            </span>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "PlanServicesRationalityAnalysis",
  // props: {},
  data() {
    return {
      radio: 1,
      num: "",
	  radata:['土地利用总体规划符合性分析','占用永久基本农田分析','占用高标准农田分析','矿产资源规划符合性分析',
	  '禁止勘查符合性分析','压覆国家级自然保护区分析','压覆国家级风景名胜区分析','压覆国家公园分析','土地整治规划符合性分析']
    };
  },
  watch:{
	  radio:function(val){
		  this.$store.commit('selectanalysisfactor',this.radata[val]);
	  }
  },
  methods:{
	  isopendrawerchart(){
		  this.$store.commit('opendrawerchart');
		  this.$store.commit('selectanalysisfactor',this.radata[this.radio]);
	  }
  }
  
};
</script>

<style scoped="scoped">
	#ra01{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	.el-container {
		/* background-color: #1598ED; */
		width: 100%;
		height: 100%;
	}
	.choose01,.choose02,.choose03{
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
