<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  mounted() {
    // this.screenWidth=document.body.clientWidth;
    // this.$store.commit('getmainwidth',this.screenWidth-108);
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
  *{
		margin: 0;
		padding: 0;
	}
  // html{
  //   body{
  //     #app{
  //       /*设置内部填充为0，几个布局元素之间没有间距*/
  //       padding: 0px;
  //        /*外部间距也是如此设置*/
  //       margin: 0px;
  //       /*统一设置高度为100%*/
  //       height: 100%;
  //       width:100%;
  //     }
  //   }
  // }
  //消除默认样式(主要：外边距，内边距)css
	html,body,#app{
		/*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        width:100%;
	}
</style>
