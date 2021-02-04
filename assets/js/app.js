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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// Меню в шапке>==================================================================================================================================================\r\nlet activeHeaderMenu = document.querySelector('.header__sub-menu');\r\nlet activeHeaderMenuBtn = document.querySelector('.header__link-navigation');\r\nlet closeHeaderMenu = document.querySelector('.header__sub-menu--title');\r\n\r\nactiveHeaderMenuBtn.addEventListener(\"click\", function () {\r\n\tactiveHeaderMenu.classList.add(\"header__sub-menu--active\");\r\n})\r\n\r\ncloseHeaderMenu.addEventListener(\"click\", function () {\r\n\tactiveHeaderMenu.classList.remove(\"header__sub-menu--active\");\r\n})\r\n// Меню в шапке>==================================================================================================================================================\r\n\r\n// Бургер в шапке>==================================================================================================================================================\r\nlet burgerButton = document.querySelector('.burger');\r\nlet burgerMenu = document.querySelector('.burger__menu');\r\nlet burgerExit = document.querySelector('.burger__exit');\r\nlet body = document.querySelector('.body');\r\nlet burgerMenuItem = document.querySelector('.burger__link--1');\r\nlet burgerSubmenu = document.querySelector('.burger__item-submenu'); \r\n\r\nburgerButton.addEventListener('click', function () {\r\n\tburgerMenu.classList.add('burger__menu-active');\r\n\tbody.classList.add('lock');\r\n})\r\nburgerExit.addEventListener('click', function () {\r\n\tburgerMenu.classList.remove('burger__menu-active');\r\n\tbody.classList.remove('lock');\r\n})\r\nburgerMenuItem.addEventListener('click', function () {\r\n\tburgerMenuItem.classList.toggle('burger__link--1--active');\r\n\tburgerSubmenu.classList.toggle('burger__item-submenu-active');\r\n})\r\n// Бургер в шапке>==================================================================================================================================================\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/dynamic-adapt.js":
/*!****************************************!*\
  !*** ./src/assets/js/dynamic-adapt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Dynamic Adapt \r\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\r\n// e.x. data-da=\".item,992,2\"\r\n\r\n// data-da=\".block__test,992\" ---> 1 куда 2 когда 3 какой по счету\r\n// Динамический адаптив - пример работы =======================================================================================================================================-->\r\n\r\n\r\n\r\nfunction DynamicAdapt(type) {\r\n\tthis.type = type;\r\n}\r\n\r\nDynamicAdapt.prototype.init = function () {\r\n\tconst _this = this;\r\n\t// массив объектов\r\n\tthis.оbjects = [];\r\n\tthis.daClassname = \"_dynamic_adapt_\";\r\n\t// массив DOM-элементов\r\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\r\n\r\n\t// наполнение оbjects объктами\r\n\tfor (let i = 0; i < this.nodes.length; i++) {\r\n\t\tconst node = this.nodes[i];\r\n\t\tconst data = node.dataset.da.trim();\r\n\t\tconst dataArray = data.split(\",\");\r\n\t\tconst оbject = {};\r\n\t\tоbject.element = node;\r\n\t\tоbject.parent = node.parentNode;\r\n\t\tоbject.destination = document.querySelector(dataArray[0].trim());\r\n\t\tоbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\r\n\t\tоbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\r\n\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\tthis.оbjects.push(оbject);\r\n\t}\r\n\r\n\tthis.arraySort(this.оbjects);\r\n\r\n\t// массив уникальных медиа-запросов\r\n\tthis.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\r\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\r\n\t}, this);\r\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\r\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\r\n\t});\r\n\r\n\t// навешивание слушателя на медиа-запрос\r\n\t// и вызов обработчика при первом запуске\r\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\r\n\t\tconst media = this.mediaQueries[i];\r\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\r\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\r\n\t\tconst mediaBreakpoint = mediaSplit[1];\r\n\r\n\t\t// массив объектов с подходящим брейкпоинтом\r\n\t\tconst оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\r\n\t\t\treturn item.breakpoint === mediaBreakpoint;\r\n\t\t});\r\n\t\tmatchMedia.addListener(function () {\r\n\t\t\t_this.mediaHandler(matchMedia, оbjectsFilter);\r\n\t\t});\r\n\t\tthis.mediaHandler(matchMedia, оbjectsFilter);\r\n\t}\r\n};\r\n\r\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\r\n\tif (matchMedia.matches) {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\r\n\t\t\tthis.moveTo(оbject.place, оbject.element, оbject.destination);\r\n\t\t}\r\n\t} else {\r\n\t\tfor (let i = 0; i < оbjects.length; i++) {\r\n\t\t\tconst оbject = оbjects[i];\r\n\t\t\tif (оbject.element.classList.contains(this.daClassname)) {\r\n\t\t\t\tthis.moveBack(оbject.parent, оbject.element, оbject.index);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\n// Функция перемещения\r\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\r\n\telement.classList.add(this.daClassname);\r\n\tif (place === 'last' || place >= destination.children.length) {\r\n\t\tdestination.insertAdjacentElement('beforeend', element);\r\n\t\treturn;\r\n\t}\r\n\tif (place === 'first') {\r\n\t\tdestination.insertAdjacentElement('afterbegin', element);\r\n\t\treturn;\r\n\t}\r\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\r\n}\r\n\r\n// Функция возврата\r\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\r\n\telement.classList.remove(this.daClassname);\r\n\tif (parent.children[index] !== undefined) {\r\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\r\n\t} else {\r\n\t\tparent.insertAdjacentElement('beforeend', element);\r\n\t}\r\n}\r\n\r\n// Функция получения индекса внутри родителя\r\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\r\n\tconst array = Array.prototype.slice.call(parent.children);\r\n\treturn Array.prototype.indexOf.call(array, element);\r\n};\r\n\r\n// Функция сортировки массива по breakpoint и place \r\n// по возрастанию для this.type = min\r\n// по убыванию для this.type = max\r\nDynamicAdapt.prototype.arraySort = function (arr) {\r\n\tif (this.type === \"min\") {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn a.place - b.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn a.breakpoint - b.breakpoint;\r\n\t\t});\r\n\t} else {\r\n\t\tArray.prototype.sort.call(arr, function (a, b) {\r\n\t\t\tif (a.breakpoint === b.breakpoint) {\r\n\t\t\t\tif (a.place === b.place) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\r\n\t\t\t\t\treturn -1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn b.place - a.place;\r\n\t\t\t}\r\n\r\n\t\t\treturn b.breakpoint - a.breakpoint;\r\n\t\t});\r\n\t\treturn;\r\n\t}\r\n};\r\n\r\nconst da = new DynamicAdapt(\"max\");\r\nda.init();\n\n//# sourceURL=webpack:///./src/assets/js/dynamic-adapt.js?");

/***/ }),

/***/ "./src/assets/js/webp.js":
/*!*******************************!*\
  !*** ./src/assets/js/webp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// JS-функция определения поддержки WebP =======================================================================================================================================-->\r\nfunction testWebP(callback) {\r\n\r\nvar webP = new Image();\r\nwebP.onload = webP.onerror = function () {\r\ncallback(webP.height == 2);\r\n};\r\nwebP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n}\r\n\r\ntestWebP(function (support) {\r\n\r\nif (support == true) {\r\ndocument.querySelector('body').classList.add('webp');\r\n}else{\r\ndocument.querySelector('body').classList.add('no-webp');\r\n}\r\n});\r\n// JS-функция определения поддержки WebP =======================================================================================================================================-->\r\n\n\n//# sourceURL=webpack:///./src/assets/js/webp.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/dynamic-adapt.js ./src/assets/js/webp.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Работа\\Desktop\\Test\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\Работа\\Desktop\\Test\\src\\assets\\js\\dynamic-adapt.js */\"./src/assets/js/dynamic-adapt.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Работа\\Desktop\\Test\\src\\assets\\js\\webp.js */\"./src/assets/js/webp.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/dynamic-adapt.js_./src/assets/js/webp.js?");

/***/ })

/******/ });