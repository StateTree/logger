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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
	this.setter;
	this.diffMethod;

	this.logList = new _pivotedLinkedList2.default([]);
	this.saveDiffCallback = saveCallback;
	this.enable = true;
};

exports.default = DiffLogger;


DiffLogger.prototype.setContext = function (context, setter, diffMethod) {

	if (!setter) {
		console.warn('Context setter function is required');
		return;
	}
	this.context = context;
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
			var currentDiff = this.getCurrentLog();
			var state = currentDiff ? currentDiff.previous : undefined;
			var _diff = getDiff(state);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMjk2ZjM0MGNkZDIyZjk5OWVlYyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9EaWZmTG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsIkRpZmZMb2dnZXIiLCJhcHBseURpZmYiLCJzdGVwcyIsImNhbGxiYWNrIiwiY29udGV4dCIsInVuZG9Mb2ciLCJyZWRvTG9nIiwiZ2V0dGVyIiwic2V0dGVyIiwicHJldlN0YXRlIiwiYWJzU3RlcHMiLCJNYXRoIiwiYWJzIiwic3RlcHNSZW1haW5pbmciLCJtaW4iLCJsZW5ndGgiLCJsb2dFbnRyeSIsImRpZmYiLCJwb3AiLCJ1bnNoaWZ0IiwicHJldiIsInNoaWZ0IiwicHVzaCIsIm5leHQiLCJ2YWx1ZSIsImRpZmZBcHBsaWVkIiwiY2FsbCIsIkxvZ2dlciIsInNhdmVDYWxsYmFjayIsImRpZmZNZXRob2QiLCJuZXh0SWQiLCJzYXZlRGlmZkNhbGxiYWNrIiwiZW5hYmxlIiwicHJvdG90eXBlIiwic2V0Q29udGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U2F2ZUNhbGxiYWNrIiwicmVtb3ZlU2F2ZUNhbGxiYWNrIiwidW5kbyIsImlzTmFOIiwicmVkbyIsInNhdmUiLCJsb2ciLCJnZXREaWZmIiwic3RhdGUiLCJkaWZmT2JqZWN0IiwiY3VycmVudCIsInVuZGVmaW5lZCIsIm5leHRMb2ciLCJMb2dFbnRyeSIsImlkIiwic2hpZnRBbmRBcHBseUxvZyIsImxvZ0xpc3QiLCJzaGlmdFBpdm90IiwiZWxlbWVudCIsImRpZmZTdGF0ZSIsImN1cnJlbnREaWZmIiwiZ2V0Q3VycmVudExvZyIsInByZXZpb3VzIiwiaW5zZXJ0IiwiZ2V0UGl2b3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyxjQUFjLDJwWCIsImZpbGUiOiJsaWIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImxvZ2dlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsb2dnZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibG9nZ2VyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMjk2ZjM0MGNkZDIyZjk5OWVlYyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3N0cmluZ0NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nQ29tcGFyZSk7XG5cbnZhciBfbnVtYmVyQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfbnVtYmVyQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXJDb21wYXJlKTtcblxudmFyIF9kYXRlQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfZGF0ZUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZUNvbXBhcmUpO1xuXG52YXIgX2FycmF5Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYXJyYXlDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FycmF5Q29tcGFyZSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RDb21wYXJlKTtcblxudmFyIF9pcyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfaXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZE9ialR5cGUgPSB0eXBlb2Ygb2xkT2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvbGRPYmopO1xuICAgIHZhciBuZXdPYmpUeXBlID0gdHlwZW9mIG5ld09iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSBuZXdPYmpUeXBlKSByZXR1cm4gKDAsIF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0KShvbGRPYmpUeXBlLCBuZXdPYmpUeXBlKTtcblxuICAgIGlmIChvbGRPYmpUeXBlID09PSAnYm9vbGVhbicpIHJldHVybiAoMCwgX251bWJlckNvbXBhcmUyLmRlZmF1bHQpKE51bWJlcihvbGRPYmopLCBOdW1iZXIobmV3T2JqKSk7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gKDAsIF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gJ29iamVjdCcpIHJldHVybiAxO1xuXG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgRGF0ZSkpIHJldHVybiAoMCwgX2RhdGVDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgQXJyYXkpKSByZXR1cm4gKDAsIF9hcnJheUNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBPYmplY3QpKSByZXR1cm4gKDAsIF9vYmplY3RDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG5cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKSByZXN1bHQgPSAtMTtlbHNlIGlmIChyZXN1bHQgPiAxKSByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5nQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKSByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKSByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKSByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbnVtYmVyQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gZGF0ZUNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwgJiYgbmV3VmFsdWUgPT09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgbmV3VGltZSA9IG5ld1ZhbHVlLmdldFRpbWUoKTtcbiAgICBpZiAob2xkVGltZSA8IG5ld1RpbWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVGltZSA+IG5ld1RpbWUpIHJldHVybiAxO1xuXG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpICYmIGlzTmFOKG5ld1RpbWUpKSByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVGltZSkpIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdUaW1lKSkgcmV0dXJuIC0xO1xuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhdGVDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgdmFyIG9sZE9iakxlbmd0aCA9IG9sZE9iai5sZW5ndGg7XG4gICAgdmFyIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aCkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGRPYmpMZW5ndGg7IGkrKykge1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW2ldLCBuZXdPYmpbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9IDApIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYXJyYXlDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3AgaW4gb2xkT2JqKSB7XG4gICAgICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KHByb3ApKSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIGNvbXBhcmlzb25WYWx1ZSA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3AgaW4gbmV3T2JqKSB7XG4gICAgICAgIGlmICghb2xkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSByZXR1cm4gMTtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShvbGRPYmpbcHJvcF0sIG5ld09ialtwcm9wXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT09IDApIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gb2JqZWN0Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub2JqZWN0Q29tcGFyZSA9IGV4cG9ydHMuYXJyYXlDb21wYXJlID0gZXhwb3J0cy5kYXRlQ29tcGFyZSA9IGV4cG9ydHMubnVtYmVyQ29tcGFyZSA9IGV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IGV4cG9ydHMuY29tcGFyZSA9IGV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxudmFyIF9kaWZmID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIF9kaWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpZmYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGlmZjIuZGVmYXVsdDtcbmV4cG9ydHMuY29tcGFyZSA9IF9jb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5zdHJpbmdDb21wYXJlID0gX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLm51bWJlckNvbXBhcmUgPSBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBfZGF0ZUNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmFycmF5Q29tcGFyZSA9IF9hcnJheUNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykgcmV0dXJuIFR5cGUgPT09IFN0cmluZztcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHJldHVybiBUeXBlID09PSBOdW1iZXI7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdib29sZWFuJykgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KSByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBpcztcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZGlmZihvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0dmFyIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkVmFsdWUsIG5ld1ZhbHVlKTtcblxuXHRpZiAoY29tcGFyaXNvblZhbHVlID09PSAwKSB7XG5cdFx0bmV3VmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHByZXZpb3VzOiBvbGRWYWx1ZSxcblx0XHR2YWx1ZTogbmV3VmFsdWVcblx0fTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGlmZjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBeFpERTVPR0ZsT1dObVptRTJZekJtWVdRNFlTSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWpiMjF3WVhKbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlqYjIxd1lYSmxMM04wY21sdVowTnZiWEJoY21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMk52YlhCaGNtVXZiblZ0WW1WeVEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWtZWFJsUTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5aGNuSmhlVU52YlhCaGNtVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJsekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlrYVdabUxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJYQmhjbVVpTENKdmJHUlBZbW9pTENKdVpYZFBZbW9pTENKdmJHUlBZbXBVZVhCbElpd2libVYzVDJKcVZIbHdaU0lzSWs1MWJXSmxjaUlzSWtSaGRHVWlMQ0pCY25KaGVTSXNJazlpYW1WamRDSXNJbk4wY21sdVowTnZiWEJoY21VaUxDSnZiR1JXWVd4MVpTSXNJbTVsZDFaaGJIVmxJaXdpYVhORFlYTmxVMlZ1YzJsMGFYWmxJaXdpVTNSeWFXNW5JaXdpZEc5TWIyTmhiR1ZNYjNkbGNrTmhjMlVpTENKeVpYTjFiSFFpTENKc2IyTmhiR1ZEYjIxd1lYSmxJaXdpYm5WdFltVnlRMjl0Y0dGeVpTSXNJbWx6VG1GT0lpd2laR0YwWlVOdmJYQmhjbVVpTENKdmJHUlVhVzFsSWl3aVoyVjBWR2x0WlNJc0ltNWxkMVJwYldVaUxDSmhjbkpoZVVOdmJYQmhjbVVpTENKamIyMXdZWEpwYzI5dVZtRnNkV1VpTENKdmJHUlBZbXBNWlc1bmRHZ2lMQ0pzWlc1bmRHZ2lMQ0p1WlhkUFltcE1aVzVuZEdnaUxDSnBJaXdpYjJKcVpXTjBRMjl0Y0dGeVpTSXNJbkJ5YjNBaUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0ltUmxabUYxYkhRaUxDSnBjeUlzSW05aWFpSXNJbFI1Y0dVaUxDSkNiMjlzWldGdUlpd2lhWE5CY25KaGVTSXNJbVJwWm1ZaUxDSjFibVJsWm1sdVpXUWlMQ0p3Y21WMmFXOTFjeUlzSW5aaGJIVmxJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN08wRkROMFJCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3TzBGQlJVRXNVMEZCVTBFc1QwRkJWQ3hEUVVGcFFrTXNUVUZCYWtJc1JVRkJlVUpETEUxQlFYcENMRVZCUTBFN1FVRkRTU3hSUVVGSlJDeFhRVUZYUXl4TlFVRm1MRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVUXNWVUZCVlN4SlFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNWVUZCVlN4SlFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3TzBGQlJVb3NVVUZCVDBNc2IwSkJRVzlDUml4TlFVRndRaXg1UTBGQmIwSkJMRTFCUVhCQ0xFTkJRVkE3UVVGRFFTeFJRVUZQUnl4dlFrRkJiMEpHTEUxQlFYQkNMSGxEUVVGdlFrRXNUVUZCY0VJc1EwRkJVRHM3UVVGRlFTeFJRVUZKUXl4bFFVRmxReXhWUVVGdVFpeEZRVU5KTEU5QlFVOHNOa0pCUVdORUxGVkJRV1FzUlVGQk1FSkRMRlZCUVRGQ0xFTkJRVkE3TzBGQlJVb3NVVUZCU1VRc1pVRkJaU3hUUVVGdVFpeEZRVU5KTEU5QlFVOHNOa0pCUVdORkxFOUJRVTlLTEUxQlFWQXNRMEZCWkN4RlFVRTRRa2tzVDBGQlQwZ3NUVUZCVUN4RFFVRTVRaXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNaVUZCWlN4UlFVRnVRaXhGUVVOSkxFOUJRVThzTmtKQlFXTkdMRTFCUVdRc1JVRkJjMEpETEUxQlFYUkNMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eGxRVUZsTEZGQlFXNUNMRVZCUTBrc1QwRkJUeXcyUWtGQlkwWXNUVUZCWkN4RlFVRnpRa01zVFVGQmRFSXNRMEZCVURzN1FVRkZTaXhSUVVGSlF5eGxRVUZsTEZGQlFXNUNMRVZCUTBrc1QwRkJUeXhEUVVGUU96dEJRVVZLTEZGQlFVa3NhMEpCUVVkR0xFMUJRVWdzUlVGQlYwc3NTVUZCV0N4RFFVRktMRVZCUTBrc1QwRkJUeXd5UWtGQldVd3NUVUZCV2l4RlFVRnZRa01zVFVGQmNFSXNRMEZCVUR0QlFVTktMRkZCUVVrc2EwSkJRVWRFTEUxQlFVZ3NSVUZCVjAwc1MwRkJXQ3hEUVVGS0xFVkJRMGtzVDBGQlR5dzBRa0ZCWVU0c1RVRkJZaXhGUVVGeFFrTXNUVUZCY2tJc1JVRkJORUpHTEU5QlFUVkNMRU5CUVZBN1FVRkRTaXhSUVVGSkxHdENRVUZIUXl4TlFVRklMRVZCUVZkUExFMUJRVmdzUTBGQlNpeEZRVU5KTEU5QlFVOHNOa0pCUVdOUUxFMUJRV1FzUlVGQmMwSkRMRTFCUVhSQ0xFVkJRVGhDUml4UFFVRTVRaXhEUVVGUU96dEJRVVZLTEZkQlFVOHNRMEZCVUR0QlFVTklPenRyUWtGRlkwRXNUenM3T3pzN096czdPenM3TzBGRE1VTm1PMEZCUTBFc1UwRkJVMU1zWVVGQlZDeERRVUYxUWtNc1VVRkJka0lzUlVGQmFVTkRMRkZCUVdwRExFVkJRVEpEUXl4bFFVRXpReXhGUVVFMFJEdEJRVU40UkVFc2MwSkJRV3RDTEU5QlFVOUJMR1ZCUVZBc1MwRkJNa0lzVjBGQk0wSXNSMEZCZVVOQkxHVkJRWHBETEVkQlFUSkVMRXRCUVRkRk96dEJRVVZCTEZGQlFVbEdMRmxCUVZrc1NVRkJXaXhKUVVGdlFrTXNXVUZCV1N4SlFVRndReXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEVMRmxCUVZrc1NVRkJhRUlzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhaUVVGWkxFbEJRV2hDTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlNVTXNaVUZCU2l4RlFVRnhRanRCUVVOcVFrWXNiVUpCUVZkSExFOUJRVTlJTEZGQlFWQXNSVUZCYVVKSkxHbENRVUZxUWl4RlFVRllPMEZCUTBGSUxHMUNRVUZYUlN4UFFVRlBSaXhSUVVGUUxFVkJRV2xDUnl4cFFrRkJha0lzUlVGQldEdEJRVU5JT3p0QlFVVkVMRkZCUVVsRExGTkJRVk5HTEU5QlFVOUlMRkZCUVZBc1JVRkJhVUpOTEdGQlFXcENMRU5CUVN0Q1RDeFJRVUV2UWl4RFFVRmlPMEZCUTBFc1VVRkJTVWtzVTBGQlV5eERRVUZETEVOQlFXUXNSVUZEU1VFc1UwRkJVeXhEUVVGRExFTkJRVllzUTBGRVNpeExRVVZMTEVsQlFVbEJMRk5CUVZNc1EwRkJZaXhGUVVORVFTeFRRVUZUTEVOQlFWUTdPMEZCUlVvc1YwRkJUMEVzVFVGQlVEdEJRVU5JT3p0clFrRkZZMDRzWVRzN096czdPenM3T3pzN096dEJRM2hDWml4VFFVRlRVU3hoUVVGVUxFTkJRWFZDVUN4UlFVRjJRaXhGUVVGcFEwTXNVVUZCYWtNc1JVRkJNa003TzBGQlJYWkRMRkZCUVVsUExFMUJRVTFTTEZGQlFVNHNTMEZCYlVKUkxFMUJRVTFRTEZGQlFVNHNRMEZCZGtJc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKVHl4TlFVRk5VaXhSUVVGT0xFTkJRVW9zUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpVU3hOUVVGTlVDeFJRVUZPTEVOQlFVb3NSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGRlNpeFJRVUZKUkN4WFFVRlhReXhSUVVGbUxFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdRVUZEU2l4UlFVRkpSQ3hYUVVGWFF5eFJRVUZtTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzJ0Q1FVVmpUU3hoT3pzN096czdPenM3T3pzN08wRkRhRUptTEZOQlFWTkZMRmRCUVZRc1EwRkJjVUpVTEZGQlFYSkNMRVZCUVN0Q1F5eFJRVUV2UWl4RlFVRjVRenM3UVVGRmNrTXNVVUZCU1VRc1lVRkJZU3hKUVVGaUxFbEJRWEZDUXl4aFFVRmhMRWxCUVhSRExFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VRc1lVRkJZU3hKUVVGcVFpeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRExHRkJRV0VzU1VGQmFrSXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGRlNpeFJRVUZMVXl4VlFVRlZWaXhUUVVGVFZ5eFBRVUZVTEVWQlFXWTdRVUZEUVN4UlFVRkxReXhWUVVGVldDeFRRVUZUVlN4UFFVRlVMRVZCUVdZN1FVRkRRU3hSUVVGSlJDeFZRVUZWUlN4UFFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3UVVGRFNpeFJRVUZKUml4VlFVRlZSU3hQUVVGa0xFVkJRMGtzVDBGQlR5eERRVUZRT3p0QlFVVktMRkZCUVVsS0xFMUJRVTFGTEU5QlFVNHNTMEZCYTBKR0xFMUJRVTFKTEU5QlFVNHNRMEZCZEVJc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKU2l4TlFVRk5SU3hQUVVGT0xFTkJRVW9zUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpSaXhOUVVGTlNTeFBRVUZPTEVOQlFVb3NSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGRlNpeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05JTEZjN096czdPenM3T3pzN096czdRVU16UW1ZN096czdPenRCUVVWQkxGTkJRVk5KTEZsQlFWUXNRMEZCYzBKMFFpeE5RVUYwUWl4RlFVRTRRa01zVFVGQk9VSXNSVUZEUVR0QlFVTkpMRkZCUVVsRUxGZEJRVmRETEUxQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlJDeFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGRlNpeFJRVUZKYzBJc2QwSkJRVW83UVVGRFFTeFJRVUZMUXl4bFFVRmxlRUlzVDBGQlQzbENMRTFCUVROQ08wRkJRMEVzVVVGQlMwTXNaVUZCWlhwQ0xFOUJRVTkzUWl4TlFVRXpRanRCUVVOQkxGRkJRVWxFTEdWQlFXVkZMRmxCUVc1Q0xFVkJRMGtzVDBGQlR5eERRVUZETEVOQlFWSTdRVUZEU2l4UlFVRkpSaXhsUVVGbFJTeFpRVUZ1UWl4RlFVTkpMRTlCUVU4c1EwRkJVRHM3UVVGRlNpeFRRVUZMTEVsQlFVdERMRWxCUVVrc1EwRkJaQ3hGUVVGcFFrRXNTVUZCU1Vnc1dVRkJja0lzUlVGQmJVTkhMRWRCUVc1RExFVkJRWGRETzBGQlEzQkRPMEZCUTBGS0xEQkNRVUZyUWl4MVFrRkJVWFpDTEU5QlFVOHlRaXhEUVVGUUxFTkJRVklzUlVGQmJVSXhRaXhQUVVGUE1FSXNRMEZCVUN4RFFVRnVRaXhEUVVGc1FqdEJRVU5CTEZsQlFVbEtMRzFDUVVGdFFpeERRVUYyUWl4RlFVTkpMRTlCUVU5QkxHVkJRVkE3UVVGRFVEdEJRVU5FTEZkQlFVOHNRMEZCVUR0QlFVTklPenRyUWtGRlkwUXNXVHM3T3pzN096czdPenM3T3p0QlF6VkNaanM3T3pzN08wRkJSVUVzVTBGQlUwMHNZVUZCVkN4RFFVRjFRalZDTEUxQlFYWkNMRVZCUVN0Q1F5eE5RVUV2UWl4RlFVTkJPMEZCUTBrc1VVRkJTVVFzVjBGQlYwTXNUVUZCWml4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxFTEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxETEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVWRLTEZGQlFVazBRaXhoUVVGS08wRkJRMEVzVTBGQlMwRXNTVUZCVEN4SlFVRmhOMElzVFVGQllpeEZRVU5CTzBGQlEwa3NXVUZCU1N4RFFVRkRReXhQUVVGUE5rSXNZMEZCVUN4RFFVRnpRa1FzU1VGQmRFSXNRMEZCVEN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU08wRkJRMUE3TzBGQlJVUXNVVUZCU1U0c2QwSkJRVW83UVVGRFFTeFRRVUZMVFN4SlFVRk1MRWxCUVdFMVFpeE5RVUZpTEVWQlEwRTdRVUZEU1N4WlFVRkpMRU5CUVVORUxFOUJRVTg0UWl4alFVRlFMRU5CUVhOQ1JDeEpRVUYwUWl4RFFVRk1MRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG83UVVGRFFVNHNNRUpCUVd0Q0xIVkNRVUZSZGtJc1QwRkJUelpDTEVsQlFWQXNRMEZCVWl4RlFVRnpRalZDTEU5QlFVODBRaXhKUVVGUUxFTkJRWFJDTEVOQlFXeENPMEZCUTBFc1dVRkJTVTRzYjBKQlFXOUNMRU5CUVhoQ0xFVkJRMGtzVDBGQlQwRXNaVUZCVUR0QlFVTlFPMEZCUTBRc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzJ0Q1FVVmpTeXhoT3pzN096czdPenM3T3pzN096dEJRMmhEWmpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3TzFGQlIxbEhMRTg3VVVGRFVtaERMRTg3VVVGRFFWTXNZVHRSUVVOQlVTeGhPMUZCUTBGRkxGYzdVVUZEUVVrc1dUdFJRVU5CVFN4aE96czdPenM3T3pzN096czdRVU5tU2l4VFFVRlRTU3hGUVVGVUxFTkJRVmxETEVkQlFWb3NSVUZCYVVKRExFbEJRV3BDTEVWQlFYVkNPMEZCUTI1Q0xGRkJRVWxFTEU5QlFVOHNTVUZCVUN4SlFVRmxRU3hQUVVGUExFbEJRVEZDTEVWQlEwa3NUMEZCVHl4TFFVRlFPMEZCUTBvc1VVRkJTVUVzWlVGQlpVTXNTVUZCYmtJc1JVRkRTU3hQUVVGUExFbEJRVkE3UVVGRFNpeFJRVUZKUVN4VFFVRlRNMElzVFVGQllpeEZRVU5KTEU5QlFVOHNTVUZCVURzN1FVRkZTaXhSUVVGSkxFOUJRVTh3UWl4SFFVRlFMRXRCUVdkQ0xGRkJRWEJDTEVWQlEwa3NUMEZCVDBNc1UwRkJVM1JDTEUxQlFXaENPMEZCUTBvc1VVRkJTU3hQUVVGUGNVSXNSMEZCVUN4TFFVRm5RaXhSUVVGd1FpeEZRVU5KTEU5QlFVOURMRk5CUVZNNVFpeE5RVUZvUWp0QlFVTktMRkZCUVVrc1QwRkJUelpDTEVkQlFWQXNTMEZCWjBJc1UwRkJjRUlzUlVGRFNTeFBRVUZQUXl4VFFVRlRReXhQUVVGb1FqdEJRVU5LTEZGQlFVbEVMRk5CUVZNMVFpeExRVUZpTEVWQlEwa3NUMEZCVDBFc1RVRkJUVGhDTEU5QlFVNHNRMEZCWTBnc1IwRkJaQ3hEUVVGUU96dEJRVVZLTEZkQlFVOHNTMEZCVUR0QlFVTklPenRyUWtGRlkwUXNSVHM3T3pzN096czdPenM3T3p0QlEzQkNaanM3T3pzN08wRkJSVUVzVTBGQlUwc3NTVUZCVkN4RFFVRmpOVUlzVVVGQlpDeEZRVUYzUWtNc1VVRkJlRUlzUlVGQmFVTTdRVUZEYUVNc1MwRkJUV0VzYTBKQlFXMUNMSFZDUVVGUlpDeFJRVUZTTEVWQlFXdENReXhSUVVGc1FpeERRVUY2UWpzN1FVRkZRU3hMUVVGSFlTeHZRa0ZCYjBJc1EwRkJka0lzUlVGQmVVSTdRVUZEZUVKaUxHRkJRVmMwUWl4VFFVRllPMEZCUTBFN08wRkJSVVVzVVVGQlR6dEJRVU5VUXl4WlFVRlZPVUlzVVVGRVJEdEJRVVZVSzBJc1UwRkJUemxDTzBGQlJrVXNSVUZCVUR0QlFVbElPenRyUWtGRll6SkNMRWtpTENKbWFXeGxJam9pYkdsaUwyUnBabVl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGNJbVJwWm1aY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVpHbG1abHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0prYVdabVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEWXBPMXh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lERmtNVGs0WVdVNVkyWm1ZVFpqTUdaaFpEaGhJaXdpYVcxd2IzSjBJSE4wY21sdVowTnZiWEJoY21VZ1puSnZiU0FuTGk5emRISnBibWREYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzUxYldKbGNrTnZiWEJoY21VZ1puSnZiU0FuTGk5dWRXMWlaWEpEYjIxd1lYSmxKMXh1YVcxd2IzSjBJR1JoZEdWRGIyMXdZWEpsSUdaeWIyMGdKeTR2WkdGMFpVTnZiWEJoY21VblhHNXBiWEJ2Y25RZ1lYSnlZWGxEYjIxd1lYSmxJR1p5YjIwZ0p5NHZZWEp5WVhsRGIyMXdZWEpsSjF4dWFXMXdiM0owSUc5aWFtVmpkRU52YlhCaGNtVWdabkp2YlNBbkxpOXZZbXBsWTNSRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdseklHWnliMjBnSnk0dkxpNHZhWE1uWEc1Y2JtWjFibU4wYVc5dUlHTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9wWEc1N1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWlBOVBUMGdibVYzVDJKcUtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUdsbUlDaHVaWGRQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzRnSUNBZ1kyOXVjM1FnSUc5c1pFOWlhbFI1Y0dVZ1BTQjBlWEJsYjJZb2IyeGtUMkpxS1R0Y2JpQWdJQ0JqYjI1emRDQWdibVYzVDJKcVZIbHdaU0E5SUhSNWNHVnZaaWh1WlhkUFltb3BPMXh1WEc0Z0lDQWdhV1lnS0c5c1pFOWlhbFI1Y0dVZ0lUMDlJRzVsZDA5aWFsUjVjR1VwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRTlpYWxSNWNHVXNJRzVsZDA5aWFsUjVjR1VwTzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdQVDA5SUNkaWIyOXNaV0Z1SnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJXSmxja052YlhCaGNtVW9UblZ0WW1WeUtHOXNaRTlpYWlrc0lFNTFiV0psY2lodVpYZFBZbW9wS1R0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxVkhsd1pTQTlQVDBnSjI1MWJXSmxjaWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFcxaVpYSkRiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxS1R0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxVkhsd1pTQTlQVDBnSjNOMGNtbHVaeWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxS1R0Y2JseHVJQ0FnSUdsbUlDaHZiR1JQWW1wVWVYQmxJQ0U5UFNBbmIySnFaV04wSnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNWNiaUFnSUNCcFppQW9hWE1vYjJ4a1QySnFMQ0JFWVhSbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUmhkR1ZEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNiaUFnSUNCcFppQW9hWE1vYjJ4a1QySnFMQ0JCY25KaGVTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhjbkpoZVVOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3NZMjl0Y0dGeVpTazdYRzRnSUNBZ2FXWWdLR2x6S0c5c1pFOWlhaXdnVDJKcVpXTjBLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzlpYW1WamRFTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9zSUdOdmJYQmhjbVVwTzF4dVhHNGdJQ0FnY21WMGRYSnVJREE3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiMjF3WVhKbE8xeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOWpiMjF3WVhKbEwyTnZiWEJoY21VdWFuTWlMQ0l2TDJoMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwyVnVMVlZUTDJSdlkzTXZWMlZpTDBwaGRtRlRZM0pwY0hRdlVtVm1aWEpsYm1ObEwwZHNiMkpoYkY5UFltcGxZM1J6TDFOMGNtbHVaeTlzYjJOaGJHVkRiMjF3WVhKbFhHNW1kVzVqZEdsdmJpQnpkSEpwYm1kRGIyMXdZWEpsS0c5c1pGWmhiSFZsTENCdVpYZFdZV3gxWlN3Z2FYTkRZWE5sVTJWdWMybDBhWFpsS1NCN1hHNGdJQ0FnYVhORFlYTmxVMlZ1YzJsMGFYWmxJRDBnZEhsd1pXOW1JR2x6UTJGelpWTmxibk5wZEdsMlpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QnBjME5oYzJWVFpXNXphWFJwZG1VZ09pQm1ZV3h6WlR0Y2JseHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQTlQU0J1ZFd4c0lDWW1JRzVsZDFaaGJIVmxJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1ZtRnNkV1VnUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnYVdZZ0tHbHpRMkZ6WlZObGJuTnBkR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQnZiR1JXWVd4MVpTQTlJRk4wY21sdVp5aHZiR1JXWVd4MVpTa3VkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVW9LVHRjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCVGRISnBibWNvYm1WM1ZtRnNkV1VwTG5SdlRHOWpZV3hsVEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElISmxjM1ZzZENBOUlGTjBjbWx1WnlodmJHUldZV3gxWlNrdWJHOWpZV3hsUTI5dGNHRnlaU2h1WlhkV1lXeDFaU2s3WEc0Z0lDQWdhV1lnS0hKbGMzVnNkQ0E4SUMweEtWeHVJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQXRNVHRjYmlBZ0lDQmxiSE5sSUdsbUlDaHlaWE4xYkhRZ1BpQXhLVnh1SUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0F4TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYzNSeWFXNW5RMjl0Y0dGeVpUdGNibHh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2YzNSeWFXNW5RMjl0Y0dGeVpTNXFjeUlzSWx4dVpuVnVZM1JwYjI0Z2JuVnRZbVZ5UTI5dGNHRnlaU2h2YkdSV1lXeDFaU3dnYm1WM1ZtRnNkV1VwSUh0Y2JseHVJQ0FnSUdsbUlDaHBjMDVoVGlodmJHUldZV3gxWlNrZ0ppWWdhWE5PWVU0b2JtVjNWbUZzZFdVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNCcFppQW9hWE5PWVU0b2IyeGtWbUZzZFdVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9hWE5PWVU0b2JtVjNWbUZzZFdVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUENCdVpYZFdZV3gxWlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQStJRzVsZDFaaGJIVmxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnlaWFIxY200Z01EdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYm5WdFltVnlRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOXVkVzFpWlhKRGIyMXdZWEpsTG1weklpd2lYRzVtZFc1amRHbHZiaUJrWVhSbFEyOXRjR0Z5WlNodmJHUldZV3gxWlN3Z2JtVjNWbUZzZFdVcElIdGNibHh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFQwZ2JuVnNiQ0FtSmlCdVpYZFdZV3gxWlNBOVBUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURBN1hHNGdJQ0FnYVdZZ0tHOXNaRlpoYkhWbElEMDlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9ibVYzVm1Gc2RXVWdQVDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJSFpoY2lBZ2IyeGtWR2x0WlNBOUlHOXNaRlpoYkhWbExtZGxkRlJwYldVb0tUdGNiaUFnSUNCMllYSWdJRzVsZDFScGJXVWdQU0J1WlhkV1lXeDFaUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdhV1lnS0c5c1pGUnBiV1VnUENCdVpYZFVhVzFsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnYVdZZ0tHOXNaRlJwYldVZ1BpQnVaWGRVYVcxbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNibHh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHZiR1JVYVcxbEtTQW1KaUJwYzA1aFRpaHVaWGRVYVcxbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLR2x6VG1GT0tHOXNaRlJwYldVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9hWE5PWVU0b2JtVjNWR2x0WlNrcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNibHh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JrWVhSbFEyOXRjR0Z5WlR0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlkyOXRjR0Z5WlM5a1lYUmxRMjl0Y0dGeVpTNXFjeUlzSW1sdGNHOXlkQ0JqYjIxd1lYSmxJR1p5YjIwZ0p5NHZZMjl0Y0dGeVpTYzdYRzVjYm1aMWJtTjBhVzl1SUdGeWNtRjVRMjl0Y0dGeVpTaHZiR1JQWW1vc0lHNWxkMDlpYWlsY2JudGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlQU0J1WlhkUFltb3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2FXWWdLRzVsZDA5aWFpQTlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzVjYmlBZ0lDQnNaWFFnWTI5dGNHRnlhWE52YmxaaGJIVmxPMXh1SUNBZ0lIWmhjaUFnYjJ4a1QySnFUR1Z1WjNSb0lEMGdiMnhrVDJKcUxteGxibWQwYUR0Y2JpQWdJQ0IyWVhJZ0lHNWxkMDlpYWt4bGJtZDBhQ0E5SUc1bGQwOWlhaTVzWlc1bmRHZzdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFreGxibWQwYUNBOElHNWxkMDlpYWt4bGJtZDBhQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dUlDQWdJR2xtSUNodmJHUlBZbXBNWlc1bmRHZ2dQaUJ1WlhkUFltcE1aVzVuZEdncFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVYRzRnSUNBZ1ptOXlJQ2gyWVhJZ0lHa2dQU0F3T3lCcElEd2diMnhrVDJKcVRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnTHk5eVpXTjFjbk5wZG1VZ1kyOXRjR0Z5YVhOdmJpQnZaaUJoY25KaGVTQmxiR1Z0Wlc1MGMxeHVJQ0FnSUNBZ0lDQmpiMjF3WVhKcGMyOXVWbUZzZFdVZ1BTQmpiMjF3WVhKbEtHOXNaRTlpYWx0cFhTd2dibVYzVDJKcVcybGRLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZiWEJoY21semIyNVdZV3gxWlNBaFBTQXdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJYQmhjbWx6YjI1V1lXeDFaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SURBN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JoY25KaGVVTnZiWEJoY21VN1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwyTnZiWEJoY21VdllYSnlZWGxEYjIxd1lYSmxMbXB6SWl3aWFXMXdiM0owSUdOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxKenRjYmx4dVpuVnVZM1JwYjI0Z2IySnFaV04wUTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpbGNibnRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5UFNCdVpYZFBZbW9wWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUlBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQwOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JseHVJQ0FnSUd4bGRDQndjbTl3TzF4dUlDQWdJR1p2Y2lBb2NISnZjQ0JwYmlCdmJHUlBZbW9wWEc0Z0lDQWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMDlpYWk1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d0tTbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsTzF4dUlDQWdJR1p2Y2lBb2NISnZjQ0JwYmlCdVpYZFBZbW9wWEc0Z0lDQWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXOXNaRTlpYWk1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d0tTbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJQ0FnSUNBdkwzSmxZM1Z5YzJsMlpTQmpiMjF3WVhKcGMyOXVJRzltSUc5aWFtVmpkQ0J3Y205d1pYSjBlVnh1SUNBZ0lDQWdJQ0JqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdQU0JqYjIxd1lYSmxLRzlzWkU5aWFsdHdjbTl3WFN3Z2JtVjNUMkpxVzNCeWIzQmRLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZiWEJoY21semIyNVdZV3gxWlNBaFBUMGdNQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyMXdZWEpwYzI5dVZtRnNkV1U3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYjJKcVpXTjBRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOXZZbXBsWTNSRGIyMXdZWEpsTG1weklpd2lhVzF3YjNKMElITjBjbWx1WjBOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMM04wY21sdVowTnZiWEJoY21VblhHNXBiWEJ2Y25RZ2JuVnRZbVZ5UTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZiblZ0WW1WeVEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCa1lYUmxRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdlpHRjBaVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZWEp5WVhsRGIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaUzloY25KaGVVTnZiWEJoY21VblhHNXBiWEJ2Y25RZ2IySnFaV04wUTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCamIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaUzlqYjIxd1lYSmxKMXh1YVcxd2IzSjBJR1JwWm1ZZ1puSnZiU0FuTGk5a2FXWm1KMXh1WEc1bGVIQnZjblFnZTF4dUlDQWdJR1JwWm1ZZ1lYTWdaR1ZtWVhWc2RDeGNiaUFnSUNCamIyMXdZWEpsTEZ4dUlDQWdJSE4wY21sdVowTnZiWEJoY21Vc1hHNGdJQ0FnYm5WdFltVnlRMjl0Y0dGeVpTeGNiaUFnSUNCa1lYUmxRMjl0Y0dGeVpTeGNiaUFnSUNCaGNuSmhlVU52YlhCaGNtVXNYRzRnSUNBZ2IySnFaV04wUTI5dGNHRnlaVnh1ZlZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5cGJtUmxlQzVxY3lJc0ltWjFibU4wYVc5dUlHbHpLRzlpYWl3Z1ZIbHdaU2tnZTF4dUlDQWdJR2xtSUNodlltb2dQVDBnYm5Wc2JDQjhmQ0J2WW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lHbG1JQ2h2WW1vZ2FXNXpkR0Z1WTJWdlppQlVlWEJsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCcFppQW9WSGx3WlNBOVBUMGdUMkpxWldOMEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllvYjJKcUtTQTlQVDBnSjNOMGNtbHVaeWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJVZVhCbElEMDlQU0JUZEhKcGJtYzdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppaHZZbW9wSUQwOVBTQW5iblZ0WW1WeUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGUjVjR1VnUFQwOUlFNTFiV0psY2p0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltS0c5aWFpa2dQVDA5SUNkaWIyOXNaV0Z1SnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZSNWNHVWdQVDA5SUVKdmIyeGxZVzQ3WEc0Z0lDQWdhV1lnS0ZSNWNHVWdQVDA5SUVGeWNtRjVLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdRWEp5WVhrdWFYTkJjbkpoZVNodlltb3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnBjenRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVhNdWFuTWlMQ0pwYlhCdmNuUWdZMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdlkyOXRjR0Z5WlNjN1hHNWNibVoxYm1OMGFXOXVJR1JwWm1Zb2IyeGtWbUZzZFdVc0lHNWxkMVpoYkhWbEtYdGNibHgwWTI5dWMzUWdZMjl0Y0dGeWFYTnZibFpoYkhWbElEMGdJR052YlhCaGNtVW9iMnhrVm1Gc2RXVXNJRzVsZDFaaGJIVmxLVHRjYmx4dVhIUnBaaWhqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdQVDA5SURBcGUxeHVYSFJjZEc1bGQxWmhiSFZsSUQwZ2RXNWtaV1pwYm1Wa08xeHVYSFI5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1WEhSY2RIQnlaWFpwYjNWek9pQnZiR1JXWVd4MVpTeGNibHgwWEhSMllXeDFaVG9nYm1WM1ZtRnNkV1ZjYmx4MGZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWkdsbVpqdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZaR2xtWmk1cWN5SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IERpZmZMb2dnZXIgZnJvbSAnLi9EaWZmTG9nZ2VyJztcblxuZXhwb3J0IHtcblx0TG9nZ2VyIGFzIGRlZmF1bHQsXG5cdERpZmZMb2dnZXJcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBkaWZmIGZyb20gJ2RpZmYnO1xuaW1wb3J0IExvZ0VudHJ5IGZyb20gJy4vTG9nRW50cnknO1xuXG5mdW5jdGlvbiBhcHBseURpZmYoc3RlcHMsIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHtjb250ZXh0LCB1bmRvTG9nLCByZWRvTG9nLCBnZXR0ZXIsIHNldHRlcn0gPSB0aGlzO1xuXHRsZXQgeyBwcmV2U3RhdGUgfSA9IHRoaXM7XG5cdGNvbnN0IGFic1N0ZXBzID0gTWF0aC5hYnMoc3RlcHMpO1xuXHRsZXQgc3RlcHNSZW1haW5pbmcgPSBNYXRoLm1pbihhYnNTdGVwcywgc3RlcHMgPCAwID8gdW5kb0xvZy5sZW5ndGggOiByZWRvTG9nLmxlbmd0aCk7XG5cdGlmIChzdGVwc1JlbWFpbmluZyA+IDApIHtcblx0XHRsZXQgbG9nRW50cnksIGRpZmY7XG5cdFx0d2hpbGUgKHN0ZXBzUmVtYWluaW5nLS0gPiAwKSB7XG5cdFx0XHRpZiAoc3RlcHMgPCAwKSB7IC8vIHVuZG9cblx0XHRcdFx0bG9nRW50cnkgPSB1bmRvTG9nLnBvcCgpO1xuXHRcdFx0XHRyZWRvTG9nLnVuc2hpZnQobG9nRW50cnkpO1xuXHRcdFx0XHRkaWZmID0gbG9nRW50cnkucHJldjtcblx0XHRcdH0gZWxzZSB7IC8vcmVkb1xuXHRcdFx0XHRsb2dFbnRyeSA9IHJlZG9Mb2cuc2hpZnQoKTtcblx0XHRcdFx0dW5kb0xvZy5wdXNoKGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5Lm5leHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdGVwc1JlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnByZXZTdGF0ZSA9IGRpZmYudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHNpbmNlIHByaW1pdGl2ZSBhcmUgaW1tdXRhYmxlIHdlIGRvbid0IGNhbGwgdGhlbSBpbiBzcHJlYWQgZGVjbGFyYXRpb24gYWJvdmVcblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gdHJ1ZTtcblx0XHQvLyBub3cgYWZ0ZXIgcmVhY2hpbmcgdGhlIExvZyBlbnRyeSBhcHBseSB0aGUgZGlmZiB0byBjdXJyZW50IHN0YXRlXG5cdFx0c2V0dGVyLmNhbGwoY29udGV4dCwgZGlmZiwgY2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHNpbmNlIHByaW1pdGl2ZSBhcmUgaW1tdXRhYmxlIHdlIGRvbid0IGNhbGwgdGhlbSBpbiBzcHJlYWQgZGVjbGFyYXRpb24gYWJvdmVcblx0XHR0aGlzLmRpZmZBcHBsaWVkID0gZmFsc2U7XG5cdH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblx0Y29uc3RydWN0b3Ioc2F2ZUNhbGxiYWNrKXtcblx0XHR0aGlzLmNvbnRleHQ7XG5cdFx0dGhpcy5nZXR0ZXI7XG5cdFx0dGhpcy5zZXR0ZXI7XG5cdFx0dGhpcy5kaWZmTWV0aG9kO1xuXG5cdFx0dGhpcy51bmRvTG9nID0gW107XG5cdFx0dGhpcy5yZWRvTG9nID0gW107XG5cblx0XHR0aGlzLnByZXZTdGF0ZSA9IG51bGw7XG5cdFx0dGhpcy5uZXh0SWQgPSAwO1xuXG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrO1xuXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHRcdHRoaXMuZW5hYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5Mb2dnZXIucHJvdG90eXBlLnNldENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBnZXR0ZXIsIHNldHRlciwgZGlmZk1ldGhvZCl7XG5cdGlmKCFnZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBnZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZighc2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgc2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMuZ2V0dGVyID0gZ2V0dGVyO1xuXHR0aGlzLnNldHRlciA9IHNldHRlcjtcblx0dGhpcy5kaWZmTWV0aG9kID0gZGlmZk1ldGhvZDtcblx0dGhpcy5wcmV2U3RhdGUgPSBnZXR0ZXIuY2FsbChjb250ZXh0KTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2V0U2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oc2F2ZUNhbGxiYWNrKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrXG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnJlbW92ZVNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2spe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdGFwcGx5RGlmZi5jYWxsKHRoaXMsIC1zdGVwcywgY2FsbGJhY2spO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZWRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCBzdGVwcywgY2FsbGJhY2spO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5kaWZmQXBwbGllZCl7XG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKHRoaXMuZW5hYmxlKXtcblx0XHRsZXQgbG9nO1xuXHRcdGxldCBnZXREaWZmID0gdGhpcy5kaWZmTWV0aG9kID8gdGhpcy5kaWZmTWV0aG9kIDogZGlmZjtcblx0XHRpZih0aGlzLmNvbnRleHQpe1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMuY29udGV4dCk7XG5cdFx0XHRjb25zdCBkaWZmT2JqZWN0ID0gZ2V0RGlmZih0aGlzLnByZXZTdGF0ZSwgc3RhdGUpO1xuXHRcdFx0Ly8gQ2hhbmdlIG9jY3VycmVkIGxvZyB0aGVtXG5cdFx0XHRpZiAoZGlmZk9iamVjdC5jdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bG9nID0gbmV3IExvZ0VudHJ5KHRoaXMubmV4dElkKyssIGRpZmZPYmplY3QuY3VycmVudCwgZGlmZk9iamVjdC5wcmV2KTtcblx0XHRcdFx0aWYodGhpcy5yZWRvTG9nLmxlbmd0aCAhPT0gMCl7XG5cdFx0XHRcdFx0Y29uc3QgbmV4dExvZyA9IHRoaXMucmVkb0xvZ1swXTtcblx0XHRcdFx0XHRuZXh0TG9nLnByZXYgPSBsb2cubmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnVuZG9Mb2cucHVzaChsb2cpO1xuXHRcdFx0XHR0aGlzLnByZXZTdGF0ZSA9IHN0YXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGxvZyk7XG5cdH1cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ2dlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ0VudHJ5IHtcblx0Y29uc3RydWN0b3IoaWQsIG5leHQsIHByZXYpe1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5leHQgPSBuZXh0O1xuXHRcdHRoaXMucHJldiA9IHByZXY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTG9nRW50cnkuanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBQaXZvdGVkTGlua2VkTGlzdCBmcm9tICdwaXZvdGVkLWxpbmtlZC1saXN0JztcblxuZnVuY3Rpb24gc2hpZnRBbmRBcHBseUxvZyhzdGVwcywgY2FsbGJhY2spIHtcblx0Y29uc3Qge2NvbnRleHQsIGxvZ0xpc3QsIHNldHRlciB9ID0gdGhpcztcblxuXHRjb25zdCBsb2dFbnRyeSA9IGxvZ0xpc3Quc2hpZnRQaXZvdChzdGVwcyk7XG5cdGNvbnN0IGRpZmZPYmplY3QgPSBsb2dFbnRyeS5lbGVtZW50O1xuXHRjb25zdCBkaWZmU3RhdGUgPSBkaWZmT2JqZWN0LnZhbHVlO1xuXG5cdHNldHRlci5jYWxsKGNvbnRleHQsIGRpZmZTdGF0ZSwgY2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkxvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKHNhdmVDYWxsYmFjayl7XG5cdFx0dGhpcy5jb250ZXh0O1xuXHRcdHRoaXMuc2V0dGVyO1xuXHRcdHRoaXMuZGlmZk1ldGhvZDtcblxuXHRcdHRoaXMubG9nTGlzdCA9IG5ldyBQaXZvdGVkTGlua2VkTGlzdChbXSk7XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrO1xuXHRcdHRoaXMuZW5hYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgc2V0dGVyLCBkaWZmTWV0aG9kKXtcblxuXG5cdGlmKCFzZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBzZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5zZXR0ZXIgPSBzZXR0ZXI7XG5cdHRoaXMuZGlmZk1ldGhvZCA9IGRpZmZNZXRob2Q7XG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5zZXRTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbihzYXZlQ2FsbGJhY2spe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2tcbn07XG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnJlbW92ZVNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRzaGlmdEFuZEFwcGx5TG9nLmNhbGwodGhpcywgLXN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5yZWRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRzaGlmdEFuZEFwcGx5TG9nLmNhbGwodGhpcywgc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGdldERpZmYgPSB0aGlzLmRpZmZNZXRob2QgPyB0aGlzLmRpZmZNZXRob2QgOiBkaWZmO1xuXHRcdGlmKHRoaXMuY29udGV4dCl7XG5cdFx0XHRjb25zdCBjdXJyZW50RGlmZiA9IHRoaXMuZ2V0Q3VycmVudExvZygpO1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSBjdXJyZW50RGlmZiA/IGN1cnJlbnREaWZmLnByZXZpb3VzIDogdW5kZWZpbmVkO1xuXHRcdFx0Y29uc3QgZGlmZiA9IGdldERpZmYoc3RhdGUpO1xuXG5cdFx0XHRpZiAoZGlmZi52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7IC8vIENoYW5nZSBvY2N1cnJlZCBsb2cgdGhlbVxuXHRcdFx0XHR0aGlzLmxvZ0xpc3QuaW5zZXJ0KGRpZmYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGRpZmYpO1xuXHR9XG59O1xuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLmdldEN1cnJlbnRMb2cgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmxvZ0xpc3QgKXtcblx0XHRyZXR1cm4gdGhpcy5sb2dMaXN0LmdldFBpdm90RWxlbWVudCgpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRGlmZkxvZ2dlci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlua2VkbGlzdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX05vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQaXZvdGVkTGlua2VkTGlzdCA9IGZ1bmN0aW9uIFBpdm90ZWRMaW5rZWRMaXN0KGFycmF5KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXZvdGVkTGlua2VkTGlzdCk7XG5cblx0dGhpcy5waXZvdCA9IG51bGw7XG5cdHRoaXMuaGVhZCA9IG51bGw7XG5cdHRoaXMudGFpbCA9IG51bGw7XG5cdHRoaXMubGVuZ3RoID0gMDtcblx0YXJyYXkgJiYgdGhpcy5jcmVhdGUoYXJyYXkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGl2b3RlZExpbmtlZExpc3Q7XG5cblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdHZhciBuZXdOb2RlID0gbmV3IF9Ob2RlMi5kZWZhdWx0KGVsZW1lbnQpO1xuXHR0aGlzLmxlbmd0aCsrO1xuXG5cdHZhciBjdXJyZW50ID0gdm9pZCAwLFxuXHQgICAgbmV4dCA9IHZvaWQgMDtcblxuXHRpZiAoIXRoaXMucGl2b3QpIHtcblx0XHQvLyBpbnNlcnRpbmcgYXMgZmlyc3QgZWxlbWVudFxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cdH0gZWxzZSBpZiAodGhpcy5waXZvdC5uZXh0KSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGluIG1pZGRsZVxuXG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0bmV4dCA9IHRoaXMucGl2b3QubmV4dDtcblxuXHRcdG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGFzIGxhc3QgZWxlbWVudFxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMudGFpbCA9IG5ld05vZGU7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90ID0gZnVuY3Rpb24gKHNoaWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gdGhpcy5waXZvdDtcblxuXHR2YXIgcmlnaHRTaGlmdCA9IHZvaWQgMDtcblx0aWYgKHNoaWZ0ID49IDApIHtcblx0XHRyaWdodFNoaWZ0ID0gdHJ1ZTtcblx0fVxuXG5cdHdoaWxlIChzaGlmdCAhPT0gMCkge1xuXHRcdGlmIChyaWdodFNoaWZ0KSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdFx0Y3VycmVudCA9PT0gdGhpcy50YWlsID8gc2hpZnQgPSAwIDogc2hpZnQtLTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucHJldjtcblx0XHRcdGN1cnJlbnQgPT09IHRoaXMuaGVhZCA/IHNoaWZ0ID0gMCA6IHNoaWZ0Kys7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5waXZvdCA9IGN1cnJlbnQ7XG5cblx0cmV0dXJuIHRoaXMucGl2b3Q7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvSGVhZCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9UYWlsID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gdGhpcy50YWlsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdGFycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdF90aGlzLmluc2VydChlbGVtZW50KTtcblx0fSk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHJpZ2h0VG9MZWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyB0aGlzLnRhaWwgOiB0aGlzLmhlYWQ7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0Y2FsbGJhY2soY3VycmVudC5lbGVtZW50KTtcblx0XHRjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyBjdXJyZW50LnByZXYgOiBjdXJyZW50Lm5leHQ7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGFycmF5LnB1c2goZWxlbWVudCk7XG5cdH0pO1xuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuZ2V0UGl2b3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5waXZvdCkge1xuXHRcdHJldHVybiB0aGlzLnBpdm90LmVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG5leHQgPSB0aGlzLnBpdm90Lm5leHQgPyB0aGlzLnBpdm90Lm5leHQgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gbmV4dDtcblx0cmV0dXJuIG5leHQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHByZXYgPSB0aGlzLnBpdm90LnByZXYgPyB0aGlzLnBpdm90LnByZXYgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gcHJldjtcblx0cmV0dXJuIHByZXY7XG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPSBmdW5jdGlvbiBOb2RlKGVsZW1lbnQpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EwWXpReE5UVmpOVFZrTVRka01ESTFPREE1T0NJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwwNXZaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lVR2wyYjNSbFpFeHBibXRsWkV4cGMzUWlMQ0poY25KaGVTSXNJbkJwZG05MElpd2lhR1ZoWkNJc0luUmhhV3dpTENKc1pXNW5kR2dpTENKamNtVmhkR1VpTENKd2NtOTBiM1I1Y0dVaUxDSnBibk5sY25RaUxDSmxiR1Z0Wlc1MElpd2libVYzVG05a1pTSXNJbU4xY25KbGJuUWlMQ0p1WlhoMElpd2ljSEpsZGlJc0luTm9hV1owVUdsMmIzUWlMQ0p6YUdsbWRDSXNJbkpwWjJoMFUyaHBablFpTENKemFHbG1kRkJwZG05MFZHOUlaV0ZrSWl3aWMyaHBablJRYVhadmRGUnZWR0ZwYkNJc0ltMWhjQ0lzSW5SeVlYWmxjbk5sSWl3aVkyRnNiR0poWTJzaUxDSnlhV2RvZEZSdlRHVm1kQ0lzSW5SdlFYSnlZWGtpTENKd2RYTm9JaXdpWjJWMFVHbDJiM1JGYkdWdFpXNTBJaXdpVG05a1pTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVNM1JFRTdPenM3T3pzN08wbEJRM0ZDUVN4cFFpeEhRVU53UWl3eVFrRkJXVU1zUzBGQldpeEZRVUZyUWp0QlFVRkJPenRCUVVOcVFpeE5RVUZMUXl4TFFVRk1MRWRCUVdFc1NVRkJZanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1RVRkJTME1zU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4TlFVRkxReXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5CU2l4VlFVRlRMRXRCUVV0TExFMUJRVXdzUTBGQldVd3NTMEZCV2l4RFFVRlVPMEZCUTBFc1F6czdhMEpCVUcxQ1JDeHBRanM3TzBGQlZYSkNRU3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDUXl4TlFVRTFRaXhIUVVGeFF5eFZRVUZUUXl4UFFVRlVMRVZCUVdsQ08wRkJRM0pFTEV0QlFVMURMRlZCUVZVc2JVSkJRVk5FTEU5QlFWUXNRMEZCYUVJN1FVRkRRU3hOUVVGTFNpeE5RVUZNT3p0QlFVVkJMRXRCUVVsTkxHZENRVUZLTzBGQlFVRXNTMEZCWVVNc1lVRkJZanM3UVVGRlFTeExRVUZITEVOQlFVTXNTMEZCUzFZc1MwRkJWQ3hGUVVGbE8wRkJRVVU3UVVGRGFFSXNUMEZCUzBFc1MwRkJUQ3hIUVVGaFVTeFBRVUZpTzBGQlEwRXNUMEZCUzFBc1NVRkJUQ3hIUVVGWlR5eFBRVUZhTzBGQlEwRXNSVUZJUkN4TlFVZFBMRWxCUVVjc1MwRkJTMUlzUzBGQlRDeERRVUZYVlN4SlFVRmtMRVZCUVcxQ08wRkJRVVU3TzBGQlJUTkNSQ3haUVVGVkxFdEJRVXRVTEV0QlFXWTdRVUZEUVZVc1UwRkJUeXhMUVVGTFZpeExRVUZNTEVOQlFWZFZMRWxCUVd4Q096dEJRVVZCUml4VlFVRlJSU3hKUVVGU0xFZEJRV1ZFTEZGQlFWRkRMRWxCUVhaQ08wRkJRMEZHTEZWQlFWRkhMRWxCUVZJc1IwRkJaVVlzVDBGQlpqczdRVUZGUVVFc1ZVRkJVVU1zU1VGQlVpeEhRVUZsUml4UFFVRm1PMEZCUTBGRkxFOUJRVXRETEVsQlFVd3NSMEZCV1Vnc1QwRkJXanM3UVVGSFFTeFBRVUZMVWl4TFFVRk1MRWRCUVdGUkxFOUJRV0k3UVVGRFFTeEZRV0pOTEUxQllVRTdRVUZCUlR0QlFVTlNReXhaUVVGVkxFdEJRVXRVTEV0QlFXWTdRVUZEUVZNc1ZVRkJVVU1zU1VGQlVpeEhRVUZsUml4UFFVRm1PMEZCUTBGQkxGVkJRVkZITEVsQlFWSXNSMEZCWlVZc1QwRkJaanM3UVVGRlFTeFBRVUZMVkN4TFFVRk1MRWRCUVdGUkxFOUJRV0k3UVVGRFFTeFBRVUZMVGl4SlFVRk1MRWRCUVZsTkxFOUJRVm83UVVGRFFUdEJRVVZFTEVOQkwwSkVPenRCUVdsRFFWWXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRazhzVlVGQk5VSXNSMEZCZVVNc1ZVRkJVME1zUzBGQlZDeEZRVUZsTzBGQlEzWkVMRXRCUVVsS0xGVkJRVlVzUzBGQlMxUXNTMEZCYmtJN08wRkJSVUVzUzBGQlNXTXNiVUpCUVVvN1FVRkRRU3hMUVVGSFJDeFRRVUZUTEVOQlFWb3NSVUZCWXp0QlFVTmlReXhsUVVGaExFbEJRV0k3UVVGRFFUczdRVUZGUkN4UlFVRk5SQ3hWUVVGVkxFTkJRV2hDTEVWQlFXdENPMEZCUTJwQ0xFMUJRVWRETEZWQlFVZ3NSVUZCWXp0QlFVTmlUQ3hoUVVGVlFTeFJRVUZSUXl4SlFVRnNRanRCUVVORFJDeGxRVUZaTEV0QlFVdFFMRWxCUVd4Q0xFZEJRVEpDVnl4UlFVRlJMRU5CUVc1RExFZEJRWGREUVN4UFFVRjRRenRCUVVOQkxFZEJTRVFzVFVGSFR6dEJRVU5PU2l4aFFVRlZRU3hSUVVGUlJTeEpRVUZzUWp0QlFVTkRSaXhsUVVGWkxFdEJRVXRTTEVsQlFXeENMRWRCUVRKQ1dTeFJRVUZSTEVOQlFXNURMRWRCUVhkRFFTeFBRVUY0UXp0QlFVTkJPMEZCUTBRN08wRkJSVVFzVFVGQlMySXNTMEZCVEN4SFFVRmhVeXhQUVVGaU96dEJRVVZCTEZGQlFVOHNTMEZCUzFRc1MwRkJXanRCUVVOQkxFTkJja0pFT3p0QlFYVkNRVVlzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxVc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyWXNTMEZCVEN4SFFVRmhMRXRCUVV0RExFbEJRV3hDTzBGQlEwRXNRMEZHUkRzN1FVRkpRVWdzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxjc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyaENMRXRCUVV3c1IwRkJZU3hMUVVGTFJTeEpRVUZzUWp0QlFVTkJMRU5CUmtRN08wRkJTVUZLTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKRUxFMUJRVFZDTEVkQlFYRkRMRlZCUVZOTUxFdEJRVlFzUlVGQlpUdEJRVUZCT3p0QlFVTnVSRUVzVDBGQlRXdENMRWRCUVU0c1EwRkJWU3hWUVVGRFZpeFBRVUZFTEVWQlFWYzdRVUZEY0VJc1VVRkJTMFFzVFVGQlRDeERRVUZaUXl4UFFVRmFPMEZCUTBFc1JVRkdSRHRCUVVkQkxFTkJTa1E3TzBGQlRVRlVMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpoTEZGQlFUVkNMRWRCUVhWRExGVkJRVk5ETEZGQlFWUXNSVUZCYlVKRExGZEJRVzVDTEVWQlFTdENPMEZCUTNKRkxFdEJRVWxZTEZWQlFWVlhMR05CUVdNc1MwRkJTMnhDTEVsQlFXNUNMRWRCUVRCQ0xFdEJRVXRFTEVsQlFUZERPMEZCUTBFc1VVRkJUVkVzVDBGQlRpeEZRVUZqTzBGQlEySlZMRmRCUVZOV0xGRkJRVkZHTEU5QlFXcENPMEZCUTBGRkxGbEJRVlZYTEdOQlFXTllMRkZCUVZGRkxFbEJRWFJDTEVkQlFUWkNSaXhSUVVGUlF5eEpRVUV2UXp0QlFVTkJPMEZCUTBRc1EwRk9SRHM3UVVGVFFWb3NhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbWRDTEU5QlFUVkNMRWRCUVhORExGbEJRVlU3UVVGREwwTXNTMEZCVFhSQ0xGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVdHRRaXhSUVVGTUxFTkJRV01zVlVGQlExZ3NUMEZCUkN4RlFVRlhPMEZCUTNoQ1VpeFJRVUZOZFVJc1NVRkJUaXhEUVVGWFppeFBRVUZZTzBGQlEwRXNSVUZHUkR0QlFVZEJMRkZCUVU5U0xFdEJRVkE3UVVGRFFTeERRVTVFT3p0QlFWRkJSQ3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDYTBJc1pVRkJOVUlzUjBGQk9FTXNXVUZCVlR0QlFVTjJSQ3hMUVVGSExFdEJRVXQyUWl4TFFVRlNMRVZCUVdNN1FVRkRZaXhUUVVGUExFdEJRVXRCTEV0QlFVd3NRMEZCVjA4c1QwRkJiRUk3UVVGRFFUdEJRVU5FTEZGQlFVOHNTVUZCVUR0QlFVTkJMRU5CVEVRN08wRkJUMEZVTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKTExFbEJRVFZDTEVkQlFXMURMRmxCUVZVN1FVRkROVU1zUzBGQlRVRXNUMEZCVHl4TFFVRkxWaXhMUVVGTUxFTkJRVmRWTEVsQlFWZ3NSMEZCYTBJc1MwRkJTMVlzUzBGQlRDeERRVUZYVlN4SlFVRTNRaXhIUVVGeFF5eExRVUZMVml4TFFVRjJSRHRCUVVOQkxFMUJRVXRCTEV0QlFVd3NSMEZCWVZVc1NVRkJZanRCUVVOQkxGRkJRVTlCTEVsQlFWQTdRVUZEUVN4RFFVcEVPenRCUVUxQldpeHJRa0ZCYTBKUExGTkJRV3hDTEVOQlFUUkNUU3hKUVVFMVFpeEhRVUZ0UXl4WlFVRlZPMEZCUXpWRExFdEJRVTFCTEU5QlFVOHNTMEZCUzFnc1MwRkJUQ3hEUVVGWFZ5eEpRVUZZTEVkQlFXdENMRXRCUVV0WUxFdEJRVXdzUTBGQlYxY3NTVUZCTjBJc1IwRkJjVU1zUzBGQlMxZ3NTMEZCZGtRN1FVRkRRU3hOUVVGTFFTeExRVUZNTEVkQlFXRlhMRWxCUVdJN1FVRkRRU3hSUVVGUFFTeEpRVUZRTzBGQlEwRXNRMEZLUkN4RE96czdPenM3T3pzN096czdPenM3U1VNdlIzRkNZU3hKTEVkQlEzQkNMR05CUVZscVFpeFBRVUZhTEVWQlFXOUNPMEZCUVVFN08wRkJRMjVDTEUxQlFVdEJMRTlCUVV3c1IwRkJaVUVzVDBGQlpqdEJRVU5CTEUxQlFVdEhMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzVFVGQlMwTXNTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hET3p0clFrRk1iVUpoTEVraUxDSm1hV3hsSWpvaWJHbGlMMmx1WkdWNExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKc2FXNXJaV1JzYVhOMFhDSXNJRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lteHBibXRsWkd4cGMzUmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2liR2x1YTJWa2JHbHpkRndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSNWNHVnZaaUJ6Wld4bUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lITmxiR1lnT2lCMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN1hHNGdYSFJjZEZ4MFhIUmpiMjVtYVdkMWNtRmliR1U2SUdaaGJITmxMRnh1SUZ4MFhIUmNkRngwWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdkbGREb2daMlYwZEdWeVhHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTkdNME1UVTFZelUxWkRFM1pEQXlOVGd3T1RnaUxDSnBiWEJ2Y25RZ1RtOWtaU0JtY205dElGd2lMaTlPYjJSbFhDSTdYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZENCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0dGeWNtRjVLWHRjYmx4MFhIUjBhR2x6TG5CcGRtOTBJRDBnYm5Wc2JEdGNibHgwWEhSMGFHbHpMbWhsWVdRZ1BTQnVkV3hzTzF4dVhIUmNkSFJvYVhNdWRHRnBiQ0E5SUc1MWJHdzdYRzVjZEZ4MGRHaHBjeTVzWlc1bmRHZ2dQU0F3TzF4dVhIUmNkR0Z5Y21GNUlDWW1JSFJvYVhNdVkzSmxZWFJsS0dGeWNtRjVLVHRjYmx4MGZWeHVmVnh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWFXNXpaWEowSUQwZ1puVnVZM1JwYjI0b1pXeGxiV1Z1ZENsN1hHNWNkR052Ym5OMElHNWxkMDV2WkdVZ1BTQnVaWGNnVG05a1pTaGxiR1Z0Wlc1MEtUdGNibHgwZEdocGN5NXNaVzVuZEdnckt6dGNibHh1WEhSc1pYUWdZM1Z5Y21WdWRDd2dibVY0ZER0Y2JseHVYSFJwWmlnaGRHaHBjeTV3YVhadmRDbDdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5Qm1hWEp6ZENCbGJHVnRaVzUwWEc1Y2RGeDBkR2hwY3k1d2FYWnZkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBkR2hwY3k1b1pXRmtJRDBnYm1WM1RtOWtaVHRjYmx4MGZTQmxiSE5sSUdsbUtIUm9hWE11Y0dsMmIzUXVibVY0ZENsN0lDOHZJR2x1YzJWeWRHbHVaeUJwYmlCdGFXUmtiR1ZjYmx4dVhIUmNkR04xY25KbGJuUWdQU0IwYUdsekxuQnBkbTkwTzF4dVhIUmNkRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRN1hHNWNibHgwWEhSdVpYZE9iMlJsTG01bGVIUWdQU0JqZFhKeVpXNTBMbTVsZUhRN1hHNWNkRngwYm1WM1RtOWtaUzV3Y21WMklEMGdZM1Z5Y21WdWREdGNibHh1WEhSY2RHTjFjbkpsYm5RdWJtVjRkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBibVY0ZEM1d2NtVjJJRDBnYm1WM1RtOWtaVHRjYmx4dVhHNWNkRngwZEdocGN5NXdhWFp2ZENBOUlHNWxkMDV2WkdVN1hHNWNkSDBnWld4elpTQjdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5QnNZWE4wSUdWc1pXMWxiblJjYmx4MFhIUmpkWEp5Wlc1MElEMGdkR2hwY3k1d2FYWnZkRHRjYmx4MFhIUmpkWEp5Wlc1MExtNWxlSFFnUFNCdVpYZE9iMlJsTzF4dVhIUmNkRzVsZDA1dlpHVXVjSEpsZGlBOUlHTjFjbkpsYm5RN1hHNWNibHgwWEhSMGFHbHpMbkJwZG05MElEMGdibVYzVG05a1pUdGNibHgwWEhSMGFHbHpMblJoYVd3Z1BTQnVaWGRPYjJSbE8xeHVYSFI5WEc1Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1emFHbG1kRkJwZG05MElEMGdablZ1WTNScGIyNG9jMmhwWm5RcGUxeHVYSFJzWlhRZ1kzVnljbVZ1ZENBOUlIUm9hWE11Y0dsMmIzUTdYRzVjYmx4MGJHVjBJSEpwWjJoMFUyaHBablE3WEc1Y2RHbG1LSE5vYVdaMElENDlJREFwZTF4dVhIUmNkSEpwWjJoMFUyaHBablFnUFNCMGNuVmxPMXh1WEhSOVhHNWNibHgwZDJocGJHVW9jMmhwWm5RZ0lUMDlJREFwZTF4dVhIUmNkR2xtS0hKcFoyaDBVMmhwWm5RcGUxeHVYSFJjZEZ4MFkzVnljbVZ1ZENBOUlHTjFjbkpsYm5RdWJtVjRkRHRjYmx4MFhIUmNkQ2hqZFhKeVpXNTBJRDA5UFNCMGFHbHpMblJoYVd3cElEOGdLSE5vYVdaMElEMGdNQ2tnT2lCemFHbG1kQzB0TzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXdjbVYyTzF4dVhIUmNkRngwS0dOMWNuSmxiblFnUFQwOUlIUm9hWE11YUdWaFpDa2dQeUFvYzJocFpuUWdQU0F3S1NBNklITm9hV1owS3lzN1hHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGRHaHBjeTV3YVhadmRDQTlJR04xY25KbGJuUTdYRzVjYmx4MGNtVjBkWEp1SUhSb2FYTXVjR2wyYjNRN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWMyaHBablJRYVhadmRGUnZTR1ZoWkNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEhSb2FYTXVjR2wyYjNRZ1BTQjBhR2x6TG1obFlXUTdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVjMmhwWm5SUWFYWnZkRlJ2VkdGcGJDQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RIUm9hWE11Y0dsMmIzUWdQU0IwYUdsekxuUmhhV3c3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1WTNKbFlYUmxJRDBnWm5WdVkzUnBiMjRvWVhKeVlYa3BlMXh1WEhSaGNuSmhlUzV0WVhBb0tHVnNaVzFsYm5RcFBUNTdYRzVjZEZ4MGRHaHBjeTVwYm5ObGNuUW9aV3hsYldWdWRDazdYRzVjZEgwcFhHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWRISmhkbVZ5YzJVZ1BTQm1kVzVqZEdsdmJpaGpZV3hzWW1GamF5d2djbWxuYUhSVWIweGxablFwZTF4dVhIUnNaWFFnWTNWeWNtVnVkQ0E5SUhKcFoyaDBWRzlNWldaMElEOGdkR2hwY3k1MFlXbHNJRG9nZEdocGN5NW9aV0ZrTzF4dVhIUjNhR2xzWlNoamRYSnlaVzUwS1h0Y2JseDBYSFJqWVd4c1ltRmpheWhqZFhKeVpXNTBMbVZzWlcxbGJuUXBPMXh1WEhSY2RHTjFjbkpsYm5RZ1BTQnlhV2RvZEZSdlRHVm1kQ0EvSUdOMWNuSmxiblF1Y0hKbGRpQTZJR04xY25KbGJuUXVibVY0ZER0Y2JseDBmVnh1ZlR0Y2JseHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1ZEc5QmNuSmhlU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkR052Ym5OMElHRnljbUY1SUQwZ1cxMDdYRzVjZEhSb2FYTXVkSEpoZG1WeWMyVW9LR1ZzWlcxbGJuUXBQVDU3WEc1Y2RGeDBZWEp5WVhrdWNIVnphQ2hsYkdWdFpXNTBLVHRjYmx4MGZTbGNibHgwY21WMGRYSnVJR0Z5Y21GNU8xeHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtZGxkRkJwZG05MFJXeGxiV1Z1ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdsbUtIUm9hWE11Y0dsMmIzUXBlMXh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbkJwZG05MExtVnNaVzFsYm5RN1hHNWNkSDFjYmx4MGNtVjBkWEp1SUc1MWJHdzdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVibVY0ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdOdmJuTjBJRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRZ1B5QjBhR2x6TG5CcGRtOTBMbTVsZUhRZ09pQWdkR2hwY3k1d2FYWnZkRHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJRzVsZUhRN1hHNWNkSEpsZEhWeWJpQnVaWGgwTzF4dWZUdGNibHh1VUdsMmIzUmxaRXhwYm10bFpFeHBjM1F1Y0hKdmRHOTBlWEJsTG5CeVpYWWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUmpiMjV6ZENCd2NtVjJJRDBnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRDhnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRG9nSUhSb2FYTXVjR2wyYjNRN1hHNWNkSFJvYVhNdWNHbDJiM1FnUFNCd2NtVjJPMXh1WEhSeVpYUjFjbTRnY0hKbGRqdGNibjA3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJsdVpHVjRMbXB6SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUbTlrWlh0Y2JseDBZMjl1YzNSeWRXTjBiM0lvWld4bGJXVnVkQ2w3WEc1Y2RGeDBkR2hwY3k1bGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZER0Y2JseDBYSFIwYUdsekxtNWxlSFFnUFNCdWRXeHNPMXh1WEhSY2RIUm9hWE11Y0hKbGRpQTlJRzUxYkd3N1hHNWNkSDFjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlRtOWtaUzVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9waXZvdGVkLWxpbmtlZC1saXN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=