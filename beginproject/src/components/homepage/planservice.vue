<template>
	<div id="ps01" v-show="psstatus">
		<div class="anniu01">
			<p>
				<span>规划服务</span>
				<img src="#" style="display: inline;float: right;" @click="getpsstatus"/>
			</p>
		</div>
		<div class="anniu02" v-for="(value,index) in anniuData" :key="index" 
		:style="{'border-right':index%2===0?'1px solid #B3C0D1':'none'}">
			<img :src="value.imgsrc" />
			<p><span>{{value.contentname}}</span></p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'planservice',
		data(){
			return{
				status:false,
				psstatus:true,
				anniuData:[
					{
						imgsrc:'#',
						contentname:'智能选址'
					},
					{
						imgurl:'#',
						contentname:'差异分析'
					},
					{
						imgurl:'#',
						contentname:'多规差异冲突检测'
					},
					{
						imgurl:'#',
						contentname:'多规控制线检测'
					},
					{
						imgurl:'#',
						contentname:'缓冲区退让分析'
					},
					{
						imgurl:'#',
						contentname:'资源环境承载力评价'
					},
					{
						imgurl:'#',
						contentname:'开发适宜性评价'
					},
					{
						imgurl:'#',
						contentname:'项目合规性分析'
					},
					{
						imgurl:'#',
						contentname:'规划编制辅助工具'
					},
					{
						imgurl:'#',
						contentname:'空间规划辅助审查'
					},
					{
						imgurl:'#',
						contentname:'规划成果管理'
					}
				]
			}
		},
		methods:{
			getpsstatus(){
				this.psstatus=!this.psstatus;
			}
		}
	}
</script>

<style scoped="scoped">
	#ps01{
		margin: 0;
		width: 100%;
		height: 100%;
		/* background-color: #42B983; */
	}
	.anniu01{
		margin: 0;
		padding: 0;
		background-color: #D3DCE6;		
	}
	.anniu01 p{
		margin: 0;
		padding: 0;
	}
	.anniu02{
		width: 48%;
		height: 16%;
		/* background-color: #333333; */
		float: left;
		text-align: center;
		border-bottom: 1px solid #B3C0D1;
		font-size: 0.8em;
	}
</style>
