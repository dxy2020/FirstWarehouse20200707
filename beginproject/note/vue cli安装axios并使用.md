# vue cli安装axios并使用

1. 通过命令下载 axios   当前项目` cnpm install axios`或`npm install axios -S`

2. 如果想看自己是否下载成功  打开你的package.json 看看有没有axios的版本信息

3.  打开你的main.js去做配置。

   ```js
   //main.js
   import Vue from 'vue';
   import App from './App/vue';
   import router from './router';
   import axios from 'axios';
   
   Vue.config.productionTip = false;
   Vue.prototype.$axios=axios;
   
   new Vue({
       router,
       render:h=>h(App)
   }).$mount('#app')
   ```

4. 在相对应的页面上如何使用axios

   ```vue
   <script>
       export default{
           name:'Home',
           components:{
               
           },
           mounted(){
               this.$axios.get('#')
               .then(res=>{
                   
               }).catch(error=>{
                   
               })
           }
       }
   </script>
   ```

   