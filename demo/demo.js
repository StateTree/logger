(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("logger", [], factory);
	else if(typeof exports === 'object')
		exports["logger"] = factory();
	else
		root["logger"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("diff", [], factory);
	else if(typeof exports === 'object')
		exports["diff"] = factory();
	else
		root["diff"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stringCompare = __webpack_require__(1);

var _stringCompare2 = _interopRequireDefault(_stringCompare);

var _numberCompare = __webpack_require__(2);

var _numberCompare2 = _interopRequireDefault(_numberCompare);

var _dateCompare = __webpack_require__(3);

var _dateCompare2 = _interopRequireDefault(_dateCompare);

var _arrayCompare = __webpack_require__(4);

var _arrayCompare2 = _interopRequireDefault(_arrayCompare);

var _objectCompare = __webpack_require__(5);

var _objectCompare2 = _interopRequireDefault(_objectCompare);

var _is = __webpack_require__(7);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compare(oldObj, newObj) {
    if (oldObj === newObj) return 0;
    if (oldObj == null) return 1;
    if (newObj == null) return -1;

    var oldObjType = typeof oldObj === 'undefined' ? 'undefined' : _typeof(oldObj);
    var newObjType = typeof newObj === 'undefined' ? 'undefined' : _typeof(newObj);

    if (oldObjType !== newObjType) return (0, _stringCompare2.default)(oldObjType, newObjType);

    if (oldObjType === 'boolean') return (0, _numberCompare2.default)(Number(oldObj), Number(newObj));
    if (oldObjType === 'number') return (0, _numberCompare2.default)(oldObj, newObj);
    if (oldObjType === 'string') return (0, _stringCompare2.default)(oldObj, newObj);

    if (oldObjType !== 'object') return 1;

    if ((0, _is2.default)(oldObj, Date)) return (0, _dateCompare2.default)(oldObj, newObj);
    if ((0, _is2.default)(oldObj, Array)) return (0, _arrayCompare2.default)(oldObj, newObj, compare);
    if ((0, _is2.default)(oldObj, Object)) return (0, _objectCompare2.default)(oldObj, newObj, compare);

    return 0;
};

exports.default = compare;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
function stringCompare(oldValue, newValue, isCaseSensitive) {
    isCaseSensitive = typeof isCaseSensitive !== 'undefined' ? isCaseSensitive : false;

    if (oldValue == null && newValue == null) return 0;
    if (oldValue == null) return 1;
    if (newValue == null) return -1;

    if (isCaseSensitive) {
        oldValue = String(oldValue).toLocaleLowerCase();
        newValue = String(newValue).toLocaleLowerCase();
    }

    var result = String(oldValue).localeCompare(newValue);
    if (result < -1) result = -1;else if (result > 1) result = 1;

    return result;
}

exports.default = stringCompare;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function numberCompare(oldValue, newValue) {

    if (isNaN(oldValue) && isNaN(newValue)) return 0;
    if (isNaN(oldValue)) return 1;
    if (isNaN(newValue)) return -1;

    if (oldValue < newValue) return -1;
    if (oldValue > newValue) return 1;
    return 0;
}

exports.default = numberCompare;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function dateCompare(oldValue, newValue) {

    if (oldValue === null && newValue === null) return 0;
    if (oldValue === null) return 1;
    if (newValue === null) return -1;

    var oldTime = oldValue.getTime();
    var newTime = newValue.getTime();
    if (oldTime < newTime) return -1;
    if (oldTime > newTime) return 1;

    if (isNaN(oldTime) && isNaN(newTime)) return 0;
    if (isNaN(oldTime)) return 1;
    if (isNaN(newTime)) return -1;

    return 0;
}

exports.default = dateCompare;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayCompare(oldObj, newObj) {
    if (oldObj === newObj) return 0;
    if (oldObj == null) return 1;
    if (newObj == null) return -1;

    var comparisonValue = void 0;
    var oldObjLength = oldObj.length;
    var newObjLength = newObj.length;
    if (oldObjLength < newObjLength) return -1;
    if (oldObjLength > newObjLength) return 1;

    for (var i = 0; i < oldObjLength; i++) {
        //recursive comparison of array elements
        comparisonValue = (0, _compare2.default)(oldObj[i], newObj[i]);
        if (comparisonValue != 0) return comparisonValue;
    }
    return 0;
};

exports.default = arrayCompare;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectCompare(oldObj, newObj) {
    if (oldObj === newObj) return 0;
    if (oldObj == null) return 1;
    if (newObj == null) return -1;

    var prop = void 0;
    for (prop in oldObj) {
        if (!newObj.hasOwnProperty(prop)) return -1;
    }

    var comparisonValue = void 0;
    for (prop in newObj) {
        if (!oldObj.hasOwnProperty(prop)) return 1;
        //recursive comparison of object property
        comparisonValue = (0, _compare2.default)(oldObj[prop], newObj[prop]);
        if (comparisonValue !== 0) return comparisonValue;
    }
    return 0;
};

exports.default = objectCompare;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.objectCompare = exports.arrayCompare = exports.dateCompare = exports.numberCompare = exports.stringCompare = exports.compare = exports.default = undefined;

var _stringCompare = __webpack_require__(1);

var _stringCompare2 = _interopRequireDefault(_stringCompare);

var _numberCompare = __webpack_require__(2);

var _numberCompare2 = _interopRequireDefault(_numberCompare);

var _dateCompare = __webpack_require__(3);

var _dateCompare2 = _interopRequireDefault(_dateCompare);

var _arrayCompare = __webpack_require__(4);

var _arrayCompare2 = _interopRequireDefault(_arrayCompare);

var _objectCompare = __webpack_require__(5);

var _objectCompare2 = _interopRequireDefault(_objectCompare);

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

var _diff = __webpack_require__(8);

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _diff2.default;
exports.compare = _compare2.default;
exports.stringCompare = _stringCompare2.default;
exports.numberCompare = _numberCompare2.default;
exports.dateCompare = _dateCompare2.default;
exports.arrayCompare = _arrayCompare2.default;
exports.objectCompare = _objectCompare2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function is(obj, Type) {
    if (obj == null || obj == null) return false;
    if (obj instanceof Type) return true;
    if (Type === Object) return true;

    if (typeof obj === 'string') return Type === String;
    if (typeof obj === 'number') return Type === Number;
    if (typeof obj === 'boolean') return Type === Boolean;
    if (Type === Array) return Array.isArray(obj);

    return false;
}

exports.default = is;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If there is no change returns undefined
// if there is a change returns the latest value
function diff(comparedValue, value) {
	var comparisonValue = (0, _compare2.default)(comparedValue, value);

	if (comparisonValue === 0) {
		value = undefined;
	}

	return value;
}

exports.default = diff;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODdmZWUxZDhhYjRkYzQxMDcwOSIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJvbGRPYmoiLCJuZXdPYmoiLCJvbGRPYmpUeXBlIiwibmV3T2JqVHlwZSIsIk51bWJlciIsIkRhdGUiLCJBcnJheSIsIk9iamVjdCIsInN0cmluZ0NvbXBhcmUiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDYXNlU2Vuc2l0aXZlIiwiU3RyaW5nIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZXN1bHQiLCJsb2NhbGVDb21wYXJlIiwibnVtYmVyQ29tcGFyZSIsImlzTmFOIiwiZGF0ZUNvbXBhcmUiLCJvbGRUaW1lIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJhcnJheUNvbXBhcmUiLCJjb21wYXJpc29uVmFsdWUiLCJvbGRPYmpMZW5ndGgiLCJsZW5ndGgiLCJuZXdPYmpMZW5ndGgiLCJpIiwib2JqZWN0Q29tcGFyZSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJpcyIsIm9iaiIsIlR5cGUiLCJCb29sZWFuIiwiaXNBcnJheSIsImRp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QUFFQTtBQUNBO0FBQ0EsU0FBU0ssSUFBVCxDQUFjQyxhQUFkLEVBQTZCQyxLQUE3QixFQUFtQztBQUNsQyxLQUFNaEIsa0JBQW1CLHVCQUFRZSxhQUFSLEVBQXVCQyxLQUF2QixDQUF6Qjs7QUFFQSxLQUFHaEIsb0JBQW9CLENBQXZCLEVBQXlCO0FBQ3hCZ0IsVUFBUUMsU0FBUjtBQUNBOztBQUVFLFFBQU9ELEtBQVA7QUFDSDs7a0JBRWNGLEkiLCJmaWxlIjoibGliL2RpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ4N2ZlZTFkOGFiNGRjNDEwNzA5IiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9zdHJpbmdDb21wYXJlJ1xuaW1wb3J0IG51bWJlckNvbXBhcmUgZnJvbSAnLi9udW1iZXJDb21wYXJlJ1xuaW1wb3J0IGRhdGVDb21wYXJlIGZyb20gJy4vZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vYXJyYXlDb21wYXJlJ1xuaW1wb3J0IG9iamVjdENvbXBhcmUgZnJvbSAnLi9vYmplY3RDb21wYXJlJ1xuaW1wb3J0IGlzIGZyb20gJy4vLi4vaXMnXG5cbmZ1bmN0aW9uIGNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgY29uc3QgIG9sZE9ialR5cGUgPSB0eXBlb2Yob2xkT2JqKTtcbiAgICBjb25zdCAgbmV3T2JqVHlwZSA9IHR5cGVvZihuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09IG5ld09ialR5cGUpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9ialR5cGUsIG5ld09ialR5cGUpO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUoTnVtYmVyKG9sZE9iaiksIE51bWJlcihuZXdPYmopKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXMob2xkT2JqLCBEYXRlKSlcbiAgICAgICAgcmV0dXJuIGRhdGVDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAoaXMob2xkT2JqLCBBcnJheSkpXG4gICAgICAgIHJldHVybiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmosY29tcGFyZSk7XG4gICAgaWYgKGlzKG9sZE9iaiwgT2JqZWN0KSlcbiAgICAgICAgcmV0dXJuIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2NvbXBhcmUuanMiLCIvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKVxuICAgICAgICByZXN1bHQgPSAtMTtcbiAgICBlbHNlIGlmIChyZXN1bHQgPiAxKVxuICAgICAgICByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nQ29tcGFyZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvc3RyaW5nQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9udW1iZXJDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBkYXRlQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHZhciAgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRlQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIHZhciAgb2xkT2JqTGVuZ3RoID0gb2xkT2JqLmxlbmd0aDtcbiAgICB2YXIgIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cblxuICAgIGxldCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBvbGRPYmopXG4gICAge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIGZvciAocHJvcCBpbiBuZXdPYmopXG4gICAge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtwcm9wXSwgbmV3T2JqW3Byb3BdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9vYmplY3RDb21wYXJlLmpzIiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9jb21wYXJlL3N0cmluZ0NvbXBhcmUnXG5pbXBvcnQgbnVtYmVyQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvbnVtYmVyQ29tcGFyZSdcbmltcG9ydCBkYXRlQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vY29tcGFyZS9hcnJheUNvbXBhcmUnXG5pbXBvcnQgb2JqZWN0Q29tcGFyZSBmcm9tICcuL2NvbXBhcmUvb2JqZWN0Q29tcGFyZSdcbmltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9jb21wYXJlJ1xuaW1wb3J0IGRpZmYgZnJvbSAnLi9kaWZmJ1xuXG5leHBvcnQge1xuICAgIGRpZmYgYXMgZGVmYXVsdCxcbiAgICBjb21wYXJlLFxuICAgIHN0cmluZ0NvbXBhcmUsXG4gICAgbnVtYmVyQ29tcGFyZSxcbiAgICBkYXRlQ29tcGFyZSxcbiAgICBhcnJheUNvbXBhcmUsXG4gICAgb2JqZWN0Q29tcGFyZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IE51bWJlcjtcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaXMuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUvY29tcGFyZSc7XG5cbi8vIElmIHRoZXJlIGlzIG5vIGNoYW5nZSByZXR1cm5zIHVuZGVmaW5lZFxuLy8gaWYgdGhlcmUgaXMgYSBjaGFuZ2UgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlXG5mdW5jdGlvbiBkaWZmKGNvbXBhcmVkVmFsdWUsIHZhbHVlKXtcblx0Y29uc3QgY29tcGFyaXNvblZhbHVlID0gIGNvbXBhcmUoY29tcGFyZWRWYWx1ZSwgdmFsdWUpO1xuXG5cdGlmKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCl7XG5cdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlmZjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZGlmZi5qcyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DiffLogger = exports.default = undefined;

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _DiffLogger = __webpack_require__(4);

var _DiffLogger2 = _interopRequireDefault(_DiffLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Logger2.default;
exports.DiffLogger = _DiffLogger2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _diff2 = __webpack_require__(0);

var _diff3 = _interopRequireDefault(_diff2);

var _LogEntry = __webpack_require__(3);

var _LogEntry2 = _interopRequireDefault(_LogEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function applyDiff(steps, callback) {
	var context = this.context,
	    undoLog = this.undoLog,
	    redoLog = this.redoLog,
	    getter = this.getter,
	    setter = this.setter;
	var prevState = this.prevState;

	var absSteps = Math.abs(steps);
	var stepsRemaining = Math.min(absSteps, steps < 0 ? undoLog.length : redoLog.length);
	if (stepsRemaining > 0) {
		var logEntry = void 0,
		    _diff = void 0;
		while (stepsRemaining-- > 0) {
			if (steps < 0) {
				// undo
				logEntry = undoLog.pop();
				redoLog.unshift(logEntry);
				_diff = logEntry.prev;
			} else {
				//redo
				logEntry = redoLog.shift();
				undoLog.push(logEntry);
				_diff = logEntry.next;
			}

			if (stepsRemaining === 0) {
				this.prevState = _diff.value;
			}
		}
		// since primitive are immutable we don't call them in spread declaration above
		this.diffApplied = true;
		// now after reaching the Log entry apply the diff to current state
		setter.call(context, _diff, callback);
	} else {
		// since primitive are immutable we don't call them in spread declaration above
		this.diffApplied = false;
	}
};

var Logger = function Logger(saveCallback) {
	_classCallCheck(this, Logger);

	this.context;
	this.getter;
	this.setter;
	this.diffMethod;

	this.undoLog = [];
	this.redoLog = [];

	this.prevState = null;
	this.nextId = 0;

	this.saveDiffCallback = saveCallback;

	this.diffApplied = false;
	this.enable = true;
};

exports.default = Logger;


Logger.prototype.setContext = function (context, getter, setter, diffMethod) {
	if (!getter) {
		console.warn('Context getter function is required');
		return;
	}

	if (!setter) {
		console.warn('Context setter function is required');
		return;
	}
	this.context = context;
	this.getter = getter;
	this.setter = setter;
	this.diffMethod = diffMethod;
	this.prevState = getter.call(context);
};

Logger.prototype.setSaveCallback = function (saveCallback) {
	this.saveDiffCallback = saveCallback;
};

Logger.prototype.removeSaveCallback = function () {
	this.saveDiffCallback = null;
};

Logger.prototype.undo = function (steps, callback) {
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, -steps, callback);
};

Logger.prototype.redo = function (steps, callback) {
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, steps, callback);
};

Logger.prototype.save = function () {
	if (this.diffApplied) {
		this.diffApplied = false;
		return;
	}

	if (this.enable) {
		var log = void 0;
		var getDiff = this.diffMethod ? this.diffMethod : _diff3.default;
		if (this.context) {
			var state = this.getter.call(this.context);
			var diffObject = getDiff(this.prevState, state);
			// Change occurred log them
			if (diffObject.current !== undefined) {
				log = new _LogEntry2.default(this.nextId++, diffObject.current, diffObject.prev);
				if (this.redoLog.length !== 0) {
					var nextLog = this.redoLog[0];
					nextLog.prev = log.next;
				}
				this.undoLog.push(log);
				this.prevState = state;
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(log);
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogEntry = function LogEntry(id, next, prev) {
	_classCallCheck(this, LogEntry);

	this.id = id;
	this.next = next;
	this.prev = prev;
};

exports.default = LogEntry;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _pivotedLinkedList = __webpack_require__(5);

var _pivotedLinkedList2 = _interopRequireDefault(_pivotedLinkedList);

var _helper = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function preInsert(currentLog, newLog, nextLog) {
	if (currentLog, newLog, nextLog) {
		// middle insert
		var newLogForwardDiff = newLog.forward;
		var newLogBackwardDiff = newLog.backward;
		var nextLogForwardDiff = nextLog.forward;
		var nextLogBackwardDiff = nextLog.backward;
		var newCombinedForwardDiff = (0, _helper.combineDiff)(nextLogBackwardDiff.value, newLogForwardDiff.value);
		var newCombinedBackwardDiff = (0, _helper.combineDiff)(nextLogForwardDiff.value, newLogBackwardDiff.value);

		newLog.forward = newCombinedForwardDiff;
		newLog.backward = newCombinedBackwardDiff;
	}
}

function jump(steps, direction, logList, objectVerifier) {
	var logEntry = void 0,
	    baseDiff = void 0;
	while (steps >= 0) {
		logEntry = logList.pivot;
		if (direction === 'backward') {
			logList.shiftPivot(-1);
		} else if (direction === 'forward') {
			logList.shiftPivot(1);
		}
		var forwardBackwardDiff = logEntry.element;
		var diffState = forwardBackwardDiff[direction];
		var diffValue = diffState.value;
		var isLoggableCollectionObject = diffState['classDefName'] === objectVerifier;
		baseDiff = (0, _helper.combineDiff)(baseDiff, diffValue, objectVerifier, isLoggableCollectionObject);
		steps = steps - 1;
	}
	return baseDiff;
}

function shiftAndApplyLog(steps, type, callback, objectVerifier) {
	var context = this.context,
	    logList = this.logList;

	var logEntry = void 0,
	    baseDiff = void 0;
	if (steps === 0) {
		// next and prev
		logEntry = logList.pivot;
		logList.shiftPivot(type === "undo" ? -1 : 1);
		var forwardBackwardDiff = logEntry.element;
		var forward = forwardBackwardDiff.forward,
		    backward = forwardBackwardDiff.backward;

		var diffState = void 0; //State as JSON
		if (type === "undo") {
			diffState = backward;
		} else if (type === "redo") {
			diffState = forward;
		}
		baseDiff = diffState.value;
	} else {
		// jumping
		if (type === "undo") {
			baseDiff = jump(-steps, 'backward', logList, objectVerifier);
		} else {
			baseDiff = jump(steps, 'forward', logList, objectVerifier);
		}
	}

	var diffLoggerInstance = this;
	context.applyDiff.call(context, baseDiff, function () {
		updateLastActiveState.call(diffLoggerInstance);
		callback();
	});
};

function updateLastActiveState() {
	this.lastActiveState = this.context.getState();
}

var DiffLogger = function DiffLogger(context) {
	_classCallCheck(this, DiffLogger);

	if (!context) {
		console.error("Context cant be null");
	}

	if (!context.applyDiff) {
		console.error("Context needs to implement applyDiff method");
	}

	if (!context.getState) {
		console.error("Context needs to implement getState method");
	}

	if (!context.getDiff) {
		console.error("Context needs to implement getDiff method");
	}

	this.context = context;

	this.logList = new _pivotedLinkedList2.default([]);
	this.saveDiffCallback = null;
	this.enable = true;

	updateLastActiveState.call(this);
};

exports.default = DiffLogger;


DiffLogger.prototype.setSaveCallback = function (saveCallback) {
	this.saveDiffCallback = saveCallback;
};

DiffLogger.prototype.removeSaveCallback = function () {
	this.saveDiffCallback = null;
};

DiffLogger.prototype.undo = function (steps, callback, objectVerifier) {
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, -steps, "undo", callback, objectVerifier);
};

DiffLogger.prototype.redo = function (steps, callback, objectVerifier) {
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, steps, "redo", callback, objectVerifier);
};

DiffLogger.prototype.save = function () {
	if (this.enable) {
		var forwardBackwardDiff = void 0;
		if (this.context) {
			forwardBackwardDiff = this.context.getDiff(this.lastActiveState, true);
			var _forwardBackwardDiff = forwardBackwardDiff,
			    forward = _forwardBackwardDiff.forward,
			    backward = _forwardBackwardDiff.backward;


			if ((typeof forward === 'undefined' ? 'undefined' : _typeof(forward)) === "object" && (typeof backward === 'undefined' ? 'undefined' : _typeof(backward)) === "object") {
				// Change occurred log them
				this.logList.insert(forwardBackwardDiff, preInsert);
				updateLastActiveState.call(this);
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(forwardBackwardDiff);
	}
};

DiffLogger.prototype.getCurrentLog = function () {
	if (this.logList) {
		return this.logList.getPivotElement();
	}
	return null;
};

DiffLogger.prototype.clear = function () {
	this.logList.reset();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("linkedlist", [], factory);
	else if(typeof exports === 'object')
		exports["linkedlist"] = factory();
	else
		root["linkedlist"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Node = __webpack_require__(1);

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PivotedLinkedList = function PivotedLinkedList(array) {
	_classCallCheck(this, PivotedLinkedList);

	this.pivot = null;
	this.head = null;
	this.tail = null;
	this.length = 0;
	array && this.create(array);
};

exports.default = PivotedLinkedList;


PivotedLinkedList.prototype.insert = function (element, preInsert, postInsert) {
	var newNode = new _Node2.default(element);
	this.length++;

	var current = void 0,
	    next = void 0;

	if (!this.pivot) {
		// inserting as first element
		preInsert && preInsert(newNode);
		this.pivot = newNode;
		this.head = newNode;
		postInsert && postInsert(newNode);
	} else if (this.pivot.next) {
		// inserting in middle
		current = this.pivot;
		next = this.pivot.next;
		preInsert && preInsert(current, newNode, next);
		newNode.next = current.next;
		newNode.prev = current;

		current.next = newNode;
		next.prev = newNode;

		this.pivot = newNode;
		postInsert && postInsert(current, newNode, next);
	} else {
		// inserting as last element
		current = this.pivot;
		preInsert && preInsert(current, newNode);
		current.next = newNode;
		newNode.prev = current;

		this.pivot = newNode;
		this.tail = newNode;
		postInsert && postInsert(current, newNode);
	}
};

PivotedLinkedList.prototype.shiftPivot = function (shift) {
	var current = this.pivot;

	var rightShift = void 0;
	if (shift >= 0) {
		rightShift = true;
	}

	while (shift !== 0) {
		if (rightShift) {
			current = current.next;
			current === this.tail ? shift = 0 : shift--;
		} else {
			current = current.prev;
			current === this.head ? shift = 0 : shift++;
		}
	}

	this.pivot = current;

	return this.pivot;
};

PivotedLinkedList.prototype.shiftPivotToHead = function () {
	this.pivot = this.head;
};

PivotedLinkedList.prototype.shiftPivotToTail = function () {
	this.pivot = this.tail;
};

PivotedLinkedList.prototype.create = function (array) {
	var _this = this;

	array.map(function (element) {
		_this.insert(element);
	});
};

PivotedLinkedList.prototype.traverse = function (callback, rightToLeft) {
	var current = rightToLeft ? this.tail : this.head;
	while (current) {
		callback(current.element);
		current = rightToLeft ? current.prev : current.next;
	}
};

PivotedLinkedList.prototype.toArray = function () {
	var array = [];
	this.traverse(function (element) {
		array.push(element);
	});
	return array;
};

PivotedLinkedList.prototype.getPivotElement = function () {
	if (this.pivot) {
		return this.pivot.element;
	}
	return null;
};

PivotedLinkedList.prototype.next = function () {
	var next = this.pivot.next ? this.pivot.next : this.pivot;
	this.pivot = next;
	return next;
};

PivotedLinkedList.prototype.prev = function () {
	var prev = this.pivot.prev ? this.pivot.prev : this.pivot;
	this.pivot = prev;
	return prev;
};

PivotedLinkedList.prototype.isPivotHead = function () {
	return this.pivot === this.head;
};

PivotedLinkedList.prototype.isPivotTail = function () {
	return this.pivot === this.tail;
};

PivotedLinkedList.prototype.reset = function () {
	this.pivot = null;
	this.head = null;
	this.tail = null;
	this.length = 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(element) {
	_classCallCheck(this, Node);

	this.element = element;
	this.next = null;
	this.prev = null;
};

exports.default = Node;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMTEzODU2ZTk4NTMyNjAzNjE0ZSIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiXSwibmFtZXMiOlsiUGl2b3RlZExpbmtlZExpc3QiLCJhcnJheSIsInBpdm90IiwiaGVhZCIsInRhaWwiLCJsZW5ndGgiLCJjcmVhdGUiLCJwcm90b3R5cGUiLCJpbnNlcnQiLCJlbGVtZW50IiwicHJlSW5zZXJ0IiwicG9zdEluc2VydCIsIm5ld05vZGUiLCJjdXJyZW50IiwibmV4dCIsInByZXYiLCJzaGlmdFBpdm90Iiwic2hpZnQiLCJyaWdodFNoaWZ0Iiwic2hpZnRQaXZvdFRvSGVhZCIsInNoaWZ0UGl2b3RUb1RhaWwiLCJtYXAiLCJ0cmF2ZXJzZSIsImNhbGxiYWNrIiwicmlnaHRUb0xlZnQiLCJ0b0FycmF5IiwicHVzaCIsImdldFBpdm90RWxlbWVudCIsImlzUGl2b3RIZWFkIiwiaXNQaXZvdFRhaWwiLCJyZXNldCIsIk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStE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QWQsa0JBQWtCTyxTQUFsQixDQUE0QlEsSUFBNUIsR0FBbUMsWUFBVTtBQUM1QyxLQUFNQSxPQUFPLEtBQUtiLEtBQUwsQ0FBV2EsSUFBWCxHQUFrQixLQUFLYixLQUFMLENBQVdhLElBQTdCLEdBQXFDLEtBQUtiLEtBQXZEO0FBQ0EsTUFBS0EsS0FBTCxHQUFhYSxJQUFiO0FBQ0EsUUFBT0EsSUFBUDtBQUNBLENBSkQ7O0FBTUFmLGtCQUFrQk8sU0FBbEIsQ0FBNEJxQixXQUE1QixHQUEwQyxZQUFVO0FBQ25ELFFBQU8sS0FBSzFCLEtBQUwsS0FBZSxLQUFLQyxJQUEzQjtBQUNBLENBRkQ7O0FBSUFILGtCQUFrQk8sU0FBbEIsQ0FBNEJzQixXQUE1QixHQUEwQyxZQUFVO0FBQ25ELFFBQU8sS0FBSzNCLEtBQUwsS0FBZSxLQUFLRSxJQUEzQjtBQUNBLENBRkQ7O0FBSUFKLGtCQUFrQk8sU0FBbEIsQ0FBNEJ1QixLQUE1QixHQUFvQyxZQUFVO0FBQzdDLE1BQUs1QixLQUFMLEdBQWEsSUFBYjtBQUNBLE1BQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsTUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxNQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLENBTEQsQzs7Ozs7Ozs7Ozs7Ozs7O0lDaElxQjBCLEksR0FDcEIsY0FBWXRCLE9BQVosRUFBb0I7QUFBQTs7QUFDbkIsTUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsTUFBS0ssSUFBTCxHQUFZLElBQVo7QUFDQSxNQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLEM7O2tCQUxtQmdCLEkiLCJmaWxlIjoibGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsaW5rZWRsaXN0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGlua2VkbGlzdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzExMzg1NmU5ODUzMjYwMzYxNGUiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXZvdGVkTGlua2VkTGlzdCB7XG5cdGNvbnN0cnVjdG9yKGFycmF5KXtcblx0XHR0aGlzLnBpdm90ID0gbnVsbDtcblx0XHR0aGlzLmhlYWQgPSBudWxsO1xuXHRcdHRoaXMudGFpbCA9IG51bGw7XG5cdFx0dGhpcy5sZW5ndGggPSAwO1xuXHRcdGFycmF5ICYmIHRoaXMuY3JlYXRlKGFycmF5KTtcblx0fVxufVxuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCwgcHJlSW5zZXJ0LCBwb3N0SW5zZXJ0KXtcblx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGVsZW1lbnQpO1xuXHR0aGlzLmxlbmd0aCsrO1xuXG5cdGxldCBjdXJyZW50LCBuZXh0O1xuXG5cdGlmKCF0aGlzLnBpdm90KXsgLy8gaW5zZXJ0aW5nIGFzIGZpcnN0IGVsZW1lbnRcblx0XHRwcmVJbnNlcnQgJiYgcHJlSW5zZXJ0KG5ld05vZGUpO1xuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KG5ld05vZGUpO1xuXHR9IGVsc2UgaWYodGhpcy5waXZvdC5uZXh0KXsgLy8gaW5zZXJ0aW5nIGluIG1pZGRsZVxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdG5leHQgPSB0aGlzLnBpdm90Lm5leHQ7XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChjdXJyZW50LG5ld05vZGUsbmV4dCk7XG5cdFx0bmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0O1xuXHRcdG5ld05vZGUucHJldiA9IGN1cnJlbnQ7XG5cblx0XHRjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHRwb3N0SW5zZXJ0ICYmIHBvc3RJbnNlcnQoY3VycmVudCxuZXdOb2RlLG5leHQpO1xuXHR9IGVsc2UgeyAvLyBpbnNlcnRpbmcgYXMgbGFzdCBlbGVtZW50XG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChjdXJyZW50LG5ld05vZGUpO1xuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMudGFpbCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KGN1cnJlbnQsbmV3Tm9kZSk7XG5cdH1cblxufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0UGl2b3QgPSBmdW5jdGlvbihzaGlmdCl7XG5cdGxldCBjdXJyZW50ID0gdGhpcy5waXZvdDtcblxuXHRsZXQgcmlnaHRTaGlmdDtcblx0aWYoc2hpZnQgPj0gMCl7XG5cdFx0cmlnaHRTaGlmdCA9IHRydWU7XG5cdH1cblxuXHR3aGlsZShzaGlmdCAhPT0gMCl7XG5cdFx0aWYocmlnaHRTaGlmdCl7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdFx0KGN1cnJlbnQgPT09IHRoaXMudGFpbCkgPyAoc2hpZnQgPSAwKSA6IHNoaWZ0LS07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnByZXY7XG5cdFx0XHQoY3VycmVudCA9PT0gdGhpcy5oZWFkKSA/IChzaGlmdCA9IDApIDogc2hpZnQrKztcblx0XHR9XG5cdH1cblxuXHR0aGlzLnBpdm90ID0gY3VycmVudDtcblxuXHRyZXR1cm4gdGhpcy5waXZvdDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9IZWFkID0gZnVuY3Rpb24oKXtcblx0dGhpcy5waXZvdCA9IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9UYWlsID0gZnVuY3Rpb24oKXtcblx0dGhpcy5waXZvdCA9IHRoaXMudGFpbDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihhcnJheSl7XG5cdGFycmF5Lm1hcCgoZWxlbWVudCk9Pntcblx0XHR0aGlzLmluc2VydChlbGVtZW50KTtcblx0fSlcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50cmF2ZXJzZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCByaWdodFRvTGVmdCl7XG5cdGxldCBjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyB0aGlzLnRhaWwgOiB0aGlzLmhlYWQ7XG5cdHdoaWxlKGN1cnJlbnQpe1xuXHRcdGNhbGxiYWNrKGN1cnJlbnQuZWxlbWVudCk7XG5cdFx0Y3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gY3VycmVudC5wcmV2IDogY3VycmVudC5uZXh0O1xuXHR9XG59O1xuXG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgYXJyYXkgPSBbXTtcblx0dGhpcy50cmF2ZXJzZSgoZWxlbWVudCk9Pntcblx0XHRhcnJheS5wdXNoKGVsZW1lbnQpO1xuXHR9KVxuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuZ2V0UGl2b3RFbGVtZW50ID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5waXZvdCl7XG5cdFx0cmV0dXJuIHRoaXMucGl2b3QuZWxlbWVudDtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgbmV4dCA9IHRoaXMucGl2b3QubmV4dCA/IHRoaXMucGl2b3QubmV4dCA6ICB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gbmV4dDtcblx0cmV0dXJuIG5leHQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IHByZXYgPSB0aGlzLnBpdm90LnByZXYgPyB0aGlzLnBpdm90LnByZXYgOiAgdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IHByZXY7XG5cdHJldHVybiBwcmV2O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmlzUGl2b3RIZWFkID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIHRoaXMucGl2b3QgPT09IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5pc1Bpdm90VGFpbCA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiB0aGlzLnBpdm90ID09PSB0aGlzLnRhaWw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnBpdm90ID0gbnVsbDtcblx0dGhpcy5oZWFkID0gbnVsbDtcblx0dGhpcy50YWlsID0gbnVsbDtcblx0dGhpcy5sZW5ndGggPSAwO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2Rle1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50KXtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMubmV4dCA9IG51bGw7XG5cdFx0dGhpcy5wcmV2ID0gbnVsbDtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Ob2RlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.combineDiff = combineDiff;
function copyJson(json) {
	var stringJson = JSON.stringify(json);
	return JSON.parse(stringJson);
}

function arrayToObject(array, idName) {
	var replaceWithId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	var returnIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	var object = null;
	var ids = returnIds ? [] : undefined;
	if (array) {
		object = {};
		var index = void 0,
		    id = void 0,
		    child = void 0;
		for (index = 0; index < array.length; index++) {
			child = array[index];
			if (typeof child === 'string') {
				id = child;
			} else {
				id = child[idName];
			}
			object[id] = child;
			replaceWithId && (array[index] = id);
			returnIds && ids.push(id);
		}
	}
	if (returnIds) {
		return {
			obj: object,
			keys: ids
		};
	}
	return object;
}

function combineDiff(baseDiff, diffToAdd, objectVerifier) {
	var isCollectionObject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	var baseType = typeof baseDiff === 'undefined' ? 'undefined' : _typeof(baseDiff); // the type of null is 'object'
	var diffType = typeof diffToAdd === 'undefined' ? 'undefined' : _typeof(diffToAdd);

	if (baseDiff == null || diffToAdd == null || baseType !== diffType || !isCollectionObject) {
		baseDiff = diffType === 'object' ? copyJson(diffToAdd) : diffToAdd; // reached bottom most level
	} else {
		var baseLookup = arrayToObject(baseDiff, 'id', true);
		var arrayAsObj = arrayToObject(diffToAdd, 'id', false, true);
		var diffLookUp = arrayAsObj.obj;
		var diffToAddKeys = arrayAsObj.keys;

		// apply each stateAsJson diff appearing in diffToAdd
		for (var i = 0; i < diffToAddKeys.length; i++) {
			var id = diffToAddKeys[i];
			var oldState = baseLookup[id];
			var newState = diffLookUp[id];

			if (oldState) {
				if (typeof oldState !== 'string') {
					if (typeof newState !== 'string') {
						if (newState['classDefName'] !== oldState['classDefName']) {
							// delete operation where classNames are not equal
							baseLookup[id] = copyJson(newState);
						} else {
							var _isCollectionObject = newState['classDefName'] === objectVerifier;
							oldState['value'] = combineDiff(oldState['value'], newState['value'], objectVerifier, _isCollectionObject);
						}
					}
				} else {
					oldState !== newState && (baseLookup[id] = copyJson(newState));
				}
			} else {
				baseLookup[id] = copyJson(newState);
				baseDiff.push(id);
			}
		}
		// change baseDiff back from names to typed states
		for (var _i = 0; _i < baseDiff.length; _i++) {
			baseDiff[_i] = baseLookup[baseDiff[_i]];
		}
	}

	return baseDiff;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _diff = __webpack_require__(0);

var _diff2 = _interopRequireDefault(_diff);

var _lib = __webpack_require__(1);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
	value: 0,
	getState: function getState() {
		return this.value;
	},
	setState: function setState(val) {
		this.value = val;
	},
	applyDiff: function applyDiff(val) {
		this.value = val;
	},
	getDiff: function getDiff(value) {
		return (0, _diff2.default)(value, this.getState());
	}
};

function saveCallback(log) {
	console.log(log);
}

var logger = new _lib.DiffLogger(obj, saveCallback);

obj.setState(1);
logger.save(true);

obj.setState(2);
logger.save(true);

obj.setState(3);
logger.save(true);

obj.setState(4);
logger.save(true);

obj.setState(5);
logger.save(true);

logger.undo();
console.log('After Undo: ', obj.value);

logger.undo();
console.log('After Undo: ', obj.value);

logger.undo();
console.log('After Undo: ', obj.value);

logger.undo();
console.log('After Undo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

logger.undo(2);
console.log('After Undo 2 Steps: ', obj.value);

logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);

obj.setState(6);
logger.save(true);

logger.undo();
console.log('After Undo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

/*
 console.log('Before Undo 2 Steps: ', obj.value);

logger.undo(2);
console.log('After Undo 2 Steps: ', obj.value);
logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);

logger.undo(2);
console.log('After Undo 2 Steps: ', obj.value);

obj.setValue(6);
logger.save(true);

obj.setValue(7);
logger.save(true);

logger.undo();
console.log('After Undo 1 Steps: ', obj.value);*/

/*logger.undo(7);
console.log('After Undo 7 Steps more than available steps: ', obj.value);
logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);
logger.redo(7);
console.log('After Redo 7 Steps more than available steps: ', obj.value);*/

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmN2IzNDU1ODRjZTQzMDM1YTkwMyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9EaWZmTG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJMb2dnZXIiLCJEaWZmTG9nZ2VyIiwiYXBwbHlEaWZmIiwic3RlcHMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJ1bmRvTG9nIiwicmVkb0xvZyIsImdldHRlciIsInNldHRlciIsInByZXZTdGF0ZSIsImFic1N0ZXBzIiwiTWF0aCIsImFicyIsInN0ZXBzUmVtYWluaW5nIiwibWluIiwibGVuZ3RoIiwibG9nRW50cnkiLCJkaWZmIiwicG9wIiwidW5zaGlmdCIsInByZXYiLCJzaGlmdCIsInB1c2giLCJuZXh0IiwidmFsdWUiLCJkaWZmQXBwbGllZCIsImNhbGwiLCJzYXZlQ2FsbGJhY2siLCJkaWZmTWV0aG9kIiwibmV4dElkIiwic2F2ZURpZmZDYWxsYmFjayIsImVuYWJsZSIsInByb3RvdHlwZSIsInNldENvbnRleHQiLCJjb25zb2xlIiwid2FybiIsInNldFNhdmVDYWxsYmFjayIsInJlbW92ZVNhdmVDYWxsYmFjayIsInVuZG8iLCJpc05hTiIsInJlZG8iLCJzYXZlIiwibG9nIiwiZ2V0RGlmZiIsInN0YXRlIiwiZGlmZk9iamVjdCIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJMb2dFbnRyeSIsIm5leHRMb2ciLCJpZCIsInByZUluc2VydCIsImN1cnJlbnRMb2ciLCJuZXdMb2ciLCJuZXdMb2dGb3J3YXJkRGlmZiIsImZvcndhcmQiLCJuZXdMb2dCYWNrd2FyZERpZmYiLCJiYWNrd2FyZCIsIm5leHRMb2dGb3J3YXJkRGlmZiIsIm5leHRMb2dCYWNrd2FyZERpZmYiLCJuZXdDb21iaW5lZEZvcndhcmREaWZmIiwibmV3Q29tYmluZWRCYWNrd2FyZERpZmYiLCJqdW1wIiwiZGlyZWN0aW9uIiwibG9nTGlzdCIsIm9iamVjdFZlcmlmaWVyIiwiYmFzZURpZmYiLCJwaXZvdCIsInNoaWZ0UGl2b3QiLCJmb3J3YXJkQmFja3dhcmREaWZmIiwiZWxlbWVudCIsImRpZmZTdGF0ZSIsImRpZmZWYWx1ZSIsImlzTG9nZ2FibGVDb2xsZWN0aW9uT2JqZWN0Iiwic2hpZnRBbmRBcHBseUxvZyIsInR5cGUiLCJkaWZmTG9nZ2VySW5zdGFuY2UiLCJ1cGRhdGVMYXN0QWN0aXZlU3RhdGUiLCJsYXN0QWN0aXZlU3RhdGUiLCJnZXRTdGF0ZSIsImVycm9yIiwiUGl2b3RlZExpbmtlZExpc3QiLCJpbnNlcnQiLCJnZXRDdXJyZW50TG9nIiwiZ2V0UGl2b3RFbGVtZW50IiwiY2xlYXIiLCJyZXNldCIsImNvbWJpbmVEaWZmIiwiY29weUpzb24iLCJqc29uIiwic3RyaW5nSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImFycmF5VG9PYmplY3QiLCJhcnJheSIsImlkTmFtZSIsInJlcGxhY2VXaXRoSWQiLCJyZXR1cm5JZHMiLCJvYmplY3QiLCJpZHMiLCJpbmRleCIsImNoaWxkIiwib2JqIiwia2V5cyIsImRpZmZUb0FkZCIsImlzQ29sbGVjdGlvbk9iamVjdCIsImJhc2VUeXBlIiwiZGlmZlR5cGUiLCJiYXNlTG9va3VwIiwiYXJyYXlBc09iaiIsImRpZmZMb29rVXAiLCJkaWZmVG9BZGRLZXlzIiwiaSIsIm9sZFN0YXRlIiwibmV3U3Rh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LEdBQVIsQ0FBWSxjQUFaLEVBQTRCNkQsSUFBSS9FLEtBQWhDOztBQUVBOEYsT0FBT2hGLElBQVA7QUFDQUosUUFBUVEsR0FBUixDQUFZLGNBQVosRUFBNEI2RCxJQUFJL0UsS0FBaEM7O0FBRUE4RixPQUFPOUUsSUFBUDtBQUNBTixRQUFRUSxHQUFSLENBQVksY0FBWixFQUE0QjZELElBQUkvRSxLQUFoQzs7QUFFQThGLE9BQU85RSxJQUFQO0FBQ0FOLFFBQVFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCNkQsSUFBSS9FLEtBQWhDOztBQUVBOEYsT0FBTzlFLElBQVA7QUFDQU4sUUFBUVEsR0FBUixDQUFZLGNBQVosRUFBNEI2RCxJQUFJL0UsS0FBaEM7O0FBRUE4RixPQUFPaEYsSUFBUCxDQUFZLENBQVo7QUFDQUosUUFBUVEsR0FBUixDQUFZLHNCQUFaLEVBQW9DNkQsSUFBSS9FLEtBQXhDOztBQUVBOEYsT0FBTzlFLElBQVAsQ0FBWSxDQUFaO0FBQ0FOLFFBQVFRLEdBQVIsQ0FBWSxzQkFBWixFQUFvQzZELElBQUkvRSxLQUF4Qzs7QUFFQStFLElBQUlhLFFBQUosQ0FBYSxDQUFiO0FBQ0FFLE9BQU83RSxJQUFQLENBQVksSUFBWjs7QUFFQTZFLE9BQU9oRixJQUFQO0FBQ0FKLFFBQVFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCNkQsSUFBSS9FLEtBQWhDOztBQUVBOEYsT0FBTzlFLElBQVA7QUFDQU4sUUFBUVEsR0FBUixDQUFZLGNBQVosRUFBNEI2RCxJQUFJL0UsS0FBaEM7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibG9nZ2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsb2dnZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY3YjM0NTU4NGNlNDMwMzVhOTAzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkaWZmXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc3RyaW5nQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfc3RyaW5nQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdDb21wYXJlKTtcblxudmFyIF9udW1iZXJDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9udW1iZXJDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlckNvbXBhcmUpO1xuXG52YXIgX2RhdGVDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9kYXRlQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRlQ29tcGFyZSk7XG5cbnZhciBfYXJyYXlDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hcnJheUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlDb21wYXJlKTtcblxudmFyIF9vYmplY3RDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9vYmplY3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdENvbXBhcmUpO1xuXG52YXIgX2lzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9pczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgb2xkT2JqVHlwZSA9IHR5cGVvZiBvbGRPYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9sZE9iaik7XG4gICAgdmFyIG5ld09ialR5cGUgPSB0eXBlb2YgbmV3T2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09IG5ld09ialR5cGUpIHJldHVybiAoMCwgX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialR5cGUsIG5ld09ialR5cGUpO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdib29sZWFuJykgcmV0dXJuICgwLCBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdCkoTnVtYmVyKG9sZE9iaiksIE51bWJlcihuZXdPYmopKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ251bWJlcicpIHJldHVybiAoMCwgX251bWJlckNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiAoMCwgX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSAnb2JqZWN0JykgcmV0dXJuIDE7XG5cbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBEYXRlKSkgcmV0dXJuICgwLCBfZGF0ZUNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBBcnJheSkpIHJldHVybiAoMCwgX2FycmF5Q29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIE9iamVjdCkpIHJldHVybiAoMCwgX29iamVjdENvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcblxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2xvY2FsZUNvbXBhcmVcbmZ1bmN0aW9uIHN0cmluZ0NvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlLCBpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSB0eXBlb2YgaXNDYXNlU2Vuc2l0aXZlICE9PSAndW5kZWZpbmVkJyA/IGlzQ2FzZVNlbnNpdGl2ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwgJiYgbmV3VmFsdWUgPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICBpZiAoaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gU3RyaW5nKG9sZFZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBuZXdWYWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gU3RyaW5nKG9sZFZhbHVlKS5sb2NhbGVDb21wYXJlKG5ld1ZhbHVlKTtcbiAgICBpZiAocmVzdWx0IDwgLTEpIHJlc3VsdCA9IC0xO2Vsc2UgaWYgKHJlc3VsdCA+IDEpIHJlc3VsdCA9IDE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBudW1iZXJDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSAmJiBpc05hTihuZXdWYWx1ZSkpIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRWYWx1ZSkpIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdWYWx1ZSkpIHJldHVybiAtMTtcblxuICAgIGlmIChvbGRWYWx1ZSA8IG5ld1ZhbHVlKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFZhbHVlID4gbmV3VmFsdWUpIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBudW1iZXJDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBkYXRlQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBvbGRUaW1lID0gb2xkVmFsdWUuZ2V0VGltZSgpO1xuICAgIHZhciBuZXdUaW1lID0gbmV3VmFsdWUuZ2V0VGltZSgpO1xuICAgIGlmIChvbGRUaW1lIDwgbmV3VGltZSkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRUaW1lID4gbmV3VGltZSkgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXNOYU4ob2xkVGltZSkgJiYgaXNOYU4obmV3VGltZSkpIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRUaW1lKSkgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1RpbWUpKSByZXR1cm4gLTE7XG5cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGF0ZUNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIGNvbXBhcmlzb25WYWx1ZSA9IHZvaWQgMDtcbiAgICB2YXIgb2xkT2JqTGVuZ3RoID0gb2xkT2JqLmxlbmd0aDtcbiAgICB2YXIgbmV3T2JqTGVuZ3RoID0gbmV3T2JqLmxlbmd0aDtcbiAgICBpZiAob2xkT2JqTGVuZ3RoIDwgbmV3T2JqTGVuZ3RoKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA+IG5ld09iakxlbmd0aCkgcmV0dXJuIDE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZE9iakxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2YgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShvbGRPYmpbaV0sIG5ld09ialtpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT0gMCkgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhcnJheUNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBwcm9wID0gdm9pZCAwO1xuICAgIGZvciAocHJvcCBpbiBvbGRPYmopIHtcbiAgICAgICAgaWYgKCFuZXdPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICB2YXIgY29tcGFyaXNvblZhbHVlID0gdm9pZCAwO1xuICAgIGZvciAocHJvcCBpbiBuZXdPYmopIHtcbiAgICAgICAgaWYgKCFvbGRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHJldHVybiAxO1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialtwcm9wXSwgbmV3T2JqW3Byb3BdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPT0gMCkgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBvYmplY3RDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vYmplY3RDb21wYXJlID0gZXhwb3J0cy5hcnJheUNvbXBhcmUgPSBleHBvcnRzLmRhdGVDb21wYXJlID0gZXhwb3J0cy5udW1iZXJDb21wYXJlID0gZXhwb3J0cy5zdHJpbmdDb21wYXJlID0gZXhwb3J0cy5jb21wYXJlID0gZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nQ29tcGFyZSk7XG5cbnZhciBfbnVtYmVyQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfbnVtYmVyQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXJDb21wYXJlKTtcblxudmFyIF9kYXRlQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfZGF0ZUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZUNvbXBhcmUpO1xuXG52YXIgX2FycmF5Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYXJyYXlDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FycmF5Q29tcGFyZSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RDb21wYXJlKTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG52YXIgX2RpZmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgX2RpZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlmZik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kaWZmMi5kZWZhdWx0O1xuZXhwb3J0cy5jb21wYXJlID0gX2NvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLnN0cmluZ0NvbXBhcmUgPSBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMubnVtYmVyQ29tcGFyZSA9IF9udW1iZXJDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5kYXRlQ29tcGFyZSA9IF9kYXRlQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuYXJyYXlDb21wYXJlID0gX2FycmF5Q29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMub2JqZWN0Q29tcGFyZSA9IF9vYmplY3RDb21wYXJlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gaXMob2JqLCBUeXBlKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIFR5cGUpIHJldHVybiB0cnVlO1xuICAgIGlmIChUeXBlID09PSBPYmplY3QpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSByZXR1cm4gVHlwZSA9PT0gU3RyaW5nO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykgcmV0dXJuIFR5cGUgPT09IE51bWJlcjtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gVHlwZSA9PT0gQm9vbGVhbjtcbiAgICBpZiAoVHlwZSA9PT0gQXJyYXkpIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBJZiB0aGVyZSBpcyBubyBjaGFuZ2UgcmV0dXJucyB1bmRlZmluZWRcbi8vIGlmIHRoZXJlIGlzIGEgY2hhbmdlIHJldHVybnMgdGhlIGxhdGVzdCB2YWx1ZVxuZnVuY3Rpb24gZGlmZihjb21wYXJlZFZhbHVlLCB2YWx1ZSkge1xuXHR2YXIgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShjb21wYXJlZFZhbHVlLCB2YWx1ZSk7XG5cblx0aWYgKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCkge1xuXHRcdHZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkaWZmO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EwT0RkbVpXVXhaRGhoWWpSa1l6UXhNRGN3T1NJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5amIyMXdZWEpsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmJuVnRZbVZ5UTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5a1lYUmxRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzloY25KaGVVTnZiWEJoY21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMmx6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWthV1ptTG1weklsMHNJbTVoYldWeklqcGJJbU52YlhCaGNtVWlMQ0p2YkdSUFltb2lMQ0p1WlhkUFltb2lMQ0p2YkdSUFltcFVlWEJsSWl3aWJtVjNUMkpxVkhsd1pTSXNJazUxYldKbGNpSXNJa1JoZEdVaUxDSkJjbkpoZVNJc0lrOWlhbVZqZENJc0luTjBjbWx1WjBOdmJYQmhjbVVpTENKdmJHUldZV3gxWlNJc0ltNWxkMVpoYkhWbElpd2lhWE5EWVhObFUyVnVjMmwwYVhabElpd2lVM1J5YVc1bklpd2lkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVWlMQ0p5WlhOMWJIUWlMQ0pzYjJOaGJHVkRiMjF3WVhKbElpd2liblZ0WW1WeVEyOXRjR0Z5WlNJc0ltbHpUbUZPSWl3aVpHRjBaVU52YlhCaGNtVWlMQ0p2YkdSVWFXMWxJaXdpWjJWMFZHbHRaU0lzSW01bGQxUnBiV1VpTENKaGNuSmhlVU52YlhCaGNtVWlMQ0pqYjIxd1lYSnBjMjl1Vm1Gc2RXVWlMQ0p2YkdSUFltcE1aVzVuZEdnaUxDSnNaVzVuZEdnaUxDSnVaWGRQWW1wTVpXNW5kR2dpTENKcElpd2liMkpxWldOMFEyOXRjR0Z5WlNJc0luQnliM0FpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW1SbFptRjFiSFFpTENKcGN5SXNJbTlpYWlJc0lsUjVjR1VpTENKQ2IyOXNaV0Z1SWl3aWFYTkJjbkpoZVNJc0ltUnBabVlpTENKamIyMXdZWEpsWkZaaGJIVmxJaXdpZG1Gc2RXVWlMQ0oxYm1SbFptbHVaV1FpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdRVU0zUkVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN1FVRkZRU3hUUVVGVFFTeFBRVUZVTEVOQlFXbENReXhOUVVGcVFpeEZRVUY1UWtNc1RVRkJla0lzUlVGRFFUdEJRVU5KTEZGQlFVbEVMRmRCUVZkRExFMUJRV1lzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpSQ3hWUVVGVkxFbEJRV1FzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhWUVVGVkxFbEJRV1FzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhSUVVGUFF5eHZRa0ZCYjBKR0xFMUJRWEJDTEhsRFFVRnZRa0VzVFVGQmNFSXNRMEZCVUR0QlFVTkJMRkZCUVU5SExHOUNRVUZ2UWtZc1RVRkJjRUlzZVVOQlFXOUNRU3hOUVVGd1FpeERRVUZRT3p0QlFVVkJMRkZCUVVsRExHVkJRV1ZETEZWQlFXNUNMRVZCUTBrc1QwRkJUeXcyUWtGQlkwUXNWVUZCWkN4RlFVRXdRa01zVlVGQk1VSXNRMEZCVURzN1FVRkZTaXhSUVVGSlJDeGxRVUZsTEZOQlFXNUNMRVZCUTBrc1QwRkJUeXcyUWtGQlkwVXNUMEZCVDBvc1RVRkJVQ3hEUVVGa0xFVkJRVGhDU1N4UFFVRlBTQ3hOUVVGUUxFTkJRVGxDTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhsUVVGbExGRkJRVzVDTEVWQlEwa3NUMEZCVHl3MlFrRkJZMFlzVFVGQlpDeEZRVUZ6UWtNc1RVRkJkRUlzUTBGQlVEdEJRVU5LTEZGQlFVbERMR1ZCUVdVc1VVRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSaXhOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhEUVVGUU96dEJRVVZLTEZGQlFVbERMR1ZCUVdVc1VVRkJia0lzUlVGRFNTeFBRVUZQTEVOQlFWQTdPMEZCUlVvc1VVRkJTU3hyUWtGQlIwWXNUVUZCU0N4RlFVRlhTeXhKUVVGWUxFTkJRVW9zUlVGRFNTeFBRVUZQTERKQ1FVRlpUQ3hOUVVGYUxFVkJRVzlDUXl4TlFVRndRaXhEUVVGUU8wRkJRMG9zVVVGQlNTeHJRa0ZCUjBRc1RVRkJTQ3hGUVVGWFRTeExRVUZZTEVOQlFVb3NSVUZEU1N4UFFVRlBMRFJDUVVGaFRpeE5RVUZpTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUwUWtZc1QwRkJOVUlzUTBGQlVEdEJRVU5LTEZGQlFVa3NhMEpCUVVkRExFMUJRVWdzUlVGQlYwOHNUVUZCV0N4RFFVRktMRVZCUTBrc1QwRkJUeXcyUWtGQlkxQXNUVUZCWkN4RlFVRnpRa01zVFVGQmRFSXNSVUZCT0VKR0xFOUJRVGxDTEVOQlFWQTdPMEZCUlVvc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzJ0Q1FVVmpRU3hQT3pzN096czdPenM3T3pzN1FVTXhRMlk3UVVGRFFTeFRRVUZUVXl4aFFVRlVMRU5CUVhWQ1F5eFJRVUYyUWl4RlFVRnBRME1zVVVGQmFrTXNSVUZCTWtORExHVkJRVE5ETEVWQlFUUkVPMEZCUTNoRVFTeHpRa0ZCYTBJc1QwRkJUMEVzWlVGQlVDeExRVUV5UWl4WFFVRXpRaXhIUVVGNVEwRXNaVUZCZWtNc1IwRkJNa1FzUzBGQk4wVTdPMEZCUlVFc1VVRkJTVVlzV1VGQldTeEpRVUZhTEVsQlFXOUNReXhaUVVGWkxFbEJRWEJETEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVFzV1VGQldTeEpRVUZvUWl4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxETEZsQlFWa3NTVUZCYUVJc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqczdRVUZGU2l4UlFVRkpReXhsUVVGS0xFVkJRWEZDTzBGQlEycENSaXh0UWtGQlYwY3NUMEZCVDBnc1VVRkJVQ3hGUVVGcFFra3NhVUpCUVdwQ0xFVkJRVmc3UVVGRFFVZ3NiVUpCUVZkRkxFOUJRVTlHTEZGQlFWQXNSVUZCYVVKSExHbENRVUZxUWl4RlFVRllPMEZCUTBnN08wRkJSVVFzVVVGQlNVTXNVMEZCVTBZc1QwRkJUMGdzVVVGQlVDeEZRVUZwUWswc1lVRkJha0lzUTBGQkswSk1MRkZCUVM5Q0xFTkJRV0k3UVVGRFFTeFJRVUZKU1N4VFFVRlRMRU5CUVVNc1EwRkJaQ3hGUVVOSlFTeFRRVUZUTEVOQlFVTXNRMEZCVml4RFFVUktMRXRCUlVzc1NVRkJTVUVzVTBGQlV5eERRVUZpTEVWQlEwUkJMRk5CUVZNc1EwRkJWRHM3UVVGRlNpeFhRVUZQUVN4TlFVRlFPMEZCUTBnN08ydENRVVZqVGl4aE96czdPenM3T3pzN096czdPMEZEZUVKbUxGTkJRVk5STEdGQlFWUXNRMEZCZFVKUUxGRkJRWFpDTEVWQlFXbERReXhSUVVGcVF5eEZRVUV5UXpzN1FVRkZka01zVVVGQlNVOHNUVUZCVFZJc1VVRkJUaXhMUVVGdFFsRXNUVUZCVFZBc1VVRkJUaXhEUVVGMlFpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsUExFMUJRVTFTTEZGQlFVNHNRMEZCU2l4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxSTEUxQlFVMVFMRkZCUVU0c1EwRkJTaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVVsRUxGZEJRVmRETEZGQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOS0xGRkJRVWxFTEZkQlFWZERMRkZCUVdZc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05OTEdFN096czdPenM3T3pzN096czdRVU5vUW1Zc1UwRkJVMFVzVjBGQlZDeERRVUZ4UWxRc1VVRkJja0lzUlVGQkswSkRMRkZCUVM5Q0xFVkJRWGxET3p0QlFVVnlReXhSUVVGSlJDeGhRVUZoTEVsQlFXSXNTVUZCY1VKRExHRkJRV0VzU1VGQmRFTXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlJDeGhRVUZoTEVsQlFXcENMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNZVUZCWVN4SlFVRnFRaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVV0VExGVkJRVlZXTEZOQlFWTlhMRTlCUVZRc1JVRkJaanRCUVVOQkxGRkJRVXRETEZWQlFWVllMRk5CUVZOVkxFOUJRVlFzUlVGQlpqdEJRVU5CTEZGQlFVbEVMRlZCUVZWRkxFOUJRV1FzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWp0QlFVTktMRkZCUVVsR0xGVkJRVlZGTEU5QlFXUXNSVUZEU1N4UFFVRlBMRU5CUVZBN08wRkJSVW9zVVVGQlNVb3NUVUZCVFVVc1QwRkJUaXhMUVVGclFrWXNUVUZCVFVrc1QwRkJUaXhEUVVGMFFpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsS0xFMUJRVTFGTEU5QlFVNHNRMEZCU2l4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxHTEUxQlFVMUpMRTlCUVU0c1EwRkJTaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRmRCUVU4c1EwRkJVRHRCUVVOSU96dHJRa0ZGWTBnc1Z6czdPenM3T3pzN096czdPenRCUXpOQ1pqczdPenM3TzBGQlJVRXNVMEZCVTBrc1dVRkJWQ3hEUVVGelFuUkNMRTFCUVhSQ0xFVkJRVGhDUXl4TlFVRTVRaXhGUVVOQk8wRkJRMGtzVVVGQlNVUXNWMEZCVjBNc1RVRkJaaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEVMRlZCUVZVc1NVRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbERMRlZCUVZVc1NVRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVVselFpeDNRa0ZCU2p0QlFVTkJMRkZCUVV0RExHVkJRV1Y0UWl4UFFVRlBlVUlzVFVGQk0wSTdRVUZEUVN4UlFVRkxReXhsUVVGbGVrSXNUMEZCVDNkQ0xFMUJRVE5DTzBGQlEwRXNVVUZCU1VRc1pVRkJaVVVzV1VGQmJrSXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOS0xGRkJRVWxHTEdWQlFXVkZMRmxCUVc1Q0xFVkJRMGtzVDBGQlR5eERRVUZRT3p0QlFVVktMRk5CUVVzc1NVRkJTME1zU1VGQlNTeERRVUZrTEVWQlFXbENRU3hKUVVGSlNDeFpRVUZ5UWl4RlFVRnRRMGNzUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU03UVVGRFFVb3NNRUpCUVd0Q0xIVkNRVUZSZGtJc1QwRkJUekpDTEVOQlFWQXNRMEZCVWl4RlFVRnRRakZDTEU5QlFVOHdRaXhEUVVGUUxFTkJRVzVDTEVOQlFXeENPMEZCUTBFc1dVRkJTVW9zYlVKQlFXMUNMRU5CUVhaQ0xFVkJRMGtzVDBGQlQwRXNaVUZCVUR0QlFVTlFPMEZCUTBRc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzJ0Q1FVVmpSQ3haT3pzN096czdPenM3T3pzN08wRkROVUptT3pzN096czdRVUZGUVN4VFFVRlRUU3hoUVVGVUxFTkJRWFZDTlVJc1RVRkJka0lzUlVGQkswSkRMRTFCUVM5Q0xFVkJRMEU3UVVGRFNTeFJRVUZKUkN4WFFVRlhReXhOUVVGbUxFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VRc1ZVRkJWU3hKUVVGa0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VNc1ZVRkJWU3hKUVVGa0xFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdPMEZCUjBvc1VVRkJTVFJDTEdGQlFVbzdRVUZEUVN4VFFVRkxRU3hKUVVGTUxFbEJRV0UzUWl4TlFVRmlMRVZCUTBFN1FVRkRTU3haUVVGSkxFTkJRVU5ETEU5QlFVODJRaXhqUVVGUUxFTkJRWE5DUkN4SlFVRjBRaXhEUVVGTUxFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdRVUZEVURzN1FVRkZSQ3hSUVVGSlRpeDNRa0ZCU2p0QlFVTkJMRk5CUVV0TkxFbEJRVXdzU1VGQllUVkNMRTFCUVdJc1JVRkRRVHRCUVVOSkxGbEJRVWtzUTBGQlEwUXNUMEZCVHpoQ0xHTkJRVkFzUTBGQmMwSkVMRWxCUVhSQ0xFTkJRVXdzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2p0QlFVTkJUaXd3UWtGQmEwSXNkVUpCUVZGMlFpeFBRVUZQTmtJc1NVRkJVQ3hEUVVGU0xFVkJRWE5DTlVJc1QwRkJUelJDTEVsQlFWQXNRMEZCZEVJc1EwRkJiRUk3UVVGRFFTeFpRVUZKVGl4dlFrRkJiMElzUTBGQmVFSXNSVUZEU1N4UFFVRlBRU3hsUVVGUU8wRkJRMUE3UVVGRFJDeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05MTEdFN096czdPenM3T3pzN096czdPMEZEYUVObU96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN1VVRkhXVWNzVHp0UlFVTlNhRU1zVHp0UlFVTkJVeXhoTzFGQlEwRlJMR0U3VVVGRFFVVXNWenRSUVVOQlNTeFpPMUZCUTBGTkxHRTdPenM3T3pzN096czdPenRCUTJaS0xGTkJRVk5KTEVWQlFWUXNRMEZCV1VNc1IwRkJXaXhGUVVGcFFrTXNTVUZCYWtJc1JVRkJkVUk3UVVGRGJrSXNVVUZCU1VRc1QwRkJUeXhKUVVGUUxFbEJRV1ZCTEU5QlFVOHNTVUZCTVVJc1JVRkRTU3hQUVVGUExFdEJRVkE3UVVGRFNpeFJRVUZKUVN4bFFVRmxReXhKUVVGdVFpeEZRVU5KTEU5QlFVOHNTVUZCVUR0QlFVTktMRkZCUVVsQkxGTkJRVk16UWl4TlFVRmlMRVZCUTBrc1QwRkJUeXhKUVVGUU96dEJRVVZLTEZGQlFVa3NUMEZCVHpCQ0xFZEJRVkFzUzBGQlowSXNVVUZCY0VJc1JVRkRTU3hQUVVGUFF5eFRRVUZUZEVJc1RVRkJhRUk3UVVGRFNpeFJRVUZKTEU5QlFVOXhRaXhIUVVGUUxFdEJRV2RDTEZGQlFYQkNMRVZCUTBrc1QwRkJUME1zVTBGQlV6bENMRTFCUVdoQ08wRkJRMG9zVVVGQlNTeFBRVUZQTmtJc1IwRkJVQ3hMUVVGblFpeFRRVUZ3UWl4RlFVTkpMRTlCUVU5RExGTkJRVk5ETEU5QlFXaENPMEZCUTBvc1VVRkJTVVFzVTBGQlV6VkNMRXRCUVdJc1JVRkRTU3hQUVVGUFFTeE5RVUZOT0VJc1QwRkJUaXhEUVVGalNDeEhRVUZrTEVOQlFWQTdPMEZCUlVvc1YwRkJUeXhMUVVGUU8wRkJRMGc3TzJ0Q1FVVmpSQ3hGT3pzN096czdPenM3T3pzN08wRkRjRUptT3pzN096czdRVUZGUVR0QlFVTkJPMEZCUTBFc1UwRkJVMHNzU1VGQlZDeERRVUZqUXl4aFFVRmtMRVZCUVRaQ1F5eExRVUUzUWl4RlFVRnRRenRCUVVOc1F5eExRVUZOYUVJc2EwSkJRVzFDTEhWQ1FVRlJaU3hoUVVGU0xFVkJRWFZDUXl4TFFVRjJRaXhEUVVGNlFqczdRVUZGUVN4TFFVRkhhRUlzYjBKQlFXOUNMRU5CUVhaQ0xFVkJRWGxDTzBGQlEzaENaMElzVlVGQlVVTXNVMEZCVWp0QlFVTkJPenRCUVVWRkxGRkJRVTlFTEV0QlFWQTdRVUZEU0RzN2EwSkJSV05HTEVraUxDSm1hV3hsSWpvaWJHbGlMMlJwWm1ZdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hjSW1ScFptWmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2laR2xtWmx3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKa2FXWm1YQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9LU0I3WEc1eVpYUjFjbTRnWEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZTF4dUlGeDBYSFJjZEZ4MFkyOXVabWxuZFhKaFlteGxPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnWEhSY2RGeDBYSFJuWlhRNklHZGxkSFJsY2x4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRFlwTzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJRFE0TjJabFpURmtPR0ZpTkdSak5ERXdOekE1SWl3aWFXMXdiM0owSUhOMGNtbHVaME52YlhCaGNtVWdabkp2YlNBbkxpOXpkSEpwYm1kRGIyMXdZWEpsSjF4dWFXMXdiM0owSUc1MWJXSmxja052YlhCaGNtVWdabkp2YlNBbkxpOXVkVzFpWlhKRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdSaGRHVkRiMjF3WVhKbElHWnliMjBnSnk0dlpHRjBaVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZWEp5WVhsRGIyMXdZWEpsSUdaeWIyMGdKeTR2WVhKeVlYbERiMjF3WVhKbEoxeHVhVzF3YjNKMElHOWlhbVZqZEVOdmJYQmhjbVVnWm5KdmJTQW5MaTl2WW1wbFkzUkRiMjF3WVhKbEoxeHVhVzF3YjNKMElHbHpJR1p5YjIwZ0p5NHZMaTR2YVhNblhHNWNibVoxYm1OMGFXOXVJR052YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vcFhHNTdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFpQTlQVDBnYm1WM1QySnFLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1SUNBZ0lHbG1JQ2h1WlhkUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ0lHOXNaRTlpYWxSNWNHVWdQU0IwZVhCbGIyWW9iMnhrVDJKcUtUdGNiaUFnSUNCamIyNXpkQ0FnYm1WM1QySnFWSGx3WlNBOUlIUjVjR1Z2WmlodVpYZFBZbW9wTzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdJVDA5SUc1bGQwOWlhbFI1Y0dVcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkU5aWFsUjVjR1VzSUc1bGQwOWlhbFI1Y0dVcE8xeHVYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZGliMjlzWldGdUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiV0psY2tOdmJYQmhjbVVvVG5WdFltVnlLRzlzWkU5aWFpa3NJRTUxYldKbGNpaHVaWGRQWW1vcEtUdGNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0E5UFQwZ0oyNTFiV0psY2ljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXMWlaWEpEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0E5UFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSUFltcFVlWEJsSUNFOVBTQW5iMkpxWldOMEp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzVjYmlBZ0lDQnBaaUFvYVhNb2IyeGtUMkpxTENCRVlYUmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoZEdWRGIyMXdZWEpsS0c5c1pFOWlhaXdnYm1WM1QySnFLVHRjYmlBZ0lDQnBaaUFvYVhNb2IyeGtUMkpxTENCQmNuSmhlU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoY25KaGVVTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9zWTI5dGNHRnlaU2s3WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1QySnFaV04wS1NsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFtVmpkRU52YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vc0lHTnZiWEJoY21VcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SURBN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYjIxd1lYSmxPMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlqYjIxd1lYSmxMMk52YlhCaGNtVXVhbk1pTENJdkwyaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwxTjBjbWx1Wnk5c2IyTmhiR1ZEYjIxd1lYSmxYRzVtZFc1amRHbHZiaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRlpoYkhWbExDQnVaWGRXWVd4MVpTd2dhWE5EWVhObFUyVnVjMmwwYVhabEtTQjdYRzRnSUNBZ2FYTkRZWE5sVTJWdWMybDBhWFpsSUQwZ2RIbHdaVzltSUdselEyRnpaVk5sYm5OcGRHbDJaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJwYzBOaGMyVlRaVzV6YVhScGRtVWdPaUJtWVd4elpUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFNCdWRXeHNJQ1ltSUc1bGQxWmhiSFZsSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0JwWmlBb2JtVjNWbUZzZFdVZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzRnSUNBZ2FXWWdLR2x6UTJGelpWTmxibk5wZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0J2YkdSV1lXeDFaU0E5SUZOMGNtbHVaeWh2YkdSV1lXeDFaU2t1ZEc5TWIyTmhiR1ZNYjNkbGNrTmhjMlVvS1R0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQlRkSEpwYm1jb2JtVjNWbUZzZFdVcExuUnZURzlqWVd4bFRHOTNaWEpEWVhObEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJRk4wY21sdVp5aHZiR1JXWVd4MVpTa3ViRzlqWVd4bFEyOXRjR0Z5WlNodVpYZFdZV3gxWlNrN1hHNGdJQ0FnYVdZZ0tISmxjM1ZzZENBOElDMHhLVnh1SUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0F0TVR0Y2JpQWdJQ0JsYkhObElHbG1JQ2h5WlhOMWJIUWdQaUF4S1Z4dUlDQWdJQ0FnSUNCeVpYTjFiSFFnUFNBeE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2MzUnlhVzVuUTI5dGNHRnlaVHRjYmx4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwyTnZiWEJoY21VdmMzUnlhVzVuUTI5dGNHRnlaUzVxY3lJc0lseHVablZ1WTNScGIyNGdiblZ0WW1WeVEyOXRjR0Z5WlNodmJHUldZV3gxWlN3Z2JtVjNWbUZzZFdVcElIdGNibHh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHZiR1JXWVd4MVpTa2dKaVlnYVhOT1lVNG9ibVYzVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9iMnhrVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9ibVYzVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BDQnVaWGRXWVd4MVpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0ErSUc1bGQxWmhiSFZsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2JuVnRZbVZ5UTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzl1ZFcxaVpYSkRiMjF3WVhKbExtcHpJaXdpWEc1bWRXNWpkR2x2YmlCa1lYUmxRMjl0Y0dGeVpTaHZiR1JXWVd4MVpTd2dibVYzVm1Gc2RXVXBJSHRjYmx4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBUMGdiblZzYkNBbUppQnVaWGRXWVd4MVpTQTlQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLRzlzWkZaaGJIVmxJRDA5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1ZtRnNkV1VnUFQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JseHVJQ0FnSUhaaGNpQWdiMnhrVkdsdFpTQTlJRzlzWkZaaGJIVmxMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQjJZWElnSUc1bGQxUnBiV1VnUFNCdVpYZFdZV3gxWlM1blpYUlVhVzFsS0NrN1hHNGdJQ0FnYVdZZ0tHOXNaRlJwYldVZ1BDQnVaWGRVYVcxbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ2FXWWdLRzlzWkZScGJXVWdQaUJ1WlhkVWFXMWxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmx4dUlDQWdJR2xtSUNocGMwNWhUaWh2YkdSVWFXMWxLU0FtSmlCcGMwNWhUaWh1WlhkVWFXMWxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzlzWkZScGJXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9ibVYzVkdsdFpTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCa1lYUmxRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOWtZWFJsUTI5dGNHRnlaUzVxY3lJc0ltbHRjRzl5ZENCamIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaU2M3WEc1Y2JtWjFibU4wYVc5dUlHRnljbUY1UTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpbGNibnRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5UFNCdVpYZFBZbW9wWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUlBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQwOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0JzWlhRZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsTzF4dUlDQWdJSFpoY2lBZ2IyeGtUMkpxVEdWdVozUm9JRDBnYjJ4a1QySnFMbXhsYm1kMGFEdGNiaUFnSUNCMllYSWdJRzVsZDA5aWFreGxibWQwYUNBOUlHNWxkMDlpYWk1c1pXNW5kR2c3WEc0Z0lDQWdhV1lnS0c5c1pFOWlha3hsYm1kMGFDQThJRzVsZDA5aWFreGxibWQwYUNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUdsbUlDaHZiR1JQWW1wTVpXNW5kR2dnUGlCdVpYZFBZbXBNWlc1bmRHZ3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdJR2tnUFNBd095QnBJRHdnYjJ4a1QySnFUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXlaV04xY25OcGRtVWdZMjl0Y0dGeWFYTnZiaUJ2WmlCaGNuSmhlU0JsYkdWdFpXNTBjMXh1SUNBZ0lDQWdJQ0JqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdQU0JqYjIxd1lYSmxLRzlzWkU5aWFsdHBYU3dnYm1WM1QySnFXMmxkS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVXWVd4MVpTQWhQU0F3S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiWEJoY21semIyNVdZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlEQTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCaGNuSmhlVU52YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZZWEp5WVhsRGIyMXdZWEpsTG1weklpd2lhVzF3YjNKMElHTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsSnp0Y2JseHVablZ1WTNScGIyNGdiMkpxWldOMFEyOXRjR0Z5WlNodmJHUlBZbW9zSUc1bGQwOWlhaWxjYm50Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOVBTQnVaWGRQWW1vcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUdsbUlDaHZiR1JQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnYVdZZ0tHNWxkMDlpYWlBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNibHh1SUNBZ0lHeGxkQ0J3Y205d08xeHVJQ0FnSUdadmNpQW9jSEp2Y0NCcGJpQnZiR1JQWW1vcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzVsZDA5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdZMjl0Y0dGeWFYTnZibFpoYkhWbE8xeHVJQ0FnSUdadmNpQW9jSEp2Y0NCcGJpQnVaWGRQWW1vcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzlzWkU5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUNBZ0lDQXZMM0psWTNWeWMybDJaU0JqYjIxd1lYSnBjMjl1SUc5bUlHOWlhbVZqZENCd2NtOXdaWEowZVZ4dUlDQWdJQ0FnSUNCamIyMXdZWEpwYzI5dVZtRnNkV1VnUFNCamIyMXdZWEpsS0c5c1pFOWlhbHR3Y205d1hTd2dibVYzVDJKcVczQnliM0JkS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVXWVd4MVpTQWhQVDBnTUNsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjF3WVhKcGMyOXVWbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IySnFaV04wUTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzl2WW1wbFkzUkRiMjF3WVhKbExtcHpJaXdpYVcxd2IzSjBJSE4wY21sdVowTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVW5YRzVwYlhCdmNuUWdiblZ0WW1WeVEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQmtZWFJsUTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZaR0YwWlVOdmJYQmhjbVVuWEc1cGJYQnZjblFnWVhKeVlYbERiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5aGNuSmhlVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdiMkpxWldOMFEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQmpiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5amIyMXdZWEpsSjF4dWFXMXdiM0owSUdScFptWWdabkp2YlNBbkxpOWthV1ptSjF4dVhHNWxlSEJ2Y25RZ2UxeHVJQ0FnSUdScFptWWdZWE1nWkdWbVlYVnNkQ3hjYmlBZ0lDQmpiMjF3WVhKbExGeHVJQ0FnSUhOMGNtbHVaME52YlhCaGNtVXNYRzRnSUNBZ2JuVnRZbVZ5UTI5dGNHRnlaU3hjYmlBZ0lDQmtZWFJsUTI5dGNHRnlaU3hjYmlBZ0lDQmhjbkpoZVVOdmJYQmhjbVVzWEc0Z0lDQWdiMkpxWldOMFEyOXRjR0Z5WlZ4dWZWeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbVoxYm1OMGFXOXVJR2x6S0c5aWFpd2dWSGx3WlNrZ2UxeHVJQ0FnSUdsbUlDaHZZbW9nUFQwZ2JuVnNiQ0I4ZkNCdlltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJR2xtSUNodlltb2dhVzV6ZEdGdVkyVnZaaUJVZVhCbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQnBaaUFvVkhsd1pTQTlQVDBnVDJKcVpXTjBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZb2IySnFLU0E5UFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCVWVYQmxJRDA5UFNCVGRISnBibWM3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaWh2WW1vcElEMDlQU0FuYm5WdFltVnlKeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlI1Y0dVZ1BUMDlJRTUxYldKbGNqdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUtHOWlhaWtnUFQwOUlDZGliMjlzWldGdUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGUjVjR1VnUFQwOUlFSnZiMnhsWVc0N1hHNGdJQ0FnYVdZZ0tGUjVjR1VnUFQwOUlFRnljbUY1S1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUVhKeVlYa3VhWE5CY25KaGVTaHZZbW9wTzF4dVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JwY3p0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFYTXVhbk1pTENKcGJYQnZjblFnWTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZZMjl0Y0dGeVpTYzdYRzVjYmk4dklFbG1JSFJvWlhKbElHbHpJRzV2SUdOb1lXNW5aU0J5WlhSMWNtNXpJSFZ1WkdWbWFXNWxaRnh1THk4Z2FXWWdkR2hsY21VZ2FYTWdZU0JqYUdGdVoyVWdjbVYwZFhKdWN5QjBhR1VnYkdGMFpYTjBJSFpoYkhWbFhHNW1kVzVqZEdsdmJpQmthV1ptS0dOdmJYQmhjbVZrVm1Gc2RXVXNJSFpoYkhWbEtYdGNibHgwWTI5dWMzUWdZMjl0Y0dGeWFYTnZibFpoYkhWbElEMGdJR052YlhCaGNtVW9ZMjl0Y0dGeVpXUldZV3gxWlN3Z2RtRnNkV1VwTzF4dVhHNWNkR2xtS0dOdmJYQmhjbWx6YjI1V1lXeDFaU0E5UFQwZ01DbDdYRzVjZEZ4MGRtRnNkV1VnUFNCMWJtUmxabWx1WldRN1hHNWNkSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdaR2xtWmp0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlpHbG1aaTVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9kaWZmLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgRGlmZkxvZ2dlciBmcm9tICcuL0RpZmZMb2dnZXInO1xuXG5leHBvcnQge1xuXHRMb2dnZXIgYXMgZGVmYXVsdCxcblx0RGlmZkxvZ2dlclxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IGRpZmYgZnJvbSAnZGlmZic7XG5pbXBvcnQgTG9nRW50cnkgZnJvbSAnLi9Mb2dFbnRyeSc7XG5cbmZ1bmN0aW9uIGFwcGx5RGlmZihzdGVwcywgY2FsbGJhY2spIHtcblx0Y29uc3Qge2NvbnRleHQsIHVuZG9Mb2csIHJlZG9Mb2csIGdldHRlciwgc2V0dGVyfSA9IHRoaXM7XG5cdGxldCB7IHByZXZTdGF0ZSB9ID0gdGhpcztcblx0Y29uc3QgYWJzU3RlcHMgPSBNYXRoLmFicyhzdGVwcyk7XG5cdGxldCBzdGVwc1JlbWFpbmluZyA9IE1hdGgubWluKGFic1N0ZXBzLCBzdGVwcyA8IDAgPyB1bmRvTG9nLmxlbmd0aCA6IHJlZG9Mb2cubGVuZ3RoKTtcblx0aWYgKHN0ZXBzUmVtYWluaW5nID4gMCkge1xuXHRcdGxldCBsb2dFbnRyeSwgZGlmZjtcblx0XHR3aGlsZSAoc3RlcHNSZW1haW5pbmctLSA+IDApIHtcblx0XHRcdGlmIChzdGVwcyA8IDApIHsgLy8gdW5kb1xuXHRcdFx0XHRsb2dFbnRyeSA9IHVuZG9Mb2cucG9wKCk7XG5cdFx0XHRcdHJlZG9Mb2cudW5zaGlmdChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5wcmV2O1xuXHRcdFx0fSBlbHNlIHsgLy9yZWRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gcmVkb0xvZy5zaGlmdCgpO1xuXHRcdFx0XHR1bmRvTG9nLnB1c2gobG9nRW50cnkpO1xuXHRcdFx0XHRkaWZmID0gbG9nRW50cnkubmV4dDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0ZXBzUmVtYWluaW5nID09PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJldlN0YXRlID0gZGlmZi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gc2luY2UgcHJpbWl0aXZlIGFyZSBpbW11dGFibGUgd2UgZG9uJ3QgY2FsbCB0aGVtIGluIHNwcmVhZCBkZWNsYXJhdGlvbiBhYm92ZVxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSB0cnVlO1xuXHRcdC8vIG5vdyBhZnRlciByZWFjaGluZyB0aGUgTG9nIGVudHJ5IGFwcGx5IHRoZSBkaWZmIHRvIGN1cnJlbnQgc3RhdGVcblx0XHRzZXR0ZXIuY2FsbChjb250ZXh0LCBkaWZmLCBjYWxsYmFjayk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gc2luY2UgcHJpbWl0aXZlIGFyZSBpbW11dGFibGUgd2UgZG9uJ3QgY2FsbCB0aGVtIGluIHNwcmVhZCBkZWNsYXJhdGlvbiBhYm92ZVxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0fVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXHRjb25zdHJ1Y3RvcihzYXZlQ2FsbGJhY2spe1xuXHRcdHRoaXMuY29udGV4dDtcblx0XHR0aGlzLmdldHRlcjtcblx0XHR0aGlzLnNldHRlcjtcblx0XHR0aGlzLmRpZmZNZXRob2Q7XG5cblx0XHR0aGlzLnVuZG9Mb2cgPSBbXTtcblx0XHR0aGlzLnJlZG9Mb2cgPSBbXTtcblxuXHRcdHRoaXMucHJldlN0YXRlID0gbnVsbDtcblx0XHR0aGlzLm5leHRJZCA9IDA7XG5cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2s7XG5cblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbmFibGUgPSB0cnVlO1xuXHR9XG59XG5cbkxvZ2dlci5wcm90b3R5cGUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uKGNvbnRleHQsIGdldHRlciwgc2V0dGVyLCBkaWZmTWV0aG9kKXtcblx0aWYoIWdldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IGdldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKCFzZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBzZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5nZXR0ZXIgPSBnZXR0ZXI7XG5cdHRoaXMuc2V0dGVyID0gc2V0dGVyO1xuXHR0aGlzLmRpZmZNZXRob2QgPSBkaWZmTWV0aG9kO1xuXHR0aGlzLnByZXZTdGF0ZSA9IGdldHRlci5jYWxsKGNvbnRleHQpO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5zZXRTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbihzYXZlQ2FsbGJhY2spe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2tcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUucmVtb3ZlU2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gbnVsbDtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0YXBwbHlEaWZmLmNhbGwodGhpcywgLXN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnJlZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2spe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdGFwcGx5RGlmZi5jYWxsKHRoaXMsIHN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmRpZmZBcHBsaWVkKXtcblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gZmFsc2U7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBsb2c7XG5cdFx0bGV0IGdldERpZmYgPSB0aGlzLmRpZmZNZXRob2QgPyB0aGlzLmRpZmZNZXRob2QgOiBkaWZmO1xuXHRcdGlmKHRoaXMuY29udGV4dCl7XG5cdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy5jb250ZXh0KTtcblx0XHRcdGNvbnN0IGRpZmZPYmplY3QgPSBnZXREaWZmKHRoaXMucHJldlN0YXRlLCBzdGF0ZSk7XG5cdFx0XHQvLyBDaGFuZ2Ugb2NjdXJyZWQgbG9nIHRoZW1cblx0XHRcdGlmIChkaWZmT2JqZWN0LmN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsb2cgPSBuZXcgTG9nRW50cnkodGhpcy5uZXh0SWQrKywgZGlmZk9iamVjdC5jdXJyZW50LCBkaWZmT2JqZWN0LnByZXYpO1xuXHRcdFx0XHRpZih0aGlzLnJlZG9Mb2cubGVuZ3RoICE9PSAwKXtcblx0XHRcdFx0XHRjb25zdCBuZXh0TG9nID0gdGhpcy5yZWRvTG9nWzBdO1xuXHRcdFx0XHRcdG5leHRMb2cucHJldiA9IGxvZy5uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudW5kb0xvZy5wdXNoKGxvZyk7XG5cdFx0XHRcdHRoaXMucHJldlN0YXRlID0gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayAmJiB0aGlzLnNhdmVEaWZmQ2FsbGJhY2sobG9nKTtcblx0fVxufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTG9nZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nRW50cnkge1xuXHRjb25zdHJ1Y3RvcihpZCwgbmV4dCwgcHJldil7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmV4dCA9IG5leHQ7XG5cdFx0dGhpcy5wcmV2ID0gcHJldjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Mb2dFbnRyeS5qcyIsImltcG9ydCBQaXZvdGVkTGlua2VkTGlzdCBmcm9tICdwaXZvdGVkLWxpbmtlZC1saXN0JztcbmltcG9ydCB7Y29tYmluZURpZmZ9IGZyb20gJy4vaGVscGVyJztcblxuZnVuY3Rpb24gcHJlSW5zZXJ0KGN1cnJlbnRMb2csIG5ld0xvZywgbmV4dExvZyl7XG5cdGlmKGN1cnJlbnRMb2csIG5ld0xvZywgbmV4dExvZykgeyAvLyBtaWRkbGUgaW5zZXJ0XG5cdFx0Y29uc3QgbmV3TG9nRm9yd2FyZERpZmYgPSBuZXdMb2cuZm9yd2FyZDtcblx0XHRjb25zdCBuZXdMb2dCYWNrd2FyZERpZmYgPSBuZXdMb2cuYmFja3dhcmQ7XG5cdFx0Y29uc3QgbmV4dExvZ0ZvcndhcmREaWZmID0gbmV4dExvZy5mb3J3YXJkO1xuXHRcdGNvbnN0IG5leHRMb2dCYWNrd2FyZERpZmYgPSBuZXh0TG9nLmJhY2t3YXJkO1xuXHRcdGNvbnN0IG5ld0NvbWJpbmVkRm9yd2FyZERpZmYgPSBjb21iaW5lRGlmZihuZXh0TG9nQmFja3dhcmREaWZmLnZhbHVlLCBuZXdMb2dGb3J3YXJkRGlmZi52YWx1ZSlcblx0XHRjb25zdCBuZXdDb21iaW5lZEJhY2t3YXJkRGlmZiA9IGNvbWJpbmVEaWZmKG5leHRMb2dGb3J3YXJkRGlmZi52YWx1ZSwgbmV3TG9nQmFja3dhcmREaWZmLnZhbHVlKVxuXG5cdFx0bmV3TG9nLmZvcndhcmQgPSBuZXdDb21iaW5lZEZvcndhcmREaWZmO1xuXHRcdG5ld0xvZy5iYWNrd2FyZCA9IG5ld0NvbWJpbmVkQmFja3dhcmREaWZmO1xuXHR9XG5cbn1cblxuZnVuY3Rpb24ganVtcChzdGVwcyxkaXJlY3Rpb24sIGxvZ0xpc3Qsb2JqZWN0VmVyaWZpZXIpe1xuXHRsZXQgbG9nRW50cnksIGJhc2VEaWZmO1xuXHR3aGlsZShzdGVwcyA+PSAwKXtcblx0XHRsb2dFbnRyeSA9IGxvZ0xpc3QucGl2b3Q7XG5cdFx0aWYoZGlyZWN0aW9uID09PSAnYmFja3dhcmQnKXtcblx0XHRcdGxvZ0xpc3Quc2hpZnRQaXZvdCgtMSk7XG5cdFx0fSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnKXtcblx0XHRcdGxvZ0xpc3Quc2hpZnRQaXZvdCgxKTtcblx0XHR9XG5cdFx0Y29uc3QgZm9yd2FyZEJhY2t3YXJkRGlmZiA9IGxvZ0VudHJ5LmVsZW1lbnQ7XG5cdFx0Y29uc3QgZGlmZlN0YXRlID0gZm9yd2FyZEJhY2t3YXJkRGlmZltkaXJlY3Rpb25dO1xuXHRcdGNvbnN0IGRpZmZWYWx1ZSA9IGRpZmZTdGF0ZS52YWx1ZSA7XG5cdFx0Y29uc3QgaXNMb2dnYWJsZUNvbGxlY3Rpb25PYmplY3QgPSBkaWZmU3RhdGVbJ2NsYXNzRGVmTmFtZSddID09PSBvYmplY3RWZXJpZmllcjtcblx0XHRiYXNlRGlmZiA9IGNvbWJpbmVEaWZmKGJhc2VEaWZmLCBkaWZmVmFsdWUsIG9iamVjdFZlcmlmaWVyLCBpc0xvZ2dhYmxlQ29sbGVjdGlvbk9iamVjdCk7XG5cdFx0c3RlcHMgPSBzdGVwcyAtIDE7XG5cdH1cblx0cmV0dXJuIGJhc2VEaWZmO1xufVxuXG5mdW5jdGlvbiBzaGlmdEFuZEFwcGx5TG9nKHN0ZXBzLHR5cGUsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcikge1xuXHRjb25zdCB7Y29udGV4dCwgbG9nTGlzdCB9ID0gdGhpcztcblx0bGV0IGxvZ0VudHJ5LCBiYXNlRGlmZjtcblx0aWYoc3RlcHMgPT09IDApeyAvLyBuZXh0IGFuZCBwcmV2XG5cdFx0bG9nRW50cnkgPSBsb2dMaXN0LnBpdm90O1xuXHRcdGxvZ0xpc3Quc2hpZnRQaXZvdCh0eXBlID09PSBcInVuZG9cIiA/IC0xIDogMSk7XG5cdFx0Y29uc3QgZm9yd2FyZEJhY2t3YXJkRGlmZiA9IGxvZ0VudHJ5LmVsZW1lbnQ7XG5cdFx0Y29uc3Qge2ZvcndhcmQsIGJhY2t3YXJkfSA9IGZvcndhcmRCYWNrd2FyZERpZmY7XG5cdFx0bGV0IGRpZmZTdGF0ZTsvL1N0YXRlIGFzIEpTT05cblx0XHRpZih0eXBlID09PSBcInVuZG9cIil7XG5cdFx0XHRkaWZmU3RhdGUgPSBiYWNrd2FyZFxuXHRcdH0gZWxzZSBpZiggdHlwZSA9PT0gXCJyZWRvXCIpe1xuXHRcdFx0ZGlmZlN0YXRlID0gZm9yd2FyZFxuXHRcdH1cblx0XHRiYXNlRGlmZiA9IGRpZmZTdGF0ZS52YWx1ZSA7XG5cdH0gZWxzZSB7IC8vIGp1bXBpbmdcblx0XHRpZigodHlwZSA9PT0gXCJ1bmRvXCIpKXtcblx0XHRcdGJhc2VEaWZmID0ganVtcCgtc3RlcHMsJ2JhY2t3YXJkJyxsb2dMaXN0LG9iamVjdFZlcmlmaWVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YmFzZURpZmYgPSBqdW1wKHN0ZXBzLCdmb3J3YXJkJyxsb2dMaXN0LG9iamVjdFZlcmlmaWVyKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBkaWZmTG9nZ2VySW5zdGFuY2UgPSB0aGlzO1xuXHRjb250ZXh0LmFwcGx5RGlmZi5jYWxsKGNvbnRleHQsIGJhc2VEaWZmLCBmdW5jdGlvbigpe1xuXHRcdHVwZGF0ZUxhc3RBY3RpdmVTdGF0ZS5jYWxsKGRpZmZMb2dnZXJJbnN0YW5jZSk7XG5cdFx0Y2FsbGJhY2soKVxuXHR9KTtcblxufTtcblxuZnVuY3Rpb24gdXBkYXRlTGFzdEFjdGl2ZVN0YXRlKCl7XG5cdHRoaXMubGFzdEFjdGl2ZVN0YXRlID0gdGhpcy5jb250ZXh0LmdldFN0YXRlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZMb2dnZXIge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KXtcblx0XHRpZighY29udGV4dCl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29udGV4dCBjYW50IGJlIG51bGxcIik7XG5cdFx0fVxuXG5cdFx0aWYoIWNvbnRleHQuYXBwbHlEaWZmKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb250ZXh0IG5lZWRzIHRvIGltcGxlbWVudCBhcHBseURpZmYgbWV0aG9kXCIpO1xuXHRcdH1cblxuXHRcdGlmKCFjb250ZXh0LmdldFN0YXRlKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb250ZXh0IG5lZWRzIHRvIGltcGxlbWVudCBnZXRTdGF0ZSBtZXRob2RcIik7XG5cdFx0fVxuXG5cdFx0aWYoIWNvbnRleHQuZ2V0RGlmZil7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29udGV4dCBuZWVkcyB0byBpbXBsZW1lbnQgZ2V0RGlmZiBtZXRob2RcIik7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuXHRcdHRoaXMubG9nTGlzdCA9IG5ldyBQaXZvdGVkTGlua2VkTGlzdChbXSk7XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gbnVsbDtcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cblx0XHR1cGRhdGVMYXN0QWN0aXZlU3RhdGUuY2FsbCh0aGlzKVxuXHR9XG59XG5cblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuc2V0U2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oc2F2ZUNhbGxiYWNrKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrXG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdHNoaWZ0QW5kQXBwbHlMb2cuY2FsbCh0aGlzLCAtc3RlcHMsIFwidW5kb1wiLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdHNoaWZ0QW5kQXBwbHlMb2cuY2FsbCh0aGlzLCBzdGVwcywgXCJyZWRvXCIsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcik7XG59O1xuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGZvcndhcmRCYWNrd2FyZERpZmY7XG5cdFx0aWYodGhpcy5jb250ZXh0KXtcblx0XHRcdGZvcndhcmRCYWNrd2FyZERpZmYgPSB0aGlzLmNvbnRleHQuZ2V0RGlmZih0aGlzLmxhc3RBY3RpdmVTdGF0ZSwgdHJ1ZSk7XG5cdFx0XHRjb25zdCB7Zm9yd2FyZCwgYmFja3dhcmR9ID0gZm9yd2FyZEJhY2t3YXJkRGlmZjtcblxuXHRcdFx0aWYgKHR5cGVvZiBmb3J3YXJkID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiYWNrd2FyZCA9PT0gXCJvYmplY3RcIikgeyAvLyBDaGFuZ2Ugb2NjdXJyZWQgbG9nIHRoZW1cblx0XHRcdFx0dGhpcy5sb2dMaXN0Lmluc2VydChmb3J3YXJkQmFja3dhcmREaWZmLCBwcmVJbnNlcnQpO1xuXHRcdFx0XHR1cGRhdGVMYXN0QWN0aXZlU3RhdGUuY2FsbCh0aGlzKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGZvcndhcmRCYWNrd2FyZERpZmYpO1xuXHR9XG59O1xuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLmdldEN1cnJlbnRMb2cgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmxvZ0xpc3QgKXtcblx0XHRyZXR1cm4gdGhpcy5sb2dMaXN0LmdldFBpdm90RWxlbWVudCgpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmxvZ0xpc3QucmVzZXQoKTtcbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRGlmZkxvZ2dlci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlua2VkbGlzdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX05vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQaXZvdGVkTGlua2VkTGlzdCA9IGZ1bmN0aW9uIFBpdm90ZWRMaW5rZWRMaXN0KGFycmF5KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXZvdGVkTGlua2VkTGlzdCk7XG5cblx0dGhpcy5waXZvdCA9IG51bGw7XG5cdHRoaXMuaGVhZCA9IG51bGw7XG5cdHRoaXMudGFpbCA9IG51bGw7XG5cdHRoaXMubGVuZ3RoID0gMDtcblx0YXJyYXkgJiYgdGhpcy5jcmVhdGUoYXJyYXkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGl2b3RlZExpbmtlZExpc3Q7XG5cblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcmVJbnNlcnQsIHBvc3RJbnNlcnQpIHtcblx0dmFyIG5ld05vZGUgPSBuZXcgX05vZGUyLmRlZmF1bHQoZWxlbWVudCk7XG5cdHRoaXMubGVuZ3RoKys7XG5cblx0dmFyIGN1cnJlbnQgPSB2b2lkIDAsXG5cdCAgICBuZXh0ID0gdm9pZCAwO1xuXG5cdGlmICghdGhpcy5waXZvdCkge1xuXHRcdC8vIGluc2VydGluZyBhcyBmaXJzdCBlbGVtZW50XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChuZXdOb2RlKTtcblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHR0aGlzLmhlYWQgPSBuZXdOb2RlO1xuXHRcdHBvc3RJbnNlcnQgJiYgcG9zdEluc2VydChuZXdOb2RlKTtcblx0fSBlbHNlIGlmICh0aGlzLnBpdm90Lm5leHQpIHtcblx0XHQvLyBpbnNlcnRpbmcgaW4gbWlkZGxlXG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0bmV4dCA9IHRoaXMucGl2b3QubmV4dDtcblx0XHRwcmVJbnNlcnQgJiYgcHJlSW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUsIG5leHQpO1xuXHRcdG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUsIG5leHQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGluc2VydGluZyBhcyBsYXN0IGVsZW1lbnRcblx0XHRjdXJyZW50ID0gdGhpcy5waXZvdDtcblx0XHRwcmVJbnNlcnQgJiYgcHJlSW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUpO1xuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMudGFpbCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUpO1xuXHR9XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdCA9IGZ1bmN0aW9uIChzaGlmdCkge1xuXHR2YXIgY3VycmVudCA9IHRoaXMucGl2b3Q7XG5cblx0dmFyIHJpZ2h0U2hpZnQgPSB2b2lkIDA7XG5cdGlmIChzaGlmdCA+PSAwKSB7XG5cdFx0cmlnaHRTaGlmdCA9IHRydWU7XG5cdH1cblxuXHR3aGlsZSAoc2hpZnQgIT09IDApIHtcblx0XHRpZiAocmlnaHRTaGlmdCkge1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dDtcblx0XHRcdGN1cnJlbnQgPT09IHRoaXMudGFpbCA/IHNoaWZ0ID0gMCA6IHNoaWZ0LS07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnByZXY7XG5cdFx0XHRjdXJyZW50ID09PSB0aGlzLmhlYWQgPyBzaGlmdCA9IDAgOiBzaGlmdCsrO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMucGl2b3QgPSBjdXJyZW50O1xuXG5cdHJldHVybiB0aGlzLnBpdm90O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0UGl2b3RUb0hlYWQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMucGl2b3QgPSB0aGlzLmhlYWQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvVGFpbCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IHRoaXMudGFpbDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHRhcnJheS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRfdGhpcy5pbnNlcnQoZWxlbWVudCk7XG5cdH0pO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnRyYXZlcnNlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCByaWdodFRvTGVmdCkge1xuXHR2YXIgY3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gdGhpcy50YWlsIDogdGhpcy5oZWFkO1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNhbGxiYWNrKGN1cnJlbnQuZWxlbWVudCk7XG5cdFx0Y3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gY3VycmVudC5wcmV2IDogY3VycmVudC5uZXh0O1xuXHR9XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFycmF5ID0gW107XG5cdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRhcnJheS5wdXNoKGVsZW1lbnQpO1xuXHR9KTtcblx0cmV0dXJuIGFycmF5O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmdldFBpdm90RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMucGl2b3QpIHtcblx0XHRyZXR1cm4gdGhpcy5waXZvdC5lbGVtZW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBuZXh0ID0gdGhpcy5waXZvdC5uZXh0ID8gdGhpcy5waXZvdC5uZXh0IDogdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IG5leHQ7XG5cdHJldHVybiBuZXh0O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBwcmV2ID0gdGhpcy5waXZvdC5wcmV2ID8gdGhpcy5waXZvdC5wcmV2IDogdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IHByZXY7XG5cdHJldHVybiBwcmV2O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmlzUGl2b3RIZWFkID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5waXZvdCA9PT0gdGhpcy5oZWFkO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmlzUGl2b3RUYWlsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5waXZvdCA9PT0gdGhpcy50YWlsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gbnVsbDtcblx0dGhpcy5oZWFkID0gbnVsbDtcblx0dGhpcy50YWlsID0gbnVsbDtcblx0dGhpcy5sZW5ndGggPSAwO1xufTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOb2RlID0gZnVuY3Rpb24gTm9kZShlbGVtZW50KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHR0aGlzLm5leHQgPSBudWxsO1xuXHR0aGlzLnByZXYgPSBudWxsO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm9kZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBek1URXpPRFUyWlRrNE5UTXlOakF6TmpFMFpTSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMDV2WkdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdsMmIzUmxaRXhwYm10bFpFeHBjM1FpTENKaGNuSmhlU0lzSW5CcGRtOTBJaXdpYUdWaFpDSXNJblJoYVd3aUxDSnNaVzVuZEdnaUxDSmpjbVZoZEdVaUxDSndjbTkwYjNSNWNHVWlMQ0pwYm5ObGNuUWlMQ0psYkdWdFpXNTBJaXdpY0hKbFNXNXpaWEowSWl3aWNHOXpkRWx1YzJWeWRDSXNJbTVsZDA1dlpHVWlMQ0pqZFhKeVpXNTBJaXdpYm1WNGRDSXNJbkJ5WlhZaUxDSnphR2xtZEZCcGRtOTBJaXdpYzJocFpuUWlMQ0p5YVdkb2RGTm9hV1owSWl3aWMyaHBablJRYVhadmRGUnZTR1ZoWkNJc0luTm9hV1owVUdsMmIzUlViMVJoYVd3aUxDSnRZWEFpTENKMGNtRjJaWEp6WlNJc0ltTmhiR3hpWVdOcklpd2ljbWxuYUhSVWIweGxablFpTENKMGIwRnljbUY1SWl3aWNIVnphQ0lzSW1kbGRGQnBkbTkwUld4bGJXVnVkQ0lzSW1selVHbDJiM1JJWldGa0lpd2lhWE5RYVhadmRGUmhhV3dpTENKeVpYTmxkQ0lzSWs1dlpHVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenM3T3pzN096dEpRVU54UWtFc2FVSXNSMEZEY0VJc01rSkJRVmxETEV0QlFWb3NSVUZCYTBJN1FVRkJRVHM3UVVGRGFrSXNUVUZCUzBNc1MwRkJUQ3hIUVVGaExFbEJRV0k3UVVGRFFTeE5RVUZMUXl4SlFVRk1MRWRCUVZrc1NVRkJXanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1RVRkJTME1zVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVVvc1ZVRkJVeXhMUVVGTFN5eE5RVUZNTEVOQlFWbE1MRXRCUVZvc1EwRkJWRHRCUVVOQkxFTTdPMnRDUVZCdFFrUXNhVUk3T3p0QlFWVnlRa0VzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWtNc1RVRkJOVUlzUjBGQmNVTXNWVUZCVTBNc1QwRkJWQ3hGUVVGclFrTXNVMEZCYkVJc1JVRkJOa0pETEZWQlFUZENMRVZCUVhkRE8wRkJRelZGTEV0QlFVMURMRlZCUVZVc2JVSkJRVk5JTEU5QlFWUXNRMEZCYUVJN1FVRkRRU3hOUVVGTFNpeE5RVUZNT3p0QlFVVkJMRXRCUVVsUkxHZENRVUZLTzBGQlFVRXNTMEZCWVVNc1lVRkJZanM3UVVGRlFTeExRVUZITEVOQlFVTXNTMEZCUzFvc1MwRkJWQ3hGUVVGbE8wRkJRVVU3UVVGRGFFSlJMR1ZCUVdGQkxGVkJRVlZGTEU5QlFWWXNRMEZCWWp0QlFVTkJMRTlCUVV0V0xFdEJRVXdzUjBGQllWVXNUMEZCWWp0QlFVTkJMRTlCUVV0VUxFbEJRVXdzUjBGQldWTXNUMEZCV2p0QlFVTkJSQ3huUWtGQlkwRXNWMEZCVjBNc1QwRkJXQ3hEUVVGa08wRkJRMEVzUlVGTVJDeE5RVXRQTEVsQlFVY3NTMEZCUzFZc1MwRkJUQ3hEUVVGWFdTeEpRVUZrTEVWQlFXMUNPMEZCUVVVN1FVRkRNMEpFTEZsQlFWVXNTMEZCUzFnc1MwRkJaanRCUVVOQldTeFRRVUZQTEV0QlFVdGFMRXRCUVV3c1EwRkJWMWtzU1VGQmJFSTdRVUZEUVVvc1pVRkJZVUVzVlVGQlZVY3NUMEZCVml4RlFVRnJRa1FzVDBGQmJFSXNSVUZCTUVKRkxFbEJRVEZDTEVOQlFXSTdRVUZEUVVZc1ZVRkJVVVVzU1VGQlVpeEhRVUZsUkN4UlFVRlJReXhKUVVGMlFqdEJRVU5CUml4VlFVRlJSeXhKUVVGU0xFZEJRV1ZHTEU5QlFXWTdPMEZCUlVGQkxGVkJRVkZETEVsQlFWSXNSMEZCWlVZc1QwRkJaanRCUVVOQlJTeFBRVUZMUXl4SlFVRk1MRWRCUVZsSUxFOUJRVm83TzBGQlJVRXNUMEZCUzFZc1MwRkJUQ3hIUVVGaFZTeFBRVUZpTzBGQlEwRkVMR2RDUVVGalFTeFhRVUZYUlN4UFFVRllMRVZCUVcxQ1JDeFBRVUZ1UWl4RlFVRXlRa1VzU1VGQk0wSXNRMEZCWkR0QlFVTkJMRVZCV2swc1RVRlpRVHRCUVVGRk8wRkJRMUpFTEZsQlFWVXNTMEZCUzFnc1MwRkJaanRCUVVOQlVTeGxRVUZoUVN4VlFVRlZSeXhQUVVGV0xFVkJRV3RDUkN4UFFVRnNRaXhEUVVGaU8wRkJRMEZETEZWQlFWRkRMRWxCUVZJc1IwRkJaVVlzVDBGQlpqdEJRVU5CUVN4VlFVRlJSeXhKUVVGU0xFZEJRV1ZHTEU5QlFXWTdPMEZCUlVFc1QwRkJTMWdzUzBGQlRDeEhRVUZoVlN4UFFVRmlPMEZCUTBFc1QwRkJTMUlzU1VGQlRDeEhRVUZaVVN4UFFVRmFPMEZCUTBGRUxHZENRVUZqUVN4WFFVRlhSU3hQUVVGWUxFVkJRVzFDUkN4UFFVRnVRaXhEUVVGa08wRkJRMEU3UVVGRlJDeERRV3hEUkRzN1FVRnZRMEZhTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKVExGVkJRVFZDTEVkQlFYbERMRlZCUVZORExFdEJRVlFzUlVGQlpUdEJRVU4yUkN4TFFVRkpTaXhWUVVGVkxFdEJRVXRZTEV0QlFXNUNPenRCUVVWQkxFdEJRVWxuUWl4dFFrRkJTanRCUVVOQkxFdEJRVWRFTEZOQlFWTXNRMEZCV2l4RlFVRmpPMEZCUTJKRExHVkJRV0VzU1VGQllqdEJRVU5CT3p0QlFVVkVMRkZCUVUxRUxGVkJRVlVzUTBGQmFFSXNSVUZCYTBJN1FVRkRha0lzVFVGQlIwTXNWVUZCU0N4RlFVRmpPMEZCUTJKTUxHRkJRVlZCTEZGQlFWRkRMRWxCUVd4Q08wRkJRME5FTEdWQlFWa3NTMEZCUzFRc1NVRkJiRUlzUjBGQk1rSmhMRkZCUVZFc1EwRkJia01zUjBGQmQwTkJMRTlCUVhoRE8wRkJRMEVzUjBGSVJDeE5RVWRQTzBGQlEwNUtMR0ZCUVZWQkxGRkJRVkZGTEVsQlFXeENPMEZCUTBOR0xHVkJRVmtzUzBGQlMxWXNTVUZCYkVJc1IwRkJNa0pqTEZGQlFWRXNRMEZCYmtNc1IwRkJkME5CTEU5QlFYaERPMEZCUTBFN1FVRkRSRHM3UVVGRlJDeE5RVUZMWml4TFFVRk1MRWRCUVdGWExFOUJRV0k3TzBGQlJVRXNVVUZCVHl4TFFVRkxXQ3hMUVVGYU8wRkJRMEVzUTBGeVFrUTdPMEZCZFVKQlJpeHJRa0ZCYTBKUExGTkJRV3hDTEVOQlFUUkNXU3huUWtGQk5VSXNSMEZCSzBNc1dVRkJWVHRCUVVONFJDeE5RVUZMYWtJc1MwRkJUQ3hIUVVGaExFdEJRVXRETEVsQlFXeENPMEZCUTBFc1EwRkdSRHM3UVVGSlFVZ3NhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbUVzWjBKQlFUVkNMRWRCUVN0RExGbEJRVlU3UVVGRGVFUXNUVUZCUzJ4Q0xFdEJRVXdzUjBGQllTeExRVUZMUlN4SlFVRnNRanRCUVVOQkxFTkJSa1E3TzBGQlNVRktMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpFTEUxQlFUVkNMRWRCUVhGRExGVkJRVk5NTEV0QlFWUXNSVUZCWlR0QlFVRkJPenRCUVVOdVJFRXNUMEZCVFc5Q0xFZEJRVTRzUTBGQlZTeFZRVUZEV2l4UFFVRkVMRVZCUVZjN1FVRkRjRUlzVVVGQlMwUXNUVUZCVEN4RFFVRlpReXhQUVVGYU8wRkJRMEVzUlVGR1JEdEJRVWRCTEVOQlNrUTdPMEZCVFVGVUxHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSmxMRkZCUVRWQ0xFZEJRWFZETEZWQlFWTkRMRkZCUVZRc1JVRkJiVUpETEZkQlFXNUNMRVZCUVN0Q08wRkJRM0pGTEV0QlFVbFlMRlZCUVZWWExHTkJRV01zUzBGQlMzQkNMRWxCUVc1Q0xFZEJRVEJDTEV0QlFVdEVMRWxCUVRkRE8wRkJRMEVzVVVGQlRWVXNUMEZCVGl4RlFVRmpPMEZCUTJKVkxGZEJRVk5XTEZGQlFWRktMRTlCUVdwQ08wRkJRMEZKTEZsQlFWVlhMR05CUVdOWUxGRkJRVkZGTEVsQlFYUkNMRWRCUVRaQ1JpeFJRVUZSUXl4SlFVRXZRenRCUVVOQk8wRkJRMFFzUTBGT1JEczdRVUZUUVdRc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFtdENMRTlCUVRWQ0xFZEJRWE5ETEZsQlFWVTdRVUZETDBNc1MwRkJUWGhDTEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVV0eFFpeFJRVUZNTEVOQlFXTXNWVUZCUTJJc1QwRkJSQ3hGUVVGWE8wRkJRM2hDVWl4UlFVRk5lVUlzU1VGQlRpeERRVUZYYWtJc1QwRkJXRHRCUVVOQkxFVkJSa1E3UVVGSFFTeFJRVUZQVWl4TFFVRlFPMEZCUTBFc1EwRk9SRHM3UVVGUlFVUXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbTlDTEdWQlFUVkNMRWRCUVRoRExGbEJRVlU3UVVGRGRrUXNTMEZCUnl4TFFVRkxla0lzUzBGQlVpeEZRVUZqTzBGQlEySXNVMEZCVHl4TFFVRkxRU3hMUVVGTUxFTkJRVmRQTEU5QlFXeENPMEZCUTBFN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRFFTeERRVXhFT3p0QlFVOUJWQ3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDVHl4SlFVRTFRaXhIUVVGdFF5eFpRVUZWTzBGQlF6VkRMRXRCUVUxQkxFOUJRVThzUzBGQlMxb3NTMEZCVEN4RFFVRlhXU3hKUVVGWUxFZEJRV3RDTEV0QlFVdGFMRXRCUVV3c1EwRkJWMWtzU1VGQk4wSXNSMEZCY1VNc1MwRkJTMW9zUzBGQmRrUTdRVUZEUVN4TlFVRkxRU3hMUVVGTUxFZEJRV0ZaTEVsQlFXSTdRVUZEUVN4UlFVRlBRU3hKUVVGUU8wRkJRMEVzUTBGS1JEczdRVUZOUVdRc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFsRXNTVUZCTlVJc1IwRkJiVU1zV1VGQlZUdEJRVU0xUXl4TFFVRk5RU3hQUVVGUExFdEJRVXRpTEV0QlFVd3NRMEZCVjJFc1NVRkJXQ3hIUVVGclFpeExRVUZMWWl4TFFVRk1MRU5CUVZkaExFbEJRVGRDTEVkQlFYRkRMRXRCUVV0aUxFdEJRWFpFTzBGQlEwRXNUVUZCUzBFc1MwRkJUQ3hIUVVGaFlTeEpRVUZpTzBGQlEwRXNVVUZCVDBFc1NVRkJVRHRCUVVOQkxFTkJTa1E3TzBGQlRVRm1MR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUp4UWl4WFFVRTFRaXhIUVVFd1F5eFpRVUZWTzBGQlEyNUVMRkZCUVU4c1MwRkJTekZDTEV0QlFVd3NTMEZCWlN4TFFVRkxReXhKUVVFelFqdEJRVU5CTEVOQlJrUTdPMEZCU1VGSUxHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSnpRaXhYUVVFMVFpeEhRVUV3UXl4WlFVRlZPMEZCUTI1RUxGRkJRVThzUzBGQlN6TkNMRXRCUVV3c1MwRkJaU3hMUVVGTFJTeEpRVUV6UWp0QlFVTkJMRU5CUmtRN08wRkJTVUZLTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKMVFpeExRVUUxUWl4SFFVRnZReXhaUVVGVk8wRkJRemRETEUxQlFVczFRaXhMUVVGTUxFZEJRV0VzU1VGQllqdEJRVU5CTEUxQlFVdERMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzVFVGQlMwTXNTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hOUVVGTFF5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkJMRU5CVEVRc1F6czdPenM3T3pzN096czdPenM3TzBsRGFFbHhRakJDTEVrc1IwRkRjRUlzWTBGQldYUkNMRTlCUVZvc1JVRkJiMEk3UVVGQlFUczdRVUZEYmtJc1RVRkJTMEVzVDBGQlRDeEhRVUZsUVN4UFFVRm1PMEZCUTBFc1RVRkJTMHNzU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4TlFVRkxReXhKUVVGTUxFZEJRVmtzU1VGQldqdEJRVU5CTEVNN08ydENRVXh0UW1kQ0xFa2lMQ0ptYVd4bElqb2liR2xpTDJsdVpHVjRMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1hDSnNhVzVyWldSc2FYTjBYQ0lzSUZ0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbXhwYm10bFpHeHBjM1JjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpYkdsdWEyVmtiR2x6ZEZ3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUjVjR1Z2WmlCelpXeG1JQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QS9JSE5sYkdZZ09pQjBhR2x6TENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQmNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdYRzRnWEhSY2RGeDBYSFJqYjI1bWFXZDFjbUZpYkdVNklHWmhiSE5sTEZ4dUlGeDBYSFJjZEZ4MFpXNTFiV1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQmNkRngwWEhSY2RHZGxkRG9nWjJWMGRHVnlYRzRnWEhSY2RGeDBmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ016RXhNemcxTm1VNU9EVXpNall3TXpZeE5HVWlMQ0pwYlhCdmNuUWdUbTlrWlNCbWNtOXRJRndpTGk5T2IyUmxYQ0k3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDQjdYRzVjZEdOdmJuTjBjblZqZEc5eUtHRnljbUY1S1h0Y2JseDBYSFIwYUdsekxuQnBkbTkwSUQwZ2JuVnNiRHRjYmx4MFhIUjBhR2x6TG1obFlXUWdQU0J1ZFd4c08xeHVYSFJjZEhSb2FYTXVkR0ZwYkNBOUlHNTFiR3c3WEc1Y2RGeDBkR2hwY3k1c1pXNW5kR2dnUFNBd08xeHVYSFJjZEdGeWNtRjVJQ1ltSUhSb2FYTXVZM0psWVhSbEtHRnljbUY1S1R0Y2JseDBmVnh1ZlZ4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVhVzV6WlhKMElEMGdablZ1WTNScGIyNG9aV3hsYldWdWRDd2djSEpsU1c1elpYSjBMQ0J3YjNOMFNXNXpaWEowS1h0Y2JseDBZMjl1YzNRZ2JtVjNUbTlrWlNBOUlHNWxkeUJPYjJSbEtHVnNaVzFsYm5RcE8xeHVYSFIwYUdsekxteGxibWQwYUNzck8xeHVYRzVjZEd4bGRDQmpkWEp5Wlc1MExDQnVaWGgwTzF4dVhHNWNkR2xtS0NGMGFHbHpMbkJwZG05MEtYc2dMeThnYVc1elpYSjBhVzVuSUdGeklHWnBjbk4wSUdWc1pXMWxiblJjYmx4MFhIUndjbVZKYm5ObGNuUWdKaVlnY0hKbFNXNXpaWEowS0c1bGQwNXZaR1VwTzF4dVhIUmNkSFJvYVhNdWNHbDJiM1FnUFNCdVpYZE9iMlJsTzF4dVhIUmNkSFJvYVhNdWFHVmhaQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBjRzl6ZEVsdWMyVnlkQ0FtSmlCd2IzTjBTVzV6WlhKMEtHNWxkMDV2WkdVcE8xeHVYSFI5SUdWc2MyVWdhV1lvZEdocGN5NXdhWFp2ZEM1dVpYaDBLWHNnTHk4Z2FXNXpaWEowYVc1bklHbHVJRzFwWkdSc1pWeHVYSFJjZEdOMWNuSmxiblFnUFNCMGFHbHpMbkJwZG05ME8xeHVYSFJjZEc1bGVIUWdQU0IwYUdsekxuQnBkbTkwTG01bGVIUTdYRzVjZEZ4MGNISmxTVzV6WlhKMElDWW1JSEJ5WlVsdWMyVnlkQ2hqZFhKeVpXNTBMRzVsZDA1dlpHVXNibVY0ZENrN1hHNWNkRngwYm1WM1RtOWtaUzV1WlhoMElEMGdZM1Z5Y21WdWRDNXVaWGgwTzF4dVhIUmNkRzVsZDA1dlpHVXVjSEpsZGlBOUlHTjFjbkpsYm5RN1hHNWNibHgwWEhSamRYSnlaVzUwTG01bGVIUWdQU0J1WlhkT2IyUmxPMXh1WEhSY2RHNWxlSFF1Y0hKbGRpQTlJRzVsZDA1dlpHVTdYRzVjYmx4MFhIUjBhR2x6TG5CcGRtOTBJRDBnYm1WM1RtOWtaVHRjYmx4MFhIUndiM04wU1c1elpYSjBJQ1ltSUhCdmMzUkpibk5sY25Rb1kzVnljbVZ1ZEN4dVpYZE9iMlJsTEc1bGVIUXBPMXh1WEhSOUlHVnNjMlVnZXlBdkx5QnBibk5sY25ScGJtY2dZWE1nYkdGemRDQmxiR1Z0Wlc1MFhHNWNkRngwWTNWeWNtVnVkQ0E5SUhSb2FYTXVjR2wyYjNRN1hHNWNkRngwY0hKbFNXNXpaWEowSUNZbUlIQnlaVWx1YzJWeWRDaGpkWEp5Wlc1MExHNWxkMDV2WkdVcE8xeHVYSFJjZEdOMWNuSmxiblF1Ym1WNGRDQTlJRzVsZDA1dlpHVTdYRzVjZEZ4MGJtVjNUbTlrWlM1d2NtVjJJRDBnWTNWeWNtVnVkRHRjYmx4dVhIUmNkSFJvYVhNdWNHbDJiM1FnUFNCdVpYZE9iMlJsTzF4dVhIUmNkSFJvYVhNdWRHRnBiQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBjRzl6ZEVsdWMyVnlkQ0FtSmlCd2IzTjBTVzV6WlhKMEtHTjFjbkpsYm5Rc2JtVjNUbTlrWlNrN1hHNWNkSDFjYmx4dWZUdGNibHh1VUdsMmIzUmxaRXhwYm10bFpFeHBjM1F1Y0hKdmRHOTBlWEJsTG5Ob2FXWjBVR2wyYjNRZ1BTQm1kVzVqZEdsdmJpaHphR2xtZENsN1hHNWNkR3hsZENCamRYSnlaVzUwSUQwZ2RHaHBjeTV3YVhadmREdGNibHh1WEhSc1pYUWdjbWxuYUhSVGFHbG1kRHRjYmx4MGFXWW9jMmhwWm5RZ1BqMGdNQ2w3WEc1Y2RGeDBjbWxuYUhSVGFHbG1kQ0E5SUhSeWRXVTdYRzVjZEgxY2JseHVYSFIzYUdsc1pTaHphR2xtZENBaFBUMGdNQ2w3WEc1Y2RGeDBhV1lvY21sbmFIUlRhR2xtZENsN1hHNWNkRngwWEhSamRYSnlaVzUwSUQwZ1kzVnljbVZ1ZEM1dVpYaDBPMXh1WEhSY2RGeDBLR04xY25KbGJuUWdQVDA5SUhSb2FYTXVkR0ZwYkNrZ1B5QW9jMmhwWm5RZ1BTQXdLU0E2SUhOb2FXWjBMUzA3WEc1Y2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RHTjFjbkpsYm5RZ1BTQmpkWEp5Wlc1MExuQnlaWFk3WEc1Y2RGeDBYSFFvWTNWeWNtVnVkQ0E5UFQwZ2RHaHBjeTVvWldGa0tTQS9JQ2h6YUdsbWRDQTlJREFwSURvZ2MyaHBablFyS3p0Y2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSMGFHbHpMbkJwZG05MElEMGdZM1Z5Y21WdWREdGNibHh1WEhSeVpYUjFjbTRnZEdocGN5NXdhWFp2ZER0Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1emFHbG1kRkJwZG05MFZHOUlaV0ZrSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwZEdocGN5NXdhWFp2ZENBOUlIUm9hWE11YUdWaFpEdGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXphR2xtZEZCcGRtOTBWRzlVWVdsc0lEMGdablZ1WTNScGIyNG9LWHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJSFJvYVhNdWRHRnBiRHRjYm4wN1hHNWNibEJwZG05MFpXUk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzVqY21WaGRHVWdQU0JtZFc1amRHbHZiaWhoY25KaGVTbDdYRzVjZEdGeWNtRjVMbTFoY0Nnb1pXeGxiV1Z1ZENrOVBudGNibHgwWEhSMGFHbHpMbWx1YzJWeWRDaGxiR1Z0Wlc1MEtUdGNibHgwZlNsY2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1MGNtRjJaWEp6WlNBOUlHWjFibU4wYVc5dUtHTmhiR3hpWVdOckxDQnlhV2RvZEZSdlRHVm1kQ2w3WEc1Y2RHeGxkQ0JqZFhKeVpXNTBJRDBnY21sbmFIUlViMHhsWm5RZ1B5QjBhR2x6TG5SaGFXd2dPaUIwYUdsekxtaGxZV1E3WEc1Y2RIZG9hV3hsS0dOMWNuSmxiblFwZTF4dVhIUmNkR05oYkd4aVlXTnJLR04xY25KbGJuUXVaV3hsYldWdWRDazdYRzVjZEZ4MFkzVnljbVZ1ZENBOUlISnBaMmgwVkc5TVpXWjBJRDhnWTNWeWNtVnVkQzV3Y21WMklEb2dZM1Z5Y21WdWRDNXVaWGgwTzF4dVhIUjlYRzU5TzF4dVhHNWNibEJwZG05MFpXUk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzUwYjBGeWNtRjVJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBZMjl1YzNRZ1lYSnlZWGtnUFNCYlhUdGNibHgwZEdocGN5NTBjbUYyWlhKelpTZ29aV3hsYldWdWRDazlQbnRjYmx4MFhIUmhjbkpoZVM1d2RYTm9LR1ZzWlcxbGJuUXBPMXh1WEhSOUtWeHVYSFJ5WlhSMWNtNGdZWEp5WVhrN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdVoyVjBVR2wyYjNSRmJHVnRaVzUwSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwYVdZb2RHaHBjeTV3YVhadmRDbDdYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVjR2wyYjNRdVpXeGxiV1Z1ZER0Y2JseDBmVnh1WEhSeVpYUjFjbTRnYm5Wc2JEdGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXVaWGgwSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwWTI5dWMzUWdibVY0ZENBOUlIUm9hWE11Y0dsMmIzUXVibVY0ZENBL0lIUm9hWE11Y0dsMmIzUXVibVY0ZENBNklDQjBhR2x6TG5CcGRtOTBPMXh1WEhSMGFHbHpMbkJwZG05MElEMGdibVY0ZER0Y2JseDBjbVYwZFhKdUlHNWxlSFE3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1Y0hKbGRpQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RHTnZibk4wSUhCeVpYWWdQU0IwYUdsekxuQnBkbTkwTG5CeVpYWWdQeUIwYUdsekxuQnBkbTkwTG5CeVpYWWdPaUFnZEdocGN5NXdhWFp2ZER0Y2JseDBkR2hwY3k1d2FYWnZkQ0E5SUhCeVpYWTdYRzVjZEhKbGRIVnliaUJ3Y21WMk8xeHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtbHpVR2wyYjNSSVpXRmtJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBjbVYwZFhKdUlIUm9hWE11Y0dsMmIzUWdQVDA5SUhSb2FYTXVhR1ZoWkR0Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1cGMxQnBkbTkwVkdGcGJDQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RISmxkSFZ5YmlCMGFHbHpMbkJwZG05MElEMDlQU0IwYUdsekxuUmhhV3c3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1Y21WelpYUWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUjBhR2x6TG5CcGRtOTBJRDBnYm5Wc2JEdGNibHgwZEdocGN5NW9aV0ZrSUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTUwWVdsc0lEMGdiblZzYkR0Y2JseDBkR2hwY3k1c1pXNW5kR2dnUFNBd08xeHVmVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5Qk9iMlJsZTF4dVhIUmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBLWHRjYmx4MFhIUjBhR2x6TG1Wc1pXMWxiblFnUFNCbGJHVnRaVzUwTzF4dVhIUmNkSFJvYVhNdWJtVjRkQ0E5SUc1MWJHdzdYRzVjZEZ4MGRHaHBjeTV3Y21WMklEMGdiblZzYkR0Y2JseDBmVnh1ZlZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5T2IyUmxMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9waXZvdGVkLWxpbmtlZC1saXN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGNvcHlKc29uKGpzb24pe1xuXHRjb25zdCBzdHJpbmdKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cdHJldHVybiBKU09OLnBhcnNlKHN0cmluZ0pzb24pO1xufVxuXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycmF5ICwgaWROYW1lLCByZXBsYWNlV2l0aElkID0gZmFsc2UsIHJldHVybklkcyA9IGZhbHNlKXtcblx0bGV0IG9iamVjdCA9IG51bGw7XG5cdGxldCBpZHMgPSByZXR1cm5JZHMgPyBbXSA6IHVuZGVmaW5lZDtcblx0aWYoYXJyYXkpe1xuXHRcdG9iamVjdCA9IHt9O1xuXHRcdGxldCBpbmRleCwgaWQsIGNoaWxkO1xuXHRcdGZvcihpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRcdGNoaWxkID0gYXJyYXlbaW5kZXhdO1xuXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyl7XG5cdFx0XHRcdGlkID0gY2hpbGQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZCA9IGNoaWxkW2lkTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRvYmplY3RbaWRdID0gY2hpbGQ7XG5cdFx0XHRyZXBsYWNlV2l0aElkICYmIChhcnJheVtpbmRleF0gPSBpZCk7XG5cdFx0XHRyZXR1cm5JZHMgJiYgaWRzLnB1c2goaWQpO1xuXHRcdH1cblx0fVxuXHRpZihyZXR1cm5JZHMpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRvYmo6IG9iamVjdCxcblx0XHRcdGtleXM6IGlkc1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZURpZmYgKGJhc2VEaWZmLCBkaWZmVG9BZGQsIG9iamVjdFZlcmlmaWVyLCBpc0NvbGxlY3Rpb25PYmplY3QgPSBmYWxzZSkge1xuXHRjb25zdCBiYXNlVHlwZSA9IHR5cGVvZiAoYmFzZURpZmYpOyAvLyB0aGUgdHlwZSBvZiBudWxsIGlzICdvYmplY3QnXG5cdGNvbnN0IGRpZmZUeXBlID0gdHlwZW9mIChkaWZmVG9BZGQpO1xuXG5cdGlmIChiYXNlRGlmZiA9PSBudWxsIHx8IGRpZmZUb0FkZCA9PSBudWxsIHx8IGJhc2VUeXBlICE9PSBkaWZmVHlwZSB8fCAhaXNDb2xsZWN0aW9uT2JqZWN0ICkge1xuXHRcdGJhc2VEaWZmID0gZGlmZlR5cGUgPT09ICdvYmplY3QnID8gIGNvcHlKc29uKGRpZmZUb0FkZCkgOiBkaWZmVG9BZGQgLy8gcmVhY2hlZCBib3R0b20gbW9zdCBsZXZlbFxuXHR9IGVsc2UgIHtcblx0XHRjb25zdCBiYXNlTG9va3VwID0gYXJyYXlUb09iamVjdChiYXNlRGlmZiwgJ2lkJywgdHJ1ZSk7XG5cdFx0Y29uc3QgYXJyYXlBc09iaiA9IGFycmF5VG9PYmplY3QoZGlmZlRvQWRkLCAnaWQnLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0Y29uc3QgZGlmZkxvb2tVcCA9IGFycmF5QXNPYmoub2JqO1xuXHRcdGNvbnN0IGRpZmZUb0FkZEtleXMgPSBhcnJheUFzT2JqLmtleXM7XG5cblx0XHQvLyBhcHBseSBlYWNoIHN0YXRlQXNKc29uIGRpZmYgYXBwZWFyaW5nIGluIGRpZmZUb0FkZFxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZlRvQWRkS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaWQgPSBkaWZmVG9BZGRLZXlzW2ldO1xuXHRcdFx0Y29uc3Qgb2xkU3RhdGUgPSBiYXNlTG9va3VwW2lkXTtcblx0XHRcdGNvbnN0IG5ld1N0YXRlID0gZGlmZkxvb2tVcFtpZF07XG5cblx0XHRcdGlmKG9sZFN0YXRlKXtcblx0XHRcdFx0aWYgKHR5cGVvZiBvbGRTdGF0ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRpZih0eXBlb2YgbmV3U3RhdGUgIT09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRcdGlmIChuZXdTdGF0ZVsnY2xhc3NEZWZOYW1lJ10hPT0gb2xkU3RhdGVbJ2NsYXNzRGVmTmFtZSddKSB7IC8vIGRlbGV0ZSBvcGVyYXRpb24gd2hlcmUgY2xhc3NOYW1lcyBhcmUgbm90IGVxdWFsXG5cdFx0XHRcdFx0XHRcdGJhc2VMb29rdXBbaWRdID0gY29weUpzb24obmV3U3RhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNDb2xsZWN0aW9uT2JqZWN0ID0gbmV3U3RhdGVbJ2NsYXNzRGVmTmFtZSddID09PSBvYmplY3RWZXJpZmllcjtcblx0XHRcdFx0XHRcdFx0b2xkU3RhdGVbJ3ZhbHVlJ10gPSBjb21iaW5lRGlmZihvbGRTdGF0ZVsndmFsdWUnXSwgbmV3U3RhdGVbJ3ZhbHVlJ10sb2JqZWN0VmVyaWZpZXIsIGlzQ29sbGVjdGlvbk9iamVjdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdChvbGRTdGF0ZSAhPT0gbmV3U3RhdGUpICYmIChiYXNlTG9va3VwW2lkXSA9IGNvcHlKc29uKG5ld1N0YXRlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJhc2VMb29rdXBbaWRdID0gY29weUpzb24obmV3U3RhdGUpO1xuXHRcdFx0XHRiYXNlRGlmZi5wdXNoKGlkKTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHQvLyBjaGFuZ2UgYmFzZURpZmYgYmFjayBmcm9tIG5hbWVzIHRvIHR5cGVkIHN0YXRlc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZURpZmYubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJhc2VEaWZmW2ldID0gYmFzZUxvb2t1cFtiYXNlRGlmZltpXV07XG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gYmFzZURpZmY7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9oZWxwZXIuanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi8uLi9saWInO1xuaW1wb3J0IHtEaWZmTG9nZ2VyfSBmcm9tICcuLy4uL2xpYic7XG5cbnZhciBvYmogPSB7XG5cdHZhbHVlOiAwLFxuXHRnZXRTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fSxcblx0c2V0U3RhdGU6IGZ1bmN0aW9uKHZhbCl7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0fSxcblx0YXBwbHlEaWZmOiBmdW5jdGlvbih2YWwpe1xuXHRcdHRoaXMudmFsdWUgPSB2YWw7XG5cdH0sXG5cdGdldERpZmY6IGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRyZXR1cm4gZGlmZih2YWx1ZSx0aGlzLmdldFN0YXRlKCkpXG5cdH1cbn1cblxuXG5cbmZ1bmN0aW9uIHNhdmVDYWxsYmFjayhsb2cpe1xuXHRjb25zb2xlLmxvZyhsb2cpXG59XG5cbnZhciBsb2dnZXIgPSBuZXcgRGlmZkxvZ2dlcihvYmosc2F2ZUNhbGxiYWNrKTtcblxuXG5vYmouc2V0U3RhdGUoMSk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDIpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRTdGF0ZSgzKTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5vYmouc2V0U3RhdGUoNCk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDUpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnJlZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciByZWRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIHJlZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbm9iai5zZXRTdGF0ZSg2KTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxuXG5cbi8qXG4gY29uc29sZS5sb2coJ0JlZm9yZSBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcbmxvZ2dlci5yZWRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFJlZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5vYmouc2V0VmFsdWUoNik7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFZhbHVlKDcpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAxIFN0ZXBzOiAnLCBvYmoudmFsdWUpOyovXG5cblxuXG5cbi8qbG9nZ2VyLnVuZG8oNyk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyA3IFN0ZXBzIG1vcmUgdGhhbiBhdmFpbGFibGUgc3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbyg3KTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDcgU3RlcHMgbW9yZSB0aGFuIGF2YWlsYWJsZSBzdGVwczogJywgb2JqLnZhbHVlKTsqL1xuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==