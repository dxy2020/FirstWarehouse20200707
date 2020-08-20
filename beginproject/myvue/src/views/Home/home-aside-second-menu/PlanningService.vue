<template>
    <div id="planning-service">
        <custom-breadcrumb></custom-breadcrumb>
        <div id="planning-service-main">
            <custom-menu-button :menu-content="menu_data"></custom-menu-button>
            <div id="planning-service-content">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="合规性分析" name="1">
                        <div id="compliance-analysis">
                            <tag-radio
                                v-model="radio" :radio-content="select_analysis_factor"
                                @radioWatch="DrawerTitle"
                            ></tag-radio>
                            <tag-button :btn-content="select_analysis_extent"></tag-button>
                            <tag-input tag-title="是否进行缓冲区分析" @btnClick="isOpenDrawer"></tag-input>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<script>
import CustomBreadcrumb from "@/components/custom-breadcrumb/CustomBreadcrumb.vue";
import CustomMenuButton from "@/components/common-components/CustomMenuButton.vue";
import TagRadio from "@/components/common-components/TagRadio.vue";
import TagButton from "@/components/common-components/TagButton.vue";
import TagInput from "@/components/common-components/TagInput.vue";
export default {
  name:"PlanningService",
  components:{
    CustomBreadcrumb,
    CustomMenuButton,
    TagRadio,
    TagButton,
    TagInput
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
      select_analysis_extent:['自定义范围','范围线导入','范围线提取'],
      radio:2,
      buffer_area_input:'',
    };
  },
  computed:{
    // borderThink(){//判断菜单块是偶数还是奇数-影响最后一行的下边框,拆分组件后可直接写在子组件中
    //   if(this.menu_data.length%2===0){
    //     return 2;
    //   }else return 1;
    // }
  },
  methods:{
    DrawerTitle(val){
      this.$store.commit('selectanalysisfactor',this.select_analysis_factor[val]);
      console.log(val);
    },
    isOpenDrawer(){
		  this.$store.commit('openDrawerChart');
		  this.$store.commit('selectanalysisfactor',this.select_analysis_factor[this.radio]);
	  }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
	#planning-service{
	  @extend .label-size-default;
    @include labelflex(flex,column,nowrap);
	}
  #planning-service-main{
    flex-grow: 1;
    @include labelflex(flex,column,nowrap);
    font-size:$myFontSize;
    overflow: auto;
    @include myScrollBar(5px,0);
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
</style>