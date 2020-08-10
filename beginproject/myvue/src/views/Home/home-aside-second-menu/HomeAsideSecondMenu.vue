<template>
    <!-- <div> -->
    <div id="plan-services">
        <custom-breadcrumb></custom-breadcrumb>
        <div id="second-menu-bar" :style="{'align-content':(currentMenuNum<11?'flex-start':''),}"> 
            <div
                v-for="(value,index) in secondmenu[this.$store.state.secondMenuSelect].content" :key="index" class="second-menu-button" 
                :style="{'border-right':(index%2===0?'1px solid #B3C0D1':'none'),'height':(currentMenuNum<11?'110px':'')}"
            >
                <router-link :to="value.routerlinkthird" tag="div" style="cursor:pointer">
                    <img :src="value.imgsrc">
                    <p><span>{{ value.contentname }}</span></p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CustomBreadcrumb from "@/components/custom-breadcrumb/CustomBreadcrumb.vue";
export default{
  name:'PlanServices',
  components:{
    CustomBreadcrumb
  },
  data(){
    return{
      num:this.$store.state.secondMenuSelect,
      secondmenu:[
        {
          name:'通用服务',//GeneralService
          content:[
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'空间分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'统计分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'专题制图'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'大数据分析'
            },
          ]
        },
        {
          name:'规划服务',
          content:[
            {
              routerlinkthird:'/home/planservicesrationalityanalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'智能选址'
            },
            {
              routerlinkthird:'/home/planservice/rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'差异分析'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'多规差异冲突检测'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'多规控制线检测'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'缓冲区退让分析'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'资源环境承载力评价'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'开发适宜性评价'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'项目合规性分析'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'规划编制辅助工具'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'空间规划辅助审查'
            },
            {
              routerlinkthird:'rationalityAnalysis',
              imgsrc:require('./img/analysis01.png'),
              contentname:'规划成果管理'
            }
          ]
        },
        {
          name:'审批服务',
          content:[
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'符合规划审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'地类占用分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'重复批地审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'重复供地审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'矿产资源压覆审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'探矿权审批审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'采矿权审批审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'土地征收审批审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'建设用地审批审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'建设用地预审审查'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'规划成果管理'
            },
          ]
        },
       
        {
          name:'监管服务',
          content:[
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'自然资源现状评价'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'中心城区用地潜力评价'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'区域节约集约利用评价'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'区域用地状况评价'
            },
          ]
        },
        {
          name:'决策服务',
          content:[
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'耕地动态变化情况分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'占用基本农田项目分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'基础设施用地供应情况分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'产业用地供应情况分析'
            },
            {
              routerlinkthird:'#',
              imgsrc:require('./img/analysis01.png'),
              contentname:'房地产市场供应情况分析'
            },
          ]
        }
      ]
    };
  },
  computed:{
    currentMenuNum:function(){
      return  this.secondmenu[this.$store.state.secondMenuSelect].content.length;
    }
  },
  watch:{
    $route:'watchSecondMenu',
  },
  methods:{
    watchSecondMenu(){
      if(this.$route.path==='/home/planservices'){
        console.log('a');
      }
      
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
  @import "@/assets/styles/_common-styles.scss";
	#plan-services{
    @include label-size-custom(240px,100%);
    display: flex;
    flex-flow: column nowrap;
  }
  #second-menu-bar{
    @extend .label-size-default;
    display: flex;
    flex-flow: row wrap;
    // align-content: flex-start;
    // padding-left: 10px;
  }
	.second-menu-button{
    width: 49%;
		text-align: center;
		border-bottom: 1px solid #B3C0D1;
		font-size: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    img{
      width: 50%;
      margin-top: 12px;
    }
    p{
      margin: 0;
      padding: 0;
    }
	}

</style>
