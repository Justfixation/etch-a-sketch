const gridhouse = document.querySelector("#gridhouse");
const resetBtn = document.querySelector(".reset");

function addGridWidth(gridWidth) {
    for(let gridCounter = 0; gridCounter < gridWidth ** 2; gridCounter++) {
        let div = document.createElement("div");
        div.classList.add("tile");
        div.style.cssText = (`min-width: ${100/gridWidth}%; min-height: ${100/gridWidth}%`);
        /*Changes tile size to fit with other tiles */
        div.addEventListener("mouseenter", () => {
            div.classList.add("coloredTile");
        });
        /* Changes tile to blue when hovered */
        gridhouse.appendChild(div);
    }
}

let resetMsg = "Enter a width from 1-100";
function resetGrid() {
    resetBtn.textContent = "Reset/Resize";
    while(gridhouse.firstChild) {
        gridhouse.removeChild(gridhouse.lastChild);
    }
    /* Removes child tiles if any exist*/
    let gridWidth = prompt(resetMsg);
    if(typeof(parseInt(gridWidth)) == "number" && gridWidth <= 100 && gridWidth >= 0) {
        resetMsg = "Enter a width from 1-100";
        addGridWidth(gridWidth);
    } else if(gridWidth == null) {
        resetBtn.textContent = "Click to add a sketch grid";
        /*Resets to square 1 if user backs out (since grid is now cleared)*/
    } else {
        resetMsg = "The grid's width can only be a number from 1-100.\nHow wide should the new grid be?";
        resetGrid();
        /*re-asks until the user submits a valid response or hits escape*/
    }
}

resetBtn.addEventListener("click", resetGrid);

