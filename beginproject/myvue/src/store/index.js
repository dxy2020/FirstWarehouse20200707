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
    getmainwidth:100
	
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      state.user=user.username;
      localStorage.setItem('Authorization', user.Authorization);
      localStorage.setItem('user', user.username);
    },
    opendrawerchart(state){
      state.opendrawerchart=!state.opendrawerchart;
    },
    OpenSecondMenu(state){
      state.openSecondMenu=!state.openSecondMenu;
    },
    secondMenuSelect(state,index){
      state.secondMenuSelect=index;
    },
    selectanalysisfactor(state,value){
      state.selectanalysisfactor=value;
    },
    getmainwidth(state,value){
      state.getmianwidth=value;
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

