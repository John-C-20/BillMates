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
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["addItemModal"](currentState);
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
  var guest = formData.get("item-guest");
  var item = new _scripts_item__WEBPACK_IMPORTED_MODULE_4__["default"](itemName, itemPrice);
  console.log(item);
  currentState.items.push(item);
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
  console.log(currentState);
  addItemToBill(item);
  addItemToGuest(item, guest);
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

function addItemToGuest(item, guest) {
  var user = currentState.guests.find(function (u) {
    return u.name == guest;
  });
  user.items.push(item);
  var guestBill = document.querySelector(".".concat(guest));
  var tr = document.createElement("tr");
  tr.innerHTML = "\n    <td class=\"left\" id=\"item-name\">\n        ".concat(item.name, "\n    </td>\n    <td class=\"right\" id=\"item-price\">\n        $").concat(Number(item.price).toFixed(2), "      \n    </td> \n    ");
  guestBill.appendChild(tr);
  var subtotal = 0;
  user.items.forEach(function (item) {
    return subtotal += Number(item.price);
  });
  console.log(subtotal);
  var subtotalEl = document.querySelector(".subtotal.".concat(guest, " > td.right"));
  subtotalEl.innerHTML = "$".concat(subtotal.toFixed(2));
}

function addGuestToTable(guest) {
  var list = document.querySelector("div.content#users");
  var div = document.createElement("div");
  div.className = "box";
  div.id = "user";
  div.innerHTML = "\n        <div class=\"header row\" id=\"users\">".concat(guest.name, "</div>\n        <div class=\"content\" id=\"user\">\n            <table class=\"").concat(guest.name, "\" id=\"users ").concat(guest.name, "\">\n                <tr>\n                    <th>Item</th>\n                    <th>Price</th>\n                </tr>\n            </table>\n        </div>\n        <div class=\"footer\" id=\"user\">\n            <table>\n                <tr class=\"subtotal ").concat(guest.name, "\" >\n                    <td>Subtotal</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n\n                <tr class=\"tip\">\n                    <td>Tip</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n                <tr class=\"tax\">\n                    <td>Tax</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n                <tr class=\"total\">\n                    <td>Total</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n            </table>\n        </div>\n    ");
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
function addItemModal(props) {
  var options = props.guests.map(function (guest) {
    return "<option value=\"".concat(guest.name, "\">").concat(guest.name, "</option>");
  });
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"item-name\">\n                    <label for=\"item-name\">Item Name</label>\n                    <input type=\"text\" id=\"item-name\" name=\"item-name\" required>\n                </div>\n                <div id=\"item-price\">\n                    <label for=\"item-price\">Price</label>\n                    <input type=\"text\" id=\"item-price\" name=\"item-price\" required>\n                </div>\n              <div id=\"item-guest\">\n                    <label for=\"item-guest\">Assign to guest</label>\n                    <select id=\"item-guest\" name=\"item-guest\">\n                        ".concat(options, "\n                    </select>\n                </div>\n                <div>\n                    <button id=\"submit\"\">Add Item</button>\n                </div>\n            </form>\n        </div>\n    ");
  document.body.appendChild(div);
}
function addGuestModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"guest-name\">\n                    <label for=\"guest-name\">Guest Name</label>\n                    <input type=\"text\" id=\"guest-name\" name=\"guest-name\" value=\"Untitled\" required>\n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Guest</button>\n                </div>\n            </form>\n        </div>\n    ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsImd1ZXN0IiwiaXRlbSIsIkl0ZW0iLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiR3Vlc3QiLCJhZGRHdWVzdFRvVGFibGUiLCJpdGVtTGlzdCIsInRyIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm5hbWUiLCJOdW1iZXIiLCJwcmljZSIsInRvRml4ZWQiLCJhcHBlbmRDaGlsZCIsInVzZXIiLCJmaW5kIiwidSIsImd1ZXN0QmlsbCIsImZvckVhY2giLCJzdWJ0b3RhbEVsIiwibGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiYnV5ZXJzIiwid2luZG93Iiwib25jbGljayIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZU1vZGFsIiwiZWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRJdGVtTW9kYWwiLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJib2R5IiwiYWRkR3Vlc3RNb2RhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxPQUFLLEVBQUUsRUFEaUI7QUFFeEJDLFFBQU0sRUFBRSxFQUZnQjtBQUd4QkMsVUFBUSxFQUFFLElBSGM7QUFJeEJDLEtBQUcsRUFBRSxJQUptQjtBQUt4QkMsS0FBRyxFQUFFLElBTG1CO0FBTXhCQyxPQUFLLEVBQUU7QUFOaUIsQ0FBckI7QUFTUEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNuRUMsOERBQUEsQ0FB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ekIsTUFBTUMsRUFBRSxHQUFHbEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQWlELElBQUUsQ0FBQ0MsVUFBSCxDQUFjQyxXQUFkLENBQTBCRixFQUExQjtBQUNIO0FBRU0sU0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEMsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUMzRCxNQUFOLENBQWE2RCxHQUFiLENBQWtCLFVBQUF4QyxLQUFLO0FBQUEscUNBQXNCQSxLQUFLLENBQUNhLElBQTVCLGdCQUFxQ2IsS0FBSyxDQUFDYSxJQUEzQztBQUFBLEdBQXZCLENBQWhCO0FBQ0EsTUFBTVksR0FBRyxHQUFHekMsUUFBUSxDQUFDMkIsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FjLEtBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxLQUFHLENBQUNiLFNBQUosdXZCQWdCc0IyQixPQWhCdEI7QUF5QkF2RCxVQUFRLENBQUN5RCxJQUFULENBQWN4QixXQUFkLENBQTBCUSxHQUExQjtBQUNIO0FBRU0sU0FBU2lCLGFBQVQsR0FBeUI7QUFDNUIsTUFBTWpCLEdBQUcsR0FBR3pDLFFBQVEsQ0FBQzJCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBYyxLQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsS0FBRyxDQUFDYixTQUFKO0FBZ0JBNUIsVUFBUSxDQUFDeUQsSUFBVCxDQUFjeEIsV0FBZCxDQUEwQlEsR0FBMUI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNoRUQ7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21vZGFsLnNjc3NcIjtcbmltcG9ydCBHdWVzdCBmcm9tIFwiLi9zY3JpcHRzL2d1ZXN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9zY3JpcHRzL2l0ZW1cIjtcbmltcG9ydCAqIGFzIE1vZGFsIGZyb20gXCIuL3NjcmlwdHMvbW9kYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIGd1ZXN0czogW10sXG4gICAgc3VidG90YWw6IDAuMDAsXG4gICAgdGlwOiAwLjAwLFxuICAgIHRheDogMC4wMCxcbiAgICB0b3RhbDogMC4wMFxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2l0ZW1zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkSXRlbU1vZGFsKGN1cnJlbnRTdGF0ZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZUl0ZW0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdXNlcnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRHdWVzdE1vZGFsKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVVzZXIpO1xuXG59KTtcblxuZnVuY3Rpb24gc2F2ZUl0ZW0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgaXRlbU5hbWUgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLW5hbWVcIilcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLXByaWNlXCIpXG4gICAgY29uc3QgZ3Vlc3QgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLWd1ZXN0XCIpXG4gICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKGl0ZW1OYW1lLCBpdGVtUHJpY2UpXG4gICAgY29uc29sZS5sb2coaXRlbSlcbiAgICBjdXJyZW50U3RhdGUuaXRlbXMucHVzaChpdGVtKVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbiAgICBhZGRJdGVtVG9CaWxsKGl0ZW0pXG4gICAgYWRkSXRlbVRvR3Vlc3QoaXRlbSwgZ3Vlc3QpXG59XG5cbmZ1bmN0aW9uIHNhdmVVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGd1ZXN0TmFtZSA9IGZvcm1EYXRhLmdldChcImd1ZXN0LW5hbWVcIilcbiAgICBjb25zdCBndWVzdCA9IG5ldyBHdWVzdChndWVzdE5hbWUpXG4gICAgY29uc29sZS5sb2coZ3Vlc3QpXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5wdXNoKGd1ZXN0KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbiAgICBhZGRHdWVzdFRvVGFibGUoZ3Vlc3QpXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0JpbGwoaXRlbSl7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGUjaXRlbXNcIikgXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICR7aXRlbS5uYW1lfVxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicmlnaHRcIiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQodHIpXG4gICAgXG4gICAgY3VycmVudFN0YXRlLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKVxuICAgIGNvbnN0IHN1YnRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0b3RhbCA+IHRkLnJpZ2h0XCIpIFxuICAgIGNvbnNvbGUubG9nKHN1YnRvdGFsKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbClcbiAgICBzdWJ0b3RhbC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9HdWVzdChpdGVtLCBndWVzdCkge1xuICAgIGNvbnN0IHVzZXIgPSBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZpbmQodSA9PiB1Lm5hbWUgPT0gZ3Vlc3QpXG4gICAgdXNlci5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgY29uc3QgZ3Vlc3RCaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z3Vlc3R9YClcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKVxuICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICA8dGQgY2xhc3M9XCJsZWZ0XCIgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgZ3Vlc3RCaWxsLmFwcGVuZENoaWxkKHRyKVxuXG4gICAgbGV0IHN1YnRvdGFsID0gMCBcbiAgICB1c2VyLml0ZW1zLmZvckVhY2goIGl0ZW0gPT4gc3VidG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpIClcbiAgICBjb25zb2xlLmxvZyhzdWJ0b3RhbClcbiAgICBjb25zdCBzdWJ0b3RhbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1YnRvdGFsLiR7Z3Vlc3R9ID4gdGQucmlnaHRgKVxuICAgIHN1YnRvdGFsRWwuaW5uZXJIVE1MID0gYCQke3N1YnRvdGFsLnRvRml4ZWQoMil9YFxuXG59XG5cbmZ1bmN0aW9uIGFkZEd1ZXN0VG9UYWJsZShndWVzdCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29udGVudCN1c2Vyc1wiKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiYm94XCJcbiAgICBkaXYuaWQgPSBcInVzZXJcIlxuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgcm93XCIgaWQ9XCJ1c2Vyc1wiPiR7Z3Vlc3QubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIiR7Z3Vlc3QubmFtZX1cIiBpZD1cInVzZXJzICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJzdWJ0b3RhbCAke2d1ZXN0Lm5hbWV9XCIgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3VidG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGlwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UaXA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRheFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VGF4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG4vLyB3aW5kb3cuY3VycmVudFN0YXRlID0gY3VycmVudFN0YXRlXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107ICBcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7IFxuICAgICAgICB0aGlzLmJ1eWVycyA9IFtdOyBcbiAgICB9XG59Iiwid2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgbW9kYWwgc2NyZWVuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5tb2RhbC1zY3JlZW4nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Nb2RhbChwcm9wcykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wcy5ndWVzdHMubWFwKCBndWVzdCA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7Z3Vlc3QubmFtZX1cIj4ke2d1ZXN0Lm5hbWV9PC9vcHRpb24+YCkgXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+SXRlbSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBuYW1lPVwiaXRlbS1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tcHJpY2VcIj5QcmljZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1wcmljZVwiIG5hbWU9XCJpdGVtLXByaWNlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLWd1ZXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWd1ZXN0XCI+QXNzaWduIHRvIGd1ZXN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIml0ZW0tZ3Vlc3RcIiBuYW1lPVwiaXRlbS1ndWVzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHdWVzdE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJndWVzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJndWVzdC1uYW1lXCI+R3Vlc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ3Vlc3QtbmFtZVwiIG5hbWU9XCJndWVzdC1uYW1lXCIgdmFsdWU9XCJVbnRpdGxlZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBHdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==