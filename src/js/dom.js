import { gameLoop } from './flow'

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
    namePlate.innerText = `${object.player}'s Board`;
    parent.append(namePlate);
}

export function addClickEvent(playerObject, compObject){
    const emptySquares = document.querySelector(".computer-board").childNodes;
    emptySquares.forEach(ele => {
        ele.addEventListener("click", (e) => {
            console.log(`Attacking at ${e.target.dataset.indexX}, ${e.target.dataset.indexY}`);
            compObject.receiveAttack(e.target.dataset.indexY, e.target.dataset.indexX)
            console.log(compObject.gameBoard)
            compObject.isGameOver();
            gameLoop.setTurn(2)
            gameLoop.gameLoop(playerObject, compObject)
        })
    })
    
}

export function clearDom(){

    const boardContainer = document.querySelector(".boards");
    while(boardContainer.firstChild){
        boardContainer.firstChild.remove();
    }
    const computerBoard = document.querySelectorAll(".game-board");
    computerBoard.forEach(i => {
        while(i.firstChild) {
            i.firstChild.remove();
        }
    })

    
}

export function clearDomAll(){

    const container = document.querySelector(".container");
    while(container.firstChild){
        container.firstChild.remove();
    }
    const boards = document.createElement("div")
    boards.classList.add("boards")
    container.append(boards)
}

export function gameStartScreen(playerObject, ship, computerObject) {
    const container = document.querySelector(".container");
    const gameStartContainer = document.createElement("div");
    gameStartContainer.classList.add("game-start-screen")

    const playerBoard = document.createElement("div");
    playerBoard.classList.add("game-board");
    let xCounter = 0;
    playerObject.gameBoard.forEach(i => { 
        let yCounter = 0;
        i.forEach(j => {
            makeGridSquare(playerBoard, j, xCounter, yCounter); 
            yCounter++
        })
    xCounter++; 
    })


    

    //ship placement event
    playerBoard.childNodes.forEach(i => {
        i.addEventListener("click", (e) => {
            let x = parseInt(e.target.dataset.indexX, 10);
            let y = parseInt(e.target.dataset.indexY, 10);
            playerObject.placeShip(x, y, "vertical", ship)
            gameLoop.incrementCounter();
            gameLoop.placeShips(playerObject, computerObject)
            // console.log(playerObject.gameBoard)
            // console.log(gameLoop.counter)
        })
    })

    gameStartContainer.append(playerBoard)
    container.prepend(gameStartContainer);
    makeNamePlate(playerObject, playerBoard)
    addHoverEvent(ship);
}

export function makeStatusPlate(text) {
    const plate = document.createElement("div");
    plate.classList.add("status-plate");
    const container = document.querySelector(".container");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    const message = document.createElement("h3");
    message.innerText = text;

    messageDiv.append(message);
    plate.append(messageDiv);
    container.prepend(plate);
}

export function setStatusPlate(words){
    const messageDiv = document.querySelector(".message-div")
    while (messageDiv.firstChild){
        messageDiv.firstChild.remove();
    }
    const message = document.createElement("h3");
    message.innerHTML = `${words}`
}

export function makeStartScreen(){
    makeStatusPlate("Enter your name")
}

function addHoverEvent(ship){
    const playerBoard = document.querySelector(".game-board");
    playerBoard.childNodes.forEach((i) => {
        i.addEventListener("mouseover", (e) => {
            // let valStart = parseInt(e.target.dataset.indexX)
            // let valEnd = parseInt(e.target.dataset.indexX, 10) + ship.size
            // //document.querySelector(`[data-indexX='${valStart}'`).classList.add("hover")
            // document.querySelector(`[data-index-x='${valEnd}'`).classList.add("hover")
            
            // console.log(document.querySelector(`[data-index-x='${valEnd}'`))
        })
    })

    playerBoard.childNodes.forEach((i) => {
        i.addEventListener("mouseout", (e) => {
            // let valStart = parseInt(e.target.dataset.indexX)
            // let valEnd = parseInt(e.target.dataset.indexX, 10) + ship.size
            // //document.querySelector(`[data-indexX='${valStart}'`).classList.remove("hover")
            // document.querySelector(`[data-index-x='${valEnd}'`).classList.remove("hover")
        })
    })
}