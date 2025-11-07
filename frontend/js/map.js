function initializeMap() {
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

  return map;
}

document.addEventListener('DOMContentLoaded', function() {
  const allEvents = fetch('http://localhost:8000/event');

  // parse events into objects
  // for each event:
    // create marker w/ overrided click event
    // add to array
  
  // initialize map
  const map = initializeMap();

  // for each marker:
    // add to map

  // handle map events:
    // on double click:
      // create marker
      // invoke popup
      // if popup form submit:
        // create new event
        // override marker w/ click event
        // close popup
      // else if click outside:
        // delete marker
        // close popup
  
  map.on('dblclick', function(e) {
    console.log('hi');
    L.marker(e.latlng).addTo(map);
  });
});