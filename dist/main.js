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
    guestTotal.innerHTML = "$".concat(guest.total);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJzYXZlVGF4IiwiY2FsY3VsYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXRlbU5hbWUiLCJnZXQiLCJpdGVtUHJpY2UiLCJndWVzdCIsIml0ZW0iLCJJdGVtIiwicHVzaCIsImFkZEl0ZW1Ub0JpbGwiLCJhZGRJdGVtVG9HdWVzdCIsImd1ZXN0TmFtZSIsIkd1ZXN0IiwiYWRkR3Vlc3RUb1RhYmxlIiwidGlwUmF0ZSIsInRpcEFtdCIsIk51bWJlciIsInNwbGl0Q3VzdG9tVGlwIiwiYXBwbHlUaXBSYXRlIiwidGF4QW10Iiwic3BsaXRUYXgiLCJpbm5lckhUTUwiLCJ0b0ZpeGVkIiwiZm9yRWFjaCIsInJhdGlvIiwiZ3Vlc3RUYXgiLCJuYW1lIiwiZ3Vlc3RUaXAiLCJwYXJzZUZsb2F0IiwiaXRlbUxpc3QiLCJ0ciIsImNyZWF0ZUVsZW1lbnQiLCJwcmljZSIsImFwcGVuZENoaWxkIiwidXNlciIsImZpbmQiLCJ1IiwiZ3Vlc3RCaWxsIiwic3VidG90YWxFbCIsImxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImd1ZXN0VG90YWwiLCJidXllcnMiLCJ3aW5kb3ciLCJvbmNsaWNrIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3NlTW9kYWwiLCJlbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFkZEl0ZW1Nb2RhbCIsInByb3BzIiwib3B0aW9ucyIsIm1hcCIsImJvZHkiLCJmb2N1cyIsImFkZEd1ZXN0TW9kYWwiLCJhZGRUaXBNb2RhbCIsInRvZ2dsZUN1c3RvbVRpcCIsInNlbGVjdGVkIiwiY3VzdG9tQW10IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiYWRkVGF4TW9kYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUEzQztBQUNIO0FBRU0sU0FBU0UsV0FBVCxHQUF1QjtBQUMxQixNQUFNcEIsR0FBRyxHQUFHdkQsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FTLEtBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxLQUFHLENBQUNuQixTQUFKO0FBd0JBcEMsVUFBUSxDQUFDd0UsSUFBVCxDQUFjeEIsV0FBZCxDQUEwQk8sR0FBMUI7QUFDSDtBQUVNLFNBQVNxQixlQUFULEdBQTBCO0FBQzdCLE1BQUlDLFFBQVEsR0FBRzdFLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixZQUF4QixDQUFmO0FBQ0EsTUFBSXdFLFNBQVMsR0FBRzlFLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixZQUF4QixDQUFoQjtBQUNBd0UsV0FBUyxDQUFDQyxRQUFWLEdBQXFCRixRQUFRLENBQUNHLE9BQVQsR0FBbUIsS0FBbkIsR0FBMkIsSUFBaEQ7O0FBQ0EsTUFBSSxDQUFDRixTQUFTLENBQUNDLFFBQWYsRUFBeUI7QUFBRUQsYUFBUyxDQUFDTCxLQUFWO0FBQW1COztBQUFBO0FBQ2pEO0FBRU0sU0FBU1EsV0FBVCxHQUF1QjtBQUMxQixNQUFNMUIsR0FBRyxHQUFHdkQsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FTLEtBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxLQUFHLENBQUNuQixTQUFKO0FBZ0JBcEMsVUFBUSxDQUFDd0UsSUFBVCxDQUFjeEIsV0FBZCxDQUEwQk8sR0FBMUI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNsSUQ7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21vZGFsLnNjc3NcIjtcbmltcG9ydCBHdWVzdCBmcm9tIFwiLi9zY3JpcHRzL2d1ZXN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9zY3JpcHRzL2l0ZW1cIjtcbmltcG9ydCAqIGFzIE1vZGFsIGZyb20gXCIuL3NjcmlwdHMvbW9kYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIGd1ZXN0czogW10sXG4gICAgc3VidG90YWw6IDAuMDAsXG4gICAgdGlwOiAwLjAwLFxuICAgIHRheDogMC4wMCxcbiAgICB0b3RhbDogMC4wMFxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2l0ZW1zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkSXRlbU1vZGFsKGN1cnJlbnRTdGF0ZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZUl0ZW0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdXNlcnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRHdWVzdE1vZGFsKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVVzZXIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdGlwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkVGlwTW9kYWwoKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMTVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDE4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAyMFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWN1c3RvbVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVGlwKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3RheFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZFRheE1vZGFsKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVRheCk7XG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2NhbGN1bGF0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsY3VsYXRlKTtcblxuZnVuY3Rpb24gc2F2ZUl0ZW0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgaXRlbU5hbWUgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLW5hbWVcIilcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLXByaWNlXCIpXG4gICAgY29uc3QgZ3Vlc3QgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLWd1ZXN0XCIpXG4gICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKGl0ZW1OYW1lLCBpdGVtUHJpY2UpXG4gICAgY29uc29sZS5sb2coaXRlbSlcbiAgICBjdXJyZW50U3RhdGUuaXRlbXMucHVzaChpdGVtKVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbiAgICBhZGRJdGVtVG9CaWxsKGl0ZW0pXG4gICAgYWRkSXRlbVRvR3Vlc3QoaXRlbSwgZ3Vlc3QpXG59XG5cbmZ1bmN0aW9uIHNhdmVVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGd1ZXN0TmFtZSA9IGZvcm1EYXRhLmdldChcImd1ZXN0LW5hbWVcIilcbiAgICBjb25zdCBndWVzdCA9IG5ldyBHdWVzdChndWVzdE5hbWUpXG4gICAgY29uc29sZS5sb2coZ3Vlc3QpXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5wdXNoKGd1ZXN0KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbiAgICBhZGRHdWVzdFRvVGFibGUoZ3Vlc3QpXG59XG5cbmZ1bmN0aW9uIHNhdmVUaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCB0aXBSYXRlID0gZm9ybURhdGEuZ2V0KFwidGlwLXJhdGVcIik7XG4gICAgY29uc3QgdGlwQW10ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInRpcC1hbW91bnRcIikpO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuICAgIGlmICh0aXBSYXRlID09PSBcImN1c3RvbVwiKSB7IHNwbGl0Q3VzdG9tVGlwKHRpcEFtdCkgfVxuICAgIGVsc2UgeyBhcHBseVRpcFJhdGUodGlwUmF0ZSkgfTtcbiAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXgoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IHRheEFtdCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJ0YXgtYW1vdW50XCIpKTtcbiAgICBzcGxpdFRheCh0YXhBbXQpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBzcGxpdFRheCh0YXhBbXQpIHtcbiAgICBjdXJyZW50U3RhdGUudGF4ID0gTnVtYmVyKHRheEFtdClcbiAgICBjb25zdCB0YXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRheCA+IHRkLnJpZ2h0XCIpXG4gICAgdGF4LmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGF4LnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBndWVzdC5zdWJ0b3RhbCAqIDEuMCAvIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbFxuICAgICAgICBjb25zdCB0YXggPSAodGF4QW10ICogcmF0aW8pLnRvRml4ZWQoMilcbiAgICAgICAgZ3Vlc3QudGF4ID0gdGF4IFxuICAgICAgICBjb25zdCBndWVzdFRheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXguJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUYXguaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRheH1gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc3BsaXRDdXN0b21UaXAodGlwQW10KSB7XG4gICAgY29uc29sZS5sb2codGlwQW10KVxuICAgIGN1cnJlbnRTdGF0ZS50aXAgPSBOdW1iZXIodGlwQW10KVxuICAgIGNvbnN0IHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGlwID4gdGQucmlnaHRcIilcbiAgICB0aXAuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50aXAudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBjb25zdCByYXRpbyA9IGd1ZXN0LnN1YnRvdGFsICogMS4wIC8gY3VycmVudFN0YXRlLnN1YnRvdGFsIFxuICAgICAgICBjb25zdCB0aXAgPSAodGlwQW10ICogcmF0aW8pLnRvRml4ZWQoMilcbiAgICAgICAgZ3Vlc3QudGlwID0gdGlwIFxuICAgICAgICBjb25zdCBndWVzdFRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXAuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUaXAuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRpcH1gXG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIGFwcGx5VGlwUmF0ZSh0aXBSYXRlKSB7XG4gICAgY29uc29sZS5sb2codGlwUmF0ZSlcbiAgICB0aXBSYXRlID0gcGFyc2VGbG9hdCh0aXBSYXRlKSAvIDEwMC4wXG4gICAgY29uc29sZS5sb2codGlwUmF0ZSlcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUuc3VidG90YWwpXG4gICAgY3VycmVudFN0YXRlLnRpcCA9IE51bWJlcihjdXJyZW50U3RhdGUuc3VidG90YWwpICogKHRpcFJhdGUpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlLnRpcClcblxuICAgIGNvbnN0IHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGlwID4gdGQucmlnaHRcIilcbiAgICB0aXAuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50aXAudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBndWVzdC50aXAgPSAoZ3Vlc3Quc3VidG90YWwgKiB0aXBSYXRlKS50b0ZpeGVkKDIpXG4gICAgICAgIGNvbnN0IGd1ZXN0VGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpcC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRpcC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudGlwfWAgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvQmlsbChpdGVtKXtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZSNpdGVtc1wiKSBcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICB0ci5pbm5lckhUTUwgPSBgXG4gICAgPHRkIGNsYXNzPVwibGVmdFwiIGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBpdGVtTGlzdC5hcHBlbmRDaGlsZCh0cilcbiAgICBcbiAgICBjdXJyZW50U3RhdGUuc3VidG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpXG4gICAgY29uc3Qgc3VidG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YnRvdGFsID4gdGQucmlnaHRcIikgXG4gICAgY29uc29sZS5sb2coc3VidG90YWwpXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YXRlLnN1YnRvdGFsKVxuICAgIHN1YnRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUuc3VidG90YWwudG9GaXhlZCgyKX1gXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KSB7XG4gICAgY29uc3QgdXNlciA9IGN1cnJlbnRTdGF0ZS5ndWVzdHMuZmluZCh1ID0+IHUubmFtZSA9PSBndWVzdClcbiAgICB1c2VyLml0ZW1zLnB1c2goaXRlbSlcbiAgICBjb25zdCBndWVzdEJpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtndWVzdH1gKVxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAke2l0ZW0ubmFtZX1cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCIgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBndWVzdEJpbGwuYXBwZW5kQ2hpbGQodHIpXG5cbiAgICB1c2VyLnN1YnRvdGFsID0gMFxuICAgIHVzZXIuaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB1c2VyLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKSApXG4gICAgY29uc29sZS5sb2codXNlci5zdWJ0b3RhbClcbiAgICBjb25zdCBzdWJ0b3RhbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1YnRvdGFsLiR7Z3Vlc3R9ID4gdGQucmlnaHRgKVxuICAgIHN1YnRvdGFsRWwuaW5uZXJIVE1MID0gYCQke3VzZXIuc3VidG90YWwudG9GaXhlZCgyKX1gXG5cbn1cblxuZnVuY3Rpb24gYWRkR3Vlc3RUb1RhYmxlKGd1ZXN0KXtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jb250ZW50I3VzZXJzXCIpIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJib3hcIlxuICAgIGRpdi5pZCA9IFwidXNlclwiXG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlciByb3dcIiBpZD1cInVzZXJzXCI+JHtndWVzdC5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiJHtndWVzdC5uYW1lfVwiIGlkPVwidXNlcnMgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInN1YnRvdGFsICR7Z3Vlc3QubmFtZX1cIiA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TdWJ0b3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0aXAgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VGlwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YXggJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VGF4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RhbCAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRTdGF0ZS50b3RhbCA9IGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCArIGN1cnJlbnRTdGF0ZS50aXAgKyBjdXJyZW50U3RhdGUudGF4XG4gICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsID4gdGQucmlnaHRcIilcbiAgICB0b3RhbC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRvdGFsLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgZ3Vlc3RUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b3RhbC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRvdGFsLmlubmVySFRNTCA9IGAkJHtndWVzdC50b3RhbH1gXG4gICAgfSlcbn1cblxuLy8gd2luZG93LmN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdOyAgXG4gICAgICAgIHRoaXMuc3VidG90YWwgPSAwO1xuICAgICAgICB0aGlzLnRpcCA9IDA7XG4gICAgICAgIHRoaXMudGF4ID0gMDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5zdWJ0b3RhbCkgKyBOdW1iZXIodGhpcy50aXApICsgTnVtYmVyKHRoaXMudGF4KSBcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7IFxuICAgICAgICB0aGlzLmJ1eWVycyA9IFtdOyBcbiAgICB9XG59Iiwid2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgbW9kYWwgc2NyZWVuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5tb2RhbC1zY3JlZW4nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Nb2RhbChwcm9wcykge1xuICAgIC8vIHZlcmlmaWNhdGlvbnM6IFxuICAgIC8vIGl0ZW0gbXVzdCBiZWxvbmcgdG8gYSBndWVzdCBcbiAgICBjb25zdCBvcHRpb25zID0gcHJvcHMuZ3Vlc3RzLm1hcCggZ3Vlc3QgPT4gYDxvcHRpb24gdmFsdWU9XCIke2d1ZXN0Lm5hbWV9XCI+JHtndWVzdC5uYW1lfTwvb3B0aW9uPmApIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPkl0ZW0gTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgbmFtZT1cIml0ZW0tbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLXByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tcHJpY2VcIiBuYW1lPVwiaXRlbS1wcmljZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1ndWVzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPkFzc2lnbiB0byBndWVzdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJpdGVtLWd1ZXN0XCIgbmFtZT1cIml0ZW0tZ3Vlc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNpdGVtLW5hbWVcIikuZm9jdXMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR3Vlc3RNb2RhbCgpIHtcbiAgICAvLyB2ZXJpZmljYXRpb25zOiBcbiAgICAvLyBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBcbiAgICAvLyBuYW1lcyBtdXN0IGJlIHVuaXF1ZSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ3Vlc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ3Vlc3QtbmFtZVwiPkd1ZXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImd1ZXN0LW5hbWVcIiBuYW1lPVwiZ3Vlc3QtbmFtZVwiIHZhbHVlPVwiVW50aXRsZWRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgR3Vlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNndWVzdC1uYW1lXCIpLmZvY3VzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpcE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXAtcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlbGVjdCBUaXAgUmF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxNVwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTUlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAxNVwiPjE1JTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE4XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxOCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE4XCI+MTglPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwMjBcIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cIjIwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMjBcIj4yMCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAtY3VzdG9tXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCJjdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcC1jdXN0b21cIj5DdXN0b20gQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXAtYW1vdW50XCIgbmFtZT1cInRpcC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGN1c3RvbSBhbW91bnRcIiBkaXNhYmxlZD4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIFRpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDdXN0b21UaXAoKXtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIik7XG4gICAgdmFyIGN1c3RvbUFtdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWFtb3VudFwiKTtcbiAgICBjdXN0b21BbXQuZGlzYWJsZWQgPSBzZWxlY3RlZC5jaGVja2VkID8gZmFsc2UgOiB0cnVlIFxuICAgIGlmICghY3VzdG9tQW10LmRpc2FibGVkKSB7IGN1c3RvbUFtdC5mb2N1cygpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXhNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGF4LWFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGF4LWFtb3VudFwiPkNhbGN1bGF0ZSBUYXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRheC1hbW91bnRcIiBuYW1lPVwidGF4LWFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGF4IGFtb3VudFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBUYXg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=