import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
 
  state: {
    // 存储token
    user:'',
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    opendrawerchart:false,
    opensecondmenu:false,
    selectanalysisfactor:'',
    getmainwidth:100
	
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      state.user=user.username;
      localStorage.setItem('Authorization', user.Authorization);
    },
    opendrawerchart(state){
      state.opendrawerchart=!state.opendrawerchart;
    },
    OpenSecondMenu(state){
      state.opensecondmenu=!state.opensecondmenu;
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

