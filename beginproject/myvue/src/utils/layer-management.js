const layerManagement = {
  layerTreeOne:[{
    id: 1,
    label: '基础地理信息要素',
    children: [{
      id: 6,
      label: '天地图矢量图层',//行政区
      children:[{}]
    },{
      id: 7,
      label: '天地图矢量注记图层',//基础影像
      children:[{}]
    },{
      id: 8,
      label: '天地图影像图层',//等高线
      children:[{}]
    },{
      id: 9,
      label: '天地图影像注记图层',//坡度图
      children:[{}]
    }]
  }, {
    id: 2,
    label: '现状数据',
    children: [{
      id: 10,
      label: '土地利用现状',
      children:[{}]
    }, {
      id: 11,
      label: '2018',
      children: [{
        id: 16,
        label: '地类图斑',
        children:[{}]
      }]
    },{
      id: 12,
      label: '耕地后备资源',
      children: [{
        id: 17,
        label: '2019',
        children: [{
          id: 18,
          label: '耕地后备资源',
          children:[{}]
        }]
      }]
    }]
  }, {
    id: 3,
    label: '规划数据',
    children: [{
      id: 13,
      label: '永久基本农田',
      children:[{}]
    }, {
      id: 14,
      label: '生态保护红线',
      children:[{}]
    }, {
      id: 15,
      label: '矿产资源规划',
      children:[{}]
    }
    ]
  },{
    id: 4,
    label: '管理数据',
    children: [{}],
  },{
    id: 5,
    label: '社会经济数据',
    children: [{}],
  }
  ],

};

export{
  layerManagement,
};