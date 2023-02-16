// 
//Модуль настройки и подключения карты Leaflet
//

const mapCenter = [59.96842, 30.31755]; // подобрал числа по гуглкартам и макету
const shopPlace = [59.96835, 30.31763]; // подобрал числа по гуглкартам и макету

const markerIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const markerOptions = {
  icon: markerIcon,
};

const mapOptions = {
  attributionControl: false,
  zoomControl: false,
  scrollWheelZoom: false,
  boxZoom: true,
  keyboard: false,
  center: mapCenter,
  zoom: 18,
};


const enableMapZoom = (evt) => {
    
    if (evt.shiftKey === true) {
        map.scrollWheelZoom.enable();
    }
};


const initMap = () => {
    const map = L.map('map', mapOptions);
    
    window.addEventListener('keydown', (evt) => enableMapZoom(evt));
    window.addEventListener('keyup', () => map.scrollWheelZoom.disable());
    
    L.tileLayer('https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=oJPXf6zaBAZnjnBlkWnf').addTo(map);
    L.marker(shopPlace, markerOptions).addTo(map);
}

export { initMap };