import Vue from "vue";
import Vuex from "vuex";
import TileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import {layerManagement} from "@/utils/layer-management.js";//配置图层管理的数据
import layerManagementMethod from "@/api/layer-management.js";//配置图层管理的方法


Vue.use(Vuex);
const store = new Vuex.Store({
 
  state: {
    // 存储token
    user:localStorage.getItem('user') ? localStorage.getItem('user') : '',
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    opendrawerchart:false,
    openSecondMenu:false,
    secondMenuSelect:0,
    selectanalysisfactor:'',
    getmainwidth:100,
    secondMenuName:'',
    addBreadcrumb:[],//面包屑	
    layerManagement:layerManagement.layerTreeOne,//图层管理所有数据
    nodeCheckChange:[],//图层管理结点树选中或取消的数据
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      state.user=user.username;
      localStorage.setItem('Authorization', user.Authorization);
      localStorage.setItem('user', user.username);
    },
    openDrawerChart(state,locking=false){
      if(locking===false){
        state.opendrawerchart=!state.opendrawerchart;        
      }else state.opendrawerchart=false;
    },
    OpenSecondMenu(state){
      state.openSecondMenu=!state.openSecondMenu;
    },
    secondMenuSelect(state,index){
      state.secondMenuSelect=index;//切换二级菜单内容
      switch (index){
      case 0:state.secondMenuName='通用服务';break;
      case 1:state.secondMenuName='规划服务';break;
      case 2:state.secondMenuName='审批服务';break;
      case 3:state.secondMenuName='监管服务';break;
      case 4:state.secondMenuName='决策服务';break;
      default:state.secondMenuName='其他服务';
      }
      state.addBreadcrumb=[];
    },
    selectanalysisfactor(state,value){
      state.selectanalysisfactor=value;
    },
    getmainwidth(state,value){
      state.getmianwidth=value;
    },
    //赋值面包屑
    changeBreadcrumb(state,value){
      state.addBreadcrumb=value;
    },
    //图层管理：当前选择图层加载的数据及增删
    nodeCheckChange(state,layer){//layer:Array
      state.nodeCheckChange=layer;
    }
  },
  getters:{
    layerManagementInit:state=>{//从所有数据中取出初始化图层加载数据
      let layersInit=new Array();
      layerManagementMethod.traverseLayerTree(state.layerManagement,layersInit);//提取初始化图层数据
      // layerManagementMethod.loadingLayers(layersInit,state.layersLoading);//获取图层存储到layersLoading中
      return layersInit;
    },
    //当前改变的节点及增删，使用数组存储，layersLoading[0]=draggingNode,layersLoading[1]=ev
    layersLoading:state=>{//对象数组的监听(深度监听，待优化)
      return state.nodeCheckChange;
    }
  }
});
 
export default store;
// export default new Vuex.Store({
// state: {},
// mutations: {},
// actions: {},
// modules: {}
// });

