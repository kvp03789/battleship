

export function makePlayerBoard(playerObject){
    const boardsContainer = document.querySelector(".boards");
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("game-board");
    if(playerObject.player !== "computer"){
        playerBoard.classList.add("player-board");
    } else{
        playerBoard.classList.add("computer-board")
    }

    let xCounter = 0;
    playerObject.gameBoard.forEach(i => { 
        let yCounter = 0;
        i.forEach(j => {
            makeGridSquare(playerBoard, j, xCounter, yCounter); 
            yCounter++
        })
        xCounter++; 
    })
    boardsContainer.append(playerBoard);
    makeNamePlate(playerObject, playerBoard);
    addClickEvent(playerObject);
}

function makeGridSquare(element, arrayIndex, xCounter, yCounter){
    const square = document.createElement("div");
    element.append(square);
    square.classList.add("grid-square");
    square.setAttribute("data-index-x", `${xCounter}`)
    square.setAttribute("data-index-y", `${yCounter}`)
    if(arrayIndex === "t"){
        square.classList.replace("grid-square", "ship-damage");
    } else if(arrayIndex === "x"){
        square.classList.replace("grid-square", "miss");
    }
    else if(typeof arrayIndex === "object"){
        square.classList.replace("grid-square", "ship");
    } 
}

function makeNamePlate(object, parent){
    const namePlate = document.createElement("div")
    namePlate.classList.add("name-plate")
    namePlate.innerText = `${object.player}`;
    parent.append(namePlate);
}

function addClickEvent(playerObject){
    const emptySquare = document.querySelectorAll(".grid-square");
    emptySquare.forEach(ele => {
        ele.addEventListener("click", (e) => {
            console.log(`Attacking at ${e.target.dataset.indexX}, ${e.target.dataset.indexY}`);
        })
    })
}

export function clearDom(){
    const bothGameBoards = document.querySelector(".game-board");
    while(bothGameBoards.firstChild){
        bothGameBoards.remove();
    }
}

