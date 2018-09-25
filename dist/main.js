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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("new Vue({\n  el: '#app',\n  data: {\n    index: 0,\n    pageNum: 0,\n    opts: {\n      start: 0,\n      dir: 'v',\n      loop: false,\n      duration: 300,\n      beforeChange: function beforeChange(ele, current, next) {\n        this.index = next;\n      },\n      afterChange: function afterChange(ele, current) {\n        this.index = current;\n      }\n    }\n  },\n  methods: {\n    moveTo: function moveTo(index) {\n      this.$refs.fullpage.$fullpage.moveTo(index, true);\n    },\n    showPage: function showPage() {\n      this.pageNum++;\n      this.$refs.fullpage.$fullpage.$update();\n    }\n  }\n});\nvar lFollowX = 0,\n    lFollowY = 0,\n    x = 0,\n    y = 0,\n    friction = 1 / 30;\n\nvar moveBackground = function moveBackground() {\n  x += (lFollowX - x) * friction;\n  y += (lFollowY - y) * friction;\n  translate = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(1.1)';\n  document.querySelector('.bg').style.transform = translate;\n  window.requestAnimationFrame(moveBackground);\n};\n\nwindow.addEventListener('mousemove', function (e) {\n  var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));\n  var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));\n  lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow\n\n  lFollowY = 10 * lMouseY / 100;\n}); // document.addEventListener('contextmenu', function(e) {\n//     e.preventDefault()\n//     const ev = document.createEvent('HTMLEvents');\n//     ev.initEvent('contextmenu', true, false);\n//     ev.target.dispatchEvent(ev);\n// }, false);\n\nmoveBackground();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });