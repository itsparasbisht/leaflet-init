const map = L.map("map").setView([30.3165, 78.0322], 5);
const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by Paras';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);
