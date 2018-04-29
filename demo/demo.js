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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

function diff(oldValue, newValue) {
	var comparisonValue = (0, _compare2.default)(oldValue, newValue);

	if (comparisonValue === 0) {
		newValue = undefined;
	}

	return {
		previous: oldValue,
		value: newValue
	};
}

exports.default = diff;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZDE5OGFlOWNmZmE2YzBmYWQ4YSIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJvbGRPYmoiLCJuZXdPYmoiLCJvbGRPYmpUeXBlIiwibmV3T2JqVHlwZSIsIk51bWJlciIsIkRhdGUiLCJBcnJheSIsIk9iamVjdCIsInN0cmluZ0NvbXBhcmUiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDYXNlU2Vuc2l0aXZlIiwiU3RyaW5nIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZXN1bHQiLCJsb2NhbGVDb21wYXJlIiwibnVtYmVyQ29tcGFyZSIsImlzTmFOIiwiZGF0ZUNvbXBhcmUiLCJvbGRUaW1lIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJhcnJheUNvbXBhcmUiLCJjb21wYXJpc29uVmFsdWUiLCJvbGRPYmpMZW5ndGgiLCJsZW5ndGgiLCJuZXdPYmpMZW5ndGgiLCJpIiwib2JqZWN0Q29tcGFyZSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJpcyIsIm9iaiIsIlR5cGUiLCJCb29sZWFuIiwiaXNBcnJheSIsImRp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U0FBU0ssSUFBVCxDQUFjNUIsUUFBZCxFQUF3QkMsUUFBeEIsRUFBaUM7QUFDaEMsS0FBTWEsa0JBQW1CLHVCQUFRZCxRQUFSLEVBQWtCQyxRQUFsQixDQUF6Qjs7QUFFQSxLQUFHYSxvQkFBb0IsQ0FBdkIsRUFBeUI7QUFDeEJiLGFBQVc0QixTQUFYO0FBQ0E7O0FBRUUsUUFBTztBQUNUQyxZQUFVOUIsUUFERDtBQUVUK0IsU0FBTzlCO0FBRkUsRUFBUDtBQUlIOztrQkFFYzJCLEkiLCJmaWxlIjoibGliL2RpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFkMTk4YWU5Y2ZmYTZjMGZhZDhhIiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9zdHJpbmdDb21wYXJlJ1xuaW1wb3J0IG51bWJlckNvbXBhcmUgZnJvbSAnLi9udW1iZXJDb21wYXJlJ1xuaW1wb3J0IGRhdGVDb21wYXJlIGZyb20gJy4vZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vYXJyYXlDb21wYXJlJ1xuaW1wb3J0IG9iamVjdENvbXBhcmUgZnJvbSAnLi9vYmplY3RDb21wYXJlJ1xuaW1wb3J0IGlzIGZyb20gJy4vLi4vaXMnXG5cbmZ1bmN0aW9uIGNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgY29uc3QgIG9sZE9ialR5cGUgPSB0eXBlb2Yob2xkT2JqKTtcbiAgICBjb25zdCAgbmV3T2JqVHlwZSA9IHR5cGVvZihuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09IG5ld09ialR5cGUpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9ialR5cGUsIG5ld09ialR5cGUpO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUoTnVtYmVyKG9sZE9iaiksIE51bWJlcihuZXdPYmopKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXMob2xkT2JqLCBEYXRlKSlcbiAgICAgICAgcmV0dXJuIGRhdGVDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAoaXMob2xkT2JqLCBBcnJheSkpXG4gICAgICAgIHJldHVybiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmosY29tcGFyZSk7XG4gICAgaWYgKGlzKG9sZE9iaiwgT2JqZWN0KSlcbiAgICAgICAgcmV0dXJuIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2NvbXBhcmUuanMiLCIvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKVxuICAgICAgICByZXN1bHQgPSAtMTtcbiAgICBlbHNlIGlmIChyZXN1bHQgPiAxKVxuICAgICAgICByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nQ29tcGFyZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvc3RyaW5nQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9udW1iZXJDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBkYXRlQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHZhciAgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRlQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIHZhciAgb2xkT2JqTGVuZ3RoID0gb2xkT2JqLmxlbmd0aDtcbiAgICB2YXIgIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cblxuICAgIGxldCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBvbGRPYmopXG4gICAge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIGZvciAocHJvcCBpbiBuZXdPYmopXG4gICAge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtwcm9wXSwgbmV3T2JqW3Byb3BdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9vYmplY3RDb21wYXJlLmpzIiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9jb21wYXJlL3N0cmluZ0NvbXBhcmUnXG5pbXBvcnQgbnVtYmVyQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvbnVtYmVyQ29tcGFyZSdcbmltcG9ydCBkYXRlQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vY29tcGFyZS9hcnJheUNvbXBhcmUnXG5pbXBvcnQgb2JqZWN0Q29tcGFyZSBmcm9tICcuL2NvbXBhcmUvb2JqZWN0Q29tcGFyZSdcbmltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9jb21wYXJlJ1xuaW1wb3J0IGRpZmYgZnJvbSAnLi9kaWZmJ1xuXG5leHBvcnQge1xuICAgIGRpZmYgYXMgZGVmYXVsdCxcbiAgICBjb21wYXJlLFxuICAgIHN0cmluZ0NvbXBhcmUsXG4gICAgbnVtYmVyQ29tcGFyZSxcbiAgICBkYXRlQ29tcGFyZSxcbiAgICBhcnJheUNvbXBhcmUsXG4gICAgb2JqZWN0Q29tcGFyZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IE51bWJlcjtcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaXMuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUvY29tcGFyZSc7XG5cbmZ1bmN0aW9uIGRpZmYob2xkVmFsdWUsIG5ld1ZhbHVlKXtcblx0Y29uc3QgY29tcGFyaXNvblZhbHVlID0gIGNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKTtcblxuXHRpZihjb21wYXJpc29uVmFsdWUgPT09IDApe1xuXHRcdG5ld1ZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cbiAgICByZXR1cm4ge1xuXHRcdHByZXZpb3VzOiBvbGRWYWx1ZSxcblx0XHR2YWx1ZTogbmV3VmFsdWVcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlmZjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZGlmZi5qcyJdLCJzb3VyY2VSb290IjoiIn0=

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

var _diff2 = __webpack_require__(0);

var _diff3 = _interopRequireDefault(_diff2);

var _pivotedLinkedList = __webpack_require__(5);

var _pivotedLinkedList2 = _interopRequireDefault(_pivotedLinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shiftAndApplyLog(steps, callback) {
	var context = this.context,
	    logList = this.logList,
	    setter = this.setter;


	var logEntry = logList.shiftPivot(steps);
	var diffObject = logEntry.element;
	var diffState = diffObject.value;

	setter.call(context, diffState, callback);
};

var DiffLogger = function DiffLogger(saveCallback) {
	_classCallCheck(this, DiffLogger);

	this.context;
	this.getter;
	this.setter;
	this.diffMethod;

	this.logList = new _pivotedLinkedList2.default([]);
	this.saveDiffCallback = saveCallback;
	this.enable = true;
};

exports.default = DiffLogger;


DiffLogger.prototype.setContext = function (context, getter, setter, diffMethod) {
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
};

DiffLogger.prototype.setSaveCallback = function (saveCallback) {
	this.saveDiffCallback = saveCallback;
};

DiffLogger.prototype.removeSaveCallback = function () {
	this.saveDiffCallback = null;
};

DiffLogger.prototype.undo = function (steps, callback) {
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, -steps, callback);
};

DiffLogger.prototype.redo = function (steps, callback) {
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, steps, callback);
};

