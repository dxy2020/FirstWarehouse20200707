<template>
    <!-- <div> -->
    <div v-show="psstatus" id="ps01">
        <div class="anniu01">
            <div id="breadcrumb01">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{path:'/'}">
                        首页
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>规划服务</el-breadcrumb-item>
                </el-breadcrumb>
                <i class="el-icon-arrow-left" style="font-size: 24px; display: inline-block;position: absolute; right: 0;top: 3px;" @click="isopenleftmenu02" />
            </div>
        </div>
        <div
            v-for="(value,index) in anniuData" :key="index" class="anniu02" 
            :style="{'border-right':index%2===0?'1px solid #B3C0D1':'none'}"
        >
            <router-link :to="value.routerlinkthird" tag="div" style="cursor:pointer">
                <img :src="value.imgsrc" style="margin-top: 16px;">
                <p><span>{{ value.contentname }}</span></p>
            </router-link>
        </div>		
        <!-- </div>
		<div><router-view/></div> -->
    </div>
</template>

<script>
export default{
  name:'PlanServices',
  data(){
    return{
      status:false,
      psstatus:true,
      anniuData:[
        {
          routerlinkthird:'/home/planservicesrationalityanalysis',
          imgsrc:require('./img/analysis01.png'),
          contentname:'智能选址'
        },
        {
          routerlinkthird:'/home/planservice/rationalityAnalysis',
          imgurl:'#',
          contentname:'差异分析'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'多规差异冲突检测'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'多规控制线检测'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'缓冲区退让分析'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'资源环境承载力评价'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'开发适宜性评价'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'项目合规性分析'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'规划编制辅助工具'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'空间规划辅助审查'
        },
        {
          routerlinkthird:'rationalityAnalysis',
          imgurl:'#',
          contentname:'规划成果管理'
        }
      ]
    };
  },
  methods:{
    getpsstatus(){
      this.psstatus=!this.psstatus;
    },
    isopenleftmenu02(){
      this.$store.commit('openleftmenu02');
    }
			
  }
};
</script>

<style scoped="scoped">
	#ps01{
		width: 100%;
		height: 100%;
		/* background-color: #42B983; */
	}
	.anniu01{
		margin: 0;
		padding: 0;
		background-color: #D3DCE6;		
	}
	.anniu02{
		width: 48%;
		height: 15.8%;
		/* background-color: #333333; */
		float: left;
		text-align: center;
		border-bottom: 1px solid #B3C0D1;
		font-size: 0.8em;
		/* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
	}
	#breadcrumb01{
		height: 24px;
		padding-top: 5px;
	}
</style>
