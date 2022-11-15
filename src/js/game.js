import { makePlayerBoard } from "./dom";

export const shipFactory = (size, hp, sunk) => {

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

    return {size, hp, sunk, takeDamage, isSunk, getHP, setHP}
}


export class Gameboard {
    
    constructor(player){
        this.player = player
        // this.mainGameboard = Array(10).fill(Array(10).fill(null));
        this.gameBoard = [];
        this.shipList = [];
    }
    
    makeGameBoard(size){
        const grid = new Array(size);

        for(let i = 0; i < size; i++){
            grid[i] = new Array(size);
        }
        
        let counter = 0;

        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                grid[i][j] = counter;
                counter++
            }
        }

        this.gameBoard = grid;
    }

    placeShip(coordX, coordY, orientation, shipName){
        if(orientation === "horizontal"){
            for(let i = 0; i < shipName.size; i++){
                this.gameBoard[coordX + i][coordY] = shipName
            }
        } else if(orientation === "vertical"){
            for(let i = 0; i < shipName.size; i++){
                this.gameBoard[coordX][coordY + i] = shipName
            }  
        }
        this.shipList.push([coordX, coordY]);
    }

    receiveAttack(coordX, coordY){
        const coords = this.gameBoard[coordX][coordY]
        if(typeof coords === "object"){
            coords.takeDamage();
            coords = "t";
        } else if (typeof coords === "number"){
            coords = "x"
        } else{
            console.log("You've already attacked here!");
        }
    }

    isGameOver(){
        let totalBoardHP = 0;
        // this.shipList.forEach((i) => {
        //     totalBoardHP += this.gameBoard[i[0]][i[1]].getHP();
        // })
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
            return
        }
    }

    render(object){
        makePlayerBoard(object);
    }
}