DiffLogger.prototype.save = function () {
	if (this.enable) {
		var getDiff = this.diffMethod ? this.diffMethod : _diff3.default;
		if (this.context) {
			var state = this.getter.call(this.context);
			var currentDiff = this.getCurrentLog();
			var currentState = currentDiff ? currentDiff.value : undefined;
			var _diff = getDiff(currentState, state);

			if (_diff.value !== undefined) {
				// Change occurred log them
				this.logList.insert(_diff);
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(_diff3.default);
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


PivotedLinkedList.prototype.insert = function (element) {
	var newNode = new _Node2.default(element);
	this.length++;

	var current = void 0,
	    next = void 0;

	if (!this.pivot) {
		// inserting as first element
		this.pivot = newNode;
		this.head = newNode;
	} else if (this.pivot.next) {
		// inserting in middle

		current = this.pivot;
		next = this.pivot.next;

		newNode.next = current.next;
		newNode.prev = current;

		current.next = newNode;
		next.prev = newNode;

		this.pivot = newNode;
	} else {
		// inserting as last element
		current = this.pivot;
		current.next = newNode;
		newNode.prev = current;

		this.pivot = newNode;
		this.tail = newNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YzQxNTVjNTVkMTdkMDI1ODA5OCIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiXSwibmFtZXMiOlsiUGl2b3RlZExpbmtlZExpc3QiLCJhcnJheSIsInBpdm90IiwiaGVhZCIsInRhaWwiLCJsZW5ndGgiLCJjcmVhdGUiLCJwcm90b3R5cGUiLCJpbnNlcnQiLCJlbGVtZW50IiwibmV3Tm9kZSIsImN1cnJlbnQiLCJuZXh0IiwicHJldiIsInNoaWZ0UGl2b3QiLCJzaGlmdCIsInJpZ2h0U2hpZnQiLCJzaGlmdFBpdm90VG9IZWFkIiwic2hpZnRQaXZvdFRvVGFpbCIsIm1hcCIsInRyYXZlcnNlIiwiY2FsbGJhY2siLCJyaWdodFRvTGVmdCIsInRvQXJyYXkiLCJwdXNoIiwiZ2V0UGl2b3RFbGVtZW50IiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7O0lBQ3FCQSxpQixH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aWxlIjoibGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsaW5rZWRsaXN0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGlua2VkbGlzdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGM0MTU1YzU1ZDE3ZDAyNTgwOTgiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXZvdGVkTGlua2VkTGlzdCB7XG5cdGNvbnN0cnVjdG9yKGFycmF5KXtcblx0XHR0aGlzLnBpdm90ID0gbnVsbDtcblx0XHR0aGlzLmhlYWQgPSBudWxsO1xuXHRcdHRoaXMudGFpbCA9IG51bGw7XG5cdFx0dGhpcy5sZW5ndGggPSAwO1xuXHRcdGFycmF5ICYmIHRoaXMuY3JlYXRlKGFycmF5KTtcblx0fVxufVxuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7XG5cdGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShlbGVtZW50KTtcblx0dGhpcy5sZW5ndGgrKztcblxuXHRsZXQgY3VycmVudCwgbmV4dDtcblxuXHRpZighdGhpcy5waXZvdCl7IC8vIGluc2VydGluZyBhcyBmaXJzdCBlbGVtZW50XG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdFx0dGhpcy5oZWFkID0gbmV3Tm9kZTtcblx0fSBlbHNlIGlmKHRoaXMucGl2b3QubmV4dCl7IC8vIGluc2VydGluZyBpbiBtaWRkbGVcblxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdG5leHQgPSB0aGlzLnBpdm90Lm5leHQ7XG5cblx0XHRuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV4dC5wcmV2ID0gbmV3Tm9kZTtcblxuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdH0gZWxzZSB7IC8vIGluc2VydGluZyBhcyBsYXN0IGVsZW1lbnRcblx0XHRjdXJyZW50ID0gdGhpcy5waXZvdDtcblx0XHRjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuXHRcdG5ld05vZGUucHJldiA9IGN1cnJlbnQ7XG5cblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHR0aGlzLnRhaWwgPSBuZXdOb2RlO1xuXHR9XG5cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90ID0gZnVuY3Rpb24oc2hpZnQpe1xuXHRsZXQgY3VycmVudCA9IHRoaXMucGl2b3Q7XG5cblx0bGV0IHJpZ2h0U2hpZnQ7XG5cdGlmKHNoaWZ0ID49IDApe1xuXHRcdHJpZ2h0U2hpZnQgPSB0cnVlO1xuXHR9XG5cblx0d2hpbGUoc2hpZnQgIT09IDApe1xuXHRcdGlmKHJpZ2h0U2hpZnQpe1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dDtcblx0XHRcdChjdXJyZW50ID09PSB0aGlzLnRhaWwpID8gKHNoaWZ0ID0gMCkgOiBzaGlmdC0tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5wcmV2O1xuXHRcdFx0KGN1cnJlbnQgPT09IHRoaXMuaGVhZCkgPyAoc2hpZnQgPSAwKSA6IHNoaWZ0Kys7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5waXZvdCA9IGN1cnJlbnQ7XG5cblx0cmV0dXJuIHRoaXMucGl2b3Q7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvSGVhZCA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMucGl2b3QgPSB0aGlzLmhlYWQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvVGFpbCA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMucGl2b3QgPSB0aGlzLnRhaWw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oYXJyYXkpe1xuXHRhcnJheS5tYXAoKGVsZW1lbnQpPT57XG5cdFx0dGhpcy5pbnNlcnQoZWxlbWVudCk7XG5cdH0pXG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbihjYWxsYmFjaywgcmlnaHRUb0xlZnQpe1xuXHRsZXQgY3VycmVudCA9IHJpZ2h0VG9MZWZ0ID8gdGhpcy50YWlsIDogdGhpcy5oZWFkO1xuXHR3aGlsZShjdXJyZW50KXtcblx0XHRjYWxsYmFjayhjdXJyZW50LmVsZW1lbnQpO1xuXHRcdGN1cnJlbnQgPSByaWdodFRvTGVmdCA/IGN1cnJlbnQucHJldiA6IGN1cnJlbnQubmV4dDtcblx0fVxufTtcblxuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IGFycmF5ID0gW107XG5cdHRoaXMudHJhdmVyc2UoKGVsZW1lbnQpPT57XG5cdFx0YXJyYXkucHVzaChlbGVtZW50KTtcblx0fSlcblx0cmV0dXJuIGFycmF5O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmdldFBpdm90RWxlbWVudCA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMucGl2b3Qpe1xuXHRcdHJldHVybiB0aGlzLnBpdm90LmVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IG5leHQgPSB0aGlzLnBpdm90Lm5leHQgPyB0aGlzLnBpdm90Lm5leHQgOiAgdGhpcy5waXZvdDtcblx0dGhpcy5waXZvdCA9IG5leHQ7XG5cdHJldHVybiBuZXh0O1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuXHRjb25zdCBwcmV2ID0gdGhpcy5waXZvdC5wcmV2ID8gdGhpcy5waXZvdC5wcmV2IDogIHRoaXMucGl2b3Q7XG5cdHRoaXMucGl2b3QgPSBwcmV2O1xuXHRyZXR1cm4gcHJldjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXtcblx0Y29uc3RydWN0b3IoZWxlbWVudCl7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLm5leHQgPSBudWxsO1xuXHRcdHRoaXMucHJldiA9IG51bGw7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTm9kZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
	value: 0,
	getValue: function getValue() {
		return this.value;
	},
	setValue: function setValue(val) {
		this.value = val;
	}
};

function saveCallback(log) {
	console.log(log);
}

var logger = new _lib.DiffLogger(null, saveCallback);
logger.setContext(obj, obj.getValue, obj.setValue);

obj.setValue(1);
logger.save(true);

obj.setValue(2);
logger.save(true);

obj.setValue(3);
logger.save(true);

obj.setValue(4);
logger.save(true);

obj.setValue(5);
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

obj.setValue(6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YjZhYTdiYjUwNDkwZWRlNDhmMiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9EaWZmTG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiRGlmZkxvZ2dlciIsImFwcGx5RGlmZiIsInN0ZXBzIiwiY2FsbGJhY2siLCJjb250ZXh0IiwidW5kb0xvZyIsInJlZG9Mb2ciLCJnZXR0ZXIiLCJzZXR0ZXIiLCJwcmV2U3RhdGUiLCJhYnNTdGVwcyIsIk1hdGgiLCJhYnMiLCJzdGVwc1JlbWFpbmluZyIsIm1pbiIsImxlbmd0aCIsImxvZ0VudHJ5IiwiZGlmZiIsInBvcCIsInVuc2hpZnQiLCJwcmV2Iiwic2hpZnQiLCJwdXNoIiwibmV4dCIsInZhbHVlIiwiZGlmZkFwcGxpZWQiLCJjYWxsIiwiTG9nZ2VyIiwic2F2ZUNhbGxiYWNrIiwiZGlmZk1ldGhvZCIsIm5leHRJZCIsInNhdmVEaWZmQ2FsbGJhY2siLCJlbmFibGUiLCJwcm90b3R5cGUiLCJzZXRDb250ZXh0IiwiY29uc29sZSIsIndhcm4iLCJzZXRTYXZlQ2FsbGJhY2siLCJyZW1vdmVTYXZlQ2FsbGJhY2siLCJ1bmRvIiwiaXNOYU4iLCJyZWRvIiwic2F2ZSIsImxvZyIsImdldERpZmYiLCJzdGF0ZSIsImRpZmZPYmplY3QiLCJjdXJyZW50IiwidW5kZWZpbmVkIiwibmV4dExvZyIsIkxvZ0VudHJ5IiwiaWQiLCJzaGlmdEFuZEFwcGx5TG9nIiwibG9nTGlzdCIsInNoaWZ0UGl2b3QiLCJlbGVtZW50IiwiZGlmZlN0YXRlIiwiY3VycmVudERpZmYiLCJnZXRDdXJyZW50TG9nIiwiY3VycmVudFN0YXRlIiwiaW5zZXJ0IiwiZ2V0UGl2b3RFbGVtZW50Iiwib2JqIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsInZhbCIsImxvZ2dlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFD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Y0FBWixFQUE0Qm1CLElBQUl0QyxLQUFoQzs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJmaWxlIjoiZGVtby9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsb2dnZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibG9nZ2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2I2YWE3YmI1MDQ5MGVkZTQ4ZjIiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfaXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX2lzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBvbGRPYmpUeXBlID0gdHlwZW9mIG9sZE9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2xkT2JqKTtcbiAgICB2YXIgbmV3T2JqVHlwZSA9IHR5cGVvZiBuZXdPYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSkgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJykgcmV0dXJuICgwLCBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJykgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKSByZXR1cm4gMTtcblxuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIERhdGUpKSByZXR1cm4gKDAsIF9kYXRlQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIEFycmF5KSkgcmV0dXJuICgwLCBfYXJyYXlDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgT2JqZWN0KSkgcmV0dXJuICgwLCBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSkgcmVzdWx0ID0gLTE7ZWxzZSBpZiAocmVzdWx0ID4gMSkgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ0NvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSkgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG51bWJlckNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKSByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkYXRlQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgY29tcGFyaXNvblZhbHVlID0gdm9pZCAwO1xuICAgIHZhciBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKSByZXR1cm4gMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFycmF5Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIHByb3AgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iaikge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG5ld09iaikge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9iamVjdENvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBleHBvcnRzLmFycmF5Q29tcGFyZSA9IGV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBleHBvcnRzLm51bWJlckNvbXBhcmUgPSBleHBvcnRzLnN0cmluZ0NvbXBhcmUgPSBleHBvcnRzLmNvbXBhcmUgPSBleHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RyaW5nQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfc3RyaW5nQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdDb21wYXJlKTtcblxudmFyIF9udW1iZXJDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9udW1iZXJDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlckNvbXBhcmUpO1xuXG52YXIgX2RhdGVDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9kYXRlQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRlQ29tcGFyZSk7XG5cbnZhciBfYXJyYXlDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hcnJheUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlDb21wYXJlKTtcblxudmFyIF9vYmplY3RDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9vYmplY3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdENvbXBhcmUpO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbnZhciBfZGlmZiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfZGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaWZmKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RpZmYyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBhcmUgPSBfY29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5udW1iZXJDb21wYXJlID0gX251bWJlckNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmRhdGVDb21wYXJlID0gX2RhdGVDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5hcnJheUNvbXBhcmUgPSBfYXJyYXlDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3RDb21wYXJlID0gX29iamVjdENvbXBhcmUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSkgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gaXM7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGRpZmYob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdHZhciBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cblx0aWYgKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCkge1xuXHRcdG5ld1ZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwcmV2aW91czogb2xkVmFsdWUsXG5cdFx0dmFsdWU6IG5ld1ZhbHVlXG5cdH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRpZmY7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQXhaREU1T0dGbE9XTm1abUUyWXpCbVlXUTRZU0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzlqYjIxd1lYSmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzlrWVhSbFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWhjbkpoZVVOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmIySnFaV04wUTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwybHpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5a2FXWm1MbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZiWEJoY21VaUxDSnZiR1JQWW1vaUxDSnVaWGRQWW1vaUxDSnZiR1JQWW1wVWVYQmxJaXdpYm1WM1QySnFWSGx3WlNJc0lrNTFiV0psY2lJc0lrUmhkR1VpTENKQmNuSmhlU0lzSWs5aWFtVmpkQ0lzSW5OMGNtbHVaME52YlhCaGNtVWlMQ0p2YkdSV1lXeDFaU0lzSW01bGQxWmhiSFZsSWl3aWFYTkRZWE5sVTJWdWMybDBhWFpsSWl3aVUzUnlhVzVuSWl3aWRHOU1iMk5oYkdWTWIzZGxja05oYzJVaUxDSnlaWE4xYkhRaUxDSnNiMk5oYkdWRGIyMXdZWEpsSWl3aWJuVnRZbVZ5UTI5dGNHRnlaU0lzSW1selRtRk9JaXdpWkdGMFpVTnZiWEJoY21VaUxDSnZiR1JVYVcxbElpd2laMlYwVkdsdFpTSXNJbTVsZDFScGJXVWlMQ0poY25KaGVVTnZiWEJoY21VaUxDSmpiMjF3WVhKcGMyOXVWbUZzZFdVaUxDSnZiR1JQWW1wTVpXNW5kR2dpTENKc1pXNW5kR2dpTENKdVpYZFBZbXBNWlc1bmRHZ2lMQ0pwSWl3aWIySnFaV04wUTI5dGNHRnlaU0lzSW5CeWIzQWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbVJsWm1GMWJIUWlMQ0pwY3lJc0ltOWlhaUlzSWxSNWNHVWlMQ0pDYjI5c1pXRnVJaXdpYVhOQmNuSmhlU0lzSW1ScFptWWlMQ0oxYm1SbFptbHVaV1FpTENKd2NtVjJhVzkxY3lJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096czdPMEZETjBSQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN08wRkJSVUVzVTBGQlUwRXNUMEZCVkN4RFFVRnBRa01zVFVGQmFrSXNSVUZCZVVKRExFMUJRWHBDTEVWQlEwRTdRVUZEU1N4UlFVRkpSQ3hYUVVGWFF5eE5RVUZtTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVFzVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlQwTXNiMEpCUVc5Q1JpeE5RVUZ3UWl4NVEwRkJiMEpCTEUxQlFYQkNMRU5CUVZBN1FVRkRRU3hSUVVGUFJ5eHZRa0ZCYjBKR0xFMUJRWEJDTEhsRFFVRnZRa0VzVFVGQmNFSXNRMEZCVURzN1FVRkZRU3hSUVVGSlF5eGxRVUZsUXl4VlFVRnVRaXhGUVVOSkxFOUJRVThzTmtKQlFXTkVMRlZCUVdRc1JVRkJNRUpETEZWQlFURkNMRU5CUVZBN08wRkJSVW9zVVVGQlNVUXNaVUZCWlN4VFFVRnVRaXhGUVVOSkxFOUJRVThzTmtKQlFXTkZMRTlCUVU5S0xFMUJRVkFzUTBGQlpDeEZRVUU0UWtrc1QwRkJUMGdzVFVGQlVDeERRVUU1UWl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zWlVGQlpTeFJRVUZ1UWl4RlFVTkpMRTlCUVU4c05rSkJRV05HTEUxQlFXUXNSVUZCYzBKRExFMUJRWFJDTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhsUVVGbExGRkJRVzVDTEVWQlEwa3NUMEZCVHl3MlFrRkJZMFlzVFVGQlpDeEZRVUZ6UWtNc1RVRkJkRUlzUTBGQlVEczdRVUZGU2l4UlFVRkpReXhsUVVGbExGRkJRVzVDTEVWQlEwa3NUMEZCVHl4RFFVRlFPenRCUVVWS0xGRkJRVWtzYTBKQlFVZEdMRTFCUVVnc1JVRkJWMHNzU1VGQldDeERRVUZLTEVWQlEwa3NUMEZCVHl3eVFrRkJXVXdzVFVGQldpeEZRVUZ2UWtNc1RVRkJjRUlzUTBGQlVEdEJRVU5LTEZGQlFVa3NhMEpCUVVkRUxFMUJRVWdzUlVGQlYwMHNTMEZCV0N4RFFVRktMRVZCUTBrc1QwRkJUeXcwUWtGQllVNHNUVUZCWWl4RlFVRnhRa01zVFVGQmNrSXNSVUZCTkVKR0xFOUJRVFZDTEVOQlFWQTdRVUZEU2l4UlFVRkpMR3RDUVVGSFF5eE5RVUZJTEVWQlFWZFBMRTFCUVZnc1EwRkJTaXhGUVVOSkxFOUJRVThzTmtKQlFXTlFMRTFCUVdRc1JVRkJjMEpETEUxQlFYUkNMRVZCUVRoQ1JpeFBRVUU1UWl4RFFVRlFPenRCUVVWS0xGZEJRVThzUTBGQlVEdEJRVU5JT3p0clFrRkZZMEVzVHpzN096czdPenM3T3pzN08wRkRNVU5tTzBGQlEwRXNVMEZCVTFNc1lVRkJWQ3hEUVVGMVFrTXNVVUZCZGtJc1JVRkJhVU5ETEZGQlFXcERMRVZCUVRKRFF5eGxRVUV6UXl4RlFVRTBSRHRCUVVONFJFRXNjMEpCUVd0Q0xFOUJRVTlCTEdWQlFWQXNTMEZCTWtJc1YwRkJNMElzUjBGQmVVTkJMR1ZCUVhwRExFZEJRVEpFTEV0QlFUZEZPenRCUVVWQkxGRkJRVWxHTEZsQlFWa3NTVUZCV2l4SlFVRnZRa01zV1VGQldTeEpRVUZ3UXl4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxFTEZsQlFWa3NTVUZCYUVJc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUXl4WlFVRlpMRWxCUVdoQ0xFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdPMEZCUlVvc1VVRkJTVU1zWlVGQlNpeEZRVUZ4UWp0QlFVTnFRa1lzYlVKQlFWZEhMRTlCUVU5SUxGRkJRVkFzUlVGQmFVSkpMR2xDUVVGcVFpeEZRVUZZTzBGQlEwRklMRzFDUVVGWFJTeFBRVUZQUml4UlFVRlFMRVZCUVdsQ1J5eHBRa0ZCYWtJc1JVRkJXRHRCUVVOSU96dEJRVVZFTEZGQlFVbERMRk5CUVZOR0xFOUJRVTlJTEZGQlFWQXNSVUZCYVVKTkxHRkJRV3BDTEVOQlFTdENUQ3hSUVVFdlFpeERRVUZpTzBGQlEwRXNVVUZCU1Vrc1UwRkJVeXhEUVVGRExFTkJRV1FzUlVGRFNVRXNVMEZCVXl4RFFVRkRMRU5CUVZZc1EwRkVTaXhMUVVWTExFbEJRVWxCTEZOQlFWTXNRMEZCWWl4RlFVTkVRU3hUUVVGVExFTkJRVlE3TzBGQlJVb3NWMEZCVDBFc1RVRkJVRHRCUVVOSU96dHJRa0ZGWTA0c1lUczdPenM3T3pzN096czdPenRCUTNoQ1ppeFRRVUZUVVN4aFFVRlVMRU5CUVhWQ1VDeFJRVUYyUWl4RlFVRnBRME1zVVVGQmFrTXNSVUZCTWtNN08wRkJSWFpETEZGQlFVbFBMRTFCUVUxU0xGRkJRVTRzUzBGQmJVSlJMRTFCUVUxUUxGRkJRVTRzUTBGQmRrSXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlR5eE5RVUZOVWl4UlFVRk9MRU5CUVVvc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKVVN4TlFVRk5VQ3hSUVVGT0xFTkJRVW9zUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhSUVVGSlJDeFhRVUZYUXl4UlFVRm1MRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3UVVGRFNpeFJRVUZKUkN4WFFVRlhReXhSUVVGbUxFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NWMEZCVHl4RFFVRlFPMEZCUTBnN08ydENRVVZqVFN4aE96czdPenM3T3pzN096czdPMEZEYUVKbUxGTkJRVk5GTEZkQlFWUXNRMEZCY1VKVUxGRkJRWEpDTEVWQlFTdENReXhSUVVFdlFpeEZRVUY1UXpzN1FVRkZja01zVVVGQlNVUXNZVUZCWVN4SlFVRmlMRWxCUVhGQ1F5eGhRVUZoTEVsQlFYUkRMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVUXNZVUZCWVN4SlFVRnFRaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbERMR0ZCUVdFc1NVRkJha0lzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhSUVVGTFV5eFZRVUZWVml4VFFVRlRWeXhQUVVGVUxFVkJRV1k3UVVGRFFTeFJRVUZMUXl4VlFVRlZXQ3hUUVVGVFZTeFBRVUZVTEVWQlFXWTdRVUZEUVN4UlFVRkpSQ3hWUVVGVlJTeFBRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN1FVRkRTaXhSUVVGSlJpeFZRVUZWUlN4UFFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGUU96dEJRVVZLTEZGQlFVbEtMRTFCUVUxRkxFOUJRVTRzUzBGQmEwSkdMRTFCUVUxSkxFOUJRVTRzUTBGQmRFSXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlNpeE5RVUZOUlN4UFFVRk9MRU5CUVVvc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUml4TlFVRk5TU3hQUVVGT0xFTkJRVW9zUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhYUVVGUExFTkJRVkE3UVVGRFNEczdhMEpCUldOSUxGYzdPenM3T3pzN096czdPenM3UVVNelFtWTdPenM3T3p0QlFVVkJMRk5CUVZOSkxGbEJRVlFzUTBGQmMwSjBRaXhOUVVGMFFpeEZRVUU0UWtNc1RVRkJPVUlzUlVGRFFUdEJRVU5KTEZGQlFVbEVMRmRCUVZkRExFMUJRV1lzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpSQ3hWUVVGVkxFbEJRV1FzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhWUVVGVkxFbEJRV1FzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhSUVVGSmMwSXNkMEpCUVVvN1FVRkRRU3hSUVVGTFF5eGxRVUZsZUVJc1QwRkJUM2xDTEUxQlFUTkNPMEZCUTBFc1VVRkJTME1zWlVGQlpYcENMRTlCUVU5M1FpeE5RVUV6UWp0QlFVTkJMRkZCUVVsRUxHVkJRV1ZGTEZsQlFXNUNMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3UVVGRFNpeFJRVUZKUml4bFFVRmxSU3haUVVGdVFpeEZRVU5KTEU5QlFVOHNRMEZCVURzN1FVRkZTaXhUUVVGTExFbEJRVXRETEVsQlFVa3NRMEZCWkN4RlFVRnBRa0VzU1VGQlNVZ3NXVUZCY2tJc1JVRkJiVU5ITEVkQlFXNURMRVZCUVhkRE8wRkJRM0JETzBGQlEwRktMREJDUVVGclFpeDFRa0ZCVVhaQ0xFOUJRVTh5UWl4RFFVRlFMRU5CUVZJc1JVRkJiVUl4UWl4UFFVRlBNRUlzUTBGQlVDeERRVUZ1UWl4RFFVRnNRanRCUVVOQkxGbEJRVWxLTEcxQ1FVRnRRaXhEUVVGMlFpeEZRVU5KTEU5QlFVOUJMR1ZCUVZBN1FVRkRVRHRCUVVORUxGZEJRVThzUTBGQlVEdEJRVU5JT3p0clFrRkZZMFFzV1RzN096czdPenM3T3pzN096dEJRelZDWmpzN096czdPMEZCUlVFc1UwRkJVMDBzWVVGQlZDeERRVUYxUWpWQ0xFMUJRWFpDTEVWQlFTdENReXhOUVVFdlFpeEZRVU5CTzBGQlEwa3NVVUZCU1VRc1YwRkJWME1zVFVGQlppeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRUxGVkJRVlVzU1VGQlpDeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRExGVkJRVlVzU1VGQlpDeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVkS0xGRkJRVWswUWl4aFFVRktPMEZCUTBFc1UwRkJTMEVzU1VGQlRDeEpRVUZoTjBJc1RVRkJZaXhGUVVOQk8wRkJRMGtzV1VGQlNTeERRVUZEUXl4UFFVRlBOa0lzWTBGQlVDeERRVUZ6UWtRc1NVRkJkRUlzUTBGQlRDeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPMEZCUTFBN08wRkJSVVFzVVVGQlNVNHNkMEpCUVVvN1FVRkRRU3hUUVVGTFRTeEpRVUZNTEVsQlFXRTFRaXhOUVVGaUxFVkJRMEU3UVVGRFNTeFpRVUZKTEVOQlFVTkVMRTlCUVU4NFFpeGpRVUZRTEVOQlFYTkNSQ3hKUVVGMFFpeERRVUZNTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvN1FVRkRRVTRzTUVKQlFXdENMSFZDUVVGUmRrSXNUMEZCVHpaQ0xFbEJRVkFzUTBGQlVpeEZRVUZ6UWpWQ0xFOUJRVTgwUWl4SlFVRlFMRU5CUVhSQ0xFTkJRV3hDTzBGQlEwRXNXVUZCU1U0c2IwSkJRVzlDTEVOQlFYaENMRVZCUTBrc1QwRkJUMEVzWlVGQlVEdEJRVU5RTzBGQlEwUXNWMEZCVHl4RFFVRlFPMEZCUTBnN08ydENRVVZqU3l4aE96czdPenM3T3pzN096czdPenRCUTJoRFpqczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN08xRkJSMWxITEU4N1VVRkRVbWhETEU4N1VVRkRRVk1zWVR0UlFVTkJVU3hoTzFGQlEwRkZMRmM3VVVGRFFVa3NXVHRSUVVOQlRTeGhPenM3T3pzN096czdPenM3UVVObVNpeFRRVUZUU1N4RlFVRlVMRU5CUVZsRExFZEJRVm9zUlVGQmFVSkRMRWxCUVdwQ0xFVkJRWFZDTzBGQlEyNUNMRkZCUVVsRUxFOUJRVThzU1VGQlVDeEpRVUZsUVN4UFFVRlBMRWxCUVRGQ0xFVkJRMGtzVDBGQlR5eExRVUZRTzBGQlEwb3NVVUZCU1VFc1pVRkJaVU1zU1VGQmJrSXNSVUZEU1N4UFFVRlBMRWxCUVZBN1FVRkRTaXhSUVVGSlFTeFRRVUZUTTBJc1RVRkJZaXhGUVVOSkxFOUJRVThzU1VGQlVEczdRVUZGU2l4UlFVRkpMRTlCUVU4d1FpeEhRVUZRTEV0QlFXZENMRkZCUVhCQ0xFVkJRMGtzVDBGQlQwTXNVMEZCVTNSQ0xFMUJRV2hDTzBGQlEwb3NVVUZCU1N4UFFVRlBjVUlzUjBGQlVDeExRVUZuUWl4UlFVRndRaXhGUVVOSkxFOUJRVTlETEZOQlFWTTVRaXhOUVVGb1FqdEJRVU5LTEZGQlFVa3NUMEZCVHpaQ0xFZEJRVkFzUzBGQlowSXNVMEZCY0VJc1JVRkRTU3hQUVVGUFF5eFRRVUZUUXl4UFFVRm9RanRCUVVOS0xGRkJRVWxFTEZOQlFWTTFRaXhMUVVGaUxFVkJRMGtzVDBGQlQwRXNUVUZCVFRoQ0xFOUJRVTRzUTBGQlkwZ3NSMEZCWkN4RFFVRlFPenRCUVVWS0xGZEJRVThzUzBGQlVEdEJRVU5JT3p0clFrRkZZMFFzUlRzN096czdPenM3T3pzN096dEJRM0JDWmpzN096czdPMEZCUlVFc1UwRkJVMHNzU1VGQlZDeERRVUZqTlVJc1VVRkJaQ3hGUVVGM1FrTXNVVUZCZUVJc1JVRkJhVU03UVVGRGFFTXNTMEZCVFdFc2EwSkJRVzFDTEhWQ1FVRlJaQ3hSUVVGU0xFVkJRV3RDUXl4UlFVRnNRaXhEUVVGNlFqczdRVUZGUVN4TFFVRkhZU3h2UWtGQmIwSXNRMEZCZGtJc1JVRkJlVUk3UVVGRGVFSmlMR0ZCUVZjMFFpeFRRVUZZTzBGQlEwRTdPMEZCUlVVc1VVRkJUenRCUVVOVVF5eFpRVUZWT1VJc1VVRkVSRHRCUVVWVUswSXNVMEZCVHpsQ08wRkJSa1VzUlVGQlVEdEJRVWxJT3p0clFrRkZZekpDTEVraUxDSm1hV3hsSWpvaWJHbGlMMlJwWm1ZdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hjSW1ScFptWmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2laR2xtWmx3aVhTQTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKa2FXWm1YQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9LU0I3WEc1eVpYUjFjbTRnWEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZTF4dUlGeDBYSFJjZEZ4MFkyOXVabWxuZFhKaFlteGxPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmNkR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNYRzRnWEhSY2RGeDBYSFJuWlhRNklHZGxkSFJsY2x4dUlGeDBYSFJjZEgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRFlwTzF4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJREZrTVRrNFlXVTVZMlptWVRaak1HWmhaRGhoSWl3aWFXMXdiM0owSUhOMGNtbHVaME52YlhCaGNtVWdabkp2YlNBbkxpOXpkSEpwYm1kRGIyMXdZWEpsSjF4dWFXMXdiM0owSUc1MWJXSmxja052YlhCaGNtVWdabkp2YlNBbkxpOXVkVzFpWlhKRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdSaGRHVkRiMjF3WVhKbElHWnliMjBnSnk0dlpHRjBaVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZWEp5WVhsRGIyMXdZWEpsSUdaeWIyMGdKeTR2WVhKeVlYbERiMjF3WVhKbEoxeHVhVzF3YjNKMElHOWlhbVZqZEVOdmJYQmhjbVVnWm5KdmJTQW5MaTl2WW1wbFkzUkRiMjF3WVhKbEoxeHVhVzF3YjNKMElHbHpJR1p5YjIwZ0p5NHZMaTR2YVhNblhHNWNibVoxYm1OMGFXOXVJR052YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vcFhHNTdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFpQTlQVDBnYm1WM1QySnFLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1SUNBZ0lHbG1JQ2h1WlhkUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ0lHOXNaRTlpYWxSNWNHVWdQU0IwZVhCbGIyWW9iMnhrVDJKcUtUdGNiaUFnSUNCamIyNXpkQ0FnYm1WM1QySnFWSGx3WlNBOUlIUjVjR1Z2WmlodVpYZFBZbW9wTzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdJVDA5SUc1bGQwOWlhbFI1Y0dVcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkU5aWFsUjVjR1VzSUc1bGQwOWlhbFI1Y0dVcE8xeHVYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZGliMjlzWldGdUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiV0psY2tOdmJYQmhjbVVvVG5WdFltVnlLRzlzWkU5aWFpa3NJRTUxYldKbGNpaHVaWGRQWW1vcEtUdGNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0E5UFQwZ0oyNTFiV0psY2ljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXMWlaWEpEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0E5UFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISnBibWREYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSUFltcFVlWEJsSUNFOVBTQW5iMkpxWldOMEp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzVjYmlBZ0lDQnBaaUFvYVhNb2IyeGtUMkpxTENCRVlYUmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoZEdWRGIyMXdZWEpsS0c5c1pFOWlhaXdnYm1WM1QySnFLVHRjYmlBZ0lDQnBaaUFvYVhNb2IyeGtUMkpxTENCQmNuSmhlU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoY25KaGVVTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9zWTI5dGNHRnlaU2s3WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1QySnFaV04wS1NsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFtVmpkRU52YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vc0lHTnZiWEJoY21VcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SURBN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYjIxd1lYSmxPMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlqYjIxd1lYSmxMMk52YlhCaGNtVXVhbk1pTENJdkwyaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwxTjBjbWx1Wnk5c2IyTmhiR1ZEYjIxd1lYSmxYRzVtZFc1amRHbHZiaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRlpoYkhWbExDQnVaWGRXWVd4MVpTd2dhWE5EWVhObFUyVnVjMmwwYVhabEtTQjdYRzRnSUNBZ2FYTkRZWE5sVTJWdWMybDBhWFpsSUQwZ2RIbHdaVzltSUdselEyRnpaVk5sYm5OcGRHbDJaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJwYzBOaGMyVlRaVzV6YVhScGRtVWdPaUJtWVd4elpUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFNCdWRXeHNJQ1ltSUc1bGQxWmhiSFZsSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0JwWmlBb2JtVjNWbUZzZFdVZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzRnSUNBZ2FXWWdLR2x6UTJGelpWTmxibk5wZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0J2YkdSV1lXeDFaU0E5SUZOMGNtbHVaeWh2YkdSV1lXeDFaU2t1ZEc5TWIyTmhiR1ZNYjNkbGNrTmhjMlVvS1R0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQlRkSEpwYm1jb2JtVjNWbUZzZFdVcExuUnZURzlqWVd4bFRHOTNaWEpEWVhObEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJRk4wY21sdVp5aHZiR1JXWVd4MVpTa3ViRzlqWVd4bFEyOXRjR0Z5WlNodVpYZFdZV3gxWlNrN1hHNGdJQ0FnYVdZZ0tISmxjM1ZzZENBOElDMHhLVnh1SUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0F0TVR0Y2JpQWdJQ0JsYkhObElHbG1JQ2h5WlhOMWJIUWdQaUF4S1Z4dUlDQWdJQ0FnSUNCeVpYTjFiSFFnUFNBeE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2MzUnlhVzVuUTI5dGNHRnlaVHRjYmx4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwyTnZiWEJoY21VdmMzUnlhVzVuUTI5dGNHRnlaUzVxY3lJc0lseHVablZ1WTNScGIyNGdiblZ0WW1WeVEyOXRjR0Z5WlNodmJHUldZV3gxWlN3Z2JtVjNWbUZzZFdVcElIdGNibHh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHZiR1JXWVd4MVpTa2dKaVlnYVhOT1lVNG9ibVYzVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9iMnhrVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9ibVYzVm1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BDQnVaWGRXWVd4MVpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0ErSUc1bGQxWmhiSFZsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2JuVnRZbVZ5UTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzl1ZFcxaVpYSkRiMjF3WVhKbExtcHpJaXdpWEc1bWRXNWpkR2x2YmlCa1lYUmxRMjl0Y0dGeVpTaHZiR1JXWVd4MVpTd2dibVYzVm1Gc2RXVXBJSHRjYmx4dUlDQWdJR2xtSUNodmJHUldZV3gxWlNBOVBUMGdiblZzYkNBbUppQnVaWGRXWVd4MVpTQTlQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLRzlzWkZaaGJIVmxJRDA5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1ZtRnNkV1VnUFQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JseHVJQ0FnSUhaaGNpQWdiMnhrVkdsdFpTQTlJRzlzWkZaaGJIVmxMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQjJZWElnSUc1bGQxUnBiV1VnUFNCdVpYZFdZV3gxWlM1blpYUlVhVzFsS0NrN1hHNGdJQ0FnYVdZZ0tHOXNaRlJwYldVZ1BDQnVaWGRVYVcxbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ2FXWWdLRzlzWkZScGJXVWdQaUJ1WlhkVWFXMWxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmx4dUlDQWdJR2xtSUNocGMwNWhUaWh2YkdSVWFXMWxLU0FtSmlCcGMwNWhUaWh1WlhkVWFXMWxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzlzWkZScGJXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9ibVYzVkdsdFpTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCa1lYUmxRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOWtZWFJsUTI5dGNHRnlaUzVxY3lJc0ltbHRjRzl5ZENCamIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaU2M3WEc1Y2JtWjFibU4wYVc5dUlHRnljbUY1UTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpbGNibnRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5UFNCdVpYZFBZbW9wWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUlBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQwOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0JzWlhRZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsTzF4dUlDQWdJSFpoY2lBZ2IyeGtUMkpxVEdWdVozUm9JRDBnYjJ4a1QySnFMbXhsYm1kMGFEdGNiaUFnSUNCMllYSWdJRzVsZDA5aWFreGxibWQwYUNBOUlHNWxkMDlpYWk1c1pXNW5kR2c3WEc0Z0lDQWdhV1lnS0c5c1pFOWlha3hsYm1kMGFDQThJRzVsZDA5aWFreGxibWQwYUNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUdsbUlDaHZiR1JQWW1wTVpXNW5kR2dnUGlCdVpYZFBZbXBNWlc1bmRHZ3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdJR2tnUFNBd095QnBJRHdnYjJ4a1QySnFUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXlaV04xY25OcGRtVWdZMjl0Y0dGeWFYTnZiaUJ2WmlCaGNuSmhlU0JsYkdWdFpXNTBjMXh1SUNBZ0lDQWdJQ0JqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdQU0JqYjIxd1lYSmxLRzlzWkU5aWFsdHBYU3dnYm1WM1QySnFXMmxkS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVXWVd4MVpTQWhQU0F3S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiWEJoY21semIyNVdZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlEQTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCaGNuSmhlVU52YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZZWEp5WVhsRGIyMXdZWEpsTG1weklpd2lhVzF3YjNKMElHTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsSnp0Y2JseHVablZ1WTNScGIyNGdiMkpxWldOMFEyOXRjR0Z5WlNodmJHUlBZbW9zSUc1bGQwOWlhaWxjYm50Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOVBTQnVaWGRQWW1vcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUdsbUlDaHZiR1JQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnYVdZZ0tHNWxkMDlpYWlBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNibHh1SUNBZ0lHeGxkQ0J3Y205d08xeHVJQ0FnSUdadmNpQW9jSEp2Y0NCcGJpQnZiR1JQWW1vcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzVsZDA5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdZMjl0Y0dGeWFYTnZibFpoYkhWbE8xeHVJQ0FnSUdadmNpQW9jSEp2Y0NCcGJpQnVaWGRQWW1vcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzlzWkU5aWFpNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdLU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUNBZ0lDQXZMM0psWTNWeWMybDJaU0JqYjIxd1lYSnBjMjl1SUc5bUlHOWlhbVZqZENCd2NtOXdaWEowZVZ4dUlDQWdJQ0FnSUNCamIyMXdZWEpwYzI5dVZtRnNkV1VnUFNCamIyMXdZWEpsS0c5c1pFOWlhbHR3Y205d1hTd2dibVYzVDJKcVczQnliM0JkS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVXWVd4MVpTQWhQVDBnTUNsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjF3WVhKcGMyOXVWbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IySnFaV04wUTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzl2WW1wbFkzUkRiMjF3WVhKbExtcHpJaXdpYVcxd2IzSjBJSE4wY21sdVowTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVW5YRzVwYlhCdmNuUWdiblZ0WW1WeVEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQmtZWFJsUTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZaR0YwWlVOdmJYQmhjbVVuWEc1cGJYQnZjblFnWVhKeVlYbERiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5aGNuSmhlVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdiMkpxWldOMFEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQmpiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5amIyMXdZWEpsSjF4dWFXMXdiM0owSUdScFptWWdabkp2YlNBbkxpOWthV1ptSjF4dVhHNWxlSEJ2Y25RZ2UxeHVJQ0FnSUdScFptWWdZWE1nWkdWbVlYVnNkQ3hjYmlBZ0lDQmpiMjF3WVhKbExGeHVJQ0FnSUhOMGNtbHVaME52YlhCaGNtVXNYRzRnSUNBZ2JuVnRZbVZ5UTI5dGNHRnlaU3hjYmlBZ0lDQmtZWFJsUTI5dGNHRnlaU3hjYmlBZ0lDQmhjbkpoZVVOdmJYQmhjbVVzWEc0Z0lDQWdiMkpxWldOMFEyOXRjR0Z5WlZ4dWZWeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbVoxYm1OMGFXOXVJR2x6S0c5aWFpd2dWSGx3WlNrZ2UxeHVJQ0FnSUdsbUlDaHZZbW9nUFQwZ2JuVnNiQ0I4ZkNCdlltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJR2xtSUNodlltb2dhVzV6ZEdGdVkyVnZaaUJVZVhCbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQnBaaUFvVkhsd1pTQTlQVDBnVDJKcVpXTjBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZb2IySnFLU0E5UFQwZ0ozTjBjbWx1WnljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCVWVYQmxJRDA5UFNCVGRISnBibWM3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaWh2WW1vcElEMDlQU0FuYm5WdFltVnlKeWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlI1Y0dVZ1BUMDlJRTUxYldKbGNqdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUtHOWlhaWtnUFQwOUlDZGliMjlzWldGdUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGUjVjR1VnUFQwOUlFSnZiMnhsWVc0N1hHNGdJQ0FnYVdZZ0tGUjVjR1VnUFQwOUlFRnljbUY1S1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUVhKeVlYa3VhWE5CY25KaGVTaHZZbW9wTzF4dVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JwY3p0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFYTXVhbk1pTENKcGJYQnZjblFnWTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZZMjl0Y0dGeVpTYzdYRzVjYm1aMWJtTjBhVzl1SUdScFptWW9iMnhrVm1Gc2RXVXNJRzVsZDFaaGJIVmxLWHRjYmx4MFkyOXVjM1FnWTI5dGNHRnlhWE52YmxaaGJIVmxJRDBnSUdOdmJYQmhjbVVvYjJ4a1ZtRnNkV1VzSUc1bGQxWmhiSFZsS1R0Y2JseHVYSFJwWmloamIyMXdZWEpwYzI5dVZtRnNkV1VnUFQwOUlEQXBlMXh1WEhSY2RHNWxkMVpoYkhWbElEMGdkVzVrWldacGJtVmtPMXh1WEhSOVhHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dVhIUmNkSEJ5WlhacGIzVnpPaUJ2YkdSV1lXeDFaU3hjYmx4MFhIUjJZV3gxWlRvZ2JtVjNWbUZzZFdWY2JseDBmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1pHbG1aanRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WkdsbVppNXFjeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCBEaWZmTG9nZ2VyIGZyb20gJy4vRGlmZkxvZ2dlcic7XG5cbmV4cG9ydCB7XG5cdExvZ2dlciBhcyBkZWZhdWx0LFxuXHREaWZmTG9nZ2VyXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dFbnRyeSBmcm9tICcuL0xvZ0VudHJ5JztcblxuZnVuY3Rpb24gYXBwbHlEaWZmKHN0ZXBzLCBjYWxsYmFjaykge1xuXHRjb25zdCB7Y29udGV4dCwgdW5kb0xvZywgcmVkb0xvZywgZ2V0dGVyLCBzZXR0ZXJ9ID0gdGhpcztcblx0bGV0IHsgcHJldlN0YXRlIH0gPSB0aGlzO1xuXHRjb25zdCBhYnNTdGVwcyA9IE1hdGguYWJzKHN0ZXBzKTtcblx0bGV0IHN0ZXBzUmVtYWluaW5nID0gTWF0aC5taW4oYWJzU3RlcHMsIHN0ZXBzIDwgMCA/IHVuZG9Mb2cubGVuZ3RoIDogcmVkb0xvZy5sZW5ndGgpO1xuXHRpZiAoc3RlcHNSZW1haW5pbmcgPiAwKSB7XG5cdFx0bGV0IGxvZ0VudHJ5LCBkaWZmO1xuXHRcdHdoaWxlIChzdGVwc1JlbWFpbmluZy0tID4gMCkge1xuXHRcdFx0aWYgKHN0ZXBzIDwgMCkgeyAvLyB1bmRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gdW5kb0xvZy5wb3AoKTtcblx0XHRcdFx0cmVkb0xvZy51bnNoaWZ0KGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5LnByZXY7XG5cdFx0XHR9IGVsc2UgeyAvL3JlZG9cblx0XHRcdFx0bG9nRW50cnkgPSByZWRvTG9nLnNoaWZ0KCk7XG5cdFx0XHRcdHVuZG9Mb2cucHVzaChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RlcHNSZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBkaWZmLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IHRydWU7XG5cdFx0Ly8gbm93IGFmdGVyIHJlYWNoaW5nIHRoZSBMb2cgZW50cnkgYXBwbHkgdGhlIGRpZmYgdG8gY3VycmVudCBzdGF0ZVxuXHRcdHNldHRlci5jYWxsKGNvbnRleHQsIGRpZmYsIGNhbGxiYWNrKTtcblx0fSBlbHNlIHtcblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKHNhdmVDYWxsYmFjayl7XG5cdFx0dGhpcy5jb250ZXh0O1xuXHRcdHRoaXMuZ2V0dGVyO1xuXHRcdHRoaXMuc2V0dGVyO1xuXHRcdHRoaXMuZGlmZk1ldGhvZDtcblxuXHRcdHRoaXMudW5kb0xvZyA9IFtdO1xuXHRcdHRoaXMucmVkb0xvZyA9IFtdO1xuXG5cdFx0dGhpcy5wcmV2U3RhdGUgPSBudWxsO1xuXHRcdHRoaXMubmV4dElkID0gMDtcblxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFjaztcblxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cdH1cbn1cblxuTG9nZ2VyLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgZ2V0dGVyLCBzZXR0ZXIsIGRpZmZNZXRob2Qpe1xuXHRpZighZ2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgZ2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoIXNldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IHNldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmdldHRlciA9IGdldHRlcjtcblx0dGhpcy5zZXR0ZXIgPSBzZXR0ZXI7XG5cdHRoaXMuZGlmZk1ldGhvZCA9IGRpZmZNZXRob2Q7XG5cdHRoaXMucHJldlN0YXRlID0gZ2V0dGVyLmNhbGwoY29udGV4dCk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnNldFNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHNhdmVDYWxsYmFjayl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFja1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCAtc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0YXBwbHlEaWZmLmNhbGwodGhpcywgc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuZGlmZkFwcGxpZWQpe1xuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGxvZztcblx0XHRsZXQgZ2V0RGlmZiA9IHRoaXMuZGlmZk1ldGhvZCA/IHRoaXMuZGlmZk1ldGhvZCA6IGRpZmY7XG5cdFx0aWYodGhpcy5jb250ZXh0KXtcblx0XHRcdGNvbnN0IHN0YXRlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLmNvbnRleHQpO1xuXHRcdFx0Y29uc3QgZGlmZk9iamVjdCA9IGdldERpZmYodGhpcy5wcmV2U3RhdGUsIHN0YXRlKTtcblx0XHRcdC8vIENoYW5nZSBvY2N1cnJlZCBsb2cgdGhlbVxuXHRcdFx0aWYgKGRpZmZPYmplY3QuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxvZyA9IG5ldyBMb2dFbnRyeSh0aGlzLm5leHRJZCsrLCBkaWZmT2JqZWN0LmN1cnJlbnQsIGRpZmZPYmplY3QucHJldik7XG5cdFx0XHRcdGlmKHRoaXMucmVkb0xvZy5sZW5ndGggIT09IDApe1xuXHRcdFx0XHRcdGNvbnN0IG5leHRMb2cgPSB0aGlzLnJlZG9Mb2dbMF07XG5cdFx0XHRcdFx0bmV4dExvZy5wcmV2ID0gbG9nLm5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51bmRvTG9nLnB1c2gobG9nKTtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrICYmIHRoaXMuc2F2ZURpZmZDYWxsYmFjayhsb2cpO1xuXHR9XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Mb2dnZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dFbnRyeSB7XG5cdGNvbnN0cnVjdG9yKGlkLCBuZXh0LCBwcmV2KXtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uZXh0ID0gbmV4dDtcblx0XHR0aGlzLnByZXYgPSBwcmV2O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ0VudHJ5LmpzIiwiaW1wb3J0IGRpZmYgZnJvbSAnZGlmZic7XG5pbXBvcnQgUGl2b3RlZExpbmtlZExpc3QgZnJvbSAncGl2b3RlZC1saW5rZWQtbGlzdCc7XG5cbmZ1bmN0aW9uIHNoaWZ0QW5kQXBwbHlMb2coc3RlcHMsIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHtjb250ZXh0LCBsb2dMaXN0LCBzZXR0ZXIgfSA9IHRoaXM7XG5cblx0Y29uc3QgbG9nRW50cnkgPSBsb2dMaXN0LnNoaWZ0UGl2b3Qoc3RlcHMpO1xuXHRjb25zdCBkaWZmT2JqZWN0ID0gbG9nRW50cnkuZWxlbWVudDtcblx0Y29uc3QgZGlmZlN0YXRlID0gZGlmZk9iamVjdC52YWx1ZTtcblxuXHRzZXR0ZXIuY2FsbChjb250ZXh0LCBkaWZmU3RhdGUsIGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZMb2dnZXIge1xuXHRjb25zdHJ1Y3RvcihzYXZlQ2FsbGJhY2spe1xuXHRcdHRoaXMuY29udGV4dDtcblx0XHR0aGlzLmdldHRlcjtcblx0XHR0aGlzLnNldHRlcjtcblx0XHR0aGlzLmRpZmZNZXRob2Q7XG5cblx0XHR0aGlzLmxvZ0xpc3QgPSBuZXcgUGl2b3RlZExpbmtlZExpc3QoW10pO1xuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFjaztcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cdH1cbn1cblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uKGNvbnRleHQsIGdldHRlciwgc2V0dGVyLCBkaWZmTWV0aG9kKXtcblx0aWYoIWdldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IGdldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKCFzZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBzZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5nZXR0ZXIgPSBnZXR0ZXI7XG5cdHRoaXMuc2V0dGVyID0gc2V0dGVyO1xuXHR0aGlzLmRpZmZNZXRob2QgPSBkaWZmTWV0aG9kO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUuc2V0U2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oc2F2ZUNhbGxiYWNrKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrXG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0c2hpZnRBbmRBcHBseUxvZy5jYWxsKHRoaXMsIC1zdGVwcywgY2FsbGJhY2spO1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0c2hpZnRBbmRBcHBseUxvZy5jYWxsKHRoaXMsIHN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBnZXREaWZmID0gdGhpcy5kaWZmTWV0aG9kID8gdGhpcy5kaWZmTWV0aG9kIDogZGlmZjtcblx0XHRpZih0aGlzLmNvbnRleHQpe1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMuY29udGV4dCk7XG5cdFx0XHRjb25zdCBjdXJyZW50RGlmZiA9IHRoaXMuZ2V0Q3VycmVudExvZygpO1xuXHRcdFx0Y29uc3QgY3VycmVudFN0YXRlID0gY3VycmVudERpZmYgPyBjdXJyZW50RGlmZi52YWx1ZSA6IHVuZGVmaW5lZDtcblx0XHRcdGNvbnN0IGRpZmYgPSBnZXREaWZmKGN1cnJlbnRTdGF0ZSwgc3RhdGUpO1xuXG5cdFx0XHRpZiAoZGlmZi52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7IC8vIENoYW5nZSBvY2N1cnJlZCBsb2cgdGhlbVxuXHRcdFx0XHR0aGlzLmxvZ0xpc3QuaW5zZXJ0KGRpZmYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGRpZmYpO1xuXHR9XG59O1xuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLmdldEN1cnJlbnRMb2cgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmxvZ0xpc3QgKXtcblx0XHRyZXR1cm4gdGhpcy5sb2dMaXN0LmdldFBpdm90RWxlbWVudCgpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRGlmZkxvZ2dlci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlua2VkbGlzdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX05vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQaXZvdGVkTGlua2VkTGlzdCA9IGZ1bmN0aW9uIFBpdm90ZWRMaW5rZWRMaXN0KGFycmF5KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXZvdGVkTGlua2VkTGlzdCk7XG5cblx0dGhpcy5waXZvdCA9IG51bGw7XG5cdHRoaXMuaGVhZCA9IG51bGw7XG5cdHRoaXMudGFpbCA9IG51bGw7XG5cdHRoaXMubGVuZ3RoID0gMDtcblx0YXJyYXkgJiYgdGhpcy5jcmVhdGUoYXJyYXkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGl2b3RlZExpbmtlZExpc3Q7XG5cblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdHZhciBuZXdOb2RlID0gbmV3IF9Ob2RlMi5kZWZhdWx0KGVsZW1lbnQpO1xuXHR0aGlzLmxlbmd0aCsrO1xuXG5cdHZhciBjdXJyZW50ID0gdm9pZCAwLFxuXHQgICAgbmV4dCA9IHZvaWQgMDtcblxuXHRpZiAoIXRoaXMucGl2b3QpIHtcblx0XHQvLyBpbnNlcnRpbmcgYXMgZmlyc3QgZWxlbWVudFxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cdH0gZWxzZSBpZiAodGhpcy5waXZvdC5uZXh0KSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGluIG1pZGRsZVxuXG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0bmV4dCA9IHRoaXMucGl2b3QubmV4dDtcblxuXHRcdG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGFzIGxhc3QgZWxlbWVudFxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMudGFpbCA9IG5ld05vZGU7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90ID0gZnVuY3Rpb24gKHNoaWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gdGhpcy5waXZvdDtcblxuXHR2YXIgcmlnaHRTaGlmdCA9IHZvaWQgMDtcblx0aWYgKHNoaWZ0ID49IDApIHtcblx0XHRyaWdodFNoaWZ0ID0gdHJ1ZTtcblx0fVxuXG5cdHdoaWxlIChzaGlmdCAhPT0gMCkge1xuXHRcdGlmIChyaWdodFNoaWZ0KSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdFx0Y3VycmVudCA9PT0gdGhpcy50YWlsID8gc2hpZnQgPSAwIDogc2hpZnQtLTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucHJldjtcblx0XHRcdGN1cnJlbnQgPT09IHRoaXMuaGVhZCA/IHNoaWZ0ID0gMCA6IHNoaWZ0Kys7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5waXZvdCA9IGN1cnJlbnQ7XG5cblx0cmV0dXJuIHRoaXMucGl2b3Q7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvSGVhZCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9UYWlsID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gdGhpcy50YWlsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdGFycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdF90aGlzLmluc2VydChlbGVtZW50KTtcblx0fSk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHJpZ2h0VG9MZWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyB0aGlzLnRhaWwgOiB0aGlzLmhlYWQ7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0Y2FsbGJhY2soY3VycmVudC5lbGVtZW50KTtcblx0XHRjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyBjdXJyZW50LnByZXYgOiBjdXJyZW50Lm5leHQ7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGFycmF5LnB1c2goZWxlbWVudCk7XG5cdH0pO1xuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuZ2V0UGl2b3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5waXZvdCkge1xuXHRcdHJldHVybiB0aGlzLnBpdm90LmVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG5leHQgPSB0aGlzLnBpdm90Lm5leHQgPyB0aGlzLnBpdm90Lm5leHQgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gbmV4dDtcblx0cmV0dXJuIG5leHQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHByZXYgPSB0aGlzLnBpdm90LnByZXYgPyB0aGlzLnBpdm90LnByZXYgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gcHJldjtcblx0cmV0dXJuIHByZXY7XG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPSBmdW5jdGlvbiBOb2RlKGVsZW1lbnQpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EwWXpReE5UVmpOVFZrTVRka01ESTFPREE1T0NJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwwNXZaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lVR2wyYjNSbFpFeHBibXRsWkV4cGMzUWlMQ0poY25KaGVTSXNJbkJwZG05MElpd2lhR1ZoWkNJc0luUmhhV3dpTENKc1pXNW5kR2dpTENKamNtVmhkR1VpTENKd2NtOTBiM1I1Y0dVaUxDSnBibk5sY25RaUxDSmxiR1Z0Wlc1MElpd2libVYzVG05a1pTSXNJbU4xY25KbGJuUWlMQ0p1WlhoMElpd2ljSEpsZGlJc0luTm9hV1owVUdsMmIzUWlMQ0p6YUdsbWRDSXNJbkpwWjJoMFUyaHBablFpTENKemFHbG1kRkJwZG05MFZHOUlaV0ZrSWl3aWMyaHBablJRYVhadmRGUnZWR0ZwYkNJc0ltMWhjQ0lzSW5SeVlYWmxjbk5sSWl3aVkyRnNiR0poWTJzaUxDSnlhV2RvZEZSdlRHVm1kQ0lzSW5SdlFYSnlZWGtpTENKd2RYTm9JaXdpWjJWMFVHbDJiM1JGYkdWdFpXNTBJaXdpVG05a1pTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVNM1JFRTdPenM3T3pzN08wbEJRM0ZDUVN4cFFpeEhRVU53UWl3eVFrRkJXVU1zUzBGQldpeEZRVUZyUWp0QlFVRkJPenRCUVVOcVFpeE5RVUZMUXl4TFFVRk1MRWRCUVdFc1NVRkJZanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1RVRkJTME1zU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4TlFVRkxReXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5CU2l4VlFVRlRMRXRCUVV0TExFMUJRVXdzUTBGQldVd3NTMEZCV2l4RFFVRlVPMEZCUTBFc1F6czdhMEpCVUcxQ1JDeHBRanM3TzBGQlZYSkNRU3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDUXl4TlFVRTFRaXhIUVVGeFF5eFZRVUZUUXl4UFFVRlVMRVZCUVdsQ08wRkJRM0pFTEV0QlFVMURMRlZCUVZVc2JVSkJRVk5FTEU5QlFWUXNRMEZCYUVJN1FVRkRRU3hOUVVGTFNpeE5RVUZNT3p0QlFVVkJMRXRCUVVsTkxHZENRVUZLTzBGQlFVRXNTMEZCWVVNc1lVRkJZanM3UVVGRlFTeExRVUZITEVOQlFVTXNTMEZCUzFZc1MwRkJWQ3hGUVVGbE8wRkJRVVU3UVVGRGFFSXNUMEZCUzBFc1MwRkJUQ3hIUVVGaFVTeFBRVUZpTzBGQlEwRXNUMEZCUzFBc1NVRkJUQ3hIUVVGWlR5eFBRVUZhTzBGQlEwRXNSVUZJUkN4TlFVZFBMRWxCUVVjc1MwRkJTMUlzUzBGQlRDeERRVUZYVlN4SlFVRmtMRVZCUVcxQ08wRkJRVVU3TzBGQlJUTkNSQ3haUVVGVkxFdEJRVXRVTEV0QlFXWTdRVUZEUVZVc1UwRkJUeXhMUVVGTFZpeExRVUZNTEVOQlFWZFZMRWxCUVd4Q096dEJRVVZCUml4VlFVRlJSU3hKUVVGU0xFZEJRV1ZFTEZGQlFWRkRMRWxCUVhaQ08wRkJRMEZHTEZWQlFWRkhMRWxCUVZJc1IwRkJaVVlzVDBGQlpqczdRVUZGUVVFc1ZVRkJVVU1zU1VGQlVpeEhRVUZsUml4UFFVRm1PMEZCUTBGRkxFOUJRVXRETEVsQlFVd3NSMEZCV1Vnc1QwRkJXanM3UVVGSFFTeFBRVUZMVWl4TFFVRk1MRWRCUVdGUkxFOUJRV0k3UVVGRFFTeEZRV0pOTEUxQllVRTdRVUZCUlR0QlFVTlNReXhaUVVGVkxFdEJRVXRVTEV0QlFXWTdRVUZEUVZNc1ZVRkJVVU1zU1VGQlVpeEhRVUZsUml4UFFVRm1PMEZCUTBGQkxGVkJRVkZITEVsQlFWSXNSMEZCWlVZc1QwRkJaanM3UVVGRlFTeFBRVUZMVkN4TFFVRk1MRWRCUVdGUkxFOUJRV0k3UVVGRFFTeFBRVUZMVGl4SlFVRk1MRWRCUVZsTkxFOUJRVm83UVVGRFFUdEJRVVZFTEVOQkwwSkVPenRCUVdsRFFWWXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRazhzVlVGQk5VSXNSMEZCZVVNc1ZVRkJVME1zUzBGQlZDeEZRVUZsTzBGQlEzWkVMRXRCUVVsS0xGVkJRVlVzUzBGQlMxUXNTMEZCYmtJN08wRkJSVUVzUzBGQlNXTXNiVUpCUVVvN1FVRkRRU3hMUVVGSFJDeFRRVUZUTEVOQlFWb3NSVUZCWXp0QlFVTmlReXhsUVVGaExFbEJRV0k3UVVGRFFUczdRVUZGUkN4UlFVRk5SQ3hWUVVGVkxFTkJRV2hDTEVWQlFXdENPMEZCUTJwQ0xFMUJRVWRETEZWQlFVZ3NSVUZCWXp0QlFVTmlUQ3hoUVVGVlFTeFJRVUZSUXl4SlFVRnNRanRCUVVORFJDeGxRVUZaTEV0QlFVdFFMRWxCUVd4Q0xFZEJRVEpDVnl4UlFVRlJMRU5CUVc1RExFZEJRWGREUVN4UFFVRjRRenRCUVVOQkxFZEJTRVFzVFVGSFR6dEJRVU5PU2l4aFFVRlZRU3hSUVVGUlJTeEpRVUZzUWp0QlFVTkRSaXhsUVVGWkxFdEJRVXRTTEVsQlFXeENMRWRCUVRKQ1dTeFJRVUZSTEVOQlFXNURMRWRCUVhkRFFTeFBRVUY0UXp0QlFVTkJPMEZCUTBRN08wRkJSVVFzVFVGQlMySXNTMEZCVEN4SFFVRmhVeXhQUVVGaU96dEJRVVZCTEZGQlFVOHNTMEZCUzFRc1MwRkJXanRCUVVOQkxFTkJja0pFT3p0QlFYVkNRVVlzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxVc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyWXNTMEZCVEN4SFFVRmhMRXRCUVV0RExFbEJRV3hDTzBGQlEwRXNRMEZHUkRzN1FVRkpRVWdzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxjc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyaENMRXRCUVV3c1IwRkJZU3hMUVVGTFJTeEpRVUZzUWp0QlFVTkJMRU5CUmtRN08wRkJTVUZLTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKRUxFMUJRVFZDTEVkQlFYRkRMRlZCUVZOTUxFdEJRVlFzUlVGQlpUdEJRVUZCT3p0QlFVTnVSRUVzVDBGQlRXdENMRWRCUVU0c1EwRkJWU3hWUVVGRFZpeFBRVUZFTEVWQlFWYzdRVUZEY0VJc1VVRkJTMFFzVFVGQlRDeERRVUZaUXl4UFFVRmFPMEZCUTBFc1JVRkdSRHRCUVVkQkxFTkJTa1E3TzBGQlRVRlVMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpoTEZGQlFUVkNMRWRCUVhWRExGVkJRVk5ETEZGQlFWUXNSVUZCYlVKRExGZEJRVzVDTEVWQlFTdENPMEZCUTNKRkxFdEJRVWxZTEZWQlFWVlhMR05CUVdNc1MwRkJTMnhDTEVsQlFXNUNMRWRCUVRCQ0xFdEJRVXRFTEVsQlFUZERPMEZCUTBFc1VVRkJUVkVzVDBGQlRpeEZRVUZqTzBGQlEySlZMRmRCUVZOV0xGRkJRVkZHTEU5QlFXcENPMEZCUTBGRkxGbEJRVlZYTEdOQlFXTllMRkZCUVZGRkxFbEJRWFJDTEVkQlFUWkNSaXhSUVVGUlF5eEpRVUV2UXp0QlFVTkJPMEZCUTBRc1EwRk9SRHM3UVVGVFFWb3NhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbWRDTEU5QlFUVkNMRWRCUVhORExGbEJRVlU3UVVGREwwTXNTMEZCVFhSQ0xGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVdHRRaXhSUVVGTUxFTkJRV01zVlVGQlExZ3NUMEZCUkN4RlFVRlhPMEZCUTNoQ1VpeFJRVUZOZFVJc1NVRkJUaXhEUVVGWFppeFBRVUZZTzBGQlEwRXNSVUZHUkR0QlFVZEJMRkZCUVU5U0xFdEJRVkE3UVVGRFFTeERRVTVFT3p0QlFWRkJSQ3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDYTBJc1pVRkJOVUlzUjBGQk9FTXNXVUZCVlR0QlFVTjJSQ3hMUVVGSExFdEJRVXQyUWl4TFFVRlNMRVZCUVdNN1FVRkRZaXhUUVVGUExFdEJRVXRCTEV0QlFVd3NRMEZCVjA4c1QwRkJiRUk3UVVGRFFUdEJRVU5FTEZGQlFVOHNTVUZCVUR0QlFVTkJMRU5CVEVRN08wRkJUMEZVTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKTExFbEJRVFZDTEVkQlFXMURMRmxCUVZVN1FVRkROVU1zUzBGQlRVRXNUMEZCVHl4TFFVRkxWaXhMUVVGTUxFTkJRVmRWTEVsQlFWZ3NSMEZCYTBJc1MwRkJTMVlzUzBGQlRDeERRVUZYVlN4SlFVRTNRaXhIUVVGeFF5eExRVUZMVml4TFFVRjJSRHRCUVVOQkxFMUJRVXRCTEV0QlFVd3NSMEZCWVZVc1NVRkJZanRCUVVOQkxGRkJRVTlCTEVsQlFWQTdRVUZEUVN4RFFVcEVPenRCUVUxQldpeHJRa0ZCYTBKUExGTkJRV3hDTEVOQlFUUkNUU3hKUVVFMVFpeEhRVUZ0UXl4WlFVRlZPMEZCUXpWRExFdEJRVTFCTEU5QlFVOHNTMEZCUzFnc1MwRkJUQ3hEUVVGWFZ5eEpRVUZZTEVkQlFXdENMRXRCUVV0WUxFdEJRVXdzUTBGQlYxY3NTVUZCTjBJc1IwRkJjVU1zUzBGQlMxZ3NTMEZCZGtRN1FVRkRRU3hOUVVGTFFTeExRVUZNTEVkQlFXRlhMRWxCUVdJN1FVRkRRU3hSUVVGUFFTeEpRVUZRTzBGQlEwRXNRMEZLUkN4RE96czdPenM3T3pzN096czdPenM3U1VNdlIzRkNZU3hKTEVkQlEzQkNMR05CUVZscVFpeFBRVUZhTEVWQlFXOUNPMEZCUVVFN08wRkJRMjVDTEUxQlFVdEJMRTlCUVV3c1IwRkJaVUVzVDBGQlpqdEJRVU5CTEUxQlFVdEhMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzVFVGQlMwTXNTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hET3p0clFrRk1iVUpoTEVraUxDSm1hV3hsSWpvaWJHbGlMMmx1WkdWNExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKc2FXNXJaV1JzYVhOMFhDSXNJRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lteHBibXRsWkd4cGMzUmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2liR2x1YTJWa2JHbHpkRndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSNWNHVnZaaUJ6Wld4bUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lITmxiR1lnT2lCMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN1hHNGdYSFJjZEZ4MFhIUmpiMjVtYVdkMWNtRmliR1U2SUdaaGJITmxMRnh1SUZ4MFhIUmNkRngwWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdkbGREb2daMlYwZEdWeVhHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTkdNME1UVTFZelUxWkRFM1pEQXlOVGd3T1RnaUxDSnBiWEJ2Y25RZ1RtOWtaU0JtY205dElGd2lMaTlPYjJSbFhDSTdYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZENCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0dGeWNtRjVLWHRjYmx4MFhIUjBhR2x6TG5CcGRtOTBJRDBnYm5Wc2JEdGNibHgwWEhSMGFHbHpMbWhsWVdRZ1BTQnVkV3hzTzF4dVhIUmNkSFJvYVhNdWRHRnBiQ0E5SUc1MWJHdzdYRzVjZEZ4MGRHaHBjeTVzWlc1bmRHZ2dQU0F3TzF4dVhIUmNkR0Z5Y21GNUlDWW1JSFJvYVhNdVkzSmxZWFJsS0dGeWNtRjVLVHRjYmx4MGZWeHVmVnh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWFXNXpaWEowSUQwZ1puVnVZM1JwYjI0b1pXeGxiV1Z1ZENsN1hHNWNkR052Ym5OMElHNWxkMDV2WkdVZ1BTQnVaWGNnVG05a1pTaGxiR1Z0Wlc1MEtUdGNibHgwZEdocGN5NXNaVzVuZEdnckt6dGNibHh1WEhSc1pYUWdZM1Z5Y21WdWRDd2dibVY0ZER0Y2JseHVYSFJwWmlnaGRHaHBjeTV3YVhadmRDbDdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5Qm1hWEp6ZENCbGJHVnRaVzUwWEc1Y2RGeDBkR2hwY3k1d2FYWnZkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBkR2hwY3k1b1pXRmtJRDBnYm1WM1RtOWtaVHRjYmx4MGZTQmxiSE5sSUdsbUtIUm9hWE11Y0dsMmIzUXVibVY0ZENsN0lDOHZJR2x1YzJWeWRHbHVaeUJwYmlCdGFXUmtiR1ZjYmx4dVhIUmNkR04xY25KbGJuUWdQU0IwYUdsekxuQnBkbTkwTzF4dVhIUmNkRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRN1hHNWNibHgwWEhSdVpYZE9iMlJsTG01bGVIUWdQU0JqZFhKeVpXNTBMbTVsZUhRN1hHNWNkRngwYm1WM1RtOWtaUzV3Y21WMklEMGdZM1Z5Y21WdWREdGNibHh1WEhSY2RHTjFjbkpsYm5RdWJtVjRkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBibVY0ZEM1d2NtVjJJRDBnYm1WM1RtOWtaVHRjYmx4dVhHNWNkRngwZEdocGN5NXdhWFp2ZENBOUlHNWxkMDV2WkdVN1hHNWNkSDBnWld4elpTQjdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5QnNZWE4wSUdWc1pXMWxiblJjYmx4MFhIUmpkWEp5Wlc1MElEMGdkR2hwY3k1d2FYWnZkRHRjYmx4MFhIUmpkWEp5Wlc1MExtNWxlSFFnUFNCdVpYZE9iMlJsTzF4dVhIUmNkRzVsZDA1dlpHVXVjSEpsZGlBOUlHTjFjbkpsYm5RN1hHNWNibHgwWEhSMGFHbHpMbkJwZG05MElEMGdibVYzVG05a1pUdGNibHgwWEhSMGFHbHpMblJoYVd3Z1BTQnVaWGRPYjJSbE8xeHVYSFI5WEc1Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1emFHbG1kRkJwZG05MElEMGdablZ1WTNScGIyNG9jMmhwWm5RcGUxeHVYSFJzWlhRZ1kzVnljbVZ1ZENBOUlIUm9hWE11Y0dsMmIzUTdYRzVjYmx4MGJHVjBJSEpwWjJoMFUyaHBablE3WEc1Y2RHbG1LSE5vYVdaMElENDlJREFwZTF4dVhIUmNkSEpwWjJoMFUyaHBablFnUFNCMGNuVmxPMXh1WEhSOVhHNWNibHgwZDJocGJHVW9jMmhwWm5RZ0lUMDlJREFwZTF4dVhIUmNkR2xtS0hKcFoyaDBVMmhwWm5RcGUxeHVYSFJjZEZ4MFkzVnljbVZ1ZENBOUlHTjFjbkpsYm5RdWJtVjRkRHRjYmx4MFhIUmNkQ2hqZFhKeVpXNTBJRDA5UFNCMGFHbHpMblJoYVd3cElEOGdLSE5vYVdaMElEMGdNQ2tnT2lCemFHbG1kQzB0TzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXdjbVYyTzF4dVhIUmNkRngwS0dOMWNuSmxiblFnUFQwOUlIUm9hWE11YUdWaFpDa2dQeUFvYzJocFpuUWdQU0F3S1NBNklITm9hV1owS3lzN1hHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGRHaHBjeTV3YVhadmRDQTlJR04xY25KbGJuUTdYRzVjYmx4MGNtVjBkWEp1SUhSb2FYTXVjR2wyYjNRN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWMyaHBablJRYVhadmRGUnZTR1ZoWkNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEhSb2FYTXVjR2wyYjNRZ1BTQjBhR2x6TG1obFlXUTdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVjMmhwWm5SUWFYWnZkRlJ2VkdGcGJDQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RIUm9hWE11Y0dsMmIzUWdQU0IwYUdsekxuUmhhV3c3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1WTNKbFlYUmxJRDBnWm5WdVkzUnBiMjRvWVhKeVlYa3BlMXh1WEhSaGNuSmhlUzV0WVhBb0tHVnNaVzFsYm5RcFBUNTdYRzVjZEZ4MGRHaHBjeTVwYm5ObGNuUW9aV3hsYldWdWRDazdYRzVjZEgwcFhHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWRISmhkbVZ5YzJVZ1BTQm1kVzVqZEdsdmJpaGpZV3hzWW1GamF5d2djbWxuYUhSVWIweGxablFwZTF4dVhIUnNaWFFnWTNWeWNtVnVkQ0E5SUhKcFoyaDBWRzlNWldaMElEOGdkR2hwY3k1MFlXbHNJRG9nZEdocGN5NW9aV0ZrTzF4dVhIUjNhR2xzWlNoamRYSnlaVzUwS1h0Y2JseDBYSFJqWVd4c1ltRmpheWhqZFhKeVpXNTBMbVZzWlcxbGJuUXBPMXh1WEhSY2RHTjFjbkpsYm5RZ1BTQnlhV2RvZEZSdlRHVm1kQ0EvSUdOMWNuSmxiblF1Y0hKbGRpQTZJR04xY25KbGJuUXVibVY0ZER0Y2JseDBmVnh1ZlR0Y2JseHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1ZEc5QmNuSmhlU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkR052Ym5OMElHRnljbUY1SUQwZ1cxMDdYRzVjZEhSb2FYTXVkSEpoZG1WeWMyVW9LR1ZzWlcxbGJuUXBQVDU3WEc1Y2RGeDBZWEp5WVhrdWNIVnphQ2hsYkdWdFpXNTBLVHRjYmx4MGZTbGNibHgwY21WMGRYSnVJR0Z5Y21GNU8xeHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtZGxkRkJwZG05MFJXeGxiV1Z1ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdsbUtIUm9hWE11Y0dsMmIzUXBlMXh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbkJwZG05MExtVnNaVzFsYm5RN1hHNWNkSDFjYmx4MGNtVjBkWEp1SUc1MWJHdzdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVibVY0ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdOdmJuTjBJRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRZ1B5QjBhR2x6TG5CcGRtOTBMbTVsZUhRZ09pQWdkR2hwY3k1d2FYWnZkRHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJRzVsZUhRN1hHNWNkSEpsZEhWeWJpQnVaWGgwTzF4dWZUdGNibHh1VUdsMmIzUmxaRXhwYm10bFpFeHBjM1F1Y0hKdmRHOTBlWEJsTG5CeVpYWWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUmpiMjV6ZENCd2NtVjJJRDBnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRDhnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRG9nSUhSb2FYTXVjR2wyYjNRN1hHNWNkSFJvYVhNdWNHbDJiM1FnUFNCd2NtVjJPMXh1WEhSeVpYUjFjbTRnY0hKbGRqdGNibjA3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJsdVpHVjRMbXB6SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUbTlrWlh0Y2JseDBZMjl1YzNSeWRXTjBiM0lvWld4bGJXVnVkQ2w3WEc1Y2RGeDBkR2hwY3k1bGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZER0Y2JseDBYSFIwYUdsekxtNWxlSFFnUFNCdWRXeHNPMXh1WEhSY2RIUm9hWE11Y0hKbGRpQTlJRzUxYkd3N1hHNWNkSDFjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlRtOWtaUzVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9waXZvdGVkLWxpbmtlZC1saXN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi8uLi9saWInO1xuaW1wb3J0IHtEaWZmTG9nZ2VyfSBmcm9tICcuLy4uL2xpYic7XG5cbnZhciBvYmogPSB7XG5cdHZhbHVlOiAwLFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uKHZhbCl7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0fVxufVxuXG5mdW5jdGlvbiBzYXZlQ2FsbGJhY2sobG9nKXtcblx0Y29uc29sZS5sb2cobG9nKVxufVxuXG52YXIgbG9nZ2VyID0gbmV3IERpZmZMb2dnZXIobnVsbCxzYXZlQ2FsbGJhY2spO1xubG9nZ2VyLnNldENvbnRleHQob2JqLG9iai5nZXRWYWx1ZSwgb2JqLnNldFZhbHVlKTtcblxuXG5vYmouc2V0VmFsdWUoMSk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFZhbHVlKDIpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRWYWx1ZSgzKTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5vYmouc2V0VmFsdWUoNCk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFZhbHVlKDUpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnJlZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciByZWRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIHJlZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbm9iai5zZXRWYWx1ZSg2KTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxuXG5cbi8qXG4gY29uc29sZS5sb2coJ0JlZm9yZSBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcbmxvZ2dlci5yZWRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFJlZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5vYmouc2V0VmFsdWUoNik7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFZhbHVlKDcpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyAxIFN0ZXBzOiAnLCBvYmoudmFsdWUpOyovXG5cblxuXG5cbi8qbG9nZ2VyLnVuZG8oNyk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbyA3IFN0ZXBzIG1vcmUgdGhhbiBhdmFpbGFibGUgc3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbyg3KTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDcgU3RlcHMgbW9yZSB0aGFuIGF2YWlsYWJsZSBzdGVwczogJywgb2JqLnZhbHVlKTsqL1xuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==