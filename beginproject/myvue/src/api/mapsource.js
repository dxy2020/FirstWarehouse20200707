const TiandiMap_wmts={
  olProj,
  olExtent,
  TileLayer,
  WMTSTileGrid,
  TiandituKey,
  TiandiMap_wmts(olProj,olExtent,TileLayer,WMTSTileGrid,TiandituKey){
    let projection = olProj.get("EPSG:4326");
    let projectionExtent = projection.getExtent();
    let size = olExtent.getWidth(projectionExtent) / 256;
    let resolutions = [];
    for (let z = 2; z < 19; ++z) {//计算比例尺
      resolutions[z] = size / Math.pow(2, z);
    };  
    return new TileLayer({
      title:"矢量地图",
      source:new WMTS({
        url:"http://t0.tianditu.gov.cn/vec_c/wmts?tk=" +TiandituKey,
        wrapX:true,
        tileGrid: new WMTSTileGrid({
          origin:olExtent.getTopLeft(projectionExtent),
          resolutions: res.slice(0, 15),
          resolutions: resolutions,
          matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        })
      })
    });
  },
  TiandiMap_wmts(olProj,olExtent,TileLayer,WMTSTileGrid,TiandituKey){
 
    return new TileLayer({//矢量标注
      source: new ol.source.WMTS({
        url:"http://t0.tianditu.gov.cn/vec_c/wmts?tk=" +TiandituKey,
        layer: "cva",
        style: "default",
        matrixSet: "c",
        format: "tiles",
        wrapX: true,
        tileGrid: new WMTSTileGrid({
          origin: olExtent.getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        })
      }),
    });
  }
};