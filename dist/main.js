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
    return "\n        <div>\n        <input type=\"checkbox\" name=\"item-guests\" id=\"checkbox-".concat(guest.name, "\" value=\"").concat(guest.name, "\">\n        <label for=\"item-guest\">").concat(guest.name, "</label>\n        </div>\n        ");
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjdkIsV0FBZCxDQUEwQk8sR0FBMUI7QUFDSDtBQUVNLFNBQVMvQyxpQkFBVCxHQUE2QjtBQUNoQyxNQUFNK0MsR0FBRyxHQUFHN0QsUUFBUSxDQUFDb0QsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FTLEVBQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxFQUFBQSxHQUFHLENBQUNsQixTQUFKO0FBcUJBM0MsRUFBQUEsUUFBUSxDQUFDNkUsSUFBVCxDQUFjdkIsV0FBZCxDQUEwQk8sR0FBMUI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUMzS0Q7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ndWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tb2RhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21vZGFsLnNjc3NcIjtcbmltcG9ydCBHdWVzdCBmcm9tIFwiLi9zY3JpcHRzL2d1ZXN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9zY3JpcHRzL2l0ZW1cIjtcbmltcG9ydCAqIGFzIE1vZGFsIGZyb20gXCIuL3NjcmlwdHMvbW9kYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIGd1ZXN0czogW10sXG4gICAgc3VidG90YWw6IDAuMDAsXG4gICAgdGlwOiAwLjAwLFxuICAgIHRheDogMC4wMCxcbiAgICB0b3RhbDogMC4wMFxufVxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jaXRlbXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRJdGVtTW9kYWwoY3VycmVudFN0YXRlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlSXRlbSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN1c2Vyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEd1ZXN0TW9kYWwoY3VycmVudFN0YXRlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVXNlcik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0aXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBNb2RhbC5hZGRUaXBNb2RhbCgpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAxNVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTW9kYWwudG9nZ2xlQ3VzdG9tVGlwKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwMThcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE1vZGFsLnRvZ2dsZUN1c3RvbVRpcClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcDIwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXAtY3VzdG9tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBNb2RhbC50b2dnbGVDdXN0b21UaXApXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUaXApO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdGF4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkVGF4TW9kYWwoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVGF4KTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jY2FsY3VsYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxjdWxhdGUpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2luc3RydWN0aW9uc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmluc3RydWN0aW9uc01vZGFsKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHNhdmVJdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBjb25zdCBpdGVtTmFtZSA9IGZvcm1EYXRhLmdldChcIml0ZW0tbmFtZVwiKVxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGZvcm1EYXRhLmdldChcIml0ZW0tcHJpY2VcIilcbiAgICBjb25zdCBndWVzdHMgPSBmb3JtRGF0YS5nZXRBbGwoXCJpdGVtLWd1ZXN0c1wiKVxuICAgIGNvbnN0IGl0ZW1RdHkgPSBndWVzdHMubGVuZ3RoXG4gICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKGl0ZW1OYW1lLCBOdW1iZXIoaXRlbVByaWNlICogMS4wKS9pdGVtUXR5KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbVF0eTsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZS5pdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIGFkZEl0ZW1Ub0JpbGwoaXRlbSlcbiAgICB9XG4gICAgZ3Vlc3RzLmZvckVhY2goIGd1ZXN0ID0+IGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KSlcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbn1cblxuZnVuY3Rpb24gc2F2ZVVzZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGd1ZXN0TmFtZSA9IGZvcm1EYXRhLmdldChcImd1ZXN0LW5hbWVcIilcbiAgICBjb25zdCBndWVzdCA9IG5ldyBHdWVzdChndWVzdE5hbWUpXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5wdXNoKGd1ZXN0KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGFkZEd1ZXN0VG9UYWJsZShndWVzdClcbn1cblxuZnVuY3Rpb24gc2F2ZVRpcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IHRpcFJhdGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXAtcmF0ZVwiKTtcbiAgICBjb25zdCB0aXBBbXQgPSBOdW1iZXIoZm9ybURhdGEuZ2V0KFwidGlwLWFtb3VudFwiKSk7XG4gICAgaWYgKHRpcFJhdGUgPT09IFwiY3VzdG9tXCIpIHsgc3BsaXRDdXN0b21UaXAodGlwQW10KSB9XG4gICAgZWxzZSB7IGFwcGx5VGlwUmF0ZSh0aXBSYXRlKSB9O1xuICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRheChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgY29uc3QgdGF4QW10ID0gTnVtYmVyKGZvcm1EYXRhLmdldChcInRheC1hbW91bnRcIikpO1xuICAgIHNwbGl0VGF4KHRheEFtdClcbiAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0VGF4KHRheEFtdCkge1xuICAgIGN1cnJlbnRTdGF0ZS50YXggPSBOdW1iZXIodGF4QW10KVxuICAgIGNvbnN0IHRheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGF4ID4gdGQucmlnaHRcIilcbiAgICB0YXguaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50YXgudG9GaXhlZCgyKX1gXG5cbiAgICBjdXJyZW50U3RhdGUuZ3Vlc3RzLmZvckVhY2goZ3Vlc3QgPT4ge1xuICAgICAgICBjb25zdCByYXRpbyA9IGd1ZXN0LnN1YnRvdGFsICogMS4wIC8gY3VycmVudFN0YXRlLnN1YnRvdGFsXG4gICAgICAgIGNvbnN0IHRheCA9ICh0YXhBbXQgKiByYXRpbykudG9GaXhlZCgyKVxuICAgICAgICBndWVzdC50YXggPSB0YXggXG4gICAgICAgIGNvbnN0IGd1ZXN0VGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRheC4ke2d1ZXN0Lm5hbWV9ID4gdGQucmlnaHRgKVxuICAgICAgICBndWVzdFRheC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudGF4fWBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzcGxpdEN1c3RvbVRpcCh0aXBBbXQpIHtcbiAgICBjdXJyZW50U3RhdGUudGlwID0gTnVtYmVyKHRpcEFtdClcbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpcCA+IHRkLnJpZ2h0XCIpXG4gICAgdGlwLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGlwLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSBndWVzdC5zdWJ0b3RhbCAqIDEuMCAvIGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCBcbiAgICAgICAgY29uc3QgdGlwID0gKHRpcEFtdCAqIHJhdGlvKS50b0ZpeGVkKDIpXG4gICAgICAgIGd1ZXN0LnRpcCA9IHRpcCBcbiAgICAgICAgY29uc3QgZ3Vlc3RUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGlwLiR7Z3Vlc3QubmFtZX0gPiB0ZC5yaWdodGApXG4gICAgICAgIGd1ZXN0VGlwLmlubmVySFRNTCA9IGAkJHtndWVzdC50aXB9YFxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBhcHBseVRpcFJhdGUodGlwUmF0ZSkge1xuICAgIHRpcFJhdGUgPSBwYXJzZUZsb2F0KHRpcFJhdGUpIC8gMTAwLjBcbiAgICBjdXJyZW50U3RhdGUudGlwID0gTnVtYmVyKGN1cnJlbnRTdGF0ZS5zdWJ0b3RhbCkgKiAodGlwUmF0ZSlcbiAgICBjb25zdCB0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpcCA+IHRkLnJpZ2h0XCIpXG4gICAgdGlwLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUudGlwLnRvRml4ZWQoMil9YFxuXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICAgICAgZ3Vlc3QudGlwID0gKGd1ZXN0LnN1YnRvdGFsICogdGlwUmF0ZSkudG9GaXhlZCgyKVxuICAgICAgICBjb25zdCBndWVzdFRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXAuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUaXAuaW5uZXJIVE1MID0gYCQke2d1ZXN0LnRpcH1gIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0JpbGwoaXRlbSl7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGUjaXRlbXNcIikgXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICR7aXRlbS5uYW1lfVxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicmlnaHRcIiBpZD1cIml0ZW0tcHJpY2VcIj5cbiAgICAkJHtOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKX0gICAgICBcbiAgICA8L3RkPiBcbiAgICBgXG4gICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQodHIpXG4gICAgXG4gICAgY3VycmVudFN0YXRlLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKVxuICAgIGNvbnN0IHN1YnRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJ0b3RhbCA+IHRkLnJpZ2h0XCIpIFxuICAgIHN1YnRvdGFsLmlubmVySFRNTCA9IGAkJHtjdXJyZW50U3RhdGUuc3VidG90YWwudG9GaXhlZCgyKX1gXG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub0d1ZXN0KGl0ZW0sIGd1ZXN0KSB7XG4gICAgY29uc3QgdXNlciA9IGN1cnJlbnRTdGF0ZS5ndWVzdHMuZmluZCh1ID0+IHUubmFtZSA9PSBndWVzdClcbiAgICB1c2VyLml0ZW1zLnB1c2goaXRlbSlcbiAgICBjb25zdCBndWVzdEJpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtndWVzdH1gKVxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpXG4gICAgdHIuaW5uZXJIVE1MID0gYFxuICAgIDx0ZCBjbGFzcz1cImxlZnRcIiBpZD1cIml0ZW0tbmFtZVwiPlxuICAgICAgICAke2l0ZW0ubmFtZX1cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCIgaWQ9XCJpdGVtLXByaWNlXCI+XG4gICAgICAgICQke051bWJlcihpdGVtLnByaWNlKS50b0ZpeGVkKDIpfSAgICAgIFxuICAgIDwvdGQ+IFxuICAgIGBcbiAgICBndWVzdEJpbGwuYXBwZW5kQ2hpbGQodHIpXG5cbiAgICB1c2VyLnN1YnRvdGFsID0gMFxuICAgIHVzZXIuaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB1c2VyLnN1YnRvdGFsICs9IE51bWJlcihpdGVtLnByaWNlKSApXG4gICAgY29uc3Qgc3VidG90YWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdWJ0b3RhbC4ke2d1ZXN0fSA+IHRkLnJpZ2h0YClcbiAgICBzdWJ0b3RhbEVsLmlubmVySFRNTCA9IGAkJHt1c2VyLnN1YnRvdGFsLnRvRml4ZWQoMil9YFxuXG59XG5cbmZ1bmN0aW9uIGFkZEd1ZXN0VG9UYWJsZShndWVzdCl7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29udGVudCN1c2Vyc1wiKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwiYm94XCJcbiAgICBkaXYuaWQgPSBcInVzZXJcIlxuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgcm93XCIgaWQ9XCJ1c2Vyc1wiPiR7Z3Vlc3QubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIiR7Z3Vlc3QubmFtZX1cIiBpZD1cInVzZXJzICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiBpZD1cInVzZXJcIj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJzdWJ0b3RhbCAke2d1ZXN0Lm5hbWV9XCIgPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+U3VidG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGlwICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRpcDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGF4ICR7Z3Vlc3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRheDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+JDAuMDA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG90YWwgJHtndWVzdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPiQwLjAwPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjdXJyZW50U3RhdGUudG90YWwgPSBjdXJyZW50U3RhdGUuc3VidG90YWwgKyBjdXJyZW50U3RhdGUudGlwICsgY3VycmVudFN0YXRlLnRheFxuICAgIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3RhbCA+IHRkLnJpZ2h0XCIpXG4gICAgdG90YWwuaW5uZXJIVE1MID0gYCQke2N1cnJlbnRTdGF0ZS50b3RhbC50b0ZpeGVkKDIpfWBcblxuICAgIGN1cnJlbnRTdGF0ZS5ndWVzdHMuZm9yRWFjaChndWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IGd1ZXN0VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG90YWwuJHtndWVzdC5uYW1lfSA+IHRkLnJpZ2h0YClcbiAgICAgICAgZ3Vlc3RUb3RhbC5pbm5lckhUTUwgPSBgJCR7Z3Vlc3QudG90YWwudG9GaXhlZCgyKX1gXG4gICAgfSlcbn1cblxuLy8gd2luZG93LmN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdOyAgXG4gICAgICAgIHRoaXMuc3VidG90YWwgPSAwO1xuICAgICAgICB0aGlzLnRpcCA9IDA7XG4gICAgICAgIHRoaXMudGF4ID0gMDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5zdWJ0b3RhbCkgKyBOdW1iZXIodGhpcy50aXApICsgTnVtYmVyKHRoaXMudGF4KSBcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7IFxuICAgICAgICB0aGlzLmJ1eWVycyA9IFtdOyBcbiAgICB9XG59Iiwid2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgbW9kYWwgc2NyZWVuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5tb2RhbC1zY3JlZW4nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Nb2RhbChwcm9wcykge1xuICAgIC8vIHZlcmlmaWNhdGlvbnM6IFxuICAgIC8vIGl0ZW0gbXVzdCBiZWxvbmcgdG8gYSBndWVzdCBcbiAgICAvLyBjb25zdCBvcHRpb25zID0gcHJvcHMuZ3Vlc3RzLm1hcCggZ3Vlc3QgPT4gYDxvcHRpb24gdmFsdWU9XCIke2d1ZXN0Lm5hbWV9XCI+JHtndWVzdC5uYW1lfTwvb3B0aW9uPmApIFxuICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wcy5ndWVzdHMubWFwKCBndWVzdCA9PiBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIml0ZW0tZ3Vlc3RzXCIgaWQ9XCJjaGVja2JveC0ke2d1ZXN0Lm5hbWV9XCIgdmFsdWU9XCIke2d1ZXN0Lm5hbWV9XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWd1ZXN0XCI+JHtndWVzdC5uYW1lfTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgKSBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5JdGVtIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIG5hbWU9XCJpdGVtLW5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1wcmljZVwiPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLXByaWNlXCIgbmFtZT1cIml0ZW0tcHJpY2VcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1ndWVzdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgQXNzaWduIHRvIGd1ZXN0KHMpOiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHtvcHRpb25zLmpvaW4oXCJcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEl0ZW08L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICA8bGFiZWwgZm9yPVwiaXRlbS1ndWVzdFwiPkFzc2lnbiB0byBndWVzdDwvbGFiZWw+XG4gICAgICAgICAgICAvLyAgIDxzZWxlY3QgaWQ9XCJpdGVtLWd1ZXN0XCIgbmFtZT1cIml0ZW0tZ3Vlc3RcIj5cbiAgICAgICAgICAgIC8vICAgICAgICR7b3B0aW9uc31cbiAgICAgICAgICAgIC8vICAgPC9zZWxlY3Q+XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2l0ZW0tbmFtZVwiKS5mb2N1cygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHdWVzdE1vZGFsKHByb3BzKSB7XG4gICAgLy8gdmVyaWZpY2F0aW9uczogXG4gICAgLy8gbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgXG4gICAgLy8gbmFtZXMgbXVzdCBiZSB1bmlxdWUgXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImd1ZXN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImd1ZXN0LW5hbWVcIj5HdWVzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJndWVzdC1uYW1lXCIgbmFtZT1cImd1ZXN0LW5hbWVcIiB2YWx1ZT1cIkd1ZXN0JHtwcm9wcy5ndWVzdHMubGVuZ3RoKzF9XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBndWVzdCBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEd1ZXN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZ3Vlc3QtbmFtZVwiKS5mb2N1cygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUaXBNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGlwLXJhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNlbGVjdCBUaXAgUmF0ZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE1XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxNSVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMTVcIj4xNSU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDE4XCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIxOCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMThcIj4xOCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcDIwXCIgbmFtZT1cInRpcC1yYXRlXCIgdmFsdWU9XCIyMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGlwMjBcIj4yMCU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRpcC1jdXN0b21cIiBuYW1lPVwidGlwLXJhdGVcIiB2YWx1ZT1cImN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXAtY3VzdG9tXCI+Q3VzdG9tIEFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXAtYW1vdW50XCIgbmFtZT1cInRpcC1hbW91bnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGN1c3RvbSBhbW91bnRcIiBkaXNhYmxlZD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIFRpcDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDdXN0b21UaXAoKXtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpcC1jdXN0b21cIik7XG4gICAgdmFyIGN1c3RvbUFtdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwLWFtb3VudFwiKTtcbiAgICBjdXN0b21BbXQuZGlzYWJsZWQgPSBzZWxlY3RlZC5jaGVja2VkID8gZmFsc2UgOiB0cnVlIFxuICAgIGlmICghY3VzdG9tQW10LmRpc2FibGVkKSB7IGN1c3RvbUFtdC5mb2N1cygpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXhNb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGF4LWFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGF4LWFtb3VudFwiPkNhbGN1bGF0ZSBUYXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRheC1hbW91bnRcIiBuYW1lPVwidGF4LWFtb3VudFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGF4IGFtb3VudFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIlwiPkFkZCBUYXg8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdHJ1Y3Rpb25zTW9kYWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwibW9kYWxcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtc2NyZWVuXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+IEhvdyB0byBVc2UgPC9oMj4gXG4gICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gVXNlIHRoZSBcIkFkZCBHdWVzdFwiIGJ1dHRvbiB0byBhZGQgYWxsIHJlY2lwaWVudHMgdG8gdGhlIGJpbGwuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IE5leHQsIGFkZCBpdGVtcyB0byB0aGUgYmlsbCBhbmQgYXNzaWduIHRoZW0gdG8gb25lIG9yIG1vcmUgZ3Vlc3RzLiA8L2xpPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gT25jZSBhbGwgaXRlbXMgaGF2ZSBiZWVuIGFkZGVkLCBwcmVzcyBcIkFkZCBUaXBcIiB0byBjaG9vc2UgYSB0aXAgcmF0ZSBvciBlbnRlciBhIGN1c3RvbSB0aXAgYW1vdW50LiA8L2xpPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gQWRkIHRoZSB0YXggYW1vdW50IGRpc3BsYXllZCBvbiB5b3VyIGJpbGwgb3IgcmVjZWlwdC4gPC9saT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+IEZpbmFsbHksIHByZXNzIFwiQ2FsY3VsYXRlXCIgdG8gY2FsY3VsYXRlIHRoZSB0b3RhbCBhbW91bnQgb2YgeW91ciBiaWxsIGFzIHdlbGwgYXMgdGhlIGluZGl2aWR1YWwgdG90YWxzIG93ZWQgYnkgZWFjaCBndWVzdC4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+RG9uZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiR3Vlc3QiLCJJdGVtIiwiTW9kYWwiLCJjdXJyZW50U3RhdGUiLCJpdGVtcyIsImd1ZXN0cyIsInN1YnRvdGFsIiwidGlwIiwidGF4IiwidG90YWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbU1vZGFsIiwic2F2ZUl0ZW0iLCJhZGRHdWVzdE1vZGFsIiwic2F2ZVVzZXIiLCJhZGRUaXBNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlQ3VzdG9tVGlwIiwic2F2ZVRpcCIsImFkZFRheE1vZGFsIiwic2F2ZVRheCIsImNhbGN1bGF0ZSIsImluc3RydWN0aW9uc01vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VNb2RhbCIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXRlbU5hbWUiLCJnZXQiLCJpdGVtUHJpY2UiLCJnZXRBbGwiLCJpdGVtUXR5IiwibGVuZ3RoIiwiaXRlbSIsIk51bWJlciIsImkiLCJwdXNoIiwiYWRkSXRlbVRvQmlsbCIsImZvckVhY2giLCJndWVzdCIsImFkZEl0ZW1Ub0d1ZXN0IiwiZ3Vlc3ROYW1lIiwiYWRkR3Vlc3RUb1RhYmxlIiwidGlwUmF0ZSIsInRpcEFtdCIsInNwbGl0Q3VzdG9tVGlwIiwiYXBwbHlUaXBSYXRlIiwidGF4QW10Iiwic3BsaXRUYXgiLCJpbm5lckhUTUwiLCJ0b0ZpeGVkIiwicmF0aW8iLCJndWVzdFRheCIsIm5hbWUiLCJndWVzdFRpcCIsInBhcnNlRmxvYXQiLCJpdGVtTGlzdCIsInRyIiwiY3JlYXRlRWxlbWVudCIsInByaWNlIiwiYXBwZW5kQ2hpbGQiLCJ1c2VyIiwiZmluZCIsInUiLCJndWVzdEJpbGwiLCJzdWJ0b3RhbEVsIiwibGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZ3Vlc3RUb3RhbCIsImJ1eWVycyIsIndpbmRvdyIsIm9uY2xpY2siLCJ0YXJnZXQiLCJtYXRjaGVzIiwiZWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJqb2luIiwiYm9keSIsImZvY3VzIiwic2VsZWN0ZWQiLCJjdXN0b21BbXQiLCJkaXNhYmxlZCIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9