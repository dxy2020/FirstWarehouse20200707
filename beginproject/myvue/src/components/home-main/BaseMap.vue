<template>
    <div id="map" ref="rootmap">
        <div id="search-input-query">
            <home-main-search-input-query></home-main-search-input-query>
        </div>
        <div id="tool-box">
            <home-main-tool-box></home-main-tool-box>
        </div>
    </div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import HomeMainSearchInputQuery from "../common-components/HomeMainSearchInputQuery.vue";
import HomeMainToolBox from "../common-components/HomeMainToolBox.vue";
export default {
  name:'Olmap',
  components:{
    HomeMainSearchInputQuery,
    HomeMainToolBox
  },
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

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_flex-layout.scss"; 
	#map{
    position: relative;
		height:100%;width: 100%;word-wrap: break-word;
		word-break: break-all;}
	/*隐藏ol的一些自带元素*/
	.ol-attribution,.ol-zoom { display: none;}
	#search-input-query{
    @include labelflex(flex,row,nowrap);
		position: absolute;
		left: 60px;
		top: 12px;
		z-index: 10;
	}
	#tool-box{
    @include labelflex(inline-flex,row,nowrap);
		position: absolute;
		right: 12px;
		top: 12px;
		z-index: 10;
	}
</style>
