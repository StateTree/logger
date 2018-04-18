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
		prev: oldValue,
		current: newValue
	};
}

exports.default = diff;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NDQwMzNjYzllOWIwZWVkM2M0NiIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJvbGRPYmoiLCJuZXdPYmoiLCJvbGRPYmpUeXBlIiwibmV3T2JqVHlwZSIsIk51bWJlciIsIkRhdGUiLCJBcnJheSIsIk9iamVjdCIsInN0cmluZ0NvbXBhcmUiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDYXNlU2Vuc2l0aXZlIiwiU3RyaW5nIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZXN1bHQiLCJsb2NhbGVDb21wYXJlIiwibnVtYmVyQ29tcGFyZSIsImlzTmFOIiwiZGF0ZUNvbXBhcmUiLCJvbGRUaW1lIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJhcnJheUNvbXBhcmUiLCJjb21wYXJpc29uVmFsdWUiLCJvbGRPYmpMZW5ndGgiLCJsZW5ndGgiLCJuZXdPYmpMZW5ndGgiLCJpIiwib2JqZWN0Q29tcGFyZSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJpcyIsIm9iaiIsIlR5cGUiLCJCb29sZWFuIiwiaXNBcnJheSIsImRp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QVNLLElBQVQsQ0FBYzVCLFFBQWQsRUFBd0JDLFFBQXhCLEVBQWlDO0FBQ2hDLEtBQU1hLGtCQUFtQix1QkFBUWQsUUFBUixFQUFrQkMsUUFBbEIsQ0FBekI7O0FBRUEsS0FBR2Esb0JBQW9CLENBQXZCLEVBQXlCO0FBQ3hCYixhQUFXNEIsU0FBWDtBQUNBOztBQUVFLFFBQU87QUFDVEMsUUFBTTlCLFFBREc7QUFFVCtCLFdBQVM5QjtBQUZBLEVBQVA7QUFJSDs7a0JBRWMyQixJIiwiZmlsZSI6ImxpYi9kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkaWZmXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NDQwMzNjYzllOWIwZWVkM2M0NiIsImltcG9ydCBzdHJpbmdDb21wYXJlIGZyb20gJy4vc3RyaW5nQ29tcGFyZSdcbmltcG9ydCBudW1iZXJDb21wYXJlIGZyb20gJy4vbnVtYmVyQ29tcGFyZSdcbmltcG9ydCBkYXRlQ29tcGFyZSBmcm9tICcuL2RhdGVDb21wYXJlJ1xuaW1wb3J0IGFycmF5Q29tcGFyZSBmcm9tICcuL2FycmF5Q29tcGFyZSdcbmltcG9ydCBvYmplY3RDb21wYXJlIGZyb20gJy4vb2JqZWN0Q29tcGFyZSdcbmltcG9ydCBpcyBmcm9tICcuLy4uL2lzJ1xuXG5mdW5jdGlvbiBjb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGNvbnN0ICBvbGRPYmpUeXBlID0gdHlwZW9mKG9sZE9iaik7XG4gICAgY29uc3QgIG5ld09ialR5cGUgPSB0eXBlb2YobmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSBuZXdPYmpUeXBlKVxuICAgICAgICByZXR1cm4gc3RyaW5nQ29tcGFyZShvbGRPYmpUeXBlLCBuZXdPYmpUeXBlKTtcblxuICAgIGlmIChvbGRPYmpUeXBlID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKE51bWJlcihvbGRPYmopLCBOdW1iZXIobmV3T2JqKSk7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gbnVtYmVyQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gc3RyaW5nQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gJ29iamVjdCcpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgaWYgKGlzKG9sZE9iaiwgRGF0ZSkpXG4gICAgICAgIHJldHVybiBkYXRlQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKGlzKG9sZE9iaiwgQXJyYXkpKVxuICAgICAgICByZXR1cm4gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqLGNvbXBhcmUpO1xuICAgIGlmIChpcyhvbGRPYmosIE9iamVjdCkpXG4gICAgICAgIHJldHVybiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcblxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwiLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSlcbiAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgZWxzZSBpZiAocmVzdWx0ID4gMSlcbiAgICAgICAgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ0NvbXBhcmU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJcbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSlcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlckNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gZGF0ZUNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwgJiYgbmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICB2YXIgIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyICBuZXdUaW1lID0gbmV3VmFsdWUuZ2V0VGltZSgpO1xuICAgIGlmIChvbGRUaW1lIDwgbmV3VGltZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRUaW1lID4gbmV3VGltZSlcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXNOYU4ob2xkVGltZSkgJiYgaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRUaW1lKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1RpbWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0ZUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgbGV0IGNvbXBhcmlzb25WYWx1ZTtcbiAgICB2YXIgIG9sZE9iakxlbmd0aCA9IG9sZE9iai5sZW5ndGg7XG4gICAgdmFyICBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGZvciAodmFyICBpID0gMDsgaSA8IG9sZE9iakxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2YgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShvbGRPYmpbaV0sIG5ld09ialtpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2FycmF5Q29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG5cbiAgICBsZXQgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gb2xkT2JqKVxuICAgIHtcbiAgICAgICAgaWYgKCFuZXdPYmouaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBhcmlzb25WYWx1ZTtcbiAgICBmb3IgKHByb3AgaW4gbmV3T2JqKVxuICAgIHtcbiAgICAgICAgaWYgKCFvbGRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShvbGRPYmpbcHJvcF0sIG5ld09ialtwcm9wXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdENvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsImltcG9ydCBzdHJpbmdDb21wYXJlIGZyb20gJy4vY29tcGFyZS9zdHJpbmdDb21wYXJlJ1xuaW1wb3J0IG51bWJlckNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL251bWJlckNvbXBhcmUnXG5pbXBvcnQgZGF0ZUNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2RhdGVDb21wYXJlJ1xuaW1wb3J0IGFycmF5Q29tcGFyZSBmcm9tICcuL2NvbXBhcmUvYXJyYXlDb21wYXJlJ1xuaW1wb3J0IG9iamVjdENvbXBhcmUgZnJvbSAnLi9jb21wYXJlL29iamVjdENvbXBhcmUnXG5pbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUvY29tcGFyZSdcbmltcG9ydCBkaWZmIGZyb20gJy4vZGlmZidcblxuZXhwb3J0IHtcbiAgICBkaWZmIGFzIGRlZmF1bHQsXG4gICAgY29tcGFyZSxcbiAgICBzdHJpbmdDb21wYXJlLFxuICAgIG51bWJlckNvbXBhcmUsXG4gICAgZGF0ZUNvbXBhcmUsXG4gICAgYXJyYXlDb21wYXJlLFxuICAgIG9iamVjdENvbXBhcmVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJmdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdClcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gU3RyaW5nO1xuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBOdW1iZXI7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2lzLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBkaWZmKG9sZFZhbHVlLCBuZXdWYWx1ZSl7XG5cdGNvbnN0IGNvbXBhcmlzb25WYWx1ZSA9ICBjb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cblx0aWYoY29tcGFyaXNvblZhbHVlID09PSAwKXtcblx0XHRuZXdWYWx1ZSA9IHVuZGVmaW5lZDtcblx0fVxuXG4gICAgcmV0dXJuIHtcblx0XHRwcmV2OiBvbGRWYWx1ZSxcblx0XHRjdXJyZW50OiBuZXdWYWx1ZVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaWZmO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9kaWZmLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ListLogger = exports.default = undefined;

var _Logger = __webpack_require__(2);

var _Logger2 = _interopRequireDefault(_Logger);

var _ListLogger = __webpack_require__(4);

var _ListLogger2 = _interopRequireDefault(_ListLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Logger2.default;
exports.ListLogger = _ListLogger2.default;

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

function applyDiff(steps, callback) {
	var context = this.context,
	    logList = this.logList,
	    setter = this.setter;


	var listEntry = logList.shiftPivot(steps);

	// now after reaching the Log entry apply the diff to current state
	setter.call(context, listEntry.element, callback);
};

var ListLogger = function ListLogger(saveCallback) {
	_classCallCheck(this, ListLogger);

	this.context;
	this.getter;
	this.setter;
	this.diffMethod;

	this.logList = new _pivotedLinkedList2.default([]);
	this.saveDiffCallback = saveCallback;
	this.enable = true;
};

exports.default = ListLogger;


ListLogger.prototype.setContext = function (context, getter, setter, diffMethod) {
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

ListLogger.prototype.setSaveCallback = function (saveCallback) {
	this.saveDiffCallback = saveCallback;
};

ListLogger.prototype.removeSaveCallback = function () {
	this.saveDiffCallback = null;
};

ListLogger.prototype.undo = function (steps, callback) {
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, -steps, callback);
};

ListLogger.prototype.redo = function (steps, callback) {
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, steps, callback);
};

