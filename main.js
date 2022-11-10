/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nconst shipFactory = (size, hp, sunk) => {\n\n    const takeDamage = () => {\n        // hp -= 1;\n        setHP(hp - 1);\n    }\n    const isSunk = () => {\n        if(hp === 0){\n            return true\n        } else {\n            return false\n        }\n    }\n\n    const getHP = () => {\n        return hp\n    }\n\n    const setHP = (newHP) => {\n        hp = newHP;\n    }\n\n    return {size, hp, sunk, takeDamage, isSunk, getHP, setHP}\n}\n\n\nclass Gameboard {\n    \n    constructor(player){\n        this.player = player\n        // this.mainGameboard = Array(10).fill(Array(10).fill(null));\n        this.gameBoard = [];\n    }\n    \n    makeGameBoard(size){\n        const grid = new Array(size);\n\n        for(let i = 0; i < size; i++){\n            grid[i] = new Array(size);\n        }\n        \n        for(let i = 0; i < size; i++){\n            for(let j = 0; j < size; j++){\n                grid[i][j] = \"empty\"\n            }\n        }\n\n        this.gameBoard = grid;\n    }\n\n    placeShip(coordX, coordY, orientation, shipName){\n        if(orientation === \"horizontal\"){\n            for(let i = 0; i < shipName.size; i++){\n                this.gameBoard[coordX + i][coordY] = shipName\n            }\n        } else if(orientation === \"vertical\"){\n            for(let i = 0; i < shipName.size; i++){\n                this.gameBoard[coordX][coordY + i] = shipName\n            }  \n        }\n    }\n\n    receiveAttack(coordX, coordY){\n        if(this.gameBoard[coordX][coordY] != \"empty\"){\n            this.gameBoard[coordX][coordY].takeDamage();\n        }\n    }\n\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n\n\nconst player1Cruiser = (0,_game__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4, 4, false);\nconst player1Battleship = (0,_game__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3, 3, false);\n\nconst player1Board = new _game__WEBPACK_IMPORTED_MODULE_0__.Gameboard(\"player1\");\n// player1Board.placeShip(2, 3, \"horizontal\", \"ship1\")\n\nplayer1Board.makeGameBoard(10)\nplayer1Board.placeShip(0, 1, \"vertical\", player1Cruiser)\nplayer1Board.placeShip(5, 4, \"horizontal\", player1Battleship)\nplayer1Board.receiveAttack(5, 4);\nconsole.log(player1Board, player1Battleship.getHP());\n\n//# sourceURL=webpack://battleship/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;