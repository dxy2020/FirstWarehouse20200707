<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/newContact">NewContact</router-link>|
      <router-link to="/signUp">Signup</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
    <HomePage></HomePage>
  </div>
</template>
<script>
	import HomePage from "@/components/homepage/homepage.vue";
	export default {
  name: "homepage",//此时name的值不能与HomePage一样？
  components: {
    HomePage
  }
};
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
