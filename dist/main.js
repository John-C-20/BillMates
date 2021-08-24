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
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["addGuestModal"](currentState);
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  var _console;

  // verifications: 
  // item must belong to a guest 
  // const options = props.guests.map( guest => `<option value="${guest.name}">${guest.name}</option>`) 
  var options = props.guests.map(function (guest) {
    return "<div>\n        <input type=\"checkbox\" name=\"item-guests\" id=\"checkbox-".concat(guest.name, "\" value=\"").concat(guest.name, "\">\n        <label for=\"item-guest\">").concat(guest.name, "</label>\n        <div>\n        ");
  });

  (_console = console).log.apply(_console, ["options"].concat(_toConsumableArray(options)));

  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"item-name\">\n                    <label for=\"item-name\">Item Name</label>\n                    <input type=\"text\" id=\"item-name\" name=\"item-name\" required>\n                </div>\n                <div id=\"item-price\">\n                    <label for=\"item-price\">Price</label>\n                    <input type=\"text\" id=\"item-price\" name=\"item-price\" required>\n                </div>\n              <div id=\"item-guests\">\n                Assign to guest(s): \n                ".concat(options.join(""), "\n              </div>\n              <div>\n              <button id=\"submit\"\">Add Item</button>\n              </div>\n              </form>\n              </div>\n              "); //   <label for="item-guest">Assign to guest</label>
  //   <select id="item-guest" name="item-guest">
  //       ${options}
  //   </select>

  document.body.appendChild(div);
  document.querySelector("input#item-name").focus();
}
function addGuestModal(props) {
  // verifications: 
  // name must start with a letter 
  // names must be unique 
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"guest-name\">\n                    <label for=\"guest-name\">Guest Name</label>\n                    <input type=\"text\" id=\"guest-name\" name=\"guest-name\" value=\"guest".concat(props.guests.length + 1, "\" placeholder=\"Enter guest name\" required>\n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Guest</button>\n                </div>\n            </form>\n        </div>\n    ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJzYXZlVGF4IiwiY2FsY3VsYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsImdldEFsbCIsIml0ZW1RdHkiLCJsZW5ndGgiLCJpdGVtIiwiSXRlbSIsIk51bWJlciIsImkiLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImZvckVhY2giLCJndWVzdCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiR3Vlc3QiLCJhZGRHdWVzdFRvVGFibGUiLCJ0aXBSYXRlIiwidGlwQW10Iiwic3BsaXRDdXN0b21UaXAiLCJhcHBseVRpcFJhdGUiLCJ0YXhBbXQiLCJzcGxpdFRheCIsImlubmVySFRNTCIsInRvRml4ZWQiLCJyYXRpbyIsImd1ZXN0VGF4IiwibmFtZSIsImd1ZXN0VGlwIiwicGFyc2VGbG9hdCIsIml0ZW1MaXN0IiwidHIiLCJjcmVhdGVFbGVtZW50IiwicHJpY2UiLCJhcHBlbmRDaGlsZCIsInVzZXIiLCJmaW5kIiwidSIsImd1ZXN0QmlsbCIsInN1YnRvdGFsRWwiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJndWVzdFRvdGFsIiwiYnV5ZXJzIiwid2luZG93Iiwib25jbGljayIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZU1vZGFsIiwiZWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRJdGVtTW9kYWwiLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImJvZHkiLCJmb2N1cyIsImFkZEd1ZXN0TW9kYWwiLCJhZGRUaXBNb2RhbCIsInRvZ2dsZUN1c3RvbVRpcCIsInNlbGVjdGVkIiwiY3VzdG9tQW10IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiYWRkVGF4TW9kYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFB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RyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELEtBQUcsQ0FBQ2xCLFNBQUo7QUF3QkF2QyxVQUFRLENBQUM2RSxJQUFULENBQWMzQixXQUFkLENBQTBCTyxHQUExQjtBQUNIO0FBRU0sU0FBU3dCLGVBQVQsR0FBMEI7QUFDN0IsTUFBSUMsUUFBUSxHQUFHbEYsUUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLENBQWY7QUFDQSxNQUFJNkUsU0FBUyxHQUFHbkYsUUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLENBQWhCO0FBQ0E2RSxXQUFTLENBQUNDLFFBQVYsR0FBcUJGLFFBQVEsQ0FBQ0csT0FBVCxHQUFtQixLQUFuQixHQUEyQixJQUFoRDs7QUFDQSxNQUFJLENBQUNGLFNBQVMsQ0FBQ0MsUUFBZixFQUF5QjtBQUFFRCxhQUFTLENBQUNMLEtBQVY7QUFBbUI7O0FBQUE7QUFDakQ7QUFFTSxTQUFTUSxXQUFULEdBQXVCO0FBQzFCLE1BQU03QixHQUFHLEdBQUd6RCxRQUFRLENBQUNnRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVMsS0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELEtBQUcsQ0FBQ2xCLFNBQUo7QUFnQkF2QyxVQUFRLENBQUM2RSxJQUFULENBQWMzQixXQUFkLENBQTBCTyxHQUExQjtBQUNILEM7Ozs7Ozs7Ozs7OztBQzNJRDtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IEd1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ3Vlc3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL3NjcmlwdHMvaXRlbVwiO1xuaW1wb3J0ICogYXMgTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9tb2RhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZ3Vlc3RzOiBbXSxcbiAgICBzdWJ0b3RhbDogMC4wMCxcbiAgICB0aXA6IDAuMDAsXG4gICAgdGF4OiAwLjAwLFxuICAgIHRvdGFsOiAwLjAwXG59XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNpdGVtc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEl0ZW1Nb2RhbChjdXJyZW50U3RhdGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVJdGVtKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3VzZXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkR3Vlc3RNb2RhbChjdXJyZW50U3RhdGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVVc2VyKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3RpcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZFRpcE1vZGFsKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDE1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAxOFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMjBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVRpcCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0YXhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRUYXhNb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUYXgpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNjYWxjdWxhdGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGN1bGF0ZSk7XG5cbmZ1bmN0aW9uIHNhdmVJdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBpdGVtTmFtZSA9IGZvcm1EYXRhLmdldChcIml0ZW0tbmFtZVwiKVxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGZvcm1EYXRhLmdldChcIml0ZW0tcHJpY2VcIilcbiAgICBjb25zdCBndWVzdHMgPSBmb3JtRGF0YS5nZXRBbGwoXCJpdGVtLWd1ZXN0c1wiKVxuICAgIGNvbnN0IGl0ZW1RdHkgPSBndWVzdHMubGVuZ3RoXG4gICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKGl0ZW1OYW1lLCBOdW1iZXIoaXRlbVByaWNlICogMS4wKS9pdGVtUXR5KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVF0eTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZS5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIGFkZEl0ZW1Ub0JpbGwoaXRlbSlcbiAgICB9XG4gICAgZ3Vlc3RzLmZvckVhY2goIGd1ZXN0ID0+IGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KSlcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbn1cblxuZnVuY3Rpb24gc2F2ZVVzZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGd1ZXN0TmFtZSA9IGZvcm1EYXRhLmdldChcImd1ZXN0LW5hbWVcIilcbiAgICBjb25zdCBndWVzdCA9IG5ldyBHdWVzdChndWVzdE5hbWUpXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5wdXNoKGd1ZXN0KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGFkZEd1ZXN0VG9UYWJsZShndWVzdClcbn1cblxuZnVuY3Rpb24gc2F2ZVRpcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IHRpcFJhdGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXAtcmF0ZVwiKTtcbiAgICBjb25zdCB0aXBBbXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwidGlwLWFtb3VudFwiKSk7XG4gICAgaWYgKHRpcFJhdGUgPT09IFwiY3VzdG9tXCIpIHsgc3BsaXRDdXN0b21UaXAodGlwQW10KSB9XG4gICAgZWxzZSB7IGFwcGx5VGlwUmF0ZSh0aXBSYXRlKSB9O1xuICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRheChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgdGF4QW10ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInRheC1hbW91bnRcIikpO1xuICAgIHNwbGl0VGF4KHRheEFtdClcbiAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0VGF4KHRheEFtdCkge1xuICAgIGN1cnJlbnRTdGF0ZS50YXggPSBOdW1iZXIodGF4QW10KVxuICAgIGNvbnN0IHRheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGF4ID4gdGQucmlnaHRcIilcbiAgICB0YXguaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50YXgudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBjb25zdCByYXRpbyA9IGd1ZXN0LnN1YnRvdGFsICogMS4wIC8gY3VycmVudFN0YXRlLnN1YnRvdGFsXG4gICAgICAgIGNvbnN0IHRheCA9ICh0YXhBbXQgKiByYXRpbykudG9GaXhlZCgyKVxuICAgICAgICBndWVzdC50YXggPSB0YXggXG4gICAgICAgIGNvbnN0IGd1ZXN0VGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRheC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRheC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudGF4fWBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzcGxpdEN1c3RvbVRpcCh0aXBBbXQpIHtcbiAgICBjdXJyZW50U3RhdGUudGlwID0gTnVtYmVyKHRpcEFtdClcbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpcCA+IHRkLnJpZ2h0XCIpXG4gICAgdGlwLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGlwLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBndWVzdC5zdWJ0b3RhbCAqIDEuMCAvIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCBcbiAgICAgICAgY29uc3QgdGlwID0gKHRpcEFtdCAqIHJhdGlvKS50b0ZpeGVkKDIpXG4gICAgICAgIGd1ZXN0LnRpcCA9IHRpcCBcbiAgICAgICAgY29uc3QgZ3Vlc3RUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGlwLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGlwLmlubmVySFRNTCA9IGAkJHtndWVzdC50aXB9YFxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBhcHBseVRpcFJhdGUodGlwUmF0ZSkge1xuICAgIHRpcFJhdGUgPSBwYXJzZUZsb2F0KHRpcFJhdGUpIC8gMTAwLjBcbiAgICBjdXJyZW50U3RhdGUudGlwID0gTnVtYmVyKGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCkgKiAodGlwUmF0ZSlcbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpcCA+IHRkLnJpZ2h0XCIpXG4gICAgdGlwLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGlwLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgZ3Vlc3QudGlwID0gKGd1ZXN0LnN1YnRvdGFsICogdGlwUmF0ZSkudG9GaXhlZCgyKVxuICAgICAgICBjb25zdCBndWVzdFRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXAuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUaXAuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRpcH1gIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0JpbGwoaXRlbSl7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGUjaXRlbXNcIikgXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICR7aXRlbS5uYW1lfVxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicmlnaHRcIiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQodHIpXG4gICAgXG4gICAgY3VycmVudFN0YXRlLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKVxuICAgIGNvbnN0IHN1YnRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0b3RhbCA+IHRkLnJpZ2h0XCIpIFxuICAgIHN1YnRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUuc3VidG90YWwudG9GaXhlZCgyKX1gXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KSB7XG4gICAgY29uc3QgdXNlciA9IGN1cnJlbnRTdGF0ZS5ndWVzdHMuZmluZCh1ID0+IHUubmFtZSA9PSBndWVzdClcbiAgICB1c2VyLml0ZW1zLnB1c2goaXRlbSlcbiAgICBjb25zdCBndWVzdEJpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtndWVzdH1gKVxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAke2l0ZW0ubmFtZX1cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCIgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBndWVzdEJpbGwuYXBwZW5kQ2hpbGQodHIpXG5cbiAgICB1c2VyLnN1YnRvdGFsID0gMFxuICAgIHVzZXIuaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB1c2VyLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKSApXG4gICAgY29uc3Qgc3VidG90YWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdWJ0b3RhbC4ke2d1ZXN0fSA+IHRkLnJpZ2h0YClcbiAgICBzdWJ0b3RhbEVsLmlubmVySFRNTCA9IGAkJHt1c2VyLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxuXG59XG5cbmZ1bmN0aW9uIGFkZEd1ZXN0VG9UYWJsZShndWVzdCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29udGVudCN1c2Vyc1wiKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiYm94XCJcbiAgICBkaXYuaWQgPSBcInVzZXJcIlxuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgcm93XCIgaWQ9XCJ1c2Vyc1wiPiR7Z3Vlc3QubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIiR7Z3Vlc3QubmFtZX1cIiBpZD1cInVzZXJzICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJzdWJ0b3RhbCAke2d1ZXN0Lm5hbWV9XCIgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3VidG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGlwICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRpcDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGF4ICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRheDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG90YWwgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjdXJyZW50U3RhdGUudG90YWwgPSBjdXJyZW50U3RhdGUuc3VidG90YWwgKyBjdXJyZW50U3RhdGUudGlwICsgY3VycmVudFN0YXRlLnRheFxuICAgIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3RhbCA+IHRkLnJpZ2h0XCIpXG4gICAgdG90YWwuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50b3RhbC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IGd1ZXN0VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG90YWwuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUb3RhbC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudG90YWwudG9GaXhlZCgyKX1gXG4gICAgfSlcbn1cblxuLy8gd2luZG93LmN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdOyAgXG4gICAgICAgIHRoaXMuc3VidG90YWwgPSAwO1xuICAgICAgICB0aGlzLnRpcCA9IDA7XG4gICAgICAgIHRoaXMudGF4ID0gMDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5zdWJ0b3RhbCkgKyBOdW1iZXIodGhpcy50aXApICsgTnVtYmVyKHRoaXMudGF4KSBcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7IFxuICAgICAgICB0aGlzLmJ1eWVycyA9IFtdOyBcbiAgICB9XG59Iiwid2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgbW9kYWwgc2NyZWVuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5tb2RhbC1zY3JlZW4nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Nb2RhbChwcm9wcykge1xuICAgIC8vIHZlcmlmaWNhdGlvbnM6IFxuICAgIC8vIGl0ZW0gbXVzdCBiZWxvbmcgdG8gYSBndWVzdCBcbiAgICAvLyBjb25zdCBvcHRpb25zID0gcHJvcHMuZ3Vlc3RzLm1hcCggZ3Vlc3QgPT4gYDxvcHRpb24gdmFsdWU9XCIke2d1ZXN0Lm5hbWV9XCI+JHtndWVzdC5uYW1lfTwvb3B0aW9uPmApIFxuICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wcy5ndWVzdHMubWFwKCBndWVzdCA9PiBcbiAgICAgICAgYDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaXRlbS1ndWVzdHNcIiBpZD1cImNoZWNrYm94LSR7Z3Vlc3QubmFtZX1cIiB2YWx1ZT1cIiR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tZ3Vlc3RcIj4ke2d1ZXN0Lm5hbWV9PC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgYCkgXG4gICAgY29uc29sZS5sb2coXCJvcHRpb25zXCIsIC4uLm9wdGlvbnMpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+SXRlbSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBuYW1lPVwiaXRlbS1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tcHJpY2VcIj5QcmljZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1wcmljZVwiIG5hbWU9XCJpdGVtLXByaWNlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLWd1ZXN0c1wiPlxuICAgICAgICAgICAgICAgIEFzc2lnbiB0byBndWVzdChzKTogXG4gICAgICAgICAgICAgICAgJHtvcHRpb25zLmpvaW4oXCJcIil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPkFzc2lnbiB0byBndWVzdDwvbGFiZWw+XG4gICAgICAgICAgICAvLyAgIDxzZWxlY3QgaWQ9XCJpdGVtLWd1ZXN0XCIgbmFtZT1cIml0ZW0tZ3Vlc3RcIj5cbiAgICAgICAgICAgIC8vICAgICAgICR7b3B0aW9uc31cbiAgICAgICAgICAgIC8vICAgPC9zZWxlY3Q+XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2l0ZW0tbmFtZVwiKS5mb2N1cygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHdWVzdE1vZGFsKHByb3BzKSB7XG4gICAgLy8gdmVyaWZpY2F0aW9uczogXG4gICAgLy8gbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgXG4gICAgLy8gbmFtZXMgbXVzdCBiZSB1bmlxdWUgXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImd1ZXN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImd1ZXN0LW5hbWVcIj5HdWVzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJndWVzdC1uYW1lXCIgbmFtZT1cImd1ZXN0LW5hbWVcIiB2YWx1ZT1cImd1ZXN0JHtwcm9wcy5ndWVzdHMubGVuZ3RoKzF9XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBndWVzdCBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEd1ZXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZ3Vlc3QtbmFtZVwiKS5mb2N1cygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaXBNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGlwLXJhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5TZWxlY3QgVGlwIFJhdGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwMTVcIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cIjE1JVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMTVcIj4xNSU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxOFwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTglXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAxOFwiPjE4JTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDIwXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIyMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDIwXCI+MjAlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwLWN1c3RvbVwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAtY3VzdG9tXCI+Q3VzdG9tIEFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGlwLWFtb3VudFwiIG5hbWU9XCJ0aXAtYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjdXN0b20gYW1vdW50XCIgZGlzYWJsZWQ+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBUaXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ3VzdG9tVGlwKCl7XG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAtY3VzdG9tXCIpO1xuICAgIHZhciBjdXN0b21BbXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1hbW91bnRcIik7XG4gICAgY3VzdG9tQW10LmRpc2FibGVkID0gc2VsZWN0ZWQuY2hlY2tlZCA/IGZhbHNlIDogdHJ1ZSBcbiAgICBpZiAoIWN1c3RvbUFtdC5kaXNhYmxlZCkgeyBjdXN0b21BbXQuZm9jdXMoKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGF4TW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRheC1hbW91bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRheC1hbW91bnRcIj5DYWxjdWxhdGUgVGF4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXgtYW1vdW50XCIgbmFtZT1cInRheC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRheCBhbW91bnRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgVGF4PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9