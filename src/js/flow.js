import { shipFactory, Gameboard } from "./game";
import { clearDom, clearDomAll, addClickEvent, gameStartScreen, makeStatusPlate } from "./dom";

export const gameLoop = {
    turn: 1, counter: 0,

    gameLoop(player1, comp){
        if(this.getTurn() === 1){
            this.playerTurn(player1, comp)
        }else {
            this.computerTurn(player1, comp)
        }
    },

    playerTurn(player1, comp){
        clearDomAll();
        player1.render(player1);
        console.log(player1, comp)
        comp.render(comp);
        makeStatusPlate("Player's turn!")
        addClickEvent(player1, comp);//add click event to comp's board for making attacks
    },

    computerTurn(player1, comp){
        clearDomAll();
        player1.render(player1);
        comp.render(comp);
        player1.isGameOver();
        makeStatusPlate("Computer is taking aim...")
        setTimeout(() => {
            comp.randomAttack(player1);
            // this.setTurn(1);
            // this.gameLoop();
            this.playerTurn(player1, comp)
        }, 1500);
        
    },

    incrementCounter() {
        return this.counter++
    },

    updateStatus() {

    },

    initPlayers(player1, comp) {
        const human = new Gameboard(`${player1}`);
        const ai = new Gameboard(`${comp}`);
        human.makeGameBoard(10);
        ai.makeGameBoard(10);
        human.initPlayerFleet();
        ai.initPlayerFleet();
        ai.randomShipPlacement(ai, ai.fleet[0])
        ai.randomShipPlacement(ai, ai.fleet[1])
        ai.randomShipPlacement(ai, ai.fleet[2])
        ai.randomShipPlacement(ai, ai.fleet[3])
        ai.randomShipPlacement(ai, ai.fleet[4])
        // ai.fleet.forEach(i => {
        //     ai.randomShipPlacement(ai, i)
        // });
        this.placeShips(human, ai);
    },

    placeShips(player1, comp){
        if(this.counter === 5){
            clearDomAll();
            this.gameLoop(player1, comp);
        } else {
            clearDomAll();
            gameStartScreen(player1, player1.fleet[this.counter], comp);
            makeStatusPlate(`Place your ${player1.fleet[this.counter].name}!`);
        }
        
        

        // gameStartScreen(player1, playerCarrier);
        // makeStatusPlate("Place your carrier!");
        // gameStartScreen(player1, playerBattleship);
        
        

        // this.gameLoop(player1, comp);

    },

    setTurn(x) {
        this.turn = x;
    },

    getTurn() {
        return this.turn;
    },

    initStartScreen(){
        // makeStartScreen()
        gameLoop.initPlayers("human", "computer");
    }
}


