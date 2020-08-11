// router面包屑
const routerBreadcrumb={
  // 二级菜单：规划服务
  // second_planning_services:{
  //   list:[
  //     {name:"首页",path:"/home"},
  //     {name:"规划服务",path:"/homeasidesecondmenu"}      
  //   ]
  // },
  // 三级菜单：通用服务：空间分析
  third_spatial_analysis:{
    list:[
      // {name:"首页",path:"/home"},
      // {name:"规划服务",path:"/homeasidesecondmenu"},
      {name:"差异分析",topath:"/homeasidesecondmenu/planservicesrationalityanalysis"}  
    ]
  },
  //三级菜单：通用服务：统计分析
  third_statistical_analysis:{
    list:[
      // {name:"首页",path:"/home"},
      // {name:"规划服务",path:"/homeasidesecondmenu"},
      {name:"差异分析",topath:"/homeasidesecondmenu/planservicesrationalityanalysis"}  
    ]
  },
  // 三级菜单：规划服务：智能选址
  third_intelligent_location:{
    list:[
      // {name:"首页",path:"/home"},
      // {name:"规划服务",path:"/homeasidesecondmenu"},
      {name:"差异分析",topath:"/homeasidesecondmenu/planservicesrationalityanalysis"}  
    ]
  },
  // 三级菜单：规划服务：差异分析
  third_difference_analysis:{
    list:[
      // {name:"首页",path:"/home"},
      // {name:"规划服务",path:"/homeasidesecondmenu"},
      {name:"差异分析",topath:"/homeasidesecondmenu/planservicesrationalityanalysis"}  
    ]
  },
  
  
};

export{
  routerBreadcrumb,
};