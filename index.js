let type_of_map = '';
function getImage(elem){
  let selection = document.getElementById('status');
  if (type_of_map !== ''){
    prevButton = document.getElementById(type_of_map);
    prevButton.style = 'border-left: 5px solid #8f625e;';
  }
  type_of_map = elem.id;
  selection.innerHTML = type_of_map;
  elem.style = 'border-left: 10px solid #ff1500;';
  document.documentElement.scrollTop = 0;
}

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/core/watchUtils",
  "esri/layers/FeatureLayer",
  "esri/widgets/FeatureTable"
  ], function (
    esriConfig,
    Map,
    MapView) {
      esriConfig.apiKey = /* "YOUR API KEY HERE" */;
      const map = new Map({
        basemap: "arcgis-imagery"
      });
      button = document.getElementById('button-cover');
      button.addEventListener('click', ()=>{
        map.basemap = type_of_map;
      })
      // view doesnt have const keyword to make it a global var.
      // this is to use it in the console to get coordinates from terminal
      view = new MapView({
          container: 'viewDiv',
          map: map,
          center: [80.98995979305177,10.301300275967641],
          zoom: 6,
      });
  });
