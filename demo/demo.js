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
		var newLogForwardDiff = newLog.element.forward;
		var newLogBackwardDiff = newLog.element.backward;
		var nextLogForwardDiff = nextLog.element.forward;
		var nextLogBackwardDiff = nextLog.element.backward;
		var newCombinedForwardDiff = (0, _helper.combineDiff)(nextLogBackwardDiff.value, newLogForwardDiff.value, this.objectVerifier, true);
		var newCombinedBackwardDiff = (0, _helper.combineDiff)(nextLogForwardDiff.value, newLogBackwardDiff.value, this.objectVerifier, true);

		newLog.forward = newCombinedForwardDiff;
		newLog.backward = newCombinedBackwardDiff;
	}
}

function jump(steps, direction, logList, objectVerifier) {
	var logEntry = void 0,
	    baseDiff = void 0;
	while (steps > 0) {
		if (direction === 'backward') {
			logEntry = logList.pivot;
			logList.shiftPivot(-1);
		} else if (direction === 'forward') {
			logEntry = logList.shiftPivot(1);
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

	if (objectVerifier) {
		this.objectVerifier = objectVerifier;
	}
	var logEntry = void 0,
	    baseDiff = void 0;
	if (type === "undo") {
		baseDiff = jump(-steps, 'backward', logList, objectVerifier);
	} else {
		baseDiff = jump(steps, 'forward', logList, objectVerifier);
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

var DiffLogger = function DiffLogger(context, objectVerifier) {
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
	this.objectVerifier = objectVerifier;

	updateLastActiveState.call(this);
	this.objectVerifier;
	preInsert = preInsert.bind(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNjIyMjU4ZmVlMTJiZDNiZGZlOCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9EaWZmTG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJMb2dnZXIiLCJEaWZmTG9nZ2VyIiwiYXBwbHlEaWZmIiwic3RlcHMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJ1bmRvTG9nIiwicmVkb0xvZyIsImdldHRlciIsInNldHRlciIsInByZXZTdGF0ZSIsImFic1N0ZXBzIiwiTWF0aCIsImFicyIsInN0ZXBzUmVtYWluaW5nIiwibWluIiwibGVuZ3RoIiwibG9nRW50cnkiLCJkaWZmIiwicG9wIiwidW5zaGlmdCIsInByZXYiLCJzaGlmdCIsInB1c2giLCJuZXh0IiwidmFsdWUiLCJkaWZmQXBwbGllZCIsImNhbGwiLCJzYXZlQ2FsbGJhY2siLCJkaWZmTWV0aG9kIiwibmV4dElkIiwic2F2ZURpZmZDYWxsYmFjayIsImVuYWJsZSIsInByb3RvdHlwZSIsInNldENvbnRleHQiLCJjb25zb2xlIiwid2FybiIsInNldFNhdmVDYWxsYmFjayIsInJlbW92ZVNhdmVDYWxsYmFjayIsInVuZG8iLCJpc05hTiIsInJlZG8iLCJzYXZlIiwibG9nIiwiZ2V0RGlmZiIsInN0YXRlIiwiZGlmZk9iamVjdCIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJMb2dFbnRyeSIsIm5leHRMb2ciLCJpZCIsInByZUluc2VydCIsImN1cnJlbnRMb2ciLCJuZXdMb2ciLCJuZXdMb2dGb3J3YXJkRGlmZiIsImVsZW1lbnQiLCJmb3J3YXJkIiwibmV3TG9nQmFja3dhcmREaWZmIiwiYmFja3dhcmQiLCJuZXh0TG9nRm9yd2FyZERpZmYiLCJuZXh0TG9nQmFja3dhcmREaWZmIiwibmV3Q29tYmluZWRGb3J3YXJkRGlmZiIsIm9iamVjdFZlcmlmaWVyIiwibmV3Q29tYmluZWRCYWNrd2FyZERpZmYiLCJqdW1wIiwiZGlyZWN0aW9uIiwibG9nTGlzdCIsImJhc2VEaWZmIiwicGl2b3QiLCJzaGlmdFBpdm90IiwiZm9yd2FyZEJhY2t3YXJkRGlmZiIsImRpZmZTdGF0ZSIsImRpZmZWYWx1ZSIsImlzTG9nZ2FibGVDb2xsZWN0aW9uT2JqZWN0Iiwic2hpZnRBbmRBcHBseUxvZyIsInR5cGUiLCJkaWZmTG9nZ2VySW5zdGFuY2UiLCJ1cGRhdGVMYXN0QWN0aXZlU3RhdGUiLCJsYXN0QWN0aXZlU3RhdGUiLCJnZXRTdGF0ZSIsImVycm9yIiwiUGl2b3RlZExpbmtlZExpc3QiLCJiaW5kIiwiaW5zZXJ0IiwiZ2V0Q3VycmVudExvZyIsImdldFBpdm90RWxlbWVudCIsImNsZWFyIiwicmVzZXQiLCJjb21iaW5lRGlmZiIsImNvcHlKc29uIiwianNvbiIsInN0cmluZ0pzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJhcnJheVRvT2JqZWN0IiwiYXJyYXkiLCJpZE5hbWUiLCJyZXBsYWNlV2l0aElkIiwicmV0dXJuSWRzIiwib2JqZWN0IiwiaWRzIiwiaW5kZXgiLCJjaGlsZCIsIm9iaiIsImtleXMiLCJkaWZmVG9BZGQiLCJpc0NvbGxlY3Rpb25PYmplY3QiLCJiYXNlVHlwZSIsImRpZmZUeXBlIiwiYmFzZUxvb2t1cCIsImFycmF5QXNPYmoiLCJkaWZmTG9va1VwIiwiZGlmZlRvQWRkS2V5cyIsImkiLCJvbGRTdGF0ZSIs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UVEsR0FBUixDQUFZLGNBQVosRUFBNEI4RCxJQUFJaEYsS0FBaEM7O0FBRUErRixPQUFPL0UsSUFBUDtBQUNBTixRQUFRUSxHQUFSLENBQVksY0FBWixFQUE0QjhELElBQUloRixLQUFoQzs7QUFFQStGLE9BQU8vRSxJQUFQO0FBQ0FOLFFBQVFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCOEQsSUFBSWhGLEtBQWhDOztBQUVBK0YsT0FBT2pGLElBQVAsQ0FBWSxDQUFaO0FBQ0FKLFFBQVFRLEdBQVIsQ0FBWSxzQkFBWixFQUFvQzhELElBQUloRixLQUF4Qzs7QUFFQStGLE9BQU8vRSxJQUFQLENBQVksQ0FBWjtBQUNBTixRQUFRUSxHQUFSLENBQVksc0JBQVosRUFBb0M4RCxJQUFJaEYsS0FBeEM7O0FBRUFnRixJQUFJYSxRQUFKLENBQWEsQ0FBYjtBQUNBRSxPQUFPOUUsSUFBUCxDQUFZLElBQVo7O0FBRUE4RSxPQUFPakYsSUFBUDtBQUNBSixRQUFRUSxHQUFSLENBQVksY0FBWixFQUE0QjhELElBQUloRixLQUFoQzs7QUFFQStGLE9BQU8vRSxJQUFQO0FBQ0FOLFFBQVFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCOEQsSUFBSWhGLEtBQWhDOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsImZpbGUiOiJkZW1vL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImxvZ2dlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsb2dnZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibG9nZ2VyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNjIyMjU4ZmVlMTJiZDNiZGZlOCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3N0cmluZ0NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nQ29tcGFyZSk7XG5cbnZhciBfbnVtYmVyQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfbnVtYmVyQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXJDb21wYXJlKTtcblxudmFyIF9kYXRlQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfZGF0ZUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZUNvbXBhcmUpO1xuXG52YXIgX2FycmF5Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYXJyYXlDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FycmF5Q29tcGFyZSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RDb21wYXJlKTtcblxudmFyIF9pcyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfaXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZE9ialR5cGUgPSB0eXBlb2Ygb2xkT2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvbGRPYmopO1xuICAgIHZhciBuZXdPYmpUeXBlID0gdHlwZW9mIG5ld09iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSBuZXdPYmpUeXBlKSByZXR1cm4gKDAsIF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0KShvbGRPYmpUeXBlLCBuZXdPYmpUeXBlKTtcblxuICAgIGlmIChvbGRPYmpUeXBlID09PSAnYm9vbGVhbicpIHJldHVybiAoMCwgX251bWJlckNvbXBhcmUyLmRlZmF1bHQpKE51bWJlcihvbGRPYmopLCBOdW1iZXIobmV3T2JqKSk7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gKDAsIF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gJ29iamVjdCcpIHJldHVybiAxO1xuXG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgRGF0ZSkpIHJldHVybiAoMCwgX2RhdGVDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgQXJyYXkpKSByZXR1cm4gKDAsIF9hcnJheUNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBPYmplY3QpKSByZXR1cm4gKDAsIF9vYmplY3RDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG5cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKSByZXN1bHQgPSAtMTtlbHNlIGlmIChyZXN1bHQgPiAxKSByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5nQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKSByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKSByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKSByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbnVtYmVyQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gZGF0ZUNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwgJiYgbmV3VmFsdWUgPT09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgbmV3VGltZSA9IG5ld1ZhbHVlLmdldFRpbWUoKTtcbiAgICBpZiAob2xkVGltZSA8IG5ld1RpbWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVGltZSA+IG5ld1RpbWUpIHJldHVybiAxO1xuXG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpICYmIGlzTmFOKG5ld1RpbWUpKSByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVGltZSkpIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdUaW1lKSkgcmV0dXJuIC0xO1xuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhdGVDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgdmFyIG9sZE9iakxlbmd0aCA9IG9sZE9iai5sZW5ndGg7XG4gICAgdmFyIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aCkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGRPYmpMZW5ndGg7IGkrKykge1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW2ldLCBuZXdPYmpbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9IDApIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYXJyYXlDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3AgaW4gb2xkT2JqKSB7XG4gICAgICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KHByb3ApKSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIGNvbXBhcmlzb25WYWx1ZSA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3AgaW4gbmV3T2JqKSB7XG4gICAgICAgIGlmICghb2xkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSByZXR1cm4gMTtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShvbGRPYmpbcHJvcF0sIG5ld09ialtwcm9wXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT09IDApIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gb2JqZWN0Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub2JqZWN0Q29tcGFyZSA9IGV4cG9ydHMuYXJyYXlDb21wYXJlID0gZXhwb3J0cy5kYXRlQ29tcGFyZSA9IGV4cG9ydHMubnVtYmVyQ29tcGFyZSA9IGV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IGV4cG9ydHMuY29tcGFyZSA9IGV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxudmFyIF9kaWZmID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIF9kaWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpZmYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGlmZjIuZGVmYXVsdDtcbmV4cG9ydHMuY29tcGFyZSA9IF9jb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5zdHJpbmdDb21wYXJlID0gX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLm51bWJlckNvbXBhcmUgPSBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBfZGF0ZUNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmFycmF5Q29tcGFyZSA9IF9hcnJheUNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykgcmV0dXJuIFR5cGUgPT09IFN0cmluZztcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHJldHVybiBUeXBlID09PSBOdW1iZXI7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdib29sZWFuJykgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KSByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBpcztcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gSWYgdGhlcmUgaXMgbm8gY2hhbmdlIHJldHVybnMgdW5kZWZpbmVkXG4vLyBpZiB0aGVyZSBpcyBhIGNoYW5nZSByZXR1cm5zIHRoZSBsYXRlc3QgdmFsdWVcbmZ1bmN0aW9uIGRpZmYoY29tcGFyZWRWYWx1ZSwgdmFsdWUpIHtcblx0dmFyIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkoY29tcGFyZWRWYWx1ZSwgdmFsdWUpO1xuXG5cdGlmIChjb21wYXJpc29uVmFsdWUgPT09IDApIHtcblx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGlmZjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBME9EZG1aV1V4WkRoaFlqUmtZelF4TURjd09TSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWpiMjF3WVhKbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlqYjIxd1lYSmxMM04wY21sdVowTnZiWEJoY21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMk52YlhCaGNtVXZiblZ0WW1WeVEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWtZWFJsUTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5aGNuSmhlVU52YlhCaGNtVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJsekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlrYVdabUxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJYQmhjbVVpTENKdmJHUlBZbW9pTENKdVpYZFBZbW9pTENKdmJHUlBZbXBVZVhCbElpd2libVYzVDJKcVZIbHdaU0lzSWs1MWJXSmxjaUlzSWtSaGRHVWlMQ0pCY25KaGVTSXNJazlpYW1WamRDSXNJbk4wY21sdVowTnZiWEJoY21VaUxDSnZiR1JXWVd4MVpTSXNJbTVsZDFaaGJIVmxJaXdpYVhORFlYTmxVMlZ1YzJsMGFYWmxJaXdpVTNSeWFXNW5JaXdpZEc5TWIyTmhiR1ZNYjNkbGNrTmhjMlVpTENKeVpYTjFiSFFpTENKc2IyTmhiR1ZEYjIxd1lYSmxJaXdpYm5WdFltVnlRMjl0Y0dGeVpTSXNJbWx6VG1GT0lpd2laR0YwWlVOdmJYQmhjbVVpTENKdmJHUlVhVzFsSWl3aVoyVjBWR2x0WlNJc0ltNWxkMVJwYldVaUxDSmhjbkpoZVVOdmJYQmhjbVVpTENKamIyMXdZWEpwYzI5dVZtRnNkV1VpTENKdmJHUlBZbXBNWlc1bmRHZ2lMQ0pzWlc1bmRHZ2lMQ0p1WlhkUFltcE1aVzVuZEdnaUxDSnBJaXdpYjJKcVpXTjBRMjl0Y0dGeVpTSXNJbkJ5YjNBaUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0ltUmxabUYxYkhRaUxDSnBjeUlzSW05aWFpSXNJbFI1Y0dVaUxDSkNiMjlzWldGdUlpd2lhWE5CY25KaGVTSXNJbVJwWm1ZaUxDSmpiMjF3WVhKbFpGWmhiSFZsSWl3aWRtRnNkV1VpTENKMWJtUmxabWx1WldRaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdPenM3UVVNM1JFRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdRVUZGUVN4VFFVRlRRU3hQUVVGVUxFTkJRV2xDUXl4TlFVRnFRaXhGUVVGNVFrTXNUVUZCZWtJc1JVRkRRVHRCUVVOSkxGRkJRVWxFTEZkQlFWZERMRTFCUVdZc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUkN4VlFVRlZMRWxCUVdRc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUXl4VlFVRlZMRWxCUVdRc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqczdRVUZGU2l4UlFVRlBReXh2UWtGQmIwSkdMRTFCUVhCQ0xIbERRVUZ2UWtFc1RVRkJjRUlzUTBGQlVEdEJRVU5CTEZGQlFVOUhMRzlDUVVGdlFrWXNUVUZCY0VJc2VVTkJRVzlDUVN4TlFVRndRaXhEUVVGUU96dEJRVVZCTEZGQlFVbERMR1ZCUVdWRExGVkJRVzVDTEVWQlEwa3NUMEZCVHl3MlFrRkJZMFFzVlVGQlpDeEZRVUV3UWtNc1ZVRkJNVUlzUTBGQlVEczdRVUZGU2l4UlFVRkpSQ3hsUVVGbExGTkJRVzVDTEVWQlEwa3NUMEZCVHl3MlFrRkJZMFVzVDBGQlQwb3NUVUZCVUN4RFFVRmtMRVZCUVRoQ1NTeFBRVUZQU0N4TlFVRlFMRU5CUVRsQ0xFTkJRVkE3UVVGRFNpeFJRVUZKUXl4bFFVRmxMRkZCUVc1Q0xFVkJRMGtzVDBGQlR5dzJRa0ZCWTBZc1RVRkJaQ3hGUVVGelFrTXNUVUZCZEVJc1EwRkJVRHRCUVVOS0xGRkJRVWxETEdWQlFXVXNVVUZCYmtJc1JVRkRTU3hQUVVGUExEWkNRVUZqUml4TlFVRmtMRVZCUVhOQ1F5eE5RVUYwUWl4RFFVRlFPenRCUVVWS0xGRkJRVWxETEdWQlFXVXNVVUZCYmtJc1JVRkRTU3hQUVVGUExFTkJRVkE3TzBGQlJVb3NVVUZCU1N4clFrRkJSMFlzVFVGQlNDeEZRVUZYU3l4SlFVRllMRU5CUVVvc1JVRkRTU3hQUVVGUExESkNRVUZaVEN4TlFVRmFMRVZCUVc5Q1F5eE5RVUZ3UWl4RFFVRlFPMEZCUTBvc1VVRkJTU3hyUWtGQlIwUXNUVUZCU0N4RlFVRlhUU3hMUVVGWUxFTkJRVW9zUlVGRFNTeFBRVUZQTERSQ1FVRmhUaXhOUVVGaUxFVkJRWEZDUXl4TlFVRnlRaXhGUVVFMFFrWXNUMEZCTlVJc1EwRkJVRHRCUVVOS0xGRkJRVWtzYTBKQlFVZERMRTFCUVVnc1JVRkJWMDhzVFVGQldDeERRVUZLTEVWQlEwa3NUMEZCVHl3MlFrRkJZMUFzVFVGQlpDeEZRVUZ6UWtNc1RVRkJkRUlzUlVGQk9FSkdMRTlCUVRsQ0xFTkJRVkE3TzBGQlJVb3NWMEZCVHl4RFFVRlFPMEZCUTBnN08ydENRVVZqUVN4UE96czdPenM3T3pzN096czdRVU14UTJZN1FVRkRRU3hUUVVGVFV5eGhRVUZVTEVOQlFYVkNReXhSUVVGMlFpeEZRVUZwUTBNc1VVRkJha01zUlVGQk1rTkRMR1ZCUVRORExFVkJRVFJFTzBGQlEzaEVRU3h6UWtGQmEwSXNUMEZCVDBFc1pVRkJVQ3hMUVVFeVFpeFhRVUV6UWl4SFFVRjVRMEVzWlVGQmVrTXNSMEZCTWtRc1MwRkJOMFU3TzBGQlJVRXNVVUZCU1VZc1dVRkJXU3hKUVVGYUxFbEJRVzlDUXl4WlFVRlpMRWxCUVhCRExFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VRc1dVRkJXU3hKUVVGb1FpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRExGbEJRVmtzU1VGQmFFSXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGRlNpeFJRVUZKUXl4bFFVRktMRVZCUVhGQ08wRkJRMnBDUml4dFFrRkJWMGNzVDBGQlQwZ3NVVUZCVUN4RlFVRnBRa2tzYVVKQlFXcENMRVZCUVZnN1FVRkRRVWdzYlVKQlFWZEZMRTlCUVU5R0xGRkJRVkFzUlVGQmFVSkhMR2xDUVVGcVFpeEZRVUZZTzBGQlEwZzdPMEZCUlVRc1VVRkJTVU1zVTBGQlUwWXNUMEZCVDBnc1VVRkJVQ3hGUVVGcFFrMHNZVUZCYWtJc1EwRkJLMEpNTEZGQlFTOUNMRU5CUVdJN1FVRkRRU3hSUVVGSlNTeFRRVUZUTEVOQlFVTXNRMEZCWkN4RlFVTkpRU3hUUVVGVExFTkJRVU1zUTBGQlZpeERRVVJLTEV0QlJVc3NTVUZCU1VFc1UwRkJVeXhEUVVGaUxFVkJRMFJCTEZOQlFWTXNRMEZCVkRzN1FVRkZTaXhYUVVGUFFTeE5RVUZRTzBGQlEwZzdPMnRDUVVWalRpeGhPenM3T3pzN096czdPenM3TzBGRGVFSm1MRk5CUVZOUkxHRkJRVlFzUTBGQmRVSlFMRkZCUVhaQ0xFVkJRV2xEUXl4UlFVRnFReXhGUVVFeVF6czdRVUZGZGtNc1VVRkJTVThzVFVGQlRWSXNVVUZCVGl4TFFVRnRRbEVzVFVGQlRWQXNVVUZCVGl4RFFVRjJRaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbFBMRTFCUVUxU0xGRkJRVTRzUTBGQlNpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsUkxFMUJRVTFRTEZGQlFVNHNRMEZCU2l4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZGQlFVbEVMRmRCUVZkRExGRkJRV1lzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWp0QlFVTktMRkZCUVVsRUxGZEJRVmRETEZGQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhYUVVGUExFTkJRVkE3UVVGRFNEczdhMEpCUldOTkxHRTdPenM3T3pzN096czdPenM3UVVOb1FtWXNVMEZCVTBVc1YwRkJWQ3hEUVVGeFFsUXNVVUZCY2tJc1JVRkJLMEpETEZGQlFTOUNMRVZCUVhsRE96dEJRVVZ5UXl4UlFVRkpSQ3hoUVVGaExFbEJRV0lzU1VGQmNVSkRMR0ZCUVdFc1NVRkJkRU1zUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpSQ3hoUVVGaExFbEJRV3BDTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zWVVGQllTeEpRVUZxUWl4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZGQlFVdFRMRlZCUVZWV0xGTkJRVk5YTEU5QlFWUXNSVUZCWmp0QlFVTkJMRkZCUVV0RExGVkJRVlZZTEZOQlFWTlZMRTlCUVZRc1JVRkJaanRCUVVOQkxGRkJRVWxFTEZWQlFWVkZMRTlCUVdRc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqdEJRVU5LTEZGQlFVbEdMRlZCUVZWRkxFOUJRV1FzUlVGRFNTeFBRVUZQTEVOQlFWQTdPMEZCUlVvc1VVRkJTVW9zVFVGQlRVVXNUMEZCVGl4TFFVRnJRa1lzVFVGQlRVa3NUMEZCVGl4RFFVRjBRaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEtMRTFCUVUxRkxFOUJRVTRzUTBGQlNpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsR0xFMUJRVTFKTEU5QlFVNHNRMEZCU2l4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZkQlFVOHNRMEZCVUR0QlFVTklPenRyUWtGRlkwZ3NWenM3T3pzN096czdPenM3T3p0QlF6TkNaanM3T3pzN08wRkJSVUVzVTBGQlUwa3NXVUZCVkN4RFFVRnpRblJDTEUxQlFYUkNMRVZCUVRoQ1F5eE5RVUU1UWl4RlFVTkJPMEZCUTBrc1VVRkJTVVFzVjBGQlYwTXNUVUZCWml4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxFTEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxETEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZGQlFVbHpRaXgzUWtGQlNqdEJRVU5CTEZGQlFVdERMR1ZCUVdWNFFpeFBRVUZQZVVJc1RVRkJNMEk3UVVGRFFTeFJRVUZMUXl4bFFVRmxla0lzVDBGQlQzZENMRTFCUVROQ08wRkJRMEVzVVVGQlNVUXNaVUZCWlVVc1dVRkJia0lzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWp0QlFVTktMRkZCUVVsR0xHVkJRV1ZGTEZsQlFXNUNMRVZCUTBrc1QwRkJUeXhEUVVGUU96dEJRVVZLTEZOQlFVc3NTVUZCUzBNc1NVRkJTU3hEUVVGa0xFVkJRV2xDUVN4SlFVRkpTQ3haUVVGeVFpeEZRVUZ0UTBjc1IwRkJia01zUlVGQmQwTTdRVUZEY0VNN1FVRkRRVW9zTUVKQlFXdENMSFZDUVVGUmRrSXNUMEZCVHpKQ0xFTkJRVkFzUTBGQlVpeEZRVUZ0UWpGQ0xFOUJRVTh3UWl4RFFVRlFMRU5CUVc1Q0xFTkJRV3hDTzBGQlEwRXNXVUZCU1Vvc2JVSkJRVzFDTEVOQlFYWkNMRVZCUTBrc1QwRkJUMEVzWlVGQlVEdEJRVU5RTzBGQlEwUXNWMEZCVHl4RFFVRlFPMEZCUTBnN08ydENRVVZqUkN4Wk96czdPenM3T3pzN096czdPMEZETlVKbU96czdPenM3UVVGRlFTeFRRVUZUVFN4aFFVRlVMRU5CUVhWQ05VSXNUVUZCZGtJc1JVRkJLMEpETEUxQlFTOUNMRVZCUTBFN1FVRkRTU3hSUVVGSlJDeFhRVUZYUXl4TlFVRm1MRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVUXNWVUZCVlN4SlFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNWVUZCVlN4SlFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3TzBGQlIwb3NVVUZCU1RSQ0xHRkJRVW83UVVGRFFTeFRRVUZMUVN4SlFVRk1MRWxCUVdFM1FpeE5RVUZpTEVWQlEwRTdRVUZEU1N4WlFVRkpMRU5CUVVORExFOUJRVTgyUWl4alFVRlFMRU5CUVhOQ1JDeEpRVUYwUWl4RFFVRk1MRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3UVVGRFVEczdRVUZGUkN4UlFVRkpUaXgzUWtGQlNqdEJRVU5CTEZOQlFVdE5MRWxCUVV3c1NVRkJZVFZDTEUxQlFXSXNSVUZEUVR0QlFVTkpMRmxCUVVrc1EwRkJRMFFzVDBGQlR6aENMR05CUVZBc1EwRkJjMEpFTEVsQlFYUkNMRU5CUVV3c1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNqdEJRVU5CVGl3d1FrRkJhMElzZFVKQlFWRjJRaXhQUVVGUE5rSXNTVUZCVUN4RFFVRlNMRVZCUVhOQ05VSXNUMEZCVHpSQ0xFbEJRVkFzUTBGQmRFSXNRMEZCYkVJN1FVRkRRU3haUVVGSlRpeHZRa0ZCYjBJc1EwRkJlRUlzUlVGRFNTeFBRVUZQUVN4bFFVRlFPMEZCUTFBN1FVRkRSQ3hYUVVGUExFTkJRVkE3UVVGRFNEczdhMEpCUldOTExHRTdPenM3T3pzN096czdPenM3TzBGRGFFTm1PenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdVVUZIV1Vjc1R6dFJRVU5TYUVNc1R6dFJRVU5CVXl4aE8xRkJRMEZSTEdFN1VVRkRRVVVzVnp0UlFVTkJTU3haTzFGQlEwRk5MR0U3T3pzN096czdPenM3T3p0QlEyWktMRk5CUVZOSkxFVkJRVlFzUTBGQldVTXNSMEZCV2l4RlFVRnBRa01zU1VGQmFrSXNSVUZCZFVJN1FVRkRia0lzVVVGQlNVUXNUMEZCVHl4SlFVRlFMRWxCUVdWQkxFOUJRVThzU1VGQk1VSXNSVUZEU1N4UFFVRlBMRXRCUVZBN1FVRkRTaXhSUVVGSlFTeGxRVUZsUXl4SlFVRnVRaXhGUVVOSkxFOUJRVThzU1VGQlVEdEJRVU5LTEZGQlFVbEJMRk5CUVZNelFpeE5RVUZpTEVWQlEwa3NUMEZCVHl4SlFVRlFPenRCUVVWS0xGRkJRVWtzVDBGQlR6QkNMRWRCUVZBc1MwRkJaMElzVVVGQmNFSXNSVUZEU1N4UFFVRlBReXhUUVVGVGRFSXNUVUZCYUVJN1FVRkRTaXhSUVVGSkxFOUJRVTl4UWl4SFFVRlFMRXRCUVdkQ0xGRkJRWEJDTEVWQlEwa3NUMEZCVDBNc1UwRkJVemxDTEUxQlFXaENPMEZCUTBvc1VVRkJTU3hQUVVGUE5rSXNSMEZCVUN4TFFVRm5RaXhUUVVGd1FpeEZRVU5KTEU5QlFVOURMRk5CUVZORExFOUJRV2hDTzBGQlEwb3NVVUZCU1VRc1UwRkJVelZDTEV0QlFXSXNSVUZEU1N4UFFVRlBRU3hOUVVGTk9FSXNUMEZCVGl4RFFVRmpTQ3hIUVVGa0xFTkJRVkE3TzBGQlJVb3NWMEZCVHl4TFFVRlFPMEZCUTBnN08ydENRVVZqUkN4Rk96czdPenM3T3pzN096czdPMEZEY0VKbU96czdPenM3UVVGRlFUdEJRVU5CTzBGQlEwRXNVMEZCVTBzc1NVRkJWQ3hEUVVGalF5eGhRVUZrTEVWQlFUWkNReXhMUVVFM1FpeEZRVUZ0UXp0QlFVTnNReXhMUVVGTmFFSXNhMEpCUVcxQ0xIVkNRVUZSWlN4aFFVRlNMRVZCUVhWQ1F5eExRVUYyUWl4RFFVRjZRanM3UVVGRlFTeExRVUZIYUVJc2IwSkJRVzlDTEVOQlFYWkNMRVZCUVhsQ08wRkJRM2hDWjBJc1ZVRkJVVU1zVTBGQlVqdEJRVU5CT3p0QlFVVkZMRkZCUVU5RUxFdEJRVkE3UVVGRFNEczdhMEpCUldOR0xFa2lMQ0ptYVd4bElqb2liR2xpTDJScFptWXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoY0ltUnBabVpjSWl3Z1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpWkdsbVpsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSmthV1ptWENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2UxeHVJRngwWEhSY2RGeDBZMjl1Wm1sbmRYSmhZbXhsT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJjZEdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z1hIUmNkRngwWEhSblpYUTZJR2RsZEhSbGNseHVJRngwWEhSY2RIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SURZcE8xeHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2WW05dmRITjBjbUZ3SURRNE4yWmxaVEZrT0dGaU5HUmpOREV3TnpBNUlpd2lhVzF3YjNKMElITjBjbWx1WjBOdmJYQmhjbVVnWm5KdmJTQW5MaTl6ZEhKcGJtZERiMjF3WVhKbEoxeHVhVzF3YjNKMElHNTFiV0psY2tOdmJYQmhjbVVnWm5KdmJTQW5MaTl1ZFcxaVpYSkRiMjF3WVhKbEoxeHVhVzF3YjNKMElHUmhkR1ZEYjIxd1lYSmxJR1p5YjIwZ0p5NHZaR0YwWlVOdmJYQmhjbVVuWEc1cGJYQnZjblFnWVhKeVlYbERiMjF3WVhKbElHWnliMjBnSnk0dllYSnlZWGxEYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzlpYW1WamRFTnZiWEJoY21VZ1puSnZiU0FuTGk5dlltcGxZM1JEYjIxd1lYSmxKMXh1YVcxd2IzSjBJR2x6SUdaeWIyMGdKeTR2TGk0dmFYTW5YRzVjYm1aMWJtTjBhVzl1SUdOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3BYRzU3WEc0Z0lDQWdhV1lnS0c5c1pFOWlhaUE5UFQwZ2JtVjNUMkpxS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJR2xtSUNodVpYZFBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnWTI5dWMzUWdJRzlzWkU5aWFsUjVjR1VnUFNCMGVYQmxiMllvYjJ4a1QySnFLVHRjYmlBZ0lDQmpiMjV6ZENBZ2JtVjNUMkpxVkhsd1pTQTlJSFI1Y0dWdlppaHVaWGRQWW1vcE8xeHVYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnSVQwOUlHNWxkMDlpYWxSNWNHVXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkSEpwYm1kRGIyMXdZWEpsS0c5c1pFOWlhbFI1Y0dVc0lHNWxkMDlpYWxSNWNHVXBPMXh1WEc0Z0lDQWdhV1lnS0c5c1pFOWlhbFI1Y0dVZ1BUMDlJQ2RpYjI5c1pXRnVKeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYldKbGNrTnZiWEJoY21Vb1RuVnRZbVZ5S0c5c1pFOWlhaWtzSUU1MWJXSmxjaWh1WlhkUFltb3BLVHRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFWSGx3WlNBOVBUMGdKMjUxYldKbGNpY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkVzFpWlhKRGIyMXdZWEpsS0c5c1pFOWlhaXdnYm1WM1QySnFLVHRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFWSGx3WlNBOVBUMGdKM04wY21sdVp5Y3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkSEpwYm1kRGIyMXdZWEpsS0c5c1pFOWlhaXdnYm1WM1QySnFLVHRjYmx4dUlDQWdJR2xtSUNodmJHUlBZbXBVZVhCbElDRTlQU0FuYjJKcVpXTjBKeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc1Y2JpQWdJQ0JwWmlBb2FYTW9iMnhrVDJKcUxDQkVZWFJsS1NsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHVkRiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxS1R0Y2JpQWdJQ0JwWmlBb2FYTW9iMnhrVDJKcUxDQkJjbkpoZVNrcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCaGNuSmhlVU52YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vc1kyOXRjR0Z5WlNrN1hHNGdJQ0FnYVdZZ0tHbHpLRzlzWkU5aWFpd2dUMkpxWldOMEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHOWlhbVZqZEVOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3NJR052YlhCaGNtVXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlEQTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamIyMXdZWEpsTzF4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5amIyMXdZWEpsTDJOdmJYQmhjbVV1YW5NaUxDSXZMMmgwZEhCek9pOHZaR1YyWld4dmNHVnlMbTF2ZW1sc2JHRXViM0puTDJWdUxWVlRMMlJ2WTNNdlYyVmlMMHBoZG1GVFkzSnBjSFF2VW1WbVpYSmxibU5sTDBkc2IySmhiRjlQWW1wbFkzUnpMMU4wY21sdVp5OXNiMk5oYkdWRGIyMXdZWEpsWEc1bWRXNWpkR2x2YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkZaaGJIVmxMQ0J1WlhkV1lXeDFaU3dnYVhORFlYTmxVMlZ1YzJsMGFYWmxLU0I3WEc0Z0lDQWdhWE5EWVhObFUyVnVjMmwwYVhabElEMGdkSGx3Wlc5bUlHbHpRMkZ6WlZObGJuTnBkR2wyWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCcGMwTmhjMlZUWlc1emFYUnBkbVVnT2lCbVlXeHpaVHRjYmx4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBTQnVkV3hzSUNZbUlHNWxkMVpoYkhWbElEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQTlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9ibVYzVm1Gc2RXVWdQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1WEc0Z0lDQWdhV1lnS0dselEyRnpaVk5sYm5OcGRHbDJaU2tnZTF4dUlDQWdJQ0FnSUNCdmJHUldZV3gxWlNBOUlGTjBjbWx1WnlodmJHUldZV3gxWlNrdWRHOU1iMk5oYkdWTWIzZGxja05oYzJVb0tUdGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdQU0JUZEhKcGJtY29ibVYzVm1Gc2RXVXBMblJ2VEc5allXeGxURzkzWlhKRFlYTmxLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUZOMGNtbHVaeWh2YkdSV1lXeDFaU2t1Ykc5allXeGxRMjl0Y0dGeVpTaHVaWGRXWVd4MVpTazdYRzRnSUNBZ2FXWWdLSEpsYzNWc2RDQThJQzB4S1Z4dUlDQWdJQ0FnSUNCeVpYTjFiSFFnUFNBdE1UdGNiaUFnSUNCbGJITmxJR2xtSUNoeVpYTjFiSFFnUGlBeEtWeHVJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQXhPMXh1WEc0Z0lDQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdjM1J5YVc1blEyOXRjR0Z5WlR0Y2JseHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZjM1J5YVc1blEyOXRjR0Z5WlM1cWN5SXNJbHh1Wm5WdVkzUnBiMjRnYm5WdFltVnlRMjl0Y0dGeVpTaHZiR1JXWVd4MVpTd2dibVYzVm1Gc2RXVXBJSHRjYmx4dUlDQWdJR2xtSUNocGMwNWhUaWh2YkdSV1lXeDFaU2tnSmlZZ2FYTk9ZVTRvYm1WM1ZtRnNkV1VwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2FYTk9ZVTRvYjJ4a1ZtRnNkV1VwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0JwWmlBb2FYTk9ZVTRvYm1WM1ZtRnNkV1VwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNiaUFnSUNCcFppQW9iMnhrVm1Gc2RXVWdQQ0J1WlhkV1lXeDFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBK0lHNWxkMVpoYkhWbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCeVpYUjFjbTRnTUR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdiblZ0WW1WeVEyOXRjR0Z5WlR0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlkyOXRjR0Z5WlM5dWRXMWlaWEpEYjIxd1lYSmxMbXB6SWl3aVhHNW1kVzVqZEdsdmJpQmtZWFJsUTI5dGNHRnlaU2h2YkdSV1lXeDFaU3dnYm1WM1ZtRnNkV1VwSUh0Y2JseHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQTlQVDBnYm5Wc2JDQW1KaUJ1WlhkV1lXeDFaU0E5UFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0c5c1pGWmhiSFZsSUQwOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0JwWmlBb2JtVjNWbUZzZFdVZ1BUMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNibHh1SUNBZ0lIWmhjaUFnYjJ4a1ZHbHRaU0E5SUc5c1pGWmhiSFZsTG1kbGRGUnBiV1VvS1R0Y2JpQWdJQ0IyWVhJZ0lHNWxkMVJwYldVZ1BTQnVaWGRXWVd4MVpTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ2FXWWdLRzlzWkZScGJXVWdQQ0J1WlhkVWFXMWxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc0Z0lDQWdhV1lnS0c5c1pGUnBiV1VnUGlCdVpYZFVhVzFsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JseHVJQ0FnSUdsbUlDaHBjMDVoVGlodmJHUlVhVzFsS1NBbUppQnBjMDVoVGlodVpYZFVhVzFsS1NsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURBN1hHNGdJQ0FnYVdZZ0tHbHpUbUZPS0c5c1pGUnBiV1VwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0JwWmlBb2FYTk9ZVTRvYm1WM1ZHbHRaU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JseHVJQ0FnSUhKbGRIVnliaUF3TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmtZWFJsUTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzlrWVhSbFEyOXRjR0Z5WlM1cWN5SXNJbWx0Y0c5eWRDQmpiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlNjN1hHNWNibVoxYm1OMGFXOXVJR0Z5Y21GNVEyOXRjR0Z5WlNodmJHUlBZbW9zSUc1bGQwOWlhaWxjYm50Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOVBTQnVaWGRQWW1vcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUdsbUlDaHZiR1JQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnYVdZZ0tHNWxkMDlpYWlBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNiaUFnSUNCc1pYUWdZMjl0Y0dGeWFYTnZibFpoYkhWbE8xeHVJQ0FnSUhaaGNpQWdiMnhrVDJKcVRHVnVaM1JvSUQwZ2IyeGtUMkpxTG14bGJtZDBhRHRjYmlBZ0lDQjJZWElnSUc1bGQwOWlha3hsYm1kMGFDQTlJRzVsZDA5aWFpNXNaVzVuZEdnN1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWt4bGJtZDBhQ0E4SUc1bGQwOWlha3hsYm1kMGFDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lHbG1JQ2h2YkdSUFltcE1aVzVuZEdnZ1BpQnVaWGRQWW1wTVpXNW5kR2dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dVhHNGdJQ0FnWm05eUlDaDJZWElnSUdrZ1BTQXdPeUJwSUR3Z2IyeGtUMkpxVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdMeTl5WldOMWNuTnBkbVVnWTI5dGNHRnlhWE52YmlCdlppQmhjbkpoZVNCbGJHVnRaVzUwYzF4dUlDQWdJQ0FnSUNCamIyMXdZWEpwYzI5dVZtRnNkV1VnUFNCamIyMXdZWEpsS0c5c1pFOWlhbHRwWFN3Z2JtVjNUMkpxVzJsZEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0dOdmJYQmhjbWx6YjI1V1lXeDFaU0FoUFNBd0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052YlhCaGNtbHpiMjVXWVd4MVpUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJREE3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmhjbkpoZVVOdmJYQmhjbVU3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2WVhKeVlYbERiMjF3WVhKbExtcHpJaXdpYVcxd2IzSjBJR052YlhCaGNtVWdabkp2YlNBbkxpOWpiMjF3WVhKbEp6dGNibHh1Wm5WdVkzUnBiMjRnYjJKcVpXTjBRMjl0Y0dGeVpTaHZiR1JQWW1vc0lHNWxkMDlpYWlsY2JudGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlQU0J1WlhkUFltb3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2FXWWdLRzVsZDA5aWFpQTlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzVjYmx4dUlDQWdJR3hsZENCd2NtOXdPMXh1SUNBZ0lHWnZjaUFvY0hKdmNDQnBiaUJ2YkdSUFltb3BYRzRnSUNBZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVc1bGQwOWlhaTVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3S1NsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnWTI5dGNHRnlhWE52YmxaaGJIVmxPMXh1SUNBZ0lHWnZjaUFvY0hKdmNDQnBiaUJ1WlhkUFltb3BYRzRnSUNBZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVc5c1pFOWlhaTVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3S1NsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1SUNBZ0lDQWdJQ0F2TDNKbFkzVnljMmwyWlNCamIyMXdZWEpwYzI5dUlHOW1JRzlpYW1WamRDQndjbTl3WlhKMGVWeHVJQ0FnSUNBZ0lDQmpiMjF3WVhKcGMyOXVWbUZzZFdVZ1BTQmpiMjF3WVhKbEtHOXNaRTlpYWx0d2NtOXdYU3dnYm1WM1QySnFXM0J5YjNCZEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0dOdmJYQmhjbWx6YjI1V1lXeDFaU0FoUFQwZ01DbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjIxd1lYSnBjMjl1Vm1Gc2RXVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUF3TzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdiMkpxWldOMFEyOXRjR0Z5WlR0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlkyOXRjR0Z5WlM5dlltcGxZM1JEYjIxd1lYSmxMbXB6SWl3aWFXMXdiM0owSUhOMGNtbHVaME52YlhCaGNtVWdabkp2YlNBbkxpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVVuWEc1cGJYQnZjblFnYm5WdFltVnlRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdmJuVnRZbVZ5UTI5dGNHRnlaU2RjYm1sdGNHOXlkQ0JrWVhSbFEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2WkdGMFpVTnZiWEJoY21VblhHNXBiWEJ2Y25RZ1lYSnlZWGxEYjIxd1lYSmxJR1p5YjIwZ0p5NHZZMjl0Y0dGeVpTOWhjbkpoZVVOdmJYQmhjbVVuWEc1cGJYQnZjblFnYjJKcVpXTjBRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdmIySnFaV04wUTI5dGNHRnlaU2RjYm1sdGNHOXlkQ0JqYjIxd1lYSmxJR1p5YjIwZ0p5NHZZMjl0Y0dGeVpTOWpiMjF3WVhKbEoxeHVhVzF3YjNKMElHUnBabVlnWm5KdmJTQW5MaTlrYVdabUoxeHVYRzVsZUhCdmNuUWdlMXh1SUNBZ0lHUnBabVlnWVhNZ1pHVm1ZWFZzZEN4Y2JpQWdJQ0JqYjIxd1lYSmxMRnh1SUNBZ0lITjBjbWx1WjBOdmJYQmhjbVVzWEc0Z0lDQWdiblZ0WW1WeVEyOXRjR0Z5WlN4Y2JpQWdJQ0JrWVhSbFEyOXRjR0Z5WlN4Y2JpQWdJQ0JoY25KaGVVTnZiWEJoY21Vc1hHNGdJQ0FnYjJKcVpXTjBRMjl0Y0dGeVpWeHVmVnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlwYm1SbGVDNXFjeUlzSW1aMWJtTjBhVzl1SUdsektHOWlhaXdnVkhsd1pTa2dlMXh1SUNBZ0lHbG1JQ2h2WW1vZ1BUMGdiblZzYkNCOGZDQnZZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUdsbUlDaHZZbW9nYVc1emRHRnVZMlZ2WmlCVWVYQmxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0JwWmlBb1ZIbHdaU0E5UFQwZ1QySnFaV04wS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNibHh1SUNBZ0lHbG1JQ2gwZVhCbGIyWW9iMkpxS1NBOVBUMGdKM04wY21sdVp5Y3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlVlWEJsSUQwOVBTQlRkSEpwYm1jN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2Wmlodlltb3BJRDA5UFNBbmJuVnRZbVZ5SnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZSNWNHVWdQVDA5SUU1MWJXSmxjanRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1LRzlpYWlrZ1BUMDlJQ2RpYjI5c1pXRnVKeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlI1Y0dVZ1BUMDlJRUp2YjJ4bFlXNDdYRzRnSUNBZ2FXWWdLRlI1Y0dVZ1BUMDlJRUZ5Y21GNUtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1FYSnlZWGt1YVhOQmNuSmhlU2h2WW1vcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCcGN6dGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhWE11YW5NaUxDSnBiWEJ2Y25RZ1kyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2WTI5dGNHRnlaU2M3WEc1Y2JpOHZJRWxtSUhSb1pYSmxJR2x6SUc1dklHTm9ZVzVuWlNCeVpYUjFjbTV6SUhWdVpHVm1hVzVsWkZ4dUx5OGdhV1lnZEdobGNtVWdhWE1nWVNCamFHRnVaMlVnY21WMGRYSnVjeUIwYUdVZ2JHRjBaWE4wSUhaaGJIVmxYRzVtZFc1amRHbHZiaUJrYVdabUtHTnZiWEJoY21Wa1ZtRnNkV1VzSUhaaGJIVmxLWHRjYmx4MFkyOXVjM1FnWTI5dGNHRnlhWE52YmxaaGJIVmxJRDBnSUdOdmJYQmhjbVVvWTI5dGNHRnlaV1JXWVd4MVpTd2dkbUZzZFdVcE8xeHVYRzVjZEdsbUtHTnZiWEJoY21semIyNVdZV3gxWlNBOVBUMGdNQ2w3WEc1Y2RGeDBkbUZzZFdVZ1BTQjFibVJsWm1sdVpXUTdYRzVjZEgxY2JseHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWkdsbVpqdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZaR2xtWmk1cWN5SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IERpZmZMb2dnZXIgZnJvbSAnLi9EaWZmTG9nZ2VyJztcblxuZXhwb3J0IHtcblx0TG9nZ2VyIGFzIGRlZmF1bHQsXG5cdERpZmZMb2dnZXJcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBkaWZmIGZyb20gJ2RpZmYnO1xuaW1wb3J0IExvZ0VudHJ5IGZyb20gJy4vTG9nRW50cnknO1xuXG5mdW5jdGlvbiBhcHBseURpZmYoc3RlcHMsIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHtjb250ZXh0LCB1bmRvTG9nLCByZWRvTG9nLCBnZXR0ZXIsIHNldHRlcn0gPSB0aGlzO1xuXHRsZXQgeyBwcmV2U3RhdGUgfSA9IHRoaXM7XG5cdGNvbnN0IGFic1N0ZXBzID0gTWF0aC5hYnMoc3RlcHMpO1xuXHRsZXQgc3RlcHNSZW1haW5pbmcgPSBNYXRoLm1pbihhYnNTdGVwcywgc3RlcHMgPCAwID8gdW5kb0xvZy5sZW5ndGggOiByZWRvTG9nLmxlbmd0aCk7XG5cdGlmIChzdGVwc1JlbWFpbmluZyA+IDApIHtcblx0XHRsZXQgbG9nRW50cnksIGRpZmY7XG5cdFx0d2hpbGUgKHN0ZXBzUmVtYWluaW5nLS0gPiAwKSB7XG5cdFx0XHRpZiAoc3RlcHMgPCAwKSB7IC8vIHVuZG9cblx0XHRcdFx0bG9nRW50cnkgPSB1bmRvTG9nLnBvcCgpO1xuXHRcdFx0XHRyZWRvTG9nLnVuc2hpZnQobG9nRW50cnkpO1xuXHRcdFx0XHRkaWZmID0gbG9nRW50cnkucHJldjtcblx0XHRcdH0gZWxzZSB7IC8vcmVkb1xuXHRcdFx0XHRsb2dFbnRyeSA9IHJlZG9Mb2cuc2hpZnQoKTtcblx0XHRcdFx0dW5kb0xvZy5wdXNoKGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5Lm5leHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGVwc1JlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnByZXZTdGF0ZSA9IGRpZmYudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHNpbmNlIHByaW1pdGl2ZSBhcmUgaW1tdXRhYmxlIHdlIGRvbid0IGNhbGwgdGhlbSBpbiBzcHJlYWQgZGVjbGFyYXRpb24gYWJvdmVcblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gdHJ1ZTtcblx0XHQvLyBub3cgYWZ0ZXIgcmVhY2hpbmcgdGhlIExvZyBlbnRyeSBhcHBseSB0aGUgZGlmZiB0byBjdXJyZW50IHN0YXRlXG5cdFx0c2V0dGVyLmNhbGwoY29udGV4dCwgZGlmZiwgY2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHNpbmNlIHByaW1pdGl2ZSBhcmUgaW1tdXRhYmxlIHdlIGRvbid0IGNhbGwgdGhlbSBpbiBzcHJlYWQgZGVjbGFyYXRpb24gYWJvdmVcblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gZmFsc2U7XG5cdH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblx0Y29uc3RydWN0b3Ioc2F2ZUNhbGxiYWNrKXtcblx0XHR0aGlzLmNvbnRleHQ7XG5cdFx0dGhpcy5nZXR0ZXI7XG5cdFx0dGhpcy5zZXR0ZXI7XG5cdFx0dGhpcy5kaWZmTWV0aG9kO1xuXG5cdFx0dGhpcy51bmRvTG9nID0gW107XG5cdFx0dGhpcy5yZWRvTG9nID0gW107XG5cblx0XHR0aGlzLnByZXZTdGF0ZSA9IG51bGw7XG5cdFx0dGhpcy5uZXh0SWQgPSAwO1xuXG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrO1xuXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHRcdHRoaXMuZW5hYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5Mb2dnZXIucHJvdG90eXBlLnNldENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBnZXR0ZXIsIHNldHRlciwgZGlmZk1ldGhvZCl7XG5cdGlmKCFnZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBnZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZighc2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgc2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMuZ2V0dGVyID0gZ2V0dGVyO1xuXHR0aGlzLnNldHRlciA9IHNldHRlcjtcblx0dGhpcy5kaWZmTWV0aG9kID0gZGlmZk1ldGhvZDtcblx0dGhpcy5wcmV2U3RhdGUgPSBnZXR0ZXIuY2FsbChjb250ZXh0KTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2V0U2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oc2F2ZUNhbGxiYWNrKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrXG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnJlbW92ZVNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2spe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdGFwcGx5RGlmZi5jYWxsKHRoaXMsIC1zdGVwcywgY2FsbGJhY2spO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZWRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCBzdGVwcywgY2FsbGJhY2spO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5kaWZmQXBwbGllZCl7XG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKHRoaXMuZW5hYmxlKXtcblx0XHRsZXQgbG9nO1xuXHRcdGxldCBnZXREaWZmID0gdGhpcy5kaWZmTWV0aG9kID8gdGhpcy5kaWZmTWV0aG9kIDogZGlmZjtcblx0XHRpZih0aGlzLmNvbnRleHQpe1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMuY29udGV4dCk7XG5cdFx0XHRjb25zdCBkaWZmT2JqZWN0ID0gZ2V0RGlmZih0aGlzLnByZXZTdGF0ZSwgc3RhdGUpO1xuXHRcdFx0Ly8gQ2hhbmdlIG9jY3VycmVkIGxvZyB0aGVtXG5cdFx0XHRpZiAoZGlmZk9iamVjdC5jdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bG9nID0gbmV3IExvZ0VudHJ5KHRoaXMubmV4dElkKyssIGRpZmZPYmplY3QuY3VycmVudCwgZGlmZk9iamVjdC5wcmV2KTtcblx0XHRcdFx0aWYodGhpcy5yZWRvTG9nLmxlbmd0aCAhPT0gMCl7XG5cdFx0XHRcdFx0Y29uc3QgbmV4dExvZyA9IHRoaXMucmVkb0xvZ1swXTtcblx0XHRcdFx0XHRuZXh0TG9nLnByZXYgPSBsb2cubmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnVuZG9Mb2cucHVzaChsb2cpO1xuXHRcdFx0XHR0aGlzLnByZXZTdGF0ZSA9IHN0YXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGxvZyk7XG5cdH1cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ2dlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ0VudHJ5IHtcblx0Y29uc3RydWN0b3IoaWQsIG5leHQsIHByZXYpe1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5leHQgPSBuZXh0O1xuXHRcdHRoaXMucHJldiA9IHByZXY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTG9nRW50cnkuanMiLCJpbXBvcnQgUGl2b3RlZExpbmtlZExpc3QgZnJvbSAncGl2b3RlZC1saW5rZWQtbGlzdCc7XG5pbXBvcnQge2NvbWJpbmVEaWZmfSBmcm9tICcuL2hlbHBlcic7XG5cbmZ1bmN0aW9uIHByZUluc2VydChjdXJyZW50TG9nLCBuZXdMb2csIG5leHRMb2cpe1xuXHRpZihjdXJyZW50TG9nLCBuZXdMb2csIG5leHRMb2cpIHsgLy8gbWlkZGxlIGluc2VydFxuXHRcdGNvbnN0IG5ld0xvZ0ZvcndhcmREaWZmID0gbmV3TG9nLmVsZW1lbnQuZm9yd2FyZDtcblx0XHRjb25zdCBuZXdMb2dCYWNrd2FyZERpZmYgPSBuZXdMb2cuZWxlbWVudC5iYWNrd2FyZDtcblx0XHRjb25zdCBuZXh0TG9nRm9yd2FyZERpZmYgPSBuZXh0TG9nLmVsZW1lbnQuZm9yd2FyZDtcblx0XHRjb25zdCBuZXh0TG9nQmFja3dhcmREaWZmID0gbmV4dExvZy5lbGVtZW50LmJhY2t3YXJkO1xuXHRcdGNvbnN0IG5ld0NvbWJpbmVkRm9yd2FyZERpZmYgPSBjb21iaW5lRGlmZihuZXh0TG9nQmFja3dhcmREaWZmLnZhbHVlLCBuZXdMb2dGb3J3YXJkRGlmZi52YWx1ZSwgdGhpcy5vYmplY3RWZXJpZmllciwgdHJ1ZSlcblx0XHRjb25zdCBuZXdDb21iaW5lZEJhY2t3YXJkRGlmZiA9IGNvbWJpbmVEaWZmKG5leHRMb2dGb3J3YXJkRGlmZi52YWx1ZSwgbmV3TG9nQmFja3dhcmREaWZmLnZhbHVlLCB0aGlzLm9iamVjdFZlcmlmaWVyLCB0cnVlKVxuXG5cdFx0bmV3TG9nLmZvcndhcmQgPSBuZXdDb21iaW5lZEZvcndhcmREaWZmO1xuXHRcdG5ld0xvZy5iYWNrd2FyZCA9IG5ld0NvbWJpbmVkQmFja3dhcmREaWZmO1xuXHR9XG5cbn1cblxuZnVuY3Rpb24ganVtcChzdGVwcyxkaXJlY3Rpb24sIGxvZ0xpc3Qsb2JqZWN0VmVyaWZpZXIpe1xuXHRsZXQgbG9nRW50cnksIGJhc2VEaWZmO1xuXHR3aGlsZShzdGVwcyA+IDApe1xuXHRcdGlmKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyl7XG5cdFx0XHRsb2dFbnRyeSA9IGxvZ0xpc3QucGl2b3Q7XG5cdFx0XHRsb2dMaXN0LnNoaWZ0UGl2b3QoLTEpO1xuXHRcdH0gZWxzZSBpZihkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyl7XG5cdFx0XHRsb2dFbnRyeSA9IGxvZ0xpc3Quc2hpZnRQaXZvdCgxKTtcblx0XHR9XG5cdFx0Y29uc3QgZm9yd2FyZEJhY2t3YXJkRGlmZiA9IGxvZ0VudHJ5LmVsZW1lbnQ7XG5cdFx0Y29uc3QgZGlmZlN0YXRlID0gZm9yd2FyZEJhY2t3YXJkRGlmZltkaXJlY3Rpb25dO1xuXHRcdGNvbnN0IGRpZmZWYWx1ZSA9IGRpZmZTdGF0ZS52YWx1ZSA7XG5cdFx0Y29uc3QgaXNMb2dnYWJsZUNvbGxlY3Rpb25PYmplY3QgPSBkaWZmU3RhdGVbJ2NsYXNzRGVmTmFtZSddID09PSBvYmplY3RWZXJpZmllcjtcblx0XHRiYXNlRGlmZiA9IGNvbWJpbmVEaWZmKGJhc2VEaWZmLCBkaWZmVmFsdWUsIG9iamVjdFZlcmlmaWVyLCBpc0xvZ2dhYmxlQ29sbGVjdGlvbk9iamVjdCk7XG5cdFx0c3RlcHMgPSBzdGVwcyAtIDE7XG5cdH1cblx0cmV0dXJuIGJhc2VEaWZmO1xufVxuXG5mdW5jdGlvbiBzaGlmdEFuZEFwcGx5TG9nKHN0ZXBzLHR5cGUsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcikge1xuXHRjb25zdCB7Y29udGV4dCwgbG9nTGlzdCB9ID0gdGhpcztcblx0aWYob2JqZWN0VmVyaWZpZXIpe1xuXHRcdHRoaXMub2JqZWN0VmVyaWZpZXIgPSBvYmplY3RWZXJpZmllcjtcblx0fVxuXHRsZXQgbG9nRW50cnksIGJhc2VEaWZmO1xuXHRpZigodHlwZSA9PT0gXCJ1bmRvXCIpKXtcblx0XHRiYXNlRGlmZiA9IGp1bXAoLXN0ZXBzLCdiYWNrd2FyZCcsbG9nTGlzdCxvYmplY3RWZXJpZmllcik7XG5cdH0gZWxzZSB7XG5cdFx0YmFzZURpZmYgPSBqdW1wKHN0ZXBzLCdmb3J3YXJkJyxsb2dMaXN0LG9iamVjdFZlcmlmaWVyKTtcblx0fVxuXG5cdGNvbnN0IGRpZmZMb2dnZXJJbnN0YW5jZSA9IHRoaXM7XG5cdGNvbnRleHQuYXBwbHlEaWZmLmNhbGwoY29udGV4dCwgYmFzZURpZmYsIGZ1bmN0aW9uKCl7XG5cdFx0dXBkYXRlTGFzdEFjdGl2ZVN0YXRlLmNhbGwoZGlmZkxvZ2dlckluc3RhbmNlKTtcblx0XHRjYWxsYmFjaygpXG5cdH0pO1xuXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVMYXN0QWN0aXZlU3RhdGUoKXtcblx0dGhpcy5sYXN0QWN0aXZlU3RhdGUgPSB0aGlzLmNvbnRleHQuZ2V0U3RhdGUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkxvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIG9iamVjdFZlcmlmaWVyKXtcblx0XHRpZighY29udGV4dCl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29udGV4dCBjYW50IGJlIG51bGxcIik7XG5cdFx0fVxuXG5cdFx0aWYoIWNvbnRleHQuYXBwbHlEaWZmKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb250ZXh0IG5lZWRzIHRvIGltcGxlbWVudCBhcHBseURpZmYgbWV0aG9kXCIpO1xuXHRcdH1cblxuXHRcdGlmKCFjb250ZXh0LmdldFN0YXRlKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb250ZXh0IG5lZWRzIHRvIGltcGxlbWVudCBnZXRTdGF0ZSBtZXRob2RcIik7XG5cdFx0fVxuXG5cdFx0aWYoIWNvbnRleHQuZ2V0RGlmZil7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29udGV4dCBuZWVkcyB0byBpbXBsZW1lbnQgZ2V0RGlmZiBtZXRob2RcIik7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuXHRcdHRoaXMubG9nTGlzdCA9IG5ldyBQaXZvdGVkTGlua2VkTGlzdChbXSk7XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gbnVsbDtcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cdFx0dGhpcy5vYmplY3RWZXJpZmllciA9IG9iamVjdFZlcmlmaWVyO1xuXG5cdFx0dXBkYXRlTGFzdEFjdGl2ZVN0YXRlLmNhbGwodGhpcylcblx0XHR0aGlzLm9iamVjdFZlcmlmaWVyO1xuXHRcdHByZUluc2VydCA9IHByZUluc2VydC5iaW5kKHRoaXMpO1xuXHR9XG59XG5cblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuc2V0U2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oc2F2ZUNhbGxiYWNrKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrXG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdHNoaWZ0QW5kQXBwbHlMb2cuY2FsbCh0aGlzLCAtc3RlcHMsIFwidW5kb1wiLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdHNoaWZ0QW5kQXBwbHlMb2cuY2FsbCh0aGlzLCBzdGVwcywgXCJyZWRvXCIsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcik7XG59O1xuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGZvcndhcmRCYWNrd2FyZERpZmY7XG5cdFx0aWYodGhpcy5jb250ZXh0KXtcblx0XHRcdGZvcndhcmRCYWNrd2FyZERpZmYgPSB0aGlzLmNvbnRleHQuZ2V0RGlmZih0aGlzLmxhc3RBY3RpdmVTdGF0ZSwgdHJ1ZSk7XG5cdFx0XHRjb25zdCB7Zm9yd2FyZCwgYmFja3dhcmR9ID0gZm9yd2FyZEJhY2t3YXJkRGlmZjtcblxuXHRcdFx0aWYgKHR5cGVvZiBmb3J3YXJkID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiYWNrd2FyZCA9PT0gXCJvYmplY3RcIikgeyAvLyBDaGFuZ2Ugb2NjdXJyZWQgbG9nIHRoZW1cblx0XHRcdFx0dGhpcy5sb2dMaXN0Lmluc2VydChmb3J3YXJkQmFja3dhcmREaWZmLCBwcmVJbnNlcnQpO1xuXHRcdFx0XHR1cGRhdGVMYXN0QWN0aXZlU3RhdGUuY2FsbCh0aGlzKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGZvcndhcmRCYWNrd2FyZERpZmYpO1xuXHR9XG59O1xuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLmdldEN1cnJlbnRMb2cgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmxvZ0xpc3QgKXtcblx0XHRyZXR1cm4gdGhpcy5sb2dMaXN0LmdldFBpdm90RWxlbWVudCgpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmxvZ0xpc3QucmVzZXQoKTtcbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRGlmZkxvZ2dlci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlua2VkbGlzdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX05vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQaXZvdGVkTGlua2VkTGlzdCA9IGZ1bmN0aW9uIFBpdm90ZWRMaW5rZWRMaXN0KGFycmF5KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXZvdGVkTGlua2VkTGlzdCk7XG5cblx0dGhpcy5waXZvdCA9IG51bGw7XG5cdHRoaXMuaGVhZCA9IG51bGw7XG5cdHRoaXMudGFpbCA9IG51bGw7XG5cdHRoaXMubGVuZ3RoID0gMDtcblx0YXJyYXkgJiYgdGhpcy5jcmVhdGUoYXJyYXkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGl2b3RlZExpbmtlZExpc3Q7XG5cblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcmVJbnNlcnQsIHBvc3RJbnNlcnQpIHtcblx0dmFyIG5ld05vZGUgPSBuZXcgX05vZGUyLmRlZmF1bHQoZWxlbWVudCk7XG5cdHRoaXMubGVuZ3RoKys7XG5cblx0dmFyIGN1cnJlbnQgPSB2b2lkIDAsXG5cdCAgICBuZXh0ID0gdm9pZCAwO1xuXG5cdGlmICghdGhpcy5waXZvdCkge1xuXHRcdC8vIGluc2VydGluZyBhcyBmaXJzdCBlbGVtZW50XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChuZXdOb2RlKTtcblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHR0aGlzLmhlYWQgPSBuZXdOb2RlO1xuXHRcdHBvc3RJbnNlcnQgJiYgcG9zdEluc2VydChuZXdOb2RlKTtcblx0fSBlbHNlIGlmICh0aGlzLnBpdm90Lm5leHQpIHtcblx0XHQvLyBpbnNlcnRpbmcgaW4gbWlkZGxlXG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0bmV4dCA9IHRoaXMucGl2b3QubmV4dDtcblx0XHRwcmVJbnNlcnQgJiYgcHJlSW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUsIG5leHQpO1xuXHRcdG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUsIG5leHQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGluc2VydGluZyBhcyBsYXN0IGVsZW1lbnRcblx0XHRjdXJyZW50ID0gdGhpcy5waXZvdDtcblx0XHRwcmVJbnNlcnQgJiYgcHJlSW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUpO1xuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMudGFpbCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KGN1cnJlbnQsIG5ld05vZGUpO1xuXHR9XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdCA9IGZ1bmN0aW9uIChzaGlmdCkge1xuXHR2YXIgY3VycmVudCA9IHRoaXMucGl2b3Q7XG5cblx0dmFyIHJpZ2h0U2hpZnQgPSB2b2lkIDA7XG5cdGlmIChzaGlmdCA+PSAwKSB7XG5cdFx0cmlnaHRTaGlmdCA9IHRydWU7XG5cdH1cblxuXHR3aGlsZSAoc2hpZnQgIT09IDApIHtcblx0XHRpZiAocmlnaHRTaGlmdCkge1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dDtcblx0XHRcdGN1cnJlbnQgPT09IHRoaXMudGFpbCA/IHNoaWZ0ID0gMCA6IHNoaWZ0LS07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnByZXY7XG5cdFx0XHRjdXJyZW50ID09PSB0aGlzLmhlYWQgPyBzaGlmdCA9IDAgOiBzaGlmdCsrO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMucGl2b3QgPSBjdXJyZW50O1xuXG5cdHJldHVybiB0aGlzLnBpdm90O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0UGl2b3RUb0hlYWQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMucGl2b3QgPSB0aGlzLmhlYWQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvVGFpbCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IHRoaXMudGFpbDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHRhcnJheS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRfdGhpcy5pbnNlcnQoZWxlbWVudCk7XG5cdH0pO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnRyYXZlcnNlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCByaWdodFRvTGVmdCkge1xuXHR2YXIgY3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gdGhpcy50YWlsIDogdGhpcy5oZWFkO1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNhbGxiYWNrKGN1cnJlbnQuZWxlbWVudCk7XG5cdFx0Y3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gY3VycmVudC5wcmV2IDogY3VycmVudC5uZXh0O1xuXHR9XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGFycmF5ID0gW107XG5cdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRhcnJheS5wdXNoKGVsZW1lbnQpO1xuXHR9KTtcblx0cmV0dXJuIGFycmF5O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmdldFBpdm90RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMucGl2b3QpIHtcblx0XHRyZXR1cm4gdGhpcy5waXZvdC5lbGVtZW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBuZXh0ID0gdGhpcy5waXZvdC5uZXh0ID8gdGhpcy5waXZvdC5uZXh0IDogdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IG5leHQ7XG5cdHJldHVybiBuZXh0O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBwcmV2ID0gdGhpcy5waXZvdC5wcmV2ID8gdGhpcy5waXZvdC5wcmV2IDogdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IHByZXY7XG5cdHJldHVybiBwcmV2O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmlzUGl2b3RIZWFkID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5waXZvdCA9PT0gdGhpcy5oZWFkO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmlzUGl2b3RUYWlsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5waXZvdCA9PT0gdGhpcy50YWlsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gbnVsbDtcblx0dGhpcy5oZWFkID0gbnVsbDtcblx0dGhpcy50YWlsID0gbnVsbDtcblx0dGhpcy5sZW5ndGggPSAwO1xufTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOb2RlID0gZnVuY3Rpb24gTm9kZShlbGVtZW50KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlKTtcblxuXHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXHR0aGlzLm5leHQgPSBudWxsO1xuXHR0aGlzLnByZXYgPSBudWxsO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm9kZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBek1URXpPRFUyWlRrNE5UTXlOakF6TmpFMFpTSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMDV2WkdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdsMmIzUmxaRXhwYm10bFpFeHBjM1FpTENKaGNuSmhlU0lzSW5CcGRtOTBJaXdpYUdWaFpDSXNJblJoYVd3aUxDSnNaVzVuZEdnaUxDSmpjbVZoZEdVaUxDSndjbTkwYjNSNWNHVWlMQ0pwYm5ObGNuUWlMQ0psYkdWdFpXNTBJaXdpY0hKbFNXNXpaWEowSWl3aWNHOXpkRWx1YzJWeWRDSXNJbTVsZDA1dlpHVWlMQ0pqZFhKeVpXNTBJaXdpYm1WNGRDSXNJbkJ5WlhZaUxDSnphR2xtZEZCcGRtOTBJaXdpYzJocFpuUWlMQ0p5YVdkb2RGTm9hV1owSWl3aWMyaHBablJRYVhadmRGUnZTR1ZoWkNJc0luTm9hV1owVUdsMmIzUlViMVJoYVd3aUxDSnRZWEFpTENKMGNtRjJaWEp6WlNJc0ltTmhiR3hpWVdOcklpd2ljbWxuYUhSVWIweGxablFpTENKMGIwRnljbUY1SWl3aWNIVnphQ0lzSW1kbGRGQnBkbTkwUld4bGJXVnVkQ0lzSW1selVHbDJiM1JJWldGa0lpd2lhWE5RYVhadmRGUmhhV3dpTENKeVpYTmxkQ0lzSWs1dlpHVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE4wUkJPenM3T3pzN096dEpRVU54UWtFc2FVSXNSMEZEY0VJc01rSkJRVmxETEV0QlFWb3NSVUZCYTBJN1FVRkJRVHM3UVVGRGFrSXNUVUZCUzBNc1MwRkJUQ3hIUVVGaExFbEJRV0k3UVVGRFFTeE5RVUZMUXl4SlFVRk1MRWRCUVZrc1NVRkJXanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1RVRkJTME1zVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVVvc1ZVRkJVeXhMUVVGTFN5eE5RVUZNTEVOQlFWbE1MRXRCUVZvc1EwRkJWRHRCUVVOQkxFTTdPMnRDUVZCdFFrUXNhVUk3T3p0QlFWVnlRa0VzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWtNc1RVRkJOVUlzUjBGQmNVTXNWVUZCVTBNc1QwRkJWQ3hGUVVGclFrTXNVMEZCYkVJc1JVRkJOa0pETEZWQlFUZENMRVZCUVhkRE8wRkJRelZGTEV0QlFVMURMRlZCUVZVc2JVSkJRVk5JTEU5QlFWUXNRMEZCYUVJN1FVRkRRU3hOUVVGTFNpeE5RVUZNT3p0QlFVVkJMRXRCUVVsUkxHZENRVUZLTzBGQlFVRXNTMEZCWVVNc1lVRkJZanM3UVVGRlFTeExRVUZITEVOQlFVTXNTMEZCUzFvc1MwRkJWQ3hGUVVGbE8wRkJRVVU3UVVGRGFFSlJMR1ZCUVdGQkxGVkJRVlZGTEU5QlFWWXNRMEZCWWp0QlFVTkJMRTlCUVV0V0xFdEJRVXdzUjBGQllWVXNUMEZCWWp0QlFVTkJMRTlCUVV0VUxFbEJRVXdzUjBGQldWTXNUMEZCV2p0QlFVTkJSQ3huUWtGQlkwRXNWMEZCVjBNc1QwRkJXQ3hEUVVGa08wRkJRMEVzUlVGTVJDeE5RVXRQTEVsQlFVY3NTMEZCUzFZc1MwRkJUQ3hEUVVGWFdTeEpRVUZrTEVWQlFXMUNPMEZCUVVVN1FVRkRNMEpFTEZsQlFWVXNTMEZCUzFnc1MwRkJaanRCUVVOQldTeFRRVUZQTEV0QlFVdGFMRXRCUVV3c1EwRkJWMWtzU1VGQmJFSTdRVUZEUVVvc1pVRkJZVUVzVlVGQlZVY3NUMEZCVml4RlFVRnJRa1FzVDBGQmJFSXNSVUZCTUVKRkxFbEJRVEZDTEVOQlFXSTdRVUZEUVVZc1ZVRkJVVVVzU1VGQlVpeEhRVUZsUkN4UlFVRlJReXhKUVVGMlFqdEJRVU5CUml4VlFVRlJSeXhKUVVGU0xFZEJRV1ZHTEU5QlFXWTdPMEZCUlVGQkxGVkJRVkZETEVsQlFWSXNSMEZCWlVZc1QwRkJaanRCUVVOQlJTeFBRVUZMUXl4SlFVRk1MRWRCUVZsSUxFOUJRVm83TzBGQlJVRXNUMEZCUzFZc1MwRkJUQ3hIUVVGaFZTeFBRVUZpTzBGQlEwRkVMR2RDUVVGalFTeFhRVUZYUlN4UFFVRllMRVZCUVcxQ1JDeFBRVUZ1UWl4RlFVRXlRa1VzU1VGQk0wSXNRMEZCWkR0QlFVTkJMRVZCV2swc1RVRlpRVHRCUVVGRk8wRkJRMUpFTEZsQlFWVXNTMEZCUzFnc1MwRkJaanRCUVVOQlVTeGxRVUZoUVN4VlFVRlZSeXhQUVVGV0xFVkJRV3RDUkN4UFFVRnNRaXhEUVVGaU8wRkJRMEZETEZWQlFWRkRMRWxCUVZJc1IwRkJaVVlzVDBGQlpqdEJRVU5CUVN4VlFVRlJSeXhKUVVGU0xFZEJRV1ZHTEU5QlFXWTdPMEZCUlVFc1QwRkJTMWdzUzBGQlRDeEhRVUZoVlN4UFFVRmlPMEZCUTBFc1QwRkJTMUlzU1VGQlRDeEhRVUZaVVN4UFFVRmFPMEZCUTBGRUxHZENRVUZqUVN4WFFVRlhSU3hQUVVGWUxFVkJRVzFDUkN4UFFVRnVRaXhEUVVGa08wRkJRMEU3UVVGRlJDeERRV3hEUkRzN1FVRnZRMEZhTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKVExGVkJRVFZDTEVkQlFYbERMRlZCUVZORExFdEJRVlFzUlVGQlpUdEJRVU4yUkN4TFFVRkpTaXhWUVVGVkxFdEJRVXRZTEV0QlFXNUNPenRCUVVWQkxFdEJRVWxuUWl4dFFrRkJTanRCUVVOQkxFdEJRVWRFTEZOQlFWTXNRMEZCV2l4RlFVRmpPMEZCUTJKRExHVkJRV0VzU1VGQllqdEJRVU5CT3p0QlFVVkVMRkZCUVUxRUxGVkJRVlVzUTBGQmFFSXNSVUZCYTBJN1FVRkRha0lzVFVGQlIwTXNWVUZCU0N4RlFVRmpPMEZCUTJKTUxHRkJRVlZCTEZGQlFWRkRMRWxCUVd4Q08wRkJRME5FTEdWQlFWa3NTMEZCUzFRc1NVRkJiRUlzUjBGQk1rSmhMRkZCUVZFc1EwRkJia01zUjBGQmQwTkJMRTlCUVhoRE8wRkJRMEVzUjBGSVJDeE5RVWRQTzBGQlEwNUtMR0ZCUVZWQkxGRkJRVkZGTEVsQlFXeENPMEZCUTBOR0xHVkJRVmtzUzBGQlMxWXNTVUZCYkVJc1IwRkJNa0pqTEZGQlFWRXNRMEZCYmtNc1IwRkJkME5CTEU5QlFYaERPMEZCUTBFN1FVRkRSRHM3UVVGRlJDeE5RVUZMWml4TFFVRk1MRWRCUVdGWExFOUJRV0k3TzBGQlJVRXNVVUZCVHl4TFFVRkxXQ3hMUVVGYU8wRkJRMEVzUTBGeVFrUTdPMEZCZFVKQlJpeHJRa0ZCYTBKUExGTkJRV3hDTEVOQlFUUkNXU3huUWtGQk5VSXNSMEZCSzBNc1dVRkJWVHRCUVVONFJDeE5RVUZMYWtJc1MwRkJUQ3hIUVVGaExFdEJRVXRETEVsQlFXeENPMEZCUTBFc1EwRkdSRHM3UVVGSlFVZ3NhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbUVzWjBKQlFUVkNMRWRCUVN0RExGbEJRVlU3UVVGRGVFUXNUVUZCUzJ4Q0xFdEJRVXdzUjBGQllTeExRVUZMUlN4SlFVRnNRanRCUVVOQkxFTkJSa1E3TzBGQlNVRktMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpFTEUxQlFUVkNMRWRCUVhGRExGVkJRVk5NTEV0QlFWUXNSVUZCWlR0QlFVRkJPenRCUVVOdVJFRXNUMEZCVFc5Q0xFZEJRVTRzUTBGQlZTeFZRVUZEV2l4UFFVRkVMRVZCUVZjN1FVRkRjRUlzVVVGQlMwUXNUVUZCVEN4RFFVRlpReXhQUVVGYU8wRkJRMEVzUlVGR1JEdEJRVWRCTEVOQlNrUTdPMEZCVFVGVUxHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSmxMRkZCUVRWQ0xFZEJRWFZETEZWQlFWTkRMRkZCUVZRc1JVRkJiVUpETEZkQlFXNUNMRVZCUVN0Q08wRkJRM0pGTEV0QlFVbFlMRlZCUVZWWExHTkJRV01zUzBGQlMzQkNMRWxCUVc1Q0xFZEJRVEJDTEV0QlFVdEVMRWxCUVRkRE8wRkJRMEVzVVVGQlRWVXNUMEZCVGl4RlFVRmpPMEZCUTJKVkxGZEJRVk5XTEZGQlFWRktMRTlCUVdwQ08wRkJRMEZKTEZsQlFWVlhMR05CUVdOWUxGRkJRVkZGTEVsQlFYUkNMRWRCUVRaQ1JpeFJRVUZSUXl4SlFVRXZRenRCUVVOQk8wRkJRMFFzUTBGT1JEczdRVUZUUVdRc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFtdENMRTlCUVRWQ0xFZEJRWE5ETEZsQlFWVTdRVUZETDBNc1MwRkJUWGhDTEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVV0eFFpeFJRVUZNTEVOQlFXTXNWVUZCUTJJc1QwRkJSQ3hGUVVGWE8wRkJRM2hDVWl4UlFVRk5lVUlzU1VGQlRpeERRVUZYYWtJc1QwRkJXRHRCUVVOQkxFVkJSa1E3UVVGSFFTeFJRVUZQVWl4TFFVRlFPMEZCUTBFc1EwRk9SRHM3UVVGUlFVUXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbTlDTEdWQlFUVkNMRWRCUVRoRExGbEJRVlU3UVVGRGRrUXNTMEZCUnl4TFFVRkxla0lzUzBGQlVpeEZRVUZqTzBGQlEySXNVMEZCVHl4TFFVRkxRU3hMUVVGTUxFTkJRVmRQTEU5QlFXeENPMEZCUTBFN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRFFTeERRVXhFT3p0QlFVOUJWQ3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDVHl4SlFVRTFRaXhIUVVGdFF5eFpRVUZWTzBGQlF6VkRMRXRCUVUxQkxFOUJRVThzUzBGQlMxb3NTMEZCVEN4RFFVRlhXU3hKUVVGWUxFZEJRV3RDTEV0QlFVdGFMRXRCUVV3c1EwRkJWMWtzU1VGQk4wSXNSMEZCY1VNc1MwRkJTMW9zUzBGQmRrUTdRVUZEUVN4TlFVRkxRU3hMUVVGTUxFZEJRV0ZaTEVsQlFXSTdRVUZEUVN4UlFVRlBRU3hKUVVGUU8wRkJRMEVzUTBGS1JEczdRVUZOUVdRc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFsRXNTVUZCTlVJc1IwRkJiVU1zV1VGQlZUdEJRVU0xUXl4TFFVRk5RU3hQUVVGUExFdEJRVXRpTEV0QlFVd3NRMEZCVjJFc1NVRkJXQ3hIUVVGclFpeExRVUZMWWl4TFFVRk1MRU5CUVZkaExFbEJRVGRDTEVkQlFYRkRMRXRCUVV0aUxFdEJRWFpFTzBGQlEwRXNUVUZCUzBFc1MwRkJUQ3hIUVVGaFlTeEpRVUZpTzBGQlEwRXNVVUZCVDBFc1NVRkJVRHRCUVVOQkxFTkJTa1E3TzBGQlRVRm1MR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUp4UWl4WFFVRTFRaXhIUVVFd1F5eFpRVUZWTzBGQlEyNUVMRkZCUVU4c1MwRkJTekZDTEV0QlFVd3NTMEZCWlN4TFFVRkxReXhKUVVFelFqdEJRVU5CTEVOQlJrUTdPMEZCU1VGSUxHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSnpRaXhYUVVFMVFpeEhRVUV3UXl4WlFVRlZPMEZCUTI1RUxGRkJRVThzUzBGQlN6TkNMRXRCUVV3c1MwRkJaU3hMUVVGTFJTeEpRVUV6UWp0QlFVTkJMRU5CUmtRN08wRkJTVUZLTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKMVFpeExRVUUxUWl4SFFVRnZReXhaUVVGVk8wRkJRemRETEUxQlFVczFRaXhMUVVGTUxFZEJRV0VzU1VGQllqdEJRVU5CTEUxQlFVdERMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzVFVGQlMwTXNTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hOUVVGTFF5eE5RVUZNTEVkQlFXTXNRMEZCWkR0QlFVTkJMRU5CVEVRc1F6czdPenM3T3pzN096czdPenM3TzBsRGFFbHhRakJDTEVrc1IwRkRjRUlzWTBGQldYUkNMRTlCUVZvc1JVRkJiMEk3UVVGQlFUczdRVUZEYmtJc1RVRkJTMEVzVDBGQlRDeEhRVUZsUVN4UFFVRm1PMEZCUTBFc1RVRkJTMHNzU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4TlFVRkxReXhKUVVGTUxFZEJRVmtzU1VGQldqdEJRVU5CTEVNN08ydENRVXh0UW1kQ0xFa2lMQ0ptYVd4bElqb2liR2xpTDJsdVpHVjRMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1hDSnNhVzVyWldSc2FYTjBYQ0lzSUZ0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbXhwYm10bFpHeHBjM1JjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpYkdsdWEyVmtiR2x6ZEZ3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUjVjR1Z2WmlCelpXeG1JQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QS9JSE5sYkdZZ09pQjBhR2x6TENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQmNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdYRzRnWEhSY2RGeDBYSFJqYjI1bWFXZDFjbUZpYkdVNklHWmhiSE5sTEZ4dUlGeDBYSFJjZEZ4MFpXNTFiV1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQmNkRngwWEhSY2RHZGxkRG9nWjJWMGRHVnlYRzRnWEhSY2RGeDBmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ016RXhNemcxTm1VNU9EVXpNall3TXpZeE5HVWlMQ0pwYlhCdmNuUWdUbTlrWlNCbWNtOXRJRndpTGk5T2IyUmxYQ0k3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDQjdYRzVjZEdOdmJuTjBjblZqZEc5eUtHRnljbUY1S1h0Y2JseDBYSFIwYUdsekxuQnBkbTkwSUQwZ2JuVnNiRHRjYmx4MFhIUjBhR2x6TG1obFlXUWdQU0J1ZFd4c08xeHVYSFJjZEhSb2FYTXVkR0ZwYkNBOUlHNTFiR3c3WEc1Y2RGeDBkR2hwY3k1c1pXNW5kR2dnUFNBd08xeHVYSFJjZEdGeWNtRjVJQ1ltSUhSb2FYTXVZM0psWVhSbEtHRnljbUY1S1R0Y2JseDBmVnh1ZlZ4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVhVzV6WlhKMElEMGdablZ1WTNScGIyNG9aV3hsYldWdWRDd2djSEpsU1c1elpYSjBMQ0J3YjNOMFNXNXpaWEowS1h0Y2JseDBZMjl1YzNRZ2JtVjNUbTlrWlNBOUlHNWxkeUJPYjJSbEtHVnNaVzFsYm5RcE8xeHVYSFIwYUdsekxteGxibWQwYUNzck8xeHVYRzVjZEd4bGRDQmpkWEp5Wlc1MExDQnVaWGgwTzF4dVhHNWNkR2xtS0NGMGFHbHpMbkJwZG05MEtYc2dMeThnYVc1elpYSjBhVzVuSUdGeklHWnBjbk4wSUdWc1pXMWxiblJjYmx4MFhIUndjbVZKYm5ObGNuUWdKaVlnY0hKbFNXNXpaWEowS0c1bGQwNXZaR1VwTzF4dVhIUmNkSFJvYVhNdWNHbDJiM1FnUFNCdVpYZE9iMlJsTzF4dVhIUmNkSFJvYVhNdWFHVmhaQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBjRzl6ZEVsdWMyVnlkQ0FtSmlCd2IzTjBTVzV6WlhKMEtHNWxkMDV2WkdVcE8xeHVYSFI5SUdWc2MyVWdhV1lvZEdocGN5NXdhWFp2ZEM1dVpYaDBLWHNnTHk4Z2FXNXpaWEowYVc1bklHbHVJRzFwWkdSc1pWeHVYSFJjZEdOMWNuSmxiblFnUFNCMGFHbHpMbkJwZG05ME8xeHVYSFJjZEc1bGVIUWdQU0IwYUdsekxuQnBkbTkwTG01bGVIUTdYRzVjZEZ4MGNISmxTVzV6WlhKMElDWW1JSEJ5WlVsdWMyVnlkQ2hqZFhKeVpXNTBMRzVsZDA1dlpHVXNibVY0ZENrN1hHNWNkRngwYm1WM1RtOWtaUzV1WlhoMElEMGdZM1Z5Y21WdWRDNXVaWGgwTzF4dVhIUmNkRzVsZDA1dlpHVXVjSEpsZGlBOUlHTjFjbkpsYm5RN1hHNWNibHgwWEhSamRYSnlaVzUwTG01bGVIUWdQU0J1WlhkT2IyUmxPMXh1WEhSY2RHNWxlSFF1Y0hKbGRpQTlJRzVsZDA1dlpHVTdYRzVjYmx4MFhIUjBhR2x6TG5CcGRtOTBJRDBnYm1WM1RtOWtaVHRjYmx4MFhIUndiM04wU1c1elpYSjBJQ1ltSUhCdmMzUkpibk5sY25Rb1kzVnljbVZ1ZEN4dVpYZE9iMlJsTEc1bGVIUXBPMXh1WEhSOUlHVnNjMlVnZXlBdkx5QnBibk5sY25ScGJtY2dZWE1nYkdGemRDQmxiR1Z0Wlc1MFhHNWNkRngwWTNWeWNtVnVkQ0E5SUhSb2FYTXVjR2wyYjNRN1hHNWNkRngwY0hKbFNXNXpaWEowSUNZbUlIQnlaVWx1YzJWeWRDaGpkWEp5Wlc1MExHNWxkMDV2WkdVcE8xeHVYSFJjZEdOMWNuSmxiblF1Ym1WNGRDQTlJRzVsZDA1dlpHVTdYRzVjZEZ4MGJtVjNUbTlrWlM1d2NtVjJJRDBnWTNWeWNtVnVkRHRjYmx4dVhIUmNkSFJvYVhNdWNHbDJiM1FnUFNCdVpYZE9iMlJsTzF4dVhIUmNkSFJvYVhNdWRHRnBiQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBjRzl6ZEVsdWMyVnlkQ0FtSmlCd2IzTjBTVzV6WlhKMEtHTjFjbkpsYm5Rc2JtVjNUbTlrWlNrN1hHNWNkSDFjYmx4dWZUdGNibHh1VUdsMmIzUmxaRXhwYm10bFpFeHBjM1F1Y0hKdmRHOTBlWEJsTG5Ob2FXWjBVR2wyYjNRZ1BTQm1kVzVqZEdsdmJpaHphR2xtZENsN1hHNWNkR3hsZENCamRYSnlaVzUwSUQwZ2RHaHBjeTV3YVhadmREdGNibHh1WEhSc1pYUWdjbWxuYUhSVGFHbG1kRHRjYmx4MGFXWW9jMmhwWm5RZ1BqMGdNQ2w3WEc1Y2RGeDBjbWxuYUhSVGFHbG1kQ0E5SUhSeWRXVTdYRzVjZEgxY2JseHVYSFIzYUdsc1pTaHphR2xtZENBaFBUMGdNQ2w3WEc1Y2RGeDBhV1lvY21sbmFIUlRhR2xtZENsN1hHNWNkRngwWEhSamRYSnlaVzUwSUQwZ1kzVnljbVZ1ZEM1dVpYaDBPMXh1WEhSY2RGeDBLR04xY25KbGJuUWdQVDA5SUhSb2FYTXVkR0ZwYkNrZ1B5QW9jMmhwWm5RZ1BTQXdLU0E2SUhOb2FXWjBMUzA3WEc1Y2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RHTjFjbkpsYm5RZ1BTQmpkWEp5Wlc1MExuQnlaWFk3WEc1Y2RGeDBYSFFvWTNWeWNtVnVkQ0E5UFQwZ2RHaHBjeTVvWldGa0tTQS9JQ2h6YUdsbWRDQTlJREFwSURvZ2MyaHBablFyS3p0Y2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSMGFHbHpMbkJwZG05MElEMGdZM1Z5Y21WdWREdGNibHh1WEhSeVpYUjFjbTRnZEdocGN5NXdhWFp2ZER0Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1emFHbG1kRkJwZG05MFZHOUlaV0ZrSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwZEdocGN5NXdhWFp2ZENBOUlIUm9hWE11YUdWaFpEdGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXphR2xtZEZCcGRtOTBWRzlVWVdsc0lEMGdablZ1WTNScGIyNG9LWHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJSFJvYVhNdWRHRnBiRHRjYm4wN1hHNWNibEJwZG05MFpXUk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzVqY21WaGRHVWdQU0JtZFc1amRHbHZiaWhoY25KaGVTbDdYRzVjZEdGeWNtRjVMbTFoY0Nnb1pXeGxiV1Z1ZENrOVBudGNibHgwWEhSMGFHbHpMbWx1YzJWeWRDaGxiR1Z0Wlc1MEtUdGNibHgwZlNsY2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1MGNtRjJaWEp6WlNBOUlHWjFibU4wYVc5dUtHTmhiR3hpWVdOckxDQnlhV2RvZEZSdlRHVm1kQ2w3WEc1Y2RHeGxkQ0JqZFhKeVpXNTBJRDBnY21sbmFIUlViMHhsWm5RZ1B5QjBhR2x6TG5SaGFXd2dPaUIwYUdsekxtaGxZV1E3WEc1Y2RIZG9hV3hsS0dOMWNuSmxiblFwZTF4dVhIUmNkR05oYkd4aVlXTnJLR04xY25KbGJuUXVaV3hsYldWdWRDazdYRzVjZEZ4MFkzVnljbVZ1ZENBOUlISnBaMmgwVkc5TVpXWjBJRDhnWTNWeWNtVnVkQzV3Y21WMklEb2dZM1Z5Y21WdWRDNXVaWGgwTzF4dVhIUjlYRzU5TzF4dVhHNWNibEJwZG05MFpXUk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzUwYjBGeWNtRjVJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBZMjl1YzNRZ1lYSnlZWGtnUFNCYlhUdGNibHgwZEdocGN5NTBjbUYyWlhKelpTZ29aV3hsYldWdWRDazlQbnRjYmx4MFhIUmhjbkpoZVM1d2RYTm9LR1ZzWlcxbGJuUXBPMXh1WEhSOUtWeHVYSFJ5WlhSMWNtNGdZWEp5WVhrN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdVoyVjBVR2wyYjNSRmJHVnRaVzUwSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwYVdZb2RHaHBjeTV3YVhadmRDbDdYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVjR2wyYjNRdVpXeGxiV1Z1ZER0Y2JseDBmVnh1WEhSeVpYUjFjbTRnYm5Wc2JEdGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXVaWGgwSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwWTI5dWMzUWdibVY0ZENBOUlIUm9hWE11Y0dsMmIzUXVibVY0ZENBL0lIUm9hWE11Y0dsMmIzUXVibVY0ZENBNklDQjBhR2x6TG5CcGRtOTBPMXh1WEhSMGFHbHpMbkJwZG05MElEMGdibVY0ZER0Y2JseDBjbVYwZFhKdUlHNWxlSFE3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1Y0hKbGRpQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RHTnZibk4wSUhCeVpYWWdQU0IwYUdsekxuQnBkbTkwTG5CeVpYWWdQeUIwYUdsekxuQnBkbTkwTG5CeVpYWWdPaUFnZEdocGN5NXdhWFp2ZER0Y2JseDBkR2hwY3k1d2FYWnZkQ0E5SUhCeVpYWTdYRzVjZEhKbGRIVnliaUJ3Y21WMk8xeHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtbHpVR2wyYjNSSVpXRmtJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBjbVYwZFhKdUlIUm9hWE11Y0dsMmIzUWdQVDA5SUhSb2FYTXVhR1ZoWkR0Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1cGMxQnBkbTkwVkdGcGJDQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RISmxkSFZ5YmlCMGFHbHpMbkJwZG05MElEMDlQU0IwYUdsekxuUmhhV3c3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1Y21WelpYUWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUjBhR2x6TG5CcGRtOTBJRDBnYm5Wc2JEdGNibHgwZEdocGN5NW9aV0ZrSUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTUwWVdsc0lEMGdiblZzYkR0Y2JseDBkR2hwY3k1c1pXNW5kR2dnUFNBd08xeHVmVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5Qk9iMlJsZTF4dVhIUmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBLWHRjYmx4MFhIUjBhR2x6TG1Wc1pXMWxiblFnUFNCbGJHVnRaVzUwTzF4dVhIUmNkSFJvYVhNdWJtVjRkQ0E5SUc1MWJHdzdYRzVjZEZ4MGRHaHBjeTV3Y21WMklEMGdiblZzYkR0Y2JseDBmVnh1ZlZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5T2IyUmxMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9waXZvdGVkLWxpbmtlZC1saXN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGNvcHlKc29uKGpzb24pe1xuXHRjb25zdCBzdHJpbmdKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cdHJldHVybiBKU09OLnBhcnNlKHN0cmluZ0pzb24pO1xufVxuXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycmF5ICwgaWROYW1lLCByZXBsYWNlV2l0aElkID0gZmFsc2UsIHJldHVybklkcyA9IGZhbHNlKXtcblx0bGV0IG9iamVjdCA9IG51bGw7XG5cdGxldCBpZHMgPSByZXR1cm5JZHMgPyBbXSA6IHVuZGVmaW5lZDtcblx0aWYoYXJyYXkpe1xuXHRcdG9iamVjdCA9IHt9O1xuXHRcdGxldCBpbmRleCwgaWQsIGNoaWxkO1xuXHRcdGZvcihpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRcdGNoaWxkID0gYXJyYXlbaW5kZXhdO1xuXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyl7XG5cdFx0XHRcdGlkID0gY2hpbGQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZCA9IGNoaWxkW2lkTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRvYmplY3RbaWRdID0gY2hpbGQ7XG5cdFx0XHRyZXBsYWNlV2l0aElkICYmIChhcnJheVtpbmRleF0gPSBpZCk7XG5cdFx0XHRyZXR1cm5JZHMgJiYgaWRzLnB1c2goaWQpO1xuXHRcdH1cblx0fVxuXHRpZihyZXR1cm5JZHMpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRvYmo6IG9iamVjdCxcblx0XHRcdGtleXM6IGlkc1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZURpZmYgKGJhc2VEaWZmLCBkaWZmVG9BZGQsIG9iamVjdFZlcmlmaWVyLCBpc0NvbGxlY3Rpb25PYmplY3QgPSBmYWxzZSkge1xuXHRjb25zdCBiYXNlVHlwZSA9IHR5cGVvZiAoYmFzZURpZmYpOyAvLyB0aGUgdHlwZSBvZiBudWxsIGlzICdvYmplY3QnXG5cdGNvbnN0IGRpZmZUeXBlID0gdHlwZW9mIChkaWZmVG9BZGQpO1xuXG5cdGlmIChiYXNlRGlmZiA9PSBudWxsIHx8IGRpZmZUb0FkZCA9PSBudWxsIHx8IGJhc2VUeXBlICE9PSBkaWZmVHlwZSB8fCAhaXNDb2xsZWN0aW9uT2JqZWN0ICkge1xuXHRcdGJhc2VEaWZmID0gZGlmZlR5cGUgPT09ICdvYmplY3QnID8gIGNvcHlKc29uKGRpZmZUb0FkZCkgOiBkaWZmVG9BZGQgLy8gcmVhY2hlZCBib3R0b20gbW9zdCBsZXZlbFxuXHR9IGVsc2UgIHtcblx0XHRjb25zdCBiYXNlTG9va3VwID0gYXJyYXlUb09iamVjdChiYXNlRGlmZiwgJ2lkJywgdHJ1ZSk7XG5cdFx0Y29uc3QgYXJyYXlBc09iaiA9IGFycmF5VG9PYmplY3QoZGlmZlRvQWRkLCAnaWQnLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0Y29uc3QgZGlmZkxvb2tVcCA9IGFycmF5QXNPYmoub2JqO1xuXHRcdGNvbnN0IGRpZmZUb0FkZEtleXMgPSBhcnJheUFzT2JqLmtleXM7XG5cblx0XHQvLyBhcHBseSBlYWNoIHN0YXRlQXNKc29uIGRpZmYgYXBwZWFyaW5nIGluIGRpZmZUb0FkZFxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZlRvQWRkS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaWQgPSBkaWZmVG9BZGRLZXlzW2ldO1xuXHRcdFx0Y29uc3Qgb2xkU3RhdGUgPSBiYXNlTG9va3VwW2lkXTtcblx0XHRcdGNvbnN0IG5ld1N0YXRlID0gZGlmZkxvb2tVcFtpZF07XG5cblx0XHRcdGlmKG9sZFN0YXRlKXtcblx0XHRcdFx0aWYgKHR5cGVvZiBvbGRTdGF0ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRpZih0eXBlb2YgbmV3U3RhdGUgIT09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRcdGlmIChuZXdTdGF0ZVsnY2xhc3NEZWZOYW1lJ10hPT0gb2xkU3RhdGVbJ2NsYXNzRGVmTmFtZSddKSB7IC8vIGRlbGV0ZSBvcGVyYXRpb24gd2hlcmUgY2xhc3NOYW1lcyBhcmUgbm90IGVxdWFsXG5cdFx0XHRcdFx0XHRcdGJhc2VMb29rdXBbaWRdID0gY29weUpzb24obmV3U3RhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNDb2xsZWN0aW9uT2JqZWN0ID0gbmV3U3RhdGVbJ2NsYXNzRGVmTmFtZSddID09PSBvYmplY3RWZXJpZmllcjtcblx0XHRcdFx0XHRcdFx0b2xkU3RhdGVbJ3ZhbHVlJ10gPSBjb21iaW5lRGlmZihvbGRTdGF0ZVsndmFsdWUnXSwgbmV3U3RhdGVbJ3ZhbHVlJ10sb2JqZWN0VmVyaWZpZXIsIGlzQ29sbGVjdGlvbk9iamVjdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdChvbGRTdGF0ZSAhPT0gbmV3U3RhdGUpICYmIChiYXNlTG9va3VwW2lkXSA9IGNvcHlKc29uKG5ld1N0YXRlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJhc2VMb29rdXBbaWRdID0gY29weUpzb24obmV3U3RhdGUpO1xuXHRcdFx0XHRiYXNlRGlmZi5wdXNoKGlkKTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHQvLyBjaGFuZ2UgYmFzZURpZmYgYmFjayBmcm9tIG5hbWVzIHRvIHR5cGVkIHN0YXRlc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZURpZmYubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJhc2VEaWZmW2ldID0gYmFzZUxvb2t1cFtiYXNlRGlmZltpXV07XG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gYmFzZURpZmY7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9oZWxwZXIuanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi8uLi9saWInO1xuaW1wb3J0IHtEaWZmTG9nZ2VyfSBmcm9tICcuLy4uL2xpYic7XG5cbnZhciBvYmogPSB7XG5cdHZhbHVlOiAwLFxuXHRnZXRTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fSxcblx0c2V0U3RhdGU6IGZ1bmN0aW9uKHZhbCl7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0fSxcblx0YXBwbHlEaWZmOiBmdW5jdGlvbih2YWwpe1xuXHRcdHRoaXMudmFsdWUgPSB2YWw7XG5cdH0sXG5cdGdldERpZmY6IGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRyZXR1cm4gZGlmZih2YWx1ZSx0aGlzLmdldFN0YXRlKCkpXG5cdH1cbn1cblxuXG5cbmZ1bmN0aW9uIHNhdmVDYWxsYmFjayhsb2cpe1xuXHRjb25zb2xlLmxvZyhsb2cpXG59XG5cbnZhciBsb2dnZXIgPSBuZXcgRGlmZkxvZ2dlcihvYmosc2F2ZUNhbGxiYWNrKTtcblxuXG5vYmouc2V0U3RhdGUoMSk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDIpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRTdGF0ZSgzKTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5vYmouc2V0U3RhdGUoNCk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDUpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnJlZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciByZWRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIHJlZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbm9iai5zZXRTdGF0ZSg2KTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxuXG5cbi8qXG4gY29uc29sZS5sb2coJ0JlZm9yZSBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcbmxvZ2dlci5yZWRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFJlZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5vYmouc2V0VmFsdWUoNik7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFZhbHVlKDcpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAxIFN0ZXBzOiAnLCBvYmoudmFsdWUpOyovXG5cblxuXG5cbi8qbG9nZ2VyLnVuZG8oNyk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyA3IFN0ZXBzIG1vcmUgdGhhbiBhdmFpbGFibGUgc3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbyg3KTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDcgU3RlcHMgbW9yZSB0aGFuIGF2YWlsYWJsZSBzdGVwczogJywgb2JqLnZhbHVlKTsqL1xuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==