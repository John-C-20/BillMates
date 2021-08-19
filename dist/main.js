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
  guests: []
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
}

function update() {// for each item in currentState.items, update the bill
  // for each guest in guest, create a bill for them and update the guest section
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
  div.innerHTML = "\n        <div class=\"modal-screen\">\n        </div>\n        <div class=\"modal-form\">\n            <form>\n                <div id=\"guest-name\">\n                    <label for=\"guest-name\">Guest Name</label>\n                    <input type=\"text\" id=\"guest-name\" name=\"guest-name\" required>\n                </div>\n    \n                <div>\n                    <button id=\"submit\"\">Add Guest</button>\n                </div>\n            </form>\n        </div>\n    ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2d1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZSIsIml0ZW1zIiwiZ3Vlc3RzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1vZGFsIiwic2F2ZUl0ZW0iLCJzYXZlVXNlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjb25zb2xlIiwibG9nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIml0ZW1OYW1lIiwiZ2V0IiwiaXRlbVByaWNlIiwiaXRlbSIsIkl0ZW0iLCJwdXNoIiwiZ3Vlc3ROYW1lIiwiZ3Vlc3QiLCJHdWVzdCIsInVwZGF0ZSIsIm5hbWUiLCJwcmljZSIsImJ1eWVycyIsIndpbmRvdyIsIm9uY2xpY2siLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY2xvc2VNb2RhbCIsImVsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYWRkSXRlbU1vZGFsIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImFkZEd1ZXN0TW9kYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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RyxDQUFDRSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FGLEtBQUcsQ0FBQ0csU0FBSjtBQWdCQXRDLFVBQVEsQ0FBQ3VDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsR0FBMUI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUN6REQ7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2V0LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL21vZGFsLnNjc3NcIjtcbmltcG9ydCBHdWVzdCBmcm9tIFwiLi9zY3JpcHRzL2d1ZXN0XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9zY3JpcHRzL2l0ZW1cIjtcbmltcG9ydCAqIGFzIE1vZGFsIGZyb20gXCIuL3NjcmlwdHMvbW9kYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIGd1ZXN0czogW11cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNpdGVtc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIE1vZGFsLmFkZEl0ZW1Nb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVJdGVtKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3VzZXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgTW9kYWwuYWRkR3Vlc3RNb2RhbCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVVc2VyKTtcblxufSk7XG5cbmZ1bmN0aW9uIHNhdmVJdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1uYW1lXCIpXG4gICAgY29uc3QgaXRlbVByaWNlID0gZm9ybURhdGEuZ2V0KFwiaXRlbS1wcmljZVwiKVxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShpdGVtTmFtZSwgaXRlbVByaWNlKVxuICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgY3VycmVudFN0YXRlLml0ZW1zLnB1c2goaXRlbSlcbiAgICBNb2RhbC5jbG9zZU1vZGFsKClcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhdGUpXG59XG5cbmZ1bmN0aW9uIHNhdmVVc2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgIGNvbnN0IGd1ZXN0TmFtZSA9IGZvcm1EYXRhLmdldChcImd1ZXN0LW5hbWVcIilcbiAgICBjb25zdCBndWVzdCA9IG5ldyBHdWVzdChndWVzdE5hbWUpXG4gICAgY29uc29sZS5sb2coZ3Vlc3QpXG4gICAgY3VycmVudFN0YXRlLmd1ZXN0cy5wdXNoKGd1ZXN0KVxuICAgIE1vZGFsLmNsb3NlTW9kYWwoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGF0ZSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgLy8gZm9yIGVhY2ggaXRlbSBpbiBjdXJyZW50U3RhdGUuaXRlbXMsIHVwZGF0ZSB0aGUgYmlsbFxuICAgIC8vIGZvciBlYWNoIGd1ZXN0IGluIGd1ZXN0LCBjcmVhdGUgYSBiaWxsIGZvciB0aGVtIGFuZCB1cGRhdGUgdGhlIGd1ZXN0IHNlY3Rpb25cbn1cblxuXG4vLyB3aW5kb3cuY3VycmVudFN0YXRlID0gY3VycmVudFN0YXRlXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107ICBcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7IFxuICAgICAgICB0aGlzLmJ1eWVycyA9IFtdOyBcbiAgICB9XG59Iiwid2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICAvLyBjbG9zZSBtb2RhbCBieSBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgbW9kYWwgc2NyZWVuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5tb2RhbC1zY3JlZW4nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Nb2RhbCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1zY3JlZW5cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5JdGVtIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIG5hbWU9XCJpdGVtLW5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaXRlbS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1wcmljZVwiPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLXByaWNlXCIgbmFtZT1cIml0ZW0tcHJpY2VcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCJcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHdWVzdE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCI7XG4gICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXNjcmVlblwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJndWVzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJndWVzdC1uYW1lXCI+R3Vlc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ3Vlc3QtbmFtZVwiIG5hbWU9XCJndWVzdC1uYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiXCI+QWRkIEd1ZXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9