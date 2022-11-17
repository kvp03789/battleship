import { makePlayerBoard, setStatusPlate } from "./dom";

export const shipFactory = (size, hp, sunk, name) => {

    const takeDamage = () => {
        // hp -= 1;
        setHP(hp - 1);
    }
    const isSunk = () => {
        if(hp === 0){
            return true
        } else {
            return false
        }
    }

    const getHP = () => {
        return hp
    }

    const setHP = (newHP) => {
        hp = newHP;
    }

    return {size, hp, sunk, name, takeDamage, isSunk, getHP, setHP}
}


export class Gameboard {
    
    constructor(player){
        this.player = player
        // this.mainGameboard = Array(10).fill(Array(10).fill(null));
        this.gameBoard = [];
        this.fleet = [];
    }

    initPlayerFleet() {
        const playerCarrier = shipFactory(5, 5, false, "Carrier");
        const playerBattleship = shipFactory(4, 4, false, "Battleship");
        const playerDestroyer = shipFactory(3, 3, false, "Destroyer");
        const playerSubmarine = shipFactory(3, 3, false, "Submarine");
        const playerPatroler = shipFactory(2, 2, false, "Patroler");
        this.fleet.push(playerCarrier, playerBattleship, playerDestroyer, playerSubmarine, playerPatroler)
    }
    
    makeGameBoard(size){
        const grid = new Array(size);

        for(let i = 0; i < size; i++){
            grid[i] = new Array(size);
        }
        
        // let counter = 0;

        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                grid[i][j] = "empty";
                // counter++
            }
        }

        this.gameBoard = grid;
    }

    placeShip(coordX, coordY, orientation, shipName){
        if(orientation === "horizontal"){
            for(let i = 0; i < shipName.size; i++){
                if(this.gameBoard[coordX + i][coordY] === "empty"){
                    this.gameBoard[coordX + i][coordY] = shipName
                }else {
                    return console.log("CANT PUT SHIP HERE DOG")
                }
            }
        } else if(orientation === "vertical"){
            for(let i = 0; i < shipName.size; i++){
                if(this.gameBoard[coordX][coordY + i] === "empty"){
                    this.gameBoard[coordX][coordY + i] = shipName
                }else {
                    console.log("CANT PUT SHIP HERE DOG")
                }
            }  
        }
        //this.fleet.push([coordX, coordY]);
    }

    receiveAttack(coordY, coordX){
        //let coords = this.gameBoard[coordX][coordY]
        if(typeof this.gameBoard[coordX][coordY] == "object"){
            this.gameBoard[coordX][coordY].takeDamage();
            this.gameBoard[coordX][coordY] = "t";
            setStatusPlate("Hit!")
        } else if (this.gameBoard[coordX][coordY] == "empty"){
            this.gameBoard[coordX][coordY] = "x"
        } else{
            setStatusPlate("You've already attacked here!");
        }
    }

    isGameOver(){
        let totalBoardHP = 0;
        this.gameBoard.forEach(i => {
            i.forEach(j => {
                if(typeof j === "object"){
                    totalBoardHP += 1;
                }
            })
        })
        if(totalBoardHP === 0){
            console.log("GG!")
        }else {
            console.log(`HP remaining: ${totalBoardHP}`)
        }
    }

    render(object){
        makePlayerBoard(object);
    }

    randomAttack(opponent){       //randomly select attack for ai
        let x = Math.floor((Math.random() * 9) + 1);
        let y = Math.floor((Math.random() * 9) + 1);
        opponent.receiveAttack(y, x)
        console.log(`Computer attacks player at ${x}, ${y}`)
    }

    randomShipPlacement(object, ship){       //generate random valid ship placements for ai
        let orientation = Math.random() >= 0.5 ? "vertical" : "horizontal";
        let x;
        let y;

        if (orientation === "horizontal"){
            x = Math.abs(Math.floor(Math.random() * (9 - ship.size)));
            y = Math.floor(Math.random() * 9);
            if(this.checkOtherShips(x, y, orientation, ship) && this.checkValidPosition(x, y, orientation, ship)){
                object.placeShip(x, y, orientation, ship)
            }else this.randomShipPlacement(object, ship);
            
            
        }else if (orientation === "vertical"){
            x = Math.floor(Math.random() * 9);
            y = Math.abs(Math.floor(Math.random() * (9 - ship.size)));
            if(this.checkOtherShips(x, y, orientation, ship) && this.checkValidPosition(x, y, orientation, ship)){
                object.placeShip(x, y, orientation, ship)
            }else this.randomShipPlacement(object, ship);
        }
    }

    checkValidPosition(x, y, orientation, ship) {
        console.log(x, y, orientation, ship)
        if(orientation === "horizontal"){
            if(this.gameBoard[x][y] && this.gameBoard[x + ship.size][y]){
                return true
            }else {
                return false
            }
        } else if(orientation === "vertical"){
            if (this.gameBoard[x][y] && this.gameBoard[x + ship.size][y]){
                return true
            }else {
                return false
            }
        }
    }

    checkOtherShips(x, y, orientation, ship) {
            let result = true;
            for(let i = 0; i < ship.size; i++){
                if(orientation === "horizontal"){
                    if(this.gameBoard[x][y] == false || this.gameBoard[x + ship.size][y] == false){
                        return false
                    }else {
                        return true
                    }
                } else if(orientation === "vertical"){
                    if (this.gameBoard[x][y] == false || this.gameBoard[x][y + ship.size] == false){
                        return false
                    }else {
                        return true
                    }
                }
            }
        }

        checkBlankSpace(x, y, orientation, ship){
            
        }

    }





