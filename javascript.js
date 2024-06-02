const gridhouse = document.querySelector("#gridhouse");
gridhouse.style.backgroundColor = "white";

const tile1 = document.createElement("div");
const tile2 = document.createElement("div");

tile1.classList.toggle("tile");
tile2.classList.toggle("tile");

gridhouse.appendChild(tile1);
gridhouse.appendChild(tile2);