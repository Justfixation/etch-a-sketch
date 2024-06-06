const gridHouse = document.querySelector("#gridHouse");
const resetBtn = document.querySelector(".reset");

function addGridWidth(gridWidth) {
    for(let gridCounter = 0; gridCounter < gridWidth ** 2; gridCounter++) {
        let div = document.createElement("div");
        div.classList.add("tile");
        div.style.cssText = (`min-width: ${100/gridWidth}%; min-height: ${100/gridWidth}%`);
        /*Changes tile size to fit with other tiles */
        let darkness = 1;
        div.addEventListener("mouseenter", () => {
            div.style.opacity = `${darkness}`;
            let newColor = randomizeColor();
            div.style.backgroundColor = newColor;
            if(darkness >= 0) {
                darkness -= 0.1;
            }
        });
        /* Changes tile to blue when hovered, and 10% closer to black every time after */
        gridHouse.appendChild(div);
    }
}

let resetMsg = "Enter a width from 1-100";
function resetGrid() {
    while(gridHouse.firstChild) {
        gridHouse.removeChild(gridHouse.lastChild);
    }
    /* Removes child tiles if any exist*/
    let gridWidth = prompt(resetMsg);
    if(typeof(parseInt(gridWidth)) == "number" && gridWidth <= 100 && gridWidth > 0) {
        resetMsg = "Enter a width from 1-100";
        resetBtn.textContent = "Reset/Resize";
        gridHouse.style.backgroundColor = "black";
        addGridWidth(gridWidth);
    } else if(gridWidth == null || gridWidth == 0) {
        resetBtn.textContent = "Click to add a sketch grid";
        gridHouse.style.backgroundColor = "white";
        /*Resets to square 1 if user backs out (since grid is now cleared)*/
    } else {
        resetMsg = "The grid's width can only be a number from 1-100.\nHow wide should the new grid be?";
        resetGrid();
        /*re-asks until the user submits a valid response or hits escape*/
    }
}

function randomizeColor() {
    let color = Math.floor(Math.random() * 7) + 1;
    switch(color) {
        case 1:
            return "Red";
            break;
    
        case 2:
            return "Orange";
            break;

        case 3:
            return "Yellow";
            break;

        case 4:
            return "Green";
            break;

        case 5:
            return "Blue";
            break;
    
        case 6:
            return "Indigo";
            break;
    
        case 7:
            return "Violet";
            break;
    
        default:
            alert("Oops, something went wrong!");
    }
}

resetBtn.addEventListener("click", resetGrid);
