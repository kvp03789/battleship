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
    }
    
    makeGameBoard(size){
        const grid = new Array(size);

        for(let i = 0; i < size; i++){
            grid[i] = new Array(size);
        }
        
        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                grid[i][j] = "empty"
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
    }

    receiveAttack(coordX, coordY){
        if(this.gameBoard[coordX][coordY] != "empty"){
            this.gameBoard[coordX][coordY].takeDamage();
        }
    }

}
