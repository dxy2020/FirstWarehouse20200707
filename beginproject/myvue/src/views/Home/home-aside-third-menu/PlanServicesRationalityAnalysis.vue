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
		@include label-size-custom(700px);
    display: flex;
    flex-flow: column nowrap;
	}
	#rationality-analysis-content{
		@extend .label-size-nopadding;
		padding: {
			top:5px;
			left: 12px;
    }
	}
	#select-analysis-factors{
		.el-tag{
			height: 60px;
			line-height: 50px;			
		}
		.el-radio-group{
			margin: {
				top: 12px;
				bottom: 12px;
			}
			font-size: 50px;
		}
	}
	#select-analysis-scope{
		.el-tag {
			height: 60px;
			line-height: 50px;
		}
		.el-row{
			.el-button{
				width: 48%;
        margin: 5px 4px;
			}
		}		
	}
	#buffer-analysis{
		.el-tag {
			height: 60px;
			line-height: 50px;
		}
		.buffer-analysis-input{
			.el-input{
        width: 50%;            
      }      
    }
    .el-button{
      display: block;
      margin: 0 auto;
    }
	}
</style>
