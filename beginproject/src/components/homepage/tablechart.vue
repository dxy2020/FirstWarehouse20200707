<template>
	<div id="tablechart01">
		<div id="tablechart02">
			<el-table
				ref="singleTable"
				:data="datajson"		  
				height="100%"
				:show-header="false"
				style="width: 100%"
				highlight-current-row
				@current-change="handleCurrentChange">
				 <el-table-column
					type="index"
					:index="indexMethod">
				  </el-table-column><!-- 自动编号 -->
				  <!-- <el-table-column
					prop="COUNT"
					label="序号"
					width="10">
				  </el-table-column> -->
				  <el-table-column
					prop="ZLDWMC_input"
					label="村名"
					width="90">
				  </el-table-column>
				  <el-table-column
					prop="SUM_TBDLMJ_input"
					label="面积">
				  </el-table-column>
				</el-table>
			</div>
		<div id="tablechart03">
			<p>{{currentRow.ZLDWMC_input}}({{currentRow.ZLDWDM_input}})</p>
			<div id="tablechart04">
				<el-table
				    :data="onecundata"
					border
					:show-summary="true"
					:summary-method="getsummaries"
					:default-sort = "{prop: 'SUM_TBDLMJ_input'}"
					height="100%"
				    style="width: 100%"
				    >
				    <el-table-column
				      prop="DLBM_input"
				      label="代码"
				      width="90">
				    </el-table-column>
				    <el-table-column
				      prop="DLMC_input"
				      label="名称"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="SUM_TBDLMJ_input"
				      label="面积(平方米)"
					  sortable
				      :formatter="formatter">
				    </el-table-column>
				  </el-table>
			</div>
			<div id="tablechart05">
				<template>
					<ve-pie :data="charData" style="height: 100%;width: 100%"></ve-pie>
				</template>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		name:'tablechart',
		data(){
			return{
				datajson:[],
				ZLDWMC:'',
				currentRow:{},
				onecundata:[],
				charData:{columns:[],rows:[]}
			}
		},
		mounted(){
			this.$axios({
				method:'get',
				url:'/data/planservices.json',
				/*数据需要放在public文件夹中，并且URL不用写public(publi是向外曝露的服务器路径)
				vue-cli3把以前的static改为public，故vue-cli3之前版本放在static，vue-cli3放在public中
				*/
				}).then(res=>{
						// console.log(res.data);
						this.datajson=res.data;
						
						// console.log(this.datajson)
					}).catch(res=>{
						alert('访问失败！');
						console.log(res)
				})
		},
		methods: {
			indexMethod(index) {
				return index +1;
			},
			handleCurrentChange(val) {
				this.currentRow = val;
				console.log(this.currentRow);
				console.log(this.currentRow.ZLDWMC_input);
				let mc=this.currentRow.ZLDWMC_input;
				let arr=this.datajson;
				let onecundata=arr.filter(function(item){
					return item.ZLDWMC_input===mc
				});
				this.onecundata=onecundata;
				this.charData.columns=['DLMC_input','SUM_TBDLMJ_input'];
				this.charData.rows=onecundata;
			},
			formatter(row, column) {
				console.log(row,column);
			    return row.SUM_TBDLMJ_input;
			},
			getsummaries(param){
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
	}
</script>

<style scoped="scoped">
	#tablechart01{
		height: 100%;
		width: 100%;
	}
	#tablechart02{
		width: 20%;
		height: 100%;	
	}
	#tablechart03{		
		width: 80%;
		height: 100%;
		position: relative;
		left: 20%;
		bottom: 100%;
		text-align: center;
		font-size: 18px;
	}
	#tablechart03 >p{
		margin: 0;
		padding: 0;
		height: 8%;
	}
	#tablechart04{
		position: relative;		
		height: 90%;
		top: 0;	
		width: 45%;	
	}
	#tablechart05{
		position: absolute;
		right: 0;
		top: 10%;
		margin: 0;
		padding: 0;
		width: 54%;
		height: 92%;
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
-->
