<template>
  <div class="home">
  	<!--<div id="app">
	    <div id="nav">
	      <router-link to="/">Home</router-link> |
	      <router-link to="/newContact">NewContact</router-link>|
	      <router-link to="/signUp">Signup</router-link>|
	      <router-link to="/about">About</router-link>
	    </div>
    <router-view />
    </div>-->
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Hello msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Hello from "@/components/Hello.vue";

export default {
  name: "hello",
  components: {
    HelloWorld,
    Hello
  }
};
</script>

<style scoped>
	#app {
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
}
</style>
