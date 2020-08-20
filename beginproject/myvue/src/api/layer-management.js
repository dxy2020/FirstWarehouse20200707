import TileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
export default{
  traverseLayerTreeold(val){//对树数据进行遍历，此时val参数为数组
    let arrayTree=new Array();
    for(let i=0;i<val.length;i++){
      this.recursiveLayerTree(val[i],arrayTree); 
      // arrayTree.push(this.recursiveLayerTree(val[i]));  }
      return arrayTree;
    }
  },
  recursiveLayerTree(val,getLayers){//递归遍历图层数据，通过数组参数接收，此时val参数为对象
    if(val.children!==undefined&&val.children[0].id!==undefined){
      for(let i=0;i<val.children.length;i++){
        this.recursiveLayerTree(val.children[i],getLayers);
      }
    }else {
      if(val.visible===true){
        getLayers.push(val);
      }
      // return val.filter(x=>{return x['visible']===true});//此时使用concat接收不合适
    }
  },
  //traverseLayerTreeold和recursiveLayerTree的结合，可删。
  traverseLayerTree(val,getLayers){//对图层数据进行遍历,val：Array，getLayers:Array，接收需要初始化加载的图层数据
    val.forEach(item => {//遍历数据，获取对象
      if(item.children!==undefined&&item.children[0].id!==undefined){//判断对象是否有children,且存在数据，若有则遍历children
        this.traverseLayerTree(item.children,getLayers);//递归遍历children内容
      }else{//对象无children
        if(item.visible===true){//图层是否需要加载，visible:true 加载，false不加载
          getLayers.push(item);//将加载的数据放在getLayer中
        }
      }        
    });
  },
  //根据XYZ,URL获取图层,并加载
  loadingLayers(layersInit,layersLoading){
    for(let i=layersInit.length-1,j=0;i>=0;i--,j++){//倒赋，或用push，el-tree从上往下叠加，layers从下往上叠加，满足一一对应
      layersLoading[j]=new TileLayer({
        name:layersInit[i].label,
        source:new XYZ({
          url:layersInit[i].url,
          wrapX:false
        })
      });
    }
  },
 
};
//加载图层，将加载各种类型的图层方式放在olLayer对象中
const olLayer={
  //XYZ:ol.source.XYZ
  loadingXYZ(layerData){
    return new TileLayer({
      name:layerData.label,
      source:new XYZ({
        url:layerData.url,
        wrapX:false
      })
    });
  }
};

export{
  olLayer,
};


//方法一：去掉数组中undefined
// layerManagementNow.forEach((item ,index)=> {
//   if(item===undefined){
//     layerManagementNow.splice(index,1);
//   }
// });
//方法二：去掉数组中undefined
// layerManagementNow.filter(x=>{return x!==undefined});
// this.$store.commit('layerManagement',layerManagementNow.filter(x=>{return x!==undefined}));
// console.log('now:',layerManagementNow.filter(x=>{return x!==undefined}));