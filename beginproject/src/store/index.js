import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
	opendrawerchart:false
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
	opendrawerchart(state){
		state.opendrawerchart=!state.opendrawerchart;
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

