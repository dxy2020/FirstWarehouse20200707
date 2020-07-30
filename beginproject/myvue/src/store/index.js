import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    opendrawerchart:false,
    openleftmenu02:false,
    selectanalysisfactor:'',
    getmainwidth:100
	
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    opendrawerchart(state){
      state.opendrawerchart=!state.opendrawerchart;
    },
    openleftmenu02(state){
      state.openleftmenu02=!state.openleftmenu02;
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

