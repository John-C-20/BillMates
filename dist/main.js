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
document.querySelector("button#instructions").addEventListener("click", function () {
  _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["instructionsModal"]();
  document.querySelector("button#submit").addEventListener("click", function (e) {
    e.preventDefault();
    _scripts_modals__WEBPACK_IMPORTED_MODULE_5__["closeModal"]();
  });
});

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
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"tip-rate\">\n                    <h2>Select Tip Rate</h2>\n                    <div>\n                        <div>\n                            <input type=\"radio\" id=\"tip15\" name=\"tip-rate\" value=\"15%\">\n                            <label for=\"tip15\">15%</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"tip18\" name=\"tip-rate\" value=\"18%\">\n                            <label for=\"tip18\">18%</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"tip20\" name=\"tip-rate\" value=\"20%\">\n                            <label for=\"tip20\">20%</label>\n                        </div>\n                        <div>\n                            <input type=\"radio\" id=\"tip-custom\" name=\"tip-rate\" value=\"custom\">\n                            <label for=\"tip-custom\">Custom Amount</label>\n                            <input type=\"text\" id=\"tip-amount\" name=\"tip-amount\" placeholder=\"Enter custom amount\" disabled> \n                        </div>\n                    </div>\n                </div>\n    \n                <button id=\"submit\"\">Add Tip</button>\n            </form>\n        </div>\n    ";
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
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"tax-amount\">\n                    <label for=\"tax-amount\">Calculate Tax</label>\n                    <input type=\"text\" id=\"tax-amount\" name=\"tax-amount\" placeholder=\"Enter tax amount\" required>\n                </div>\n    \n                <button id=\"submit\"\">Add Tax</button>\n            </form>\n        </div>\n    ";
  document.body.appendChild(div);
}
function instructionsModal() {
  var div = document.createElement('div');
  div.className = "modal";
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"instructions\">\n                    <h2> How to Use </h2> \n                    <ol>\n                        <li> Use the \"Add Guest\" button to add all recipients to the bill. </li>\n                        <li> Next, add items to the bill and assign them to one or more guests. </li> \n                        <li> Once all items have been added, press \"Add Tip\" to choose a tip rate or enter a custom tip amount. </li> \n                        <li> Add the tax amount displayed on your bill or receipt. </li> \n                        <li> Finally, press \"Calculate\" to calculate the total amount of your bill as well as the individual totals owed by each guest. </li>\n                    </ol>\n                </div>\n    \n                <button id=\"submit\">Done</button>\n\n            </form>\n        </div>\n    ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwic3VidG90YWwiLCJ0aXAiLCJ0YXgiLCJ0b3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb2RhbCIsInNhdmVJdGVtIiwic2F2ZVVzZXIiLCJnZXRFbGVtZW50QnlJZCIsInNhdmVUaXAiLCJzYXZlVGF4IiwiY2FsY3VsYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpdGVtTmFtZSIsImdldCIsIml0ZW1QcmljZSIsImdldEFsbCIsIml0ZW1RdHkiLCJsZW5ndGgiLCJpdGVtIiwiSXRlbSIsIk51bWJlciIsImkiLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImZvckVhY2giLCJndWVzdCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiR3Vlc3QiLCJhZGRHdWVzdFRvVGFibGUiLCJ0aXBSYXRlIiwidGlwQW10Iiwic3BsaXRDdXN0b21UaXAiLCJhcHBseVRpcFJhdGUiLCJ0YXhBbXQiLCJzcGxpdFRheCIsImlubmVySFRNTCIsInRvRml4ZWQiLCJyYXRpbyIsImd1ZXN0VGF4IiwibmFtZSIsImd1ZXN0VGlwIiwicGFyc2VGbG9hdCIsIml0ZW1MaXN0IiwidHIiLCJjcmVhdGVFbGVtZW50IiwicHJpY2UiLCJhcHBlbmRDaGlsZCIsInVzZXIiLCJmaW5kIiwidSIsImd1ZXN0QmlsbCIsInN1YnRvdGFsRWwiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJndWVzdFRvdGFsIiwiYnV5ZXJzIiwid2luZG93Iiwib25jbGljayIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZU1vZGFsIiwiZWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRJdGVtTW9kYWwiLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImJvZHkiLCJmb2N1cyIsImFkZEd1ZXN0TW9kYWwiLCJhZGRUaXBNb2RhbCIsInRvZ2dsZUN1c3RvbVRpcCIsInNlbGVjdGVkIiwiY3VzdG9tQW10IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwiYWRkVGF4TW9kYWwiLCJpbnN0cnVjdGlvbnNNb2RhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7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S0FBdkIsQ0FBWjtBQUNBUyxLQUFHLENBQUNDLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUQsS0FBRyxDQUFDbEIsU0FBSjtBQXFCQXZDLFVBQVEsQ0FBQzZFLElBQVQsQ0FBYzNCLFdBQWQsQ0FBMEJPLEdBQTFCO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDNUtEO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tb2RhbC5zY3NzXCI7XG5pbXBvcnQgR3Vlc3QgZnJvbSBcIi4vc2NyaXB0cy9ndWVzdFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vc2NyaXB0cy9pdGVtXCI7XG5pbXBvcnQgKiBhcyBNb2RhbCBmcm9tIFwiLi9zY3JpcHRzL21vZGFsc1wiO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXSxcbiAgICBndWVzdHM6IFtdLFxuICAgIHN1YnRvdGFsOiAwLjAwLFxuICAgIHRpcDogMC4wMCxcbiAgICB0YXg6IDAuMDAsXG4gICAgdG90YWw6IDAuMDBcbn1cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2l0ZW1zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkSXRlbU1vZGFsKGN1cnJlbnRTdGF0ZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZUl0ZW0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdXNlcnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRHdWVzdE1vZGFsKGN1cnJlbnRTdGF0ZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVVzZXIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdGlwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkVGlwTW9kYWwoKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMTVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDE4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAyMFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWN1c3RvbVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVGlwKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3RheFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZFRheE1vZGFsKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVRheCk7XG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2NhbGN1bGF0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsY3VsYXRlKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNpbnN0cnVjdGlvbnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5pbnN0cnVjdGlvbnNNb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBzYXZlSXRlbShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgaXRlbU5hbWUgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLW5hbWVcIilcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBmb3JtRGF0YS5nZXQoXCJpdGVtLXByaWNlXCIpXG4gICAgY29uc3QgZ3Vlc3RzID0gZm9ybURhdGEuZ2V0QWxsKFwiaXRlbS1ndWVzdHNcIilcbiAgICBjb25zdCBpdGVtUXR5ID0gZ3Vlc3RzLmxlbmd0aFxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShpdGVtTmFtZSwgTnVtYmVyKGl0ZW1QcmljZSAqIDEuMCkvaXRlbVF0eSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1RdHk7IGkrKykge1xuICAgICAgICBjdXJyZW50U3RhdGUuaXRlbXMucHVzaChpdGVtKVxuICAgICAgICBhZGRJdGVtVG9CaWxsKGl0ZW0pXG4gICAgfVxuICAgIGd1ZXN0cy5mb3JFYWNoKCBndWVzdCA9PiBhZGRJdGVtVG9HdWVzdChpdGVtLCBndWVzdCkpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpXG59XG5cbmZ1bmN0aW9uIHNhdmVVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBndWVzdE5hbWUgPSBmb3JtRGF0YS5nZXQoXCJndWVzdC1uYW1lXCIpXG4gICAgY29uc3QgZ3Vlc3QgPSBuZXcgR3Vlc3QoZ3Vlc3ROYW1lKVxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMucHVzaChndWVzdClcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBhZGRHdWVzdFRvVGFibGUoZ3Vlc3QpXG59XG5cbmZ1bmN0aW9uIHNhdmVUaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCB0aXBSYXRlID0gZm9ybURhdGEuZ2V0KFwidGlwLXJhdGVcIik7XG4gICAgY29uc3QgdGlwQW10ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInRpcC1hbW91bnRcIikpO1xuICAgIGlmICh0aXBSYXRlID09PSBcImN1c3RvbVwiKSB7IHNwbGl0Q3VzdG9tVGlwKHRpcEFtdCkgfVxuICAgIGVsc2UgeyBhcHBseVRpcFJhdGUodGlwUmF0ZSkgfTtcbiAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXgoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IHRheEFtdCA9IE51bWJlcihmb3JtRGF0YS5nZXQoXCJ0YXgtYW1vdW50XCIpKTtcbiAgICBzcGxpdFRheCh0YXhBbXQpXG4gICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBzcGxpdFRheCh0YXhBbXQpIHtcbiAgICBjdXJyZW50U3RhdGUudGF4ID0gTnVtYmVyKHRheEFtdClcbiAgICBjb25zdCB0YXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRheCA+IHRkLnJpZ2h0XCIpXG4gICAgdGF4LmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGF4LnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBndWVzdC5zdWJ0b3RhbCAqIDEuMCAvIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbFxuICAgICAgICBjb25zdCB0YXggPSAodGF4QW10ICogcmF0aW8pLnRvRml4ZWQoMilcbiAgICAgICAgZ3Vlc3QudGF4ID0gdGF4IFxuICAgICAgICBjb25zdCBndWVzdFRheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXguJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUYXguaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRheH1gXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc3BsaXRDdXN0b21UaXAodGlwQW10KSB7XG4gICAgY3VycmVudFN0YXRlLnRpcCA9IE51bWJlcih0aXBBbXQpXG4gICAgY29uc3QgdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXAgPiB0ZC5yaWdodFwiKVxuICAgIHRpcC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRpcC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJhdGlvID0gZ3Vlc3Quc3VidG90YWwgKiAxLjAgLyBjdXJyZW50U3RhdGUuc3VidG90YWwgXG4gICAgICAgIGNvbnN0IHRpcCA9ICh0aXBBbXQgKiByYXRpbykudG9GaXhlZCgyKVxuICAgICAgICBndWVzdC50aXAgPSB0aXAgXG4gICAgICAgIGNvbnN0IGd1ZXN0VGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpcC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRpcC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudGlwfWBcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gYXBwbHlUaXBSYXRlKHRpcFJhdGUpIHtcbiAgICB0aXBSYXRlID0gcGFyc2VGbG9hdCh0aXBSYXRlKSAvIDEwMC4wXG4gICAgY3VycmVudFN0YXRlLnRpcCA9IE51bWJlcihjdXJyZW50U3RhdGUuc3VidG90YWwpICogKHRpcFJhdGUpXG4gICAgY29uc3QgdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXAgPiB0ZC5yaWdodFwiKVxuICAgIHRpcC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnRpcC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGd1ZXN0LnRpcCA9IChndWVzdC5zdWJ0b3RhbCAqIHRpcFJhdGUpLnRvRml4ZWQoMilcbiAgICAgICAgY29uc3QgZ3Vlc3RUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGlwLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGlwLmlubmVySFRNTCA9IGAkJHtndWVzdC50aXB9YCBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9CaWxsKGl0ZW0pe1xuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlI2l0ZW1zXCIpIFxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICA8dGQgY2xhc3M9XCJsZWZ0XCIgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAke2l0ZW0ubmFtZX1cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCIgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgJCR7TnVtYmVyKGl0ZW0ucHJpY2UpLnRvRml4ZWQoMil9ICAgICAgXG4gICAgPC90ZD4gXG4gICAgYFxuICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKHRyKVxuICAgIFxuICAgIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCArPSBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICBjb25zdCBzdWJ0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VidG90YWwgPiB0ZC5yaWdodFwiKSBcbiAgICBzdWJ0b3RhbC5pbm5lckhUTUwgPSBgJCR7Y3VycmVudFN0YXRlLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxufVxuXG5mdW5jdGlvbiBhZGRJdGVtVG9HdWVzdChpdGVtLCBndWVzdCkge1xuICAgIGNvbnN0IHVzZXIgPSBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZpbmQodSA9PiB1Lm5hbWUgPT0gZ3Vlc3QpXG4gICAgdXNlci5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgY29uc3QgZ3Vlc3RCaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z3Vlc3R9YClcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKVxuICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICA8dGQgY2xhc3M9XCJsZWZ0XCIgaWQ9XCJpdGVtLW5hbWVcIj5cbiAgICAgICAgJHtpdGVtLm5hbWV9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJyaWdodFwiIGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgZ3Vlc3RCaWxsLmFwcGVuZENoaWxkKHRyKVxuXG4gICAgdXNlci5zdWJ0b3RhbCA9IDBcbiAgICB1c2VyLml0ZW1zLmZvckVhY2goIGl0ZW0gPT4gdXNlci5zdWJ0b3RhbCArPSBOdW1iZXIoaXRlbS5wcmljZSkgKVxuICAgIGNvbnN0IHN1YnRvdGFsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3VidG90YWwuJHtndWVzdH0gPiB0ZC5yaWdodGApXG4gICAgc3VidG90YWxFbC5pbm5lckhUTUwgPSBgJCR7dXNlci5zdWJ0b3RhbC50b0ZpeGVkKDIpfWBcblxufVxuXG5mdW5jdGlvbiBhZGRHdWVzdFRvVGFibGUoZ3Vlc3Qpe1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmNvbnRlbnQjdXNlcnNcIikgXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5jbGFzc05hbWUgPSBcImJveFwiXG4gICAgZGl2LmlkID0gXCJ1c2VyXCJcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIHJvd1wiIGlkPVwidXNlcnNcIj4ke2d1ZXN0Lm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgaWQ9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCIke2d1ZXN0Lm5hbWV9XCIgaWQ9XCJ1c2VycyAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCIgaWQ9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwic3VidG90YWwgJHtndWVzdC5uYW1lfVwiID5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlN1YnRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRpcCAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UaXA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRheCAke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5UYXg8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRvdGFsICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj4kMC4wMDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3VycmVudFN0YXRlLnRvdGFsID0gY3VycmVudFN0YXRlLnN1YnRvdGFsICsgY3VycmVudFN0YXRlLnRpcCArIGN1cnJlbnRTdGF0ZS50YXhcbiAgICBjb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWwgPiB0ZC5yaWdodFwiKVxuICAgIHRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudG90YWwudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBjb25zdCBndWVzdFRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvdGFsLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VG90YWwuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRvdGFsLnRvRml4ZWQoMil9YFxuICAgIH0pXG59XG5cbi8vIHdpbmRvdy5jdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGVcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTsgIFxuICAgICAgICB0aGlzLnN1YnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy50aXAgPSAwO1xuICAgICAgICB0aGlzLnRheCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsKCkge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3VidG90YWwpICsgTnVtYmVyKHRoaXMudGlwKSArIE51bWJlcih0aGlzLnRheCkgXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlOyBcbiAgICAgICAgdGhpcy5idXllcnMgPSBbXTsgXG4gICAgfVxufSIsIndpbmRvdy5vbmNsaWNrID0gZSA9PiB7XG4gICAgLy8gY2xvc2UgbW9kYWwgYnkgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIG1vZGFsIHNjcmVlblxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcubW9kYWwtc2NyZWVuJykpIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtTW9kYWwocHJvcHMpIHtcbiAgICAvLyB2ZXJpZmljYXRpb25zOiBcbiAgICAvLyBpdGVtIG11c3QgYmVsb25nIHRvIGEgZ3Vlc3QgXG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHByb3BzLmd1ZXN0cy5tYXAoIGd1ZXN0ID0+IGA8b3B0aW9uIHZhbHVlPVwiJHtndWVzdC5uYW1lfVwiPiR7Z3Vlc3QubmFtZX08L29wdGlvbj5gKSBcbiAgICBjb25zdCBvcHRpb25zID0gcHJvcHMuZ3Vlc3RzLm1hcCggZ3Vlc3QgPT4gXG4gICAgICAgIGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpdGVtLWd1ZXN0c1wiIGlkPVwiY2hlY2tib3gtJHtndWVzdC5uYW1lfVwiIHZhbHVlPVwiJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPiR7Z3Vlc3QubmFtZX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCkgXG4gICAgY29uc29sZS5sb2coXCJvcHRpb25zXCIsIC4uLm9wdGlvbnMpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+SXRlbSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBuYW1lPVwiaXRlbS1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tcHJpY2VcIj5QcmljZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1wcmljZVwiIG5hbWU9XCJpdGVtLXByaWNlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIml0ZW0tZ3Vlc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIEFzc2lnbiB0byBndWVzdChzKTogXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7b3B0aW9ucy5qb2luKFwiXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBJdGVtPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vICAgPGxhYmVsIGZvcj1cIml0ZW0tZ3Vlc3RcIj5Bc3NpZ24gdG8gZ3Vlc3Q8L2xhYmVsPlxuICAgICAgICAgICAgLy8gICA8c2VsZWN0IGlkPVwiaXRlbS1ndWVzdFwiIG5hbWU9XCJpdGVtLWd1ZXN0XCI+XG4gICAgICAgICAgICAvLyAgICAgICAke29wdGlvbnN9XG4gICAgICAgICAgICAvLyAgIDwvc2VsZWN0PlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNpdGVtLW5hbWVcIikuZm9jdXMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR3Vlc3RNb2RhbChwcm9wcykge1xuICAgIC8vIHZlcmlmaWNhdGlvbnM6IFxuICAgIC8vIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIFxuICAgIC8vIG5hbWVzIG11c3QgYmUgdW5pcXVlIFxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJndWVzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJndWVzdC1uYW1lXCI+R3Vlc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ3Vlc3QtbmFtZVwiIG5hbWU9XCJndWVzdC1uYW1lXCIgdmFsdWU9XCJHdWVzdCR7cHJvcHMuZ3Vlc3RzLmxlbmd0aCsxfVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3Vlc3QgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBHdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2d1ZXN0LW5hbWVcIikuZm9jdXMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGlwTW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRpcC1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TZWxlY3QgVGlwIFJhdGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxNVwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTUlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE1XCI+MTUlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAxOFwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMTglXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDE4XCI+MTglPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAyMFwiIG5hbWU9XCJ0aXAtcmF0ZVwiIHZhbHVlPVwiMjAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcDIwXCI+MjAlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aXAtY3VzdG9tXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCJjdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwLWN1c3RvbVwiPkN1c3RvbSBBbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGlwLWFtb3VudFwiIG5hbWU9XCJ0aXAtYW1vdW50XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjdXN0b20gYW1vdW50XCIgZGlzYWJsZWQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBUaXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ3VzdG9tVGlwKCl7XG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAtY3VzdG9tXCIpO1xuICAgIHZhciBjdXN0b21BbXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1hbW91bnRcIik7XG4gICAgY3VzdG9tQW10LmRpc2FibGVkID0gc2VsZWN0ZWQuY2hlY2tlZCA/IGZhbHNlIDogdHJ1ZSBcbiAgICBpZiAoIWN1c3RvbUFtdC5kaXNhYmxlZCkgeyBjdXN0b21BbXQuZm9jdXMoKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGF4TW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRheC1hbW91bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRheC1hbW91bnRcIj5DYWxjdWxhdGUgVGF4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXgtYW1vdW50XCIgbmFtZT1cInRheC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRheCBhbW91bnRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgVGF4PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RydWN0aW9uc01vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPiBIb3cgdG8gVXNlIDwvaDI+IFxuICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IFVzZSB0aGUgXCJBZGQgR3Vlc3RcIiBidXR0b24gdG8gYWRkIGFsbCByZWNpcGllbnRzIHRvIHRoZSBiaWxsLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBOZXh0LCBhZGQgaXRlbXMgdG8gdGhlIGJpbGwgYW5kIGFzc2lnbiB0aGVtIHRvIG9uZSBvciBtb3JlIGd1ZXN0cy4gPC9saT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IE9uY2UgYWxsIGl0ZW1zIGhhdmUgYmVlbiBhZGRlZCwgcHJlc3MgXCJBZGQgVGlwXCIgdG8gY2hvb3NlIGEgdGlwIHJhdGUgb3IgZW50ZXIgYSBjdXN0b20gdGlwIGFtb3VudC4gPC9saT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IEFkZCB0aGUgdGF4IGFtb3VudCBkaXNwbGF5ZWQgb24geW91ciBiaWxsIG9yIHJlY2VpcHQuIDwvbGk+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBGaW5hbGx5LCBwcmVzcyBcIkNhbGN1bGF0ZVwiIHRvIGNhbGN1bGF0ZSB0aGUgdG90YWwgYW1vdW50IG9mIHlvdXIgYmlsbCBhcyB3ZWxsIGFzIHRoZSBpbmRpdmlkdWFsIHRvdGFscyBvd2VkIGJ5IGVhY2ggZ3Vlc3QuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiPkRvbmU8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==