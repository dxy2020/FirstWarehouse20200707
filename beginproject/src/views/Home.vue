<template>
	<div id="home01">
		<div id="header"><button @click="drawer=true" type="primary">点击</button></div>
		<div id="contain">
			<div id="left" @click="onshow"><!-- <div id="left" @click="isShow=!isShow"> -->
				<div id="left01"><leftmenu></leftmenu></div>				
				<div id="left02">
					<router-view></router-view>							
				</div><!-- <planservice></planservice> -->
			</div>
			<div id="main" :style="{width:mainwh.width+'px'}">
				<olmap :mapWidth="mainwh.mapwidth+'px'"/>
				<el-drawer title="占用永久基本农田分析" :visible.sync="drawer" direction="btt" 
				:before-close="handleClose" :append-to-body="isin" width="180px">
					<span>我来啦！</span>
				</el-drawer>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import planservice from "@/components/homepage/planservice.vue";
import leftmenu from "@/components/homepage/leftmenu.vue";
import olmap from "@/components/homepage/olmap.vue";
export default {
	name:'home',
	components:{
		// planservice,
		leftmenu,
		olmap
	},
	data(){
		return{
			isShow:true,
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
	#home01{
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	#header{
		height: 12%;
		width: 100%;
		background-color: #2C3E50;
	}
	#contain{
		height: 88%;
		width: 100%;
	}
	#left{
		width: 108px;
		height: 100%;
		background-color: blue;
		float: left;
	}
	#main{
		/* display: inline; */
		height: 100%;
		width: 1713px;
		float: left;
		background-color: #B3C0D1;
		/* overflow:scroll; */
		overflow: hidden;
	}
	#left01{
		position: absolute;
	}
	#left02{
		padding: 0;
		position: relative;		
		background-color: #42B983;
		left: 110px;
		width: 300%;
		height: 100%;
		float: left;
		z-index: 2;
	}
	
</style>
