import Vue from "vue";
import Vuex from "vuex";

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
    layerManagement:[]//图层管理
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
    //图层管理
    layerManagement(state,layers){
      state.layerManagement=layers;
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

