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
document.querySelector("button#tip").addEventListener("click", function () {
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["addTipModal"]();
  document.getElementById("tip15").addEventListener("click", _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["toggleCustomTip"]);
  document.getElementById("tip18").addEventListener("click", _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["toggleCustomTip"]);
  document.getElementById("tip20").addEventListener("click", _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["toggleCustomTip"]);
  document.getElementById("tip-custom").addEventListener("click", _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["toggleCustomTip"]);
  document.querySelector("button#submit").addEventListener("click", saveTip);
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

function saveTip(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  var formData = new FormData(form);
  var tipRate = formData.get("tip-rate");
  var tipAmt = formData.get("tip-amount");
  console.log(formData);

  if (tipRate === "custom") {
    splitCustomTip(tipAmt);
  } else {
    applyTipRate(tipRate);
  }

  ;
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
}

function splitCustomTip(tipAmt) {
  console.log(tipAmt);
}

;

function applyTipRate(tipRate) {
  console.log(tipRate);
  tipRate = parseFloat(tipRate) / 100.0;
  console.log(tipRate);
  console.log(currentState.subtotal);
  currentState.tip = Number(currentState.subtotal) * tipRate;
  console.log(currentState.tip);
  var tip = document.querySelector(".tip > td.right");
  tip.innerHTML = "$".concat(currentState.tip.toFixed(2));
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
/*! exports provided: closeModal, addItemModal, addGuestModal, addTipModal, toggleCustomTip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemModal", function() { return addItemModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGuestModal", function() { return addGuestModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTipModal", function() { return addTipModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCustomTip", function() { return toggleCustomTip; });
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
function addTipModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"tip-rate\">\n                    <div>Select Tip Rate</div>\n                    <input type=\"radio\" id=\"tip15\" name=\"tip-rate\" value=\"15%\">\n                    <label for=\"tip15\">15%</label>\n                    <input type=\"radio\" id=\"tip18\" name=\"tip-rate\" value=\"18%\">\n                    <label for=\"tip18\">18%</label>\n                    <input type=\"radio\" id=\"tip20\" name=\"tip-rate\" value=\"20%\">\n                    <label for=\"tip20\">20%</label>\n                    <input type=\"radio\" id=\"tip-custom\" name=\"tip-rate\" value=\"custom\">\n                    <label for=\"tip-custom\">Custom Amount</label>\n                    <input type=\"text\" id=\"tip-amount\" name=\"tip-amount\" placeholder=\"Enter custom amount\" disabled> \n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Tip</button>\n                </div>\n            </form>\n        </div>\n    ";
  document.body.appendChild(div);
}
function toggleCustomTip() {
  var selected = document.getElementById("tip-custom");
  var customAmt = document.getElementById("tip-amount");
  customAmt.disabled = selected.checked ? false : true;

  if (!customAmt.disabled) {
    customAmt.focus();
  }

  ;
} // export function addTaxModal() {
//     const div = document.createElement('div');
//     div.className = "modal";
//     div.innerHTML = `
//         <div class="modal-screen">
//         </div>
//         <div class="modal-form">
//             <form>
//                 <div id="guest-name">
//                     <label for="guest-name">Guest Name</label>
//                     <input type="text" id="guest-name" name="guest-name" value="Untitled" required>
//                 </div>
//                 <div>
//                     <button id="submit"">Add Guest</button>
//                 </div>
//             </form>
//         </div>
//     `
//     document.body.appendChild(div)
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsImd1ZXN0IiwiaXRlbSIsIkl0ZW0iLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiR3Vlc3QiLCJhZGRHdWVzdFRvVGFibGUiLCJ0aXBSYXRlIiwidGlwQW10Iiwic3BsaXRDdXN0b21UaXAiLCJhcHBseVRpcFJhdGUiLCJwYXJzZUZsb2F0IiwiTnVtYmVyIiwiaW5uZXJIVE1MIiwidG9GaXhlZCIsIml0ZW1MaXN0IiwidHIiLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsInByaWNlIiwiYXBwZW5kQ2hpbGQiLCJ1c2VyIiwiZmluZCIsInUiLCJndWVzdEJpbGwiLCJmb3JFYWNoIiwic3VidG90YWxFbCIsImxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImJ1eWVycyIsIndpbmRvdyIsIm9uY2xpY2siLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY2xvc2VNb2RhbCIsImVsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYWRkSXRlbU1vZGFsIiwicHJvcHMiLCJvcHRpb25zIiwibWFwIiwiYm9keSIsImFkZEd1ZXN0TW9kYWwiLCJhZGRUaXBNb2RhbCIsInRvZ2dsZUN1c3RvbVRpcCIsInNlbGVjdGVkIiwiY3VzdG9tQW10IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsT0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxRQUFNLEVBQUUsRUFGZ0I7QUFHeEJDLFVB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LE9BQVQsR0FBbUIsS0FBbkIsR0FBMkIsSUFBaEQ7O0FBQ0EsTUFBSSxDQUFDRixTQUFTLENBQUNDLFFBQWYsRUFBeUI7QUFBRUQsYUFBUyxDQUFDRyxLQUFWO0FBQW1COztBQUFBO0FBQ2pELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IEd1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ3Vlc3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL3NjcmlwdHMvaXRlbVwiO1xuaW1wb3J0ICogYXMgTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9tb2RhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZ3Vlc3RzOiBbXSxcbiAgICBzdWJ0b3RhbDogMC4wMCxcbiAgICB0aXA6IDAuMDAsXG4gICAgdGF4OiAwLjAwLFxuICAgIHRvdGFsOiAwLjAwXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jaXRlbXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRJdGVtTW9kYWwoY3VycmVudFN0YXRlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSXRlbSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN1c2Vyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEd1ZXN0TW9kYWwoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVXNlcik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0aXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRUaXBNb2RhbCgpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAxNVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMThcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDIwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAtY3VzdG9tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUaXApO1xufSk7XG5cbmZ1bmN0aW9uIHNhdmVJdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1uYW1lXCIpXG4gICAgY29uc3QgaXRlbVByaWNlID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1wcmljZVwiKVxuICAgIGNvbnN0IGd1ZXN0ID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1ndWVzdFwiKVxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShpdGVtTmFtZSwgaXRlbVByaWNlKVxuICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgY3VycmVudFN0YXRlLml0ZW1zLnB1c2goaXRlbSlcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgYWRkSXRlbVRvQmlsbChpdGVtKVxuICAgIGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KVxufVxuXG5mdW5jdGlvbiBzYXZlVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBndWVzdE5hbWUgPSBmb3JtRGF0YS5nZXQoXCJndWVzdC1uYW1lXCIpXG4gICAgY29uc3QgZ3Vlc3QgPSBuZXcgR3Vlc3QoZ3Vlc3ROYW1lKVxuICAgIGNvbnNvbGUubG9nKGd1ZXN0KVxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMucHVzaChndWVzdClcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgYWRkR3Vlc3RUb1RhYmxlKGd1ZXN0KVxufVxuXG5mdW5jdGlvbiBzYXZlVGlwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgdGlwUmF0ZSA9IGZvcm1EYXRhLmdldChcInRpcC1yYXRlXCIpO1xuICAgIGNvbnN0IHRpcEFtdCA9IGZvcm1EYXRhLmdldChcInRpcC1hbW91bnRcIik7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpXG4gICAgaWYgKHRpcFJhdGUgPT09IFwiY3VzdG9tXCIpIHsgc3BsaXRDdXN0b21UaXAodGlwQW10KSB9XG4gICAgZWxzZSB7IGFwcGx5VGlwUmF0ZSh0aXBSYXRlKSB9O1xuICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRDdXN0b21UaXAodGlwQW10KSB7XG4gICAgY29uc29sZS5sb2codGlwQW10KVxufTtcblxuZnVuY3Rpb24gYXBwbHlUaXBSYXRlKHRpcFJhdGUpIHtcbiAgICBjb25zb2xlLmxvZyh0aXBSYXRlKVxuICAgIHRpcFJhdGUgPSBwYXJzZUZsb2F0KHRpcFJhdGUpIC8gMTAwLjBcbiAgICBjb25zb2xlLmxvZyh0aXBSYXRlKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbClcbiAgICBjdXJyZW50U3RhdGUudGlwID0gTnVtYmVyKGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCkgKiAodGlwUmF0ZSlcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUudGlwKVxuXG4gICAgY29uc3QgdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXAgPiB0ZC5yaWdodFwiKVxuICAgIHRpcC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRpcC50b0ZpeGVkKDIpfWBcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvQmlsbChpdGVtKXtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZSNpdGVtc1wiKSBcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICB0ci5pbm5lckhUTUwgPSBgXG4gICAgPHRkIGNsYXNzPVwibGVmdFwiIGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBpdGVtTGlzdC5hcHBlbmRDaGlsZCh0cilcbiAgICBcbiAgICBjdXJyZW50U3RhdGUuc3VidG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpXG4gICAgY29uc3Qgc3VidG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YnRvdGFsID4gdGQucmlnaHRcIikgXG4gICAgY29uc29sZS5sb2coc3VidG90YWwpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlLnN1YnRvdGFsKVxuICAgIHN1YnRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUuc3VidG90YWwudG9GaXhlZCgyKX1gXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KSB7XG4gICAgY29uc3QgdXNlciA9IGN1cnJlbnRTdGF0ZS5ndWVzdHMuZmluZCh1ID0+IHUubmFtZSA9PSBndWVzdClcbiAgICB1c2VyLml0ZW1zLnB1c2goaXRlbSlcbiAgICBjb25zdCBndWVzdEJpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtndWVzdH1gKVxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAke2l0ZW0ubmFtZX1cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCIgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBndWVzdEJpbGwuYXBwZW5kQ2hpbGQodHIpXG5cbiAgICBsZXQgc3VidG90YWwgPSAwIFxuICAgIHVzZXIuaXRlbXMuZm9yRWFjaCggaXRlbSA9PiBzdWJ0b3RhbCArPSBOdW1iZXIoaXRlbS5wcmljZSkgKVxuICAgIGNvbnNvbGUubG9nKHN1YnRvdGFsKVxuICAgIGNvbnN0IHN1YnRvdGFsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3VidG90YWwuJHtndWVzdH0gPiB0ZC5yaWdodGApXG4gICAgc3VidG90YWxFbC5pbm5lckhUTUwgPSBgJCR7c3VidG90YWwudG9GaXhlZCgyKX1gXG5cbn1cblxuZnVuY3Rpb24gYWRkR3Vlc3RUb1RhYmxlKGd1ZXN0KXtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jb250ZW50I3VzZXJzXCIpIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJib3hcIlxuICAgIGRpdi5pZCA9IFwidXNlclwiXG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlciByb3dcIiBpZD1cInVzZXJzXCI+JHtndWVzdC5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiJHtndWVzdC5uYW1lfVwiIGlkPVwidXNlcnMgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInN1YnRvdGFsICR7Z3Vlc3QubmFtZX1cIiA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TdWJ0b3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0aXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRpcDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGF4XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UYXg8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYpXG59XG5cbi8vIHdpbmRvdy5jdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGVcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTsgIFxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTsgXG4gICAgICAgIHRoaXMuYnV5ZXJzID0gW107IFxuICAgIH1cbn0iLCJ3aW5kb3cub25jbGljayA9IGUgPT4ge1xuICAgIC8vIGNsb3NlIG1vZGFsIGJ5IGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBtb2RhbCBzY3JlZW5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLm1vZGFsLXNjcmVlbicpKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbU1vZGFsKHByb3BzKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHByb3BzLmd1ZXN0cy5tYXAoIGd1ZXN0ID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtndWVzdC5uYW1lfVwiPiR7Z3Vlc3QubmFtZX08L29wdGlvbj5gKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5JdGVtIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIG5hbWU9XCJpdGVtLW5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1wcmljZVwiPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLXByaWNlXCIgbmFtZT1cIml0ZW0tcHJpY2VcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tZ3Vlc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tZ3Vlc3RcIj5Bc3NpZ24gdG8gZ3Vlc3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaXRlbS1ndWVzdFwiIG5hbWU9XCJpdGVtLWd1ZXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBJdGVtPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEd1ZXN0TW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImd1ZXN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImd1ZXN0LW5hbWVcIj5HdWVzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJndWVzdC1uYW1lXCIgbmFtZT1cImd1ZXN0LW5hbWVcIiB2YWx1ZT1cIlVudGl0bGVkXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEd1ZXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpcE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXAtcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlbGVjdCBUaXAgUmF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxNVwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTUlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAxNVwiPjE1JTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE4XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxOCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE4XCI+MTglPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwMjBcIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cIjIwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMjBcIj4yMCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAtY3VzdG9tXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCJjdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcC1jdXN0b21cIj5DdXN0b20gQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXAtYW1vdW50XCIgbmFtZT1cInRpcC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGN1c3RvbSBhbW91bnRcIiBkaXNhYmxlZD4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIFRpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDdXN0b21UaXAoKXtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIik7XG4gICAgdmFyIGN1c3RvbUFtdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWFtb3VudFwiKTtcbiAgICBjdXN0b21BbXQuZGlzYWJsZWQgPSBzZWxlY3RlZC5jaGVja2VkID8gZmFsc2UgOiB0cnVlIFxuICAgIGlmICghY3VzdG9tQW10LmRpc2FibGVkKSB7IGN1c3RvbUFtdC5mb2N1cygpIH07XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRUYXhNb2RhbCgpIHtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuLy8gICAgIGRpdi5pbm5lckhUTUwgPSBgXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4vLyAgICAgICAgICAgICA8Zm9ybT5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ3Vlc3QtbmFtZVwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ3Vlc3QtbmFtZVwiPkd1ZXN0IE5hbWU8L2xhYmVsPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImd1ZXN0LW5hbWVcIiBuYW1lPVwiZ3Vlc3QtbmFtZVwiIHZhbHVlPVwiVW50aXRsZWRcIiByZXF1aXJlZD5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbi8vICAgICAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgR3Vlc3Q8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuLy8gfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=