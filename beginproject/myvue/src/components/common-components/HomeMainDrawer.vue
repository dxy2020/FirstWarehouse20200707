<template>
    <transition name="el-zoom-in-bottom" style="margin: 0;padding: 0;">
        <!-- <div v-show="this.$store.state.opendrawerchart" id="home-main-drawer"> -->
        <div v-if="this.$store.state.opendrawerchart" id="home-main-drawer">
            <div id="drawer-header">
                <span>{{ selectanalysis }}</span>
                <el-button
                    size="mini" type="primary" round class="drawer-header-btn" @click="isCloseDrawer"
                >
                    收起
                </el-button>
            </div>
            <div id="drawer-contain">
                <home-main-drawer-table-chart></home-main-drawer-table-chart>
            </div>
        </div>
    </transition>
</template>

<script>
import HomeMainDrawerTableChart from './HomeMainDrawerTableChart.vue';
export default {
  components: {
    HomeMainDrawerTableChart
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isopen: true,
    };
  },
  computed: {
    selectanalysis() {
      return this.$store.state.selectanalysisfactor;
    }
  },
  methods: {
    isCloseDrawer(){
      this.$store.commit('openDrawerChart');
    }
  }
};

</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
	#home-main-drawer{
    @include labelflex(flex,column,nowrap);
		position: relative;
    height:56%;
    bottom: 56%;
    width: 100%;
		border-radius: 4px;
		box-sizing: border-box;
		background-color: #ffffff;
    padding: 0px 4px;
	}
	#drawer-header{
    @include labelflex(inline-flex,row,nowrap);
    justify-content: space-between;
    height:10%;
    width: 100%;
    box-sizing: border-box;
    font-size: $myFontSize;
    align-items: center;
    border-bottom: 2px solid #dedfe4;
    .drawer-header-btn{
      height: 70%;
      padding: 4px 10px;
    }
	}
	#drawer-contain{
    // @include labelflex(flex,row,nowrap);
    @extend .label-size-nopadding;
    // flex-grow: 1;//若用flex-grow则会被el-table撑开，舍弃
    height: 90%;
  }

</style>
