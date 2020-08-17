<template>
    <div id="layer-management">
        <custom-breadcrumb></custom-breadcrumb>
        <div id="layer-management-main">
            <el-tree
                ref="tree"
                :data="data"
                show-checkbox
                node-key="id"
                :expand-on-click-node="false"
                @check-change="layerManagementChange"
                @check="layerManagementCheck"
            >
                <span slot-scope="{node}" class="custom-tree-node" @mouseenter="overShow(node.data.id)">
                    <span>
                        <i v-if="data_array_column.includes(node.data.id)" style="color:#4680d1;" class="el-icon-coin"></i>
                        <i v-else style="color:green;" class="el-icon-document"></i>
                        {{ node.label }}
                    </span>
                    <span v-if="!data_array_column.includes(node.data.id)&&isShow===node.data.id">
                        <el-button
                            type="text" icon="el-icon-tickets" size="mini"
                            @click="()=>tickets(node)"
                        >
                        </el-button>
                        <el-button
                            type="text" icon="el-icon-search" size="mini"
                            @click="()=>search(node)"
                        >
                            
                        </el-button>
                        
                        <el-button
                            type="text" icon="el-icon-upload2" size="mini"
                            @click="()=>upload(node)"
                        >
                        </el-button>
                    </span>
                </span>
            </el-tree>
        </div>
    </div>
</template>

<script>
import CustomBreadcrumb from "@/components/custom-breadcrumb/CustomBreadcrumb.vue";
import {layerManagement} from "@/utils/layer-management.js";//配置图层管理的数据
// let id=1000;
export default {
  name:"LayerSelection",
  components:{
    CustomBreadcrumb
  },
  data(){
    return {
      data:layerManagement.layerTreeOne,
      isShow:null
      // data: JSON.parse(JSON.stringify(data)),//暂无必要
      /*
        JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
        JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
      */
    };
  },
  computed:{
    data_array_column(){
      return this.data.map(x=>x['id']);
    }
  },
  mounted(){
    let layerChecked=new Array();
    let layerManagement=this.$store.state.layerManagement;
    let layerData=this.data[0].children;
    for(let i=0;i<layerData.length;i++){
      if(layerManagement[i].state&&layerData[i].label===layerManagement[i].name){
        layerChecked[i]=layerData[i].id;
      }
    }
    this.$refs.tree.setCheckedKeys(layerChecked);
  },
  methods: {
    layerManagementChange(draggingNode, dropNode, ev){
      console.log('tree drag enter: ', dropNode.label);
    },
    layerManagementCheck(draggingNode,node){
      console.log('now:',this.$refs.tree.getCurrentNode());
      console.log('now01:',node.checkedNodes.map(x=>x['label']));
    },

    overShow(index){
      // console.log(index);
      this.isShow=index;
    },
    tickets(node) {
      alert('说明');
      console.log(node.data.id);
    },
    search(node){
      alert('发现');
      console.log(node.data.id);
    },
    upload(node){
      alert('上传');
      console.log(node.data.id);
    },
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
	#layer-management{
		@include label-size-custom(240px,100%);
    @include labelflex(flex,column,nowrap);
	}
   .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
    
  

</style>