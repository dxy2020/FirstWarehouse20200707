<template>
    <div id="planning-service">
        <custom-breadcrumb></custom-breadcrumb>
        <div id="planning-service-main">
            <div id="planning-service-menu">
                <div
                    v-for="(value,index) in menu_data" :key="index"
                    class="planning-service-menu-btn"
                    :style="{'border-right':(index%2===0?'1px solid #dedfe4':'none'),'border-bottom':(index<menu_data.length-borderThink?'1px solid #dedfe4':'none'),}"
                >
                    <img :src="value.img">
                    <span>{{ value.notes }}</span>
                </div>
            </div>
            <div id="planning-service-content">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="合规性分析" name="1">
                        <div id="compliance-analysis">
                            <div class="select-analysis-factor">
                                <el-tag type="info" style="width:100%">
                                    选择分析因子
                                </el-tag>
                                <el-radio-group v-model="radio">
                                    <el-radio v-for="(value,index) in select_analysis_factor" :key="index" :label="index">
                                        {{ value }}
                                    </el-radio>
                                </el-radio-group>
                            </div>
                            <div class="select-analysis-extent">
                                <el-tag type="info" style="width:100%">
                                    选择分析范围
                                </el-tag>
                                <div class="select-analysis-extent-btn">
                                    <el-button>自定义范围</el-button>
                                    <el-button>范围线导入</el-button>
                                    <el-button>范围线提取</el-button>
                                </div>
                            </div>
                            <div class="buffer-area-analysis">
                                <el-tag type="info" style="width:100%">
                                    是否进行缓冲区分析
                                </el-tag>                                
                                <span>缓冲距离：</span>
                                <el-input v-model="buffer_area_input" placeholder="请输入内容"></el-input>
                                <span>米</span>
                                <el-button type="primary">
                                    开始分析
                                </el-button>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<script>
import CustomBreadcrumb from "@/components/custom-breadcrumb/CustomBreadcrumb.vue";
export default {
  name:"PlanningService",
  components:{
    CustomBreadcrumb
  },
  data(){
    return{
      menu_data:[
        {
          img:require('./img/analysis01.png'),
          notes:'智能选址'
        },
        {
          img:require('./img/analysis02.png'),
          notes:'差异分析'
        },
        {
          img:require('./img/analysis03.png'),
          notes:'合规性审查'
        }
      ],
      activeName:'1',
      select_analysis_factor:[
        '土地利用总体规划符合性分析','占用高标准农田分析','占用高标准符合性分析','矿产资源规划符合性分析'
        ,'禁止勘察符合性分析','压覆国家级自然保护区分析','压覆国家级风景名胜分析','压覆国家公园分析'
        ,'土地整治规划符合性分析'
      ],
      radio:2,
      buffer_area_input:'',
    };
  },
  computed:{
    borderThink(){//判断菜单块是偶数还是奇数-影响最后一行的下边框
      if(this.menu_data.length%2===0){
        return 2;
      }else return 1;
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
	#planning-service{
		@include label-size-custom(240px,100%);
    @include labelflex(flex,column,nowrap);
	}
  #planning-service-main{
    flex-grow: 1;
    @include labelflex(flex,column,nowrap);
    font-size:$myFontSize;
    overflow: auto;
    @include myScrollBar(5px,0);
  }
  #planning-service-menu{
    @include labelflex(flex,row,wrap);
    padding: 5px;
    border-bottom:$myBorderColor solid 1px;
    // justify-content: flex-start;    
    
  }
  .planning-service-menu-btn{
    width: 49%;
    @include labelflex(inline-flex,column,nowrap);
    align-items: center;
    justify-content: flex-end;
    padding: 5px 0;
    cursor: pointer;
    &:hover{
        color:red;
      }
    img{
      width: 35%;
    }
  }
  #planning-service-content{
    font-size:$myFontSize;
    flex-grow: 1;
  }
  .el-tag{
    margin: 6px 0;
  }
  .el-collapse{
    padding: 5px;
    border: none;
    /deep/.el-collapse-item__header{
      border: none;
    }
    /deep/.el-collapse-item__wrap{
      border: none;
    }
 }
  .el-collapse-item{    
    #compliance-analysis{
    border: solid 1px $myBorderColor;
    padding: 5px;
    }
    
  }
  .select-analysis-extent{    
    .select-analysis-extent-btn{
      @include labelflex(flex,row,wrap);
       justify-content: space-between;
       .el-button{
        width: 48%;
        padding: 12px 0;
        margin:2px 0;
      }
      // /deep/.el-button--default{//没必要，可舍
      //   width: 48%;
      //   padding: 12px 0;
      //   margin:2px 0;
      // }      
    }
  }
  .buffer-area-analysis{
    .el-input{
      width: 50%;
      margin:0px 5px;
    }
    .el-button{
      margin-top: 5px;
      position: relative;
      left: 25%;
    }
  }
    
  

</style>