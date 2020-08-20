const TiandituKey='9b0af09fca5346f7bf6ed41cd3e1aef6';
const layerManagement = {
  layerTreeOne:[{
    id: 1,
    label: '基础地理信息要素',
    children: [{
      id: 6,
      label: '天地图影像注记图层',//行政区
      url: "http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=" +TiandituKey,
      visible:true
    },{
      id: 7,
      label: '天地图影像图层',//基础影像
      url: "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=" +TiandituKey,
      visible:true
    },{
      id: 8,
      label: '天地图矢量注记图层',//等高线
      url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" +TiandituKey,
      visible:true
    },{
      id: 9,
      label: '天地图矢量图层',//坡度图
      url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" +TiandituKey,
      visible:true
    }]
  }, {
    id: 2,
    label: '现状数据',
    children: [{
      id: 10,
      label: '土地利用现状',
      url:'#',
      visible:false,
      children:[{}]
    }, {
      id: 11,
      label: '2018',
      url:'#',
      visible:false,
      children: [{
        id: 16,
        label: '地类图斑',
        visible:false,
        children:[{}]
      }]
    },{
      id: 12,
      label: '耕地后备资源',
      url:'#',
      visible:false,
      children: [{
        id: 17,
        label: '2019',
        visible:false,
        url:'#',
        children: [{
          id: 18,
          label: '耕地后备资源',
          url:'#',
          visible:false,
          children:[{}]
        }]
      }]
    }]
  }, {
    id: 3,
    label: '规划数据',
    url:'#',
    visible:false,
    children: [{
      id: 13,
      label: '永久基本农田',
      url:'#',
      visible:false,
      children:[{}]
    }, {
      id: 14,
      label: '生态保护红线',
      url:'#',
      visible:false,
      children:[{}]
    }, {
      id: 15,
      label: '矿产资源规划',
      url:'#',
      visible:false,
      children:[{}]
    }
    ]
  },{
    id: 4,
    label: '管理数据',
    url:'#',
    visible:false,
    children: [{}],
  },{
    id: 5,
    label: '社会经济数据',
    url:'#',
    visible:false,
    children: [{}],
  }
  ],

};

export{
  layerManagement,
};


// let TiandiMap_vec=new TileLayer({
//   name:"天地图矢量图层",
//   source:new XYZ({
//     // url:"http://t0.tianditu.gov.cn/vec_c/wmts?tk=" +this.TiandituKey,//TiandituKey为天地图密钥
//     url:"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
//     matrixSet:"c",
//     wrapX: false
//   })
// });
// let Tianditu_cva = new TileLayer({
//   name: "天地图矢量注记图层",
//   source: new XYZ({
//     // url: "http://api.tianditu.gov.cn/api?v=4.0&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
//     url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" +this.TiandituKey,//TiandituKey为天地图密钥
//     wrapX: false
//   })
// });
// var TiandiMap_img = new TileLayer({
//   name: "天地图影像图层",
//   source: new XYZ({
//     url: "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=" + this.TiandituKey,//parent.TiandituKey()为天地图密钥
//     wrapX: false
//   })
// });
// var TiandiMap_cia = new TileLayer({
//   name: "天地图影像注记图层",
//   source: new XYZ({
//     url: "http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=" + this.TiandituKey,//parent.TiandituKey()为天地图密钥
//     wrapX: false
//   })
// });
// console.log('图层初始化测试:',TiandiMap_cia);