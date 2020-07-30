<template>
	<transition name="el-zoom-in-bottom" style="margin: 0;padding: 0;">
		<div v-show="this.$store.state.opendrawerchart" id="transition-box">
			<div id="header">
				<span style="font-size: 18px;">{{selectanalysis}}</span>
				<el-button size="mini" type="primary" round style="float: right;margin-top: 8px; margin-right: 10px;" @click="getjson">收起</el-button>
			</div>
			<div id="chartcontain">
				<home-main-drawer-table-chart></home-main-drawer-table-chart>
			</div>
		</div>
	</transition>
</template>

<script>
import HomeMainDrawerTableChart from './HomeMainDrawerTableChart.vue'
export default {
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
    }
  },
  components: {
    HomeMainDrawerTableChart
  },
  computed: {
    selectanalysis() {
      return this.$store.state.selectanalysisfactor
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
        this.datajson = res.data
      }).catch(res => {
        alert('访问失败！')
        console.log(res)
      })
    }
  }
}

</script>

<style scoped="scoped">
	#transition-box{
		position: absolute;
		height:55%;
		width: 100%;
		border-radius: 4px;
		box-sizing: border-box;
		margin: 0;
		right: 0;
		bottom: 1px;
		padding:2px 2px 2px 2px;
		background-color: #ff5500;
		/* z-index: 10; */
	}
	#header{
		width: 100%;
		height: 12%;
		/* border: 1px solid #2C3E50; */
	}
	#header:before{
		content:'';
		display: inline-block;
		vertical-align: middle;
		height: 100%;
	}

	#chartcontain{
		position: relative;
		width: 100%;
		height: 88%;
		padding: 2px 2px 2px 2px;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
		background-color: #2C3E50;
		overflow: hidden;
	}
</style>
