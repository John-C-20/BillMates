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
document.querySelector("button#tax").addEventListener("click", function () {
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["addTaxModal"]();
  document.querySelector("button#submit").addEventListener("click", saveTax);
});
document.querySelector("button#calculate").addEventListener("click", calculate);

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
  var tipAmt = Number(formData.get("tip-amount"));
  console.log(formData);

  if (tipRate === "custom") {
    splitCustomTip(tipAmt);
  } else {
    applyTipRate(tipRate);
  }

  ;
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
}

function saveTax(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  var formData = new FormData(form);
  var taxAmt = Number(formData.get("tax-amount"));
  splitTax(taxAmt);
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
}

function splitTax(taxAmt) {
  currentState.tax = Number(taxAmt);
  var tax = document.querySelector(".tax > td.right");
  tax.innerHTML = "$".concat(currentState.tax.toFixed(2));
  currentState.guests.forEach(function (guest) {
    var ratio = guest.subtotal * 1.0 / currentState.subtotal;
    var tax = (taxAmt * ratio).toFixed(2);
    guest.tax = tax;
    var guestTax = document.querySelector(".tax.".concat(guest.name, " > td.right"));
    guestTax.innerHTML = "$".concat(guest.tax);
  });
}

function splitCustomTip(tipAmt) {
  console.log(tipAmt);
  currentState.tip = Number(tipAmt);
  var tip = document.querySelector(".tip > td.right");
  tip.innerHTML = "$".concat(currentState.tip.toFixed(2));
  currentState.guests.forEach(function (guest) {
    var ratio = guest.subtotal * 1.0 / currentState.subtotal;
    var tip = (tipAmt * ratio).toFixed(2);
    guest.tip = tip;
    var guestTip = document.querySelector(".tip.".concat(guest.name, " > td.right"));
    guestTip.innerHTML = "$".concat(guest.tip);
  });
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
  currentState.guests.forEach(function (guest) {
    guest.tip = (guest.subtotal * tipRate).toFixed(2);
    var guestTip = document.querySelector(".tip.".concat(guest.name, " > td.right"));
    guestTip.innerHTML = "$".concat(guest.tip);
  });
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
  user.subtotal = 0;
  user.items.forEach(function (item) {
    return user.subtotal += Number(item.price);
  });
  console.log(user.subtotal);
  var subtotalEl = document.querySelector(".subtotal.".concat(guest, " > td.right"));
  subtotalEl.innerHTML = "$".concat(user.subtotal.toFixed(2));
}

function addGuestToTable(guest) {
  var list = document.querySelector("div.content#users");
  var div = document.createElement("div");
  div.className = "box";
  div.id = "user";
  div.innerHTML = "\n        <div class=\"header row\" id=\"users\">".concat(guest.name, "</div>\n        <div class=\"content\" id=\"user\">\n            <table class=\"").concat(guest.name, "\" id=\"users ").concat(guest.name, "\">\n                <tr>\n                    <th>Item</th>\n                    <th>Price</th>\n                </tr>\n            </table>\n        </div>\n        <div class=\"footer\" id=\"user\">\n            <table>\n                <tr class=\"subtotal ").concat(guest.name, "\" >\n                    <td>Subtotal</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n\n                <tr class=\"tip ").concat(guest.name, "\">\n                    <td>Tip</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n                <tr class=\"tax ").concat(guest.name, "\">\n                    <td>Tax</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n                <tr class=\"total ").concat(guest.name, "\">\n                    <td>Total</td>\n                    <td class=\"right\">$0.00</td>\n                </tr>\n            </table>\n        </div>\n    ");
  list.appendChild(div);
}

