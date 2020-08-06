<template>
    <!-- <div> -->
    <div v-show="opensecondmenu" id="plan-services">
        <custom-breadcrumb></custom-breadcrumb>
        <div id="second-menu-bar"> 
            <div
                v-for="(value,index) in secondmenu" :key="index" class="second-menu-button" 
                :style="{'border-right':index%2===0?'1px solid #B3C0D1':'none'}"
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
      opensecondmenu:true,
      secondmenu:[
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
    };
  },
  methods:{
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
