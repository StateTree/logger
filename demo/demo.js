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

function shiftAndApplyLog(steps, type, callback, objectVerifier) {
	var context = this.context,
	    logList = this.logList;

	var logEntry = void 0,
	    baseDiff = void 0;
	if (steps === 0) {
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
		if (type === "undo") {
			steps = -steps;
			while (steps >= 0) {
				logEntry = logList.pivot;
				logList.shiftPivot(-1);
				var _forwardBackwardDiff = logEntry.element;
				var _diffState = _forwardBackwardDiff.backward;
				var diffValue = _diffState.value;
				baseDiff = (0, _helper.combineDiff)(baseDiff, diffValue);
				steps = steps - 1;
			}
		} else {
			while (steps > 0) {
				logEntry = logList.shiftPivot(1);
				var _forwardBackwardDiff2 = logEntry.element;
				var _diffState2 = _forwardBackwardDiff2.forward;
				var _diffValue = _diffState2.value;
				baseDiff = (0, _helper.combineDiff)(baseDiff, _diffValue);
				steps = steps - 1;
			}
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
			var _forwardBackwardDiff3 = forwardBackwardDiff,
			    forward = _forwardBackwardDiff3.forward,
			    backward = _forwardBackwardDiff3.backward;


			if ((typeof forward === 'undefined' ? 'undefined' : _typeof(forward)) === "object" && (typeof backward === 'undefined' ? 'undefined' : _typeof(backward)) === "object") {
				// Change occurred log them
				this.logList.insert(forwardBackwardDiff);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMTIyMzBiNzNmMTI3MjBlN2YyNyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiXSwibmFtZXMiOlsiUGl2b3RlZExpbmtlZExpc3QiLCJhcnJheSIsInBpdm90IiwiaGVhZCIsInRhaWwiLCJsZW5ndGgiLCJjcmVhdGUiLCJwcm90b3R5cGUiLCJpbnNlcnQiLCJlbGVtZW50IiwicHJlSW5zZXJ0IiwicG9zdEluc2VydCIsIm5ld05vZGUiLCJjdXJyZW50IiwibmV4dCIsInByZXYiLCJzaGlmdFBpdm90Iiwic2hpZnQiLCJyaWdodFNoaWZ0Iiwic2hpZnRQaXZvdFRvSGVhZCIsInNoaWZ0UGl2b3RUb1RhaWwiLCJtYXAiLCJ0cmF2ZXJzZSIsImNhbGxiYWNrIiwicmlnaHRUb0xlZnQiLCJ0b0FycmF5IiwicHVzaCIsImdldFBpdm90RWxlbWVudCIsIk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7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WUFBVTtBQUM1QyxLQUFNQSxPQUFPLEtBQUtiLEtBQUwsQ0FBV2EsSUFBWCxHQUFrQixLQUFLYixLQUFMLENBQVdhLElBQTdCLEdBQXFDLEtBQUtiLEtBQXZEO0FBQ0EsTUFBS0EsS0FBTCxHQUFhYSxJQUFiO0FBQ0EsUUFBT0EsSUFBUDtBQUNBLENBSkQsQzs7Ozs7Ozs7Ozs7Ozs7O0lDbEhxQmEsSSxHQUNwQixjQUFZbkIsT0FBWixFQUFvQjtBQUFBOztBQUNuQixNQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxNQUFLSyxJQUFMLEdBQVksSUFBWjtBQUNBLE1BQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsQzs7a0JBTG1CYSxJIiwiZmlsZSI6ImxpYi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlua2VkbGlzdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMxMjIzMGI3M2YxMjcyMGU3ZjI3IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGl2b3RlZExpbmtlZExpc3Qge1xuXHRjb25zdHJ1Y3RvcihhcnJheSl7XG5cdFx0dGhpcy5waXZvdCA9IG51bGw7XG5cdFx0dGhpcy5oZWFkID0gbnVsbDtcblx0XHR0aGlzLnRhaWwgPSBudWxsO1xuXHRcdHRoaXMubGVuZ3RoID0gMDtcblx0XHRhcnJheSAmJiB0aGlzLmNyZWF0ZShhcnJheSk7XG5cdH1cbn1cblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHByZUluc2VydCwgcG9zdEluc2VydCl7XG5cdGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShlbGVtZW50KTtcblx0dGhpcy5sZW5ndGgrKztcblxuXHRsZXQgY3VycmVudCwgbmV4dDtcblxuXHRpZighdGhpcy5waXZvdCl7IC8vIGluc2VydGluZyBhcyBmaXJzdCBlbGVtZW50XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChuZXdOb2RlKTtcblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHR0aGlzLmhlYWQgPSBuZXdOb2RlO1xuXHRcdHBvc3RJbnNlcnQgJiYgcG9zdEluc2VydChuZXdOb2RlKTtcblx0fSBlbHNlIGlmKHRoaXMucGl2b3QubmV4dCl7IC8vIGluc2VydGluZyBpbiBtaWRkbGVcblx0XHRjdXJyZW50ID0gdGhpcy5waXZvdDtcblx0XHRuZXh0ID0gdGhpcy5waXZvdC5uZXh0O1xuXHRcdHByZUluc2VydCAmJiBwcmVJbnNlcnQoY3VycmVudCxuZXdOb2RlLG5leHQpO1xuXHRcdG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KGN1cnJlbnQsbmV3Tm9kZSxuZXh0KTtcblx0fSBlbHNlIHsgLy8gaW5zZXJ0aW5nIGFzIGxhc3QgZWxlbWVudFxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdHByZUluc2VydCAmJiBwcmVJbnNlcnQoY3VycmVudCxuZXdOb2RlKTtcblx0XHRjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuXHRcdG5ld05vZGUucHJldiA9IGN1cnJlbnQ7XG5cblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHR0aGlzLnRhaWwgPSBuZXdOb2RlO1xuXHRcdHBvc3RJbnNlcnQgJiYgcG9zdEluc2VydChjdXJyZW50LG5ld05vZGUpO1xuXHR9XG5cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90ID0gZnVuY3Rpb24oc2hpZnQpe1xuXHRsZXQgY3VycmVudCA9IHRoaXMucGl2b3Q7XG5cblx0bGV0IHJpZ2h0U2hpZnQ7XG5cdGlmKHNoaWZ0ID49IDApe1xuXHRcdHJpZ2h0U2hpZnQgPSB0cnVlO1xuXHR9XG5cblx0d2hpbGUoc2hpZnQgIT09IDApe1xuXHRcdGlmKHJpZ2h0U2hpZnQpe1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dDtcblx0XHRcdChjdXJyZW50ID09PSB0aGlzLnRhaWwpID8gKHNoaWZ0ID0gMCkgOiBzaGlmdC0tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5wcmV2O1xuXHRcdFx0KGN1cnJlbnQgPT09IHRoaXMuaGVhZCkgPyAoc2hpZnQgPSAwKSA6IHNoaWZ0Kys7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5waXZvdCA9IGN1cnJlbnQ7XG5cblx0cmV0dXJuIHRoaXMucGl2b3Q7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvSGVhZCA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMucGl2b3QgPSB0aGlzLmhlYWQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvVGFpbCA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMucGl2b3QgPSB0aGlzLnRhaWw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oYXJyYXkpe1xuXHRhcnJheS5tYXAoKGVsZW1lbnQpPT57XG5cdFx0dGhpcy5pbnNlcnQoZWxlbWVudCk7XG5cdH0pXG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbihjYWxsYmFjaywgcmlnaHRUb0xlZnQpe1xuXHRsZXQgY3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gdGhpcy50YWlsIDogdGhpcy5oZWFkO1xuXHR3aGlsZShjdXJyZW50KXtcblx0XHRjYWxsYmFjayhjdXJyZW50LmVsZW1lbnQpO1xuXHRcdGN1cnJlbnQgPSByaWdodFRvTGVmdCA/IGN1cnJlbnQucHJldiA6IGN1cnJlbnQubmV4dDtcblx0fVxufTtcblxuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IGFycmF5ID0gW107XG5cdHRoaXMudHJhdmVyc2UoKGVsZW1lbnQpPT57XG5cdFx0YXJyYXkucHVzaChlbGVtZW50KTtcblx0fSlcblx0cmV0dXJuIGFycmF5O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmdldFBpdm90RWxlbWVudCA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMucGl2b3Qpe1xuXHRcdHJldHVybiB0aGlzLnBpdm90LmVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IG5leHQgPSB0aGlzLnBpdm90Lm5leHQgPyB0aGlzLnBpdm90Lm5leHQgOiAgdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IG5leHQ7XG5cdHJldHVybiBuZXh0O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuXHRjb25zdCBwcmV2ID0gdGhpcy5waXZvdC5wcmV2ID8gdGhpcy5waXZvdC5wcmV2IDogIHRoaXMucGl2b3Q7XG5cdHRoaXMucGl2b3QgPSBwcmV2O1xuXHRyZXR1cm4gcHJldjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXtcblx0Y29uc3RydWN0b3IoZWxlbWVudCl7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLm5leHQgPSBudWxsO1xuXHRcdHRoaXMucHJldiA9IG51bGw7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTm9kZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=

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

function isNotAnLoggableObject(obj) {
	return !((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && (obj.hasOwnProperty('className') || obj.hasOwnProperty('id')));
}

function combineDiff(baseDiff, diffToAdd) {
	var baseType = typeof baseDiff === 'undefined' ? 'undefined' : _typeof(baseDiff); // the type of null is 'object'
	var diffType = typeof diffToAdd === 'undefined' ? 'undefined' : _typeof(diffToAdd);

	if (baseDiff == null || diffToAdd == null || baseType !== diffType || isNotAnLoggableObject(baseDiff)) {
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
						if (newState['className'] !== oldState['className']) {
							// delete operation where classNames are not equal
							baseLookup[id] = copyJson(newState);
						} else {
							oldState['value'] = combineDiff(oldState['value'], newState['value']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYTJiZTE4NTFmM2Q4MTBjNzBkZiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9EaWZmTG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJEaWZmTG9nZ2VyIiwiYXBwbHlEaWZmIiwic3RlcHMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJ1bmRvTG9nIiwicmVkb0xvZyIsImdldHRlciIsInNldHRlciIsInByZXZTdGF0ZSIsImFic1N0ZXBzIiwiTWF0aCIsImFicyIsInN0ZXBzUmVtYWluaW5nIiwibWluIiwibGVuZ3RoIiwibG9nRW50cnkiLCJkaWZmIiwicG9wIiwidW5zaGlmdCIsInByZXYiLCJzaGlmdCIsInB1c2giLCJuZXh0IiwidmFsdWUiLCJkaWZmQXBwbGllZCIsImNhbGwiLCJMb2dnZXIiLCJzYXZlQ2FsbGJhY2siLCJkaWZmTWV0aG9kIiwibmV4dElkIiwic2F2ZURpZmZDYWxsYmFjayIsImVuYWJsZSIsInByb3RvdHlwZSIsInNldENvbnRleHQiLCJjb25zb2xlIiwid2FybiIsInNldFNhdmVDYWxsYmFjayIsInJlbW92ZVNhdmVDYWxsYmFjayIsInVuZG8iLCJpc05hTiIsInJlZG8iLCJzYXZlIiwibG9nIiwiZ2V0RGlmZiIsInN0YXRlIiwiZGlmZk9iamVjdCIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJuZXh0TG9nIiwiTG9nRW50cnkiLCJpZCIsInNoaWZ0QW5kQXBwbHlMb2ciLCJ0eXBlIiwib2JqZWN0VmVyaWZpZXIiLCJsb2dMaXN0IiwiYmFzZURpZmYiLCJwaXZvdCIsInNoaWZ0UGl2b3QiLCJmb3J3YXJkQmFja3dhcmREaWZmIiwiZWxlbWVudCIsImZvcndhcmQiLCJiYWNrd2FyZCIsImRpZmZTdGF0ZSIsImRpZmZWYWx1ZSIsImRpZmZMb2dnZXJJbnN0YW5jZSIsInVwZGF0ZUxhc3RBY3RpdmVTdGF0ZSIsImxhc3RBY3RpdmVTdGF0ZSIsImdldFN0YXRlIiwiZXJyb3IiLCJpbnNlcnQiLCJnZXRDdXJyZW50TG9nIiwiZ2V0UGl2b3RFbGVtZW50IiwiY29tYmluZURpZmYiLCJjb3B5SnNvbiIsImpzb24iLCJzdHJpbmdKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiYXJyYXlUb09iamVjdCIsImFycmF5IiwiaWROYW1lIiwicmVwbGFjZVdpdGhJZCIsInJldHVybklkcyIsIm9iamVjdCIsImlkcyIsImluZGV4IiwiY2hpbGQiLCJvYmoiLCJrZXlzIiwiaXNOb3RBbkxvZ2dhYmxlT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJkaWZmVG9BZGQiLCJiYXNlVHlwZSIsImRpZmZUeXBlIiwiYmFzZUxvb2t1cCIsImFycmF5QXNPYmoiLCJkaWZmTG9va1VwIiwiZGlmZlRvQWRkS2V5cyIsImkiLCJvbGRTdGF0ZSIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJ2YWwiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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LElBQUlqRSxLQUFoQzs7QUFFQWlGLE9BQU9oRSxJQUFQO0FBQ0FOLFFBQVFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCOEMsSUFBSWpFLEtBQWhDOztBQUVBaUYsT0FBT2hFLElBQVA7QUFDQU4sUUFBUVEsR0FBUixDQUFZLGNBQVosRUFBNEI4QyxJQUFJakUsS0FBaEM7O0FBRUFpRixPQUFPbEUsSUFBUCxDQUFZLENBQVo7QUFDQUosUUFBUVEsR0FBUixDQUFZLHNCQUFaLEVBQW9DOEMsSUFBSWpFLEtBQXhDOztBQUVBaUYsT0FBT2hFLElBQVAsQ0FBWSxDQUFaO0FBQ0FOLFFBQVFRLEdBQVIsQ0FBWSxzQkFBWixFQUFvQzhDLElBQUlqRSxLQUF4Qzs7QUFFQWlFLElBQUljLFFBQUosQ0FBYSxDQUFiO0FBQ0FFLE9BQU8vRCxJQUFQLENBQVksSUFBWjs7QUFFQStELE9BQU9sRSxJQUFQO0FBQ0FKLFFBQVFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCOEMsSUFBSWpFLEtBQWhDOztBQUVBaUYsT0FBT2hFLElBQVA7QUFDQU4sUUFBUVEsR0FBUixDQUFZLGNBQVosRUFBNEI4QyxJQUFJakUsS0FBaEM7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibG9nZ2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsb2dnZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhMmJlMTg1MWYzZDgxMGM3MGRmIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkaWZmXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc3RyaW5nQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfc3RyaW5nQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdDb21wYXJlKTtcblxudmFyIF9udW1iZXJDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9udW1iZXJDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlckNvbXBhcmUpO1xuXG52YXIgX2RhdGVDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9kYXRlQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRlQ29tcGFyZSk7XG5cbnZhciBfYXJyYXlDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hcnJheUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlDb21wYXJlKTtcblxudmFyIF9vYmplY3RDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9vYmplY3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdENvbXBhcmUpO1xuXG52YXIgX2lzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9pczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgb2xkT2JqVHlwZSA9IHR5cGVvZiBvbGRPYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9sZE9iaik7XG4gICAgdmFyIG5ld09ialR5cGUgPSB0eXBlb2YgbmV3T2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09IG5ld09ialR5cGUpIHJldHVybiAoMCwgX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialR5cGUsIG5ld09ialR5cGUpO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdib29sZWFuJykgcmV0dXJuICgwLCBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdCkoTnVtYmVyKG9sZE9iaiksIE51bWJlcihuZXdPYmopKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ251bWJlcicpIHJldHVybiAoMCwgX251bWJlckNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiAoMCwgX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSAnb2JqZWN0JykgcmV0dXJuIDE7XG5cbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBEYXRlKSkgcmV0dXJuICgwLCBfZGF0ZUNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBBcnJheSkpIHJldHVybiAoMCwgX2FycmF5Q29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIE9iamVjdCkpIHJldHVybiAoMCwgX29iamVjdENvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcblxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbi8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2xvY2FsZUNvbXBhcmVcbmZ1bmN0aW9uIHN0cmluZ0NvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlLCBpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSB0eXBlb2YgaXNDYXNlU2Vuc2l0aXZlICE9PSAndW5kZWZpbmVkJyA/IGlzQ2FzZVNlbnNpdGl2ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwgJiYgbmV3VmFsdWUgPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICBpZiAoaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gU3RyaW5nKG9sZFZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBuZXdWYWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gU3RyaW5nKG9sZFZhbHVlKS5sb2NhbGVDb21wYXJlKG5ld1ZhbHVlKTtcbiAgICBpZiAocmVzdWx0IDwgLTEpIHJlc3VsdCA9IC0xO2Vsc2UgaWYgKHJlc3VsdCA+IDEpIHJlc3VsdCA9IDE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBudW1iZXJDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSAmJiBpc05hTihuZXdWYWx1ZSkpIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRWYWx1ZSkpIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdWYWx1ZSkpIHJldHVybiAtMTtcblxuICAgIGlmIChvbGRWYWx1ZSA8IG5ld1ZhbHVlKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFZhbHVlID4gbmV3VmFsdWUpIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBudW1iZXJDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBkYXRlQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBvbGRUaW1lID0gb2xkVmFsdWUuZ2V0VGltZSgpO1xuICAgIHZhciBuZXdUaW1lID0gbmV3VmFsdWUuZ2V0VGltZSgpO1xuICAgIGlmIChvbGRUaW1lIDwgbmV3VGltZSkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRUaW1lID4gbmV3VGltZSkgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXNOYU4ob2xkVGltZSkgJiYgaXNOYU4obmV3VGltZSkpIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRUaW1lKSkgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1RpbWUpKSByZXR1cm4gLTE7XG5cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGF0ZUNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIGNvbXBhcmlzb25WYWx1ZSA9IHZvaWQgMDtcbiAgICB2YXIgb2xkT2JqTGVuZ3RoID0gb2xkT2JqLmxlbmd0aDtcbiAgICB2YXIgbmV3T2JqTGVuZ3RoID0gbmV3T2JqLmxlbmd0aDtcbiAgICBpZiAob2xkT2JqTGVuZ3RoIDwgbmV3T2JqTGVuZ3RoKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA+IG5ld09iakxlbmd0aCkgcmV0dXJuIDE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZE9iakxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2YgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShvbGRPYmpbaV0sIG5ld09ialtpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT0gMCkgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhcnJheUNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBwcm9wID0gdm9pZCAwO1xuICAgIGZvciAocHJvcCBpbiBvbGRPYmopIHtcbiAgICAgICAgaWYgKCFuZXdPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICB2YXIgY29tcGFyaXNvblZhbHVlID0gdm9pZCAwO1xuICAgIGZvciAocHJvcCBpbiBuZXdPYmopIHtcbiAgICAgICAgaWYgKCFvbGRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHJldHVybiAxO1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialtwcm9wXSwgbmV3T2JqW3Byb3BdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPT0gMCkgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBvYmplY3RDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vYmplY3RDb21wYXJlID0gZXhwb3J0cy5hcnJheUNvbXBhcmUgPSBleHBvcnRzLmRhdGVDb21wYXJlID0gZXhwb3J0cy5udW1iZXJDb21wYXJlID0gZXhwb3J0cy5zdHJpbmdDb21wYXJlID0gZXhwb3J0cy5jb21wYXJlID0gZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nQ29tcGFyZSk7XG5cbnZhciBfbnVtYmVyQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfbnVtYmVyQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXJDb21wYXJlKTtcblxudmFyIF9kYXRlQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfZGF0ZUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZUNvbXBhcmUpO1xuXG52YXIgX2FycmF5Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYXJyYXlDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FycmF5Q29tcGFyZSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RDb21wYXJlKTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG52YXIgX2RpZmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG52YXIgX2RpZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlmZik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kaWZmMi5kZWZhdWx0O1xuZXhwb3J0cy5jb21wYXJlID0gX2NvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLnN0cmluZ0NvbXBhcmUgPSBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMubnVtYmVyQ29tcGFyZSA9IF9udW1iZXJDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5kYXRlQ29tcGFyZSA9IF9kYXRlQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuYXJyYXlDb21wYXJlID0gX2FycmF5Q29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMub2JqZWN0Q29tcGFyZSA9IF9vYmplY3RDb21wYXJlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gaXMob2JqLCBUeXBlKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIFR5cGUpIHJldHVybiB0cnVlO1xuICAgIGlmIChUeXBlID09PSBPYmplY3QpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSByZXR1cm4gVHlwZSA9PT0gU3RyaW5nO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykgcmV0dXJuIFR5cGUgPT09IE51bWJlcjtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gVHlwZSA9PT0gQm9vbGVhbjtcbiAgICBpZiAoVHlwZSA9PT0gQXJyYXkpIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBJZiB0aGVyZSBpcyBubyBjaGFuZ2UgcmV0dXJucyB1bmRlZmluZWRcbi8vIGlmIHRoZXJlIGlzIGEgY2hhbmdlIHJldHVybnMgdGhlIGxhdGVzdCB2YWx1ZVxuZnVuY3Rpb24gZGlmZihjb21wYXJlZFZhbHVlLCB2YWx1ZSkge1xuXHR2YXIgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShjb21wYXJlZFZhbHVlLCB2YWx1ZSk7XG5cblx0aWYgKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCkge1xuXHRcdHZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkaWZmO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EwT0RkbVpXVXhaRGhoWWpSa1l6UXhNRGN3T1NJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5amIyMXdZWEpsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmJuVnRZbVZ5UTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5a1lYUmxRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzloY25KaGVVTnZiWEJoY21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMmx6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWthV1ptTG1weklsMHNJbTVoYldWeklqcGJJbU52YlhCaGNtVWlMQ0p2YkdSUFltb2lMQ0p1WlhkUFltb2lMQ0p2YkdSUFltcFVlWEJsSWl3aWJtVjNUMkpxVkhsd1pTSXNJazUxYldKbGNpSXNJa1JoZEdVaUxDSkJjbkpoZVNJc0lrOWlhbVZqZENJc0luTjBjbWx1WjBOdmJYQmhjbVVpTENKdmJHUldZV3gxWlNJc0ltNWxkMVpoYkhWbElpd2lhWE5EWVhObFUyVnVjMmwwYVhabElpd2lVM1J5YVc1bklpd2lkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVWlMQ0p5WlhOMWJIUWlMQ0pzYjJOaGJHVkRiMjF3WVhKbElpd2liblZ0WW1WeVEyOXRjR0Z5WlNJc0ltbHpUbUZPSWl3aVpHRjBaVU52YlhCaGNtVWlMQ0p2YkdSVWFXMWxJaXdpWjJWMFZHbHRaU0lzSW01bGQxUnBiV1VpTENKaGNuSmhlVU52YlhCaGNtVWlMQ0pqYjIxd1lYSnBjMjl1Vm1Gc2RXVWlMQ0p2YkdSUFltcE1aVzVuZEdnaUxDSnNaVzVuZEdnaUxDSnVaWGRQWW1wTVpXNW5kR2dpTENKcElpd2liMkpxWldOMFEyOXRjR0Z5WlNJc0luQnliM0FpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW1SbFptRjFiSFFpTENKcGN5SXNJbTlpYWlJc0lsUjVjR1VpTENKQ2IyOXNaV0Z1SWl3aWFYTkJjbkpoZVNJc0ltUnBabVlpTENKamIyMXdZWEpsWkZaaGJIVmxJaXdpZG1Gc2RXVWlMQ0oxYm1SbFptbHVaV1FpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdRVU0zUkVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN1FVRkZRU3hUUVVGVFFTeFBRVUZVTEVOQlFXbENReXhOUVVGcVFpeEZRVUY1UWtNc1RVRkJla0lzUlVGRFFUdEJRVU5KTEZGQlFVbEVMRmRCUVZkRExFMUJRV1lzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpSQ3hWUVVGVkxFbEJRV1FzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhWUVVGVkxFbEJRV1FzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhSUVVGUFF5eHZRa0ZCYjBKR0xFMUJRWEJDTEhsRFFVRnZRa0VzVFVGQmNFSXNRMEZCVUR0QlFVTkJMRkZCUVU5SExHOUNRVUZ2UWtZc1RVRkJjRUlzZVVOQlFXOUNRU3hOUVVGd1FpeERRVUZRT3p0QlFVVkJMRkZCUVVsRExHVkJRV1ZETEZWQlFXNUNMRVZCUTBrc1QwRkJUeXcyUWtGQlkwUXNWVUZCWkN4RlFVRXdRa01zVlVGQk1VSXNRMEZCVURzN1FVRkZTaXhSUVVGSlJDeGxRVUZsTEZOQlFXNUNMRVZCUTBrc1QwRkJUeXcyUWtGQlkwVXNUMEZCVDBvc1RVRkJVQ3hEUVVGa0xFVkJRVGhDU1N4UFFVRlBTQ3hOUVVGUUxFTkJRVGxDTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhsUVVGbExGRkJRVzVDTEVWQlEwa3NUMEZCVHl3MlFrRkJZMFlzVFVGQlpDeEZRVUZ6UWtNc1RVRkJkRUlzUTBGQlVEdEJRVU5LTEZGQlFVbERMR1ZCUVdVc1VVRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSaXhOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhEUVVGUU96dEJRVVZLTEZGQlFVbERMR1ZCUVdVc1VVRkJia0lzUlVGRFNTeFBRVUZQTEVOQlFWQTdPMEZCUlVvc1VVRkJTU3hyUWtGQlIwWXNUVUZCU0N4RlFVRlhTeXhKUVVGWUxFTkJRVW9zUlVGRFNTeFBRVUZQTERKQ1FVRlpUQ3hOUVVGYUxFVkJRVzlDUXl4TlFVRndRaXhEUVVGUU8wRkJRMG9zVVVGQlNTeHJRa0ZCUjBRc1RVRkJTQ3hGUVVGWFRTeExRVUZZTEVOQlFVb3NSVUZEU1N4UFFVRlBMRFJDUVVGaFRpeE5RVUZpTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUwUWtZc1QwRkJOVUlzUTBGQlVEdEJRVU5LTEZGQlFVa3NhMEpCUVVkRExFMUJRVWdzUlVGQlYwOHNUVUZCV0N4RFFVRktMRVZCUTBrc1QwRkJUeXcyUWtGQlkxQXNUVUZCWkN4RlFVRnpRa01zVFVGQmRFSXNSVUZCT0VKR0xFOUJRVGxDTEVOQlFWQTdPMEZCUlVvc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzJ0Q1FVVmpRU3hQT3pzN096czdPenM3T3pzN1FVTXhRMlk3UVVGRFFTeFRRVUZUVXl4aFFVRlVMRU5CUVhWQ1F5eFJRVUYyUWl4RlFVRnBRME1zVVVGQmFrTXNSVUZCTWtORExHVkJRVE5ETEVWQlFUUkVPMEZCUTNoRVFTeHpRa0ZCYTBJc1QwRkJUMEVzWlVGQlVDeExRVUV5UWl4WFFVRXpRaXhIUVVGNVEwRXNaVUZCZWtNc1IwRkJNa1FzUzBGQk4wVTdPMEZCUlVFc1VVRkJTVVlzV1VGQldTeEpRVUZhTEVsQlFXOUNReXhaUVVGWkxFbEJRWEJETEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVFzV1VGQldTeEpRVUZvUWl4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxETEZsQlFWa3NTVUZCYUVJc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqczdRVUZGU2l4UlFVRkpReXhsUVVGS0xFVkJRWEZDTzBGQlEycENSaXh0UWtGQlYwY3NUMEZCVDBnc1VVRkJVQ3hGUVVGcFFra3NhVUpCUVdwQ0xFVkJRVmc3UVVGRFFVZ3NiVUpCUVZkRkxFOUJRVTlHTEZGQlFWQXNSVUZCYVVKSExHbENRVUZxUWl4RlFVRllPMEZCUTBnN08wRkJSVVFzVVVGQlNVTXNVMEZCVTBZc1QwRkJUMGdzVVVGQlVDeEZRVUZwUWswc1lVRkJha0lzUTBGQkswSk1MRkZCUVM5Q0xFTkJRV0k3UVVGRFFTeFJRVUZKU1N4VFFVRlRMRU5CUVVNc1EwRkJaQ3hGUVVOSlFTeFRRVUZUTEVOQlFVTXNRMEZCVml4RFFVUktMRXRCUlVzc1NVRkJTVUVzVTBGQlV5eERRVUZpTEVWQlEwUkJMRk5CUVZNc1EwRkJWRHM3UVVGRlNpeFhRVUZQUVN4TlFVRlFPMEZCUTBnN08ydENRVVZqVGl4aE96czdPenM3T3pzN096czdPMEZEZUVKbUxGTkJRVk5STEdGQlFWUXNRMEZCZFVKUUxGRkJRWFpDTEVWQlFXbERReXhSUVVGcVF5eEZRVUV5UXpzN1FVRkZka01zVVVGQlNVOHNUVUZCVFZJc1VVRkJUaXhMUVVGdFFsRXNUVUZCVFZBc1VVRkJUaXhEUVVGMlFpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsUExFMUJRVTFTTEZGQlFVNHNRMEZCU2l4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxSTEUxQlFVMVFMRkZCUVU0c1EwRkJTaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVVsRUxGZEJRVmRETEZGQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOS0xGRkJRVWxFTEZkQlFWZERMRkZCUVdZc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05OTEdFN096czdPenM3T3pzN096czdRVU5vUW1Zc1UwRkJVMFVzVjBGQlZDeERRVUZ4UWxRc1VVRkJja0lzUlVGQkswSkRMRkZCUVM5Q0xFVkJRWGxET3p0QlFVVnlReXhSUVVGSlJDeGhRVUZoTEVsQlFXSXNTVUZCY1VKRExHRkJRV0VzU1VGQmRFTXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlJDeGhRVUZoTEVsQlFXcENMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNZVUZCWVN4SlFVRnFRaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVV0VExGVkJRVlZXTEZOQlFWTlhMRTlCUVZRc1JVRkJaanRCUVVOQkxGRkJRVXRETEZWQlFWVllMRk5CUVZOVkxFOUJRVlFzUlVGQlpqdEJRVU5CTEZGQlFVbEVMRlZCUVZWRkxFOUJRV1FzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWp0QlFVTktMRkZCUVVsR0xGVkJRVlZGTEU5QlFXUXNSVUZEU1N4UFFVRlBMRU5CUVZBN08wRkJSVW9zVVVGQlNVb3NUVUZCVFVVc1QwRkJUaXhMUVVGclFrWXNUVUZCVFVrc1QwRkJUaXhEUVVGMFFpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsS0xFMUJRVTFGTEU5QlFVNHNRMEZCU2l4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxHTEUxQlFVMUpMRTlCUVU0c1EwRkJTaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRmRCUVU4c1EwRkJVRHRCUVVOSU96dHJRa0ZGWTBnc1Z6czdPenM3T3pzN096czdPenRCUXpOQ1pqczdPenM3TzBGQlJVRXNVMEZCVTBrc1dVRkJWQ3hEUVVGelFuUkNMRTFCUVhSQ0xFVkJRVGhDUXl4TlFVRTVRaXhGUVVOQk8wRkJRMGtzVVVGQlNVUXNWMEZCVjBNc1RVRkJaaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEVMRlZCUVZVc1NVRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbERMRlZCUVZVc1NVRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVVselFpeDNRa0ZCU2p0QlFVTkJMRkZCUVV0RExHVkJRV1Y0UWl4UFFVRlBlVUlzVFVGQk0wSTdRVUZEUVN4UlFVRkxReXhsUVVGbGVrSXNUMEZCVDNkQ0xFMUJRVE5DTzBGQlEwRXNVVUZCU1VRc1pVRkJaVVVzV1VGQmJrSXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOS0xGRkJRVWxHTEdWQlFXVkZMRmxCUVc1Q0xFVkJRMGtzVDBGQlR5eERRVUZRT3p0QlFVVktMRk5CUVVzc1NVRkJTME1zU1VGQlNTeERRVUZrTEVWQlFXbENRU3hKUVVGSlNDeFpRVUZ5UWl4RlFVRnRRMGNzUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU03UVVGRFFVb3NNRUpCUVd0Q0xIVkNRVUZSZGtJc1QwRkJUekpDTEVOQlFWQXNRMEZCVWl4RlFVRnRRakZDTEU5QlFVOHdRaXhEUVVGUUxFTkJRVzVDTEVOQlFXeENPMEZCUTBFc1dVRkJTVW9zYlVKQlFXMUNMRU5CUVhaQ0xFVkJRMGtzVDBGQlQwRXNaVUZCVUR0QlFVTlFPMEZCUTBRc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzJ0Q1FVVmpSQ3haT3pzN096czdPenM3T3pzN08wRkROVUptT3pzN096czdRVUZGUVN4VFFVRlRUU3hoUVVGVUxFTkJRWFZDTlVJc1RVRkJka0lzUlVGQkswSkRMRTFCUVM5Q0xFVkJRMEU3UVVGRFNTeFJRVUZKUkN4WFFVRlhReXhOUVVGbUxFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VRc1ZVRkJWU3hKUVVGa0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VNc1ZVRkJWU3hKUVVGa0xFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdPMEZCUjBvc1VVRkJTVFJDTEdGQlFVbzdRVUZEUVN4VFFVRkxRU3hKUVVGTUxFbEJRV0UzUWl4TlFVRmlMRVZCUTBFN1FVRkRTU3haUVVGSkxFTkJRVU5ETEU5QlFVODJRaXhqUVVGUUxFTkJRWE5DUkN4SlFVRjBRaXhEUVVGTUxFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdRVUZEVURzN1FVRkZSQ3hSUVVGSlRpeDNRa0ZCU2p0QlFVTkJMRk5CUVV0TkxFbEJRVXdzU1VGQllUVkNMRTFCUVdJc1JVRkRRVHRCUVVOSkxGbEJRVWtzUTBGQlEwUXNUMEZCVHpoQ0xHTkJRVkFzUTBGQmMwSkVMRWxCUVhSQ0xFTkJRVXdzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2p0QlFVTkJUaXd3UWtGQmEwSXNkVUpCUVZGMlFpeFBRVUZQTmtJc1NVRkJVQ3hEUVVGU0xFVkJRWE5DTlVJc1QwRkJUelJDTEVsQlFWQXNRMEZCZEVJc1EwRkJiRUk3UVVGRFFTeFpRVUZKVGl4dlFrRkJiMElzUTBGQmVFSXNSVUZEU1N4UFFVRlBRU3hsUVVGUU8wRkJRMUE3UVVGRFJDeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05MTEdFN096czdPenM3T3pzN096czdPMEZEYUVObU96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN1VVRkhXVWNzVHp0UlFVTlNhRU1zVHp0UlFVTkJVeXhoTzFGQlEwRlJMR0U3VVVGRFFVVXNWenRSUVVOQlNTeFpPMUZCUTBGTkxHRTdPenM3T3pzN096czdPenRCUTJaS0xGTkJRVk5KTEVWQlFWUXNRMEZCV1VNc1IwRkJXaXhGUVVGcFFrTXNTVUZCYWtJc1JVRkJkVUk3UVVGRGJrSXNVVUZCU1VRc1QwRkJUeXhKUVVGUUxFbEJRV1ZCTEU5QlFVOHNTVUZCTVVJc1JVRkRTU3hQUVVGUExFdEJRVkE3UVVGRFNpeFJRVUZKUVN4bFFVRmxReXhKUVVGdVFpeEZRVU5KTEU5QlFVOHNTVUZCVUR0QlFVTktMRkZCUVVsQkxGTkJRVk16UWl4TlFVRmlMRVZCUTBrc1QwRkJUeXhKUVVGUU96dEJRVVZLTEZGQlFVa3NUMEZCVHpCQ0xFZEJRVkFzUzBGQlowSXNVVUZCY0VJc1JVRkRTU3hQUVVGUFF5eFRRVUZUZEVJc1RVRkJhRUk3UVVGRFNpeFJRVUZKTEU5QlFVOXhRaXhIUVVGUUxFdEJRV2RDTEZGQlFYQkNMRVZCUTBrc1QwRkJUME1zVTBGQlV6bENMRTFCUVdoQ08wRkJRMG9zVVVGQlNTeFBRVUZQTmtJc1IwRkJVQ3hMUVVGblFpeFRRVUZ3UWl4RlFVTkpMRTlCUVU5RExGTkJRVk5ETEU5QlFXaENPMEZCUTBvc1VVRkJTVVFzVTBGQlV6VkNMRXRCUVdJc1JVRkRTU3hQUVVGUFFTeE5RVUZOT0VJc1QwRkJUaXhEUVVGalNDeEhRVUZrTEVOQlFWQTdPMEZCUlVvc1YwRkJUeXhMUVVGUU8wRkJRMGc3TzJ0Q1FVVmpSQ3hGT3pzN096czdPenM3T3pzN08wRkRjRUptT3pzN096czdRVUZGUVR0QlFVTkJPMEZCUTBFc1UwRkJVMHNzU1VGQlZDeERRVUZqUXl4aFFVRmtMRVZCUVRaQ1F5eExRVUUzUWl4RlFVRnRRenRCUVVOc1F5eExRVUZOYUVJc2EwSkJRVzFDTEhWQ1FVRlJaU3hoUVVGU0xFVkJRWFZDUXl4TFFVRjJRaXhEUVVGNlFqczdRVUZGUVN4TFFVRkhhRUlzYjBKQlFXOUNMRU5CUVhaQ0xFVkJRWGxDTzBGQlEzaENaMElzVlVGQlVVTXNVMEZCVWp0QlFVTkJPenRCUVVWRkxGRkJRVTlFTEV0QlFWQTdRVUZEU0RzN2EwSkJSV05HTEVraUxDSm1hV3hsSWpvaWJHbGlMMlJwWm1ZdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hjSW1ScFptWmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2laR2xtWmx3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKa2FXWm1YQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9LU0I3WEc1eVpYUjFjbTRnWEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZTF4dUlGeDBYSFJjZEZ4MFkyOXVabWxuZFhKaFlteGxPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnWEhSY2RGeDBYSFJuWlhRNklHZGxkSFJsY2x4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRFlwTzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJRFE0TjJabFpURmtPR0ZpTkdSak5ERXdOekE1SWl3aWFXMXdiM0owSUhOMGNtbHVaME52YlhCaGNtVWdabkp2YlNBbkxpOXpkSEpwYm1kRGIyMXdZWEpsSjF4dWFXMXdiM0owSUc1MWJXSmxja052YlhCaGNtVWdabkp2YlNBbkxpOXVkVzFpWlhKRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdSaGRHVkRiMjF3WVhKbElHWnliMjBnSnk0dlpHRjBaVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZWEp5WVhsRGIyMXdZWEpsSUdaeWIyMGdKeTR2WVhKeVlYbERiMjF3WVhKbEoxeHVhVzF3YjNKMElHOWlhbVZqZEVOdmJYQmhjbVVnWm5KdmJTQW5MaTl2WW1wbFkzUkRiMjF3WVhKbEoxeHVhVzF3YjNKMElHbHpJR1p5YjIwZ0p5NHZMaTR2YVhNblhHNWNibVoxYm1OMGFXOXVJR052YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vcFhHNTdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFpQTlQVDBnYm1WM1QySnFLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1SUNBZ0lHbG1JQ2h1WlhkUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ0lHOXNaRTlpYWxSNWNHVWdQU0IwZVhCbGIyWW9iMnhrVDJKcUtUdGNiaUFnSUNCamIyNXpkQ0FnYm1WM1QySnFWSGx3WlNBOUlIUjVjR1Z2WmlodVpYZFBZbW9wTzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdJVDA5SUc1bGQwOWlhbFI1Y0dVcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkU5aWFsUjVjR1VzSUc1bGQwOWlhbFI1Y0dVcE8xeHVYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZGliMjlzWldGdUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiV0psY2tOdmJYQmhjbVVvVG5WdFltVnlLRzlzWkU5aWFpa3NJRTUxYldKbGNpaHVaWGRQWW1vcEtUdGNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0E5UFQwZ0oyNTFiV0psY2ljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXMWlaWEpEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0E5UFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSUFltcFVlWEJsSUNFOVBTQW5iMkpxWldOMEp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzVjYmlBZ0lDQnBaaUFvYVhNb2IyeGtUMkpxTENCRVlYUmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoZEdWRGIyMXdZWEpsS0c5c1pFOWlhaXdnYm1WM1QySnFLVHRjYmlBZ0lDQnBaaUFvYVhNb2IyeGtUMkpxTENCQmNuSmhlU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoY25KaGVVTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9zWTI5dGNHRnlaU2s3WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1QySnFaV04wS1NsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFtVmpkRU52YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vc0lHTnZiWEJoY21VcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SURBN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYjIxd1lYSmxPMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlqYjIxd1lYSmxMMk52YlhCaGNtVXVhbk1pTENJdkwyaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwxTjBjbWx1Wnk5c2IyTmhiR1ZEYjIxd1lYSmxYRzVtZFc1amRHbHZiaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRlpoYkhWbExDQnVaWGRXWVd4MVpTd2dhWE5EWVhObFUyVnVjMmwwYVhabEtTQjdYRzRnSUNBZ2FYTkRZWE5sVTJWdWMybDBhWFpsSUQwZ2RIbHdaVzltSUdselEyRnpaVk5sYm5OcGRHbDJaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJwYzBOaGMyVlRaVzV6YVhScGRtVWdPaUJtWVd4elpUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFNCdWRXeHNJQ1ltSUc1bGQxWmhiSFZsSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0JwWmlBb2JtVjNWbUZzZFdVZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzRnSUNBZ2FXWWdLR2x6UTJGelpWTmxibk5wZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0J2YkdSV1lXeDFaU0E5SUZOMGNtbHVaeWh2YkdSV1lXeDFaU2t1ZEc5TWIyTmhiR1ZNYjNkbGNrTmhjMlVvS1R0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQlRkSEpwYm1jb2JtVjNWbUZzZFdVcExuUnZURzlqWVd4bFRHOTNaWEpEWVhObEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJRk4wY21sdVp5aHZiR1JXWVd4MVpTa3ViRzlqWVd4bFEyOXRjR0Z5WlNodVpYZFdZV3gxWlNrN1hHNGdJQ0FnYVdZZ0tISmxjM1ZzZENBOElDMHhLVnh1SUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0F0TVR0Y2JpQWdJQ0JsYkhObElHbG1JQ2h5WlhOMWJIUWdQaUF4S1Z4dUlDQWdJQ0FnSUNCeVpYTjFiSFFnUFNBeE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2MzUnlhVzVuUTI5dGNHRnlaVHRjYmx4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwyTnZiWEJoY21VdmMzUnlhVzVuUTI5dGNHRnlaUzVxY3lJc0lseHVablZ1WTNScGIyNGdiblZ0WW1WeVEyOXRjR0Z5WlNodmJHUldZV3gxWlN3Z2JtVjNWbUZzZFdVcElIdGNibHh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHZiR1JXWVd4MVpTa2dKaVlnYVhOT1lVNG9ibVYzVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9iMnhrVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9ibVYzVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BDQnVaWGRXWVd4MVpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0ErSUc1bGQxWmhiSFZsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2JuVnRZbVZ5UTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzl1ZFcxaVpYSkRiMjF3WVhKbExtcHpJaXdpWEc1bWRXNWpkR2x2YmlCa1lYUmxRMjl0Y0dGeVpTaHZiR1JXWVd4MVpTd2dibVYzVm1Gc2RXVXBJSHRjYmx4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBUMGdiblZzYkNBbUppQnVaWGRXWVd4MVpTQTlQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLRzlzWkZaaGJIVmxJRDA5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1ZtRnNkV1VnUFQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JseHVJQ0FnSUhaaGNpQWdiMnhrVkdsdFpTQTlJRzlzWkZaaGJIVmxMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQjJZWElnSUc1bGQxUnBiV1VnUFNCdVpYZFdZV3gxWlM1blpYUlVhVzFsS0NrN1hHNGdJQ0FnYVdZZ0tHOXNaRlJwYldVZ1BDQnVaWGRVYVcxbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ2FXWWdLRzlzWkZScGJXVWdQaUJ1WlhkVWFXMWxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmx4dUlDQWdJR2xtSUNocGMwNWhUaWh2YkdSVWFXMWxLU0FtSmlCcGMwNWhUaWh1WlhkVWFXMWxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzlzWkZScGJXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9ibVYzVkdsdFpTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCa1lYUmxRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOWtZWFJsUTI5dGNHRnlaUzVxY3lJc0ltbHRjRzl5ZENCamIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaU2M3WEc1Y2JtWjFibU4wYVc5dUlHRnljbUY1UTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpbGNibnRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5UFNCdVpYZFBZbW9wWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUlBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQwOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0JzWlhRZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsTzF4dUlDQWdJSFpoY2lBZ2IyeGtUMkpxVEdWdVozUm9JRDBnYjJ4a1QySnFMbXhsYm1kMGFEdGNiaUFnSUNCMllYSWdJRzVsZDA5aWFreGxibWQwYUNBOUlHNWxkMDlpYWk1c1pXNW5kR2c3WEc0Z0lDQWdhV1lnS0c5c1pFOWlha3hsYm1kMGFDQThJRzVsZDA5aWFreGxibWQwYUNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUdsbUlDaHZiR1JQWW1wTVpXNW5kR2dnUGlCdVpYZFBZbXBNWlc1bmRHZ3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdJR2tnUFNBd095QnBJRHdnYjJ4a1QySnFUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXlaV04xY25OcGRtVWdZMjl0Y0dGeWFYTnZiaUJ2WmlCaGNuSmhlU0JsYkdWdFpXNTBjMXh1SUNBZ0lDQWdJQ0JqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdQU0JqYjIxd1lYSmxLRzlzWkU5aWFsdHBYU3dnYm1WM1QySnFXMmxkS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVXWVd4MVpTQWhQU0F3S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiWEJoY21semIyNVdZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlEQTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCaGNuSmhlVU52YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZZWEp5WVhsRGIyMXdZWEpsTG1weklpd2lhVzF3YjNKMElHTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsSnp0Y2JseHVablZ1WTNScGIyNGdiMkpxWldOMFEyOXRjR0Z5WlNodmJHUlBZbW9zSUc1bGQwOWlhaWxjYm50Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOVBTQnVaWGRQWW1vcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUdsbUlDaHZiR1JQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnYVdZZ0tHNWxkMDlpYWlBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNibHh1SUNBZ0lHeGxkQ0J3Y205d08xeHVJQ0FnSUdadmNpQW9jSEp2Y0NCcGJpQnZiR1JQWW1vcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzVsZDA5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdZMjl0Y0dGeWFYTnZibFpoYkhWbE8xeHVJQ0FnSUdadmNpQW9jSEp2Y0NCcGJpQnVaWGRQWW1vcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzlzWkU5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUNBZ0lDQXZMM0psWTNWeWMybDJaU0JqYjIxd1lYSnBjMjl1SUc5bUlHOWlhbVZqZENCd2NtOXdaWEowZVZ4dUlDQWdJQ0FnSUNCamIyMXdZWEpwYzI5dVZtRnNkV1VnUFNCamIyMXdZWEpsS0c5c1pFOWlhbHR3Y205d1hTd2dibVYzVDJKcVczQnliM0JkS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVXWVd4MVpTQWhQVDBnTUNsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjF3WVhKcGMyOXVWbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IySnFaV04wUTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzl2WW1wbFkzUkRiMjF3WVhKbExtcHpJaXdpYVcxd2IzSjBJSE4wY21sdVowTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVW5YRzVwYlhCdmNuUWdiblZ0WW1WeVEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQmtZWFJsUTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZaR0YwWlVOdmJYQmhjbVVuWEc1cGJYQnZjblFnWVhKeVlYbERiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5aGNuSmhlVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdiMkpxWldOMFEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQmpiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5amIyMXdZWEpsSjF4dWFXMXdiM0owSUdScFptWWdabkp2YlNBbkxpOWthV1ptSjF4dVhHNWxlSEJ2Y25RZ2UxeHVJQ0FnSUdScFptWWdZWE1nWkdWbVlYVnNkQ3hjYmlBZ0lDQmpiMjF3WVhKbExGeHVJQ0FnSUhOMGNtbHVaME52YlhCaGNtVXNYRzRnSUNBZ2JuVnRZbVZ5UTI5dGNHRnlaU3hjYmlBZ0lDQmtZWFJsUTI5dGNHRnlaU3hjYmlBZ0lDQmhjbkpoZVVOdmJYQmhjbVVzWEc0Z0lDQWdiMkpxWldOMFEyOXRjR0Z5WlZ4dWZWeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbVoxYm1OMGFXOXVJR2x6S0c5aWFpd2dWSGx3WlNrZ2UxeHVJQ0FnSUdsbUlDaHZZbW9nUFQwZ2JuVnNiQ0I4ZkNCdlltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJR2xtSUNodlltb2dhVzV6ZEdGdVkyVnZaaUJVZVhCbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQnBaaUFvVkhsd1pTQTlQVDBnVDJKcVpXTjBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZb2IySnFLU0E5UFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCVWVYQmxJRDA5UFNCVGRISnBibWM3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaWh2WW1vcElEMDlQU0FuYm5WdFltVnlKeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlI1Y0dVZ1BUMDlJRTUxYldKbGNqdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUtHOWlhaWtnUFQwOUlDZGliMjlzWldGdUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGUjVjR1VnUFQwOUlFSnZiMnhsWVc0N1hHNGdJQ0FnYVdZZ0tGUjVjR1VnUFQwOUlFRnljbUY1S1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUVhKeVlYa3VhWE5CY25KaGVTaHZZbW9wTzF4dVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JwY3p0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFYTXVhbk1pTENKcGJYQnZjblFnWTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZZMjl0Y0dGeVpTYzdYRzVjYmk4dklFbG1JSFJvWlhKbElHbHpJRzV2SUdOb1lXNW5aU0J5WlhSMWNtNXpJSFZ1WkdWbWFXNWxaRnh1THk4Z2FXWWdkR2hsY21VZ2FYTWdZU0JqYUdGdVoyVWdjbVYwZFhKdWN5QjBhR1VnYkdGMFpYTjBJSFpoYkhWbFhHNW1kVzVqZEdsdmJpQmthV1ptS0dOdmJYQmhjbVZrVm1Gc2RXVXNJSFpoYkhWbEtYdGNibHgwWTI5dWMzUWdZMjl0Y0dGeWFYTnZibFpoYkhWbElEMGdJR052YlhCaGNtVW9ZMjl0Y0dGeVpXUldZV3gxWlN3Z2RtRnNkV1VwTzF4dVhHNWNkR2xtS0dOdmJYQmhjbWx6YjI1V1lXeDFaU0E5UFQwZ01DbDdYRzVjZEZ4MGRtRnNkV1VnUFNCMWJtUmxabWx1WldRN1hHNWNkSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdaR2xtWmp0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlpHbG1aaTVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9kaWZmLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgRGlmZkxvZ2dlciBmcm9tICcuL0RpZmZMb2dnZXInO1xuXG5leHBvcnQge1xuXHRMb2dnZXIgYXMgZGVmYXVsdCxcblx0RGlmZkxvZ2dlclxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IGRpZmYgZnJvbSAnZGlmZic7XG5pbXBvcnQgTG9nRW50cnkgZnJvbSAnLi9Mb2dFbnRyeSc7XG5cbmZ1bmN0aW9uIGFwcGx5RGlmZihzdGVwcywgY2FsbGJhY2spIHtcblx0Y29uc3Qge2NvbnRleHQsIHVuZG9Mb2csIHJlZG9Mb2csIGdldHRlciwgc2V0dGVyfSA9IHRoaXM7XG5cdGxldCB7IHByZXZTdGF0ZSB9ID0gdGhpcztcblx0Y29uc3QgYWJzU3RlcHMgPSBNYXRoLmFicyhzdGVwcyk7XG5cdGxldCBzdGVwc1JlbWFpbmluZyA9IE1hdGgubWluKGFic1N0ZXBzLCBzdGVwcyA8IDAgPyB1bmRvTG9nLmxlbmd0aCA6IHJlZG9Mb2cubGVuZ3RoKTtcblx0aWYgKHN0ZXBzUmVtYWluaW5nID4gMCkge1xuXHRcdGxldCBsb2dFbnRyeSwgZGlmZjtcblx0XHR3aGlsZSAoc3RlcHNSZW1haW5pbmctLSA+IDApIHtcblx0XHRcdGlmIChzdGVwcyA8IDApIHsgLy8gdW5kb1xuXHRcdFx0XHRsb2dFbnRyeSA9IHVuZG9Mb2cucG9wKCk7XG5cdFx0XHRcdHJlZG9Mb2cudW5zaGlmdChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5wcmV2O1xuXHRcdFx0fSBlbHNlIHsgLy9yZWRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gcmVkb0xvZy5zaGlmdCgpO1xuXHRcdFx0XHR1bmRvTG9nLnB1c2gobG9nRW50cnkpO1xuXHRcdFx0XHRkaWZmID0gbG9nRW50cnkubmV4dDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0ZXBzUmVtYWluaW5nID09PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJldlN0YXRlID0gZGlmZi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gc2luY2UgcHJpbWl0aXZlIGFyZSBpbW11dGFibGUgd2UgZG9uJ3QgY2FsbCB0aGVtIGluIHNwcmVhZCBkZWNsYXJhdGlvbiBhYm92ZVxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSB0cnVlO1xuXHRcdC8vIG5vdyBhZnRlciByZWFjaGluZyB0aGUgTG9nIGVudHJ5IGFwcGx5IHRoZSBkaWZmIHRvIGN1cnJlbnQgc3RhdGVcblx0XHRzZXR0ZXIuY2FsbChjb250ZXh0LCBkaWZmLCBjYWxsYmFjayk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gc2luY2UgcHJpbWl0aXZlIGFyZSBpbW11dGFibGUgd2UgZG9uJ3QgY2FsbCB0aGVtIGluIHNwcmVhZCBkZWNsYXJhdGlvbiBhYm92ZVxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0fVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXHRjb25zdHJ1Y3RvcihzYXZlQ2FsbGJhY2spe1xuXHRcdHRoaXMuY29udGV4dDtcblx0XHR0aGlzLmdldHRlcjtcblx0XHR0aGlzLnNldHRlcjtcblx0XHR0aGlzLmRpZmZNZXRob2Q7XG5cblx0XHR0aGlzLnVuZG9Mb2cgPSBbXTtcblx0XHR0aGlzLnJlZG9Mb2cgPSBbXTtcblxuXHRcdHRoaXMucHJldlN0YXRlID0gbnVsbDtcblx0XHR0aGlzLm5leHRJZCA9IDA7XG5cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2s7XG5cblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbmFibGUgPSB0cnVlO1xuXHR9XG59XG5cbkxvZ2dlci5wcm90b3R5cGUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uKGNvbnRleHQsIGdldHRlciwgc2V0dGVyLCBkaWZmTWV0aG9kKXtcblx0aWYoIWdldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IGdldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKCFzZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBzZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5nZXR0ZXIgPSBnZXR0ZXI7XG5cdHRoaXMuc2V0dGVyID0gc2V0dGVyO1xuXHR0aGlzLmRpZmZNZXRob2QgPSBkaWZmTWV0aG9kO1xuXHR0aGlzLnByZXZTdGF0ZSA9IGdldHRlci5jYWxsKGNvbnRleHQpO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5zZXRTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbihzYXZlQ2FsbGJhY2spe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2tcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUucmVtb3ZlU2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gbnVsbDtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0YXBwbHlEaWZmLmNhbGwodGhpcywgLXN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnJlZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2spe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdGFwcGx5RGlmZi5jYWxsKHRoaXMsIHN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmRpZmZBcHBsaWVkKXtcblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gZmFsc2U7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBsb2c7XG5cdFx0bGV0IGdldERpZmYgPSB0aGlzLmRpZmZNZXRob2QgPyB0aGlzLmRpZmZNZXRob2QgOiBkaWZmO1xuXHRcdGlmKHRoaXMuY29udGV4dCl7XG5cdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy5jb250ZXh0KTtcblx0XHRcdGNvbnN0IGRpZmZPYmplY3QgPSBnZXREaWZmKHRoaXMucHJldlN0YXRlLCBzdGF0ZSk7XG5cdFx0XHQvLyBDaGFuZ2Ugb2NjdXJyZWQgbG9nIHRoZW1cblx0XHRcdGlmIChkaWZmT2JqZWN0LmN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsb2cgPSBuZXcgTG9nRW50cnkodGhpcy5uZXh0SWQrKywgZGlmZk9iamVjdC5jdXJyZW50LCBkaWZmT2JqZWN0LnByZXYpO1xuXHRcdFx0XHRpZih0aGlzLnJlZG9Mb2cubGVuZ3RoICE9PSAwKXtcblx0XHRcdFx0XHRjb25zdCBuZXh0TG9nID0gdGhpcy5yZWRvTG9nWzBdO1xuXHRcdFx0XHRcdG5leHRMb2cucHJldiA9IGxvZy5uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudW5kb0xvZy5wdXNoKGxvZyk7XG5cdFx0XHRcdHRoaXMucHJldlN0YXRlID0gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayAmJiB0aGlzLnNhdmVEaWZmQ2FsbGJhY2sobG9nKTtcblx0fVxufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTG9nZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nRW50cnkge1xuXHRjb25zdHJ1Y3RvcihpZCwgbmV4dCwgcHJldil7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmV4dCA9IG5leHQ7XG5cdFx0dGhpcy5wcmV2ID0gcHJldjtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Mb2dFbnRyeS5qcyIsImltcG9ydCBQaXZvdGVkTGlua2VkTGlzdCBmcm9tICdwaXZvdGVkLWxpbmtlZC1saXN0JztcbmltcG9ydCB7Y29tYmluZURpZmZ9IGZyb20gJy4vaGVscGVyJztcblxuZnVuY3Rpb24gc2hpZnRBbmRBcHBseUxvZyhzdGVwcyx0eXBlLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpIHtcblx0Y29uc3Qge2NvbnRleHQsIGxvZ0xpc3QgfSA9IHRoaXM7XG5cdGxldCBsb2dFbnRyeSwgYmFzZURpZmY7XG5cdGlmKHN0ZXBzID09PSAwKXtcblx0XHRsb2dFbnRyeSA9IGxvZ0xpc3QucGl2b3Q7XG5cdFx0bG9nTGlzdC5zaGlmdFBpdm90KHR5cGUgPT09IFwidW5kb1wiID8gLTEgOiAxKTtcblx0XHRjb25zdCBmb3J3YXJkQmFja3dhcmREaWZmID0gbG9nRW50cnkuZWxlbWVudDtcblx0XHRjb25zdCB7Zm9yd2FyZCwgYmFja3dhcmR9ID0gZm9yd2FyZEJhY2t3YXJkRGlmZjtcblx0XHRsZXQgZGlmZlN0YXRlOy8vU3RhdGUgYXMgSlNPTlxuXHRcdGlmKHR5cGUgPT09IFwidW5kb1wiKXtcblx0XHRcdGRpZmZTdGF0ZSA9IGJhY2t3YXJkXG5cdFx0fSBlbHNlIGlmKCB0eXBlID09PSBcInJlZG9cIil7XG5cdFx0XHRkaWZmU3RhdGUgPSBmb3J3YXJkXG5cdFx0fVxuXHRcdGJhc2VEaWZmID0gZGlmZlN0YXRlLnZhbHVlIDtcblx0fSBlbHNlIHtcblx0XHRpZigodHlwZSA9PT0gXCJ1bmRvXCIpKXtcblx0XHRcdHN0ZXBzID0gLXN0ZXBzO1xuXHRcdFx0d2hpbGUoc3RlcHMgPj0gMCl7XG5cdFx0XHRcdGxvZ0VudHJ5ID0gbG9nTGlzdC5waXZvdDtcblx0XHRcdFx0bG9nTGlzdC5zaGlmdFBpdm90KC0xICk7XG5cdFx0XHRcdGNvbnN0IGZvcndhcmRCYWNrd2FyZERpZmYgPSBsb2dFbnRyeS5lbGVtZW50O1xuXHRcdFx0XHRjb25zdCBkaWZmU3RhdGUgPSBmb3J3YXJkQmFja3dhcmREaWZmLmJhY2t3YXJkO1xuXHRcdFx0XHRjb25zdCBkaWZmVmFsdWUgPSBkaWZmU3RhdGUudmFsdWUgO1xuXHRcdFx0XHRiYXNlRGlmZiA9IGNvbWJpbmVEaWZmKGJhc2VEaWZmLCBkaWZmVmFsdWUpO1xuXHRcdFx0XHRzdGVwcyA9IHN0ZXBzIC0gMTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUoc3RlcHMgPiAwKXtcblx0XHRcdFx0bG9nRW50cnkgPSBsb2dMaXN0LnNoaWZ0UGl2b3QoMSk7XG5cdFx0XHRcdGNvbnN0IGZvcndhcmRCYWNrd2FyZERpZmYgPSBsb2dFbnRyeS5lbGVtZW50O1xuXHRcdFx0XHRjb25zdCBkaWZmU3RhdGUgPSBmb3J3YXJkQmFja3dhcmREaWZmLmZvcndhcmQ7XG5cdFx0XHRcdGNvbnN0IGRpZmZWYWx1ZSA9IGRpZmZTdGF0ZS52YWx1ZSA7XG5cdFx0XHRcdGJhc2VEaWZmID0gY29tYmluZURpZmYoYmFzZURpZmYsIGRpZmZWYWx1ZSk7XG5cdFx0XHRcdHN0ZXBzID0gc3RlcHMgLSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGRpZmZMb2dnZXJJbnN0YW5jZSA9IHRoaXM7XG5cdGNvbnRleHQuYXBwbHlEaWZmLmNhbGwoY29udGV4dCwgYmFzZURpZmYsIGZ1bmN0aW9uKCl7XG5cdFx0dXBkYXRlTGFzdEFjdGl2ZVN0YXRlLmNhbGwoZGlmZkxvZ2dlckluc3RhbmNlKTtcblx0XHRjYWxsYmFjaygpXG5cdH0pO1xuXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVMYXN0QWN0aXZlU3RhdGUoKXtcblx0dGhpcy5sYXN0QWN0aXZlU3RhdGUgPSB0aGlzLmNvbnRleHQuZ2V0U3RhdGUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkxvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpe1xuXHRcdGlmKCFjb250ZXh0KXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb250ZXh0IGNhbnQgYmUgbnVsbFwiKTtcblx0XHR9XG5cblx0XHRpZighY29udGV4dC5hcHBseURpZmYpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkNvbnRleHQgbmVlZHMgdG8gaW1wbGVtZW50IGFwcGx5RGlmZiBtZXRob2RcIik7XG5cdFx0fVxuXG5cdFx0aWYoIWNvbnRleHQuZ2V0U3RhdGUpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkNvbnRleHQgbmVlZHMgdG8gaW1wbGVtZW50IGdldFN0YXRlIG1ldGhvZFwiKTtcblx0XHR9XG5cblx0XHRpZighY29udGV4dC5nZXREaWZmKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb250ZXh0IG5lZWRzIHRvIGltcGxlbWVudCBnZXREaWZmIG1ldGhvZFwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG5cdFx0dGhpcy5sb2dMaXN0ID0gbmV3IFBpdm90ZWRMaW5rZWRMaXN0KFtdKTtcblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xuXHRcdHRoaXMuZW5hYmxlID0gdHJ1ZTtcblxuXHRcdHVwZGF0ZUxhc3RBY3RpdmVTdGF0ZS5jYWxsKHRoaXMpXG5cdH1cbn1cblxuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5zZXRTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbihzYXZlQ2FsbGJhY2spe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2tcbn07XG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnJlbW92ZVNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcil7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0c2hpZnRBbmRBcHBseUxvZy5jYWxsKHRoaXMsIC1zdGVwcywgXCJ1bmRvXCIsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcik7XG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5yZWRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrLCBvYmplY3RWZXJpZmllcil7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0c2hpZnRBbmRBcHBseUxvZy5jYWxsKHRoaXMsIHN0ZXBzLCBcInJlZG9cIiwgY2FsbGJhY2ssIG9iamVjdFZlcmlmaWVyKTtcbn07XG5cblxuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBmb3J3YXJkQmFja3dhcmREaWZmO1xuXHRcdGlmKHRoaXMuY29udGV4dCl7XG5cdFx0XHRmb3J3YXJkQmFja3dhcmREaWZmID0gdGhpcy5jb250ZXh0LmdldERpZmYodGhpcy5sYXN0QWN0aXZlU3RhdGUsIHRydWUpO1xuXHRcdFx0Y29uc3Qge2ZvcndhcmQsIGJhY2t3YXJkfSA9IGZvcndhcmRCYWNrd2FyZERpZmY7XG5cblx0XHRcdGlmICh0eXBlb2YgZm9yd2FyZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYmFja3dhcmQgPT09IFwib2JqZWN0XCIpIHsgLy8gQ2hhbmdlIG9jY3VycmVkIGxvZyB0aGVtXG5cdFx0XHRcdHRoaXMubG9nTGlzdC5pbnNlcnQoZm9yd2FyZEJhY2t3YXJkRGlmZik7XG5cdFx0XHRcdHVwZGF0ZUxhc3RBY3RpdmVTdGF0ZS5jYWxsKHRoaXMpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayAmJiB0aGlzLnNhdmVEaWZmQ2FsbGJhY2soZm9yd2FyZEJhY2t3YXJkRGlmZik7XG5cdH1cbn07XG5cblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuZ2V0Q3VycmVudExvZyA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMubG9nTGlzdCApe1xuXHRcdHJldHVybiB0aGlzLmxvZ0xpc3QuZ2V0UGl2b3RFbGVtZW50KCk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9EaWZmTG9nZ2VyLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsaW5rZWRsaXN0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGlua2VkbGlzdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBpdm90ZWRMaW5rZWRMaXN0ID0gZnVuY3Rpb24gUGl2b3RlZExpbmtlZExpc3QoYXJyYXkpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBpdm90ZWRMaW5rZWRMaXN0KTtcblxuXHR0aGlzLnBpdm90ID0gbnVsbDtcblx0dGhpcy5oZWFkID0gbnVsbDtcblx0dGhpcy50YWlsID0gbnVsbDtcblx0dGhpcy5sZW5ndGggPSAwO1xuXHRhcnJheSAmJiB0aGlzLmNyZWF0ZShhcnJheSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaXZvdGVkTGlua2VkTGlzdDtcblxuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByZUluc2VydCwgcG9zdEluc2VydCkge1xuXHR2YXIgbmV3Tm9kZSA9IG5ldyBfTm9kZTIuZGVmYXVsdChlbGVtZW50KTtcblx0dGhpcy5sZW5ndGgrKztcblxuXHR2YXIgY3VycmVudCA9IHZvaWQgMCxcblx0ICAgIG5leHQgPSB2b2lkIDA7XG5cblx0aWYgKCF0aGlzLnBpdm90KSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGFzIGZpcnN0IGVsZW1lbnRcblx0XHRwcmVJbnNlcnQgJiYgcHJlSW5zZXJ0KG5ld05vZGUpO1xuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cdFx0cG9zdEluc2VydCAmJiBwb3N0SW5zZXJ0KG5ld05vZGUpO1xuXHR9IGVsc2UgaWYgKHRoaXMucGl2b3QubmV4dCkge1xuXHRcdC8vIGluc2VydGluZyBpbiBtaWRkbGVcblx0XHRjdXJyZW50ID0gdGhpcy5waXZvdDtcblx0XHRuZXh0ID0gdGhpcy5waXZvdC5uZXh0O1xuXHRcdHByZUluc2VydCAmJiBwcmVJbnNlcnQoY3VycmVudCwgbmV3Tm9kZSwgbmV4dCk7XG5cdFx0bmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0O1xuXHRcdG5ld05vZGUucHJldiA9IGN1cnJlbnQ7XG5cblx0XHRjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHRwb3N0SW5zZXJ0ICYmIHBvc3RJbnNlcnQoY3VycmVudCwgbmV3Tm9kZSwgbmV4dCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGFzIGxhc3QgZWxlbWVudFxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdHByZUluc2VydCAmJiBwcmVJbnNlcnQoY3VycmVudCwgbmV3Tm9kZSk7XG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdFx0dGhpcy50YWlsID0gbmV3Tm9kZTtcblx0XHRwb3N0SW5zZXJ0ICYmIHBvc3RJbnNlcnQoY3VycmVudCwgbmV3Tm9kZSk7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90ID0gZnVuY3Rpb24gKHNoaWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gdGhpcy5waXZvdDtcblxuXHR2YXIgcmlnaHRTaGlmdCA9IHZvaWQgMDtcblx0aWYgKHNoaWZ0ID49IDApIHtcblx0XHRyaWdodFNoaWZ0ID0gdHJ1ZTtcblx0fVxuXG5cdHdoaWxlIChzaGlmdCAhPT0gMCkge1xuXHRcdGlmIChyaWdodFNoaWZ0KSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdFx0Y3VycmVudCA9PT0gdGhpcy50YWlsID8gc2hpZnQgPSAwIDogc2hpZnQtLTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucHJldjtcblx0XHRcdGN1cnJlbnQgPT09IHRoaXMuaGVhZCA/IHNoaWZ0ID0gMCA6IHNoaWZ0Kys7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5waXZvdCA9IGN1cnJlbnQ7XG5cblx0cmV0dXJuIHRoaXMucGl2b3Q7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvSGVhZCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9UYWlsID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gdGhpcy50YWlsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdGFycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdF90aGlzLmluc2VydChlbGVtZW50KTtcblx0fSk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHJpZ2h0VG9MZWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyB0aGlzLnRhaWwgOiB0aGlzLmhlYWQ7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0Y2FsbGJhY2soY3VycmVudC5lbGVtZW50KTtcblx0XHRjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyBjdXJyZW50LnByZXYgOiBjdXJyZW50Lm5leHQ7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGFycmF5LnB1c2goZWxlbWVudCk7XG5cdH0pO1xuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuZ2V0UGl2b3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5waXZvdCkge1xuXHRcdHJldHVybiB0aGlzLnBpdm90LmVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG5leHQgPSB0aGlzLnBpdm90Lm5leHQgPyB0aGlzLnBpdm90Lm5leHQgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gbmV4dDtcblx0cmV0dXJuIG5leHQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHByZXYgPSB0aGlzLnBpdm90LnByZXYgPyB0aGlzLnBpdm90LnByZXYgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gcHJldjtcblx0cmV0dXJuIHByZXY7XG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPSBmdW5jdGlvbiBOb2RlKGVsZW1lbnQpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JqTVRJeU16QmlOek5tTVRJM01qQmxOMll5TnlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwwNXZaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lVR2wyYjNSbFpFeHBibXRsWkV4cGMzUWlMQ0poY25KaGVTSXNJbkJwZG05MElpd2lhR1ZoWkNJc0luUmhhV3dpTENKc1pXNW5kR2dpTENKamNtVmhkR1VpTENKd2NtOTBiM1I1Y0dVaUxDSnBibk5sY25RaUxDSmxiR1Z0Wlc1MElpd2ljSEpsU1c1elpYSjBJaXdpY0c5emRFbHVjMlZ5ZENJc0ltNWxkMDV2WkdVaUxDSmpkWEp5Wlc1MElpd2libVY0ZENJc0luQnlaWFlpTENKemFHbG1kRkJwZG05MElpd2ljMmhwWm5RaUxDSnlhV2RvZEZOb2FXWjBJaXdpYzJocFpuUlFhWFp2ZEZSdlNHVmhaQ0lzSW5Ob2FXWjBVR2wyYjNSVWIxUmhhV3dpTENKdFlYQWlMQ0owY21GMlpYSnpaU0lzSW1OaGJHeGlZV05ySWl3aWNtbG5hSFJVYjB4bFpuUWlMQ0owYjBGeWNtRjVJaXdpY0hWemFDSXNJbWRsZEZCcGRtOTBSV3hsYldWdWRDSXNJazV2WkdVaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdPMEZETjBSQk96czdPenM3T3p0SlFVTnhRa0VzYVVJc1IwRkRjRUlzTWtKQlFWbERMRXRCUVZvc1JVRkJhMEk3UVVGQlFUczdRVUZEYWtJc1RVRkJTME1zUzBGQlRDeEhRVUZoTEVsQlFXSTdRVUZEUVN4TlFVRkxReXhKUVVGTUxFZEJRVmtzU1VGQldqdEJRVU5CTEUxQlFVdERMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzVFVGQlMwTXNUVUZCVEN4SFFVRmpMRU5CUVdRN1FVRkRRVW9zVlVGQlV5eExRVUZMU3l4TlFVRk1MRU5CUVZsTUxFdEJRVm9zUTBGQlZEdEJRVU5CTEVNN08ydENRVkJ0UWtRc2FVSTdPenRCUVZWeVFrRXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRa01zVFVGQk5VSXNSMEZCY1VNc1ZVRkJVME1zVDBGQlZDeEZRVUZyUWtNc1UwRkJiRUlzUlVGQk5rSkRMRlZCUVRkQ0xFVkJRWGRETzBGQlF6VkZMRXRCUVUxRExGVkJRVlVzYlVKQlFWTklMRTlCUVZRc1EwRkJhRUk3UVVGRFFTeE5RVUZMU2l4TlFVRk1PenRCUVVWQkxFdEJRVWxSTEdkQ1FVRktPMEZCUVVFc1MwRkJZVU1zWVVGQllqczdRVUZGUVN4TFFVRkhMRU5CUVVNc1MwRkJTMW9zUzBGQlZDeEZRVUZsTzBGQlFVVTdRVUZEYUVKUkxHVkJRV0ZCTEZWQlFWVkZMRTlCUVZZc1EwRkJZanRCUVVOQkxFOUJRVXRXTEV0QlFVd3NSMEZCWVZVc1QwRkJZanRCUVVOQkxFOUJRVXRVTEVsQlFVd3NSMEZCV1ZNc1QwRkJXanRCUVVOQlJDeG5Ra0ZCWTBFc1YwRkJWME1zVDBGQldDeERRVUZrTzBGQlEwRXNSVUZNUkN4TlFVdFBMRWxCUVVjc1MwRkJTMVlzUzBGQlRDeERRVUZYV1N4SlFVRmtMRVZCUVcxQ08wRkJRVVU3UVVGRE0wSkVMRmxCUVZVc1MwRkJTMWdzUzBGQlpqdEJRVU5CV1N4VFFVRlBMRXRCUVV0YUxFdEJRVXdzUTBGQlYxa3NTVUZCYkVJN1FVRkRRVW9zWlVGQllVRXNWVUZCVlVjc1QwRkJWaXhGUVVGclFrUXNUMEZCYkVJc1JVRkJNRUpGTEVsQlFURkNMRU5CUVdJN1FVRkRRVVlzVlVGQlVVVXNTVUZCVWl4SFFVRmxSQ3hSUVVGUlF5eEpRVUYyUWp0QlFVTkJSaXhWUVVGUlJ5eEpRVUZTTEVkQlFXVkdMRTlCUVdZN08wRkJSVUZCTEZWQlFWRkRMRWxCUVZJc1IwRkJaVVlzVDBGQlpqdEJRVU5CUlN4UFFVRkxReXhKUVVGTUxFZEJRVmxJTEU5QlFWbzdPMEZCUlVFc1QwRkJTMVlzUzBGQlRDeEhRVUZoVlN4UFFVRmlPMEZCUTBGRUxHZENRVUZqUVN4WFFVRlhSU3hQUVVGWUxFVkJRVzFDUkN4UFFVRnVRaXhGUVVFeVFrVXNTVUZCTTBJc1EwRkJaRHRCUVVOQkxFVkJXazBzVFVGWlFUdEJRVUZGTzBGQlExSkVMRmxCUVZVc1MwRkJTMWdzUzBGQlpqdEJRVU5CVVN4bFFVRmhRU3hWUVVGVlJ5eFBRVUZXTEVWQlFXdENSQ3hQUVVGc1FpeERRVUZpTzBGQlEwRkRMRlZCUVZGRExFbEJRVklzUjBGQlpVWXNUMEZCWmp0QlFVTkJRU3hWUVVGUlJ5eEpRVUZTTEVkQlFXVkdMRTlCUVdZN08wRkJSVUVzVDBGQlMxZ3NTMEZCVEN4SFFVRmhWU3hQUVVGaU8wRkJRMEVzVDBGQlMxSXNTVUZCVEN4SFFVRlpVU3hQUVVGYU8wRkJRMEZFTEdkQ1FVRmpRU3hYUVVGWFJTeFBRVUZZTEVWQlFXMUNSQ3hQUVVGdVFpeERRVUZrTzBGQlEwRTdRVUZGUkN4RFFXeERSRHM3UVVGdlEwRmFMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpUTEZWQlFUVkNMRWRCUVhsRExGVkJRVk5ETEV0QlFWUXNSVUZCWlR0QlFVTjJSQ3hMUVVGSlNpeFZRVUZWTEV0QlFVdFlMRXRCUVc1Q096dEJRVVZCTEV0QlFVbG5RaXh0UWtGQlNqdEJRVU5CTEV0QlFVZEVMRk5CUVZNc1EwRkJXaXhGUVVGak8wRkJRMkpETEdWQlFXRXNTVUZCWWp0QlFVTkJPenRCUVVWRUxGRkJRVTFFTEZWQlFWVXNRMEZCYUVJc1JVRkJhMEk3UVVGRGFrSXNUVUZCUjBNc1ZVRkJTQ3hGUVVGak8wRkJRMkpNTEdGQlFWVkJMRkZCUVZGRExFbEJRV3hDTzBGQlEwTkVMR1ZCUVZrc1MwRkJTMVFzU1VGQmJFSXNSMEZCTWtKaExGRkJRVkVzUTBGQmJrTXNSMEZCZDBOQkxFOUJRWGhETzBGQlEwRXNSMEZJUkN4TlFVZFBPMEZCUTA1S0xHRkJRVlZCTEZGQlFWRkZMRWxCUVd4Q08wRkJRME5HTEdWQlFWa3NTMEZCUzFZc1NVRkJiRUlzUjBGQk1rSmpMRkZCUVZFc1EwRkJia01zUjBGQmQwTkJMRTlCUVhoRE8wRkJRMEU3UVVGRFJEczdRVUZGUkN4TlFVRkxaaXhMUVVGTUxFZEJRV0ZYTEU5QlFXSTdPMEZCUlVFc1VVRkJUeXhMUVVGTFdDeExRVUZhTzBGQlEwRXNRMEZ5UWtRN08wRkJkVUpCUml4clFrRkJhMEpQTEZOQlFXeENMRU5CUVRSQ1dTeG5Ra0ZCTlVJc1IwRkJLME1zV1VGQlZUdEJRVU40UkN4TlFVRkxha0lzUzBGQlRDeEhRVUZoTEV0QlFVdERMRWxCUVd4Q08wRkJRMEVzUTBGR1JEczdRVUZKUVVnc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFtRXNaMEpCUVRWQ0xFZEJRU3RETEZsQlFWVTdRVUZEZUVRc1RVRkJTMnhDTEV0QlFVd3NSMEZCWVN4TFFVRkxSU3hKUVVGc1FqdEJRVU5CTEVOQlJrUTdPMEZCU1VGS0xHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSkVMRTFCUVRWQ0xFZEJRWEZETEZWQlFWTk1MRXRCUVZRc1JVRkJaVHRCUVVGQk96dEJRVU51UkVFc1QwRkJUVzlDTEVkQlFVNHNRMEZCVlN4VlFVRkRXaXhQUVVGRUxFVkJRVmM3UVVGRGNFSXNVVUZCUzBRc1RVRkJUQ3hEUVVGWlF5eFBRVUZhTzBGQlEwRXNSVUZHUkR0QlFVZEJMRU5CU2tRN08wRkJUVUZVTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKbExGRkJRVFZDTEVkQlFYVkRMRlZCUVZORExGRkJRVlFzUlVGQmJVSkRMRmRCUVc1Q0xFVkJRU3RDTzBGQlEzSkZMRXRCUVVsWUxGVkJRVlZYTEdOQlFXTXNTMEZCUzNCQ0xFbEJRVzVDTEVkQlFUQkNMRXRCUVV0RUxFbEJRVGRETzBGQlEwRXNVVUZCVFZVc1QwRkJUaXhGUVVGak8wRkJRMkpWTEZkQlFWTldMRkZCUVZGS0xFOUJRV3BDTzBGQlEwRkpMRmxCUVZWWExHTkJRV05ZTEZGQlFWRkZMRWxCUVhSQ0xFZEJRVFpDUml4UlFVRlJReXhKUVVFdlF6dEJRVU5CTzBGQlEwUXNRMEZPUkRzN1FVRlRRV1FzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUW10Q0xFOUJRVFZDTEVkQlFYTkRMRmxCUVZVN1FVRkRMME1zUzBGQlRYaENMRkZCUVZFc1JVRkJaRHRCUVVOQkxFMUJRVXR4UWl4UlFVRk1MRU5CUVdNc1ZVRkJRMklzVDBGQlJDeEZRVUZYTzBGQlEzaENVaXhSUVVGTmVVSXNTVUZCVGl4RFFVRlhha0lzVDBGQldEdEJRVU5CTEVWQlJrUTdRVUZIUVN4UlFVRlBVaXhMUVVGUU8wRkJRMEVzUTBGT1JEczdRVUZSUVVRc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFtOUNMR1ZCUVRWQ0xFZEJRVGhETEZsQlFWVTdRVUZEZGtRc1MwRkJSeXhMUVVGTGVrSXNTMEZCVWl4RlFVRmpPMEZCUTJJc1UwRkJUeXhMUVVGTFFTeExRVUZNTEVOQlFWZFBMRTlCUVd4Q08wRkJRMEU3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZEUVN4RFFVeEVPenRCUVU5QlZDeHJRa0ZCYTBKUExGTkJRV3hDTEVOQlFUUkNUeXhKUVVFMVFpeEhRVUZ0UXl4WlFVRlZPMEZCUXpWRExFdEJRVTFCTEU5QlFVOHNTMEZCUzFvc1MwRkJUQ3hEUVVGWFdTeEpRVUZZTEVkQlFXdENMRXRCUVV0YUxFdEJRVXdzUTBGQlYxa3NTVUZCTjBJc1IwRkJjVU1zUzBGQlMxb3NTMEZCZGtRN1FVRkRRU3hOUVVGTFFTeExRVUZNTEVkQlFXRlpMRWxCUVdJN1FVRkRRU3hSUVVGUFFTeEpRVUZRTzBGQlEwRXNRMEZLUkRzN1FVRk5RV1FzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxFc1NVRkJOVUlzUjBGQmJVTXNXVUZCVlR0QlFVTTFReXhMUVVGTlFTeFBRVUZQTEV0QlFVdGlMRXRCUVV3c1EwRkJWMkVzU1VGQldDeEhRVUZyUWl4TFFVRkxZaXhMUVVGTUxFTkJRVmRoTEVsQlFUZENMRWRCUVhGRExFdEJRVXRpTEV0QlFYWkVPMEZCUTBFc1RVRkJTMEVzUzBGQlRDeEhRVUZoWVN4SlFVRmlPMEZCUTBFc1VVRkJUMEVzU1VGQlVEdEJRVU5CTEVOQlNrUXNRenM3T3pzN096czdPenM3T3pzN08wbERiRWh4UW1Fc1NTeEhRVU53UWl4alFVRlpia0lzVDBGQldpeEZRVUZ2UWp0QlFVRkJPenRCUVVOdVFpeE5RVUZMUVN4UFFVRk1MRWRCUVdWQkxFOUJRV1k3UVVGRFFTeE5RVUZMU3l4SlFVRk1MRWRCUVZrc1NVRkJXanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1F6czdhMEpCVEcxQ1lTeEpJaXdpWm1sc1pTSTZJbXhwWWk5cGJtUmxlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGd2liR2x1YTJWa2JHbHpkRndpTENCYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pzYVc1clpXUnNhWE4wWENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW14cGJtdGxaR3hwYzNSY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1OUtTaDBlWEJsYjJZZ2MyVnNaaUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJ6Wld4bUlEb2dkR2hwY3l3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lHTXhNakl6TUdJM00yWXhNamN5TUdVM1pqSTNJaXdpYVcxd2IzSjBJRTV2WkdVZ1puSnZiU0JjSWk0dlRtOWtaVndpTzF4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVR2wyYjNSbFpFeHBibXRsWkV4cGMzUWdlMXh1WEhSamIyNXpkSEoxWTNSdmNpaGhjbkpoZVNsN1hHNWNkRngwZEdocGN5NXdhWFp2ZENBOUlHNTFiR3c3WEc1Y2RGeDBkR2hwY3k1b1pXRmtJRDBnYm5Wc2JEdGNibHgwWEhSMGFHbHpMblJoYVd3Z1BTQnVkV3hzTzF4dVhIUmNkSFJvYVhNdWJHVnVaM1JvSUQwZ01EdGNibHgwWEhSaGNuSmhlU0FtSmlCMGFHbHpMbU55WldGMFpTaGhjbkpoZVNrN1hHNWNkSDFjYm4xY2JseHVVR2wyYjNSbFpFeHBibXRsWkV4cGMzUXVjSEp2ZEc5MGVYQmxMbWx1YzJWeWRDQTlJR1oxYm1OMGFXOXVLR1ZzWlcxbGJuUXNJSEJ5WlVsdWMyVnlkQ3dnY0c5emRFbHVjMlZ5ZENsN1hHNWNkR052Ym5OMElHNWxkMDV2WkdVZ1BTQnVaWGNnVG05a1pTaGxiR1Z0Wlc1MEtUdGNibHgwZEdocGN5NXNaVzVuZEdnckt6dGNibHh1WEhSc1pYUWdZM1Z5Y21WdWRDd2dibVY0ZER0Y2JseHVYSFJwWmlnaGRHaHBjeTV3YVhadmRDbDdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5Qm1hWEp6ZENCbGJHVnRaVzUwWEc1Y2RGeDBjSEpsU1c1elpYSjBJQ1ltSUhCeVpVbHVjMlZ5ZENodVpYZE9iMlJsS1R0Y2JseDBYSFIwYUdsekxuQnBkbTkwSUQwZ2JtVjNUbTlrWlR0Y2JseDBYSFIwYUdsekxtaGxZV1FnUFNCdVpYZE9iMlJsTzF4dVhIUmNkSEJ2YzNSSmJuTmxjblFnSmlZZ2NHOXpkRWx1YzJWeWRDaHVaWGRPYjJSbEtUdGNibHgwZlNCbGJITmxJR2xtS0hSb2FYTXVjR2wyYjNRdWJtVjRkQ2w3SUM4dklHbHVjMlZ5ZEdsdVp5QnBiaUJ0YVdSa2JHVmNibHgwWEhSamRYSnlaVzUwSUQwZ2RHaHBjeTV3YVhadmREdGNibHgwWEhSdVpYaDBJRDBnZEdocGN5NXdhWFp2ZEM1dVpYaDBPMXh1WEhSY2RIQnlaVWx1YzJWeWRDQW1KaUJ3Y21WSmJuTmxjblFvWTNWeWNtVnVkQ3h1WlhkT2IyUmxMRzVsZUhRcE8xeHVYSFJjZEc1bGQwNXZaR1V1Ym1WNGRDQTlJR04xY25KbGJuUXVibVY0ZER0Y2JseDBYSFJ1WlhkT2IyUmxMbkJ5WlhZZ1BTQmpkWEp5Wlc1ME8xeHVYRzVjZEZ4MFkzVnljbVZ1ZEM1dVpYaDBJRDBnYm1WM1RtOWtaVHRjYmx4MFhIUnVaWGgwTG5CeVpYWWdQU0J1WlhkT2IyUmxPMXh1WEc1Y2RGeDBkR2hwY3k1d2FYWnZkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBjRzl6ZEVsdWMyVnlkQ0FtSmlCd2IzTjBTVzV6WlhKMEtHTjFjbkpsYm5Rc2JtVjNUbTlrWlN4dVpYaDBLVHRjYmx4MGZTQmxiSE5sSUhzZ0x5OGdhVzV6WlhKMGFXNW5JR0Z6SUd4aGMzUWdaV3hsYldWdWRGeHVYSFJjZEdOMWNuSmxiblFnUFNCMGFHbHpMbkJwZG05ME8xeHVYSFJjZEhCeVpVbHVjMlZ5ZENBbUppQndjbVZKYm5ObGNuUW9ZM1Z5Y21WdWRDeHVaWGRPYjJSbEtUdGNibHgwWEhSamRYSnlaVzUwTG01bGVIUWdQU0J1WlhkT2IyUmxPMXh1WEhSY2RHNWxkMDV2WkdVdWNISmxkaUE5SUdOMWNuSmxiblE3WEc1Y2JseDBYSFIwYUdsekxuQnBkbTkwSUQwZ2JtVjNUbTlrWlR0Y2JseDBYSFIwYUdsekxuUmhhV3dnUFNCdVpYZE9iMlJsTzF4dVhIUmNkSEJ2YzNSSmJuTmxjblFnSmlZZ2NHOXpkRWx1YzJWeWRDaGpkWEp5Wlc1MExHNWxkMDV2WkdVcE8xeHVYSFI5WEc1Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1emFHbG1kRkJwZG05MElEMGdablZ1WTNScGIyNG9jMmhwWm5RcGUxeHVYSFJzWlhRZ1kzVnljbVZ1ZENBOUlIUm9hWE11Y0dsMmIzUTdYRzVjYmx4MGJHVjBJSEpwWjJoMFUyaHBablE3WEc1Y2RHbG1LSE5vYVdaMElENDlJREFwZTF4dVhIUmNkSEpwWjJoMFUyaHBablFnUFNCMGNuVmxPMXh1WEhSOVhHNWNibHgwZDJocGJHVW9jMmhwWm5RZ0lUMDlJREFwZTF4dVhIUmNkR2xtS0hKcFoyaDBVMmhwWm5RcGUxeHVYSFJjZEZ4MFkzVnljbVZ1ZENBOUlHTjFjbkpsYm5RdWJtVjRkRHRjYmx4MFhIUmNkQ2hqZFhKeVpXNTBJRDA5UFNCMGFHbHpMblJoYVd3cElEOGdLSE5vYVdaMElEMGdNQ2tnT2lCemFHbG1kQzB0TzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXdjbVYyTzF4dVhIUmNkRngwS0dOMWNuSmxiblFnUFQwOUlIUm9hWE11YUdWaFpDa2dQeUFvYzJocFpuUWdQU0F3S1NBNklITm9hV1owS3lzN1hHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGRHaHBjeTV3YVhadmRDQTlJR04xY25KbGJuUTdYRzVjYmx4MGNtVjBkWEp1SUhSb2FYTXVjR2wyYjNRN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWMyaHBablJRYVhadmRGUnZTR1ZoWkNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEhSb2FYTXVjR2wyYjNRZ1BTQjBhR2x6TG1obFlXUTdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVjMmhwWm5SUWFYWnZkRlJ2VkdGcGJDQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RIUm9hWE11Y0dsMmIzUWdQU0IwYUdsekxuUmhhV3c3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1WTNKbFlYUmxJRDBnWm5WdVkzUnBiMjRvWVhKeVlYa3BlMXh1WEhSaGNuSmhlUzV0WVhBb0tHVnNaVzFsYm5RcFBUNTdYRzVjZEZ4MGRHaHBjeTVwYm5ObGNuUW9aV3hsYldWdWRDazdYRzVjZEgwcFhHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWRISmhkbVZ5YzJVZ1BTQm1kVzVqZEdsdmJpaGpZV3hzWW1GamF5d2djbWxuYUhSVWIweGxablFwZTF4dVhIUnNaWFFnWTNWeWNtVnVkQ0E5SUhKcFoyaDBWRzlNWldaMElEOGdkR2hwY3k1MFlXbHNJRG9nZEdocGN5NW9aV0ZrTzF4dVhIUjNhR2xzWlNoamRYSnlaVzUwS1h0Y2JseDBYSFJqWVd4c1ltRmpheWhqZFhKeVpXNTBMbVZzWlcxbGJuUXBPMXh1WEhSY2RHTjFjbkpsYm5RZ1BTQnlhV2RvZEZSdlRHVm1kQ0EvSUdOMWNuSmxiblF1Y0hKbGRpQTZJR04xY25KbGJuUXVibVY0ZER0Y2JseDBmVnh1ZlR0Y2JseHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1ZEc5QmNuSmhlU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkR052Ym5OMElHRnljbUY1SUQwZ1cxMDdYRzVjZEhSb2FYTXVkSEpoZG1WeWMyVW9LR1ZzWlcxbGJuUXBQVDU3WEc1Y2RGeDBZWEp5WVhrdWNIVnphQ2hsYkdWdFpXNTBLVHRjYmx4MGZTbGNibHgwY21WMGRYSnVJR0Z5Y21GNU8xeHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtZGxkRkJwZG05MFJXeGxiV1Z1ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdsbUtIUm9hWE11Y0dsMmIzUXBlMXh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbkJwZG05MExtVnNaVzFsYm5RN1hHNWNkSDFjYmx4MGNtVjBkWEp1SUc1MWJHdzdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVibVY0ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdOdmJuTjBJRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRZ1B5QjBhR2x6TG5CcGRtOTBMbTVsZUhRZ09pQWdkR2hwY3k1d2FYWnZkRHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJRzVsZUhRN1hHNWNkSEpsZEhWeWJpQnVaWGgwTzF4dWZUdGNibHh1VUdsMmIzUmxaRXhwYm10bFpFeHBjM1F1Y0hKdmRHOTBlWEJsTG5CeVpYWWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUmpiMjV6ZENCd2NtVjJJRDBnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRDhnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRG9nSUhSb2FYTXVjR2wyYjNRN1hHNWNkSFJvYVhNdWNHbDJiM1FnUFNCd2NtVjJPMXh1WEhSeVpYUjFjbTRnY0hKbGRqdGNibjA3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJsdVpHVjRMbXB6SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUbTlrWlh0Y2JseDBZMjl1YzNSeWRXTjBiM0lvWld4bGJXVnVkQ2w3WEc1Y2RGeDBkR2hwY3k1bGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZER0Y2JseDBYSFIwYUdsekxtNWxlSFFnUFNCdWRXeHNPMXh1WEhSY2RIUm9hWE11Y0hKbGRpQTlJRzUxYkd3N1hHNWNkSDFjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlRtOWtaUzVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9waXZvdGVkLWxpbmtlZC1saXN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGNvcHlKc29uKGpzb24pe1xuXHRjb25zdCBzdHJpbmdKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cdHJldHVybiBKU09OLnBhcnNlKHN0cmluZ0pzb24pO1xufVxuXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycmF5ICwgaWROYW1lLCByZXBsYWNlV2l0aElkID0gZmFsc2UsIHJldHVybklkcyA9IGZhbHNlKXtcblx0bGV0IG9iamVjdCA9IG51bGw7XG5cdGxldCBpZHMgPSByZXR1cm5JZHMgPyBbXSA6IHVuZGVmaW5lZDtcblx0aWYoYXJyYXkpe1xuXHRcdG9iamVjdCA9IHt9O1xuXHRcdGxldCBpbmRleCwgaWQsIGNoaWxkO1xuXHRcdGZvcihpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRcdGNoaWxkID0gYXJyYXlbaW5kZXhdO1xuXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyl7XG5cdFx0XHRcdGlkID0gY2hpbGQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZCA9IGNoaWxkW2lkTmFtZV07XG5cdFx0XHR9XG5cdFx0XHRvYmplY3RbaWRdID0gY2hpbGQ7XG5cdFx0XHRyZXBsYWNlV2l0aElkICYmIChhcnJheVtpbmRleF0gPSBpZCk7XG5cdFx0XHRyZXR1cm5JZHMgJiYgaWRzLnB1c2goaWQpO1xuXHRcdH1cblx0fVxuXHRpZihyZXR1cm5JZHMpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRvYmo6IG9iamVjdCxcblx0XHRcdGtleXM6IGlkc1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBpc05vdEFuTG9nZ2FibGVPYmplY3Qob2JqKXtcblx0cmV0dXJuICEodHlwZW9mIChvYmopID09PSAnb2JqZWN0JyAmJiAob2JqLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSB8fCBvYmouaGFzT3duUHJvcGVydHkoJ2lkJykpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZURpZmYgKGJhc2VEaWZmLCBkaWZmVG9BZGQpIHtcblx0Y29uc3QgYmFzZVR5cGUgPSB0eXBlb2YgKGJhc2VEaWZmKTsgLy8gdGhlIHR5cGUgb2YgbnVsbCBpcyAnb2JqZWN0J1xuXHRjb25zdCBkaWZmVHlwZSA9IHR5cGVvZiAoZGlmZlRvQWRkKTtcblxuXG5cdGlmIChiYXNlRGlmZiA9PSBudWxsIHx8IGRpZmZUb0FkZCA9PSBudWxsIHx8IGJhc2VUeXBlICE9PSBkaWZmVHlwZSB8fCBpc05vdEFuTG9nZ2FibGVPYmplY3QoYmFzZURpZmYpKSB7XG5cdFx0YmFzZURpZmYgPSBkaWZmVHlwZSA9PT0gJ29iamVjdCcgPyAgY29weUpzb24oZGlmZlRvQWRkKSA6IGRpZmZUb0FkZCAvLyByZWFjaGVkIGJvdHRvbSBtb3N0IGxldmVsXG5cdH0gZWxzZSAge1xuXHRcdGNvbnN0IGJhc2VMb29rdXAgPSBhcnJheVRvT2JqZWN0KGJhc2VEaWZmLCAnaWQnLCB0cnVlKTtcblx0XHRjb25zdCBhcnJheUFzT2JqID0gYXJyYXlUb09iamVjdChkaWZmVG9BZGQsICdpZCcsIGZhbHNlLCB0cnVlKTtcblx0XHRjb25zdCBkaWZmTG9va1VwID0gYXJyYXlBc09iai5vYmo7XG5cdFx0Y29uc3QgZGlmZlRvQWRkS2V5cyA9IGFycmF5QXNPYmoua2V5cztcblxuXHRcdC8vIGFwcGx5IGVhY2ggc3RhdGVBc0pzb24gZGlmZiBhcHBlYXJpbmcgaW4gZGlmZlRvQWRkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmVG9BZGRLZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpZCA9IGRpZmZUb0FkZEtleXNbaV07XG5cdFx0XHRjb25zdCBvbGRTdGF0ZSA9IGJhc2VMb29rdXBbaWRdO1xuXHRcdFx0Y29uc3QgbmV3U3RhdGUgPSBkaWZmTG9va1VwW2lkXTtcblxuXHRcdFx0aWYob2xkU3RhdGUpe1xuXHRcdFx0XHRpZiAodHlwZW9mIG9sZFN0YXRlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRcdFx0aWYgKG5ld1N0YXRlWydjbGFzc05hbWUnXSE9PSBvbGRTdGF0ZVsnY2xhc3NOYW1lJ10pIHsgLy8gZGVsZXRlIG9wZXJhdGlvbiB3aGVyZSBjbGFzc05hbWVzIGFyZSBub3QgZXF1YWxcblx0XHRcdFx0XHRcdFx0YmFzZUxvb2t1cFtpZF0gPSBjb3B5SnNvbihuZXdTdGF0ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRvbGRTdGF0ZVsndmFsdWUnXSA9IGNvbWJpbmVEaWZmKG9sZFN0YXRlWyd2YWx1ZSddLCBuZXdTdGF0ZVsndmFsdWUnXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdChvbGRTdGF0ZSAhPT0gbmV3U3RhdGUpICYmIChiYXNlTG9va3VwW2lkXSA9IGNvcHlKc29uKG5ld1N0YXRlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJhc2VMb29rdXBbaWRdID0gY29weUpzb24obmV3U3RhdGUpO1xuXHRcdFx0XHRiYXNlRGlmZi5wdXNoKGlkKTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHQvLyBjaGFuZ2UgYmFzZURpZmYgYmFjayBmcm9tIG5hbWVzIHRvIHR5cGVkIHN0YXRlc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZURpZmYubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJhc2VEaWZmW2ldID0gYmFzZUxvb2t1cFtiYXNlRGlmZltpXV07XG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gYmFzZURpZmY7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9oZWxwZXIuanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi8uLi9saWInO1xuaW1wb3J0IHtEaWZmTG9nZ2VyfSBmcm9tICcuLy4uL2xpYic7XG5cbnZhciBvYmogPSB7XG5cdHZhbHVlOiAwLFxuXHRnZXRTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fSxcblx0c2V0U3RhdGU6IGZ1bmN0aW9uKHZhbCl7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0fSxcblx0YXBwbHlEaWZmOiBmdW5jdGlvbih2YWwpe1xuXHRcdHRoaXMudmFsdWUgPSB2YWw7XG5cdH0sXG5cdGdldERpZmY6IGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRyZXR1cm4gZGlmZih2YWx1ZSx0aGlzLmdldFN0YXRlKCkpXG5cdH1cbn1cblxuXG5cbmZ1bmN0aW9uIHNhdmVDYWxsYmFjayhsb2cpe1xuXHRjb25zb2xlLmxvZyhsb2cpXG59XG5cbnZhciBsb2dnZXIgPSBuZXcgRGlmZkxvZ2dlcihvYmosc2F2ZUNhbGxiYWNrKTtcblxuXG5vYmouc2V0U3RhdGUoMSk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDIpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRTdGF0ZSgzKTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5vYmouc2V0U3RhdGUoNCk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDUpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnJlZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciByZWRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIHJlZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbm9iai5zZXRTdGF0ZSg2KTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxuXG5cbi8qXG4gY29uc29sZS5sb2coJ0JlZm9yZSBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcbmxvZ2dlci5yZWRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFJlZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5vYmouc2V0VmFsdWUoNik7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFZhbHVlKDcpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAxIFN0ZXBzOiAnLCBvYmoudmFsdWUpOyovXG5cblxuXG5cbi8qbG9nZ2VyLnVuZG8oNyk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyA3IFN0ZXBzIG1vcmUgdGhhbiBhdmFpbGFibGUgc3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbyg3KTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDcgU3RlcHMgbW9yZSB0aGFuIGF2YWlsYWJsZSBzdGVwczogJywgb2JqLnZhbHVlKTsqL1xuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==