<template>
    <div id="map" ref="rootmap">
        <div id="search-input-query">
            <home-main-search-input-query></home-main-search-input-query>
        </div>
        <div id="tool-box">
            <home-main-tool-box></home-main-tool-box>
        </div>
        <div id="mycontrol">
            <map-control @mapControlMove="mapControlMove" @mapControlZoom="mapControlZoom"></map-control>
        </div>
    </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import * as olControl from 'ol/control';
import TileLayer from "ol/layer/Tile";
import Source from "ol/source/Source";
import XYZ from 'ol/source/XYZ';
import * as olProj from 'ol/proj';
import HomeMainSearchInputQuery from "../common-components/HomeMainSearchInputQuery.vue";
import HomeMainToolBox from "../common-components/HomeMainToolBox.vue";
import MapControl from "../common-components/MapControl.vue";
export default {
  name:'BaseMap',
  components:{
    HomeMainSearchInputQuery,
    HomeMainToolBox,
    MapControl
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
      map:'',
      view:'',
      zoom:'',
      center:'',
      rotation:'',
      TiandituKey:'9b0af09fca5346f7bf6ed41cd3e1aef6'
    };
  },
  mounted() {
    let TiandiMap_vec=new TileLayer({
      title:"天地图矢量图层",
      source:new XYZ({
        // url:"http://api.tianditu.gov.cn/api?v=4.0&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
        url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
        wrapX: false
      })
    });
    let Tianditu_cva = new TileLayer({
      title: "天地图矢量注记图层",
      source: new XYZ({
        // url: "http://api.tianditu.gov.cn/api?v=4.0&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
        url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
        wrapX: false
      })
    });
    //实例化Map对象加载地图
    // this.map = new Map({
    this.map=new Map({
			  //地图容器div的ID
      target: 'map',
      // controls: olControl.defaults({
      //   /** @type {olx.control.AttributionOptions} */
      //   attributionOptions: ({
      //     collapsible: true
      //   })
      // }).extend([
      //   new olControl.ZoomToExtent({
      //     extent: [
      //       813079.7791264898, 5929220.284081122,
      //       848966.9639063801, 5936863.986909639
      //     ]
      //   })
      // ]),
      //地图容器中加载的图层
      layers: [TiandiMap_vec, Tianditu_cva],
      //地图视图设置
      view: new View({
        //地图初始中心点
        center:olProj.fromLonLat([105, 35]),
        //地图初始显示级别
        zoom: 8,
        //最小级别
        minZoom:1,
        //最大级别
        maxZoom:12,
        // projection: "EPSG:4326"
      })
    });
    let map=this.map;
    let view =map.getView();
    this.view=view;
    this.zoom=view.getZoom();
    this.center=view.getCenter();
    this.rotation=view.getRotation();
  },
  methods:{
    mapControlMove(values){
      let view =this.map.getView();
      let mapCenter=view.getCenter();
      if(values==='左移'){
        mapCenter[0]-=5000*Math.pow(2,11-view.getZoom());
        view.animate({
          center:mapCenter,
          duration:250
        });
      }
      else if(values==='右移'){
        // console.log('我进来了');        
        mapCenter[0]+=5000*Math.pow(2,11-view.getZoom());
        // console.log(mapCenter[0]);
        view.animate({
          center:mapCenter,
          duration:250
        });
      }else{
        alert('无效操作');
      }
      // switch(values){
      // case '左移':
      //   console.log(values);break;
      // case '右移':
      //   console.log(values);break;
      // }
      
    },
    mapControlZoom(values){
      //获取地图视图
      let view =this.map.getView();
      if(values==='放大'){        
        //获得当前缩放级数;地图放大一级
        view.setZoom(view.getZoom()+0.2);
      }
      else if(values==='缩小'){
        view.setZoom(view.getZoom()-0.2);
      }
      else if(values==='复位'){
        //初始中心点
        view.setCenter(this.center);
        //初始旋转角度
        view.setRotation(this.rotation);
        //初始缩放级数
        view.setZoom(this.zoom);
      }
      else{
        alert('无效操作');
      }
    }
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
  #map{
    /deep/.ol-zoom{
      display: none;
    }
    /deep/.ol-attribution{
      display: none;
    }
    /deep/.ol-zoom-extent{
      top: 12px;
    }
  }
	// .ol-attribution,.ol-zoom { display: none;}
	#search-input-query{
    @include labelflex(flex,row,nowrap);
		position: absolute;
		left: 4px;
		top: 5px;
    z-index: 10;
	}
	#tool-box{
    @include labelflex(inline-flex,row,nowrap);
		position: absolute;
		right: 8px;
		top: 5px;
    z-index: 10;
  }
  #mycontrol{
    // @include labelflex(flex,column,nowrap);
    position: absolute;
    left: 5px;
    top:50px;
    z-index: 10;
  }
</style>
