<template>
    <div id="home-main-tool-box">
        <div v-for="(values,index) in ToolBoxContain" :key="index" class="tool-box-contain">
            <span class="tool-box-contain-function">
                <i :class="values.IconClass" />
                <span class="tool-box-name">{{ values.name }}</span>
            </span> 
            <span v-if="index<ToolBoxContain.length-1">|</span>
        </div>
    </div>
</template>

<script>
export default{
  data(){
    return{
      ToolBoxContain:[
        {
          "name":"辖区",
          "IconClass":"el-icon-s-grid",
        },
        {
          "name":"要素拾取",
          "IconClass":"el-icon-place",
        },
        {
          "name":"工具",
          "IconClass":"el-icon-setting",
        },
        {
          "name":"分屏",
          "IconClass":"el-icon-menu",
        },
        {
          "name":"清理",
          "IconClass":"el-icon-delete",
        }
      ]
    };
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss"; 
@import "@/assets/styles/_flex-layout.scss"; 
	#home-main-tool-box{
		@include labelflex(inline-flex,row,nowrap);
		background-color: white;
		padding: 4px 0;
		border-radius: 4px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.tool-box-contain{
		padding-left: 2px;
		font-size: 16px;			
	}
  .tool-box-contain-function{
    cursor: pointer;
    &>:nth-child(2){
			margin-right: 3px;
		}
    &:hover{
			background-color: #409EFF;
		}
    @include border-radius(4px);
  }
</style>
