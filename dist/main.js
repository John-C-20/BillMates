/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: currentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentState", function() { return currentState; });
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/modal.scss */ "./src/styles/modal.scss");
/* harmony import */ var _scripts_guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/guest */ "./src/scripts/guest.js");
/* harmony import */ var _scripts_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/item */ "./src/scripts/item.js");
/* harmony import */ var _scripts_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/modals */ "./src/scripts/modals.js");






var currentState = {
  items: [],
  guests: [],
  subtotal: 0.00,
  tip: 0.00,
  tax: 0.00,
  total: 0.00
};
document.querySelector("button#items").addEventListener("click", function () {
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["addItemModal"]();
  document.querySelector("button#submit").addEventListener("click", saveItem);
});
document.querySelector("button#users").addEventListener("click", function () {
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["addGuestModal"]();
  document.querySelector("button#submit").addEventListener("click", saveUser);
});

function saveItem(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  console.log(form);
  var formData = new FormData(form);
  var itemName = formData.get("item-name");
  var itemPrice = formData.get("item-price");
  var item = new _scripts_item__WEBPACK_IMPORTED_MODULE_4__["default"](itemName, itemPrice);
  console.log(item);
  currentState.items.push(item);
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
  console.log(currentState);
  addItemToBill(item);
}

function saveUser(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  console.log(form);
  var formData = new FormData(form);
  var guestName = formData.get("guest-name");
  var guest = new _scripts_guest__WEBPACK_IMPORTED_MODULE_3__["default"](guestName);
  console.log(guest);
  currentState.guests.push(guest);
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
  console.log(currentState);
  addGuestToTable(guest);
}

function addItemToBill(item) {
  var itemList = document.querySelector("table#items");
  var tr = document.createElement('tr');
  tr.innerHTML = "\n    <td class=\"left\" id=\"item-name\">\n    ".concat(item.name, "\n    </td>\n    <td class=\"right\" id=\"item-price\">\n    $").concat(Number(item.price).toFixed(2), "      \n    </td> \n    ");
  itemList.appendChild(tr);
  currentState.subtotal += Number(item.price);
  var subtotal = document.querySelector(".subtotal > td.right");
  console.log(subtotal);
  console.log(currentState.subtotal);
  subtotal.innerHTML = "$".concat(currentState.subtotal.toFixed(2));
}

function addGuestToTable(guest) {
  var list = document.querySelector("div.content#users");
  var div = document.createElement("div");
  div.className = "box";
  div.id = "user";
  div.innerHTML = "\n        <div class=\"header row\" id=\"users\">".concat(guest.name, "</div>\n        <div class=\"content\" id=\"user\">\n            <table id=\"users\">\n                <tr>\n                    <th>Item</th>\n                    <th>Price</th>\n                </tr>\n            </table>\n        </div>\n        <div class=\"footer\" id=\"user\">\n            <table>\n                <tr class=\"subtotal\">\n                    <td>Subtotal</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n\n                <tr class=\"tip\">\n                    <td>Tip</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n                <tr class=\"tax\">\n                    <td>Tax</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n                <tr class=\"total\">\n                    <td>Total</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n            </table>\n        </div>\n    ");
  list.appendChild(div);
} // window.currentState = currentState

/***/ }),

/***/ "./src/scripts/guest.js":
/*!******************************!*\
  !*** ./src/scripts/guest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Guest; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Guest = function Guest(name) {
  _classCallCheck(this, Guest);

  this.name = name;
  this.items = [];
};



/***/ }),

/***/ "./src/scripts/item.js":
/*!*****************************!*\
  !*** ./src/scripts/item.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = function Item(name, price) {
  _classCallCheck(this, Item);

  this.name = name;
  this.price = price;
  this.buyers = [];
};



/***/ }),

/***/ "./src/scripts/modals.js":
/*!*******************************!*\
  !*** ./src/scripts/modals.js ***!
  \*******************************/