ListLogger.prototype.save = function () {
	if (this.enable) {
		var getDiff = this.diffMethod ? this.diffMethod : _diff3.default;
		if (this.context) {
			var state = this.getter.call(this.context);
			var _diff = getDiff(this.prevState, state).current;

			if (_diff !== undefined) {
				// Change occurred log them
				this.logList.insert(_diff);
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(_diff3.default);
	}
};

ListLogger.prototype.getCurrentLog = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYWVlMTViN2MzNzA1ZjkyZjI1ZiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9MaXN0TG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsIkxpc3RMb2dnZXIiLCJhcHBseURpZmYiLCJzdGVwcyIsImNhbGxiYWNrIiwiY29udGV4dCIsInVuZG9Mb2ciLCJyZWRvTG9nIiwiZ2V0dGVyIiwic2V0dGVyIiwicHJldlN0YXRlIiwiYWJzU3RlcHMiLCJNYXRoIiwiYWJzIiwic3RlcHNSZW1haW5pbmciLCJtaW4iLCJsZW5ndGgiLCJsb2dFbnRyeSIsImRpZmYiLCJwb3AiLCJ1bnNoaWZ0IiwicHJldiIsInNoaWZ0IiwicHVzaCIsIm5leHQiLCJ2YWx1ZSIsImRpZmZBcHBsaWVkIiwiY2FsbCIsIkxvZ2dlciIsInNhdmVDYWxsYmFjayIsImRpZmZNZXRob2QiLCJuZXh0SWQiLCJzYXZlRGlmZkNhbGxiYWNrIiwiZW5hYmxlIiwicHJvdG90eXBlIiwic2V0Q29udGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwic2V0U2F2ZUNhbGxiYWNrIiwicmVtb3ZlU2F2ZUNhbGxiYWNrIiwidW5kbyIsImlzTmFOIiwicmVkbyIsInNhdmUiLCJsb2ciLCJnZXREaWZmIiwic3RhdGUiLCJkaWZmT2JqZWN0IiwiY3VycmVudCIsInVuZGVmaW5lZCIsIm5leHRMb2ciLCJMb2dFbnRyeSIsImlkIiwibG9nTGlzdCIsImxpc3RFbnRyeSIsInNoaWZ0UGl2b3QiLCJlbGVtZW50IiwiaW5zZXJ0IiwiZ2V0Q3VycmVudExvZyIsImdldFBpdm90RWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRCwyQ0FBMkMsY0FBYywycFgiLCJmaWxlIjoibGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsb2dnZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibG9nZ2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmFlZTE1YjdjMzcwNWY5MmYyNWYiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfaXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX2lzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBvbGRPYmpUeXBlID0gdHlwZW9mIG9sZE9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2xkT2JqKTtcbiAgICB2YXIgbmV3T2JqVHlwZSA9IHR5cGVvZiBuZXdPYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSkgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJykgcmV0dXJuICgwLCBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJykgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKSByZXR1cm4gMTtcblxuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIERhdGUpKSByZXR1cm4gKDAsIF9kYXRlQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIEFycmF5KSkgcmV0dXJuICgwLCBfYXJyYXlDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgT2JqZWN0KSkgcmV0dXJuICgwLCBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSkgcmVzdWx0ID0gLTE7ZWxzZSBpZiAocmVzdWx0ID4gMSkgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ0NvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSkgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG51bWJlckNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKSByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkYXRlQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgY29tcGFyaXNvblZhbHVlID0gdm9pZCAwO1xuICAgIHZhciBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKSByZXR1cm4gMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFycmF5Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIHByb3AgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iaikge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG5ld09iaikge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9iamVjdENvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBleHBvcnRzLmFycmF5Q29tcGFyZSA9IGV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBleHBvcnRzLm51bWJlckNvbXBhcmUgPSBleHBvcnRzLnN0cmluZ0NvbXBhcmUgPSBleHBvcnRzLmNvbXBhcmUgPSBleHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RyaW5nQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfc3RyaW5nQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdDb21wYXJlKTtcblxudmFyIF9udW1iZXJDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9udW1iZXJDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlckNvbXBhcmUpO1xuXG52YXIgX2RhdGVDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9kYXRlQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRlQ29tcGFyZSk7XG5cbnZhciBfYXJyYXlDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hcnJheUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlDb21wYXJlKTtcblxudmFyIF9vYmplY3RDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9vYmplY3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdENvbXBhcmUpO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbnZhciBfZGlmZiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfZGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaWZmKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RpZmYyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBhcmUgPSBfY29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5udW1iZXJDb21wYXJlID0gX251bWJlckNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmRhdGVDb21wYXJlID0gX2RhdGVDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5hcnJheUNvbXBhcmUgPSBfYXJyYXlDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3RDb21wYXJlID0gX29iamVjdENvbXBhcmUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSkgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gaXM7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGRpZmYob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdHZhciBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cblx0aWYgKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCkge1xuXHRcdG5ld1ZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwcmV2OiBvbGRWYWx1ZSxcblx0XHRjdXJyZW50OiBuZXdWYWx1ZVxuXHR9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkaWZmO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EyTkRRd016TmpZemxsT1dJd1pXVmtNMk0wTmlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5amIyMXdZWEpsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmJuVnRZbVZ5UTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5a1lYUmxRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzloY25KaGVVTnZiWEJoY21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMmx6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWthV1ptTG1weklsMHNJbTVoYldWeklqcGJJbU52YlhCaGNtVWlMQ0p2YkdSUFltb2lMQ0p1WlhkUFltb2lMQ0p2YkdSUFltcFVlWEJsSWl3aWJtVjNUMkpxVkhsd1pTSXNJazUxYldKbGNpSXNJa1JoZEdVaUxDSkJjbkpoZVNJc0lrOWlhbVZqZENJc0luTjBjbWx1WjBOdmJYQmhjbVVpTENKdmJHUldZV3gxWlNJc0ltNWxkMVpoYkhWbElpd2lhWE5EWVhObFUyVnVjMmwwYVhabElpd2lVM1J5YVc1bklpd2lkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVWlMQ0p5WlhOMWJIUWlMQ0pzYjJOaGJHVkRiMjF3WVhKbElpd2liblZ0WW1WeVEyOXRjR0Z5WlNJc0ltbHpUbUZPSWl3aVpHRjBaVU52YlhCaGNtVWlMQ0p2YkdSVWFXMWxJaXdpWjJWMFZHbHRaU0lzSW01bGQxUnBiV1VpTENKaGNuSmhlVU52YlhCaGNtVWlMQ0pqYjIxd1lYSnBjMjl1Vm1Gc2RXVWlMQ0p2YkdSUFltcE1aVzVuZEdnaUxDSnNaVzVuZEdnaUxDSnVaWGRQWW1wTVpXNW5kR2dpTENKcElpd2liMkpxWldOMFEyOXRjR0Z5WlNJc0luQnliM0FpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW1SbFptRjFiSFFpTENKcGN5SXNJbTlpYWlJc0lsUjVjR1VpTENKQ2IyOXNaV0Z1SWl3aWFYTkJjbkpoZVNJc0ltUnBabVlpTENKMWJtUmxabWx1WldRaUxDSndjbVYySWl3aVkzVnljbVZ1ZENKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN096czdPenRCUXpkRVFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dEJRVVZCTEZOQlFWTkJMRTlCUVZRc1EwRkJhVUpETEUxQlFXcENMRVZCUVhsQ1F5eE5RVUY2UWl4RlFVTkJPMEZCUTBrc1VVRkJTVVFzVjBGQlYwTXNUVUZCWml4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxFTEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxETEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZGQlFVOURMRzlDUVVGdlFrWXNUVUZCY0VJc2VVTkJRVzlDUVN4TlFVRndRaXhEUVVGUU8wRkJRMEVzVVVGQlQwY3NiMEpCUVc5Q1JpeE5RVUZ3UWl4NVEwRkJiMEpCTEUxQlFYQkNMRU5CUVZBN08wRkJSVUVzVVVGQlNVTXNaVUZCWlVNc1ZVRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSQ3hWUVVGa0xFVkJRVEJDUXl4VlFVRXhRaXhEUVVGUU96dEJRVVZLTEZGQlFVbEVMR1ZCUVdVc1UwRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSU3hQUVVGUFNpeE5RVUZRTEVOQlFXUXNSVUZCT0VKSkxFOUJRVTlJTEUxQlFWQXNRMEZCT1VJc1EwRkJVRHRCUVVOS0xGRkJRVWxETEdWQlFXVXNVVUZCYmtJc1JVRkRTU3hQUVVGUExEWkNRVUZqUml4TlFVRmtMRVZCUVhOQ1F5eE5RVUYwUWl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zWlVGQlpTeFJRVUZ1UWl4RlFVTkpMRTlCUVU4c05rSkJRV05HTEUxQlFXUXNSVUZCYzBKRExFMUJRWFJDTEVOQlFWQTdPMEZCUlVvc1VVRkJTVU1zWlVGQlpTeFJRVUZ1UWl4RlFVTkpMRTlCUVU4c1EwRkJVRHM3UVVGRlNpeFJRVUZKTEd0Q1FVRkhSaXhOUVVGSUxFVkJRVmRMTEVsQlFWZ3NRMEZCU2l4RlFVTkpMRTlCUVU4c01rSkJRVmxNTEUxQlFWb3NSVUZCYjBKRExFMUJRWEJDTEVOQlFWQTdRVUZEU2l4UlFVRkpMR3RDUVVGSFJDeE5RVUZJTEVWQlFWZE5MRXRCUVZnc1EwRkJTaXhGUVVOSkxFOUJRVThzTkVKQlFXRk9MRTFCUVdJc1JVRkJjVUpETEUxQlFYSkNMRVZCUVRSQ1JpeFBRVUUxUWl4RFFVRlFPMEZCUTBvc1VVRkJTU3hyUWtGQlIwTXNUVUZCU0N4RlFVRlhUeXhOUVVGWUxFTkJRVW9zUlVGRFNTeFBRVUZQTERaQ1FVRmpVQ3hOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhGUVVFNFFrWXNUMEZCT1VJc1EwRkJVRHM3UVVGRlNpeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05CTEU4N096czdPenM3T3pzN096dEJRekZEWmp0QlFVTkJMRk5CUVZOVExHRkJRVlFzUTBGQmRVSkRMRkZCUVhaQ0xFVkJRV2xEUXl4UlFVRnFReXhGUVVFeVEwTXNaVUZCTTBNc1JVRkJORVE3UVVGRGVFUkJMSE5DUVVGclFpeFBRVUZQUVN4bFFVRlFMRXRCUVRKQ0xGZEJRVE5DTEVkQlFYbERRU3hsUVVGNlF5eEhRVUV5UkN4TFFVRTNSVHM3UVVGRlFTeFJRVUZKUml4WlFVRlpMRWxCUVZvc1NVRkJiMEpETEZsQlFWa3NTVUZCY0VNc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUkN4WlFVRlpMRWxCUVdoQ0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VNc1dVRkJXU3hKUVVGb1FpeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVWS0xGRkJRVWxETEdWQlFVb3NSVUZCY1VJN1FVRkRha0pHTEcxQ1FVRlhSeXhQUVVGUFNDeFJRVUZRTEVWQlFXbENTU3hwUWtGQmFrSXNSVUZCV0R0QlFVTkJTQ3h0UWtGQlYwVXNUMEZCVDBZc1VVRkJVQ3hGUVVGcFFrY3NhVUpCUVdwQ0xFVkJRVmc3UVVGRFNEczdRVUZGUkN4UlFVRkpReXhUUVVGVFJpeFBRVUZQU0N4UlFVRlFMRVZCUVdsQ1RTeGhRVUZxUWl4RFFVRXJRa3dzVVVGQkwwSXNRMEZCWWp0QlFVTkJMRkZCUVVsSkxGTkJRVk1zUTBGQlF5eERRVUZrTEVWQlEwbEJMRk5CUVZNc1EwRkJReXhEUVVGV0xFTkJSRW9zUzBGRlN5eEpRVUZKUVN4VFFVRlRMRU5CUVdJc1JVRkRSRUVzVTBGQlV5eERRVUZVT3p0QlFVVktMRmRCUVU5QkxFMUJRVkE3UVVGRFNEczdhMEpCUldOT0xHRTdPenM3T3pzN096czdPenM3UVVONFFtWXNVMEZCVTFFc1lVRkJWQ3hEUVVGMVFsQXNVVUZCZGtJc1JVRkJhVU5ETEZGQlFXcERMRVZCUVRKRE96dEJRVVYyUXl4UlFVRkpUeXhOUVVGTlVpeFJRVUZPTEV0QlFXMUNVU3hOUVVGTlVDeFJRVUZPTEVOQlFYWkNMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVOHNUVUZCVFZJc1VVRkJUaXhEUVVGS0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1ZFc1RVRkJUVkFzVVVGQlRpeERRVUZLTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlNVUXNWMEZCVjBNc1VVRkJaaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTTzBGQlEwb3NVVUZCU1VRc1YwRkJWME1zVVVGQlppeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRmRCUVU4c1EwRkJVRHRCUVVOSU96dHJRa0ZGWTAwc1lUczdPenM3T3pzN096czdPenRCUTJoQ1ppeFRRVUZUUlN4WFFVRlVMRU5CUVhGQ1ZDeFJRVUZ5UWl4RlFVRXJRa01zVVVGQkwwSXNSVUZCZVVNN08wRkJSWEpETEZGQlFVbEVMR0ZCUVdFc1NVRkJZaXhKUVVGeFFrTXNZVUZCWVN4SlFVRjBReXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEVMR0ZCUVdFc1NVRkJha0lzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhoUVVGaExFbEJRV3BDTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlMxTXNWVUZCVlZZc1UwRkJVMWNzVDBGQlZDeEZRVUZtTzBGQlEwRXNVVUZCUzBNc1ZVRkJWVmdzVTBGQlUxVXNUMEZCVkN4RlFVRm1PMEZCUTBFc1VVRkJTVVFzVlVGQlZVVXNUMEZCWkN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU08wRkJRMG9zVVVGQlNVWXNWVUZCVlVVc1QwRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlVEczdRVUZGU2l4UlFVRkpTaXhOUVVGTlJTeFBRVUZPTEV0QlFXdENSaXhOUVVGTlNTeFBRVUZPTEVOQlFYUkNMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVb3NUVUZCVFVVc1QwRkJUaXhEUVVGS0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VZc1RVRkJUVWtzVDBGQlRpeERRVUZLTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVjBGQlR5eERRVUZRTzBGQlEwZzdPMnRDUVVWalNDeFhPenM3T3pzN096czdPenM3TzBGRE0wSm1PenM3T3pzN1FVRkZRU3hUUVVGVFNTeFpRVUZVTEVOQlFYTkNkRUlzVFVGQmRFSXNSVUZCT0VKRExFMUJRVGxDTEVWQlEwRTdRVUZEU1N4UlFVRkpSQ3hYUVVGWFF5eE5RVUZtTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVFzVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlNYTkNMSGRDUVVGS08wRkJRMEVzVVVGQlMwTXNaVUZCWlhoQ0xFOUJRVTk1UWl4TlFVRXpRanRCUVVOQkxGRkJRVXRETEdWQlFXVjZRaXhQUVVGUGQwSXNUVUZCTTBJN1FVRkRRU3hSUVVGSlJDeGxRVUZsUlN4WlFVRnVRaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTTzBGQlEwb3NVVUZCU1VZc1pVRkJaVVVzV1VGQmJrSXNSVUZEU1N4UFFVRlBMRU5CUVZBN08wRkJSVW9zVTBGQlN5eEpRVUZMUXl4SlFVRkpMRU5CUVdRc1JVRkJhVUpCTEVsQlFVbElMRmxCUVhKQ0xFVkJRVzFEUnl4SFFVRnVReXhGUVVGM1F6dEJRVU53UXp0QlFVTkJTaXd3UWtGQmEwSXNkVUpCUVZGMlFpeFBRVUZQTWtJc1EwRkJVQ3hEUVVGU0xFVkJRVzFDTVVJc1QwRkJUekJDTEVOQlFWQXNRMEZCYmtJc1EwRkJiRUk3UVVGRFFTeFpRVUZKU2l4dFFrRkJiVUlzUTBGQmRrSXNSVUZEU1N4UFFVRlBRU3hsUVVGUU8wRkJRMUE3UVVGRFJDeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05FTEZrN096czdPenM3T3pzN096czdRVU0xUW1ZN096czdPenRCUVVWQkxGTkJRVk5OTEdGQlFWUXNRMEZCZFVJMVFpeE5RVUYyUWl4RlFVRXJRa01zVFVGQkwwSXNSVUZEUVR0QlFVTkpMRkZCUVVsRUxGZEJRVmRETEUxQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlJDeFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGSFNpeFJRVUZKTkVJc1lVRkJTanRCUVVOQkxGTkJRVXRCTEVsQlFVd3NTVUZCWVRkQ0xFMUJRV0lzUlVGRFFUdEJRVU5KTEZsQlFVa3NRMEZCUTBNc1QwRkJUelpDTEdOQlFWQXNRMEZCYzBKRUxFbEJRWFJDTEVOQlFVd3NSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOUU96dEJRVVZFTEZGQlFVbE9MSGRDUVVGS08wRkJRMEVzVTBGQlMwMHNTVUZCVEN4SlFVRmhOVUlzVFVGQllpeEZRVU5CTzBGQlEwa3NXVUZCU1N4RFFVRkRSQ3hQUVVGUE9FSXNZMEZCVUN4RFFVRnpRa1FzU1VGQmRFSXNRMEZCVEN4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS08wRkJRMEZPTERCQ1FVRnJRaXgxUWtGQlVYWkNMRTlCUVU4MlFpeEpRVUZRTEVOQlFWSXNSVUZCYzBJMVFpeFBRVUZQTkVJc1NVRkJVQ3hEUVVGMFFpeERRVUZzUWp0QlFVTkJMRmxCUVVsT0xHOUNRVUZ2UWl4RFFVRjRRaXhGUVVOSkxFOUJRVTlCTEdWQlFWQTdRVUZEVUR0QlFVTkVMRmRCUVU4c1EwRkJVRHRCUVVOSU96dHJRa0ZGWTBzc1lUczdPenM3T3pzN096czdPenM3UVVOb1EyWTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dFJRVWRaUnl4UE8xRkJRMUpvUXl4UE8xRkJRMEZUTEdFN1VVRkRRVkVzWVR0UlFVTkJSU3hYTzFGQlEwRkpMRms3VVVGRFFVMHNZVHM3T3pzN096czdPenM3TzBGRFprb3NVMEZCVTBrc1JVRkJWQ3hEUVVGWlF5eEhRVUZhTEVWQlFXbENReXhKUVVGcVFpeEZRVUYxUWp0QlFVTnVRaXhSUVVGSlJDeFBRVUZQTEVsQlFWQXNTVUZCWlVFc1QwRkJUeXhKUVVFeFFpeEZRVU5KTEU5QlFVOHNTMEZCVUR0QlFVTktMRkZCUVVsQkxHVkJRV1ZETEVsQlFXNUNMRVZCUTBrc1QwRkJUeXhKUVVGUU8wRkJRMG9zVVVGQlNVRXNVMEZCVXpOQ0xFMUJRV0lzUlVGRFNTeFBRVUZQTEVsQlFWQTdPMEZCUlVvc1VVRkJTU3hQUVVGUE1FSXNSMEZCVUN4TFFVRm5RaXhSUVVGd1FpeEZRVU5KTEU5QlFVOURMRk5CUVZOMFFpeE5RVUZvUWp0QlFVTktMRkZCUVVrc1QwRkJUM0ZDTEVkQlFWQXNTMEZCWjBJc1VVRkJjRUlzUlVGRFNTeFBRVUZQUXl4VFFVRlRPVUlzVFVGQmFFSTdRVUZEU2l4UlFVRkpMRTlCUVU4MlFpeEhRVUZRTEV0QlFXZENMRk5CUVhCQ0xFVkJRMGtzVDBGQlQwTXNVMEZCVTBNc1QwRkJhRUk3UVVGRFNpeFJRVUZKUkN4VFFVRlROVUlzUzBGQllpeEZRVU5KTEU5QlFVOUJMRTFCUVUwNFFpeFBRVUZPTEVOQlFXTklMRWRCUVdRc1EwRkJVRHM3UVVGRlNpeFhRVUZQTEV0QlFWQTdRVUZEU0RzN2EwSkJSV05FTEVVN096czdPenM3T3pzN096czdRVU53UW1ZN096czdPenRCUVVWQkxGTkJRVk5MTEVsQlFWUXNRMEZCWXpWQ0xGRkJRV1FzUlVGQmQwSkRMRkZCUVhoQ0xFVkJRV2xETzBGQlEyaERMRXRCUVUxaExHdENRVUZ0UWl4MVFrRkJVV1FzVVVGQlVpeEZRVUZyUWtNc1VVRkJiRUlzUTBGQmVrSTdPMEZCUlVFc1MwRkJSMkVzYjBKQlFXOUNMRU5CUVhaQ0xFVkJRWGxDTzBGQlEzaENZaXhoUVVGWE5FSXNVMEZCV0R0QlFVTkJPenRCUVVWRkxGRkJRVTg3UVVGRFZFTXNVVUZCVFRsQ0xGRkJSRWM3UVVGRlZDdENMRmRCUVZNNVFqdEJRVVpCTEVWQlFWQTdRVUZKU0RzN2EwSkJSV015UWl4Sklpd2labWxzWlNJNklteHBZaTlrYVdabUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKa2FXWm1YQ0lzSUZ0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbVJwWm1aY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVpHbG1abHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0EyS1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EyTkRRd016TmpZemxsT1dJd1pXVmtNMk0wTmlJc0ltbHRjRzl5ZENCemRISnBibWREYjIxd1lYSmxJR1p5YjIwZ0p5NHZjM1J5YVc1blEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCdWRXMWlaWEpEYjIxd1lYSmxJR1p5YjIwZ0p5NHZiblZ0WW1WeVEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCa1lYUmxRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyUmhkR1ZEYjIxd1lYSmxKMXh1YVcxd2IzSjBJR0Z5Y21GNVEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJGeWNtRjVRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQnZZbXBsWTNSRGIyMXdZWEpsSUdaeWIyMGdKeTR2YjJKcVpXTjBRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQnBjeUJtY205dElDY3VMeTR1TDJsekoxeHVYRzVtZFc1amRHbHZiaUJqYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtWeHVlMXh1SUNBZ0lHbG1JQ2h2YkdSUFltb2dQVDA5SUc1bGQwOWlhaWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0c5c1pFOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1QySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJR052Ym5OMElDQnZiR1JQWW1wVWVYQmxJRDBnZEhsd1pXOW1LRzlzWkU5aWFpazdYRzRnSUNBZ1kyOXVjM1FnSUc1bGQwOWlhbFI1Y0dVZ1BTQjBlWEJsYjJZb2JtVjNUMkpxS1R0Y2JseHVJQ0FnSUdsbUlDaHZiR1JQWW1wVWVYQmxJQ0U5UFNCdVpYZFBZbXBVZVhCbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuUTI5dGNHRnlaU2h2YkdSUFltcFVlWEJsTENCdVpYZFBZbXBVZVhCbEtUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSUFltcFVlWEJsSUQwOVBTQW5ZbTl2YkdWaGJpY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkVzFpWlhKRGIyMXdZWEpsS0U1MWJXSmxjaWh2YkdSUFltb3BMQ0JPZFcxaVpYSW9ibVYzVDJKcUtTazdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZHVkVzFpWlhJbktWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnRZbVZ5UTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpazdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZHpkSEpwYm1jbktWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuUTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpazdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1QySnFWSGx3WlNBaFBUMGdKMjlpYW1WamRDY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1JHRjBaU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrWVhSbFEyOXRjR0Z5WlNodmJHUlBZbW9zSUc1bGQwOWlhaWs3WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1FYSnlZWGtwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhKeVlYbERiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxTEdOdmJYQmhjbVVwTzF4dUlDQWdJR2xtSUNocGN5aHZiR1JQWW1vc0lFOWlhbVZqZENrcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdlltcGxZM1JEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUxDQmpiMjF3WVhKbEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzlqYjIxd1lYSmxMbXB6SWl3aUx5OW9kSFJ3Y3pvdkwyUmxkbVZzYjNCbGNpNXRiM3BwYkd4aExtOXlaeTlsYmkxVlV5OWtiMk56TDFkbFlpOUtZWFpoVTJOeWFYQjBMMUpsWm1WeVpXNWpaUzlIYkc5aVlXeGZUMkpxWldOMGN5OVRkSEpwYm1jdmJHOWpZV3hsUTI5dGNHRnlaVnh1Wm5WdVkzUnBiMjRnYzNSeWFXNW5RMjl0Y0dGeVpTaHZiR1JXWVd4MVpTd2dibVYzVm1Gc2RXVXNJR2x6UTJGelpWTmxibk5wZEdsMlpTa2dlMXh1SUNBZ0lHbHpRMkZ6WlZObGJuTnBkR2wyWlNBOUlIUjVjR1Z2WmlCcGMwTmhjMlZUWlc1emFYUnBkbVVnSVQwOUlDZDFibVJsWm1sdVpXUW5JRDhnYVhORFlYTmxVMlZ1YzJsMGFYWmxJRG9nWm1Gc2MyVTdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUFQwZ2JuVnNiQ0FtSmlCdVpYZFdZV3gxWlNBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnYVdZZ0tHNWxkMVpoYkhWbElEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNibHh1SUNBZ0lHbG1JQ2hwYzBOaGMyVlRaVzV6YVhScGRtVXBJSHRjYmlBZ0lDQWdJQ0FnYjJ4a1ZtRnNkV1VnUFNCVGRISnBibWNvYjJ4a1ZtRnNkV1VwTG5SdlRHOWpZV3hsVEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdVM1J5YVc1bktHNWxkMVpoYkhWbEtTNTBiMHh2WTJGc1pVeHZkMlZ5UTJGelpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0JUZEhKcGJtY29iMnhrVm1Gc2RXVXBMbXh2WTJGc1pVTnZiWEJoY21Vb2JtVjNWbUZzZFdVcE8xeHVJQ0FnSUdsbUlDaHlaWE4xYkhRZ1BDQXRNU2xjYmlBZ0lDQWdJQ0FnY21WemRXeDBJRDBnTFRFN1hHNGdJQ0FnWld4elpTQnBaaUFvY21WemRXeDBJRDRnTVNsY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ01UdGNibHh1SUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElITjBjbWx1WjBOdmJYQmhjbVU3WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVV1YW5NaUxDSmNibVoxYm1OMGFXOXVJRzUxYldKbGNrTnZiWEJoY21Vb2IyeGtWbUZzZFdVc0lHNWxkMVpoYkhWbEtTQjdYRzVjYmlBZ0lDQnBaaUFvYVhOT1lVNG9iMnhrVm1Gc2RXVXBJQ1ltSUdselRtRk9LRzVsZDFaaGJIVmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzlzWkZaaGJIVmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzVsZDFaaGJIVmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRlpoYkhWbElEd2dibVYzVm1Gc2RXVXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUGlCdVpYZFdZV3gxWlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnY21WMGRYSnVJREE3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHNTFiV0psY2tOdmJYQmhjbVU3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTNXFjeUlzSWx4dVpuVnVZM1JwYjI0Z1pHRjBaVU52YlhCaGNtVW9iMnhrVm1Gc2RXVXNJRzVsZDFaaGJIVmxLU0I3WEc1Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BUMDlJRzUxYkd3Z0ppWWdibVYzVm1Gc2RXVWdQVDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQxWmhiSFZsSUQwOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNiaUFnSUNCMllYSWdJRzlzWkZScGJXVWdQU0J2YkdSV1lXeDFaUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdkbUZ5SUNCdVpYZFVhVzFsSUQwZ2JtVjNWbUZzZFdVdVoyVjBWR2x0WlNncE8xeHVJQ0FnSUdsbUlDaHZiR1JVYVcxbElEd2dibVYzVkdsdFpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lHbG1JQ2h2YkdSVWFXMWxJRDRnYm1WM1ZHbHRaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc1Y2JpQWdJQ0JwWmlBb2FYTk9ZVTRvYjJ4a1ZHbHRaU2tnSmlZZ2FYTk9ZVTRvYm1WM1ZHbHRaU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNocGMwNWhUaWh2YkdSVWFXMWxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzVsZDFScGJXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1pHRjBaVU52YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZaR0YwWlVOdmJYQmhjbVV1YW5NaUxDSnBiWEJ2Y25RZ1kyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVVuTzF4dVhHNW1kVzVqZEdsdmJpQmhjbkpoZVVOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3BYRzU3WEc0Z0lDQWdhV1lnS0c5c1pFOWlhaUE5UFQwZ2JtVjNUMkpxS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJR2xtSUNodVpYZFBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnYkdWMElHTnZiWEJoY21semIyNVdZV3gxWlR0Y2JpQWdJQ0IyWVhJZ0lHOXNaRTlpYWt4bGJtZDBhQ0E5SUc5c1pFOWlhaTVzWlc1bmRHZzdYRzRnSUNBZ2RtRnlJQ0J1WlhkUFltcE1aVzVuZEdnZ1BTQnVaWGRQWW1vdWJHVnVaM1JvTzF4dUlDQWdJR2xtSUNodmJHUlBZbXBNWlc1bmRHZ2dQQ0J1WlhkUFltcE1aVzVuZEdncFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNCcFppQW9iMnhrVDJKcVRHVnVaM1JvSUQ0Z2JtVjNUMkpxVEdWdVozUm9LVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJQ0JwSUQwZ01Ec2dhU0E4SUc5c1pFOWlha3hsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDOHZjbVZqZFhKemFYWmxJR052YlhCaGNtbHpiMjRnYjJZZ1lYSnlZWGtnWld4bGJXVnVkSE5jYmlBZ0lDQWdJQ0FnWTI5dGNHRnlhWE52YmxaaGJIVmxJRDBnWTI5dGNHRnlaU2h2YkdSUFltcGJhVjBzSUc1bGQwOWlhbHRwWFNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdJVDBnTUNsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjF3WVhKcGMyOXVWbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1lYSnlZWGxEYjIxd1lYSmxPMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlqYjIxd1lYSmxMMkZ5Y21GNVEyOXRjR0Z5WlM1cWN5SXNJbWx0Y0c5eWRDQmpiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlNjN1hHNWNibVoxYm1OMGFXOXVJRzlpYW1WamRFTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9wWEc1N1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWlBOVBUMGdibVYzVDJKcUtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUdsbUlDaHVaWGRQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzVjYmlBZ0lDQnNaWFFnY0hKdmNEdGNiaUFnSUNCbWIzSWdLSEJ5YjNBZ2FXNGdiMnhrVDJKcUtWeHVJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z1WlhkUFltb3VhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjQ2twWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJR052YlhCaGNtbHpiMjVXWVd4MVpUdGNiaUFnSUNCbWIzSWdLSEJ5YjNBZ2FXNGdibVYzVDJKcUtWeHVJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z2YkdSUFltb3VhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjQ2twWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNBZ0lDQWdMeTl5WldOMWNuTnBkbVVnWTI5dGNHRnlhWE52YmlCdlppQnZZbXBsWTNRZ2NISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsSUQwZ1kyOXRjR0Z5WlNodmJHUlBZbXBiY0hKdmNGMHNJRzVsZDA5aWFsdHdjbTl3WFNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdJVDA5SURBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjl0Y0dGeWFYTnZibFpoYkhWbE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHOWlhbVZqZEVOdmJYQmhjbVU3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTNXFjeUlzSW1sdGNHOXlkQ0J6ZEhKcGJtZERiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5emRISnBibWREYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzUxYldKbGNrTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDI1MWJXSmxja052YlhCaGNtVW5YRzVwYlhCdmNuUWdaR0YwWlVOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMMlJoZEdWRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdGeWNtRjVRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdllYSnlZWGxEYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzlpYW1WamRFTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDI5aWFtVmpkRU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdlkyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCa2FXWm1JR1p5YjIwZ0p5NHZaR2xtWmlkY2JseHVaWGh3YjNKMElIdGNiaUFnSUNCa2FXWm1JR0Z6SUdSbFptRjFiSFFzWEc0Z0lDQWdZMjl0Y0dGeVpTeGNiaUFnSUNCemRISnBibWREYjIxd1lYSmxMRnh1SUNBZ0lHNTFiV0psY2tOdmJYQmhjbVVzWEc0Z0lDQWdaR0YwWlVOdmJYQmhjbVVzWEc0Z0lDQWdZWEp5WVhsRGIyMXdZWEpsTEZ4dUlDQWdJRzlpYW1WamRFTnZiWEJoY21WY2JuMWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ptZFc1amRHbHZiaUJwY3lodlltb3NJRlI1Y0dVcElIdGNiaUFnSUNCcFppQW9iMkpxSUQwOUlHNTFiR3dnZkh3Z2IySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0JwWmlBb2IySnFJR2x1YzNSaGJtTmxiMllnVkhsd1pTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdhV1lnS0ZSNWNHVWdQVDA5SUU5aWFtVmpkQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUtHOWlhaWtnUFQwOUlDZHpkSEpwYm1jbktWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ZIbHdaU0E5UFQwZ1UzUnlhVzVuTzF4dUlDQWdJR2xtSUNoMGVYQmxiMllvYjJKcUtTQTlQVDBnSjI1MWJXSmxjaWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJVZVhCbElEMDlQU0JPZFcxaVpYSTdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppaHZZbW9wSUQwOVBTQW5ZbTl2YkdWaGJpY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlVlWEJsSUQwOVBTQkNiMjlzWldGdU8xeHVJQ0FnSUdsbUlDaFVlWEJsSUQwOVBTQkJjbkpoZVNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUVGeWNtRjVMbWx6UVhKeVlYa29iMkpxS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYVhNN1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwybHpMbXB6SWl3aWFXMXdiM0owSUdOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMMk52YlhCaGNtVW5PMXh1WEc1bWRXNWpkR2x2YmlCa2FXWm1LRzlzWkZaaGJIVmxMQ0J1WlhkV1lXeDFaU2w3WEc1Y2RHTnZibk4wSUdOdmJYQmhjbWx6YjI1V1lXeDFaU0E5SUNCamIyMXdZWEpsS0c5c1pGWmhiSFZsTENCdVpYZFdZV3gxWlNrN1hHNWNibHgwYVdZb1kyOXRjR0Z5YVhOdmJsWmhiSFZsSUQwOVBTQXdLWHRjYmx4MFhIUnVaWGRXWVd4MVpTQTlJSFZ1WkdWbWFXNWxaRHRjYmx4MGZWeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JseDBYSFJ3Y21WMk9pQnZiR1JXWVd4MVpTeGNibHgwWEhSamRYSnlaVzUwT2lCdVpYZFdZV3gxWlZ4dVhIUjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCa2FXWm1PMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlrYVdabUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCBMaXN0TG9nZ2VyIGZyb20gJy4vTGlzdExvZ2dlcic7XG5cbmV4cG9ydCB7XG5cdExvZ2dlciBhcyBkZWZhdWx0LFxuXHRMaXN0TG9nZ2VyXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dFbnRyeSBmcm9tICcuL0xvZ0VudHJ5JztcblxuZnVuY3Rpb24gYXBwbHlEaWZmKHN0ZXBzLCBjYWxsYmFjaykge1xuXHRjb25zdCB7Y29udGV4dCwgdW5kb0xvZywgcmVkb0xvZywgZ2V0dGVyLCBzZXR0ZXJ9ID0gdGhpcztcblx0bGV0IHsgcHJldlN0YXRlIH0gPSB0aGlzO1xuXHRjb25zdCBhYnNTdGVwcyA9IE1hdGguYWJzKHN0ZXBzKTtcblx0bGV0IHN0ZXBzUmVtYWluaW5nID0gTWF0aC5taW4oYWJzU3RlcHMsIHN0ZXBzIDwgMCA/IHVuZG9Mb2cubGVuZ3RoIDogcmVkb0xvZy5sZW5ndGgpO1xuXHRpZiAoc3RlcHNSZW1haW5pbmcgPiAwKSB7XG5cdFx0bGV0IGxvZ0VudHJ5LCBkaWZmO1xuXHRcdHdoaWxlIChzdGVwc1JlbWFpbmluZy0tID4gMCkge1xuXHRcdFx0aWYgKHN0ZXBzIDwgMCkgeyAvLyB1bmRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gdW5kb0xvZy5wb3AoKTtcblx0XHRcdFx0cmVkb0xvZy51bnNoaWZ0KGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5LnByZXY7XG5cdFx0XHR9IGVsc2UgeyAvL3JlZG9cblx0XHRcdFx0bG9nRW50cnkgPSByZWRvTG9nLnNoaWZ0KCk7XG5cdFx0XHRcdHVuZG9Mb2cucHVzaChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RlcHNSZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBkaWZmLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IHRydWU7XG5cdFx0Ly8gbm93IGFmdGVyIHJlYWNoaW5nIHRoZSBMb2cgZW50cnkgYXBwbHkgdGhlIGRpZmYgdG8gY3VycmVudCBzdGF0ZVxuXHRcdHNldHRlci5jYWxsKGNvbnRleHQsIGRpZmYsIGNhbGxiYWNrKTtcblx0fSBlbHNlIHtcblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKHNhdmVDYWxsYmFjayl7XG5cdFx0dGhpcy5jb250ZXh0O1xuXHRcdHRoaXMuZ2V0dGVyO1xuXHRcdHRoaXMuc2V0dGVyO1xuXHRcdHRoaXMuZGlmZk1ldGhvZDtcblxuXHRcdHRoaXMudW5kb0xvZyA9IFtdO1xuXHRcdHRoaXMucmVkb0xvZyA9IFtdO1xuXG5cdFx0dGhpcy5wcmV2U3RhdGUgPSBudWxsO1xuXHRcdHRoaXMubmV4dElkID0gMDtcblxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFjaztcblxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cdH1cbn1cblxuTG9nZ2VyLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgZ2V0dGVyLCBzZXR0ZXIsIGRpZmZNZXRob2Qpe1xuXHRpZighZ2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgZ2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoIXNldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IHNldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmdldHRlciA9IGdldHRlcjtcblx0dGhpcy5zZXR0ZXIgPSBzZXR0ZXI7XG5cdHRoaXMuZGlmZk1ldGhvZCA9IGRpZmZNZXRob2Q7XG5cdHRoaXMucHJldlN0YXRlID0gZ2V0dGVyLmNhbGwoY29udGV4dCk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnNldFNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHNhdmVDYWxsYmFjayl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFja1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCAtc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0YXBwbHlEaWZmLmNhbGwodGhpcywgc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuZGlmZkFwcGxpZWQpe1xuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGxvZztcblx0XHRsZXQgZ2V0RGlmZiA9IHRoaXMuZGlmZk1ldGhvZCA/IHRoaXMuZGlmZk1ldGhvZCA6IGRpZmY7XG5cdFx0aWYodGhpcy5jb250ZXh0KXtcblx0XHRcdGNvbnN0IHN0YXRlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLmNvbnRleHQpO1xuXHRcdFx0Y29uc3QgZGlmZk9iamVjdCA9IGdldERpZmYodGhpcy5wcmV2U3RhdGUsIHN0YXRlKTtcblx0XHRcdC8vIENoYW5nZSBvY2N1cnJlZCBsb2cgdGhlbVxuXHRcdFx0aWYgKGRpZmZPYmplY3QuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxvZyA9IG5ldyBMb2dFbnRyeSh0aGlzLm5leHRJZCsrLCBkaWZmT2JqZWN0LmN1cnJlbnQsIGRpZmZPYmplY3QucHJldik7XG5cdFx0XHRcdGlmKHRoaXMucmVkb0xvZy5sZW5ndGggIT09IDApe1xuXHRcdFx0XHRcdGNvbnN0IG5leHRMb2cgPSB0aGlzLnJlZG9Mb2dbMF07XG5cdFx0XHRcdFx0bmV4dExvZy5wcmV2ID0gbG9nLm5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51bmRvTG9nLnB1c2gobG9nKTtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrICYmIHRoaXMuc2F2ZURpZmZDYWxsYmFjayhsb2cpO1xuXHR9XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Mb2dnZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dFbnRyeSB7XG5cdGNvbnN0cnVjdG9yKGlkLCBuZXh0LCBwcmV2KXtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uZXh0ID0gbmV4dDtcblx0XHR0aGlzLnByZXYgPSBwcmV2O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ0VudHJ5LmpzIiwiaW1wb3J0IGRpZmYgZnJvbSAnZGlmZic7XG5pbXBvcnQgUGl2b3RlZExpbmtlZExpc3QgZnJvbSAncGl2b3RlZC1saW5rZWQtbGlzdCc7XG5cbmZ1bmN0aW9uIGFwcGx5RGlmZihzdGVwcywgY2FsbGJhY2spIHtcblx0Y29uc3Qge2NvbnRleHQsIGxvZ0xpc3QsIHNldHRlcn0gPSB0aGlzO1xuXG5cdGNvbnN0IGxpc3RFbnRyeSA9IGxvZ0xpc3Quc2hpZnRQaXZvdChzdGVwcyk7XG5cblx0Ly8gbm93IGFmdGVyIHJlYWNoaW5nIHRoZSBMb2cgZW50cnkgYXBwbHkgdGhlIGRpZmYgdG8gY3VycmVudCBzdGF0ZVxuXHRzZXR0ZXIuY2FsbChjb250ZXh0LCBsaXN0RW50cnkuZWxlbWVudCwgY2FsbGJhY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKHNhdmVDYWxsYmFjayl7XG5cdFx0dGhpcy5jb250ZXh0O1xuXHRcdHRoaXMuZ2V0dGVyO1xuXHRcdHRoaXMuc2V0dGVyO1xuXHRcdHRoaXMuZGlmZk1ldGhvZDtcblxuXHRcdHRoaXMubG9nTGlzdCA9IG5ldyBQaXZvdGVkTGlua2VkTGlzdChbXSk7XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrO1xuXHRcdHRoaXMuZW5hYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5MaXN0TG9nZ2VyLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgZ2V0dGVyLCBzZXR0ZXIsIGRpZmZNZXRob2Qpe1xuXHRpZighZ2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgZ2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoIXNldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IHNldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmdldHRlciA9IGdldHRlcjtcblx0dGhpcy5zZXR0ZXIgPSBzZXR0ZXI7XG5cdHRoaXMuZGlmZk1ldGhvZCA9IGRpZmZNZXRob2Q7XG59O1xuXG5MaXN0TG9nZ2VyLnByb3RvdHlwZS5zZXRTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbihzYXZlQ2FsbGJhY2spe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBzYXZlQ2FsbGJhY2tcbn07XG5cbkxpc3RMb2dnZXIucHJvdG90eXBlLnJlbW92ZVNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG59O1xuXG5MaXN0TG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCAtc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxpc3RMb2dnZXIucHJvdG90eXBlLnJlZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2spe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdGFwcGx5RGlmZi5jYWxsKHRoaXMsIHN0ZXBzLCBjYWxsYmFjayk7XG59O1xuXG5MaXN0TG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBnZXREaWZmID0gdGhpcy5kaWZmTWV0aG9kID8gdGhpcy5kaWZmTWV0aG9kIDogZGlmZjtcblx0XHRpZih0aGlzLmNvbnRleHQpe1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMuY29udGV4dCk7XG5cdFx0XHRjb25zdCBkaWZmID0gZ2V0RGlmZih0aGlzLnByZXZTdGF0ZSwgc3RhdGUpLmN1cnJlbnQ7XG5cblx0XHRcdGlmIChkaWZmICE9PSB1bmRlZmluZWQpIHsgLy8gQ2hhbmdlIG9jY3VycmVkIGxvZyB0aGVtXG5cdFx0XHRcdHRoaXMubG9nTGlzdC5pbnNlcnQoZGlmZik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayAmJiB0aGlzLnNhdmVEaWZmQ2FsbGJhY2soZGlmZik7XG5cdH1cbn07XG5cbkxpc3RMb2dnZXIucHJvdG90eXBlLmdldEN1cnJlbnRMb2cgPSBmdW5jdGlvbigpe1xuXHRpZih0aGlzLmxvZ0xpc3QgKXtcblx0XHRyZXR1cm4gdGhpcy5sb2dMaXN0LmdldFBpdm90RWxlbWVudCgpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTGlzdExvZ2dlci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlua2VkbGlzdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpbmtlZGxpc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX05vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQaXZvdGVkTGlua2VkTGlzdCA9IGZ1bmN0aW9uIFBpdm90ZWRMaW5rZWRMaXN0KGFycmF5KSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaXZvdGVkTGlua2VkTGlzdCk7XG5cblx0dGhpcy5waXZvdCA9IG51bGw7XG5cdHRoaXMuaGVhZCA9IG51bGw7XG5cdHRoaXMudGFpbCA9IG51bGw7XG5cdHRoaXMubGVuZ3RoID0gMDtcblx0YXJyYXkgJiYgdGhpcy5jcmVhdGUoYXJyYXkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGl2b3RlZExpbmtlZExpc3Q7XG5cblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdHZhciBuZXdOb2RlID0gbmV3IF9Ob2RlMi5kZWZhdWx0KGVsZW1lbnQpO1xuXHR0aGlzLmxlbmd0aCsrO1xuXG5cdHZhciBjdXJyZW50ID0gdm9pZCAwLFxuXHQgICAgbmV4dCA9IHZvaWQgMDtcblxuXHRpZiAoIXRoaXMucGl2b3QpIHtcblx0XHQvLyBpbnNlcnRpbmcgYXMgZmlyc3QgZWxlbWVudFxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cdH0gZWxzZSBpZiAodGhpcy5waXZvdC5uZXh0KSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGluIG1pZGRsZVxuXG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0bmV4dCA9IHRoaXMucGl2b3QubmV4dDtcblxuXHRcdG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcblx0XHRuZXdOb2RlLnByZXYgPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcblx0XHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGFzIGxhc3QgZWxlbWVudFxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHRoaXMudGFpbCA9IG5ld05vZGU7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90ID0gZnVuY3Rpb24gKHNoaWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gdGhpcy5waXZvdDtcblxuXHR2YXIgcmlnaHRTaGlmdCA9IHZvaWQgMDtcblx0aWYgKHNoaWZ0ID49IDApIHtcblx0XHRyaWdodFNoaWZ0ID0gdHJ1ZTtcblx0fVxuXG5cdHdoaWxlIChzaGlmdCAhPT0gMCkge1xuXHRcdGlmIChyaWdodFNoaWZ0KSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdFx0Y3VycmVudCA9PT0gdGhpcy50YWlsID8gc2hpZnQgPSAwIDogc2hpZnQtLTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudCA9IGN1cnJlbnQucHJldjtcblx0XHRcdGN1cnJlbnQgPT09IHRoaXMuaGVhZCA/IHNoaWZ0ID0gMCA6IHNoaWZ0Kys7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5waXZvdCA9IGN1cnJlbnQ7XG5cblx0cmV0dXJuIHRoaXMucGl2b3Q7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuc2hpZnRQaXZvdFRvSGVhZCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9UYWlsID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gdGhpcy50YWlsO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdGFycmF5Lm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdF90aGlzLmluc2VydChlbGVtZW50KTtcblx0fSk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUudHJhdmVyc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHJpZ2h0VG9MZWZ0KSB7XG5cdHZhciBjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyB0aGlzLnRhaWwgOiB0aGlzLmhlYWQ7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0Y2FsbGJhY2soY3VycmVudC5lbGVtZW50KTtcblx0XHRjdXJyZW50ID0gcmlnaHRUb0xlZnQgPyBjdXJyZW50LnByZXYgOiBjdXJyZW50Lm5leHQ7XG5cdH1cbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGFycmF5LnB1c2goZWxlbWVudCk7XG5cdH0pO1xuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuZ2V0UGl2b3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5waXZvdCkge1xuXHRcdHJldHVybiB0aGlzLnBpdm90LmVsZW1lbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG5leHQgPSB0aGlzLnBpdm90Lm5leHQgPyB0aGlzLnBpdm90Lm5leHQgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gbmV4dDtcblx0cmV0dXJuIG5leHQ7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHByZXYgPSB0aGlzLnBpdm90LnByZXYgPyB0aGlzLnBpdm90LnByZXYgOiB0aGlzLnBpdm90O1xuXHR0aGlzLnBpdm90ID0gcHJldjtcblx0cmV0dXJuIHByZXY7XG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5vZGUgPSBmdW5jdGlvbiBOb2RlKGVsZW1lbnQpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG5cdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EwWXpReE5UVmpOVFZrTVRka01ESTFPREE1T0NJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwwNXZaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lVR2wyYjNSbFpFeHBibXRsWkV4cGMzUWlMQ0poY25KaGVTSXNJbkJwZG05MElpd2lhR1ZoWkNJc0luUmhhV3dpTENKc1pXNW5kR2dpTENKamNtVmhkR1VpTENKd2NtOTBiM1I1Y0dVaUxDSnBibk5sY25RaUxDSmxiR1Z0Wlc1MElpd2libVYzVG05a1pTSXNJbU4xY25KbGJuUWlMQ0p1WlhoMElpd2ljSEpsZGlJc0luTm9hV1owVUdsMmIzUWlMQ0p6YUdsbWRDSXNJbkpwWjJoMFUyaHBablFpTENKemFHbG1kRkJwZG05MFZHOUlaV0ZrSWl3aWMyaHBablJRYVhadmRGUnZWR0ZwYkNJc0ltMWhjQ0lzSW5SeVlYWmxjbk5sSWl3aVkyRnNiR0poWTJzaUxDSnlhV2RvZEZSdlRHVm1kQ0lzSW5SdlFYSnlZWGtpTENKd2RYTm9JaXdpWjJWMFVHbDJiM1JGYkdWdFpXNTBJaXdpVG05a1pTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVNM1JFRTdPenM3T3pzN08wbEJRM0ZDUVN4cFFpeEhRVU53UWl3eVFrRkJXVU1zUzBGQldpeEZRVUZyUWp0QlFVRkJPenRCUVVOcVFpeE5RVUZMUXl4TFFVRk1MRWRCUVdFc1NVRkJZanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1RVRkJTME1zU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4TlFVRkxReXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5CU2l4VlFVRlRMRXRCUVV0TExFMUJRVXdzUTBGQldVd3NTMEZCV2l4RFFVRlVPMEZCUTBFc1F6czdhMEpCVUcxQ1JDeHBRanM3TzBGQlZYSkNRU3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDUXl4TlFVRTFRaXhIUVVGeFF5eFZRVUZUUXl4UFFVRlVMRVZCUVdsQ08wRkJRM0pFTEV0QlFVMURMRlZCUVZVc2JVSkJRVk5FTEU5QlFWUXNRMEZCYUVJN1FVRkRRU3hOUVVGTFNpeE5RVUZNT3p0QlFVVkJMRXRCUVVsTkxHZENRVUZLTzBGQlFVRXNTMEZCWVVNc1lVRkJZanM3UVVGRlFTeExRVUZITEVOQlFVTXNTMEZCUzFZc1MwRkJWQ3hGUVVGbE8wRkJRVVU3UVVGRGFFSXNUMEZCUzBFc1MwRkJUQ3hIUVVGaFVTeFBRVUZpTzBGQlEwRXNUMEZCUzFBc1NVRkJUQ3hIUVVGWlR5eFBRVUZhTzBGQlEwRXNSVUZJUkN4TlFVZFBMRWxCUVVjc1MwRkJTMUlzUzBGQlRDeERRVUZYVlN4SlFVRmtMRVZCUVcxQ08wRkJRVVU3TzBGQlJUTkNSQ3haUVVGVkxFdEJRVXRVTEV0QlFXWTdRVUZEUVZVc1UwRkJUeXhMUVVGTFZpeExRVUZNTEVOQlFWZFZMRWxCUVd4Q096dEJRVVZCUml4VlFVRlJSU3hKUVVGU0xFZEJRV1ZFTEZGQlFWRkRMRWxCUVhaQ08wRkJRMEZHTEZWQlFWRkhMRWxCUVZJc1IwRkJaVVlzVDBGQlpqczdRVUZGUVVFc1ZVRkJVVU1zU1VGQlVpeEhRVUZsUml4UFFVRm1PMEZCUTBGRkxFOUJRVXRETEVsQlFVd3NSMEZCV1Vnc1QwRkJXanM3UVVGSFFTeFBRVUZMVWl4TFFVRk1MRWRCUVdGUkxFOUJRV0k3UVVGRFFTeEZRV0pOTEUxQllVRTdRVUZCUlR0QlFVTlNReXhaUVVGVkxFdEJRVXRVTEV0QlFXWTdRVUZEUVZNc1ZVRkJVVU1zU1VGQlVpeEhRVUZsUml4UFFVRm1PMEZCUTBGQkxGVkJRVkZITEVsQlFWSXNSMEZCWlVZc1QwRkJaanM3UVVGRlFTeFBRVUZMVkN4TFFVRk1MRWRCUVdGUkxFOUJRV0k3UVVGRFFTeFBRVUZMVGl4SlFVRk1MRWRCUVZsTkxFOUJRVm83UVVGRFFUdEJRVVZFTEVOQkwwSkVPenRCUVdsRFFWWXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRazhzVlVGQk5VSXNSMEZCZVVNc1ZVRkJVME1zUzBGQlZDeEZRVUZsTzBGQlEzWkVMRXRCUVVsS0xGVkJRVlVzUzBGQlMxUXNTMEZCYmtJN08wRkJSVUVzUzBGQlNXTXNiVUpCUVVvN1FVRkRRU3hMUVVGSFJDeFRRVUZUTEVOQlFWb3NSVUZCWXp0QlFVTmlReXhsUVVGaExFbEJRV0k3UVVGRFFUczdRVUZGUkN4UlFVRk5SQ3hWUVVGVkxFTkJRV2hDTEVWQlFXdENPMEZCUTJwQ0xFMUJRVWRETEZWQlFVZ3NSVUZCWXp0QlFVTmlUQ3hoUVVGVlFTeFJRVUZSUXl4SlFVRnNRanRCUVVORFJDeGxRVUZaTEV0QlFVdFFMRWxCUVd4Q0xFZEJRVEpDVnl4UlFVRlJMRU5CUVc1RExFZEJRWGREUVN4UFFVRjRRenRCUVVOQkxFZEJTRVFzVFVGSFR6dEJRVU5PU2l4aFFVRlZRU3hSUVVGUlJTeEpRVUZzUWp0QlFVTkRSaXhsUVVGWkxFdEJRVXRTTEVsQlFXeENMRWRCUVRKQ1dTeFJRVUZSTEVOQlFXNURMRWRCUVhkRFFTeFBRVUY0UXp0QlFVTkJPMEZCUTBRN08wRkJSVVFzVFVGQlMySXNTMEZCVEN4SFFVRmhVeXhQUVVGaU96dEJRVVZCTEZGQlFVOHNTMEZCUzFRc1MwRkJXanRCUVVOQkxFTkJja0pFT3p0QlFYVkNRVVlzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxVc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyWXNTMEZCVEN4SFFVRmhMRXRCUVV0RExFbEJRV3hDTzBGQlEwRXNRMEZHUkRzN1FVRkpRVWdzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUWxjc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyaENMRXRCUVV3c1IwRkJZU3hMUVVGTFJTeEpRVUZzUWp0QlFVTkJMRU5CUmtRN08wRkJTVUZLTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKRUxFMUJRVFZDTEVkQlFYRkRMRlZCUVZOTUxFdEJRVlFzUlVGQlpUdEJRVUZCT3p0QlFVTnVSRUVzVDBGQlRXdENMRWRCUVU0c1EwRkJWU3hWUVVGRFZpeFBRVUZFTEVWQlFWYzdRVUZEY0VJc1VVRkJTMFFzVFVGQlRDeERRVUZaUXl4UFFVRmFPMEZCUTBFc1JVRkdSRHRCUVVkQkxFTkJTa1E3TzBGQlRVRlVMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpoTEZGQlFUVkNMRWRCUVhWRExGVkJRVk5ETEZGQlFWUXNSVUZCYlVKRExGZEJRVzVDTEVWQlFTdENPMEZCUTNKRkxFdEJRVWxZTEZWQlFWVlhMR05CUVdNc1MwRkJTMnhDTEVsQlFXNUNMRWRCUVRCQ0xFdEJRVXRFTEVsQlFUZERPMEZCUTBFc1VVRkJUVkVzVDBGQlRpeEZRVUZqTzBGQlEySlZMRmRCUVZOV0xGRkJRVkZHTEU5QlFXcENPMEZCUTBGRkxGbEJRVlZYTEdOQlFXTllMRkZCUVZGRkxFbEJRWFJDTEVkQlFUWkNSaXhSUVVGUlF5eEpRVUV2UXp0QlFVTkJPMEZCUTBRc1EwRk9SRHM3UVVGVFFWb3NhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbWRDTEU5QlFUVkNMRWRCUVhORExGbEJRVlU3UVVGREwwTXNTMEZCVFhSQ0xGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVdHRRaXhSUVVGTUxFTkJRV01zVlVGQlExZ3NUMEZCUkN4RlFVRlhPMEZCUTNoQ1VpeFJRVUZOZFVJc1NVRkJUaXhEUVVGWFppeFBRVUZZTzBGQlEwRXNSVUZHUkR0QlFVZEJMRkZCUVU5U0xFdEJRVkE3UVVGRFFTeERRVTVFT3p0QlFWRkJSQ3hyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDYTBJc1pVRkJOVUlzUjBGQk9FTXNXVUZCVlR0QlFVTjJSQ3hMUVVGSExFdEJRVXQyUWl4TFFVRlNMRVZCUVdNN1FVRkRZaXhUUVVGUExFdEJRVXRCTEV0QlFVd3NRMEZCVjA4c1QwRkJiRUk3UVVGRFFUdEJRVU5FTEZGQlFVOHNTVUZCVUR0QlFVTkJMRU5CVEVRN08wRkJUMEZVTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKTExFbEJRVFZDTEVkQlFXMURMRmxCUVZVN1FVRkROVU1zUzBGQlRVRXNUMEZCVHl4TFFVRkxWaXhMUVVGTUxFTkJRVmRWTEVsQlFWZ3NSMEZCYTBJc1MwRkJTMVlzUzBGQlRDeERRVUZYVlN4SlFVRTNRaXhIUVVGeFF5eExRVUZMVml4TFFVRjJSRHRCUVVOQkxFMUJRVXRCTEV0QlFVd3NSMEZCWVZVc1NVRkJZanRCUVVOQkxGRkJRVTlCTEVsQlFWQTdRVUZEUVN4RFFVcEVPenRCUVUxQldpeHJRa0ZCYTBKUExGTkJRV3hDTEVOQlFUUkNUU3hKUVVFMVFpeEhRVUZ0UXl4WlFVRlZPMEZCUXpWRExFdEJRVTFCTEU5QlFVOHNTMEZCUzFnc1MwRkJUQ3hEUVVGWFZ5eEpRVUZZTEVkQlFXdENMRXRCUVV0WUxFdEJRVXdzUTBGQlYxY3NTVUZCTjBJc1IwRkJjVU1zUzBGQlMxZ3NTMEZCZGtRN1FVRkRRU3hOUVVGTFFTeExRVUZNTEVkQlFXRlhMRWxCUVdJN1FVRkRRU3hSUVVGUFFTeEpRVUZRTzBGQlEwRXNRMEZLUkN4RE96czdPenM3T3pzN096czdPenM3U1VNdlIzRkNZU3hKTEVkQlEzQkNMR05CUVZscVFpeFBRVUZhTEVWQlFXOUNPMEZCUVVFN08wRkJRMjVDTEUxQlFVdEJMRTlCUVV3c1IwRkJaVUVzVDBGQlpqdEJRVU5CTEUxQlFVdEhMRWxCUVV3c1IwRkJXU3hKUVVGYU8wRkJRMEVzVFVGQlMwTXNTVUZCVEN4SFFVRlpMRWxCUVZvN1FVRkRRU3hET3p0clFrRk1iVUpoTEVraUxDSm1hV3hsSWpvaWJHbGlMMmx1WkdWNExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKc2FXNXJaV1JzYVhOMFhDSXNJRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lteHBibXRsWkd4cGMzUmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2liR2x1YTJWa2JHbHpkRndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSNWNHVnZaaUJ6Wld4bUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lITmxiR1lnT2lCMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN1hHNGdYSFJjZEZ4MFhIUmpiMjVtYVdkMWNtRmliR1U2SUdaaGJITmxMRnh1SUZ4MFhIUmNkRngwWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3hjYmlCY2RGeDBYSFJjZEdkbGREb2daMlYwZEdWeVhHNGdYSFJjZEZ4MGZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnTkdNME1UVTFZelUxWkRFM1pEQXlOVGd3T1RnaUxDSnBiWEJ2Y25RZ1RtOWtaU0JtY205dElGd2lMaTlPYjJSbFhDSTdYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZENCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0dGeWNtRjVLWHRjYmx4MFhIUjBhR2x6TG5CcGRtOTBJRDBnYm5Wc2JEdGNibHgwWEhSMGFHbHpMbWhsWVdRZ1BTQnVkV3hzTzF4dVhIUmNkSFJvYVhNdWRHRnBiQ0E5SUc1MWJHdzdYRzVjZEZ4MGRHaHBjeTVzWlc1bmRHZ2dQU0F3TzF4dVhIUmNkR0Z5Y21GNUlDWW1JSFJvYVhNdVkzSmxZWFJsS0dGeWNtRjVLVHRjYmx4MGZWeHVmVnh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWFXNXpaWEowSUQwZ1puVnVZM1JwYjI0b1pXeGxiV1Z1ZENsN1hHNWNkR052Ym5OMElHNWxkMDV2WkdVZ1BTQnVaWGNnVG05a1pTaGxiR1Z0Wlc1MEtUdGNibHgwZEdocGN5NXNaVzVuZEdnckt6dGNibHh1WEhSc1pYUWdZM1Z5Y21WdWRDd2dibVY0ZER0Y2JseHVYSFJwWmlnaGRHaHBjeTV3YVhadmRDbDdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5Qm1hWEp6ZENCbGJHVnRaVzUwWEc1Y2RGeDBkR2hwY3k1d2FYWnZkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBkR2hwY3k1b1pXRmtJRDBnYm1WM1RtOWtaVHRjYmx4MGZTQmxiSE5sSUdsbUtIUm9hWE11Y0dsMmIzUXVibVY0ZENsN0lDOHZJR2x1YzJWeWRHbHVaeUJwYmlCdGFXUmtiR1ZjYmx4dVhIUmNkR04xY25KbGJuUWdQU0IwYUdsekxuQnBkbTkwTzF4dVhIUmNkRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRN1hHNWNibHgwWEhSdVpYZE9iMlJsTG01bGVIUWdQU0JqZFhKeVpXNTBMbTVsZUhRN1hHNWNkRngwYm1WM1RtOWtaUzV3Y21WMklEMGdZM1Z5Y21WdWREdGNibHh1WEhSY2RHTjFjbkpsYm5RdWJtVjRkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBibVY0ZEM1d2NtVjJJRDBnYm1WM1RtOWtaVHRjYmx4dVhHNWNkRngwZEdocGN5NXdhWFp2ZENBOUlHNWxkMDV2WkdVN1hHNWNkSDBnWld4elpTQjdJQzh2SUdsdWMyVnlkR2x1WnlCaGN5QnNZWE4wSUdWc1pXMWxiblJjYmx4MFhIUmpkWEp5Wlc1MElEMGdkR2hwY3k1d2FYWnZkRHRjYmx4MFhIUmpkWEp5Wlc1MExtNWxlSFFnUFNCdVpYZE9iMlJsTzF4dVhIUmNkRzVsZDA1dlpHVXVjSEpsZGlBOUlHTjFjbkpsYm5RN1hHNWNibHgwWEhSMGFHbHpMbkJwZG05MElEMGdibVYzVG05a1pUdGNibHgwWEhSMGFHbHpMblJoYVd3Z1BTQnVaWGRPYjJSbE8xeHVYSFI5WEc1Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1emFHbG1kRkJwZG05MElEMGdablZ1WTNScGIyNG9jMmhwWm5RcGUxeHVYSFJzWlhRZ1kzVnljbVZ1ZENBOUlIUm9hWE11Y0dsMmIzUTdYRzVjYmx4MGJHVjBJSEpwWjJoMFUyaHBablE3WEc1Y2RHbG1LSE5vYVdaMElENDlJREFwZTF4dVhIUmNkSEpwWjJoMFUyaHBablFnUFNCMGNuVmxPMXh1WEhSOVhHNWNibHgwZDJocGJHVW9jMmhwWm5RZ0lUMDlJREFwZTF4dVhIUmNkR2xtS0hKcFoyaDBVMmhwWm5RcGUxeHVYSFJjZEZ4MFkzVnljbVZ1ZENBOUlHTjFjbkpsYm5RdWJtVjRkRHRjYmx4MFhIUmNkQ2hqZFhKeVpXNTBJRDA5UFNCMGFHbHpMblJoYVd3cElEOGdLSE5vYVdaMElEMGdNQ2tnT2lCemFHbG1kQzB0TzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXdjbVYyTzF4dVhIUmNkRngwS0dOMWNuSmxiblFnUFQwOUlIUm9hWE11YUdWaFpDa2dQeUFvYzJocFpuUWdQU0F3S1NBNklITm9hV1owS3lzN1hHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGRHaHBjeTV3YVhadmRDQTlJR04xY25KbGJuUTdYRzVjYmx4MGNtVjBkWEp1SUhSb2FYTXVjR2wyYjNRN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWMyaHBablJRYVhadmRGUnZTR1ZoWkNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEhSb2FYTXVjR2wyYjNRZ1BTQjBhR2x6TG1obFlXUTdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVjMmhwWm5SUWFYWnZkRlJ2VkdGcGJDQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RIUm9hWE11Y0dsMmIzUWdQU0IwYUdsekxuUmhhV3c3WEc1OU8xeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1WTNKbFlYUmxJRDBnWm5WdVkzUnBiMjRvWVhKeVlYa3BlMXh1WEhSaGNuSmhlUzV0WVhBb0tHVnNaVzFsYm5RcFBUNTdYRzVjZEZ4MGRHaHBjeTVwYm5ObGNuUW9aV3hsYldWdWRDazdYRzVjZEgwcFhHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWRISmhkbVZ5YzJVZ1BTQm1kVzVqZEdsdmJpaGpZV3hzWW1GamF5d2djbWxuYUhSVWIweGxablFwZTF4dVhIUnNaWFFnWTNWeWNtVnVkQ0E5SUhKcFoyaDBWRzlNWldaMElEOGdkR2hwY3k1MFlXbHNJRG9nZEdocGN5NW9aV0ZrTzF4dVhIUjNhR2xzWlNoamRYSnlaVzUwS1h0Y2JseDBYSFJqWVd4c1ltRmpheWhqZFhKeVpXNTBMbVZzWlcxbGJuUXBPMXh1WEhSY2RHTjFjbkpsYm5RZ1BTQnlhV2RvZEZSdlRHVm1kQ0EvSUdOMWNuSmxiblF1Y0hKbGRpQTZJR04xY25KbGJuUXVibVY0ZER0Y2JseDBmVnh1ZlR0Y2JseHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1ZEc5QmNuSmhlU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkR052Ym5OMElHRnljbUY1SUQwZ1cxMDdYRzVjZEhSb2FYTXVkSEpoZG1WeWMyVW9LR1ZzWlcxbGJuUXBQVDU3WEc1Y2RGeDBZWEp5WVhrdWNIVnphQ2hsYkdWdFpXNTBLVHRjYmx4MGZTbGNibHgwY21WMGRYSnVJR0Z5Y21GNU8xeHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtZGxkRkJwZG05MFJXeGxiV1Z1ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdsbUtIUm9hWE11Y0dsMmIzUXBlMXh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbkJwZG05MExtVnNaVzFsYm5RN1hHNWNkSDFjYmx4MGNtVjBkWEp1SUc1MWJHdzdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVibVY0ZENBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEdOdmJuTjBJRzVsZUhRZ1BTQjBhR2x6TG5CcGRtOTBMbTVsZUhRZ1B5QjBhR2x6TG5CcGRtOTBMbTVsZUhRZ09pQWdkR2hwY3k1d2FYWnZkRHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJRzVsZUhRN1hHNWNkSEpsZEhWeWJpQnVaWGgwTzF4dWZUdGNibHh1VUdsMmIzUmxaRXhwYm10bFpFeHBjM1F1Y0hKdmRHOTBlWEJsTG5CeVpYWWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUmpiMjV6ZENCd2NtVjJJRDBnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRDhnZEdocGN5NXdhWFp2ZEM1d2NtVjJJRG9nSUhSb2FYTXVjR2wyYjNRN1hHNWNkSFJvYVhNdWNHbDJiM1FnUFNCd2NtVjJPMXh1WEhSeVpYUjFjbTRnY0hKbGRqdGNibjA3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJsdVpHVjRMbXB6SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUbTlrWlh0Y2JseDBZMjl1YzNSeWRXTjBiM0lvWld4bGJXVnVkQ2w3WEc1Y2RGeDBkR2hwY3k1bGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZER0Y2JseDBYSFIwYUdsekxtNWxlSFFnUFNCdWRXeHNPMXh1WEhSY2RIUm9hWE11Y0hKbGRpQTlJRzUxYkd3N1hHNWNkSDFjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlRtOWtaUzVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9waXZvdGVkLWxpbmtlZC1saXN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=