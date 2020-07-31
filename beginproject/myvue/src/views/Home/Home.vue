<template>
    <div id="home01">
        <div id="header">
            <HomeHeader />
        </div>
        <div id="contain">
            <!-- <div id="aside"></div> -->
            <div id="aside-left">
                <first-menu @isopen="onshow"></first-menu>
            </div>
            <div v-show="this.$store.state.openleftmenu02" id="aside-right">
                <router-view></router-view>
            </div><!-- <planservice></planservice> -->            
            <div id="main" :style="{width:mainwh.width+'px'}">
                <base-map></base-map><!--:mapWidth="mainwh.mapwidth+'px'"-->
                <home-main-drawer :is-open="isShow"></home-main-drawer>
            </div>
        </div>
    </div>
</template>

<script>
import FirstMenu from '@/components/home-aside/HomeAsideFirstMenu.vue';
import BaseMap from '@/components/home-main/BaseMap.vue';
import HomeMainDrawer from '@/components/common-components/HomeMainDrawer.vue';
import HomeHeader from '@/components/home-header/HomeHeader.vue';
export default {
  name: 'Home',
  components: {
    HomeHeader,
    FirstMenu,
    BaseMap,
    HomeMainDrawer
  },
  data() {
    return {
      isShow: false,
      mainwh: {
        width: '',
        height: '',
        mapWidth: ''
      },
      drawer: false,
      isin: true,
      screenWidth: ''

    };
  },
  computed: {
  },
  watch: {
    // '$store.state.openleftmenu02': {
    //   handler(newName) {
    //     if (newName === true) {
    //       this.mainwh.width = this.screenWidth - 462;
    //       // this.mainwh.mapwidth=this.screenWidth-462;
    //     } else {
    //       this.mainwh.width = this.screenWidth - 110;
    //     }
    //   }
    // },
    // $route(to, from) {
    //   if (to.path === '/' && from.path === '/home/planservice') {
    //     this.$store.commit('openleftmenu02');
    //   }
    // }
  },
  mounted() {
    // console.log('我进来了');
    // this.screenWidth = document.body.clientWidth;
    // console.log(this.screenWidth);
    // this.mainwh.width = this.screenWidth - 108;
    // this.mainwh.mapwidth = this.screenWidth - 108;
    // console.log(this.mainwh.width);
    // const left02 = document.getElementById('left02');// 查看left02的宽度//324px
    // console.log(window.getComputedStyle(left02).width);
    // window.onresize = () => { // 当屏幕大小被调整调整，展示地图部分的宽度也被调整
    //   return (() => {
    //     this.screenWidth = document.body.clientWidth;
    //     console.log(this.screenWidth);
    //     if (this.$store.state.openleftmenu02 === true) {
    //       this.mainwh.width = this.screenWidth - 460;
    //       this.mainwh.mapwidth = this.screenWidth - 460;
    //     } else {
    //       this.mainwh.width = this.screenWidth - 108;
    //       this.mainwh.mapwidth = this.screenWidth - 108;
    //     }

    //     // this.mainwh.mapwidth=this.screenWidth-108;
    //   })();
    // };
  },
  methods: {
    onshow() {
      this.isShow = !this.isShow;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};

</script>

<style scoped="scoped" lang="scss">
  @import "@/assets/styles/_common-styles.scss";
	#home01{    
    @extend .label-size-default;
    display: flex; 
    flex-flow: column nowrap;    
	}
	#header{
		height: 8%;
		width: 100%;
		background-color:$myBlue;
	}
	#contain{
		height: 92%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  #aside-right{
    height: auto;
    border: red solid 2px;
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	#main{
    height:auto;
    flex-grow: 1;
	}
	
	#drawerchart{
		position: absolute;
		left:352px;
		height:60%;
		width: auto;
		margin: 0;
		right: 0;
		bottom: 0;
		background-color: #0000FF;
	}

</style>
