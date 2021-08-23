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
  var formData = new FormData(form);
  var itemName = formData.get("item-name");
  var itemPrice = formData.get("item-price");
  var guests = formData.getAll("item-guests");
  var itemQty = guests.length;
  var item = new _scripts_item__WEBPACK_IMPORTED_MODULE_4__["default"](itemName, Number(itemPrice * 1.0) / itemQty);

  for (var i = 0; i < itemQty; i++) {
    currentState.items.push(item);
    addItemToBill(item);
  }

  guests.forEach(function (guest) {
    return addItemToGuest(item, guest);
  });
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
}

function saveUser(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  var formData = new FormData(form);
  var guestName = formData.get("guest-name");
  var guest = new _scripts_guest__WEBPACK_IMPORTED_MODULE_3__["default"](guestName);
  currentState.guests.push(guest);
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
  addGuestToTable(guest);
}

function saveTip(e) {
  e.preventDefault();
  var form = document.querySelector("form");
  var formData = new FormData(form);
  var tipRate = formData.get("tip-rate");
  var tipAmt = Number(formData.get("tip-amount"));

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
  tipRate = parseFloat(tipRate) / 100.0;
  currentState.tip = Number(currentState.subtotal) * tipRate;
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
  // const options = props.guests.map( guest => `<option value="${guest.name}">${guest.name}</option>`) 
  var options = props.guests.map(function (guest) {
    return "\n        <input type=\"checkbox\" name=\"item-guests\" id=\"checkbox-".concat(guest.name, "\" value=\"").concat(guest.name, "\">\n        <label for=\"item-guest\">").concat(guest.name, "</label>\n        ");
  });
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"item-name\">\n                    <label for=\"item-name\">Item Name</label>\n                    <input type=\"text\" id=\"item-name\" name=\"item-name\" required>\n                </div>\n                <div id=\"item-price\">\n                    <label for=\"item-price\">Price</label>\n                    <input type=\"text\" id=\"item-price\" name=\"item-price\" required>\n                </div>\n              <div id=\"item-guests\">\n                Assign to guest(s): \n                ".concat(options, "\n              </div>\n              <div>\n              <button id=\"submit\"\">Add Item</button>\n              </div>\n              </form>\n              </div>\n              "); //   <label for="item-guest">Assign to guest</label>
  //   <select id="item-guest" name="item-guest">
  //       ${options}
  //   </select>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJzYXZlVGF4IiwiY2FsY3VsYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsImdldEFsbCIsIml0ZW1RdHkiLCJsZW5ndGgiLCJpdGVtIiwiSXRlbSIsIk51bWJlciIsImkiLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImZvckVhY2giLCJndWVzdCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiR3Vlc3QiLCJhZGRHdWVzdFRvVGFibGUiLCJ0aXBSYXRlIiwidGlwQW10Iiwic3BsaXRDdXN0b21UaXAiLCJhcHBseVRpcFJhdGUiLCJ0YXhBbXQiLCJzcGxpdFRheCIsImlubmVySFRNTCIsInRvRml4ZWQiLCJyYXRpbyIsImd1ZXN0VGF4IiwibmFtZSIsImd1ZXN0VGlwIiwicGFyc2VGbG9hdCIsIml0ZW1MaXN0IiwidHIiLCJjcmVhdGVFbGVtZW50IiwicHJpY2UiLCJhcHBlbmRDaGlsZCIsInVzZXIiLCJmaW5kIiwidSIsImd1ZXN0QmlsbCIsInN1YnRvdGFsRWwiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJndWVzdFRvdGFsIiwiYnV5ZXJzIiwid2luZG93Iiwib25jbGljayIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZU1vZGFsIiwiZWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRJdGVtTW9kYWwiLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJib2R5IiwiZm9jdXMiLCJhZGRHdWVzdE1vZGFsIiwiYWRkVGlwTW9kYWwiLCJ0b2dnbGVDdXN0b21UaXAiLCJzZWxlY3RlZCIsImN1c3RvbUFtdCIsImRpc2FibGVkIiwiY2hlY2tlZCIsImFkZFRheE1vZGFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFULENBQXdCLFlBQXhCLENBQWY7QUFDQSxNQUFJMEUsU0FBUyxHQUFHaEYsUUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLENBQWhCO0FBQ0EwRSxXQUFTLENBQUNDLFFBQVYsR0FBcUJGLFFBQVEsQ0FBQ0csT0FBVCxHQUFtQixLQUFuQixHQUEyQixJQUFoRDs7QUFDQSxNQUFJLENBQUNGLFNBQVMsQ0FBQ0MsUUFBZixFQUF5QjtBQUFFRCxhQUFTLENBQUNMLEtBQVY7QUFBbUI7O0FBQUE7QUFDakQ7QUFFTSxTQUFTUSxXQUFULEdBQXVCO0FBQzFCLE1BQU0xQixHQUFHLEdBQUd6RCxRQUFRLENBQUNnRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVMsS0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELEtBQUcsQ0FBQ2xCLFNBQUo7QUFnQkF2QyxVQUFRLENBQUMwRSxJQUFULENBQWN4QixXQUFkLENBQTBCTyxHQUExQjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3pJRDtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IEd1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ3Vlc3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL3NjcmlwdHMvaXRlbVwiO1xuaW1wb3J0ICogYXMgTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9tb2RhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZ3Vlc3RzOiBbXSxcbiAgICBzdWJ0b3RhbDogMC4wMCxcbiAgICB0aXA6IDAuMDAsXG4gICAgdGF4OiAwLjAwLFxuICAgIHRvdGFsOiAwLjAwXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jaXRlbXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRJdGVtTW9kYWwoY3VycmVudFN0YXRlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSXRlbSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN1c2Vyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEd1ZXN0TW9kYWwoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVXNlcik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0aXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRUaXBNb2RhbCgpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAxNVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMThcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDIwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAtY3VzdG9tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUaXApO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdGF4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkVGF4TW9kYWwoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVGF4KTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jY2FsY3VsYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxjdWxhdGUpO1xuXG5mdW5jdGlvbiBzYXZlSXRlbShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgaXRlbU5hbWUgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLW5hbWVcIilcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLXByaWNlXCIpXG4gICAgY29uc3QgZ3Vlc3RzID0gZm9ybURhdGEuZ2V0QWxsKFwiaXRlbS1ndWVzdHNcIilcbiAgICBjb25zdCBpdGVtUXR5ID0gZ3Vlc3RzLmxlbmd0aFxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShpdGVtTmFtZSwgTnVtYmVyKGl0ZW1QcmljZSAqIDEuMCkvaXRlbVF0eSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1RdHk7IGkrKykge1xuICAgICAgICBjdXJyZW50U3RhdGUuaXRlbXMucHVzaChpdGVtKVxuICAgICAgICBhZGRJdGVtVG9CaWxsKGl0ZW0pXG4gICAgfVxuICAgIGd1ZXN0cy5mb3JFYWNoKCBndWVzdCA9PiBhZGRJdGVtVG9HdWVzdChpdGVtLCBndWVzdCkpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpXG59XG5cbmZ1bmN0aW9uIHNhdmVVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBndWVzdE5hbWUgPSBmb3JtRGF0YS5nZXQoXCJndWVzdC1uYW1lXCIpXG4gICAgY29uc3QgZ3Vlc3QgPSBuZXcgR3Vlc3QoZ3Vlc3ROYW1lKVxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMucHVzaChndWVzdClcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBhZGRHdWVzdFRvVGFibGUoZ3Vlc3QpXG59XG5cbmZ1bmN0aW9uIHNhdmVUaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCB0aXBSYXRlID0gZm9ybURhdGEuZ2V0KFwidGlwLXJhdGVcIik7XG4gICAgY29uc3QgdGlwQW10ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInRpcC1hbW91bnRcIikpO1xuICAgIGlmICh0aXBSYXRlID09PSBcImN1c3RvbVwiKSB7IHNwbGl0Q3VzdG9tVGlwKHRpcEFtdCkgfVxuICAgIGVsc2UgeyBhcHBseVRpcFJhdGUodGlwUmF0ZSkgfTtcbiAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXgoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IHRheEFtdCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJ0YXgtYW1vdW50XCIpKTtcbiAgICBzcGxpdFRheCh0YXhBbXQpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBzcGxpdFRheCh0YXhBbXQpIHtcbiAgICBjdXJyZW50U3RhdGUudGF4ID0gTnVtYmVyKHRheEFtdClcbiAgICBjb25zdCB0YXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRheCA+IHRkLnJpZ2h0XCIpXG4gICAgdGF4LmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGF4LnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBndWVzdC5zdWJ0b3RhbCAqIDEuMCAvIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbFxuICAgICAgICBjb25zdCB0YXggPSAodGF4QW10ICogcmF0aW8pLnRvRml4ZWQoMilcbiAgICAgICAgZ3Vlc3QudGF4ID0gdGF4IFxuICAgICAgICBjb25zdCBndWVzdFRheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXguJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUYXguaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRheH1gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc3BsaXRDdXN0b21UaXAodGlwQW10KSB7XG4gICAgY3VycmVudFN0YXRlLnRpcCA9IE51bWJlcih0aXBBbXQpXG4gICAgY29uc3QgdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXAgPiB0ZC5yaWdodFwiKVxuICAgIHRpcC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRpcC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZ3Vlc3Quc3VidG90YWwgKiAxLjAgLyBjdXJyZW50U3RhdGUuc3VidG90YWwgXG4gICAgICAgIGNvbnN0IHRpcCA9ICh0aXBBbXQgKiByYXRpbykudG9GaXhlZCgyKVxuICAgICAgICBndWVzdC50aXAgPSB0aXAgXG4gICAgICAgIGNvbnN0IGd1ZXN0VGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpcC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRpcC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudGlwfWBcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gYXBwbHlUaXBSYXRlKHRpcFJhdGUpIHtcbiAgICB0aXBSYXRlID0gcGFyc2VGbG9hdCh0aXBSYXRlKSAvIDEwMC4wXG4gICAgY3VycmVudFN0YXRlLnRpcCA9IE51bWJlcihjdXJyZW50U3RhdGUuc3VidG90YWwpICogKHRpcFJhdGUpXG4gICAgY29uc3QgdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXAgPiB0ZC5yaWdodFwiKVxuICAgIHRpcC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRpcC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGd1ZXN0LnRpcCA9IChndWVzdC5zdWJ0b3RhbCAqIHRpcFJhdGUpLnRvRml4ZWQoMilcbiAgICAgICAgY29uc3QgZ3Vlc3RUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGlwLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGlwLmlubmVySFRNTCA9IGAkJHtndWVzdC50aXB9YCBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9CaWxsKGl0ZW0pe1xuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlI2l0ZW1zXCIpIFxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICA8dGQgY2xhc3M9XCJsZWZ0XCIgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAke2l0ZW0ubmFtZX1cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCIgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgJCR7TnVtYmVyKGl0ZW0ucHJpY2UpLnRvRml4ZWQoMil9ICAgICAgXG4gICAgPC90ZD4gXG4gICAgYFxuICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKHRyKVxuICAgIFxuICAgIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCArPSBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICBjb25zdCBzdWJ0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VidG90YWwgPiB0ZC5yaWdodFwiKSBcbiAgICBzdWJ0b3RhbC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9HdWVzdChpdGVtLCBndWVzdCkge1xuICAgIGNvbnN0IHVzZXIgPSBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZpbmQodSA9PiB1Lm5hbWUgPT0gZ3Vlc3QpXG4gICAgdXNlci5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgY29uc3QgZ3Vlc3RCaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z3Vlc3R9YClcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKVxuICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICA8dGQgY2xhc3M9XCJsZWZ0XCIgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgZ3Vlc3RCaWxsLmFwcGVuZENoaWxkKHRyKVxuXG4gICAgdXNlci5zdWJ0b3RhbCA9IDBcbiAgICB1c2VyLml0ZW1zLmZvckVhY2goIGl0ZW0gPT4gdXNlci5zdWJ0b3RhbCArPSBOdW1iZXIoaXRlbS5wcmljZSkgKVxuICAgIGNvbnN0IHN1YnRvdGFsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3VidG90YWwuJHtndWVzdH0gPiB0ZC5yaWdodGApXG4gICAgc3VidG90YWxFbC5pbm5lckhUTUwgPSBgJCR7dXNlci5zdWJ0b3RhbC50b0ZpeGVkKDIpfWBcblxufVxuXG5mdW5jdGlvbiBhZGRHdWVzdFRvVGFibGUoZ3Vlc3Qpe1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNvbnRlbnQjdXNlcnNcIikgXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5jbGFzc05hbWUgPSBcImJveFwiXG4gICAgZGl2LmlkID0gXCJ1c2VyXCJcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIHJvd1wiIGlkPVwidXNlcnNcIj4ke2d1ZXN0Lm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgaWQ9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCIke2d1ZXN0Lm5hbWV9XCIgaWQ9XCJ1c2VycyAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCIgaWQ9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwic3VidG90YWwgJHtndWVzdC5uYW1lfVwiID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlN1YnRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRpcCAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UaXA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRheCAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UYXg8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRvdGFsICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3VycmVudFN0YXRlLnRvdGFsID0gY3VycmVudFN0YXRlLnN1YnRvdGFsICsgY3VycmVudFN0YXRlLnRpcCArIGN1cnJlbnRTdGF0ZS50YXhcbiAgICBjb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWwgPiB0ZC5yaWdodFwiKVxuICAgIHRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudG90YWwudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBjb25zdCBndWVzdFRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvdGFsLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VG90YWwuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRvdGFsLnRvRml4ZWQoMil9YFxuICAgIH0pXG59XG5cbi8vIHdpbmRvdy5jdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGVcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTsgIFxuICAgICAgICB0aGlzLnN1YnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy50aXAgPSAwO1xuICAgICAgICB0aGlzLnRheCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsKCkge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3VidG90YWwpICsgTnVtYmVyKHRoaXMudGlwKSArIE51bWJlcih0aGlzLnRheCkgXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlOyBcbiAgICAgICAgdGhpcy5idXllcnMgPSBbXTsgXG4gICAgfVxufSIsIndpbmRvdy5vbmNsaWNrID0gZSA9PiB7XG4gICAgLy8gY2xvc2UgbW9kYWwgYnkgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIG1vZGFsIHNjcmVlblxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcubW9kYWwtc2NyZWVuJykpIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtTW9kYWwocHJvcHMpIHtcbiAgICAvLyB2ZXJpZmljYXRpb25zOiBcbiAgICAvLyBpdGVtIG11c3QgYmVsb25nIHRvIGEgZ3Vlc3QgXG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHByb3BzLmd1ZXN0cy5tYXAoIGd1ZXN0ID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtndWVzdC5uYW1lfVwiPiR7Z3Vlc3QubmFtZX08L29wdGlvbj5gKSBcbiAgICBjb25zdCBvcHRpb25zID0gcHJvcHMuZ3Vlc3RzLm1hcCggZ3Vlc3QgPT4gXG4gICAgICAgIGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLWd1ZXN0c1wiIGlkPVwiY2hlY2tib3gtJHtndWVzdC5uYW1lfVwiIHZhbHVlPVwiJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPiR7Z3Vlc3QubmFtZX08L2xhYmVsPlxuICAgICAgICBgKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5JdGVtIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIG5hbWU9XCJpdGVtLW5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1wcmljZVwiPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLXByaWNlXCIgbmFtZT1cIml0ZW0tcHJpY2VcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tZ3Vlc3RzXCI+XG4gICAgICAgICAgICAgICAgQXNzaWduIHRvIGd1ZXN0KHMpOiBcbiAgICAgICAgICAgICAgICAke29wdGlvbnN9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPkFzc2lnbiB0byBndWVzdDwvbGFiZWw+XG4gICAgICAgICAgICAvLyAgIDxzZWxlY3QgaWQ9XCJpdGVtLWd1ZXN0XCIgbmFtZT1cIml0ZW0tZ3Vlc3RcIj5cbiAgICAgICAgICAgIC8vICAgICAgICR7b3B0aW9uc31cbiAgICAgICAgICAgIC8vICAgPC9zZWxlY3Q+XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2l0ZW0tbmFtZVwiKS5mb2N1cygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHdWVzdE1vZGFsKCkge1xuICAgIC8vIHZlcmlmaWNhdGlvbnM6IFxuICAgIC8vIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIFxuICAgIC8vIG5hbWVzIG11c3QgYmUgdW5pcXVlIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJndWVzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJndWVzdC1uYW1lXCI+R3Vlc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ3Vlc3QtbmFtZVwiIG5hbWU9XCJndWVzdC1uYW1lXCIgdmFsdWU9XCJVbnRpdGxlZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBHdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2d1ZXN0LW5hbWVcIikuZm9jdXMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGlwTW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRpcC1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+U2VsZWN0IFRpcCBSYXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE1XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxNSVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE1XCI+MTUlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwMThcIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cIjE4JVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMThcIj4xOCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAyMFwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMjAlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAyMFwiPjIwJTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcC1jdXN0b21cIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cImN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwLWN1c3RvbVwiPkN1c3RvbSBBbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpcC1hbW91bnRcIiBuYW1lPVwidGlwLWFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY3VzdG9tIGFtb3VudFwiIGRpc2FibGVkPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgVGlwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUN1c3RvbVRpcCgpe1xuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWN1c3RvbVwiKTtcbiAgICB2YXIgY3VzdG9tQW10ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAtYW1vdW50XCIpO1xuICAgIGN1c3RvbUFtdC5kaXNhYmxlZCA9IHNlbGVjdGVkLmNoZWNrZWQgPyBmYWxzZSA6IHRydWUgXG4gICAgaWYgKCFjdXN0b21BbXQuZGlzYWJsZWQpIHsgY3VzdG9tQW10LmZvY3VzKCkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRheE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXgtYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXgtYW1vdW50XCI+Q2FsY3VsYXRlIFRheDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGF4LWFtb3VudFwiIG5hbWU9XCJ0YXgtYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXggYW1vdW50XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIFRheDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==