<template>
		<!-- <button @click="isopen=!isopen">打开/关闭</button> -->
			<transition name="el-zoom-in-bottom">
			    <div v-show="this.$store.state.opendrawerchart" id="transition-box">
					<!-- <div class="mask"> -->
					<div id="header">
						<p><span>占用永久基本农田分析</span>
						<el-button size="mini" type="primary" round style="float: right;margin-right: 10px;" @click="getjson">收起</el-button>
						</p>
					</div><hr/>
					<div id="chartcontain">
						<tablechart></tablechart>
					</div>
				</div>
			</transition>
</template>

<script>
	import tablechart from "./tablechart.vue";
	
	export default{
		props:{
			isOpen:{
				type:Boolean,
				default:false
			}
		},
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
	#transition-box::before,
	#transition-box::after{
		content: '';
		display: table;
		clear: both;		
	}
	/* #transition-box{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		background-color: #333333;
		line-height: 30px;
	} */
	#transition-box{
		position: absolute;
		left:352px;
		height:60%;
		width: auto;
		margin: 0;
		right: 0;
		bottom: 0;
		background-color: #0000FF;
	}
	#header{
		width: 100%;
		height: 12%;
	}
	#chartcontain{
		width: 100%;
		height: 88%;
		position: relative;
	}
</style>
