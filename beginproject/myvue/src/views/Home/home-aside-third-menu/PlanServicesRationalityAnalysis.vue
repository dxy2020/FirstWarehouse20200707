<template>
    <div id="plan-services-rationality-analysis">
        <custom-breadcrumb></custom-breadcrumb>
        <div id="rationality-analysis-content">
            <div id="select-analysis-factors">
                <el-tag :type="tag_attributes.type">
                    选择分析因子
                </el-tag>
                <el-radio-group v-model="radio">
                    <el-radio v-for="(values,index) in radata" :key="index" :label="index">
                        {{ values }}
                    </el-radio>
                </el-radio-group>
            </div>
            <div id="select-analysis-scope">
                <el-tag :type="tag_attributes.type">
                    选择分析范围
                </el-tag>
                <el-row>
                    <el-button v-for="(values,index) in range_analysis_function" :key="index" class="btn-first">
                        {{ values }}
                    </el-button>
                </el-row>
            </div>
            <div id="buffer-analysis">
                <el-tag :type="tag_attributes.type">
                    是否进行缓冲区分析
                </el-tag><br>
                <span class="buffer-analysis-input">
                    <span>缓冲距离：</span>
                    <el-input v-model="num" type="text" />
                    <span>米</span>
                </span>
                <el-button type="primary" @click="isOpenDrawer">
                    开始分析
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import CustomBreadcrumb from "@/components/custom-breadcrumb/CustomBreadcrumb.vue";
export default {
  name: "PlanServicesRationalityAnalysis",
  components:{
    CustomBreadcrumb
  },
  data() {
    return {
      tag_attributes:{
        'type':'success',
        'hit':true
      },
      radio: 1,
      num: "",
	  	radata:['土地利用总体规划符合性分析','占用永久基本农田分析','占用高标准农田分析','矿产资源规划符合性分析',
        '禁止勘查符合性分析','压覆国家级自然保护区分析','压覆国家级风景名胜区分析','压覆国家公园分析','土地整治规划符合性分析'],
      range_analysis_function:['自定义范围','范围线导入','范围线提取']      
    };
  },
  watch:{
	  radio:function(val){
		  this.$store.commit('selectanalysisfactor',this.radata[val]);
	  }
  },
  methods:{
	  isOpenDrawer(){
		  this.$store.commit('opendrawerchart');
		  this.$store.commit('selectanalysisfactor',this.radata[this.radio]);
	  }
  }
  
};
</script>

<style scoped="scoped" lang="scss">
  @import "@/assets/styles/_common-styles.scss";
  // @import "@/assets/styles/_flex-layout.scss";
	#plan-services-rationality-analysis{
		@include label-size-custom(240px,100%);
    display: flex;
    flex-flow: column nowrap;
	}
	#rationality-analysis-content{
		@extend .label-size-nopadding;
		padding: {
			top:5px;
			left: 6px;
    }
	}
	#select-analysis-factors{
		.el-tag{
      font-size: 6px;
		}
		.el-radio-group{
			margin: {
				top: 8px;
				bottom: 8px;
			}
			font-size: $myFontSize;
		}
	}
	#select-analysis-scope{
		.el-tag {
      font-size: 6px;
      // text-align: center;
		}
		.el-row{
			.el-button{
				width: 40%;
        margin: 2px;
        padding: 10px;

			}
		}		
	}
	#buffer-analysis{
		.el-tag {
			font-size: 6px;
		}
		.buffer-analysis-input{
      font-size: 12px;     
			.el-input{
        width: 50%;
        height: 14px;
        /deep/.el-input__inner{
        height: 24px;
       }
      }
    }
    .el-button{
      display: block;
      margin: 8px auto;
    }
	}
</style>
