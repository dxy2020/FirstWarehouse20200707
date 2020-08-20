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
import * as olExtent from 'ol/extent';
import * as olControl from 'ol/control';
import TileLayer from "ol/layer/Tile";
import Source from "ol/source/Source";
import WMTS from 'ol/source/WMTS';
import XYZ from 'ol/source/XYZ';
import * as olProj from 'ol/proj';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import HomeMainSearchInputQuery from "../common-components/HomeMainSearchInputQuery.vue";
import HomeMainToolBox from "../common-components/HomeMainToolBox.vue";
import MapControl from "../common-components/MapControl.vue";
import layerManagementMethod from "@/api/layer-management.js";//配置图层管理的方法
import {olLayer} from "@/api/layer-management.js";//配置图层管理的方法
import {mapGetters} from 'vuex';
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
      layers:[],
      center:'',
      rotation:'',
      // TiandituKey:'9b0af09fca5346f7bf6ed41cd3e1aef6'
      layerInsertRuler:[],//图层管理el-tree的参考物
    };
  },
  computed:{
    ...mapGetters(['layersLoading']),
  },
  watch:{
    layersLoading(val,oldval){
      //笨办法：一切推倒重来，但太暴力，可能存在空白期,舍弃。
      // console.log('当前图层树管理：',val,oldval);
      let layers=this.map.getLayers();//获取图层
      let layerArray=layers.array_;//获取图层数据
      // console.log('标准图层尺子:',this.layerInsertRuler); 
      // console.log('当前图层：',layerArray.map(x=>x.values_.name));
      if(val[1]===false){//val[1]===false:表示取消图层
        // let layerArray=layers.array_;
        // layers.removeAt(3);//删除图层    
        layers.removeAt(layerArray.findIndex(x=>x.values_.name===val[0].label));
      }else{//增加图层，需要判断顺序在哪插入 
        // console.log('标准图层尺子:',this.layerInsertRuler); //根据图层树从上往下的label数组
        let layerNameArray=layerArray.map(x=>x.values_.name);
        let ruler=this.layerInsertRuler.indexOf(val[0].label);
        let startSite=this.layerInsertRuler.findIndex(x=>x===layerNameArray[0]);//最下面图层的位置
        let endSite=this.layerInsertRuler.findIndex(x=>x===layerNameArray[layerNameArray.length-1]);//最上面图层在尺子中的位置
        // let site=this.layerInsertRuler.findIndex(x=>x===layerNameArray[i]);//没必要每次从头遍历，舍弃
        let layer=olLayer.loadingXYZ(val[0]);
        // if(startSite===-1||endSite===-1){//只需要写一个就ok:没必要，当startSite===-1||endSite===-1表示没有图层，
        //   layers.push(layer);//insertAt和push都是没有问题
        // }else{   }
        if(ruler>startSite){layers.insertAt(0,layer)}//向最底下加图层
        else if(ruler<endSite){layers.push(layer)}//向上面加图层
        else{
          if(layerNameArray.length=2){//当只有两个图层时直接加在中间
            layers.insertAt(1,layer);
          }else{
            for(let j=1,k=startSite-1;j<layerNameArray.length-1;j++){//j=1,j<layerNameArray.length-1:不用判断首尾两个图层
              for(let i=k;i>endSite;i--){//k记录当前比匹配的位置，从该位置反向寻找，提高效率
                if(this.layerInsertRuler[i]===layerNameArray[j]){
                  if(ruler>i||j==layerNameArray.length-2){
                    layers.insertAt(j+1,layer);
                    // console.log('当前图层Name：',this.map.getLayers().array_.map(x=>x.values_.name));
                    return;//结束
                  }
                  k=i-1;
                  break;//跳出当前循环
                }
              }
            }
          }
        }
        // layers.push(layer);//在最后插入一个元素，即向最上一层添加
        // layers.insertAt(1,ImageVector);//向指定位置添加图层，后期要用
      }
      //获取并修改图层是否可见
      // let layerManagement=new Array();
      // let layers=map.getLayers();
      // for(let i=0;i<layers.getLength();i++){
      // //获取每个图层的名称、是否可见属性
      //   let layer=new Array();
      //   layer[i] = layers.item(i);
      //   if(val.includes(layer.get('name'))){
      //     console.log('当前图层展示');
      //     layer.setVisible(true);
      //   }else layer.setVisible(false);//不可见
      // layerManagement[i]={name:layer[i].get('name'),state:layer[i].getVisible()};
      // }      
    }
  },
  mounted() {
    let layersInit=new Array();
    let layerManagementName=this.$store.getters.layerManagementInit;
    let layerInsertRuler=new Array();
    // this.layerInsertRuler=layerManagementName.map(x=>x['label']);//获取图层树所有的label，作为尺子
    layerManagementMethod.traverseLayerTreeValue(this.$store.state.layerManagement,layerInsertRuler,'label');
    this.layerInsertRuler=layerInsertRuler;
    layerManagementMethod.loadingLayers(this.$store.getters.layerManagementInit,layersInit);//加载图层    
    //实例化Map对象加载地图
    // this.map = new Map({
    this.map=new Map({
			  //地图容器div的ID
      target: 'map',
      //地图容器中加载的图层
      layers: layersInit,
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
    //map中的图层数组
    let layer = new Array();
    //图层名称数组
    // let layerName = new Array();
    //图层可见属性数组
    // let layerVisibility = new Array();
    //vuex图层数据存储：名称和状态
  },
  methods:{
    mapControlMove(values){
      let view =this.map.getView();
      let mapCenter=view.getCenter();
      let layers=this.map.getLayers();
      let layer=this.map.getLayers().item(3);
      layer.setVisible(false);
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
