const map = L.map("map").setView([30.3165, 78.0322], 5);
const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by Paras';

L.tileLayer(tileUrl, { attribution }).addTo(map);

function generateList() {
  const ul = document.querySelector(".list");

  data.forEach((destination) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");

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
