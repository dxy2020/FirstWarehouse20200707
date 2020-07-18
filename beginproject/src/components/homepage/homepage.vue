<template>
	<div id="firstpageid">
		<el-container>
	  		<el-header style="width: 100%;height: 10%;">
	  			<div class="menutwo">
						  		<img src="../img/u72.png"/>
						  		<p><span>规划服务</span></p>
						  </div>
	  		</el-header>
		  		<el-container class="downcontainer">
			    	<el-aside style="width: 8%;">
			    		<el-menu mode="vertical" default-active="1" menu-trigger="click" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  collapse>
						  <img src="../img/u24.png" style="margin-top: 10px;" />
						  <el-menu-item index="1">
						  	<div class="menuone">
						  		<img src="../img/u69.png" />
						  		<!--<img src="../../../public/favicon.ico"/>-->
						  		<p><span>通用功能</span></p>
						  	</div>
						  </el-menu-item >
						  <el-menu-item index="2">
						  	<div class="menutwo">
						  		<img src="../img/u72.png"/>
						  		<p><span>规划服务</span></p>
						  	</div>
						  </el-menu-item>
						  <el-menu-item index="3">						  	
						  	<div class="menuthree">
						  		<img src="../img/u79.png"/>
						  		<p><span>审批服务</span></p>
						  	</div>
						  </el-menu-item>
						  <el-menu-item index="4">						  	
						  	<div class="menuthird">
						  		<img src="../img/u65.png"/>
						  		<p><span>监管服务</span></p>
						  	</div>
						  </el-menu-item>
						  <el-menu-item index="5">						 		 
						  	<div class="menufive">
						  		
						  		<img src="../img/u67.png"/>
						  		<p><span>决策服务</span></p>
						  	</div>
						  </el-menu-item>
						</el-menu>
			    	</el-aside>
			    <el-main>
			    	<div id="map" ref="rootmap"></div>
			    </el-main>
		  	</el-container>
		</el-container>
	</div>
</template>

<script>
import "ol/ol.css";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
	export default{
		data(){
			return{
				map:null
			};
		},
		methods:{
			handleOpen:function(){
				console.log("handleOpen");
			},
			handleClose:function(){
				console.log("handleClose");
			}
			
		},	
	 	mounted(){	
//	 		var mapcontainer = this.$refs.rootmap;
    		this.map = new Map({
		    target: "map",
		    layers: [
		        new TileLayer({
		          source: new OSM()
		        })
		    ],
		    view: new View({
	      		projection: "EPSG:4326",    //使用这个坐标系
	        	center: [114.536509,30.564041],  //深圳
		        zoom: 12
		      })
		    });	 	
	 	}
				
	}
	
//    let center = proj.transformExtent([103.3, 35.5], "EPSG:4326", "EPSG:3857");
//    new Map({
//      target: "map",
//      layers: [
//        new TileLayer({
//          source: new XYZ({
//            url: "http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
//          })
//        }),
//        new TileLayer({
//          source: new XYZ({
//            url: "http://t2.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}"
//          }),
//          isGroup: true,
//          name: "天地图文字标注"
//        })
//      ],
//      view: new View({
//        center: [103.3, 35.5],
//        zoom: 4
//      })
//    });
</script>

<!--html,body,#app,.el-container{
		/*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        width:100%;
	}
	-->

<style scoped>
	#firstpageid,.el-container{
		width: 100%;
		height: 100%;
		
	}
	.el-header{
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		/*line-height: 60px;*/
	}
	.downcontainer{
	}
	.el-aside{
		background-color: #D3DCE6;
		color: #333;/*无必要*/
		text-align: center;
	}
	.el-main{
		background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    /*line-height: 160px;*/
	}  
	/*.el-submenu,.el-menu-item{
		padding-top: 12px;
	}
  	.el-container:nth-child(5) .el-aside,
  	.el-container:nth-child(6) .el-aside {
   		line-height: 260px;
  	}  
    .el-container:nth-child(7) .el-aside {
    	line-height: 320px;
  	}*/
  	.el-menu-vertical-demo{
  		margin-top: 3px;
  		width: 100%;
  		height: 100%; 
  		background-color: #2C3E50; 		
  		
  	}
  	
  	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    /*min-height: 100px;*/
	   
	   
  	}
  	.el-menu-item {
  		margin-top: 12px;
  		height:12%; 
  		/*overflow: auto;*/	
  		
  	}
  	.el-menu-item div{
  		text-align: center;
  		height: 100%;
  		width: 100%;
  		font-size: 0;
  	}
  	.el-menu-item div img{
  		width:50%;
  	}
  	.el-menu-item p{
  		font-family: "微软雅黑" ;
  		color: white;
  		/*margin-top: -25px;*/
  		
  	}
  	#map{
  		height: 100%;
  		width: 100%;
  	}
	
</style>