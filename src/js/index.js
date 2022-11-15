
import { gameLoop } from "./flow";
import "../css/style.css"

// const player1Cruiser = shipFactory(4, 4, false);
// const player1Battleship = shipFactory(3, 3, false);

// const compCruiser = shipFactory(4, 4);
// const compBattleship = shipFactory(3, 3);

// const player1Board = new Gameboard("player1");
// const computerBoard = new Gameboard("computer");
// player1Board.placeShip(2, 3, "horizontal", "ship1")


// player1Board.makeGameBoard(10)
// computerBoard.makeGameBoard(10)
// player1Board.placeShip(0, 1, "vertical", player1Cruiser)
// player1Board.placeShip(5, 4, "horizontal", player1Battleship)
// computerBoard.placeShip(6, 4, "vertical", compCruiser);
// computerBoard.placeShip(2, 2, "horizontal", compBattleship);
// player1Board.receiveAttack(5, 4);
// player1Board.receiveAttack(6, 4);
// player1Board.receiveAttack(7, 4);
// player1Board.receiveAttack(0, 1);
// player1Board.receiveAttack(0, 2);
// player1Board.receiveAttack(0, 3);
// player1Board.render(player1Board);
// computerBoard.render(computerBoard);
// player1Board.receiveAttack(3, 3);
// console.log(player1Board, player1Battleship.getHP(), player1Battleship.isSunk());
// console.log(player1Board.isGameOver());
// console.log(player1Board.isGameOver());

gameLoop.initPlayers("human", "computer");
