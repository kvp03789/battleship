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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.container {\\n    background-image: radial-gradient(circle, rgb(180, 180, 180), rgb(46, 46, 46)); \\n    height: 100vh;\\n    width: 100vw;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    gap: 50px;\\n}\\n\\n.hidden{\\n    opacity: (0);\\n}\\n\\n.boards{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 25px;\\n}\\n\\n.game-board{\\n    height: 500px;\\n    width: 500px;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    border: 5px ridge rgb(169, 166, 166);\\n    position: relative;\\n    z-index: 1;\\n}\\n\\n.player-board {\\n    background-image: radial-gradient(rgb(0, 88, 183), rgb(0, 47, 81));\\n}\\n\\n.computer-board {\\n    background-image: radial-gradient(rgb(0, 49, 9), rgb(0, 147, 12));\\n}\\n\\n.grid-square {\\n    height:auto;\\n    width: 100%;\\n}\\n\\n.player-board > * {\\n    border: 1px solid rgb(0, 221, 255);\\n}\\n\\n.computer-board > * {\\n    border: 1px solid rgb(0, 255, 13);\\n}\\n\\n.computer-board > .grid-square:hover{\\n    background-color: rgba(171, 252, 171, 0.241);\\n}\\n\\n.name-plate{\\n    background-color: rgb(169, 166, 166);\\n    color: black;\\n    height:40px;\\n    width: fit-content;\\n    font-size: 2rem;\\n    font-family: 'Sono', sans-serif;\\n    position: absolute;\\n    top: -52px;\\n    left: 30%;\\n    border: 3px ridge rgb(169, 166, 166);\\n}\\n\\n.ship{\\n    background-color:rgb(105, 143, 255)\\n}\\n\\n.ship-damage{\\n    background-color: rgba(255, 0, 0, 0.378)\\n}\\n\\n.miss {\\n    background-color: rgba(243, 245, 127, 0.301);\\n}\\n\\n.game-start-screen{\\n    height: 100vh;\\n    width: 100vw;\\n    /* background-image: radial-gradient(circle, rgb(180, 180, 180), rgb(46, 46, 46));  */\\n    z-index: 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.game-start-screen > .game-board {\\n    background-image: radial-gradient(rgb(0, 88, 183), rgb(0, 47, 81));\\n}\\n\\n.game-start-screen > .game-board > * {\\n    border: 1px solid rgb(0, 221, 255);\\n}\\n\\n.status-plate{\\n    margin-top: 50px;\\n    height: 100px;\\n    width: 50%;\\n    background-color: black;\\n    border: 5px ridge rgb(169, 166, 166);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.message-div > h3 {\\n    color: white;\\n    font-size: 2rem;\\n    font-family: 'Sono', sans-serif;\\n}\\n\\n.hover{\\n    background-color: black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClickEvent\": () => (/* binding */ addClickEvent),\n/* harmony export */   \"clearDom\": () => (/* binding */ clearDom),\n/* harmony export */   \"clearDomAll\": () => (/* binding */ clearDomAll),\n/* harmony export */   \"gameStartScreen\": () => (/* binding */ gameStartScreen),\n/* harmony export */   \"makePlayerBoard\": () => (/* binding */ makePlayerBoard),\n/* harmony export */   \"makeStartScreen\": () => (/* binding */ makeStartScreen),\n/* harmony export */   \"makeStatusPlate\": () => (/* binding */ makeStatusPlate),\n/* harmony export */   \"setStatusPlate\": () => (/* binding */ setStatusPlate)\n/* harmony export */ });\n/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow */ \"./src/js/flow.js\");\n\n\nfunction makePlayerBoard(playerObject){\n    const boardsContainer = document.querySelector(\".boards\");\n    const playerBoard = document.createElement(\"div\");\n    playerBoard.classList.add(\"game-board\");\n    if(playerObject.player !== \"computer\"){\n        playerBoard.classList.add(\"player-board\");\n    } else{\n        playerBoard.classList.add(\"computer-board\")\n    }\n\n    let xCounter = 0;\n    playerObject.gameBoard.forEach(i => { \n        let yCounter = 0;\n        i.forEach(j => {\n            makeGridSquare(playerBoard, j, xCounter, yCounter); \n            yCounter++\n        })\n    xCounter++; \n    })\n\n    boardsContainer.append(playerBoard);\n    makeNamePlate(playerObject, playerBoard);\n}\n\nfunction makeGridSquare(element, arrayIndex, xCounter, yCounter){\n    const square = document.createElement(\"div\");\n    element.append(square);\n    square.classList.add(\"grid-square\");\n    square.setAttribute(\"data-index-x\", `${xCounter}`)\n    square.setAttribute(\"data-index-y\", `${yCounter}`)\n    if(arrayIndex === \"t\"){\n        square.classList.replace(\"grid-square\", \"ship-damage\");\n    } else if(arrayIndex === \"x\"){\n        square.classList.replace(\"grid-square\", \"miss\");\n    }\n    else if(typeof arrayIndex === \"object\"){\n        square.classList.replace(\"grid-square\", \"ship\");\n    } \n}\n\nfunction makeNamePlate(object, parent){\n    const namePlate = document.createElement(\"div\")\n    namePlate.classList.add(\"name-plate\")\n    namePlate.innerText = `${object.player}'s Board`;\n    parent.append(namePlate);\n}\n\nfunction addClickEvent(playerObject, compObject){\n    const emptySquares = document.querySelector(\".computer-board\").childNodes;\n    emptySquares.forEach(ele => {\n        ele.addEventListener(\"click\", (e) => {\n            console.log(`Attacking at ${e.target.dataset.indexX}, ${e.target.dataset.indexY}`);\n            compObject.receiveAttack(e.target.dataset.indexY, e.target.dataset.indexX)\n            console.log(compObject.gameBoard)\n            compObject.isGameOver();\n            _flow__WEBPACK_IMPORTED_MODULE_0__.gameLoop.setTurn(2)\n            _flow__WEBPACK_IMPORTED_MODULE_0__.gameLoop.gameLoop(playerObject, compObject)\n        })\n    })\n    \n}\n\nfunction clearDom(){\n\n    const boardContainer = document.querySelector(\".boards\");\n    while(boardContainer.firstChild){\n        boardContainer.firstChild.remove();\n    }\n    const computerBoard = document.querySelectorAll(\".game-board\");\n    computerBoard.forEach(i => {\n        while(i.firstChild) {\n            i.firstChild.remove();\n        }\n    })\n\n    \n}\n\nfunction clearDomAll(){\n\n    const container = document.querySelector(\".container\");\n    while(container.firstChild){\n        container.firstChild.remove();\n    }\n    const boards = document.createElement(\"div\")\n    boards.classList.add(\"boards\")\n    container.append(boards)\n}\n\nfunction gameStartScreen(playerObject, ship, computerObject) {\n    const container = document.querySelector(\".container\");\n    const gameStartContainer = document.createElement(\"div\");\n    gameStartContainer.classList.add(\"game-start-screen\")\n\n    const playerBoard = document.createElement(\"div\");\n    playerBoard.classList.add(\"game-board\");\n    let xCounter = 0;\n    playerObject.gameBoard.forEach(i => { \n        let yCounter = 0;\n        i.forEach(j => {\n            makeGridSquare(playerBoard, j, xCounter, yCounter); \n            yCounter++\n        })\n    xCounter++; \n    })\n\n\n    \n\n    //ship placement event\n    playerBoard.childNodes.forEach(i => {\n        i.addEventListener(\"click\", (e) => {\n            let x = parseInt(e.target.dataset.indexX, 10);\n            let y = parseInt(e.target.dataset.indexY, 10);\n            playerObject.placeShip(x, y, \"vertical\", ship)\n            _flow__WEBPACK_IMPORTED_MODULE_0__.gameLoop.incrementCounter();\n            _flow__WEBPACK_IMPORTED_MODULE_0__.gameLoop.placeShips(playerObject, computerObject)\n            // console.log(playerObject.gameBoard)\n            // console.log(gameLoop.counter)\n        })\n    })\n\n    gameStartContainer.append(playerBoard)\n    container.prepend(gameStartContainer);\n    makeNamePlate(playerObject, playerBoard)\n    addHoverEvent(ship);\n}\n\nfunction makeStatusPlate(text) {\n    const plate = document.createElement(\"div\");\n    plate.classList.add(\"status-plate\");\n    const container = document.querySelector(\".container\");\n    const messageDiv = document.createElement(\"div\");\n    messageDiv.classList.add(\"message-div\");\n    const message = document.createElement(\"h3\");\n    message.innerText = text;\n\n    messageDiv.append(message);\n    plate.append(messageDiv);\n    container.prepend(plate);\n}\n\nfunction setStatusPlate(words){\n    const messageDiv = document.querySelector(\".message-div\")\n    while (messageDiv.firstChild){\n        messageDiv.firstChild.remove();\n    }\n    const message = document.createElement(\"h3\");\n    message.innerHTML = `${words}`\n}\n\nfunction makeStartScreen(){\n    makeStatusPlate(\"Enter your name\")\n}\n\nfunction addHoverEvent(ship){\n    const playerBoard = document.querySelector(\".game-board\");\n    playerBoard.childNodes.forEach((i) => {\n        i.addEventListener(\"mouseover\", (e) => {\n            // let valStart = parseInt(e.target.dataset.indexX)\n            // let valEnd = parseInt(e.target.dataset.indexX, 10) + ship.size\n            // //document.querySelector(`[data-indexX='${valStart}'`).classList.add(\"hover\")\n            // document.querySelector(`[data-index-x='${valEnd}'`).classList.add(\"hover\")\n            \n            // console.log(document.querySelector(`[data-index-x='${valEnd}'`))\n        })\n    })\n\n    playerBoard.childNodes.forEach((i) => {\n        i.addEventListener(\"mouseout\", (e) => {\n            // let valStart = parseInt(e.target.dataset.indexX)\n            // let valEnd = parseInt(e.target.dataset.indexX, 10) + ship.size\n            // //document.querySelector(`[data-indexX='${valStart}'`).classList.remove(\"hover\")\n            // document.querySelector(`[data-index-x='${valEnd}'`).classList.remove(\"hover\")\n        })\n    })\n}\n\n//# sourceURL=webpack://battleship/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/flow.js":
/*!************************!*\
  !*** ./src/js/flow.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\n\nconst gameLoop = {\n    turn: 1, counter: 0,\n\n    gameLoop(player1, comp){\n        if(this.getTurn() === 1){\n            this.playerTurn(player1, comp)\n        }else {\n            this.computerTurn(player1, comp)\n        }\n    },\n\n    playerTurn(player1, comp){\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearDomAll)();\n        player1.render(player1);\n        console.log(player1, comp)\n        comp.render(comp);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.makeStatusPlate)(\"Player's turn!\")\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addClickEvent)(player1, comp);//add click event to comp's board for making attacks\n    },\n\n    computerTurn(player1, comp){\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearDomAll)();\n        player1.render(player1);\n        comp.render(comp);\n        player1.isGameOver();\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.makeStatusPlate)(\"Computer is taking aim...\")\n        setTimeout(() => {\n            comp.randomAttack(player1);\n            // this.setTurn(1);\n            // this.gameLoop();\n            this.playerTurn(player1, comp)\n        }, 1500);\n        \n    },\n\n    incrementCounter() {\n        return this.counter++\n    },\n\n    updateStatus() {\n\n    },\n\n    initPlayers(player1, comp) {\n        const human = new _game__WEBPACK_IMPORTED_MODULE_0__.Gameboard(`${player1}`);\n        const ai = new _game__WEBPACK_IMPORTED_MODULE_0__.Gameboard(`${comp}`);\n        human.makeGameBoard(10);\n        ai.makeGameBoard(10);\n        human.initPlayerFleet();\n        ai.initPlayerFleet();\n        ai.randomShipPlacement(ai, ai.fleet[0])\n        ai.randomShipPlacement(ai, ai.fleet[1])\n        ai.randomShipPlacement(ai, ai.fleet[2])\n        ai.randomShipPlacement(ai, ai.fleet[3])\n        ai.randomShipPlacement(ai, ai.fleet[4])\n        // ai.fleet.forEach(i => {\n        //     ai.randomShipPlacement(ai, i)\n        // });\n        this.placeShips(human, ai);\n    },\n\n    placeShips(player1, comp){\n        if(this.counter === 5){\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearDomAll)();\n            this.gameLoop(player1, comp);\n        } else {\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearDomAll)();\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.gameStartScreen)(player1, player1.fleet[this.counter], comp);\n            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.makeStatusPlate)(`Place your ${player1.fleet[this.counter].name}!`);\n        }\n        \n        \n\n        // gameStartScreen(player1, playerCarrier);\n        // makeStatusPlate(\"Place your carrier!\");\n        // gameStartScreen(player1, playerBattleship);\n        \n        \n\n        // this.gameLoop(player1, comp);\n\n    },\n\n    setTurn(x) {\n        this.turn = x;\n    },\n\n    getTurn() {\n        return this.turn;\n    },\n\n    initStartScreen(){\n        // makeStartScreen()\n        gameLoop.initPlayers(\"human\", \"computer\");\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/flow.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\nconst shipFactory = (size, hp, sunk, name) => {\n\n    const takeDamage = () => {\n        // hp -= 1;\n        setHP(hp - 1);\n    }\n    const isSunk = () => {\n        if(hp === 0){\n            return true\n        } else {\n            return false\n        }\n    }\n\n    const getHP = () => {\n        return hp\n    }\n\n    const setHP = (newHP) => {\n        hp = newHP;\n    }\n\n    return {size, hp, sunk, name, takeDamage, isSunk, getHP, setHP}\n}\n\n\nclass Gameboard {\n    \n    constructor(player){\n        this.player = player\n        // this.mainGameboard = Array(10).fill(Array(10).fill(null));\n        this.gameBoard = [];\n        this.fleet = [];\n    }\n\n    initPlayerFleet() {\n        const playerCarrier = shipFactory(5, 5, false, \"Carrier\");\n        const playerBattleship = shipFactory(4, 4, false, \"Battleship\");\n        const playerDestroyer = shipFactory(3, 3, false, \"Destroyer\");\n        const playerSubmarine = shipFactory(3, 3, false, \"Submarine\");\n        const playerPatroler = shipFactory(2, 2, false, \"Patroler\");\n        this.fleet.push(playerCarrier, playerBattleship, playerDestroyer, playerSubmarine, playerPatroler)\n    }\n    \n    makeGameBoard(size){\n        const grid = new Array(size);\n\n        for(let i = 0; i < size; i++){\n            grid[i] = new Array(size);\n        }\n        \n        // let counter = 0;\n\n        for(let i = 0; i < size; i++){\n            for(let j = 0; j < size; j++){\n                grid[i][j] = \"empty\";\n                // counter++\n            }\n        }\n\n        this.gameBoard = grid;\n    }\n\n    placeShip(coordX, coordY, orientation, shipName){\n        if(orientation === \"horizontal\"){\n            for(let i = 0; i < shipName.size; i++){\n                if(this.gameBoard[coordX + i][coordY] === \"empty\"){\n                    this.gameBoard[coordX + i][coordY] = shipName\n                }else {\n                    return console.log(\"CANT PUT SHIP HERE DOG\")\n                }\n            }\n        } else if(orientation === \"vertical\"){\n            for(let i = 0; i < shipName.size; i++){\n                if(this.gameBoard[coordX][coordY + i] === \"empty\"){\n                    this.gameBoard[coordX][coordY + i] = shipName\n                }else {\n                    console.log(\"CANT PUT SHIP HERE DOG\")\n                }\n            }  \n        }\n        //this.fleet.push([coordX, coordY]);\n    }\n\n    receiveAttack(coordY, coordX){\n        //let coords = this.gameBoard[coordX][coordY]\n        if(typeof this.gameBoard[coordX][coordY] == \"object\"){\n            this.gameBoard[coordX][coordY].takeDamage();\n            this.gameBoard[coordX][coordY] = \"t\";\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setStatusPlate)(\"Hit!\")\n        } else if (this.gameBoard[coordX][coordY] == \"empty\"){\n            this.gameBoard[coordX][coordY] = \"x\"\n        } else{\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setStatusPlate)(\"You've already attacked here!\");\n        }\n    }\n\n    isGameOver(){\n        let totalBoardHP = 0;\n        this.gameBoard.forEach(i => {\n            i.forEach(j => {\n                if(typeof j === \"object\"){\n                    totalBoardHP += 1;\n                }\n            })\n        })\n        if(totalBoardHP === 0){\n            console.log(\"GG!\")\n        }else {\n            console.log(`HP remaining: ${totalBoardHP}`)\n        }\n    }\n\n    render(object){\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.makePlayerBoard)(object);\n    }\n\n    randomAttack(opponent){       //randomly select attack for ai\n        let x = Math.floor((Math.random() * 9) + 1);\n        let y = Math.floor((Math.random() * 9) + 1);\n        opponent.receiveAttack(y, x)\n        console.log(`Computer attacks player at ${x}, ${y}`)\n    }\n\n    randomShipPlacement(object, ship){       //generate random valid ship placements for ai\n        let orientation = Math.random() >= 0.5 ? \"vertical\" : \"horizontal\";\n        let x;\n        let y;\n\n        if (orientation === \"horizontal\"){\n            x = Math.abs(Math.floor(Math.random() * (9 - ship.size)));\n            y = Math.floor(Math.random() * 9);\n            if(this.checkOtherShips(x, y, orientation, ship) && this.checkValidPosition(x, y, orientation, ship)){\n                object.placeShip(x, y, orientation, ship)\n            }else this.randomShipPlacement(object, ship);\n            \n            \n        }else if (orientation === \"vertical\"){\n            x = Math.floor(Math.random() * 9);\n            y = Math.abs(Math.floor(Math.random() * (9 - ship.size)));\n            if(this.checkOtherShips(x, y, orientation, ship) && this.checkValidPosition(x, y, orientation, ship)){\n                object.placeShip(x, y, orientation, ship)\n            }else this.randomShipPlacement(object, ship);\n        }\n        console.log(x, y)\n    }\n\n    checkValidPosition(x, y, orientation, ship) {\n        //console.log(x, y, orientation, ship)\n        if(orientation === \"horizontal\"){\n            if(this.gameBoard[x][y] && this.gameBoard[x + ship.size][y]){\n                return true\n            }else {\n                return false\n            }\n        } else if(orientation === \"vertical\"){\n            if (this.gameBoard[x][y] && this.gameBoard[x][y + ship.size]){\n                return true\n            }else {\n                return false\n            }\n        }\n    }\n\n    checkOtherShips(x, y, orientation, ship) {\n            for(let i = 0; i < ship.size; i++){\n                if(orientation === \"vertical\"){\n                    if(this.gameBoard[x + i][y] !== \"empty\" || this.gameBoard[x][y] !== \"empty\"){\n                        return false\n                    }else {\n                        return true\n                    }\n                } else if(orientation === \"horizontal\"){\n                    if (this.gameBoard[x][y + i] !== \"empty\" || this.gameBoard[x][y] !== \"empty\"){\n                        return false\n                    }else {\n                        return true\n                    }\n                }\n            }\n        }\n\n        checkBlankSpace(x, y, orientation, ship){\n            \n        }\n\n    }\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow */ \"./src/js/flow.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\n\n\n// gameLoop.initStartScreen()\n_flow__WEBPACK_IMPORTED_MODULE_0__.gameLoop.initPlayers(\"human\", \"computer\");\n\n\n//# sourceURL=webpack://battleship/./src/js/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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