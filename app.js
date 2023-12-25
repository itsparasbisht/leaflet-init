const map = L.map("map").setView([30.3165, 78.0322], 8);
const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by Paras';

L.tileLayer(tileUrl, { attribution }).addTo(map);

// sidebar list markup generator
function generateList() {
  const ul = document.querySelector(".list");

  // data available from data.js (added inside index.html)
  data.forEach((destination) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");

    a.addEventListener("click", () => {
      flyToDestination(destination);
    });

    div.classList.add("destination-item");
    a.innerText = destination.properties.name;
    a.href = "#";

    p.innerText = destination.properties.description;

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList();

function generateDestinationPopupMarkup(properties) {
  return `
  <div class="popupCustomContent">
  <h2>${properties.name}</h2>
  <img src="${properties.imageUrl}" />
  <p>${properties.description}</p>
  <div class="badges">
    <b class="elevation">Elevation - ${properties.elevation}</b>
    <b class="elevation">District - Almora</b>
  </div>
  </div>
  `;
}

function handleEachFeature(feature, layer) {
  layer.bindPopup(generateDestinationPopupMarkup(feature.properties), {
    closeButton: false,
    offset: L.point(0, -8),
  });
}

// custom map marker
const myIcon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [30, 30],
});

L.geoJSON(data, {
  onEachFeature: handleEachFeature,
  pointToLayer: (feature, latlng) =>
    L.marker(latlng, {
      icon: myIcon,
    }),
}).addTo(map);

// called onClick of sidebar items
function flyToDestination(destination) {
  const lat = destination.geometry.coordinates[1];
  const lng = destination.geometry.coordinates[0];

  map.flyTo([lat, lng], 14, {
    duration: 3,
  });

  setTimeout(() => {
    L.popup({
      closeButton: false,
      offset: L.point(0, -8),
    })
      .setLatLng([lat, lng])
      .setContent(generateDestinationPopupMarkup(destination.properties))
      .openOn(map);
  }, 3000);
}
