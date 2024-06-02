const gridhouse = document.querySelector("#gridhouse");

function addGrid(gridSize) {
    for(let gridCounter = 0; gridCounter < gridSize ** 2; gridCounter++) {
        let div = document.createElement("div");
        div.classList.toggle("tile");
        div.style.cssText = (`min-width: ${100/gridSize}%; min-height: ${100/gridSize}%`);
        div.addEventListener("mouseenter", () => {
            div.classList.add("coloredTile");
        });
        gridhouse.appendChild(div);
    }
}
addGrid(50);