const gridhouse = document.querySelector("#gridhouse");
gridhouse.style.backgroundColor = "white";
/*
Two test tiles below vvvv

const tile1 = document.createElement("div");
const tile2 = document.createElement("div");

tile1.classList.toggle("tile");
tile2.classList.toggle("tile");

gridhouse.appendChild(tile1);
gridhouse.appendChild(tile2);
*/

function addGrid(gridSize) {
    for(let gridCounter = 0; gridCounter < gridSize ** 2; gridCounter++) {
        let div = document.createElement("div");
        div.classList.toggle("tile");
        div.style.cssText = (`min-width: ${100/gridSize}%; min-height: ${100/gridSize}%`);
        gridhouse.appendChild(div);
    }
}
addGrid(100);