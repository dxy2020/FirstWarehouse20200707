<template>
    <div id="search02">
        <el-input v-model="input1" placeholder="请输入关键字" style="width: 70%;margin-right: 30px;">
            <el-button slot="append" icon="el-icon-search" style="background-color: #4680d1;color: white;" />
        </el-input>
        <el-button plain style="margin: 0;">
            组合查询
        </el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input1: ''
    };
  }
};
</script>

<style scoped="scoped">
	#search02{
		width: 100%;
		height: 100%;
	}
</style>
