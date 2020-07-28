<template>
	<div id="map" ref="rootmap"> <!-- :style="{width:mapWidth}" -->
		<div id="search01"><search></search></div>
		<div id="toolbox01"><toolbox></toolbox></div>
	</div>
</template>

<script>
	import "ol/ol.css";
	import { Map, View } from "ol";
	import TileLayer from "ol/layer/Tile";
	import OSM from "ol/source/OSM";
	import search from "@/components/homepage/search.vue";
	import toolbox from "@/components/homepage/toolbox.vue"
	export default {
		name:'olmap',
		// 从父组件出获取宽度
		// props:{
		// 	mapWidth:{
		// 	type: [String, Number],
		// 	default: 100
		// 	}
		// },
		data() {
			return {
			  map: null
			};
		},
		components:{
			search,
			toolbox
		},
		mounted() {
			// var mapcontainer = this.$refs.rootmap;
			this.map = new Map({
			  target: "map",
			  layers: [
				new TileLayer({
				  source: new OSM()
				})
			  ],
			  view: new View({
				projection: "EPSG:4326",    //使用这个坐标系
				center: [114.064839,22.548857],  //深圳
				zoom: 12
			  })
			});
		  }
		};
</script>

<style scoped="scoped">
	#map{position: relative;
		height:100%;width: 100%;word-wrap: break-word;
		word-break: break-all;}
	/*隐藏ol的一些自带元素*/
	.ol-attribution,.ol-zoom { display: none;}
	#search01{
		width: 500px;
		height: 40px;
		position: absolute;
		left: 40px;
		top: 12px;
		z-index: 10;
	}
	#toolbox01{
		width: 480px;
		height: 48px;
		position: absolute;
		right: 12px;
		top: 12px;
		z-index: 10;
	}
</style>
