const gridHouse = document.querySelector("#gridHouse");
const resetBtn = document.querySelector(".reset");
const userInput = document.querySelector(".user-input");
const pencilBtn = document.querySelector(".pencil");
const fireBtn = document.querySelector(".fire");
const oceanBtn = document.querySelector(".ocean");

let currentTheme = "Pencil";
changeTheme();

pencilBtn.addEventListener("click", () => {
    currentTheme = "Pencil";
    changeTheme();
    generateGrid();
    document.querySelector(".user-input").focus();
});

fireBtn.addEventListener("click", () => {
    currentTheme = "Fire";
    changeTheme();
    generateGrid();
    document.querySelector(".user-input").focus();
});

oceanBtn.addEventListener("click", () => {
    currentTheme = "Ocean";
    changeTheme();
    generateGrid();
    document.querySelector(".user-input").focus();
});

function changeTheme() {
    let theme = currentTheme;
    switch(theme) {
        case "Pencil":
            color1 = "#F4F4F4";
            color2 = "#F4F4F4";
            color3 = "#F4F4F4";
            color4 = "#F4F4F4";
            color5 = "#F4F4F4";
            color6 = "#F4F4F4";
            color7 = "#F4F4F4";
            /* #F4F4F4 lt-gray */
            /* #C4C4C4 gray */
            /* #858585 med-gray*/
            /* #41424C dk-gray*/
            break;
        
        case "Fire":
            color1 = "#C80020";
            /*dk-red*/
            color2 = "#FF1717";
            /*bright-red*/
            color3 = "#FF5217";
            /*red-orange*/
            color4 = "#FF8017";
            /*orange*/
            color5 = "#FFA517";
            /*lt-orange*/
            color6 = "#FFD817";
            /* yellow */
            color7 = "#FFFF00";
            /*lt-yellow*/
            break

        case "Ocean":
            color1 = "#140771";
            /*dk blue*/
            color2 = "#163483";
            /*blue*/
            color3 = "#1857A8";
            /*lt blue*/
            color4 = "#188D9E";
            /*teal*/
            color5 = "#17A589";
            /*pastel green*/
            color6 = "#38993E";
            /*Lime*/
            color7 = "#005906";
            /*dk green*/
            break;


        default:
            alert("Oops, something went wrong with color selection!");
    }
}

function randomizeColor() {
    let color = Math.floor(Math.random() * 7) + 1;
    switch(color) {
        case 1:
            return color1;
            break;
    
        case 2:
            return color2;
            break;

        case 3:
            return color3;
            break;

        case 4:
            return color4;
            break;

        case 5:
            return color5;
            break;
    
        case 6:
            return color6;
            break;
    
        case 7:
            return color7;
            break;
    
        default:
            alert("Oops, something went wrong with color implementation!");
    }
}

function addGridWidth(gridWidth) {
    for(let gridCounter = 0; gridCounter < gridWidth ** 2; gridCounter++) {
        let div = document.createElement("div");
        div.classList.add("tile");
        div.style.cssText = (`min-width: ${100/gridWidth}%; min-height: ${100/gridWidth}%`);
        /*Changes tile size to fit with other tiles */
        let darkness = 0.9;
        div.addEventListener("mouseenter", () => {
            div.style.opacity = `${darkness}`;
            let newColor = randomizeColor();
            div.style.backgroundColor = newColor;
            if(darkness >= 0) {
                darkness -= 0.3;
            }
        });
        /* Changes tile to random themed color when hovered, and 30% closer to black every time after */
        gridHouse.appendChild(div);
    }
}

let gridGenerated = false;
function generateGrid() {
    gridGenerated = true;
    let gridWidth = userInput.value;
    if(typeof(parseInt(gridWidth)) == "number" && gridWidth <= 100 && gridWidth > 0) {
        resetGrid();
        resetBtn.textContent = "Reset/Resize";
        gridHouse.style.backgroundColor = "black";
        addGridWidth(gridWidth);
    } else if(gridWidth == null || gridWidth == 0) {
        gridHouse.style.backgroundColor = "white";
        resetBtn.textContent = "Click to add a sketch grid";
        resetGrid();
        /*Resets to square 1 if the user enters nothing*/
    } else {
        alert("The grid's width can only be a number from 1-100.\nHow wide should the new grid be?");
        userInput.value = "";
        /*Advises the user about size parameters + clears input field. Does not reset grid*/
    }
}

function resetGrid() {
    while(gridHouse.firstChild) {
        gridHouse.removeChild(gridHouse.lastChild);
    }
}

resetBtn.addEventListener("click", () => {
    generateGrid();
});
userInput.addEventListener("keydown", function(e) {
    if(e.code === "Enter") {
        generateGrid();
    } else if(typeof(parseInt(e.code)) == "number" && isNaN(parseInt(e.code)) == false && gridGenerated == true) {
        console.log((parseInt(e.code)));
        console.log(e.code);
        userInput.value = "";
        gridGenerated = false;
    }
})
/*Auto-clears input field when entering a new number, as long as the last
input was a successful grid generation*/

userInput.addEventListener("click", () => {
    userInput.value = "";
})
// Auto-clears input field when clicked

