document.addEventListener('DOMContentLoaded', function() {
  const NE = L.latLng(33.651154, -117.834919);
  const SW = L.latLng(33.641249, -117.850411);
  const bounds = L.latLngBounds(NE, SW);
  const map = L.map('map', {
    center: [33.645805, -117.842772],
    zoom: 18,
    minZoom: 18,
    maxZoom: 18,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  map.on('dblclick', function(e) {
    console.log('hi');
    L.marker(e.latlng).addTo(map);
  });
});