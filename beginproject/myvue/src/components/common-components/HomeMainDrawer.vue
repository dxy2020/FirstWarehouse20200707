<template>
    <transition name="el-zoom-in-bottom" style="margin: 0;padding: 0;">
        <div v-show="this.$store.state.opendrawerchart" id="home-main-drawer">
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
    height:55%;
    bottom: 55%;
    width: 100%;
		border-radius: 4px;
		box-sizing: border-box;
		background-color: #ff5500;
	}
	#drawer-header{
    @include labelflex(inline-flex,row,nowrap);
    justify-content: space-between;
    height: 8%;
    font-size: $myFontSize;
    align-items: center;
    padding: 0px 5px;
    .drawer-header-btn{
      height: 80%;
      padding: 2px 8px;
    }
	}
	#drawer-contain{
    // @include labelflex(flex,row,nowrap);
    background-color: #2C3E50;
    @extend .label-size-nopadding;
    height: 92%;
  }

</style>
