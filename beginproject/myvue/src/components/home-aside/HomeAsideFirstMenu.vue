<template>
    <div id="home-aside-first-menu">
        <img src="./img/u24.png">
        <div
            v-for="(value,index) in menu" :key="index" class="menu-button"
            @click="isOpenSecondMenu"
        >
            <router-link
                :to="value.tolink" tag="div" append
                style="cursor:pointer"
            >
                <img :src="value.imgsrc" style="width: 35%;">
                <p><span>{{ value.menucontent }}</span></p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeAsideFirstMenu',
  data() {
    return {
      menu: [
        {
          tolink: '#',
          imgsrc: require('./img/u69.png'), // 此时需要用require，否则图片无法加载
          menucontent: '通用功能'
        },
        {
          tolink: '/home/planservices',
          imgsrc: require('./img/u72.png'),
          menucontent: '规划服务'
        },
        {
          tolink: '#',
          imgsrc: require('./img/u79.png'),
          menucontent: '监管服务'
        },
        {
          tolink: '#',
          imgsrc: require('./img/u65.png'),
          menucontent: '监管服务'
        },
        {
          tolink: '#',
          imgsrc: require('./img/u67.png'),
          menucontent: '决策服务'
        }

      ]
    };
  },
  methods: {
    isOpenSecondMenu() {
      this.$store.commit('OpenSecondMenu');
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
	#home-aside-first-menu{
    height: 100%;
		width: 200px;		
		background-color: #505458;
		text-align: center;
    color: #FFFFFF;
  }
  #home-aside-first-menu{
    img{
      width: 60px;
      padding-top: 20px;
    }
    .menu-button{
      margin-top:35px;
		  padding: 12px auto;
      border-radius: 4px;
      &:hover{
        background-color:bisque;
      }
    }
  }
</style>
