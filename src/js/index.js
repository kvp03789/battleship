import { shipFactory, Gameboard } from "./game";

const player1Cruiser = shipFactory(4, 4, false);
const player1Battleship = shipFactory(3, 3, false);

const player1Board = new Gameboard("player1");
// player1Board.placeShip(2, 3, "horizontal", "ship1")

player1Board.makeGameBoard(10)
player1Board.placeShip(0, 1, "vertical", player1Cruiser)
player1Board.placeShip(5, 4, "horizontal", player1Battleship)
player1Board.receiveAttack(5, 4);
console.log(player1Board, player1Battleship.getHP());