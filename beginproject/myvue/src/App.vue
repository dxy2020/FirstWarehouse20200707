<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>
export default{
	mounted(){
		// this.screenWidth=document.body.clientWidth;
		// this.$store.commit('getmainwidth',this.screenWidth-108);
		window.addEventListener('resize',this.reload)
	},
	beforeDestroy(){
		window.removeEventListener('resize',this.reload);
	},
	methods:{
		reload(){
			//重新渲染
			this.$nextTick(()=>{
				
			})
		}
	}
}
</script>

<style lang="less">
	html,body,#app{
		/*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        width:100%;
	}
	*{
		margin: 0;
		padding: 0;
	}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
