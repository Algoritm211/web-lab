/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/form-functions/form-functions.js":
/*!*********************************************!*\
  !*** ./js/form-functions/form-functions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popupOpen\": () => (/* binding */ popupOpen),\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup)\n/* harmony export */ });\nfunction popupOpen(data) {\n  document.querySelector(\".popup\").classList.add(\"popup__active\");\n  document.body.style.overflow = \"hidden\";\n  document.querySelector('.popup__data').innerHTML = \"\\n  <div style=\\\"max-width: 300px;\\\">\\n  \\u0412 \\u0444\\u043E\\u0440\\u043C\\u0443 \\u043F\\u043E\\u043F\\u0430\\u0434\\u0443\\u0442 \\u0442\\u0430\\u043A\\u0438\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0435: <br>\\n  \".concat(data, \"\\n  </div>\\n  \");\n}\nfunction closePopup() {\n  document.body.style.overflow = \"visible\";\n  document.querySelector(\".popup\").classList.remove(\"popup__active\");\n  document.querySelector('.popup__data').innerHTML = '';\n}\n\n//# sourceURL=webpack://web-lab/./js/form-functions/form-functions.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage_functions_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage-functions/tabs */ \"./js/mainPage-functions/tabs.js\");\n/* harmony import */ var _popup_notification_popup_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-notification/popup-notification */ \"./js/popup-notification/popup-notification.js\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_mainPage_functions_tabs__WEBPACK_IMPORTED_MODULE_0__.tabsFunctionality)();\n  setTimeout(_popup_notification_popup_notification__WEBPACK_IMPORTED_MODULE_1__.popupNotification, 6000);\n});\n\n//# sourceURL=webpack://web-lab/./js/main.js?");

/***/ }),

/***/ "./js/mainPage-functions/tabs.js":
/*!***************************************!*\
  !*** ./js/mainPage-functions/tabs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsFunctionality\": () => (/* binding */ tabsFunctionality)\n/* harmony export */ });\nfunction tabsFunctionality() {\n  var tabs = document.querySelectorAll(\".tabs__item\");\n  tabs.forEach(function (tab) {\n    tab.addEventListener(\"click\", function () {\n      if (tab.classList.contains(\"tabs__item_active\")) {\n        tab.classList.remove(\"tabs__item_active\");\n      } else {\n        tab.classList.add(\"tabs__item_active\");\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://web-lab/./js/mainPage-functions/tabs.js?");

/***/ }),

/***/ "./js/popup-notification/popup-notification.js":
/*!*****************************************************!*\
  !*** ./js/popup-notification/popup-notification.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popupNotification\": () => (/* binding */ popupNotification)\n/* harmony export */ });\n/* harmony import */ var _form_functions_form_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-functions/form-functions */ \"./js/form-functions/form-functions.js\");\n\nfunction popupNotification(modalTimerId) {\n  document.querySelector(\".popup\").classList.add(\"popup__active\");\n  document.body.style.overflow = \"hidden\";\n  var buttonClosePopup = document.querySelectorAll(\".popup__btn-close\");\n  var infoRedirectToFormButton = document.querySelector('[data-link]');\n  infoRedirectToFormButton.addEventListener('click', function () {\n    document.location = 'formgrad.html';\n    (0,_form_functions_form_functions__WEBPACK_IMPORTED_MODULE_0__.closePopup)();\n  });\n  buttonClosePopup.forEach(function (button) {\n    button.addEventListener('click', _form_functions_form_functions__WEBPACK_IMPORTED_MODULE_0__.closePopup);\n  });\n}\n\n//# sourceURL=webpack://web-lab/./js/popup-notification/popup-notification.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;