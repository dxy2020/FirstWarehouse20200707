<template>
    <div id="home01">
        <div id="header">
            <home-header></home-header>
        </div>
        <div id="contain">
            <!-- <div id="aside"></div> -->
            <div id="aside-left">
                <home-aside-first-menu></home-aside-first-menu>
            </div>
            <div v-show="this.$store.state.openSecondMenu" id="aside-right">
                <router-view></router-view>
            </div><!-- <planservice></planservice> -->           
            <div id="main">
                <base-map></base-map><!--:mapWidth="mainwh.mapwidth+'px'"-->
                <home-main-drawer :is-open="isShow"></home-main-drawer>
            </div>
        </div>
    </div>
</template>

<script>
import HomeAsideFirstMenu from '@/components/home-aside/HomeAsideFirstMenu.vue';
import BaseMap from '@/components/home-main/BaseMap.vue';
import HomeMainDrawer from '@/components/common-components/HomeMainDrawer.vue';
import HomeHeader from '@/components/home-header/HomeHeader.vue';
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAsideFirstMenu,
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
  },
  mounted() {
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
  #aside-left{
    height: 100%;
  }
  #aside-right{
    height: 100%;
    // border: red solid 2px;
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	#main{
    height:auto;
    flex-grow: 1;
	}
</style>
