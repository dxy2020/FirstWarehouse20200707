<template>
	<div id="home01">
		<div id="header">
			<headertop></headertop>
		</div>
		<div id="contain">
			<div id="left"><!-- <div id="left" @click="isShow=!isShow"> -->
				<div id="left01"><leftmenu v-on:isopen="onshow"></leftmenu></div>				
				<div id="left02" v-show="isShow">
					<router-view></router-view>							
				</div><!-- <planservice></planservice> -->
			</div>
			<div id="main" :style="{width:mainwh.width+'px'}">
				<olmap :mapWidth="mainwh.mapwidth+'px'"/>
				<!-- <el-drawer title="占用永久基本农田分析" :visible.sync="drawer" direction="btt" 
				:before-close="handleClose" :append-to-body="isin" width="180px">
					<span>我来啦！</span>
				</el-drawer> -->
				<!-- <div id="drawerchart" v-show="drawer"> --><drawerchart :isOpen="isShow"></drawerchart><!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import planservice from "@/components/homepage/planservice.vue";
import leftmenu from "@/components/homepage/leftmenu.vue";
import olmap from "@/components/homepage/olmap.vue";
import drawerchart from "@/components/homepage/drawerchart.vue";
import headertop from "@/components/homepage/headertop.vue";
export default {
	name:'home',
	components:{
		// planservice,
		headertop,
		leftmenu,
		olmap,
		drawerchart
	},
	data(){
		return{
			isShow:false,
			mainwh:{
				width:'',
				height:'',
				mapWidth:''
			},
			drawer:false,
			isin:true,
			
		}
	},
	methods:{
		onshow(){
			this.isShow=!this.isShow;
		},
		handleClose(done) {
		        this.$confirm('确认关闭？')
		          .then(() => {
		            done();
		          })
		          .catch(() => {});
		      }
	},
	mounted(){
		this.screenWidth=document.body.clientWidth;
		console.log(this.screenWidth);
		this.mainwh.width=this.screenWidth-108;
		this.mainwh.mapwidth=this.screenWidth-108;
		console.log(this.mainwh.width);
		// let left02=document.getElementById('left02');//查看left02的宽度//324px
		// console.log(window.getComputedStyle(left02).width);
		window.onresize=()=>{
			return(()=>{
				this.screenWidth=document.body.clientWidth;
				console.log(this.screenWidth);
				this.mainwh.width=this.screenWidth-108;
				this.mainwh.mapwidth=this.screenWidth-108;
			})();
		}				
	}	
}

</script>

<style scoped="scoped">
	/*  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale; */
	/* &.router-link-exact-active {
	     color: #42b983;
	} */
	#home01::before,
	#home01::after{
		content: '';
		display: table;
		clear: both;		
	}
	#home01{
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	#header{
		height: 8%;
		width: 100%;
		background-color: #4680d1;
	}
	#contain{
		height: 92%;
		width: 100%;
		position: relative;
	}
	#left{
		width: 108px;
		height: 100%;
		background-color: #323949;
		/* float: left; */
	}
	#main{
		position: relative;
		height: 100%;
		/* width: 1713px; */
		margin: 0;
		right: 0;
		width: auto;
		background-color: #B3C0D1;		
		left: 108px;
		top:-100%;
		/* overflow:scroll; */
		/* overflow: hidden; */
	}
	#left01{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	#left02{
		padding: 0;
		position: relative;		
		/* background-color:rgb(255,0,255,0.8); */
		background-color: white;
		left: 110px;
		width: 350px;
		height: 100%;
		float: left;
		z-index: 2;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	#drawerchart{
		position: absolute;
		left:352px;
		height:60%;
		width: auto;
		margin: 0;
		right: 0;
		bottom: 0;
		background-color: #0000FF;
	}
	
</style>
