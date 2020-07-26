<template>
	<div id="drawerchart01" >
		<button @click="isopen=!isopen">打开/关闭</button>
		<div id="drawerchart02">
			<transition name="el-zoom-in-bottom">
			    <div v-show="isopen" id="transition-box">
					<!-- <div class="mask"> -->
					<div id="header">
						<p><span>占用永久基本农田分析</span>
						<el-button size="mini" type="primary" round style="float: right;margin-right: 10px;" @click="getjson">收起</el-button>
						</p>
					</div><hr/>
					<div id="chartcontain">
						<div class="chartcontainleft"><tablechart></tablechart></div>
						<div class="chartcontainmiddle"></div>
						<div class="chartcontainright"></div>
					</div>
				</div>
			</transition>
						
		</div>
	</div>
</template>

<script>
	import tablechart from "./tablechart.vue";
	
	export default{
		data(){
			return{
				isopen:true,
				datajson:[]
			}
		},
		components:{
			tablechart
		},
		methods:{
			getjson(){
				this.$axios({
					method:'get',
					url:'/data/planservices.json',
					/*数据需要放在public文件夹中，并且URL不用写public(publi是向外曝露的服务器路径)
					vue-cli3把以前的static改为public，故vue-cli3之前版本放在static，vue-cli3放在public中
					*/
					}).then(res=>{
							// console.log(res.data);
							this.datajson=res.data;
						}).catch(res=>{
							alert('访问失败！');
							console.log(res)
					})
			//方式二:
			// 	this.$axios.get('/data/planservices.json').then((response) => {
			// 	        alert(response.data);
			// 	    }).catch((response) => {
			// 	        alert("错误：" + response);
			// 	    })
			}
		},
	}
	
</script>
 
<style scoped="scoped">
	#drawerchart01{
		height: 100%;
		width: 100%;
	}
	#drawerchart02{
		width: 70%;
		height: 100%;
		background-color: #42B983;
		position: absolute;
		display: flex;;
		right: 0;
		bottom: 0;		
	}
	#transition-box{
		width: 100%;
		height: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 10;
		margin-left:0;
		margin-top: 0;
		background-color: #333333;
		line-height: 30px;
	}
	#header{
		width: 100%;
		height: 8%;
	}
	#chartcontain{
		width: 100%;
		height: 92%;
	}
	.chartcontainleft{
		height: 100%;
		background-color: #D94854;
		width: 25%;
		float: left;
	}
	.chartcontainmiddle{
		height: 100%;
		background-color: #55007f;
		width: 40%;
		float: left;
	}
	.chartcontainright{
		height: 100%;
		background-color: #00ff00;
		width: 35%;
		float: left;
	}
</style>
