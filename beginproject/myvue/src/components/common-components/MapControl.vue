<template>
    <div id="map-control">
        <div id="map-control-move">
            <el-tooltip
                class="item" effect="dark" content="左移"
                placement="right"
            >
                <el-button icon="el-icon-back" @click="mapControlMoveClick('左移')"></el-button>
            </el-tooltip>
            <el-tooltip
                class="item" effect="dark" content="右移"
                placement="right"
            >
                <el-button icon="el-icon-right" @click="mapControlMoveClick('右移')"></el-button>
            </el-tooltip>           
        </div>
        <div id="map-control-zoom">
            <el-tooltip
                v-for="(values,index) in MapControlZoom" :key="index" class="item"
                effect="dark" content="values.content" placement="right"
            >
                <el-button :icon="values.icon" @click="mapControlZoomClick(values.content)"></el-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      MapControlZoom:[
        {
          icon:'el-icon-zoom-in',
          content:'放大'
        },
        {
          icon:'el-icon-zoom-out',
          content:'缩小'
        },
        {
          icon:'el-icon-place',
          content:'切换'
        }
      ]
    };
  },
  methods:{
    mapControlMoveClick(values){
      this.$emit("mapControlMove",values);
    },
    mapControlZoomClick(values){
      this.$emit("mapControlZoom",values);
    }
  }

  
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_flex-layout.scss"; 
  #map-control{
    @include labelflex(flex,column,nowrap);
  }
  #map-control-move,#map-control-zoom{
    @include labelflex(inline-flex,column,nowrap);
    .el-button{
      margin: 2px;
      padding: 0px;
      height: 36px;
      width: 36px;
      font-size: 24px;
    }
  }
  #map-control-move{
    margin-bottom: 12px;
  }
</style>