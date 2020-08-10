<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  mounted() {
    // this.screenWidth=document.body.clientWidth;
    // this.$store.commit('getMainwidth',this.screenWidth-108);
    //关闭浏览器时清除localStorage的token用户信息
    let beginTime=0;//开始时间
    let differTime=0;//时间差
    let isFireFox=navigator.userAgent.indexOf("Firefox")>-1;//是否为火狐浏览器
    console.log(isFireFox);
    window.onunload=function(){
      differTime=new Date().getTime()-beginTime;
      alert('ninhao');
      if(differTime<=5){
        localStorage.removeItem('Authorization');
        localStorage.removeItem('user');
        // localStorage.clear();
      }
    };
    window.addEventListener('beforeunload',e=>{
      beginTime=new Date().getTime();
      if(isFireFox===true){//火狐浏览器关闭
        localStorage.clear();
      }
    });
    window.addEventListener('resize', this.reload);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reload);
  },
  methods: {
    reload() {
      // 重新渲染
      this.$nextTick(() => {
      });
    }
  }
};
</script>

<style lang="scss">
  @import "@/assets/styles/_default-styles-clear.scss";
</style>
