<template>
    <div id="drawer-table-chart">
        <div id="table-all-data">
            <el-table
                ref="singleTable"
                :data="datajson"
                :show-header="false"
                style="width: 100%"
                height="100%"
                max-height="100%"
                size="mini"
                @current-change="handleCurrentChange"
            >
                <el-table-column
                    type="index"
                    :index="indexMethod"
                />
                <el-table-column
                    prop="ZLDWMC_input"
                    label="村名"
                />
                <el-table-column
                    prop="SUM_TBDLMJ_input"
                    label="面积"
                />
            </el-table>
        </div>
        <div id="table-select-data">
            <div id="table-select-name">
                <span>{{ currentRow.ZLDWMC_input }}({{ currentRow.ZLDWDM_input }})
                </span>
            </div>
            <div id="table-select-contain">
                <el-table
                    :data="onecundata"
                    show-summary
                    border
                    height="95%"
                    max-height="100%"
                    :summary-method="getSummaries"
                    :default-sort="{prop: 'SUM_TBDLMJ_input'}"
                    style="width: 100%"
                    size="mini"
                >
                    <el-table-column
                        prop="DLBM_input"
                        label="代码"
                    />
                    <el-table-column
                        prop="DLMC_input"
                        label="名称"
                    />
                    <el-table-column
                        prop="SUM_TBDLMJ_input"
                        label="面积(平方米)"
                        sortable
                        :formatter="formatter"
                    />
                </el-table>
            </div>
            <div id="table-select-chart">
                <template>
                    <ve-pie
                        :data="charData"
                        width="100%"
                        height="100%"
                        :settings="chartSettings"
                    />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tablechart',
  data() {
    this.chartSettings = {
      // legendLimit:5,
      hoverAnimation:false
      // radius: 10,
      // offsetY:300
    };
    return {
      datajson: [],
      ZLDWMC: '',
      currentRow: {},
      onecundata: [],
      charData: { columns: [], rows: [] }
    };
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/data/planservices.json'
      /* 数据需要放在public文件夹中，并且URL不用写public(publi是向外曝露的服务器路径)
				vue-cli3把以前的static改为public，故vue-cli3之前版本放在static，vue-cli3放在public中
				*/
    }).then(res => {
      // console.log(res.data);
      this.datajson = res.data;

      // console.log(this.datajson)
    }).catch(res => {
      alert('访问失败！');
      console.log(res);
    });
    // 方式二:
    // 	this.$axios.get('/data/planservices.json').then((response) => {
    // 	        alert(response.data);
    // 	    }).catch((response) => {
    // 	        alert("错误：" + response);
    // 	    })
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(this.currentRow);
      console.log(this.currentRow.ZLDWMC_input);
      const mc = this.currentRow.ZLDWMC_input;
      const arr = this.datajson;
      const onecundata = arr.filter(function(item) {
        return item.ZLDWMC_input === mc;
      });
      this.onecundata = onecundata;
      this.charData.columns = ['DLMC_input', 'SUM_TBDLMJ_input'];
      this.charData.rows = onecundata;
    },
    formatter(row, column) {
      console.log(row, column);
      return row.SUM_TBDLMJ_input;
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += '平方千米';
        } else {
          sums[index] = '';
        }
      });
      return sums;
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
	#drawer-table-chart{
    @include labelflex(flex,row,nowrap);
    @extend .label-size-default;
    font-size: $myFontSize;
	}
	#table-all-data{
		width: 20%;
    height: 100%;
    .el-table{
      text-align: center;
      align-content: center;
    }
	}
	#table-select-data{
    height: 100%;
    flex-grow: 1;    
    @include labelflex(flex,row,wrap);
		text-align: center;
	}
	#table-select-name{
    width: 100%;
	}
	#table-select-contain{
    width: 45%;
    height: 90%;
	}
	#table-select-chart{
		width: 55%;
    height: 90%;
	}
</style>

<!--滚动条样式
.dahangtiao::-webkit-scrollbar {
  /*滚动条整体样式
  width: 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .dahangtiao::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
  }
  .dahangtiao::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
  }
   //  /deep/.el-table .cell{
  //   overflow: visible;
  // }
-->