function calculate(e) {
  e.preventDefault();
  currentState.total = currentState.subtotal + currentState.tip + currentState.tax;
  var total = document.querySelector(".total > td.right");
  total.innerHTML = "$".concat(currentState.total.toFixed(2));
  currentState.guests.forEach(function (guest) {
    var guestTotal = document.querySelector(".total.".concat(guest.name, " > td.right"));
    guestTotal.innerHTML = "$".concat(guest.total.toFixed(2));
  });
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Guest = /*#__PURE__*/function () {
  function Guest(name) {
    _classCallCheck(this, Guest);

    this.name = name;
    this.items = [];
    this.subtotal = 0;
    this.tip = 0;
    this.tax = 0;
  }

  _createClass(Guest, [{
    key: "total",
    get: function get() {
      return Number(this.subtotal) + Number(this.tip) + Number(this.tax);
    }
  }]);

  return Guest;
}();



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
/*! exports provided: closeModal, addItemModal, addGuestModal, addTipModal, toggleCustomTip, addTaxModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemModal", function() { return addItemModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGuestModal", function() { return addGuestModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTipModal", function() { return addTipModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCustomTip", function() { return toggleCustomTip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaxModal", function() { return addTaxModal; });
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
  // verifications: 
  // item must belong to a guest 
  var options = props.guests.map(function (guest) {
    return "<option value=\"".concat(guest.name, "\">").concat(guest.name, "</option>");
  });
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"item-name\">\n                    <label for=\"item-name\">Item Name</label>\n                    <input type=\"text\" id=\"item-name\" name=\"item-name\" required>\n                </div>\n                <div id=\"item-price\">\n                    <label for=\"item-price\">Price</label>\n                    <input type=\"text\" id=\"item-price\" name=\"item-price\" required>\n                </div>\n              <div id=\"item-guest\">\n                    <label for=\"item-guest\">Assign to guest</label>\n                    <select id=\"item-guest\" name=\"item-guest\">\n                        ".concat(options, "\n                    </select>\n                </div>\n                <div>\n                    <button id=\"submit\"\">Add Item</button>\n                </div>\n            </form>\n        </div>\n    ");
  document.body.appendChild(div);
  document.querySelector("input#item-name").focus();
}
function addGuestModal() {
  // verifications: 
  // name must start with a letter 
  // names must be unique 
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"guest-name\">\n                    <label for=\"guest-name\">Guest Name</label>\n                    <input type=\"text\" id=\"guest-name\" name=\"guest-name\" value=\"Untitled\" required>\n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Guest</button>\n                </div>\n            </form>\n        </div>\n    ";
  document.body.appendChild(div);
  document.querySelector("input#guest-name").focus();
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
}
function addTaxModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"tax-amount\">\n                    <label for=\"tax-amount\">Calculate Tax</label>\n                    <input type=\"text\" id=\"tax-amount\" name=\"tax-amount\" placeholder=\"Enter tax amount\" required>\n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Tax</button>\n                </div>\n            </form>\n        </div>\n    ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJzYXZlVGF4IiwiY2FsY3VsYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXRlbU5hbWUiLCJnZXQiLCJpdGVtUHJpY2UiLCJndWVzdCIsIml0ZW0iLCJJdGVtIiwicHVzaCIsImFkZEl0ZW1Ub0JpbGwiLCJhZGRJdGVtVG9HdWVzdCIsImd1ZXN0TmFtZSIsIkd1ZXN0IiwiYWRkR3Vlc3RUb1RhYmxlIiwidGlwUmF0ZSIsInRpcEFtdCIsIk51bWJlciIsInNwbGl0Q3VzdG9tVGlwIiwiYXBwbHlUaXBSYXRlIiwidGF4QW10Iiwic3BsaXRUYXgiLCJpbm5lckhUTUwiLCJ0b0ZpeGVkIiwiZm9yRWFjaCIsInJhdGlvIiwiZ3Vlc3RUYXgiLCJuYW1lIiwiZ3Vlc3RUaXAiLCJwYXJzZUZsb2F0IiwiaXRlbUxpc3QiLCJ0ciIsImNyZWF0ZUVsZW1lbnQiLCJwcmljZSIsImFwcGVuZENoaWxkIiwidXNlciIsImZpbmQiLCJ1IiwiZ3Vlc3RCaWxsIiwic3VidG90YWxFbCIsImxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImd1ZXN0VG90YWwiLCJidXllcnMiLCJ3aW5kb3ciLCJvbmNsaWNrIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3NlTW9kYWwiLCJlbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFkZEl0ZW1Nb2RhbCIsInByb3BzIiwib3B0aW9ucyIsIm1hcCIsImJvZHkiLCJmb2N1cyIsImFkZEd1ZXN0TW9kYWwiLCJhZGRUaXBNb2RhbCIsInRvZ2dsZUN1c3RvbVRpcCIsInNlbGVjdGVkIiwiY3VzdG9tQW10IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiYWRkVGF4TW9kYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDd0UsS0FBM0M7QUFDSDtBQUVNLFNBQVNFLFdBQVQsR0FBdUI7QUFDMUIsTUFBTXBCLEdBQUcsR0FBR3ZELFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBUyxLQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsS0FBRyxDQUFDbkIsU0FBSjtBQXdCQXBDLFVBQVEsQ0FBQ3dFLElBQVQsQ0FBY3hCLFdBQWQsQ0FBMEJPLEdBQTFCO0FBQ0g7QUFFTSxTQUFTcUIsZUFBVCxHQUEwQjtBQUM3QixNQUFJQyxRQUFRLEdBQUc3RSxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBLE1BQUl3RSxTQUFTLEdBQUc5RSxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBaEI7QUFDQXdFLFdBQVMsQ0FBQ0MsUUFBVixHQUFxQkYsUUFBUSxDQUFDRyxPQUFULEdBQW1CLEtBQW5CLEdBQTJCLElBQWhEOztBQUNBLE1BQUksQ0FBQ0YsU0FBUyxDQUFDQyxRQUFmLEVBQXlCO0FBQUVELGFBQVMsQ0FBQ0wsS0FBVjtBQUFtQjs7QUFBQTtBQUNqRDtBQUVNLFNBQVNRLFdBQVQsR0FBdUI7QUFDMUIsTUFBTTFCLEdBQUcsR0FBR3ZELFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBUyxLQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsS0FBRyxDQUFDbkIsU0FBSjtBQWdCQXBDLFVBQVEsQ0FBQ3dFLElBQVQsQ0FBY3hCLFdBQWQsQ0FBMEJPLEdBQTFCO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDbElEO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tb2RhbC5zY3NzXCI7XG5pbXBvcnQgR3Vlc3QgZnJvbSBcIi4vc2NyaXB0cy9ndWVzdFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vc2NyaXB0cy9pdGVtXCI7XG5pbXBvcnQgKiBhcyBNb2RhbCBmcm9tIFwiLi9zY3JpcHRzL21vZGFsc1wiO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXSxcbiAgICBndWVzdHM6IFtdLFxuICAgIHN1YnRvdGFsOiAwLjAwLFxuICAgIHRpcDogMC4wMCxcbiAgICB0YXg6IDAuMDAsXG4gICAgdG90YWw6IDAuMDBcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNpdGVtc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEl0ZW1Nb2RhbChjdXJyZW50U3RhdGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVJdGVtKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3VzZXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkR3Vlc3RNb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVVc2VyKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3RpcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZFRpcE1vZGFsKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDE1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAxOFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMjBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVRpcCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0YXhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRUYXhNb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUYXgpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNjYWxjdWxhdGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGN1bGF0ZSk7XG5cbmZ1bmN0aW9uIHNhdmVJdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1uYW1lXCIpXG4gICAgY29uc3QgaXRlbVByaWNlID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1wcmljZVwiKVxuICAgIGNvbnN0IGd1ZXN0ID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1ndWVzdFwiKVxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShpdGVtTmFtZSwgaXRlbVByaWNlKVxuICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgY3VycmVudFN0YXRlLml0ZW1zLnB1c2goaXRlbSlcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgYWRkSXRlbVRvQmlsbChpdGVtKVxuICAgIGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KVxufVxuXG5mdW5jdGlvbiBzYXZlVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBndWVzdE5hbWUgPSBmb3JtRGF0YS5nZXQoXCJndWVzdC1uYW1lXCIpXG4gICAgY29uc3QgZ3Vlc3QgPSBuZXcgR3Vlc3QoZ3Vlc3ROYW1lKVxuICAgIGNvbnNvbGUubG9nKGd1ZXN0KVxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMucHVzaChndWVzdClcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG4gICAgYWRkR3Vlc3RUb1RhYmxlKGd1ZXN0KVxufVxuXG5mdW5jdGlvbiBzYXZlVGlwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgdGlwUmF0ZSA9IGZvcm1EYXRhLmdldChcInRpcC1yYXRlXCIpO1xuICAgIGNvbnN0IHRpcEFtdCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJ0aXAtYW1vdW50XCIpKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcbiAgICBpZiAodGlwUmF0ZSA9PT0gXCJjdXN0b21cIikgeyBzcGxpdEN1c3RvbVRpcCh0aXBBbXQpIH1cbiAgICBlbHNlIHsgYXBwbHlUaXBSYXRlKHRpcFJhdGUpIH07XG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBzYXZlVGF4KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCB0YXhBbXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwidGF4LWFtb3VudFwiKSk7XG4gICAgc3BsaXRUYXgodGF4QW10KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUYXgodGF4QW10KSB7XG4gICAgY3VycmVudFN0YXRlLnRheCA9IE51bWJlcih0YXhBbXQpXG4gICAgY29uc3QgdGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXggPiB0ZC5yaWdodFwiKVxuICAgIHRheC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRheC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZ3Vlc3Quc3VidG90YWwgKiAxLjAgLyBjdXJyZW50U3RhdGUuc3VidG90YWxcbiAgICAgICAgY29uc3QgdGF4ID0gKHRheEFtdCAqIHJhdGlvKS50b0ZpeGVkKDIpXG4gICAgICAgIGd1ZXN0LnRheCA9IHRheCBcbiAgICAgICAgY29uc3QgZ3Vlc3RUYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGF4LiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGF4LmlubmVySFRNTCA9IGAkJHtndWVzdC50YXh9YFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNwbGl0Q3VzdG9tVGlwKHRpcEFtdCkge1xuICAgIGNvbnNvbGUubG9nKHRpcEFtdClcbiAgICBjdXJyZW50U3RhdGUudGlwID0gTnVtYmVyKHRpcEFtdClcbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpcCA+IHRkLnJpZ2h0XCIpXG4gICAgdGlwLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGlwLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBndWVzdC5zdWJ0b3RhbCAqIDEuMCAvIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCBcbiAgICAgICAgY29uc3QgdGlwID0gKHRpcEFtdCAqIHJhdGlvKS50b0ZpeGVkKDIpXG4gICAgICAgIGd1ZXN0LnRpcCA9IHRpcCBcbiAgICAgICAgY29uc3QgZ3Vlc3RUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGlwLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGlwLmlubmVySFRNTCA9IGAkJHtndWVzdC50aXB9YFxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBhcHBseVRpcFJhdGUodGlwUmF0ZSkge1xuICAgIGNvbnNvbGUubG9nKHRpcFJhdGUpXG4gICAgdGlwUmF0ZSA9IHBhcnNlRmxvYXQodGlwUmF0ZSkgLyAxMDAuMFxuICAgIGNvbnNvbGUubG9nKHRpcFJhdGUpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlLnN1YnRvdGFsKVxuICAgIGN1cnJlbnRTdGF0ZS50aXAgPSBOdW1iZXIoY3VycmVudFN0YXRlLnN1YnRvdGFsKSAqICh0aXBSYXRlKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZS50aXApXG5cbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpcCA+IHRkLnJpZ2h0XCIpXG4gICAgdGlwLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGlwLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgZ3Vlc3QudGlwID0gKGd1ZXN0LnN1YnRvdGFsICogdGlwUmF0ZSkudG9GaXhlZCgyKVxuICAgICAgICBjb25zdCBndWVzdFRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXAuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUaXAuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRpcH1gIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0JpbGwoaXRlbSl7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGUjaXRlbXNcIikgXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICR7aXRlbS5uYW1lfVxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicmlnaHRcIiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQodHIpXG4gICAgXG4gICAgY3VycmVudFN0YXRlLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKVxuICAgIGNvbnN0IHN1YnRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0b3RhbCA+IHRkLnJpZ2h0XCIpIFxuICAgIGNvbnNvbGUubG9nKHN1YnRvdGFsKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbClcbiAgICBzdWJ0b3RhbC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9HdWVzdChpdGVtLCBndWVzdCkge1xuICAgIGNvbnN0IHVzZXIgPSBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZpbmQodSA9PiB1Lm5hbWUgPT0gZ3Vlc3QpXG4gICAgdXNlci5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgY29uc3QgZ3Vlc3RCaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z3Vlc3R9YClcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKVxuICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICA8dGQgY2xhc3M9XCJsZWZ0XCIgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgZ3Vlc3RCaWxsLmFwcGVuZENoaWxkKHRyKVxuXG4gICAgdXNlci5zdWJ0b3RhbCA9IDBcbiAgICB1c2VyLml0ZW1zLmZvckVhY2goIGl0ZW0gPT4gdXNlci5zdWJ0b3RhbCArPSBOdW1iZXIoaXRlbS5wcmljZSkgKVxuICAgIGNvbnNvbGUubG9nKHVzZXIuc3VidG90YWwpXG4gICAgY29uc3Qgc3VidG90YWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdWJ0b3RhbC4ke2d1ZXN0fSA+IHRkLnJpZ2h0YClcbiAgICBzdWJ0b3RhbEVsLmlubmVySFRNTCA9IGAkJHt1c2VyLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxuXG59XG5cbmZ1bmN0aW9uIGFkZEd1ZXN0VG9UYWJsZShndWVzdCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29udGVudCN1c2Vyc1wiKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiYm94XCJcbiAgICBkaXYuaWQgPSBcInVzZXJcIlxuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgcm93XCIgaWQ9XCJ1c2Vyc1wiPiR7Z3Vlc3QubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIiR7Z3Vlc3QubmFtZX1cIiBpZD1cInVzZXJzICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJzdWJ0b3RhbCAke2d1ZXN0Lm5hbWV9XCIgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3VidG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGlwICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRpcDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGF4ICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRheDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG90YWwgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjdXJyZW50U3RhdGUudG90YWwgPSBjdXJyZW50U3RhdGUuc3VidG90YWwgKyBjdXJyZW50U3RhdGUudGlwICsgY3VycmVudFN0YXRlLnRheFxuICAgIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3RhbCA+IHRkLnJpZ2h0XCIpXG4gICAgdG90YWwuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50b3RhbC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IGd1ZXN0VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG90YWwuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUb3RhbC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudG90YWwudG9GaXhlZCgyKX1gXG4gICAgfSlcbn1cblxuLy8gd2luZG93LmN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdOyAgXG4gICAgICAgIHRoaXMuc3VidG90YWwgPSAwO1xuICAgICAgICB0aGlzLnRpcCA9IDA7XG4gICAgICAgIHRoaXMudGF4ID0gMDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5zdWJ0b3RhbCkgKyBOdW1iZXIodGhpcy50aXApICsgTnVtYmVyKHRoaXMudGF4KSBcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7IFxuICAgICAgICB0aGlzLmJ1eWVycyA9IFtdOyBcbiAgICB9XG59Iiwid2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgbW9kYWwgc2NyZWVuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5tb2RhbC1zY3JlZW4nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Nb2RhbChwcm9wcykge1xuICAgIC8vIHZlcmlmaWNhdGlvbnM6IFxuICAgIC8vIGl0ZW0gbXVzdCBiZWxvbmcgdG8gYSBndWVzdCBcbiAgICBjb25zdCBvcHRpb25zID0gcHJvcHMuZ3Vlc3RzLm1hcCggZ3Vlc3QgPT4gYDxvcHRpb24gdmFsdWU9XCIke2d1ZXN0Lm5hbWV9XCI+JHtndWVzdC5uYW1lfTwvb3B0aW9uPmApIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPkl0ZW0gTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgbmFtZT1cIml0ZW0tbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLXByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tcHJpY2VcIiBuYW1lPVwiaXRlbS1wcmljZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1ndWVzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPkFzc2lnbiB0byBndWVzdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpdGVtLWd1ZXN0XCIgbmFtZT1cIml0ZW0tZ3Vlc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNpdGVtLW5hbWVcIikuZm9jdXMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR3Vlc3RNb2RhbCgpIHtcbiAgICAvLyB2ZXJpZmljYXRpb25zOiBcbiAgICAvLyBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBcbiAgICAvLyBuYW1lcyBtdXN0IGJlIHVuaXF1ZSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ3Vlc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ3Vlc3QtbmFtZVwiPkd1ZXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImd1ZXN0LW5hbWVcIiBuYW1lPVwiZ3Vlc3QtbmFtZVwiIHZhbHVlPVwiVW50aXRsZWRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgR3Vlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNndWVzdC1uYW1lXCIpLmZvY3VzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpcE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXAtcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlbGVjdCBUaXAgUmF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxNVwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTUlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAxNVwiPjE1JTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE4XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxOCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE4XCI+MTglPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwMjBcIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cIjIwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMjBcIj4yMCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAtY3VzdG9tXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCJjdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcC1jdXN0b21cIj5DdXN0b20gQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXAtYW1vdW50XCIgbmFtZT1cInRpcC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGN1c3RvbSBhbW91bnRcIiBkaXNhYmxlZD4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIFRpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDdXN0b21UaXAoKXtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIik7XG4gICAgdmFyIGN1c3RvbUFtdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWFtb3VudFwiKTtcbiAgICBjdXN0b21BbXQuZGlzYWJsZWQgPSBzZWxlY3RlZC5jaGVja2VkID8gZmFsc2UgOiB0cnVlIFxuICAgIGlmICghY3VzdG9tQW10LmRpc2FibGVkKSB7IGN1c3RvbUFtdC5mb2N1cygpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXhNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGF4LWFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGF4LWFtb3VudFwiPkNhbGN1bGF0ZSBUYXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRheC1hbW91bnRcIiBuYW1lPVwidGF4LWFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGF4IGFtb3VudFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBUYXg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=