/*! exports provided: closeModal, addItemModal, addGuestModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemModal", function() { return addItemModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGuestModal", function() { return addGuestModal; });
window.onclick = function (e) {
  // close modal by clicking anywhere on the modal screen
  if (e.target.matches('.modal-screen')) {
    closeModal();
  }
};

function closeModal() {
  var el = document.querySelector('.modal');
  el.parentNode.removeChild(el);
}
function addItemModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"item-name\">\n                    <label for=\"item-name\">Item Name</label>\n                    <input type=\"text\" id=\"item-name\" name=\"item-name\" required>\n                </div>\n                <div id=\"item-price\">\n                    <label for=\"item-price\">Price</label>\n                    <input type=\"text\" id=\"item-price\" name=\"item-price\" required>\n                </div>\n                <div>\n                    <button id=\"submit\"\">Add Item</button>\n                </div>\n            </form>\n        </div>\n    ";
  document.body.appendChild(div);
}
function addGuestModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"guest-name\">\n                    <label for=\"guest-name\">Guest Name</label>\n                    <input type=\"text\" id=\"guest-name\" name=\"guest-name\" value=\"Untitled\" placeholder=\"Enter a name\" required>\n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Guest</button>\n                </div>\n            </form>\n        </div>\n    ";
  document.body.appendChild(div);
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/modal.scss":
/*!*******************************!*\
  !*** ./src/styles/modal.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsIml0ZW0iLCJJdGVtIiwicHVzaCIsImFkZEl0ZW1Ub0JpbGwiLCJndWVzdE5hbWUiLCJndWVzdCIsIkd1ZXN0IiwiYWRkR3Vlc3RUb1RhYmxlIiwiaXRlbUxpc3QiLCJ0ciIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJuYW1lIiwiTnVtYmVyIiwicHJpY2UiLCJ0b0ZpeGVkIiwiYXBwZW5kQ2hpbGQiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJidXllcnMiLCJ3aW5kb3ciLCJvbmNsaWNrIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3NlTW9kYWwiLCJlbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFkZEl0ZW1Nb2RhbCIsImJvZHkiLCJhZGRHdWVzdE1vZGFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7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QixDQUFaO0FBQ0FRLEtBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxLQUFHLENBQUNQLFNBQUo7QUFtQkEzQixVQUFRLENBQUMrQyxJQUFULENBQWNmLFdBQWQsQ0FBMEJFLEdBQTFCO0FBQ0g7QUFFTSxTQUFTYyxhQUFULEdBQXlCO0FBQzVCLE1BQU1kLEdBQUcsR0FBR2xDLFFBQVEsQ0FBQzBCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBUSxLQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsS0FBRyxDQUFDUCxTQUFKO0FBZ0JBM0IsVUFBUSxDQUFDK0MsSUFBVCxDQUFjZixXQUFkLENBQTBCRSxHQUExQjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3pERDtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IEd1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ3Vlc3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL3NjcmlwdHMvaXRlbVwiO1xuaW1wb3J0ICogYXMgTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9tb2RhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZ3Vlc3RzOiBbXSxcbiAgICBzdWJ0b3RhbDogMC4wMCxcbiAgICB0aXA6IDAuMDAsXG4gICAgdGF4OiAwLjAwLFxuICAgIHRvdGFsOiAwLjAwXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jaXRlbXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRJdGVtTW9kYWwoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSXRlbSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN1c2Vyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEd1ZXN0TW9kYWwoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVXNlcik7XG5cbn0pO1xuXG5mdW5jdGlvbiBzYXZlSXRlbShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBpdGVtTmFtZSA9IGZvcm1EYXRhLmdldChcIml0ZW0tbmFtZVwiKVxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGZvcm1EYXRhLmdldChcIml0ZW0tcHJpY2VcIilcbiAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0oaXRlbU5hbWUsIGl0ZW1QcmljZSlcbiAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgIGN1cnJlbnRTdGF0ZS5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlKVxuICAgIGFkZEl0ZW1Ub0JpbGwoaXRlbSlcbn1cblxuZnVuY3Rpb24gc2F2ZVVzZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgZ3Vlc3ROYW1lID0gZm9ybURhdGEuZ2V0KFwiZ3Vlc3QtbmFtZVwiKVxuICAgIGNvbnN0IGd1ZXN0ID0gbmV3IEd1ZXN0KGd1ZXN0TmFtZSlcbiAgICBjb25zb2xlLmxvZyhndWVzdClcbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLnB1c2goZ3Vlc3QpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlKVxuICAgIGFkZEd1ZXN0VG9UYWJsZShndWVzdClcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvQmlsbChpdGVtKXtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZSNpdGVtc1wiKSBcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICB0ci5pbm5lckhUTUwgPSBgXG4gICAgPHRkIGNsYXNzPVwibGVmdFwiIGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBpdGVtTGlzdC5hcHBlbmRDaGlsZCh0cilcbiAgICBcbiAgICBjdXJyZW50U3RhdGUuc3VidG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpXG4gICAgY29uc3Qgc3VidG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YnRvdGFsID4gdGQucmlnaHRcIikgXG4gICAgY29uc29sZS5sb2coc3VidG90YWwpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlLnN1YnRvdGFsKVxuICAgIHN1YnRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUuc3VidG90YWwudG9GaXhlZCgyKX1gXG59XG5cbmZ1bmN0aW9uIGFkZEd1ZXN0VG9UYWJsZShndWVzdCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29udGVudCN1c2Vyc1wiKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiYm94XCJcbiAgICBkaXYuaWQgPSBcInVzZXJcIlxuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgcm93XCIgaWQ9XCJ1c2Vyc1wiPiR7Z3Vlc3QubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInVzZXJzXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCIgaWQ9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwic3VidG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlN1YnRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRpcFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VGlwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRheDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdilcbn1cblxuLy8gd2luZG93LmN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdOyAgXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlOyBcbiAgICAgICAgdGhpcy5idXllcnMgPSBbXTsgXG4gICAgfVxufSIsIndpbmRvdy5vbmNsaWNrID0gZSA9PiB7XG4gICAgLy8gY2xvc2UgbW9kYWwgYnkgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIG1vZGFsIHNjcmVlblxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcubW9kYWwtc2NyZWVuJykpIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtTW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+SXRlbSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBuYW1lPVwiaXRlbS1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tcHJpY2VcIj5QcmljZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1wcmljZVwiIG5hbWU9XCJpdGVtLXByaWNlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR3Vlc3RNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ3Vlc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ3Vlc3QtbmFtZVwiPkd1ZXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImd1ZXN0LW5hbWVcIiBuYW1lPVwiZ3Vlc3QtbmFtZVwiIHZhbHVlPVwiVW50aXRsZWRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBHdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==