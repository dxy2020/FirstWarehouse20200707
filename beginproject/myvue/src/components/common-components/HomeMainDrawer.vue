<template>
    <transition name="el-zoom-in-bottom" style="margin: 0;padding: 0;">
        <div v-show="this.$store.state.opendrawerchart" id="home-main-drawer">
            <div id="drawer-header">
                <span style="font-size: 18px;">{{ selectanalysis }}</span>
                <el-button
                    size="mini" type="primary" round @click="getjson"
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
      datajson: []
      // selectanalysis:''
    };
  },
  computed: {
    selectanalysis() {
      return this.$store.state.selectanalysisfactor;
    }
  },
  methods: {
    getjson() {
      this.$axios({
        method: 'get',
        url: '/data/planservices.json'
        /* 数据需要放在public文件夹中，并且URL不用写public(publi是向外曝露的服务器路径)
					vue-cli3把以前的static改为public，故vue-cli3之前版本放在static，vue-cli3放在public中
					*/
      }).then(res => {
        // console.log(res.data);
        this.datajson = res.data;
      }).catch(res => {
        alert('访问失败！');
        console.log(res);
      });
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
    // width: auto;
    justify-content: space-between;
	}
	#drawer-contain{
    // @include labelflex(flex,row,nowrap);
    background-color: #2C3E50;
    @extend .label-size-nopadding;
    height: 94.5%;
    // overflow: visible;		
  }

</style>
