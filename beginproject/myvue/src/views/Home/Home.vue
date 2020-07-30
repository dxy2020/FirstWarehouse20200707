<template>
	<div id="home01">
		<div id="header">
			<HomeHeader></HomeHeader>
		</div>
		<div id="contain">
			<div id="left"><!-- <div id="left" @click="isShow=!isShow"> -->
				<div id="left01"><FirstMenu v-on:isopen="onshow"></FirstMenu></div>				
				<div id="left02" v-show="this.$store.state.openleftmenu02">
					<router-view></router-view>							
				</div><!-- <planservice></planservice> -->
			</div>
			<div id="main" :style="{width:mainwh.width+'px'}">
				<BaseMap></BaseMap><!--:mapWidth="mainwh.mapwidth+'px'"-->
				<HomeMainDrawer :isOpen="isShow"></HomeMainDrawer><!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
import FirstMenu from "@/components/home-aside/first-menu/FirstMenu.vue";
import BaseMap from "@/components/home-main/BaseMap.vue";
import HomeMainDrawer from "@/components/common-components/HomeMainDrawer.vue";
import HomeHeader from "@/components/home-header/HomeHeader.vue";
export default {
	name:'home',
	components:{
		HomeHeader,
		FirstMenu,
		BaseMap,
		HomeMainDrawer
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
			screenWidth:''
			
		}
	},
	computed:{
	},
	watch:{
		'$store.state.openleftmenu02':{
			handler(newName){
				if(newName===true){
					this.mainwh.width=this.screenWidth-462;
					// this.mainwh.mapwidth=this.screenWidth-462;
				}else{
					this.mainwh.width=this.screenWidth-110;
				}
			}
		},
		$route(to,from){
			if(to.path==='/'&&from.path==='/home/planservice'){
				this.$store.commit('openleftmenu02');
			}
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
		console.log('我进来了');
		this.screenWidth=document.body.clientWidth;
		console.log(this.screenWidth);
		this.mainwh.width=this.screenWidth-108;
		this.mainwh.mapwidth=this.screenWidth-108;
		console.log(this.mainwh.width);
		let left02=document.getElementById('left02');//查看left02的宽度//324px
		console.log(window.getComputedStyle(left02).width);
		window.onresize=()=>{//当屏幕大小被调整调整，展示地图部分的宽度也被调整
			return(()=>{
				this.screenWidth=document.body.clientWidth;
				console.log(this.screenWidth);
				if(this.$store.state.openleftmenu02===true){
					this.mainwh.width=this.screenWidth-460;
					this.mainwh.mapwidth=this.screenWidth-460;
				}else{
					this.mainwh.width=this.screenWidth-108;
					this.mainwh.mapwidth=this.screenWidth-108;
				}
				
				// this.mainwh.mapwidth=this.screenWidth-108;
				
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
		position: absolute;
		height:100%;
		right: 0;
		bottom: 0;
		width: auto;		
		margin: 0;
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
