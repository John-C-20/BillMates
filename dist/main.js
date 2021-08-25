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
document.querySelector("button#instructions").addEventListener("click", _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["instructionsModal"]);

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
/*! exports provided: closeModal, addItemModal, addGuestModal, addTipModal, toggleCustomTip, addTaxModal, instructionsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemModal", function() { return addItemModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGuestModal", function() { return addGuestModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTipModal", function() { return addTipModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCustomTip", function() { return toggleCustomTip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaxModal", function() { return addTaxModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructionsModal", function() { return instructionsModal; });
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
    return "\n        <div>\n        <input type=\"checkbox\" name=\"item-guests\" id=\"checkbox-".concat(guest.name, "\" value=\"").concat(guest.name, "\">\n        <label for=\"item-guest\">").concat(guest.name, "</label>\n        </div>\n        ");
  });

  (_console = console).log.apply(_console, ["options"].concat(_toConsumableArray(options)));

  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"item-name\">\n                    <label for=\"item-name\">Item Name</label>\n                    <input type=\"text\" id=\"item-name\" name=\"item-name\" required>\n                </div>\n                <div id=\"item-price\">\n                    <label for=\"item-price\">Price</label>\n                    <input type=\"text\" id=\"item-price\" name=\"item-price\" required>\n                </div>\n                <div id=\"item-guests\">\n                    Assign to guest(s): \n                    <div></div>\n                    <div></div>\n                    ".concat(options.join(""), "\n                </div>\n\n              <button id=\"submit\"\">Add Item</button>\n\n            </form>\n        </div>\n              "); //   <label for="item-guest">Assign to guest</label>
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
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"guest-name\">\n                    <label for=\"guest-name\">Guest Name</label>\n                    <input type=\"text\" id=\"guest-name\" name=\"guest-name\" value=\"Guest".concat(props.guests.length + 1, "\" placeholder=\"Enter guest name\" required>\n                </div>\n                <button id=\"submit\"\">Add Guest</button>\n            </form>\n        </div>\n    ");
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
function instructionsModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"instructions\">\n                    <h2> How to Use </h2> \n                    <ol>\n                        <li> Use the \"Add Guest\" button to add all recipients to the bill </li>\n                        <li> Next, add items to the bill and assign them to one or more guests </li> \n                        <li> One all items have been added, press \"Add Tip\" to choose a tip rate or enter a custom tip amount </li> \n                        <li> Add the tax amount displayed on your bill or receipt </li> \n                        <li> Finally, press \"Calculate\" to calculate the total amount of your bill as well as the individual totals owed by each guest </li>\n                    </ol>\n                </div>\n    \n                <button id=\"submit\">Done</button>\n\n            </form>\n        </div>\n    ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJzYXZlVGF4IiwiY2FsY3VsYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsImdldEFsbCIsIml0ZW1RdHkiLCJsZW5ndGgiLCJpdGVtIiwiSXRlbSIsIk51bWJlciIsImkiLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImZvckVhY2giLCJndWVzdCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiR3Vlc3QiLCJhZGRHdWVzdFRvVGFibGUiLCJ0aXBSYXRlIiwidGlwQW10Iiwic3BsaXRDdXN0b21UaXAiLCJhcHBseVRpcFJhdGUiLCJ0YXhBbXQiLCJzcGxpdFRheCIsImlubmVySFRNTCIsInRvRml4ZWQiLCJyYXRpbyIsImd1ZXN0VGF4IiwibmFtZSIsImd1ZXN0VGlwIiwicGFyc2VGbG9hdCIsIml0ZW1MaXN0IiwidHIiLCJjcmVhdGVFbGVtZW50IiwicHJpY2UiLCJhcHBlbmRDaGlsZCIsInVzZXIiLCJmaW5kIiwidSIsImd1ZXN0QmlsbCIsInN1YnRvdGFsRWwiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJndWVzdFRvdGFsIiwiYnV5ZXJzIiwid2luZG93Iiwib25jbGljayIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZU1vZGFsIiwiZWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRJdGVtTW9kYWwiLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImJvZHkiLCJmb2N1cyIsImFkZEd1ZXN0TW9kYWwiLCJhZGRUaXBNb2RhbCIsInRvZ2dsZUN1c3RvbVRpcCIsInNlbGVjdGVkIiwiY3VzdG9tQW10IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiYWRkVGF4TW9kYWwiLCJpbnN0cnVjdGlvbnNNb2RhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxPQUFLLEVBQUUsRUFEaUI7QUFFeEJDLFFBQU0sRUFBRSxFQUZnQjtBQUd4QkMsVUFBUSxFQUFFLElBSGM7QUFJeEJDLEtBQUcsRUFBRSxJQUptQjtBQUt4QkMsS0FBRyxFQUFFLElBTG1CO0FBTXhCQyxPQUFLLEVBQUU7QUFOaUIsQ0FBckI7QUFVUEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNuRUMsOERBQUEsQ0FBbUJWLFlBQW5CO0FBQ0FPLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFRSxRQUFsRTtBQUNILENBSEQ7QUFLQUosUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNuRUMsK0RBQUEsQ0FBb0JWLFlBQXBCO0FBQ0FPLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFRyxRQUFsRTtBQUNILENBSEQ7QUFLQUwsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDQyxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsWUFBTTtBQUNqRUMsNkRBQUE7QUFDQUgsVUFBUSxDQUFDTSxjQUFULENBQXdCLE9BQXhCLEVBQWlDSixnQkFBakMsQ0FBa0QsT0FBbEQsRUFBMkRDLCtEQUEzRDtBQUNBSCxVQUFRLENBQUNNLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNKLGdCQUFqQyxDQUFrRCxPQUFsRCxFQUEyREMsK0RBQTNEO0FBQ0FILFVBQVEsQ0FBQ00sY0FBVCxDQUF3QixPQUF4QixFQUFpQ0osZ0JBQWpDLENBQWtELE9BQWxELEVBQTJEQywrREFBM0Q7QUFDQUgsVUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLEVBQXNDSixnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0VDLCtEQUFoRTtBQUNBSCxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUFrRUssT0FBbEU7QUFDSCxDQVBEO0FBU0FQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixFQUFxQ0MsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFlBQU07QUFDakVDLDZEQUFBO0FBQ0FILFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFTSxPQUFsRTtBQUNILENBSEQ7QUFLQVIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQ0MsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFTyxTQUFyRTtBQUVBVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDQyxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0VDLGlFQUF4RTs7QUFFQSxTQUFTQyxRQUFULENBQWtCTSxDQUFsQixFQUFxQjtBQUNqQkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsSUFBSSxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQU1ZLFFBQVEsR0FBRyxJQUFJQyxRQUFKLENBQWFGLElBQWIsQ0FBakI7QUFDQSxNQUFNRyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFdBQWIsQ0FBakI7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFlBQWIsQ0FBbEI7QUFDQSxNQUFNckIsTUFBTSxHQUFHa0IsUUFBUSxDQUFDSyxNQUFULENBQWdCLGFBQWhCLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUd4QixNQUFNLENBQUN5QixNQUF2QjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQyxxREFBSixDQUFTUCxRQUFULEVBQW1CUSxNQUFNLENBQUNOLFNBQVMsR0FBRyxHQUFiLENBQU4sR0FBd0JFLE9BQTNDLENBQWI7O0FBQ0EsT0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxPQUFwQixFQUE2QkssQ0FBQyxFQUE5QixFQUFrQztBQUM5Qi9CLGdCQUFZLENBQUNDLEtBQWIsQ0FBbUIrQixJQUFuQixDQUF3QkosSUFBeEI7QUFDQUssaUJBQWEsQ0FBQ0wsSUFBRCxDQUFiO0FBQ0g7O0FBQ0QxQixRQUFNLENBQUNnQyxPQUFQLENBQWdCLFVBQUFDLEtBQUs7QUFBQSxXQUFJQyxjQUFjLENBQUNSLElBQUQsRUFBT08sS0FBUCxDQUFsQjtBQUFBLEdBQXJCO0FBQ0F6Qiw0REFBQTtBQUNIOztBQUVELFNBQVNFLFFBQVQsQ0FBa0JLLENBQWxCLEVBQXFCO0FBQ2pCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTVksUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYUYsSUFBYixDQUFqQjtBQUNBLE1BQU1rQixTQUFTLEdBQUdqQixRQUFRLENBQUNHLEdBQVQsQ0FBYSxZQUFiLENBQWxCO0FBQ0EsTUFBTVksS0FBSyxHQUFHLElBQUlHLHNEQUFKLENBQVVELFNBQVYsQ0FBZDtBQUNBckMsY0FBWSxDQUFDRSxNQUFiLENBQW9COEIsSUFBcEIsQ0FBeUJHLEtBQXpCO0FBQ0F6Qiw0REFBQTtBQUNBNkIsaUJBQWUsQ0FBQ0osS0FBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBU3JCLE9BQVQsQ0FBaUJHLENBQWpCLEVBQW9CO0FBQ2hCQSxHQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTVksUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYUYsSUFBYixDQUFqQjtBQUNBLE1BQU1xQixPQUFPLEdBQUdwQixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFiLENBQWhCO0FBQ0EsTUFBTWtCLE1BQU0sR0FBR1gsTUFBTSxDQUFDVixRQUFRLENBQUNHLEdBQVQsQ0FBYSxZQUFiLENBQUQsQ0FBckI7O0FBQ0EsTUFBSWlCLE9BQU8sS0FBSyxRQUFoQixFQUEwQjtBQUFFRSxrQkFBYyxDQUFDRCxNQUFELENBQWQ7QUFBd0IsR0FBcEQsTUFDSztBQUFFRSxnQkFBWSxDQUFDSCxPQUFELENBQVo7QUFBdUI7O0FBQUE7QUFDOUI5Qiw0REFBQTtBQUNIOztBQUVELFNBQVNLLE9BQVQsQ0FBaUJFLENBQWpCLEVBQW1CO0FBQ2ZBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLElBQUksR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxNQUFNWSxRQUFRLEdBQUcsSUFBSUMsUUFBSixDQUFhRixJQUFiLENBQWpCO0FBQ0EsTUFBTXlCLE1BQU0sR0FBR2QsTUFBTSxDQUFDVixRQUFRLENBQUNHLEdBQVQsQ0FBYSxZQUFiLENBQUQsQ0FBckI7QUFDQXNCLFVBQVEsQ0FBQ0QsTUFBRCxDQUFSO0FBQ0FsQyw0REFBQTtBQUNIOztBQUVELFNBQVNtQyxRQUFULENBQWtCRCxNQUFsQixFQUEwQjtBQUN0QjVDLGNBQVksQ0FBQ0ssR0FBYixHQUFtQnlCLE1BQU0sQ0FBQ2MsTUFBRCxDQUF6QjtBQUNBLE1BQU12QyxHQUFHLEdBQUdFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBWjtBQUNBSCxLQUFHLENBQUN5QyxTQUFKLGNBQW9COUMsWUFBWSxDQUFDSyxHQUFiLENBQWlCMEMsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBcEI7QUFFQS9DLGNBQVksQ0FBQ0UsTUFBYixDQUFvQmdDLE9BQXBCLENBQTRCLFVBQUFDLEtBQUssRUFBSTtBQUNqQyxRQUFNYSxLQUFLLEdBQUdiLEtBQUssQ0FBQ2hDLFFBQU4sR0FBaUIsR0FBakIsR0FBdUJILFlBQVksQ0FBQ0csUUFBbEQ7QUFDQSxRQUFNRSxHQUFHLEdBQUcsQ0FBQ3VDLE1BQU0sR0FBR0ksS0FBVixFQUFpQkQsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBWjtBQUNBWixTQUFLLENBQUM5QixHQUFOLEdBQVlBLEdBQVo7QUFDQSxRQUFNNEMsUUFBUSxHQUFHMUMsUUFBUSxDQUFDQyxhQUFULGdCQUErQjJCLEtBQUssQ0FBQ2UsSUFBckMsaUJBQWpCO0FBQ0FELFlBQVEsQ0FBQ0gsU0FBVCxjQUF5QlgsS0FBSyxDQUFDOUIsR0FBL0I7QUFDSCxHQU5EO0FBT0g7O0FBRUQsU0FBU3FDLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDO0FBQzVCekMsY0FBWSxDQUFDSSxHQUFiLEdBQW1CMEIsTUFBTSxDQUFDVyxNQUFELENBQXpCO0FBQ0EsTUFBTXJDLEdBQUcsR0FBR0csUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFaO0FBQ0FKLEtBQUcsQ0FBQzBDLFNBQUosY0FBb0I5QyxZQUFZLENBQUNJLEdBQWIsQ0FBaUIyQyxPQUFqQixDQUF5QixDQUF6QixDQUFwQjtBQUVBL0MsY0FBWSxDQUFDRSxNQUFiLENBQW9CZ0MsT0FBcEIsQ0FBNEIsVUFBQUMsS0FBSyxFQUFJO0FBQ2pDLFFBQU1hLEtBQUssR0FBR2IsS0FBSyxDQUFDaEMsUUFBTixHQUFpQixHQUFqQixHQUF1QkgsWUFBWSxDQUFDRyxRQUFsRDtBQUNBLFFBQU1DLEdBQUcsR0FBRyxDQUFDcUMsTUFBTSxHQUFHTyxLQUFWLEVBQWlCRCxPQUFqQixDQUF5QixDQUF6QixDQUFaO0FBQ0FaLFNBQUssQ0FBQy9CLEdBQU4sR0FBWUEsR0FBWjtBQUNBLFFBQU0rQyxRQUFRLEdBQUc1QyxRQUFRLENBQUNDLGFBQVQsZ0JBQStCMkIsS0FBSyxDQUFDZSxJQUFyQyxpQkFBakI7QUFDQUMsWUFBUSxDQUFDTCxTQUFULGNBQXlCWCxLQUFLLENBQUMvQixHQUEvQjtBQUNILEdBTkQ7QUFPSDs7QUFBQTs7QUFFRCxTQUFTdUMsWUFBVCxDQUFzQkgsT0FBdEIsRUFBK0I7QUFDM0JBLFNBQU8sR0FBR1ksVUFBVSxDQUFDWixPQUFELENBQVYsR0FBc0IsS0FBaEM7QUFDQXhDLGNBQVksQ0FBQ0ksR0FBYixHQUFtQjBCLE1BQU0sQ0FBQzlCLFlBQVksQ0FBQ0csUUFBZCxDQUFOLEdBQWlDcUMsT0FBcEQ7QUFDQSxNQUFNcEMsR0FBRyxHQUFHRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQVo7QUFDQUosS0FBRyxDQUFDMEMsU0FBSixjQUFvQjlDLFlBQVksQ0FBQ0ksR0FBYixDQUFpQjJDLE9BQWpCLENBQXlCLENBQXpCLENBQXBCO0FBRUEvQyxjQUFZLENBQUNFLE1BQWIsQ0FBb0JnQyxPQUFwQixDQUE0QixVQUFBQyxLQUFLLEVBQUk7QUFDakNBLFNBQUssQ0FBQy9CLEdBQU4sR0FBWSxDQUFDK0IsS0FBSyxDQUFDaEMsUUFBTixHQUFpQnFDLE9BQWxCLEVBQTJCTyxPQUEzQixDQUFtQyxDQUFuQyxDQUFaO0FBQ0EsUUFBTUksUUFBUSxHQUFHNUMsUUFBUSxDQUFDQyxhQUFULGdCQUErQjJCLEtBQUssQ0FBQ2UsSUFBckMsaUJBQWpCO0FBQ0FDLFlBQVEsQ0FBQ0wsU0FBVCxjQUF5QlgsS0FBSyxDQUFDL0IsR0FBL0I7QUFDSCxHQUpEO0FBS0g7O0FBRUQsU0FBUzZCLGFBQVQsQ0FBdUJMLElBQXZCLEVBQTRCO0FBQ3hCLE1BQU15QixRQUFRLEdBQUc5QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7QUFDQSxNQUFNOEMsRUFBRSxHQUFHL0MsUUFBUSxDQUFDZ0QsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELElBQUUsQ0FBQ1IsU0FBSCw2REFFRWxCLElBQUksQ0FBQ3NCLElBRlAsMkVBS0dwQixNQUFNLENBQUNGLElBQUksQ0FBQzRCLEtBQU4sQ0FBTixDQUFtQlQsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FMSDtBQVFBTSxVQUFRLENBQUNJLFdBQVQsQ0FBcUJILEVBQXJCO0FBRUF0RCxjQUFZLENBQUNHLFFBQWIsSUFBeUIyQixNQUFNLENBQUNGLElBQUksQ0FBQzRCLEtBQU4sQ0FBL0I7QUFDQSxNQUFNckQsUUFBUSxHQUFHSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWpCO0FBQ0FMLFVBQVEsQ0FBQzJDLFNBQVQsY0FBeUI5QyxZQUFZLENBQUNHLFFBQWIsQ0FBc0I0QyxPQUF0QixDQUE4QixDQUE5QixDQUF6QjtBQUNIOztBQUVELFNBQVNYLGNBQVQsQ0FBd0JSLElBQXhCLEVBQThCTyxLQUE5QixFQUFxQztBQUNqQyxNQUFNdUIsSUFBSSxHQUFHMUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CeUQsSUFBcEIsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1YsSUFBRixJQUFVZixLQUFkO0FBQUEsR0FBMUIsQ0FBYjtBQUNBdUIsTUFBSSxDQUFDekQsS0FBTCxDQUFXK0IsSUFBWCxDQUFnQkosSUFBaEI7QUFDQSxNQUFNaUMsU0FBUyxHQUFHdEQsUUFBUSxDQUFDQyxhQUFULFlBQTJCMkIsS0FBM0IsRUFBbEI7QUFDQSxNQUFNbUIsRUFBRSxHQUFHL0MsUUFBUSxDQUFDZ0QsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELElBQUUsQ0FBQ1IsU0FBSCxpRUFFTWxCLElBQUksQ0FBQ3NCLElBRlgsK0VBS09wQixNQUFNLENBQUNGLElBQUksQ0FBQzRCLEtBQU4sQ0FBTixDQUFtQlQsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FMUDtBQVFBYyxXQUFTLENBQUNKLFdBQVYsQ0FBc0JILEVBQXRCO0FBRUFJLE1BQUksQ0FBQ3ZELFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQXVELE1BQUksQ0FBQ3pELEtBQUwsQ0FBV2lDLE9BQVgsQ0FBb0IsVUFBQU4sSUFBSTtBQUFBLFdBQUk4QixJQUFJLENBQUN2RCxRQUFMLElBQWlCMkIsTUFBTSxDQUFDRixJQUFJLENBQUM0QixLQUFOLENBQTNCO0FBQUEsR0FBeEI7QUFDQSxNQUFNTSxVQUFVLEdBQUd2RCxRQUFRLENBQUNDLGFBQVQscUJBQW9DMkIsS0FBcEMsaUJBQW5CO0FBQ0EyQixZQUFVLENBQUNoQixTQUFYLGNBQTJCWSxJQUFJLENBQUN2RCxRQUFMLENBQWM0QyxPQUFkLENBQXNCLENBQXRCLENBQTNCO0FBRUg7O0FBRUQsU0FBU1IsZUFBVCxDQUF5QkosS0FBekIsRUFBK0I7QUFDM0IsTUFBTTRCLElBQUksR0FBR3hELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBYjtBQUNBLE1BQU13RCxHQUFHLEdBQUd6RCxRQUFRLENBQUNnRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVMsS0FBRyxDQUFDQyxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FELEtBQUcsQ0FBQ0UsRUFBSixHQUFTLE1BQVQ7QUFDQUYsS0FBRyxDQUFDbEIsU0FBSiw4REFDeUNYLEtBQUssQ0FBQ2UsSUFEL0MsNkZBR3dCZixLQUFLLENBQUNlLElBSDlCLDJCQUdpRGYsS0FBSyxDQUFDZSxJQUh2RCxrUkFZa0NmLEtBQUssQ0FBQ2UsSUFaeEMsdUtBaUI2QmYsS0FBSyxDQUFDZSxJQWpCbkMsK0pBcUI2QmYsS0FBSyxDQUFDZSxJQXJCbkMsaUtBeUIrQmYsS0FBSyxDQUFDZSxJQXpCckM7QUFnQ0FhLE1BQUksQ0FBQ04sV0FBTCxDQUFpQk8sR0FBakI7QUFDSDs7QUFFRCxTQUFTaEQsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBbEIsY0FBWSxDQUFDTSxLQUFiLEdBQXFCTixZQUFZLENBQUNHLFFBQWIsR0FBd0JILFlBQVksQ0FBQ0ksR0FBckMsR0FBMkNKLFlBQVksQ0FBQ0ssR0FBN0U7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBZDtBQUNBRixPQUFLLENBQUN3QyxTQUFOLGNBQXNCOUMsWUFBWSxDQUFDTSxLQUFiLENBQW1CeUMsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBdEI7QUFFQS9DLGNBQVksQ0FBQ0UsTUFBYixDQUFvQmdDLE9BQXBCLENBQTRCLFVBQUFDLEtBQUssRUFBSTtBQUNqQyxRQUFNZ0MsVUFBVSxHQUFHNUQsUUFBUSxDQUFDQyxhQUFULGtCQUFpQzJCLEtBQUssQ0FBQ2UsSUFBdkMsaUJBQW5CO0FBQ0FpQixjQUFVLENBQUNyQixTQUFYLGNBQTJCWCxLQUFLLENBQUM3QixLQUFOLENBQVl5QyxPQUFaLENBQW9CLENBQXBCLENBQTNCO0FBQ0gsR0FIRDtBQUlILEMsQ0FFRCxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsT3FCVCxLO0FBQ2pCLGlCQUFZWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2pELEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLENBQVg7QUFDSDs7OztTQUVELGVBQVk7QUFDUixhQUFPeUIsTUFBTSxDQUFDLEtBQUszQixRQUFOLENBQU4sR0FBd0IyQixNQUFNLENBQUMsS0FBSzFCLEdBQU4sQ0FBOUIsR0FBMkMwQixNQUFNLENBQUMsS0FBS3pCLEdBQU4sQ0FBeEQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1hnQndCLEksR0FDakIsY0FBWXFCLElBQVosRUFBa0JNLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3JCLE9BQUtOLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtZLE1BQUwsR0FBYyxFQUFkO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xMQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBQXJELENBQUMsRUFBSTtBQUNsQjtBQUNBLE1BQUlBLENBQUMsQ0FBQ3NELE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixlQUFqQixDQUFKLEVBQXVDO0FBQ25DQyxjQUFVO0FBQ2I7QUFDSixDQUxEOztBQU9PLFNBQVNBLFVBQVQsR0FBc0I7QUFDekIsTUFBTUMsRUFBRSxHQUFHbkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQWtFLElBQUUsQ0FBQ0MsVUFBSCxDQUFjQyxXQUFkLENBQTBCRixFQUExQjtBQUNIO0FBRU0sU0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUM1RSxNQUFOLENBQWE4RSxHQUFiLENBQWtCLFVBQUE3QyxLQUFLO0FBQUEsMEdBR3NCQSxLQUFLLENBQUNlLElBSDVCLHdCQUc0Q2YsS0FBSyxDQUFDZSxJQUhsRCxvREFJVGYsS0FBSyxDQUFDZSxJQUpHO0FBQUEsR0FBdkIsQ0FBaEI7O0FBT0EsY0FBQStCLE9BQU8sRUFBQ0MsR0FBUixrQkFBWSxTQUFaLDRCQUEwQkgsT0FBMUI7O0FBQ0EsTUFBTWYsR0FBRyxHQUFHekQsUUFBUSxDQUFDZ0QsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FTLEtBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxLQUFHLENBQUNsQixTQUFKLHV0QkFpQmtCaUMsT0FBTyxDQUFDSSxJQUFSLENBQWEsRUFBYixDQWpCbEIsZ0pBZGdDLENBdUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFDUjVFLFVBQVEsQ0FBQzZFLElBQVQsQ0FBYzNCLFdBQWQsQ0FBMEJPLEdBQTFCO0FBQ0F6RCxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDNkUsS0FBMUM7QUFDSDtBQUVNLFNBQVNDLGFBQVQsQ0FBdUJSLEtBQXZCLEVBQThCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLE1BQU1kLEdBQUcsR0FBR3pELFFBQVEsQ0FBQ2dELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBUyxLQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsS0FBRyxDQUFDbEIsU0FBSixvVUFPbUZnQyxLQUFLLENBQUM1RSxNQUFOLENBQWF5QixNQUFiLEdBQW9CLENBUHZHO0FBYUFwQixVQUFRLENBQUM2RSxJQUFULENBQWMzQixXQUFkLENBQTBCTyxHQUExQjtBQUNBekQsVUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixFQUEyQzZFLEtBQTNDO0FBQ0g7QUFFTSxTQUFTRSxXQUFULEdBQXVCO0FBQzFCLE1BQU12QixHQUFHLEdBQUd6RCxRQUFRLENBQUNnRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVMsS0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELEtBQUcsQ0FBQ2xCLFNBQUo7QUF3QkF2QyxVQUFRLENBQUM2RSxJQUFULENBQWMzQixXQUFkLENBQTBCTyxHQUExQjtBQUNIO0FBRU0sU0FBU3dCLGVBQVQsR0FBMEI7QUFDN0IsTUFBSUMsUUFBUSxHQUFHbEYsUUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLENBQWY7QUFDQSxNQUFJNkUsU0FBUyxHQUFHbkYsUUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLENBQWhCO0FBQ0E2RSxXQUFTLENBQUNDLFFBQVYsR0FBcUJGLFFBQVEsQ0FBQ0csT0FBVCxHQUFtQixLQUFuQixHQUEyQixJQUFoRDs7QUFDQSxNQUFJLENBQUNGLFNBQVMsQ0FBQ0MsUUFBZixFQUF5QjtBQUFFRCxhQUFTLENBQUNMLEtBQVY7QUFBbUI7O0FBQUE7QUFDakQ7QUFFTSxTQUFTUSxXQUFULEdBQXVCO0FBQzFCLE1BQU03QixHQUFHLEdBQUd6RCxRQUFRLENBQUNnRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVMsS0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELEtBQUcsQ0FBQ2xCLFNBQUo7QUFnQkF2QyxVQUFRLENBQUM2RSxJQUFULENBQWMzQixXQUFkLENBQTBCTyxHQUExQjtBQUNIO0FBRU0sU0FBUzhCLGlCQUFULEdBQTZCO0FBQ2hDLE1BQU05QixHQUFHLEdBQUd6RCxRQUFRLENBQUNnRCxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVMsS0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELEtBQUcsQ0FBQ2xCLFNBQUo7QUFxQkF2QyxVQUFRLENBQUM2RSxJQUFULENBQWMzQixXQUFkLENBQTBCTyxHQUExQjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3RLRDtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IEd1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ3Vlc3RcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL3NjcmlwdHMvaXRlbVwiO1xuaW1wb3J0ICogYXMgTW9kYWwgZnJvbSBcIi4vc2NyaXB0cy9tb2RhbHNcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZ3Vlc3RzOiBbXSxcbiAgICBzdWJ0b3RhbDogMC4wMCxcbiAgICB0aXA6IDAuMDAsXG4gICAgdGF4OiAwLjAwLFxuICAgIHRvdGFsOiAwLjAwXG59XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNpdGVtc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEl0ZW1Nb2RhbChjdXJyZW50U3RhdGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVJdGVtKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3VzZXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkR3Vlc3RNb2RhbChjdXJyZW50U3RhdGUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVVc2VyKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3RpcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZFRpcE1vZGFsKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDE1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAxOFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMjBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVRpcCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0YXhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRUYXhNb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUYXgpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNjYWxjdWxhdGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGN1bGF0ZSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jaW5zdHJ1Y3Rpb25zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC5pbnN0cnVjdGlvbnNNb2RhbClcblxuZnVuY3Rpb24gc2F2ZUl0ZW0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1uYW1lXCIpXG4gICAgY29uc3QgaXRlbVByaWNlID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1wcmljZVwiKVxuICAgIGNvbnN0IGd1ZXN0cyA9IGZvcm1EYXRhLmdldEFsbChcIml0ZW0tZ3Vlc3RzXCIpXG4gICAgY29uc3QgaXRlbVF0eSA9IGd1ZXN0cy5sZW5ndGhcbiAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0oaXRlbU5hbWUsIE51bWJlcihpdGVtUHJpY2UgKiAxLjApL2l0ZW1RdHkpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtUXR5OyBpKyspIHtcbiAgICAgICAgY3VycmVudFN0YXRlLml0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgYWRkSXRlbVRvQmlsbChpdGVtKVxuICAgIH1cbiAgICBndWVzdHMuZm9yRWFjaCggZ3Vlc3QgPT4gYWRkSXRlbVRvR3Vlc3QoaXRlbSwgZ3Vlc3QpKVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxufVxuXG5mdW5jdGlvbiBzYXZlVXNlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgZ3Vlc3ROYW1lID0gZm9ybURhdGEuZ2V0KFwiZ3Vlc3QtbmFtZVwiKVxuICAgIGNvbnN0IGd1ZXN0ID0gbmV3IEd1ZXN0KGd1ZXN0TmFtZSlcbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLnB1c2goZ3Vlc3QpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpXG4gICAgYWRkR3Vlc3RUb1RhYmxlKGd1ZXN0KVxufVxuXG5mdW5jdGlvbiBzYXZlVGlwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgdGlwUmF0ZSA9IGZvcm1EYXRhLmdldChcInRpcC1yYXRlXCIpO1xuICAgIGNvbnN0IHRpcEFtdCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJ0aXAtYW1vdW50XCIpKTtcbiAgICBpZiAodGlwUmF0ZSA9PT0gXCJjdXN0b21cIikgeyBzcGxpdEN1c3RvbVRpcCh0aXBBbXQpIH1cbiAgICBlbHNlIHsgYXBwbHlUaXBSYXRlKHRpcFJhdGUpIH07XG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBzYXZlVGF4KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCB0YXhBbXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwidGF4LWFtb3VudFwiKSk7XG4gICAgc3BsaXRUYXgodGF4QW10KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUYXgodGF4QW10KSB7XG4gICAgY3VycmVudFN0YXRlLnRheCA9IE51bWJlcih0YXhBbXQpXG4gICAgY29uc3QgdGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXggPiB0ZC5yaWdodFwiKVxuICAgIHRheC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRheC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZ3Vlc3Quc3VidG90YWwgKiAxLjAgLyBjdXJyZW50U3RhdGUuc3VidG90YWxcbiAgICAgICAgY29uc3QgdGF4ID0gKHRheEFtdCAqIHJhdGlvKS50b0ZpeGVkKDIpXG4gICAgICAgIGd1ZXN0LnRheCA9IHRheCBcbiAgICAgICAgY29uc3QgZ3Vlc3RUYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGF4LiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGF4LmlubmVySFRNTCA9IGAkJHtndWVzdC50YXh9YFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNwbGl0Q3VzdG9tVGlwKHRpcEFtdCkge1xuICAgIGN1cnJlbnRTdGF0ZS50aXAgPSBOdW1iZXIodGlwQW10KVxuICAgIGNvbnN0IHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGlwID4gdGQucmlnaHRcIilcbiAgICB0aXAuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50aXAudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBjb25zdCByYXRpbyA9IGd1ZXN0LnN1YnRvdGFsICogMS4wIC8gY3VycmVudFN0YXRlLnN1YnRvdGFsIFxuICAgICAgICBjb25zdCB0aXAgPSAodGlwQW10ICogcmF0aW8pLnRvRml4ZWQoMilcbiAgICAgICAgZ3Vlc3QudGlwID0gdGlwIFxuICAgICAgICBjb25zdCBndWVzdFRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXAuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUaXAuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRpcH1gXG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIGFwcGx5VGlwUmF0ZSh0aXBSYXRlKSB7XG4gICAgdGlwUmF0ZSA9IHBhcnNlRmxvYXQodGlwUmF0ZSkgLyAxMDAuMFxuICAgIGN1cnJlbnRTdGF0ZS50aXAgPSBOdW1iZXIoY3VycmVudFN0YXRlLnN1YnRvdGFsKSAqICh0aXBSYXRlKVxuICAgIGNvbnN0IHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGlwID4gdGQucmlnaHRcIilcbiAgICB0aXAuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50aXAudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBndWVzdC50aXAgPSAoZ3Vlc3Quc3VidG90YWwgKiB0aXBSYXRlKS50b0ZpeGVkKDIpXG4gICAgICAgIGNvbnN0IGd1ZXN0VGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpcC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRpcC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudGlwfWAgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvQmlsbChpdGVtKXtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZSNpdGVtc1wiKSBcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICB0ci5pbm5lckhUTUwgPSBgXG4gICAgPHRkIGNsYXNzPVwibGVmdFwiIGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBpdGVtTGlzdC5hcHBlbmRDaGlsZCh0cilcbiAgICBcbiAgICBjdXJyZW50U3RhdGUuc3VidG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpXG4gICAgY29uc3Qgc3VidG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YnRvdGFsID4gdGQucmlnaHRcIikgXG4gICAgc3VidG90YWwuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS5zdWJ0b3RhbC50b0ZpeGVkKDIpfWBcbn1cblxuZnVuY3Rpb24gYWRkSXRlbVRvR3Vlc3QoaXRlbSwgZ3Vlc3QpIHtcbiAgICBjb25zdCB1c2VyID0gY3VycmVudFN0YXRlLmd1ZXN0cy5maW5kKHUgPT4gdS5uYW1lID09IGd1ZXN0KVxuICAgIHVzZXIuaXRlbXMucHVzaChpdGVtKVxuICAgIGNvbnN0IGd1ZXN0QmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2d1ZXN0fWApXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIilcbiAgICB0ci5pbm5lckhUTUwgPSBgXG4gICAgPHRkIGNsYXNzPVwibGVmdFwiIGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgICR7aXRlbS5uYW1lfVxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicmlnaHRcIiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAgICAgJCR7TnVtYmVyKGl0ZW0ucHJpY2UpLnRvRml4ZWQoMil9ICAgICAgXG4gICAgPC90ZD4gXG4gICAgYFxuICAgIGd1ZXN0QmlsbC5hcHBlbmRDaGlsZCh0cilcblxuICAgIHVzZXIuc3VidG90YWwgPSAwXG4gICAgdXNlci5pdGVtcy5mb3JFYWNoKCBpdGVtID0+IHVzZXIuc3VidG90YWwgKz0gTnVtYmVyKGl0ZW0ucHJpY2UpIClcbiAgICBjb25zdCBzdWJ0b3RhbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1YnRvdGFsLiR7Z3Vlc3R9ID4gdGQucmlnaHRgKVxuICAgIHN1YnRvdGFsRWwuaW5uZXJIVE1MID0gYCQke3VzZXIuc3VidG90YWwudG9GaXhlZCgyKX1gXG5cbn1cblxuZnVuY3Rpb24gYWRkR3Vlc3RUb1RhYmxlKGd1ZXN0KXtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jb250ZW50I3VzZXJzXCIpIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJib3hcIlxuICAgIGRpdi5pZCA9IFwidXNlclwiXG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlciByb3dcIiBpZD1cInVzZXJzXCI+JHtndWVzdC5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiJHtndWVzdC5uYW1lfVwiIGlkPVwidXNlcnMgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInN1YnRvdGFsICR7Z3Vlc3QubmFtZX1cIiA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TdWJ0b3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0aXAgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VGlwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YXggJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VGF4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3RhbCAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRTdGF0ZS50b3RhbCA9IGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCArIGN1cnJlbnRTdGF0ZS50aXAgKyBjdXJyZW50U3RhdGUudGF4XG4gICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsID4gdGQucmlnaHRcIilcbiAgICB0b3RhbC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRvdGFsLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgZ3Vlc3RUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b3RhbC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRvdGFsLmlubmVySFRNTCA9IGAkJHtndWVzdC50b3RhbC50b0ZpeGVkKDIpfWBcbiAgICB9KVxufVxuXG4vLyB3aW5kb3cuY3VycmVudFN0YXRlID0gY3VycmVudFN0YXRlXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107ICBcbiAgICAgICAgdGhpcy5zdWJ0b3RhbCA9IDA7XG4gICAgICAgIHRoaXMudGlwID0gMDtcbiAgICAgICAgdGhpcy50YXggPSAwO1xuICAgIH1cblxuICAgIGdldCB0b3RhbCgpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnN1YnRvdGFsKSArIE51bWJlcih0aGlzLnRpcCkgKyBOdW1iZXIodGhpcy50YXgpIFxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTsgXG4gICAgICAgIHRoaXMuYnV5ZXJzID0gW107IFxuICAgIH1cbn0iLCJ3aW5kb3cub25jbGljayA9IGUgPT4ge1xuICAgIC8vIGNsb3NlIG1vZGFsIGJ5IGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBtb2RhbCBzY3JlZW5cbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLm1vZGFsLXNjcmVlbicpKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbU1vZGFsKHByb3BzKSB7XG4gICAgLy8gdmVyaWZpY2F0aW9uczogXG4gICAgLy8gaXRlbSBtdXN0IGJlbG9uZyB0byBhIGd1ZXN0IFxuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBwcm9wcy5ndWVzdHMubWFwKCBndWVzdCA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7Z3Vlc3QubmFtZX1cIj4ke2d1ZXN0Lm5hbWV9PC9vcHRpb24+YCkgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHByb3BzLmd1ZXN0cy5tYXAoIGd1ZXN0ID0+IFxuICAgICAgICBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaXRlbS1ndWVzdHNcIiBpZD1cImNoZWNrYm94LSR7Z3Vlc3QubmFtZX1cIiB2YWx1ZT1cIiR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tZ3Vlc3RcIj4ke2d1ZXN0Lm5hbWV9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGApIFxuICAgIGNvbnNvbGUubG9nKFwib3B0aW9uc1wiLCAuLi5vcHRpb25zKVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPkl0ZW0gTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgbmFtZT1cIml0ZW0tbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLXByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tcHJpY2VcIiBuYW1lPVwiaXRlbS1wcmljZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpdGVtLWd1ZXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICBBc3NpZ24gdG8gZ3Vlc3Qocyk6IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAke29wdGlvbnMuam9pbihcIlwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgSXRlbTwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAvLyAgIDxsYWJlbCBmb3I9XCJpdGVtLWd1ZXN0XCI+QXNzaWduIHRvIGd1ZXN0PC9sYWJlbD5cbiAgICAgICAgICAgIC8vICAgPHNlbGVjdCBpZD1cIml0ZW0tZ3Vlc3RcIiBuYW1lPVwiaXRlbS1ndWVzdFwiPlxuICAgICAgICAgICAgLy8gICAgICAgJHtvcHRpb25zfVxuICAgICAgICAgICAgLy8gICA8L3NlbGVjdD5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjaXRlbS1uYW1lXCIpLmZvY3VzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEd1ZXN0TW9kYWwocHJvcHMpIHtcbiAgICAvLyB2ZXJpZmljYXRpb25zOiBcbiAgICAvLyBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBcbiAgICAvLyBuYW1lcyBtdXN0IGJlIHVuaXF1ZSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ3Vlc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ3Vlc3QtbmFtZVwiPkd1ZXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImd1ZXN0LW5hbWVcIiBuYW1lPVwiZ3Vlc3QtbmFtZVwiIHZhbHVlPVwiR3Vlc3Qke3Byb3BzLmd1ZXN0cy5sZW5ndGgrMX1cIiBwbGFjZWhvbGRlcj1cIkVudGVyIGd1ZXN0IG5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgR3Vlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNndWVzdC1uYW1lXCIpLmZvY3VzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRpcE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXAtcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlNlbGVjdCBUaXAgUmF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxNVwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTUlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAxNVwiPjE1JTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE4XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxOCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE4XCI+MTglPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidGlwMjBcIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cIjIwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMjBcIj4yMCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAtY3VzdG9tXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCJjdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcC1jdXN0b21cIj5DdXN0b20gQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXAtYW1vdW50XCIgbmFtZT1cInRpcC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGN1c3RvbSBhbW91bnRcIiBkaXNhYmxlZD4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIFRpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDdXN0b21UaXAoKXtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIik7XG4gICAgdmFyIGN1c3RvbUFtdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWFtb3VudFwiKTtcbiAgICBjdXN0b21BbXQuZGlzYWJsZWQgPSBzZWxlY3RlZC5jaGVja2VkID8gZmFsc2UgOiB0cnVlIFxuICAgIGlmICghY3VzdG9tQW10LmRpc2FibGVkKSB7IGN1c3RvbUFtdC5mb2N1cygpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXhNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGF4LWFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGF4LWFtb3VudFwiPkNhbGN1bGF0ZSBUYXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRheC1hbW91bnRcIiBuYW1lPVwidGF4LWFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGF4IGFtb3VudFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBUYXg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdHJ1Y3Rpb25zTW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+IEhvdyB0byBVc2UgPC9oMj4gXG4gICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gVXNlIHRoZSBcIkFkZCBHdWVzdFwiIGJ1dHRvbiB0byBhZGQgYWxsIHJlY2lwaWVudHMgdG8gdGhlIGJpbGwgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gTmV4dCwgYWRkIGl0ZW1zIHRvIHRoZSBiaWxsIGFuZCBhc3NpZ24gdGhlbSB0byBvbmUgb3IgbW9yZSBndWVzdHMgPC9saT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IE9uZSBhbGwgaXRlbXMgaGF2ZSBiZWVuIGFkZGVkLCBwcmVzcyBcIkFkZCBUaXBcIiB0byBjaG9vc2UgYSB0aXAgcmF0ZSBvciBlbnRlciBhIGN1c3RvbSB0aXAgYW1vdW50IDwvbGk+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBBZGQgdGhlIHRheCBhbW91bnQgZGlzcGxheWVkIG9uIHlvdXIgYmlsbCBvciByZWNlaXB0IDwvbGk+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBGaW5hbGx5LCBwcmVzcyBcIkNhbGN1bGF0ZVwiIHRvIGNhbGN1bGF0ZSB0aGUgdG90YWwgYW1vdW50IG9mIHlvdXIgYmlsbCBhcyB3ZWxsIGFzIHRoZSBpbmRpdmlkdWFsIHRvdGFscyBvd2VkIGJ5IGVhY2ggZ3Vlc3QgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+RG9uZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9