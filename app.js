const map = L.map("map").setView([30.3165, 78.0322], 5);
const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by Paras';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

const circleLayer = L.circle([30.3165, 78.0322], {
  radius: 20000,
  color: "coral",
});
circleLayer.addTo(map);

const bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];
const rectLayer = L.rectangle(bounds);
rectLayer.addTo(map);

const triangleCoords = [
  [25.774, -80.19],
  [18.466, -66.118],
  [33.321, -64.757],
];
const polygonLayer = L.polygon(triangleCoords);
polygonLayer.addTo(map);

var latlngs = [
  [45.51, -122.68],
  [37.77, -122.43],
  [34.04, -118.2],
];
const polylineLayer = L.polyline(latlngs);
polylineLayer.addTo(map);

const cMarker = L.circleMarker([28.7041, 77.1025], {
  radius: 50,
  color: "red",
});
cMarker.addTo(map);
