import { shipFactory, Gameboard } from "./game";
import { clearDom } from "./dom";

export const gameLoop = {
    turn: 1,

    gameLoop(player1, comp){
        //clearDom();
        player1.render(player1);
        comp.render(comp);
    },

    updateStatus() {

    },

    initPlayers(player1, comp) {
        const human = new Gameboard(`${player1}`);
        const ai = new Gameboard(`${comp}`);
        human.makeGameBoard(10);
        ai.makeGameBoard(10);
        console.log(human, ai)
        this.placeShips(human, ai);
    },

    placeShips(player1, comp){
        //mock ship placement
        const player1Cruiser = shipFactory(4, 4, false);
        const player1Battleship = shipFactory(3, 3, false);
        const compCruiser = shipFactory(4, 4);
        const compBattleship = shipFactory(3, 3);

        player1.placeShip(0, 1, "vertical", player1Cruiser)
        player1.placeShip(5, 4, "horizontal", player1Battleship)
        comp.placeShip(6, 4, "vertical", compCruiser);
        comp.placeShip(2, 2, "horizontal", compBattleship);

        this.gameLoop(player1, comp);

    },

    changeTurn(x) {
        this.turn = x;
    }
}


