const STORAGE_KEY="table-vuejs";
export default{
  //向外输出，以便组件接收
  fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||"[]");
		
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
  }
};
