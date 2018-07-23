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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODdmZWUxZDhhYjRkYzQxMDcwOSIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJvbGRPYmoiLCJuZXdPYmoiLCJvbGRPYmpUeXBlIiwibmV3T2JqVHlwZSIsIk51bWJlciIsIkRhdGUiLCJBcnJheSIsIk9iamVjdCIsInN0cmluZ0NvbXBhcmUiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDYXNlU2Vuc2l0aXZlIiwiU3RyaW5nIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZXN1bHQiLCJsb2NhbGVDb21wYXJlIiwibnVtYmVyQ29tcGFyZSIsImlzTmFOIiwiZGF0ZUNvbXBhcmUiLCJvbGRUaW1lIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJhcnJheUNvbXBhcmUiLCJjb21wYXJpc29uVmFsdWUiLCJvbGRPYmpMZW5ndGgiLCJsZW5ndGgiLCJuZXdPYmpMZW5ndGgiLCJpIiwib2JqZWN0Q29tcGFyZSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJpcyIsIm9iaiIsIlR5cGUiLCJCb29sZWFuIiwiaXNBcnJheSIsImRpZmYiLCJjb21wYXJlZFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFDQTtBQUNJLFFBQUlELFdBQVdDLE1BQWYsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJRCxVQUFVLElBQWQsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJQyxVQUFVLElBQWQsRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixRQUFPQyxvQkFBb0JGLE1BQXBCLHlDQUFvQkEsTUFBcEIsQ0FBUDtBQUNBLFFBQU9HLG9CQUFvQkYsTUFBcEIseUNBQW9CQSxNQUFwQixDQUFQOztBQUVBLFFBQUlDLGVBQWVDLFVBQW5CLEVBQ0ksT0FBTyw2QkFBY0QsVUFBZCxFQUEwQkMsVUFBMUIsQ0FBUDs7QUFFSixRQUFJRCxlQUFlLFNBQW5CLEVBQ0ksT0FBTyw2QkFBY0UsT0FBT0osTUFBUCxDQUFkLEVBQThCSSxPQUFPSCxNQUFQLENBQTlCLENBQVA7QUFDSixRQUFJQyxlQUFlLFFBQW5CLEVBQ0ksT0FBTyw2QkFBY0YsTUFBZCxFQUFzQkMsTUFBdEIsQ0FBUDtBQUNKLFFBQUlDLGVBQWUsUUFBbkIsRUFDSSxPQUFPLDZCQUFjRixNQUFkLEVBQXNCQyxNQUF0QixDQUFQOztBQUVKLFFBQUlDLGVBQWUsUUFBbkIsRUFDSSxPQUFPLENBQVA7O0FBRUosUUFBSSxrQkFBR0YsTUFBSCxFQUFXSyxJQUFYLENBQUosRUFDSSxPQUFPLDJCQUFZTCxNQUFaLEVBQW9CQyxNQUFwQixDQUFQO0FBQ0osUUFBSSxrQkFBR0QsTUFBSCxFQUFXTSxLQUFYLENBQUosRUFDSSxPQUFPLDRCQUFhTixNQUFiLEVBQXFCQyxNQUFyQixFQUE0QkYsT0FBNUIsQ0FBUDtBQUNKLFFBQUksa0JBQUdDLE1BQUgsRUFBV08sTUFBWCxDQUFKLEVBQ0ksT0FBTyw2QkFBY1AsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEJGLE9BQTlCLENBQVA7O0FBRUosV0FBTyxDQUFQO0FBQ0g7O2tCQUVjQSxPOzs7Ozs7Ozs7Ozs7QUMxQ2Y7QUFDQSxTQUFTUyxhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsUUFBakMsRUFBMkNDLGVBQTNDLEVBQTREO0FBQ3hEQSxzQkFBa0IsT0FBT0EsZUFBUCxLQUEyQixXQUEzQixHQUF5Q0EsZUFBekMsR0FBMkQsS0FBN0U7O0FBRUEsUUFBSUYsWUFBWSxJQUFaLElBQW9CQyxZQUFZLElBQXBDLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUQsWUFBWSxJQUFoQixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlDLFlBQVksSUFBaEIsRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixRQUFJQyxlQUFKLEVBQXFCO0FBQ2pCRixtQkFBV0csT0FBT0gsUUFBUCxFQUFpQkksaUJBQWpCLEVBQVg7QUFDQUgsbUJBQVdFLE9BQU9GLFFBQVAsRUFBaUJHLGlCQUFqQixFQUFYO0FBQ0g7O0FBRUQsUUFBSUMsU0FBU0YsT0FBT0gsUUFBUCxFQUFpQk0sYUFBakIsQ0FBK0JMLFFBQS9CLENBQWI7QUFDQSxRQUFJSSxTQUFTLENBQUMsQ0FBZCxFQUNJQSxTQUFTLENBQUMsQ0FBVixDQURKLEtBRUssSUFBSUEsU0FBUyxDQUFiLEVBQ0RBLFNBQVMsQ0FBVDs7QUFFSixXQUFPQSxNQUFQO0FBQ0g7O2tCQUVjTixhOzs7Ozs7Ozs7Ozs7O0FDeEJmLFNBQVNRLGFBQVQsQ0FBdUJQLFFBQXZCLEVBQWlDQyxRQUFqQyxFQUEyQzs7QUFFdkMsUUFBSU8sTUFBTVIsUUFBTixLQUFtQlEsTUFBTVAsUUFBTixDQUF2QixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlPLE1BQU1SLFFBQU4sQ0FBSixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlRLE1BQU1QLFFBQU4sQ0FBSixFQUNJLE9BQU8sQ0FBQyxDQUFSOztBQUVKLFFBQUlELFdBQVdDLFFBQWYsRUFDSSxPQUFPLENBQUMsQ0FBUjtBQUNKLFFBQUlELFdBQVdDLFFBQWYsRUFDSSxPQUFPLENBQVA7QUFDSixXQUFPLENBQVA7QUFDSDs7a0JBRWNNLGE7Ozs7Ozs7Ozs7Ozs7QUNoQmYsU0FBU0UsV0FBVCxDQUFxQlQsUUFBckIsRUFBK0JDLFFBQS9CLEVBQXlDOztBQUVyQyxRQUFJRCxhQUFhLElBQWIsSUFBcUJDLGFBQWEsSUFBdEMsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJRCxhQUFhLElBQWpCLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUMsYUFBYSxJQUFqQixFQUNJLE9BQU8sQ0FBQyxDQUFSOztBQUVKLFFBQUtTLFVBQVVWLFNBQVNXLE9BQVQsRUFBZjtBQUNBLFFBQUtDLFVBQVVYLFNBQVNVLE9BQVQsRUFBZjtBQUNBLFFBQUlELFVBQVVFLE9BQWQsRUFDSSxPQUFPLENBQUMsQ0FBUjtBQUNKLFFBQUlGLFVBQVVFLE9BQWQsRUFDSSxPQUFPLENBQVA7O0FBRUosUUFBSUosTUFBTUUsT0FBTixLQUFrQkYsTUFBTUksT0FBTixDQUF0QixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlKLE1BQU1FLE9BQU4sQ0FBSixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlGLE1BQU1JLE9BQU4sQ0FBSixFQUNJLE9BQU8sQ0FBQyxDQUFSOztBQUVKLFdBQU8sQ0FBUDtBQUNIOztrQkFFY0gsVzs7Ozs7Ozs7Ozs7OztBQzNCZjs7Ozs7O0FBRUEsU0FBU0ksWUFBVCxDQUFzQnRCLE1BQXRCLEVBQThCQyxNQUE5QixFQUNBO0FBQ0ksUUFBSUQsV0FBV0MsTUFBZixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlELFVBQVUsSUFBZCxFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlDLFVBQVUsSUFBZCxFQUNJLE9BQU8sQ0FBQyxDQUFSOztBQUVKLFFBQUlzQix3QkFBSjtBQUNBLFFBQUtDLGVBQWV4QixPQUFPeUIsTUFBM0I7QUFDQSxRQUFLQyxlQUFlekIsT0FBT3dCLE1BQTNCO0FBQ0EsUUFBSUQsZUFBZUUsWUFBbkIsRUFDSSxPQUFPLENBQUMsQ0FBUjtBQUNKLFFBQUlGLGVBQWVFLFlBQW5CLEVBQ0ksT0FBTyxDQUFQOztBQUVKLFNBQUssSUFBS0MsSUFBSSxDQUFkLEVBQWlCQSxJQUFJSCxZQUFyQixFQUFtQ0csR0FBbkMsRUFBd0M7QUFDcEM7QUFDQUosMEJBQWtCLHVCQUFRdkIsT0FBTzJCLENBQVAsQ0FBUixFQUFtQjFCLE9BQU8wQixDQUFQLENBQW5CLENBQWxCO0FBQ0EsWUFBSUosbUJBQW1CLENBQXZCLEVBQ0ksT0FBT0EsZUFBUDtBQUNQO0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O2tCQUVjRCxZOzs7Ozs7Ozs7Ozs7O0FDNUJmOzs7Ozs7QUFFQSxTQUFTTSxhQUFULENBQXVCNUIsTUFBdkIsRUFBK0JDLE1BQS9CLEVBQ0E7QUFDSSxRQUFJRCxXQUFXQyxNQUFmLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUQsVUFBVSxJQUFkLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUMsVUFBVSxJQUFkLEVBQ0ksT0FBTyxDQUFDLENBQVI7O0FBR0osUUFBSTRCLGFBQUo7QUFDQSxTQUFLQSxJQUFMLElBQWE3QixNQUFiLEVBQ0E7QUFDSSxZQUFJLENBQUNDLE9BQU82QixjQUFQLENBQXNCRCxJQUF0QixDQUFMLEVBQ0ksT0FBTyxDQUFDLENBQVI7QUFDUDs7QUFFRCxRQUFJTix3QkFBSjtBQUNBLFNBQUtNLElBQUwsSUFBYTVCLE1BQWIsRUFDQTtBQUNJLFlBQUksQ0FBQ0QsT0FBTzhCLGNBQVAsQ0FBc0JELElBQXRCLENBQUwsRUFDSSxPQUFPLENBQVA7QUFDSjtBQUNBTiwwQkFBa0IsdUJBQVF2QixPQUFPNkIsSUFBUCxDQUFSLEVBQXNCNUIsT0FBTzRCLElBQVAsQ0FBdEIsQ0FBbEI7QUFDQSxZQUFJTixvQkFBb0IsQ0FBeEIsRUFDSSxPQUFPQSxlQUFQO0FBQ1A7QUFDRCxXQUFPLENBQVA7QUFDSDs7a0JBRWNLLGE7Ozs7Ozs7Ozs7Ozs7O0FDaENmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHWUcsTztRQUNSaEMsTztRQUNBUyxhO1FBQ0FRLGE7UUFDQUUsVztRQUNBSSxZO1FBQ0FNLGE7Ozs7Ozs7Ozs7OztBQ2ZKLFNBQVNJLEVBQVQsQ0FBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUI7QUFDbkIsUUFBSUQsT0FBTyxJQUFQLElBQWVBLE9BQU8sSUFBMUIsRUFDSSxPQUFPLEtBQVA7QUFDSixRQUFJQSxlQUFlQyxJQUFuQixFQUNJLE9BQU8sSUFBUDtBQUNKLFFBQUlBLFNBQVMzQixNQUFiLEVBQ0ksT0FBTyxJQUFQOztBQUVKLFFBQUksT0FBTzBCLEdBQVAsS0FBZ0IsUUFBcEIsRUFDSSxPQUFPQyxTQUFTdEIsTUFBaEI7QUFDSixRQUFJLE9BQU9xQixHQUFQLEtBQWdCLFFBQXBCLEVBQ0ksT0FBT0MsU0FBUzlCLE1BQWhCO0FBQ0osUUFBSSxPQUFPNkIsR0FBUCxLQUFnQixTQUFwQixFQUNJLE9BQU9DLFNBQVNDLE9BQWhCO0FBQ0osUUFBSUQsU0FBUzVCLEtBQWIsRUFDSSxPQUFPQSxNQUFNOEIsT0FBTixDQUFjSCxHQUFkLENBQVA7O0FBRUosV0FBTyxLQUFQO0FBQ0g7O2tCQUVjRCxFOzs7Ozs7Ozs7Ozs7O0FDcEJmOzs7Ozs7QUFFQTtBQUNBO0FBQ0EsU0FBU0ssSUFBVCxDQUFjQyxhQUFkLEVBQTZCQyxLQUE3QixFQUFtQztBQUNsQyxLQUFNaEIsa0JBQW1CLHVCQUFRZSxhQUFSLEVBQXVCQyxLQUF2QixDQUF6Qjs7QUFFQSxLQUFHaEIsb0JBQW9CLENBQXZCLEVBQXlCO0FBQ3hCZ0IsVUFBUUMsU0FBUjtBQUNBOztBQUVFLFFBQU9ELEtBQVA7QUFDSDs7a0JBRWNGLEkiLCJmaWxlIjoibGliL2RpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ4N2ZlZTFkOGFiNGRjNDEwNzA5IiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9zdHJpbmdDb21wYXJlJ1xuaW1wb3J0IG51bWJlckNvbXBhcmUgZnJvbSAnLi9udW1iZXJDb21wYXJlJ1xuaW1wb3J0IGRhdGVDb21wYXJlIGZyb20gJy4vZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vYXJyYXlDb21wYXJlJ1xuaW1wb3J0IG9iamVjdENvbXBhcmUgZnJvbSAnLi9vYmplY3RDb21wYXJlJ1xuaW1wb3J0IGlzIGZyb20gJy4vLi4vaXMnXG5cbmZ1bmN0aW9uIGNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgY29uc3QgIG9sZE9ialR5cGUgPSB0eXBlb2Yob2xkT2JqKTtcbiAgICBjb25zdCAgbmV3T2JqVHlwZSA9IHR5cGVvZihuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09IG5ld09ialR5cGUpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9ialR5cGUsIG5ld09ialR5cGUpO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUoTnVtYmVyKG9sZE9iaiksIE51bWJlcihuZXdPYmopKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXMob2xkT2JqLCBEYXRlKSlcbiAgICAgICAgcmV0dXJuIGRhdGVDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAoaXMob2xkT2JqLCBBcnJheSkpXG4gICAgICAgIHJldHVybiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmosY29tcGFyZSk7XG4gICAgaWYgKGlzKG9sZE9iaiwgT2JqZWN0KSlcbiAgICAgICAgcmV0dXJuIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2NvbXBhcmUuanMiLCIvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKVxuICAgICAgICByZXN1bHQgPSAtMTtcbiAgICBlbHNlIGlmIChyZXN1bHQgPiAxKVxuICAgICAgICByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nQ29tcGFyZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvc3RyaW5nQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9udW1iZXJDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBkYXRlQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHZhciAgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRlQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIHZhciAgb2xkT2JqTGVuZ3RoID0gb2xkT2JqLmxlbmd0aDtcbiAgICB2YXIgIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cblxuICAgIGxldCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBvbGRPYmopXG4gICAge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIGZvciAocHJvcCBpbiBuZXdPYmopXG4gICAge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtwcm9wXSwgbmV3T2JqW3Byb3BdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9vYmplY3RDb21wYXJlLmpzIiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9jb21wYXJlL3N0cmluZ0NvbXBhcmUnXG5pbXBvcnQgbnVtYmVyQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvbnVtYmVyQ29tcGFyZSdcbmltcG9ydCBkYXRlQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vY29tcGFyZS9hcnJheUNvbXBhcmUnXG5pbXBvcnQgb2JqZWN0Q29tcGFyZSBmcm9tICcuL2NvbXBhcmUvb2JqZWN0Q29tcGFyZSdcbmltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9jb21wYXJlJ1xuaW1wb3J0IGRpZmYgZnJvbSAnLi9kaWZmJ1xuXG5leHBvcnQge1xuICAgIGRpZmYgYXMgZGVmYXVsdCxcbiAgICBjb21wYXJlLFxuICAgIHN0cmluZ0NvbXBhcmUsXG4gICAgbnVtYmVyQ29tcGFyZSxcbiAgICBkYXRlQ29tcGFyZSxcbiAgICBhcnJheUNvbXBhcmUsXG4gICAgb2JqZWN0Q29tcGFyZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IE51bWJlcjtcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaXMuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUvY29tcGFyZSc7XG5cbi8vIElmIHRoZXJlIGlzIG5vIGNoYW5nZSByZXR1cm5zIHVuZGVmaW5lZFxuLy8gaWYgdGhlcmUgaXMgYSBjaGFuZ2UgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlXG5mdW5jdGlvbiBkaWZmKGNvbXBhcmVkVmFsdWUsIHZhbHVlKXtcblx0Y29uc3QgY29tcGFyaXNvblZhbHVlID0gIGNvbXBhcmUoY29tcGFyZWRWYWx1ZSwgdmFsdWUpO1xuXG5cdGlmKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCl7XG5cdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlmZjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZGlmZi5qcyJdLCJzb3VyY2VSb290IjoiIn0=

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

	if (objectVerifier) {
		this.objectVerifier = objectVerifier;
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZGMxOWFiNWZkODU4MjE5MjAwZSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9EaWZmTG9nZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJMb2dnZXIiLCJEaWZmTG9nZ2VyIiwiYXBwbHlEaWZmIiwic3RlcHMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJ1bmRvTG9nIiwicmVkb0xvZyIsImdldHRlciIsInNldHRlciIsInByZXZTdGF0ZSIsImFic1N0ZXBzIiwiTWF0aCIsImFicyIsInN0ZXBzUmVtYWluaW5nIiwibWluIiwibGVuZ3RoIiwibG9nRW50cnkiLCJkaWZmIiwicG9wIiwidW5zaGlmdCIsInByZXYiLCJzaGlmdCIsInB1c2giLCJuZXh0IiwidmFsdWUiLCJkaWZmQXBwbGllZCIsImNhbGwiLCJzYXZlQ2FsbGJhY2siLCJkaWZmTWV0aG9kIiwibmV4dElkIiwic2F2ZURpZmZDYWxsYmFjayIsImVuYWJsZSIsInByb3RvdHlwZSIsInNldENvbnRleHQiLCJjb25zb2xlIiwid2FybiIsInNldFNhdmVDYWxsYmFjayIsInJlbW92ZVNhdmVDYWxsYmFjayIsInVuZG8iLCJpc05hTiIsInJlZG8iLCJzYXZlIiwibG9nIiwiZ2V0RGlmZiIsInN0YXRlIiwiZGlmZk9iamVjdCIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJMb2dFbnRyeSIsIm5leHRMb2ciLCJpZCIsInByZUluc2VydCIsImN1cnJlbnRMb2ciLCJuZXdMb2ciLCJuZXdMb2dGb3J3YXJkRGlmZiIsImVsZW1lbnQiLCJmb3J3YXJkIiwibmV3TG9nQmFja3dhcmREaWZmIiwiYmFja3dhcmQiLCJuZXh0TG9nRm9yd2FyZERpZmYiLCJuZXh0TG9nQmFja3dhcmREaWZmIiwibmV3Q29tYmluZWRGb3J3YXJkRGlmZiIsIm9iamVjdFZlcmlmaWVyIiwibmV3Q29tYmluZWRCYWNrd2FyZERpZmYiLCJqdW1wIiwiZGlyZWN0aW9uIiwibG9nTGlzdCIsImJhc2VEaWZmIiwicGl2b3QiLCJzaGlmdFBpdm90IiwiZm9yd2FyZEJhY2t3YXJkRGlmZiIsImRpZmZTdGF0ZSIsImRpZmZWYWx1ZSIsImlzTG9nZ2FibGVDb2xsZWN0aW9uT2JqZWN0Iiwic2hpZnRBbmRBcHBseUxvZyIsInR5cGUiLCJkaWZmTG9nZ2VySW5zdGFuY2UiLCJ1cGRhdGVMYXN0QWN0aXZlU3RhdGUiLCJsYXN0QWN0aXZlU3RhdGUiLCJnZXRTdGF0ZSIsImVycm9yIiwiUGl2b3RlZExpbmtlZExpc3QiLCJiaW5kIiwiaW5zZXJ0IiwiZ2V0Q3VycmVudExvZyIsImdldFBpdm90RWxlbWVudCIsImNsZWFyIiwicmVzZXQiLCJjb21iaW5lRGlmZiIsImNvcHlKc29uIiwianNvbiIsInN0cmluZ0pzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJhcnJheVRvT2JqZWN0IiwiYXJyYXkiLCJpZE5hbWUiLCJyZXBsYWNlV2l0aElkIiwicmV0dXJuSWRzIiwib2JqZWN0IiwiaWRzIiwiaW5kZXgiLCJjaGlsZCIsIm9iaiIsImtleXMiLCJkaWZmVG9BZGQiLCJpc0NvbGxlY3Rpb25PYmplY3QiLCJiYXNlVHlwZSIsImRpZmZUeXBlIiwiYmFzZUxvb2t1cCIsImFycmF5QXNPYmoiLCJkaWZmTG9va1VwIiwiZGlmZlRvQWRkS2V5cyIsImkiLCJvbGRTdGF0ZSIs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QVksY0FBWixFQUE0QjhELElBQUloRixLQUFoQzs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJmaWxlIjoiZGVtby9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsb2dnZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibG9nZ2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmRjMTlhYjVmZDg1ODIxOTIwMGUiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfaXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX2lzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBvbGRPYmpUeXBlID0gdHlwZW9mIG9sZE9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2xkT2JqKTtcbiAgICB2YXIgbmV3T2JqVHlwZSA9IHR5cGVvZiBuZXdPYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSkgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJykgcmV0dXJuICgwLCBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJykgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKSByZXR1cm4gMTtcblxuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIERhdGUpKSByZXR1cm4gKDAsIF9kYXRlQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIEFycmF5KSkgcmV0dXJuICgwLCBfYXJyYXlDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgT2JqZWN0KSkgcmV0dXJuICgwLCBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSkgcmVzdWx0ID0gLTE7ZWxzZSBpZiAocmVzdWx0ID4gMSkgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ0NvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSkgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG51bWJlckNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKSByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkYXRlQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgY29tcGFyaXNvblZhbHVlID0gdm9pZCAwO1xuICAgIHZhciBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKSByZXR1cm4gMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFycmF5Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIHByb3AgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iaikge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG5ld09iaikge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9iamVjdENvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBleHBvcnRzLmFycmF5Q29tcGFyZSA9IGV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBleHBvcnRzLm51bWJlckNvbXBhcmUgPSBleHBvcnRzLnN0cmluZ0NvbXBhcmUgPSBleHBvcnRzLmNvbXBhcmUgPSBleHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RyaW5nQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfc3RyaW5nQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdDb21wYXJlKTtcblxudmFyIF9udW1iZXJDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9udW1iZXJDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlckNvbXBhcmUpO1xuXG52YXIgX2RhdGVDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9kYXRlQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRlQ29tcGFyZSk7XG5cbnZhciBfYXJyYXlDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hcnJheUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlDb21wYXJlKTtcblxudmFyIF9vYmplY3RDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9vYmplY3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdENvbXBhcmUpO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbnZhciBfZGlmZiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfZGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaWZmKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RpZmYyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBhcmUgPSBfY29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5udW1iZXJDb21wYXJlID0gX251bWJlckNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmRhdGVDb21wYXJlID0gX2RhdGVDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5hcnJheUNvbXBhcmUgPSBfYXJyYXlDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3RDb21wYXJlID0gX29iamVjdENvbXBhcmUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSkgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gaXM7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIElmIHRoZXJlIGlzIG5vIGNoYW5nZSByZXR1cm5zIHVuZGVmaW5lZFxuLy8gaWYgdGhlcmUgaXMgYSBjaGFuZ2UgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlXG5mdW5jdGlvbiBkaWZmKGNvbXBhcmVkVmFsdWUsIHZhbHVlKSB7XG5cdHZhciBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKGNvbXBhcmVkVmFsdWUsIHZhbHVlKTtcblxuXHRpZiAoY29tcGFyaXNvblZhbHVlID09PSAwKSB7XG5cdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRpZmY7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTBPRGRtWldVeFpEaGhZalJrWXpReE1EY3dPU0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzlqYjIxd1lYSmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzlrWVhSbFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWhjbkpoZVVOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmIySnFaV04wUTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwybHpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5a2FXWm1MbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZiWEJoY21VaUxDSnZiR1JQWW1vaUxDSnVaWGRQWW1vaUxDSnZiR1JQWW1wVWVYQmxJaXdpYm1WM1QySnFWSGx3WlNJc0lrNTFiV0psY2lJc0lrUmhkR1VpTENKQmNuSmhlU0lzSWs5aWFtVmpkQ0lzSW5OMGNtbHVaME52YlhCaGNtVWlMQ0p2YkdSV1lXeDFaU0lzSW01bGQxWmhiSFZsSWl3aWFYTkRZWE5sVTJWdWMybDBhWFpsSWl3aVUzUnlhVzVuSWl3aWRHOU1iMk5oYkdWTWIzZGxja05oYzJVaUxDSnlaWE4xYkhRaUxDSnNiMk5oYkdWRGIyMXdZWEpsSWl3aWJuVnRZbVZ5UTI5dGNHRnlaU0lzSW1selRtRk9JaXdpWkdGMFpVTnZiWEJoY21VaUxDSnZiR1JVYVcxbElpd2laMlYwVkdsdFpTSXNJbTVsZDFScGJXVWlMQ0poY25KaGVVTnZiWEJoY21VaUxDSmpiMjF3WVhKcGMyOXVWbUZzZFdVaUxDSnZiR1JQWW1wTVpXNW5kR2dpTENKc1pXNW5kR2dpTENKdVpYZFBZbXBNWlc1bmRHZ2lMQ0pwSWl3aWIySnFaV04wUTI5dGNHRnlaU0lzSW5CeWIzQWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbVJsWm1GMWJIUWlMQ0pwY3lJc0ltOWlhaUlzSWxSNWNHVWlMQ0pDYjI5c1pXRnVJaXdpYVhOQmNuSmhlU0lzSW1ScFptWWlMQ0pqYjIxd1lYSmxaRlpoYkhWbElpd2lkbUZzZFdVaUxDSjFibVJsWm1sdVpXUWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3T3pzN1FVTTNSRUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3UVVGRlFTeFRRVUZUUVN4UFFVRlVMRU5CUVdsQ1F5eE5RVUZxUWl4RlFVRjVRa01zVFVGQmVrSXNSVUZEUVR0QlFVTkpMRkZCUVVsRUxGZEJRVmRETEUxQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlJDeFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGRlNpeFJRVUZQUXl4dlFrRkJiMEpHTEUxQlFYQkNMSGxEUVVGdlFrRXNUVUZCY0VJc1EwRkJVRHRCUVVOQkxGRkJRVTlITEc5Q1FVRnZRa1lzVFVGQmNFSXNlVU5CUVc5Q1FTeE5RVUZ3UWl4RFFVRlFPenRCUVVWQkxGRkJRVWxETEdWQlFXVkRMRlZCUVc1Q0xFVkJRMGtzVDBGQlR5dzJRa0ZCWTBRc1ZVRkJaQ3hGUVVFd1FrTXNWVUZCTVVJc1EwRkJVRHM3UVVGRlNpeFJRVUZKUkN4bFFVRmxMRk5CUVc1Q0xFVkJRMGtzVDBGQlR5dzJRa0ZCWTBVc1QwRkJUMG9zVFVGQlVDeERRVUZrTEVWQlFUaENTU3hQUVVGUFNDeE5RVUZRTEVOQlFUbENMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eGxRVUZsTEZGQlFXNUNMRVZCUTBrc1QwRkJUeXcyUWtGQlkwWXNUVUZCWkN4RlFVRnpRa01zVFVGQmRFSXNRMEZCVUR0QlFVTktMRkZCUVVsRExHVkJRV1VzVVVGQmJrSXNSVUZEU1N4UFFVRlBMRFpDUVVGalJpeE5RVUZrTEVWQlFYTkNReXhOUVVGMFFpeERRVUZRT3p0QlFVVktMRkZCUVVsRExHVkJRV1VzVVVGQmJrSXNSVUZEU1N4UFFVRlBMRU5CUVZBN08wRkJSVW9zVVVGQlNTeHJRa0ZCUjBZc1RVRkJTQ3hGUVVGWFN5eEpRVUZZTEVOQlFVb3NSVUZEU1N4UFFVRlBMREpDUVVGWlRDeE5RVUZhTEVWQlFXOUNReXhOUVVGd1FpeERRVUZRTzBGQlEwb3NVVUZCU1N4clFrRkJSMFFzVFVGQlNDeEZRVUZYVFN4TFFVRllMRU5CUVVvc1JVRkRTU3hQUVVGUExEUkNRVUZoVGl4TlFVRmlMRVZCUVhGQ1F5eE5RVUZ5UWl4RlFVRTBRa1lzVDBGQk5VSXNRMEZCVUR0QlFVTktMRkZCUVVrc2EwSkJRVWRETEUxQlFVZ3NSVUZCVjA4c1RVRkJXQ3hEUVVGS0xFVkJRMGtzVDBGQlR5dzJRa0ZCWTFBc1RVRkJaQ3hGUVVGelFrTXNUVUZCZEVJc1JVRkJPRUpHTEU5QlFUbENMRU5CUVZBN08wRkJSVW9zVjBGQlR5eERRVUZRTzBGQlEwZzdPMnRDUVVWalFTeFBPenM3T3pzN096czdPenM3UVVNeFEyWTdRVUZEUVN4VFFVRlRVeXhoUVVGVUxFTkJRWFZDUXl4UlFVRjJRaXhGUVVGcFEwTXNVVUZCYWtNc1JVRkJNa05ETEdWQlFUTkRMRVZCUVRSRU8wRkJRM2hFUVN4elFrRkJhMElzVDBGQlQwRXNaVUZCVUN4TFFVRXlRaXhYUVVFelFpeEhRVUY1UTBFc1pVRkJla01zUjBGQk1rUXNTMEZCTjBVN08wRkJSVUVzVVVGQlNVWXNXVUZCV1N4SlFVRmFMRWxCUVc5Q1F5eFpRVUZaTEVsQlFYQkRMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVUXNXVUZCV1N4SlFVRm9RaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbERMRmxCUVZrc1NVRkJhRUlzUlVGRFNTeFBRVUZQTEVOQlFVTXNRMEZCVWpzN1FVRkZTaXhSUVVGSlF5eGxRVUZLTEVWQlFYRkNPMEZCUTJwQ1JpeHRRa0ZCVjBjc1QwRkJUMGdzVVVGQlVDeEZRVUZwUWtrc2FVSkJRV3BDTEVWQlFWZzdRVUZEUVVnc2JVSkJRVmRGTEU5QlFVOUdMRkZCUVZBc1JVRkJhVUpITEdsQ1FVRnFRaXhGUVVGWU8wRkJRMGc3TzBGQlJVUXNVVUZCU1VNc1UwRkJVMFlzVDBGQlQwZ3NVVUZCVUN4RlFVRnBRazBzWVVGQmFrSXNRMEZCSzBKTUxGRkJRUzlDTEVOQlFXSTdRVUZEUVN4UlFVRkpTU3hUUVVGVExFTkJRVU1zUTBGQlpDeEZRVU5KUVN4VFFVRlRMRU5CUVVNc1EwRkJWaXhEUVVSS0xFdEJSVXNzU1VGQlNVRXNVMEZCVXl4RFFVRmlMRVZCUTBSQkxGTkJRVk1zUTBGQlZEczdRVUZGU2l4WFFVRlBRU3hOUVVGUU8wRkJRMGc3TzJ0Q1FVVmpUaXhoT3pzN096czdPenM3T3pzN08wRkRlRUptTEZOQlFWTlJMR0ZCUVZRc1EwRkJkVUpRTEZGQlFYWkNMRVZCUVdsRFF5eFJRVUZxUXl4RlFVRXlRenM3UVVGRmRrTXNVVUZCU1U4c1RVRkJUVklzVVVGQlRpeExRVUZ0UWxFc1RVRkJUVkFzVVVGQlRpeERRVUYyUWl4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxQTEUxQlFVMVNMRkZCUVU0c1EwRkJTaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbFJMRTFCUVUxUUxGRkJRVTRzUTBGQlNpeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVWS0xGRkJRVWxFTEZkQlFWZERMRkZCUVdZc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqdEJRVU5LTEZGQlFVbEVMRmRCUVZkRExGRkJRV1lzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4WFFVRlBMRU5CUVZBN1FVRkRTRHM3YTBKQlJXTk5MR0U3T3pzN096czdPenM3T3pzN1FVTm9RbVlzVTBGQlUwVXNWMEZCVkN4RFFVRnhRbFFzVVVGQmNrSXNSVUZCSzBKRExGRkJRUzlDTEVWQlFYbERPenRCUVVWeVF5eFJRVUZKUkN4aFFVRmhMRWxCUVdJc1NVRkJjVUpETEdGQlFXRXNTVUZCZEVNc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUkN4aFFVRmhMRWxCUVdwQ0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VNc1lVRkJZU3hKUVVGcVFpeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVWS0xGRkJRVXRUTEZWQlFWVldMRk5CUVZOWExFOUJRVlFzUlVGQlpqdEJRVU5CTEZGQlFVdERMRlZCUVZWWUxGTkJRVk5WTEU5QlFWUXNSVUZCWmp0QlFVTkJMRkZCUVVsRUxGVkJRVlZGTEU5QlFXUXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOS0xGRkJRVWxHTEZWQlFWVkZMRTlCUVdRc1JVRkRTU3hQUVVGUExFTkJRVkE3TzBGQlJVb3NVVUZCU1Vvc1RVRkJUVVVzVDBGQlRpeExRVUZyUWtZc1RVRkJUVWtzVDBGQlRpeERRVUYwUWl4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxLTEUxQlFVMUZMRTlCUVU0c1EwRkJTaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEdMRTFCUVUxSkxFOUJRVTRzUTBGQlNpeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVWS0xGZEJRVThzUTBGQlVEdEJRVU5JT3p0clFrRkZZMGdzVnpzN096czdPenM3T3pzN096dEJRek5DWmpzN096czdPMEZCUlVFc1UwRkJVMGtzV1VGQlZDeERRVUZ6UW5SQ0xFMUJRWFJDTEVWQlFUaENReXhOUVVFNVFpeEZRVU5CTzBGQlEwa3NVVUZCU1VRc1YwRkJWME1zVFVGQlppeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRUxGVkJRVlVzU1VGQlpDeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRExGVkJRVlVzU1VGQlpDeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVWS0xGRkJRVWx6UWl4M1FrRkJTanRCUVVOQkxGRkJRVXRETEdWQlFXVjRRaXhQUVVGUGVVSXNUVUZCTTBJN1FVRkRRU3hSUVVGTFF5eGxRVUZsZWtJc1QwRkJUM2RDTEUxQlFUTkNPMEZCUTBFc1VVRkJTVVFzWlVGQlpVVXNXVUZCYmtJc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqdEJRVU5LTEZGQlFVbEdMR1ZCUVdWRkxGbEJRVzVDTEVWQlEwa3NUMEZCVHl4RFFVRlFPenRCUVVWS0xGTkJRVXNzU1VGQlMwTXNTVUZCU1N4RFFVRmtMRVZCUVdsQ1FTeEpRVUZKU0N4WlFVRnlRaXhGUVVGdFEwY3NSMEZCYmtNc1JVRkJkME03UVVGRGNFTTdRVUZEUVVvc01FSkJRV3RDTEhWQ1FVRlJka0lzVDBGQlR6SkNMRU5CUVZBc1EwRkJVaXhGUVVGdFFqRkNMRTlCUVU4d1FpeERRVUZRTEVOQlFXNUNMRU5CUVd4Q08wRkJRMEVzV1VGQlNVb3NiVUpCUVcxQ0xFTkJRWFpDTEVWQlEwa3NUMEZCVDBFc1pVRkJVRHRCUVVOUU8wRkJRMFFzVjBGQlR5eERRVUZRTzBGQlEwZzdPMnRDUVVWalJDeFpPenM3T3pzN096czdPenM3TzBGRE5VSm1PenM3T3pzN1FVRkZRU3hUUVVGVFRTeGhRVUZVTEVOQlFYVkNOVUlzVFVGQmRrSXNSVUZCSzBKRExFMUJRUzlDTEVWQlEwRTdRVUZEU1N4UlFVRkpSQ3hYUVVGWFF5eE5RVUZtTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVFzVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSMG9zVVVGQlNUUkNMR0ZCUVVvN1FVRkRRU3hUUVVGTFFTeEpRVUZNTEVsQlFXRTNRaXhOUVVGaUxFVkJRMEU3UVVGRFNTeFpRVUZKTEVOQlFVTkRMRTlCUVU4MlFpeGpRVUZRTEVOQlFYTkNSQ3hKUVVGMFFpeERRVUZNTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN1FVRkRVRHM3UVVGRlJDeFJRVUZKVGl4M1FrRkJTanRCUVVOQkxGTkJRVXROTEVsQlFVd3NTVUZCWVRWQ0xFMUJRV0lzUlVGRFFUdEJRVU5KTEZsQlFVa3NRMEZCUTBRc1QwRkJUemhDTEdOQlFWQXNRMEZCYzBKRUxFbEJRWFJDTEVOQlFVd3NSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTanRCUVVOQlRpd3dRa0ZCYTBJc2RVSkJRVkYyUWl4UFFVRlBOa0lzU1VGQlVDeERRVUZTTEVWQlFYTkNOVUlzVDBGQlR6UkNMRWxCUVZBc1EwRkJkRUlzUTBGQmJFSTdRVUZEUVN4WlFVRkpUaXh2UWtGQmIwSXNRMEZCZUVJc1JVRkRTU3hQUVVGUFFTeGxRVUZRTzBGQlExQTdRVUZEUkN4WFFVRlBMRU5CUVZBN1FVRkRTRHM3YTBKQlJXTkxMR0U3T3pzN096czdPenM3T3pzN08wRkRhRU5tT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3VVVGSFdVY3NUenRSUVVOU2FFTXNUenRSUVVOQlV5eGhPMUZCUTBGUkxHRTdVVUZEUVVVc1Z6dFJRVU5CU1N4Wk8xRkJRMEZOTEdFN096czdPenM3T3pzN096dEJRMlpLTEZOQlFWTkpMRVZCUVZRc1EwRkJXVU1zUjBGQldpeEZRVUZwUWtNc1NVRkJha0lzUlVGQmRVSTdRVUZEYmtJc1VVRkJTVVFzVDBGQlR5eEpRVUZRTEVsQlFXVkJMRTlCUVU4c1NVRkJNVUlzUlVGRFNTeFBRVUZQTEV0QlFWQTdRVUZEU2l4UlFVRkpRU3hsUVVGbFF5eEpRVUZ1UWl4RlFVTkpMRTlCUVU4c1NVRkJVRHRCUVVOS0xGRkJRVWxCTEZOQlFWTXpRaXhOUVVGaUxFVkJRMGtzVDBGQlR5eEpRVUZRT3p0QlFVVktMRkZCUVVrc1QwRkJUekJDTEVkQlFWQXNTMEZCWjBJc1VVRkJjRUlzUlVGRFNTeFBRVUZQUXl4VFFVRlRkRUlzVFVGQmFFSTdRVUZEU2l4UlFVRkpMRTlCUVU5eFFpeEhRVUZRTEV0QlFXZENMRkZCUVhCQ0xFVkJRMGtzVDBGQlQwTXNVMEZCVXpsQ0xFMUJRV2hDTzBGQlEwb3NVVUZCU1N4UFFVRlBOa0lzUjBGQlVDeExRVUZuUWl4VFFVRndRaXhGUVVOSkxFOUJRVTlETEZOQlFWTkRMRTlCUVdoQ08wRkJRMG9zVVVGQlNVUXNVMEZCVXpWQ0xFdEJRV0lzUlVGRFNTeFBRVUZQUVN4TlFVRk5PRUlzVDBGQlRpeERRVUZqU0N4SFFVRmtMRU5CUVZBN08wRkJSVW9zVjBGQlR5eExRVUZRTzBGQlEwZzdPMnRDUVVWalJDeEZPenM3T3pzN096czdPenM3TzBGRGNFSm1PenM3T3pzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVTBGQlUwc3NTVUZCVkN4RFFVRmpReXhoUVVGa0xFVkJRVFpDUXl4TFFVRTNRaXhGUVVGdFF6dEJRVU5zUXl4TFFVRk5hRUlzYTBKQlFXMUNMSFZDUVVGUlpTeGhRVUZTTEVWQlFYVkNReXhMUVVGMlFpeERRVUY2UWpzN1FVRkZRU3hMUVVGSGFFSXNiMEpCUVc5Q0xFTkJRWFpDTEVWQlFYbENPMEZCUTNoQ1owSXNWVUZCVVVNc1UwRkJVanRCUVVOQk96dEJRVVZGTEZGQlFVOUVMRXRCUVZBN1FVRkRTRHM3YTBKQlJXTkdMRWtpTENKbWFXeGxJam9pYkdsaUwyUnBabVl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGNJbVJwWm1aY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVpHbG1abHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0prYVdabVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEWXBPMXh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklIZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lEUTROMlpsWlRGa09HRmlOR1JqTkRFd056QTVJaXdpYVcxd2IzSjBJSE4wY21sdVowTnZiWEJoY21VZ1puSnZiU0FuTGk5emRISnBibWREYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzUxYldKbGNrTnZiWEJoY21VZ1puSnZiU0FuTGk5dWRXMWlaWEpEYjIxd1lYSmxKMXh1YVcxd2IzSjBJR1JoZEdWRGIyMXdZWEpsSUdaeWIyMGdKeTR2WkdGMFpVTnZiWEJoY21VblhHNXBiWEJ2Y25RZ1lYSnlZWGxEYjIxd1lYSmxJR1p5YjIwZ0p5NHZZWEp5WVhsRGIyMXdZWEpsSjF4dWFXMXdiM0owSUc5aWFtVmpkRU52YlhCaGNtVWdabkp2YlNBbkxpOXZZbXBsWTNSRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdseklHWnliMjBnSnk0dkxpNHZhWE1uWEc1Y2JtWjFibU4wYVc5dUlHTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9wWEc1N1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWlBOVBUMGdibVYzVDJKcUtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUdsbUlDaHVaWGRQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzRnSUNBZ1kyOXVjM1FnSUc5c1pFOWlhbFI1Y0dVZ1BTQjBlWEJsYjJZb2IyeGtUMkpxS1R0Y2JpQWdJQ0JqYjI1emRDQWdibVYzVDJKcVZIbHdaU0E5SUhSNWNHVnZaaWh1WlhkUFltb3BPMXh1WEc0Z0lDQWdhV1lnS0c5c1pFOWlhbFI1Y0dVZ0lUMDlJRzVsZDA5aWFsUjVjR1VwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRTlpYWxSNWNHVXNJRzVsZDA5aWFsUjVjR1VwTzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdQVDA5SUNkaWIyOXNaV0Z1SnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJXSmxja052YlhCaGNtVW9UblZ0WW1WeUtHOXNaRTlpYWlrc0lFNTFiV0psY2lodVpYZFBZbW9wS1R0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxVkhsd1pTQTlQVDBnSjI1MWJXSmxjaWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFcxaVpYSkRiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxS1R0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxVkhsd1pTQTlQVDBnSjNOMGNtbHVaeWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEhKcGJtZERiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxS1R0Y2JseHVJQ0FnSUdsbUlDaHZiR1JQWW1wVWVYQmxJQ0U5UFNBbmIySnFaV04wSnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNWNiaUFnSUNCcFppQW9hWE1vYjJ4a1QySnFMQ0JFWVhSbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUmhkR1ZEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtUdGNiaUFnSUNCcFppQW9hWE1vYjJ4a1QySnFMQ0JCY25KaGVTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhjbkpoZVVOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3NZMjl0Y0dGeVpTazdYRzRnSUNBZ2FXWWdLR2x6S0c5c1pFOWlhaXdnVDJKcVpXTjBLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzlpYW1WamRFTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9zSUdOdmJYQmhjbVVwTzF4dVhHNGdJQ0FnY21WMGRYSnVJREE3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiMjF3WVhKbE8xeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOWpiMjF3WVhKbEwyTnZiWEJoY21VdWFuTWlMQ0l2TDJoMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwyVnVMVlZUTDJSdlkzTXZWMlZpTDBwaGRtRlRZM0pwY0hRdlVtVm1aWEpsYm1ObEwwZHNiMkpoYkY5UFltcGxZM1J6TDFOMGNtbHVaeTlzYjJOaGJHVkRiMjF3WVhKbFhHNW1kVzVqZEdsdmJpQnpkSEpwYm1kRGIyMXdZWEpsS0c5c1pGWmhiSFZsTENCdVpYZFdZV3gxWlN3Z2FYTkRZWE5sVTJWdWMybDBhWFpsS1NCN1hHNGdJQ0FnYVhORFlYTmxVMlZ1YzJsMGFYWmxJRDBnZEhsd1pXOW1JR2x6UTJGelpWTmxibk5wZEdsMlpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QnBjME5oYzJWVFpXNXphWFJwZG1VZ09pQm1ZV3h6WlR0Y2JseHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQTlQU0J1ZFd4c0lDWW1JRzVsZDFaaGJIVmxJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1ZtRnNkV1VnUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnYVdZZ0tHbHpRMkZ6WlZObGJuTnBkR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQnZiR1JXWVd4MVpTQTlJRk4wY21sdVp5aHZiR1JXWVd4MVpTa3VkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVW9LVHRjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCVGRISnBibWNvYm1WM1ZtRnNkV1VwTG5SdlRHOWpZV3hsVEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElISmxjM1ZzZENBOUlGTjBjbWx1WnlodmJHUldZV3gxWlNrdWJHOWpZV3hsUTI5dGNHRnlaU2h1WlhkV1lXeDFaU2s3WEc0Z0lDQWdhV1lnS0hKbGMzVnNkQ0E4SUMweEtWeHVJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQXRNVHRjYmlBZ0lDQmxiSE5sSUdsbUlDaHlaWE4xYkhRZ1BpQXhLVnh1SUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0F4TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYzNSeWFXNW5RMjl0Y0dGeVpUdGNibHh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2YzNSeWFXNW5RMjl0Y0dGeVpTNXFjeUlzSWx4dVpuVnVZM1JwYjI0Z2JuVnRZbVZ5UTI5dGNHRnlaU2h2YkdSV1lXeDFaU3dnYm1WM1ZtRnNkV1VwSUh0Y2JseHVJQ0FnSUdsbUlDaHBjMDVoVGlodmJHUldZV3gxWlNrZ0ppWWdhWE5PWVU0b2JtVjNWbUZzZFdVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNCcFppQW9hWE5PWVU0b2IyeGtWbUZzZFdVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9hWE5PWVU0b2JtVjNWbUZzZFdVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUENCdVpYZFdZV3gxWlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQStJRzVsZDFaaGJIVmxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnlaWFIxY200Z01EdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYm5WdFltVnlRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOXVkVzFpWlhKRGIyMXdZWEpsTG1weklpd2lYRzVtZFc1amRHbHZiaUJrWVhSbFEyOXRjR0Z5WlNodmJHUldZV3gxWlN3Z2JtVjNWbUZzZFdVcElIdGNibHh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFQwZ2JuVnNiQ0FtSmlCdVpYZFdZV3gxWlNBOVBUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURBN1hHNGdJQ0FnYVdZZ0tHOXNaRlpoYkhWbElEMDlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9ibVYzVm1Gc2RXVWdQVDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJSFpoY2lBZ2IyeGtWR2x0WlNBOUlHOXNaRlpoYkhWbExtZGxkRlJwYldVb0tUdGNiaUFnSUNCMllYSWdJRzVsZDFScGJXVWdQU0J1WlhkV1lXeDFaUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdhV1lnS0c5c1pGUnBiV1VnUENCdVpYZFVhVzFsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnYVdZZ0tHOXNaRlJwYldVZ1BpQnVaWGRVYVcxbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNibHh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHZiR1JVYVcxbEtTQW1KaUJwYzA1aFRpaHVaWGRVYVcxbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLR2x6VG1GT0tHOXNaRlJwYldVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9hWE5PWVU0b2JtVjNWR2x0WlNrcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNibHh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JrWVhSbFEyOXRjR0Z5WlR0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlkyOXRjR0Z5WlM5a1lYUmxRMjl0Y0dGeVpTNXFjeUlzSW1sdGNHOXlkQ0JqYjIxd1lYSmxJR1p5YjIwZ0p5NHZZMjl0Y0dGeVpTYzdYRzVjYm1aMWJtTjBhVzl1SUdGeWNtRjVRMjl0Y0dGeVpTaHZiR1JQWW1vc0lHNWxkMDlpYWlsY2JudGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlQU0J1WlhkUFltb3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2FXWWdLRzVsZDA5aWFpQTlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzVjYmlBZ0lDQnNaWFFnWTI5dGNHRnlhWE52YmxaaGJIVmxPMXh1SUNBZ0lIWmhjaUFnYjJ4a1QySnFUR1Z1WjNSb0lEMGdiMnhrVDJKcUxteGxibWQwYUR0Y2JpQWdJQ0IyWVhJZ0lHNWxkMDlpYWt4bGJtZDBhQ0E5SUc1bGQwOWlhaTVzWlc1bmRHZzdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFreGxibWQwYUNBOElHNWxkMDlpYWt4bGJtZDBhQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dUlDQWdJR2xtSUNodmJHUlBZbXBNWlc1bmRHZ2dQaUJ1WlhkUFltcE1aVzVuZEdncFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVYRzRnSUNBZ1ptOXlJQ2gyWVhJZ0lHa2dQU0F3T3lCcElEd2diMnhrVDJKcVRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnTHk5eVpXTjFjbk5wZG1VZ1kyOXRjR0Z5YVhOdmJpQnZaaUJoY25KaGVTQmxiR1Z0Wlc1MGMxeHVJQ0FnSUNBZ0lDQmpiMjF3WVhKcGMyOXVWbUZzZFdVZ1BTQmpiMjF3WVhKbEtHOXNaRTlpYWx0cFhTd2dibVYzVDJKcVcybGRLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZiWEJoY21semIyNVdZV3gxWlNBaFBTQXdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJYQmhjbWx6YjI1V1lXeDFaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SURBN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JoY25KaGVVTnZiWEJoY21VN1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwyTnZiWEJoY21VdllYSnlZWGxEYjIxd1lYSmxMbXB6SWl3aWFXMXdiM0owSUdOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxKenRjYmx4dVpuVnVZM1JwYjI0Z2IySnFaV04wUTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpbGNibnRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5UFNCdVpYZFBZbW9wWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNodmJHUlBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQwOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JseHVJQ0FnSUd4bGRDQndjbTl3TzF4dUlDQWdJR1p2Y2lBb2NISnZjQ0JwYmlCdmJHUlBZbW9wWEc0Z0lDQWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMDlpYWk1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d0tTbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsTzF4dUlDQWdJR1p2Y2lBb2NISnZjQ0JwYmlCdVpYZFBZbW9wWEc0Z0lDQWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXOXNaRTlpYWk1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d0tTbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJQ0FnSUNBdkwzSmxZM1Z5YzJsMlpTQmpiMjF3WVhKcGMyOXVJRzltSUc5aWFtVmpkQ0J3Y205d1pYSjBlVnh1SUNBZ0lDQWdJQ0JqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdQU0JqYjIxd1lYSmxLRzlzWkU5aWFsdHdjbTl3WFN3Z2JtVjNUMkpxVzNCeWIzQmRLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZiWEJoY21semIyNVdZV3gxWlNBaFBUMGdNQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyMXdZWEpwYzI5dVZtRnNkV1U3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYjJKcVpXTjBRMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOXZZbXBsWTNSRGIyMXdZWEpsTG1weklpd2lhVzF3YjNKMElITjBjbWx1WjBOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMM04wY21sdVowTnZiWEJoY21VblhHNXBiWEJ2Y25RZ2JuVnRZbVZ5UTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZiblZ0WW1WeVEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCa1lYUmxRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdlpHRjBaVU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZWEp5WVhsRGIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaUzloY25KaGVVTnZiWEJoY21VblhHNXBiWEJ2Y25RZ2IySnFaV04wUTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCamIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaUzlqYjIxd1lYSmxKMXh1YVcxd2IzSjBJR1JwWm1ZZ1puSnZiU0FuTGk5a2FXWm1KMXh1WEc1bGVIQnZjblFnZTF4dUlDQWdJR1JwWm1ZZ1lYTWdaR1ZtWVhWc2RDeGNiaUFnSUNCamIyMXdZWEpsTEZ4dUlDQWdJSE4wY21sdVowTnZiWEJoY21Vc1hHNGdJQ0FnYm5WdFltVnlRMjl0Y0dGeVpTeGNiaUFnSUNCa1lYUmxRMjl0Y0dGeVpTeGNiaUFnSUNCaGNuSmhlVU52YlhCaGNtVXNYRzRnSUNBZ2IySnFaV04wUTI5dGNHRnlaVnh1ZlZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5cGJtUmxlQzVxY3lJc0ltWjFibU4wYVc5dUlHbHpLRzlpYWl3Z1ZIbHdaU2tnZTF4dUlDQWdJR2xtSUNodlltb2dQVDBnYm5Wc2JDQjhmQ0J2WW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lHbG1JQ2h2WW1vZ2FXNXpkR0Z1WTJWdlppQlVlWEJsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCcFppQW9WSGx3WlNBOVBUMGdUMkpxWldOMEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllvYjJKcUtTQTlQVDBnSjNOMGNtbHVaeWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJVZVhCbElEMDlQU0JUZEhKcGJtYzdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppaHZZbW9wSUQwOVBTQW5iblZ0WW1WeUp5bGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGUjVjR1VnUFQwOUlFNTFiV0psY2p0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltS0c5aWFpa2dQVDA5SUNkaWIyOXNaV0Z1SnlsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZSNWNHVWdQVDA5SUVKdmIyeGxZVzQ3WEc0Z0lDQWdhV1lnS0ZSNWNHVWdQVDA5SUVGeWNtRjVLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdRWEp5WVhrdWFYTkJjbkpoZVNodlltb3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnBjenRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2YVhNdWFuTWlMQ0pwYlhCdmNuUWdZMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdlkyOXRjR0Z5WlNjN1hHNWNiaTh2SUVsbUlIUm9aWEpsSUdseklHNXZJR05vWVc1blpTQnlaWFIxY201eklIVnVaR1ZtYVc1bFpGeHVMeThnYVdZZ2RHaGxjbVVnYVhNZ1lTQmphR0Z1WjJVZ2NtVjBkWEp1Y3lCMGFHVWdiR0YwWlhOMElIWmhiSFZsWEc1bWRXNWpkR2x2YmlCa2FXWm1LR052YlhCaGNtVmtWbUZzZFdVc0lIWmhiSFZsS1h0Y2JseDBZMjl1YzNRZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsSUQwZ0lHTnZiWEJoY21Vb1kyOXRjR0Z5WldSV1lXeDFaU3dnZG1Gc2RXVXBPMXh1WEc1Y2RHbG1LR052YlhCaGNtbHpiMjVXWVd4MVpTQTlQVDBnTUNsN1hHNWNkRngwZG1Gc2RXVWdQU0IxYm1SbFptbHVaV1E3WEc1Y2RIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1pHbG1aanRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WkdsbVppNXFjeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCBEaWZmTG9nZ2VyIGZyb20gJy4vRGlmZkxvZ2dlcic7XG5cbmV4cG9ydCB7XG5cdExvZ2dlciBhcyBkZWZhdWx0LFxuXHREaWZmTG9nZ2VyXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dFbnRyeSBmcm9tICcuL0xvZ0VudHJ5JztcblxuZnVuY3Rpb24gYXBwbHlEaWZmKHN0ZXBzLCBjYWxsYmFjaykge1xuXHRjb25zdCB7Y29udGV4dCwgdW5kb0xvZywgcmVkb0xvZywgZ2V0dGVyLCBzZXR0ZXJ9ID0gdGhpcztcblx0bGV0IHsgcHJldlN0YXRlIH0gPSB0aGlzO1xuXHRjb25zdCBhYnNTdGVwcyA9IE1hdGguYWJzKHN0ZXBzKTtcblx0bGV0IHN0ZXBzUmVtYWluaW5nID0gTWF0aC5taW4oYWJzU3RlcHMsIHN0ZXBzIDwgMCA/IHVuZG9Mb2cubGVuZ3RoIDogcmVkb0xvZy5sZW5ndGgpO1xuXHRpZiAoc3RlcHNSZW1haW5pbmcgPiAwKSB7XG5cdFx0bGV0IGxvZ0VudHJ5LCBkaWZmO1xuXHRcdHdoaWxlIChzdGVwc1JlbWFpbmluZy0tID4gMCkge1xuXHRcdFx0aWYgKHN0ZXBzIDwgMCkgeyAvLyB1bmRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gdW5kb0xvZy5wb3AoKTtcblx0XHRcdFx0cmVkb0xvZy51bnNoaWZ0KGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5LnByZXY7XG5cdFx0XHR9IGVsc2UgeyAvL3JlZG9cblx0XHRcdFx0bG9nRW50cnkgPSByZWRvTG9nLnNoaWZ0KCk7XG5cdFx0XHRcdHVuZG9Mb2cucHVzaChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RlcHNSZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBkaWZmLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IHRydWU7XG5cdFx0Ly8gbm93IGFmdGVyIHJlYWNoaW5nIHRoZSBMb2cgZW50cnkgYXBwbHkgdGhlIGRpZmYgdG8gY3VycmVudCBzdGF0ZVxuXHRcdHNldHRlci5jYWxsKGNvbnRleHQsIGRpZmYsIGNhbGxiYWNrKTtcblx0fSBlbHNlIHtcblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKHNhdmVDYWxsYmFjayl7XG5cdFx0dGhpcy5jb250ZXh0O1xuXHRcdHRoaXMuZ2V0dGVyO1xuXHRcdHRoaXMuc2V0dGVyO1xuXHRcdHRoaXMuZGlmZk1ldGhvZDtcblxuXHRcdHRoaXMudW5kb0xvZyA9IFtdO1xuXHRcdHRoaXMucmVkb0xvZyA9IFtdO1xuXG5cdFx0dGhpcy5wcmV2U3RhdGUgPSBudWxsO1xuXHRcdHRoaXMubmV4dElkID0gMDtcblxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFjaztcblxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cdH1cbn1cblxuTG9nZ2VyLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgZ2V0dGVyLCBzZXR0ZXIsIGRpZmZNZXRob2Qpe1xuXHRpZighZ2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgZ2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoIXNldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IHNldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmdldHRlciA9IGdldHRlcjtcblx0dGhpcy5zZXR0ZXIgPSBzZXR0ZXI7XG5cdHRoaXMuZGlmZk1ldGhvZCA9IGRpZmZNZXRob2Q7XG5cdHRoaXMucHJldlN0YXRlID0gZ2V0dGVyLmNhbGwoY29udGV4dCk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnNldFNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHNhdmVDYWxsYmFjayl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFja1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCAtc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0YXBwbHlEaWZmLmNhbGwodGhpcywgc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuZGlmZkFwcGxpZWQpe1xuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGxvZztcblx0XHRsZXQgZ2V0RGlmZiA9IHRoaXMuZGlmZk1ldGhvZCA/IHRoaXMuZGlmZk1ldGhvZCA6IGRpZmY7XG5cdFx0aWYodGhpcy5jb250ZXh0KXtcblx0XHRcdGNvbnN0IHN0YXRlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLmNvbnRleHQpO1xuXHRcdFx0Y29uc3QgZGlmZk9iamVjdCA9IGdldERpZmYodGhpcy5wcmV2U3RhdGUsIHN0YXRlKTtcblx0XHRcdC8vIENoYW5nZSBvY2N1cnJlZCBsb2cgdGhlbVxuXHRcdFx0aWYgKGRpZmZPYmplY3QuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxvZyA9IG5ldyBMb2dFbnRyeSh0aGlzLm5leHRJZCsrLCBkaWZmT2JqZWN0LmN1cnJlbnQsIGRpZmZPYmplY3QucHJldik7XG5cdFx0XHRcdGlmKHRoaXMucmVkb0xvZy5sZW5ndGggIT09IDApe1xuXHRcdFx0XHRcdGNvbnN0IG5leHRMb2cgPSB0aGlzLnJlZG9Mb2dbMF07XG5cdFx0XHRcdFx0bmV4dExvZy5wcmV2ID0gbG9nLm5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51bmRvTG9nLnB1c2gobG9nKTtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrICYmIHRoaXMuc2F2ZURpZmZDYWxsYmFjayhsb2cpO1xuXHR9XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Mb2dnZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dFbnRyeSB7XG5cdGNvbnN0cnVjdG9yKGlkLCBuZXh0LCBwcmV2KXtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uZXh0ID0gbmV4dDtcblx0XHR0aGlzLnByZXYgPSBwcmV2O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ0VudHJ5LmpzIiwiaW1wb3J0IFBpdm90ZWRMaW5rZWRMaXN0IGZyb20gJ3Bpdm90ZWQtbGlua2VkLWxpc3QnO1xuaW1wb3J0IHtjb21iaW5lRGlmZn0gZnJvbSAnLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBwcmVJbnNlcnQoY3VycmVudExvZywgbmV3TG9nLCBuZXh0TG9nKXtcblx0aWYoY3VycmVudExvZywgbmV3TG9nLCBuZXh0TG9nKSB7IC8vIG1pZGRsZSBpbnNlcnRcblx0XHRjb25zdCBuZXdMb2dGb3J3YXJkRGlmZiA9IG5ld0xvZy5lbGVtZW50LmZvcndhcmQ7XG5cdFx0Y29uc3QgbmV3TG9nQmFja3dhcmREaWZmID0gbmV3TG9nLmVsZW1lbnQuYmFja3dhcmQ7XG5cdFx0Y29uc3QgbmV4dExvZ0ZvcndhcmREaWZmID0gbmV4dExvZy5lbGVtZW50LmZvcndhcmQ7XG5cdFx0Y29uc3QgbmV4dExvZ0JhY2t3YXJkRGlmZiA9IG5leHRMb2cuZWxlbWVudC5iYWNrd2FyZDtcblx0XHRjb25zdCBuZXdDb21iaW5lZEZvcndhcmREaWZmID0gY29tYmluZURpZmYobmV4dExvZ0JhY2t3YXJkRGlmZi52YWx1ZSwgbmV3TG9nRm9yd2FyZERpZmYudmFsdWUsIHRoaXMub2JqZWN0VmVyaWZpZXIsIHRydWUpXG5cdFx0Y29uc3QgbmV3Q29tYmluZWRCYWNrd2FyZERpZmYgPSBjb21iaW5lRGlmZihuZXh0TG9nRm9yd2FyZERpZmYudmFsdWUsIG5ld0xvZ0JhY2t3YXJkRGlmZi52YWx1ZSwgdGhpcy5vYmplY3RWZXJpZmllciwgdHJ1ZSlcblxuXHRcdG5ld0xvZy5mb3J3YXJkID0gbmV3Q29tYmluZWRGb3J3YXJkRGlmZjtcblx0XHRuZXdMb2cuYmFja3dhcmQgPSBuZXdDb21iaW5lZEJhY2t3YXJkRGlmZjtcblx0fVxuXG59XG5cbmZ1bmN0aW9uIGp1bXAoc3RlcHMsZGlyZWN0aW9uLCBsb2dMaXN0LG9iamVjdFZlcmlmaWVyKXtcblx0bGV0IGxvZ0VudHJ5LCBiYXNlRGlmZjtcblx0d2hpbGUoc3RlcHMgPj0gMCl7XG5cdFx0bG9nRW50cnkgPSBsb2dMaXN0LnBpdm90O1xuXHRcdGlmKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyl7XG5cdFx0XHRsb2dMaXN0LnNoaWZ0UGl2b3QoLTEpO1xuXHRcdH0gZWxzZSBpZihkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyl7XG5cdFx0XHRsb2dMaXN0LnNoaWZ0UGl2b3QoMSk7XG5cdFx0fVxuXHRcdGNvbnN0IGZvcndhcmRCYWNrd2FyZERpZmYgPSBsb2dFbnRyeS5lbGVtZW50O1xuXHRcdGNvbnN0IGRpZmZTdGF0ZSA9IGZvcndhcmRCYWNrd2FyZERpZmZbZGlyZWN0aW9uXTtcblx0XHRjb25zdCBkaWZmVmFsdWUgPSBkaWZmU3RhdGUudmFsdWUgO1xuXHRcdGNvbnN0IGlzTG9nZ2FibGVDb2xsZWN0aW9uT2JqZWN0ID0gZGlmZlN0YXRlWydjbGFzc0RlZk5hbWUnXSA9PT0gb2JqZWN0VmVyaWZpZXI7XG5cdFx0YmFzZURpZmYgPSBjb21iaW5lRGlmZihiYXNlRGlmZiwgZGlmZlZhbHVlLCBvYmplY3RWZXJpZmllciwgaXNMb2dnYWJsZUNvbGxlY3Rpb25PYmplY3QpO1xuXHRcdHN0ZXBzID0gc3RlcHMgLSAxO1xuXHR9XG5cdHJldHVybiBiYXNlRGlmZjtcbn1cblxuZnVuY3Rpb24gc2hpZnRBbmRBcHBseUxvZyhzdGVwcyx0eXBlLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpIHtcblx0Y29uc3Qge2NvbnRleHQsIGxvZ0xpc3QgfSA9IHRoaXM7XG5cdGlmKG9iamVjdFZlcmlmaWVyKXtcblx0XHR0aGlzLm9iamVjdFZlcmlmaWVyID0gb2JqZWN0VmVyaWZpZXI7XG5cdH1cblx0bGV0IGxvZ0VudHJ5LCBiYXNlRGlmZjtcblx0aWYoc3RlcHMgPT09IDApeyAvLyBuZXh0IGFuZCBwcmV2XG5cdFx0bG9nRW50cnkgPSBsb2dMaXN0LnBpdm90O1xuXHRcdGxvZ0xpc3Quc2hpZnRQaXZvdCh0eXBlID09PSBcInVuZG9cIiA/IC0xIDogMSk7XG5cdFx0Y29uc3QgZm9yd2FyZEJhY2t3YXJkRGlmZiA9IGxvZ0VudHJ5LmVsZW1lbnQ7XG5cdFx0Y29uc3Qge2ZvcndhcmQsIGJhY2t3YXJkfSA9IGZvcndhcmRCYWNrd2FyZERpZmY7XG5cdFx0bGV0IGRpZmZTdGF0ZTsvL1N0YXRlIGFzIEpTT05cblx0XHRpZih0eXBlID09PSBcInVuZG9cIil7XG5cdFx0XHRkaWZmU3RhdGUgPSBiYWNrd2FyZFxuXHRcdH0gZWxzZSBpZiggdHlwZSA9PT0gXCJyZWRvXCIpe1xuXHRcdFx0ZGlmZlN0YXRlID0gZm9yd2FyZFxuXHRcdH1cblx0XHRiYXNlRGlmZiA9IGRpZmZTdGF0ZS52YWx1ZSA7XG5cdH0gZWxzZSB7IC8vIGp1bXBpbmdcblx0XHRpZigodHlwZSA9PT0gXCJ1bmRvXCIpKXtcblx0XHRcdGJhc2VEaWZmID0ganVtcCgtc3RlcHMsJ2JhY2t3YXJkJyxsb2dMaXN0LG9iamVjdFZlcmlmaWVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YmFzZURpZmYgPSBqdW1wKHN0ZXBzLCdmb3J3YXJkJyxsb2dMaXN0LG9iamVjdFZlcmlmaWVyKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBkaWZmTG9nZ2VySW5zdGFuY2UgPSB0aGlzO1xuXHRjb250ZXh0LmFwcGx5RGlmZi5jYWxsKGNvbnRleHQsIGJhc2VEaWZmLCBmdW5jdGlvbigpe1xuXHRcdHVwZGF0ZUxhc3RBY3RpdmVTdGF0ZS5jYWxsKGRpZmZMb2dnZXJJbnN0YW5jZSk7XG5cdFx0Y2FsbGJhY2soKVxuXHR9KTtcblxufTtcblxuZnVuY3Rpb24gdXBkYXRlTGFzdEFjdGl2ZVN0YXRlKCl7XG5cdHRoaXMubGFzdEFjdGl2ZVN0YXRlID0gdGhpcy5jb250ZXh0LmdldFN0YXRlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZMb2dnZXIge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBvYmplY3RWZXJpZmllcil7XG5cdFx0aWYoIWNvbnRleHQpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkNvbnRleHQgY2FudCBiZSBudWxsXCIpO1xuXHRcdH1cblxuXHRcdGlmKCFjb250ZXh0LmFwcGx5RGlmZil7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29udGV4dCBuZWVkcyB0byBpbXBsZW1lbnQgYXBwbHlEaWZmIG1ldGhvZFwiKTtcblx0XHR9XG5cblx0XHRpZighY29udGV4dC5nZXRTdGF0ZSl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29udGV4dCBuZWVkcyB0byBpbXBsZW1lbnQgZ2V0U3RhdGUgbWV0aG9kXCIpO1xuXHRcdH1cblxuXHRcdGlmKCFjb250ZXh0LmdldERpZmYpe1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkNvbnRleHQgbmVlZHMgdG8gaW1wbGVtZW50IGdldERpZmYgbWV0aG9kXCIpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cblx0XHR0aGlzLmxvZ0xpc3QgPSBuZXcgUGl2b3RlZExpbmtlZExpc3QoW10pO1xuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG5cdFx0dGhpcy5lbmFibGUgPSB0cnVlO1xuXHRcdHRoaXMub2JqZWN0VmVyaWZpZXIgPSBvYmplY3RWZXJpZmllcjtcblxuXHRcdHVwZGF0ZUxhc3RBY3RpdmVTdGF0ZS5jYWxsKHRoaXMpXG5cdFx0dGhpcy5vYmplY3RWZXJpZmllcjtcblx0XHRwcmVJbnNlcnQgPSBwcmVJbnNlcnQuYmluZCh0aGlzKTtcblx0fVxufVxuXG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnNldFNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHNhdmVDYWxsYmFjayl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFja1xufTtcblxuRGlmZkxvZ2dlci5wcm90b3R5cGUucmVtb3ZlU2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gbnVsbDtcbn07XG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2ssIG9iamVjdFZlcmlmaWVyKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRzaGlmdEFuZEFwcGx5TG9nLmNhbGwodGhpcywgLXN0ZXBzLCBcInVuZG9cIiwgY2FsbGJhY2ssIG9iamVjdFZlcmlmaWVyKTtcbn07XG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLnJlZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2ssIG9iamVjdFZlcmlmaWVyKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRzaGlmdEFuZEFwcGx5TG9nLmNhbGwodGhpcywgc3RlcHMsIFwicmVkb1wiLCBjYWxsYmFjaywgb2JqZWN0VmVyaWZpZXIpO1xufTtcblxuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBmb3J3YXJkQmFja3dhcmREaWZmO1xuXHRcdGlmKHRoaXMuY29udGV4dCl7XG5cdFx0XHRmb3J3YXJkQmFja3dhcmREaWZmID0gdGhpcy5jb250ZXh0LmdldERpZmYodGhpcy5sYXN0QWN0aXZlU3RhdGUsIHRydWUpO1xuXHRcdFx0Y29uc3Qge2ZvcndhcmQsIGJhY2t3YXJkfSA9IGZvcndhcmRCYWNrd2FyZERpZmY7XG5cblx0XHRcdGlmICh0eXBlb2YgZm9yd2FyZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYmFja3dhcmQgPT09IFwib2JqZWN0XCIpIHsgLy8gQ2hhbmdlIG9jY3VycmVkIGxvZyB0aGVtXG5cdFx0XHRcdHRoaXMubG9nTGlzdC5pbnNlcnQoZm9yd2FyZEJhY2t3YXJkRGlmZiwgcHJlSW5zZXJ0KTtcblx0XHRcdFx0dXBkYXRlTGFzdEFjdGl2ZVN0YXRlLmNhbGwodGhpcylcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrICYmIHRoaXMuc2F2ZURpZmZDYWxsYmFjayhmb3J3YXJkQmFja3dhcmREaWZmKTtcblx0fVxufTtcblxuXG5EaWZmTG9nZ2VyLnByb3RvdHlwZS5nZXRDdXJyZW50TG9nID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5sb2dMaXN0ICl7XG5cdFx0cmV0dXJuIHRoaXMubG9nTGlzdC5nZXRQaXZvdEVsZW1lbnQoKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbkRpZmZMb2dnZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKXtcblx0dGhpcy5sb2dMaXN0LnJlc2V0KCk7XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0RpZmZMb2dnZXIuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImxpbmtlZGxpc3RcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGlua2VkbGlzdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsaW5rZWRsaXN0XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Ob2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUGl2b3RlZExpbmtlZExpc3QgPSBmdW5jdGlvbiBQaXZvdGVkTGlua2VkTGlzdChhcnJheSkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGl2b3RlZExpbmtlZExpc3QpO1xuXG5cdHRoaXMucGl2b3QgPSBudWxsO1xuXHR0aGlzLmhlYWQgPSBudWxsO1xuXHR0aGlzLnRhaWwgPSBudWxsO1xuXHR0aGlzLmxlbmd0aCA9IDA7XG5cdGFycmF5ICYmIHRoaXMuY3JlYXRlKGFycmF5KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBpdm90ZWRMaW5rZWRMaXN0O1xuXG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJlSW5zZXJ0LCBwb3N0SW5zZXJ0KSB7XG5cdHZhciBuZXdOb2RlID0gbmV3IF9Ob2RlMi5kZWZhdWx0KGVsZW1lbnQpO1xuXHR0aGlzLmxlbmd0aCsrO1xuXG5cdHZhciBjdXJyZW50ID0gdm9pZCAwLFxuXHQgICAgbmV4dCA9IHZvaWQgMDtcblxuXHRpZiAoIXRoaXMucGl2b3QpIHtcblx0XHQvLyBpbnNlcnRpbmcgYXMgZmlyc3QgZWxlbWVudFxuXHRcdHByZUluc2VydCAmJiBwcmVJbnNlcnQobmV3Tm9kZSk7XG5cdFx0dGhpcy5waXZvdCA9IG5ld05vZGU7XG5cdFx0dGhpcy5oZWFkID0gbmV3Tm9kZTtcblx0XHRwb3N0SW5zZXJ0ICYmIHBvc3RJbnNlcnQobmV3Tm9kZSk7XG5cdH0gZWxzZSBpZiAodGhpcy5waXZvdC5uZXh0KSB7XG5cdFx0Ly8gaW5zZXJ0aW5nIGluIG1pZGRsZVxuXHRcdGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXHRcdG5leHQgPSB0aGlzLnBpdm90Lm5leHQ7XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChjdXJyZW50LCBuZXdOb2RlLCBuZXh0KTtcblx0XHRuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7XG5cdFx0bmV3Tm9kZS5wcmV2ID0gY3VycmVudDtcblxuXHRcdGN1cnJlbnQubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV4dC5wcmV2ID0gbmV3Tm9kZTtcblxuXHRcdHRoaXMucGl2b3QgPSBuZXdOb2RlO1xuXHRcdHBvc3RJbnNlcnQgJiYgcG9zdEluc2VydChjdXJyZW50LCBuZXdOb2RlLCBuZXh0KTtcblx0fSBlbHNlIHtcblx0XHQvLyBpbnNlcnRpbmcgYXMgbGFzdCBlbGVtZW50XG5cdFx0Y3VycmVudCA9IHRoaXMucGl2b3Q7XG5cdFx0cHJlSW5zZXJ0ICYmIHByZUluc2VydChjdXJyZW50LCBuZXdOb2RlKTtcblx0XHRjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuXHRcdG5ld05vZGUucHJldiA9IGN1cnJlbnQ7XG5cblx0XHR0aGlzLnBpdm90ID0gbmV3Tm9kZTtcblx0XHR0aGlzLnRhaWwgPSBuZXdOb2RlO1xuXHRcdHBvc3RJbnNlcnQgJiYgcG9zdEluc2VydChjdXJyZW50LCBuZXdOb2RlKTtcblx0fVxufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0UGl2b3QgPSBmdW5jdGlvbiAoc2hpZnQpIHtcblx0dmFyIGN1cnJlbnQgPSB0aGlzLnBpdm90O1xuXG5cdHZhciByaWdodFNoaWZ0ID0gdm9pZCAwO1xuXHRpZiAoc2hpZnQgPj0gMCkge1xuXHRcdHJpZ2h0U2hpZnQgPSB0cnVlO1xuXHR9XG5cblx0d2hpbGUgKHNoaWZ0ICE9PSAwKSB7XG5cdFx0aWYgKHJpZ2h0U2hpZnQpIHtcblx0XHRcdGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG5cdFx0XHRjdXJyZW50ID09PSB0aGlzLnRhaWwgPyBzaGlmdCA9IDAgOiBzaGlmdC0tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5wcmV2O1xuXHRcdFx0Y3VycmVudCA9PT0gdGhpcy5oZWFkID8gc2hpZnQgPSAwIDogc2hpZnQrKztcblx0XHR9XG5cdH1cblxuXHR0aGlzLnBpdm90ID0gY3VycmVudDtcblxuXHRyZXR1cm4gdGhpcy5waXZvdDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5zaGlmdFBpdm90VG9IZWFkID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnBpdm90ID0gdGhpcy5oZWFkO1xufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnNoaWZ0UGl2b3RUb1RhaWwgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMucGl2b3QgPSB0aGlzLnRhaWw7XG59O1xuXG5QaXZvdGVkTGlua2VkTGlzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGFycmF5KSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0YXJyYXkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0X3RoaXMuaW5zZXJ0KGVsZW1lbnQpO1xuXHR9KTtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS50cmF2ZXJzZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgcmlnaHRUb0xlZnQpIHtcblx0dmFyIGN1cnJlbnQgPSByaWdodFRvTGVmdCA/IHRoaXMudGFpbCA6IHRoaXMuaGVhZDtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRjYWxsYmFjayhjdXJyZW50LmVsZW1lbnQpO1xuXHRcdGN1cnJlbnQgPSByaWdodFRvTGVmdCA/IGN1cnJlbnQucHJldiA6IGN1cnJlbnQubmV4dDtcblx0fVxufTtcblxuUGl2b3RlZExpbmtlZExpc3QucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBhcnJheSA9IFtdO1xuXHR0aGlzLnRyYXZlcnNlKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0YXJyYXkucHVzaChlbGVtZW50KTtcblx0fSk7XG5cdHJldHVybiBhcnJheTtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5nZXRQaXZvdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLnBpdm90KSB7XG5cdFx0cmV0dXJuIHRoaXMucGl2b3QuZWxlbWVudDtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbmV4dCA9IHRoaXMucGl2b3QubmV4dCA/IHRoaXMucGl2b3QubmV4dCA6IHRoaXMucGl2b3Q7XG5cdHRoaXMucGl2b3QgPSBuZXh0O1xuXHRyZXR1cm4gbmV4dDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcHJldiA9IHRoaXMucGl2b3QucHJldiA/IHRoaXMucGl2b3QucHJldiA6IHRoaXMucGl2b3Q7XG5cdHRoaXMucGl2b3QgPSBwcmV2O1xuXHRyZXR1cm4gcHJldjtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5pc1Bpdm90SGVhZCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucGl2b3QgPT09IHRoaXMuaGVhZDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5pc1Bpdm90VGFpbCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucGl2b3QgPT09IHRoaXMudGFpbDtcbn07XG5cblBpdm90ZWRMaW5rZWRMaXN0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5waXZvdCA9IG51bGw7XG5cdHRoaXMuaGVhZCA9IG51bGw7XG5cdHRoaXMudGFpbCA9IG51bGw7XG5cdHRoaXMubGVuZ3RoID0gMDtcbn07XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTm9kZSA9IGZ1bmN0aW9uIE5vZGUoZWxlbWVudCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG5cblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0dGhpcy5uZXh0ID0gbnVsbDtcblx0dGhpcy5wcmV2ID0gbnVsbDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5vZGU7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQXpNVEV6T0RVMlpUazROVE15TmpBek5qRTBaU0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDA1dlpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRaUxDSmhjbkpoZVNJc0luQnBkbTkwSWl3aWFHVmhaQ0lzSW5SaGFXd2lMQ0pzWlc1bmRHZ2lMQ0pqY21WaGRHVWlMQ0p3Y205MGIzUjVjR1VpTENKcGJuTmxjblFpTENKbGJHVnRaVzUwSWl3aWNISmxTVzV6WlhKMElpd2ljRzl6ZEVsdWMyVnlkQ0lzSW01bGQwNXZaR1VpTENKamRYSnlaVzUwSWl3aWJtVjRkQ0lzSW5CeVpYWWlMQ0p6YUdsbWRGQnBkbTkwSWl3aWMyaHBablFpTENKeWFXZG9kRk5vYVdaMElpd2ljMmhwWm5SUWFYWnZkRlJ2U0dWaFpDSXNJbk5vYVdaMFVHbDJiM1JVYjFSaGFXd2lMQ0p0WVhBaUxDSjBjbUYyWlhKelpTSXNJbU5oYkd4aVlXTnJJaXdpY21sbmFIUlViMHhsWm5RaUxDSjBiMEZ5Y21GNUlpd2ljSFZ6YUNJc0ltZGxkRkJwZG05MFJXeGxiV1Z1ZENJc0ltbHpVR2wyYjNSSVpXRmtJaXdpYVhOUWFYWnZkRlJoYVd3aUxDSnlaWE5sZENJc0lrNXZaR1VpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN08wRkROMFJCT3pzN096czdPenRKUVVOeFFrRXNhVUlzUjBGRGNFSXNNa0pCUVZsRExFdEJRVm9zUlVGQmEwSTdRVUZCUVRzN1FVRkRha0lzVFVGQlMwTXNTMEZCVEN4SFFVRmhMRWxCUVdJN1FVRkRRU3hOUVVGTFF5eEpRVUZNTEVkQlFWa3NTVUZCV2p0QlFVTkJMRTFCUVV0RExFbEJRVXdzUjBGQldTeEpRVUZhTzBGQlEwRXNUVUZCUzBNc1RVRkJUQ3hIUVVGakxFTkJRV1E3UVVGRFFVb3NWVUZCVXl4TFFVRkxTeXhOUVVGTUxFTkJRVmxNTEV0QlFWb3NRMEZCVkR0QlFVTkJMRU03TzJ0Q1FWQnRRa1FzYVVJN096dEJRVlZ5UWtFc2EwSkJRV3RDVHl4VFFVRnNRaXhEUVVFMFFrTXNUVUZCTlVJc1IwRkJjVU1zVlVGQlUwTXNUMEZCVkN4RlFVRnJRa01zVTBGQmJFSXNSVUZCTmtKRExGVkJRVGRDTEVWQlFYZERPMEZCUXpWRkxFdEJRVTFETEZWQlFWVXNiVUpCUVZOSUxFOUJRVlFzUTBGQmFFSTdRVUZEUVN4TlFVRkxTaXhOUVVGTU96dEJRVVZCTEV0QlFVbFJMR2RDUVVGS08wRkJRVUVzUzBGQllVTXNZVUZCWWpzN1FVRkZRU3hMUVVGSExFTkJRVU1zUzBGQlMxb3NTMEZCVkN4RlFVRmxPMEZCUVVVN1FVRkRhRUpSTEdWQlFXRkJMRlZCUVZWRkxFOUJRVllzUTBGQllqdEJRVU5CTEU5QlFVdFdMRXRCUVV3c1IwRkJZVlVzVDBGQllqdEJRVU5CTEU5QlFVdFVMRWxCUVV3c1IwRkJXVk1zVDBGQldqdEJRVU5CUkN4blFrRkJZMEVzVjBGQlYwTXNUMEZCV0N4RFFVRmtPMEZCUTBFc1JVRk1SQ3hOUVV0UExFbEJRVWNzUzBGQlMxWXNTMEZCVEN4RFFVRlhXU3hKUVVGa0xFVkJRVzFDTzBGQlFVVTdRVUZETTBKRUxGbEJRVlVzUzBGQlMxZ3NTMEZCWmp0QlFVTkJXU3hUUVVGUExFdEJRVXRhTEV0QlFVd3NRMEZCVjFrc1NVRkJiRUk3UVVGRFFVb3NaVUZCWVVFc1ZVRkJWVWNzVDBGQlZpeEZRVUZyUWtRc1QwRkJiRUlzUlVGQk1FSkZMRWxCUVRGQ0xFTkJRV0k3UVVGRFFVWXNWVUZCVVVVc1NVRkJVaXhIUVVGbFJDeFJRVUZSUXl4SlFVRjJRanRCUVVOQlJpeFZRVUZSUnl4SlFVRlNMRWRCUVdWR0xFOUJRV1k3TzBGQlJVRkJMRlZCUVZGRExFbEJRVklzUjBGQlpVWXNUMEZCWmp0QlFVTkJSU3hQUVVGTFF5eEpRVUZNTEVkQlFWbElMRTlCUVZvN08wRkJSVUVzVDBGQlMxWXNTMEZCVEN4SFFVRmhWU3hQUVVGaU8wRkJRMEZFTEdkQ1FVRmpRU3hYUVVGWFJTeFBRVUZZTEVWQlFXMUNSQ3hQUVVGdVFpeEZRVUV5UWtVc1NVRkJNMElzUTBGQlpEdEJRVU5CTEVWQldrMHNUVUZaUVR0QlFVRkZPMEZCUTFKRUxGbEJRVlVzUzBGQlMxZ3NTMEZCWmp0QlFVTkJVU3hsUVVGaFFTeFZRVUZWUnl4UFFVRldMRVZCUVd0Q1JDeFBRVUZzUWl4RFFVRmlPMEZCUTBGRExGVkJRVkZETEVsQlFWSXNSMEZCWlVZc1QwRkJaanRCUVVOQlFTeFZRVUZSUnl4SlFVRlNMRWRCUVdWR0xFOUJRV1k3TzBGQlJVRXNUMEZCUzFnc1MwRkJUQ3hIUVVGaFZTeFBRVUZpTzBGQlEwRXNUMEZCUzFJc1NVRkJUQ3hIUVVGWlVTeFBRVUZhTzBGQlEwRkVMR2RDUVVGalFTeFhRVUZYUlN4UFFVRllMRVZCUVcxQ1JDeFBRVUZ1UWl4RFFVRmtPMEZCUTBFN1FVRkZSQ3hEUVd4RFJEczdRVUZ2UTBGYUxHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSlRMRlZCUVRWQ0xFZEJRWGxETEZWQlFWTkRMRXRCUVZRc1JVRkJaVHRCUVVOMlJDeExRVUZKU2l4VlFVRlZMRXRCUVV0WUxFdEJRVzVDT3p0QlFVVkJMRXRCUVVsblFpeHRRa0ZCU2p0QlFVTkJMRXRCUVVkRUxGTkJRVk1zUTBGQldpeEZRVUZqTzBGQlEySkRMR1ZCUVdFc1NVRkJZanRCUVVOQk96dEJRVVZFTEZGQlFVMUVMRlZCUVZVc1EwRkJhRUlzUlVGQmEwSTdRVUZEYWtJc1RVRkJSME1zVlVGQlNDeEZRVUZqTzBGQlEySk1MR0ZCUVZWQkxGRkJRVkZETEVsQlFXeENPMEZCUTBORUxHVkJRVmtzUzBGQlMxUXNTVUZCYkVJc1IwRkJNa0poTEZGQlFWRXNRMEZCYmtNc1IwRkJkME5CTEU5QlFYaERPMEZCUTBFc1IwRklSQ3hOUVVkUE8wRkJRMDVLTEdGQlFWVkJMRkZCUVZGRkxFbEJRV3hDTzBGQlEwTkdMR1ZCUVZrc1MwRkJTMVlzU1VGQmJFSXNSMEZCTWtKakxGRkJRVkVzUTBGQmJrTXNSMEZCZDBOQkxFOUJRWGhETzBGQlEwRTdRVUZEUkRzN1FVRkZSQ3hOUVVGTFppeExRVUZNTEVkQlFXRlhMRTlCUVdJN08wRkJSVUVzVVVGQlR5eExRVUZMV0N4TFFVRmFPMEZCUTBFc1EwRnlRa1E3TzBGQmRVSkJSaXhyUWtGQmEwSlBMRk5CUVd4Q0xFTkJRVFJDV1N4blFrRkJOVUlzUjBGQkswTXNXVUZCVlR0QlFVTjRSQ3hOUVVGTGFrSXNTMEZCVEN4SFFVRmhMRXRCUVV0RExFbEJRV3hDTzBGQlEwRXNRMEZHUkRzN1FVRkpRVWdzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUW1Fc1owSkJRVFZDTEVkQlFTdERMRmxCUVZVN1FVRkRlRVFzVFVGQlMyeENMRXRCUVV3c1IwRkJZU3hMUVVGTFJTeEpRVUZzUWp0QlFVTkJMRU5CUmtRN08wRkJTVUZLTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKRUxFMUJRVFZDTEVkQlFYRkRMRlZCUVZOTUxFdEJRVlFzUlVGQlpUdEJRVUZCT3p0QlFVTnVSRUVzVDBGQlRXOUNMRWRCUVU0c1EwRkJWU3hWUVVGRFdpeFBRVUZFTEVWQlFWYzdRVUZEY0VJc1VVRkJTMFFzVFVGQlRDeERRVUZaUXl4UFFVRmFPMEZCUTBFc1JVRkdSRHRCUVVkQkxFTkJTa1E3TzBGQlRVRlVMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUpsTEZGQlFUVkNMRWRCUVhWRExGVkJRVk5ETEZGQlFWUXNSVUZCYlVKRExGZEJRVzVDTEVWQlFTdENPMEZCUTNKRkxFdEJRVWxZTEZWQlFWVlhMR05CUVdNc1MwRkJTM0JDTEVsQlFXNUNMRWRCUVRCQ0xFdEJRVXRFTEVsQlFUZERPMEZCUTBFc1VVRkJUVlVzVDBGQlRpeEZRVUZqTzBGQlEySlZMRmRCUVZOV0xGRkJRVkZLTEU5QlFXcENPMEZCUTBGSkxGbEJRVlZYTEdOQlFXTllMRkZCUVZGRkxFbEJRWFJDTEVkQlFUWkNSaXhSUVVGUlF5eEpRVUV2UXp0QlFVTkJPMEZCUTBRc1EwRk9SRHM3UVVGVFFXUXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbXRDTEU5QlFUVkNMRWRCUVhORExGbEJRVlU3UVVGREwwTXNTMEZCVFhoQ0xGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVdHhRaXhSUVVGTUxFTkJRV01zVlVGQlEySXNUMEZCUkN4RlFVRlhPMEZCUTNoQ1VpeFJRVUZOZVVJc1NVRkJUaXhEUVVGWGFrSXNUMEZCV0R0QlFVTkJMRVZCUmtRN1FVRkhRU3hSUVVGUFVpeExRVUZRTzBGQlEwRXNRMEZPUkRzN1FVRlJRVVFzYTBKQlFXdENUeXhUUVVGc1FpeERRVUUwUW05Q0xHVkJRVFZDTEVkQlFUaERMRmxCUVZVN1FVRkRka1FzUzBGQlJ5eExRVUZMZWtJc1MwRkJVaXhGUVVGak8wRkJRMklzVTBGQlR5eExRVUZMUVN4TFFVRk1MRU5CUVZkUExFOUJRV3hDTzBGQlEwRTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkRRU3hEUVV4RU96dEJRVTlCVkN4clFrRkJhMEpQTEZOQlFXeENMRU5CUVRSQ1R5eEpRVUUxUWl4SFFVRnRReXhaUVVGVk8wRkJRelZETEV0QlFVMUJMRTlCUVU4c1MwRkJTMW9zUzBGQlRDeERRVUZYV1N4SlFVRllMRWRCUVd0Q0xFdEJRVXRhTEV0QlFVd3NRMEZCVjFrc1NVRkJOMElzUjBGQmNVTXNTMEZCUzFvc1MwRkJka1E3UVVGRFFTeE5RVUZMUVN4TFFVRk1MRWRCUVdGWkxFbEJRV0k3UVVGRFFTeFJRVUZQUVN4SlFVRlFPMEZCUTBFc1EwRktSRHM3UVVGTlFXUXNhMEpCUVd0Q1R5eFRRVUZzUWl4RFFVRTBRbEVzU1VGQk5VSXNSMEZCYlVNc1dVRkJWVHRCUVVNMVF5eExRVUZOUVN4UFFVRlBMRXRCUVV0aUxFdEJRVXdzUTBGQlYyRXNTVUZCV0N4SFFVRnJRaXhMUVVGTFlpeExRVUZNTEVOQlFWZGhMRWxCUVRkQ0xFZEJRWEZETEV0QlFVdGlMRXRCUVhaRU8wRkJRMEVzVFVGQlMwRXNTMEZCVEN4SFFVRmhZU3hKUVVGaU8wRkJRMEVzVVVGQlQwRXNTVUZCVUR0QlFVTkJMRU5CU2tRN08wRkJUVUZtTEd0Q1FVRnJRazhzVTBGQmJFSXNRMEZCTkVKeFFpeFhRVUUxUWl4SFFVRXdReXhaUVVGVk8wRkJRMjVFTEZGQlFVOHNTMEZCU3pGQ0xFdEJRVXdzUzBGQlpTeExRVUZMUXl4SlFVRXpRanRCUVVOQkxFTkJSa1E3TzBGQlNVRklMR3RDUVVGclFrOHNVMEZCYkVJc1EwRkJORUp6UWl4WFFVRTFRaXhIUVVFd1F5eFpRVUZWTzBGQlEyNUVMRkZCUVU4c1MwRkJTek5DTEV0QlFVd3NTMEZCWlN4TFFVRkxSU3hKUVVFelFqdEJRVU5CTEVOQlJrUTdPMEZCU1VGS0xHdENRVUZyUWs4c1UwRkJiRUlzUTBGQk5FSjFRaXhMUVVFMVFpeEhRVUZ2UXl4WlFVRlZPMEZCUXpkRExFMUJRVXMxUWl4TFFVRk1MRWRCUVdFc1NVRkJZanRCUVVOQkxFMUJRVXRETEVsQlFVd3NSMEZCV1N4SlFVRmFPMEZCUTBFc1RVRkJTME1zU1VGQlRDeEhRVUZaTEVsQlFWbzdRVUZEUVN4TlFVRkxReXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5CTEVOQlRFUXNRenM3T3pzN096czdPenM3T3pzN08wbERhRWx4UWpCQ0xFa3NSMEZEY0VJc1kwRkJXWFJDTEU5QlFWb3NSVUZCYjBJN1FVRkJRVHM3UVVGRGJrSXNUVUZCUzBFc1QwRkJUQ3hIUVVGbFFTeFBRVUZtTzBGQlEwRXNUVUZCUzBzc1NVRkJUQ3hIUVVGWkxFbEJRVm83UVVGRFFTeE5RVUZMUXl4SlFVRk1MRWRCUVZrc1NVRkJXanRCUVVOQkxFTTdPMnRDUVV4dFFtZENMRWtpTENKbWFXeGxJam9pYkdsaUwybHVaR1Y0TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0pzYVc1clpXUnNhWE4wWENJc0lGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSW14cGJtdGxaR3hwYzNSY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aWJHbHVhMlZrYkdsemRGd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JuMHBLSFI1Y0dWdlppQnpaV3htSUNFOVBTQW5kVzVrWldacGJtVmtKeUEvSUhObGJHWWdPaUIwYUdsekxDQm1kVzVqZEdsdmJpZ3BJSHRjYm5KbGRIVnliaUJjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3WEc0Z1hIUmNkRngwWEhSamIyNW1hV2QxY21GaWJHVTZJR1poYkhObExGeHVJRngwWEhSY2RGeDBaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUJjZEZ4MFhIUmNkR2RsZERvZ1oyVjBkR1Z5WEc0Z1hIUmNkRngwZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdNekV4TXpnMU5tVTVPRFV6TWpZd016WXhOR1VpTENKcGJYQnZjblFnVG05a1pTQm1jbTl0SUZ3aUxpOU9iMlJsWENJN1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYVhadmRHVmtUR2x1YTJWa1RHbHpkQ0I3WEc1Y2RHTnZibk4wY25WamRHOXlLR0Z5Y21GNUtYdGNibHgwWEhSMGFHbHpMbkJwZG05MElEMGdiblZzYkR0Y2JseDBYSFIwYUdsekxtaGxZV1FnUFNCdWRXeHNPMXh1WEhSY2RIUm9hWE11ZEdGcGJDQTlJRzUxYkd3N1hHNWNkRngwZEdocGN5NXNaVzVuZEdnZ1BTQXdPMXh1WEhSY2RHRnljbUY1SUNZbUlIUm9hWE11WTNKbFlYUmxLR0Z5Y21GNUtUdGNibHgwZlZ4dWZWeHVYRzVRYVhadmRHVmtUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1YVc1elpYSjBJRDBnWm5WdVkzUnBiMjRvWld4bGJXVnVkQ3dnY0hKbFNXNXpaWEowTENCd2IzTjBTVzV6WlhKMEtYdGNibHgwWTI5dWMzUWdibVYzVG05a1pTQTlJRzVsZHlCT2IyUmxLR1ZzWlcxbGJuUXBPMXh1WEhSMGFHbHpMbXhsYm1kMGFDc3JPMXh1WEc1Y2RHeGxkQ0JqZFhKeVpXNTBMQ0J1WlhoME8xeHVYRzVjZEdsbUtDRjBhR2x6TG5CcGRtOTBLWHNnTHk4Z2FXNXpaWEowYVc1bklHRnpJR1pwY25OMElHVnNaVzFsYm5SY2JseDBYSFJ3Y21WSmJuTmxjblFnSmlZZ2NISmxTVzV6WlhKMEtHNWxkMDV2WkdVcE8xeHVYSFJjZEhSb2FYTXVjR2wyYjNRZ1BTQnVaWGRPYjJSbE8xeHVYSFJjZEhSb2FYTXVhR1ZoWkNBOUlHNWxkMDV2WkdVN1hHNWNkRngwY0c5emRFbHVjMlZ5ZENBbUppQndiM04wU1c1elpYSjBLRzVsZDA1dlpHVXBPMXh1WEhSOUlHVnNjMlVnYVdZb2RHaHBjeTV3YVhadmRDNXVaWGgwS1hzZ0x5OGdhVzV6WlhKMGFXNW5JR2x1SUcxcFpHUnNaVnh1WEhSY2RHTjFjbkpsYm5RZ1BTQjBhR2x6TG5CcGRtOTBPMXh1WEhSY2RHNWxlSFFnUFNCMGFHbHpMbkJwZG05MExtNWxlSFE3WEc1Y2RGeDBjSEpsU1c1elpYSjBJQ1ltSUhCeVpVbHVjMlZ5ZENoamRYSnlaVzUwTEc1bGQwNXZaR1VzYm1WNGRDazdYRzVjZEZ4MGJtVjNUbTlrWlM1dVpYaDBJRDBnWTNWeWNtVnVkQzV1WlhoME8xeHVYSFJjZEc1bGQwNXZaR1V1Y0hKbGRpQTlJR04xY25KbGJuUTdYRzVjYmx4MFhIUmpkWEp5Wlc1MExtNWxlSFFnUFNCdVpYZE9iMlJsTzF4dVhIUmNkRzVsZUhRdWNISmxkaUE5SUc1bGQwNXZaR1U3WEc1Y2JseDBYSFIwYUdsekxuQnBkbTkwSUQwZ2JtVjNUbTlrWlR0Y2JseDBYSFJ3YjNOMFNXNXpaWEowSUNZbUlIQnZjM1JKYm5ObGNuUW9ZM1Z5Y21WdWRDeHVaWGRPYjJSbExHNWxlSFFwTzF4dVhIUjlJR1ZzYzJVZ2V5QXZMeUJwYm5ObGNuUnBibWNnWVhNZ2JHRnpkQ0JsYkdWdFpXNTBYRzVjZEZ4MFkzVnljbVZ1ZENBOUlIUm9hWE11Y0dsMmIzUTdYRzVjZEZ4MGNISmxTVzV6WlhKMElDWW1JSEJ5WlVsdWMyVnlkQ2hqZFhKeVpXNTBMRzVsZDA1dlpHVXBPMXh1WEhSY2RHTjFjbkpsYm5RdWJtVjRkQ0E5SUc1bGQwNXZaR1U3WEc1Y2RGeDBibVYzVG05a1pTNXdjbVYySUQwZ1kzVnljbVZ1ZER0Y2JseHVYSFJjZEhSb2FYTXVjR2wyYjNRZ1BTQnVaWGRPYjJSbE8xeHVYSFJjZEhSb2FYTXVkR0ZwYkNBOUlHNWxkMDV2WkdVN1hHNWNkRngwY0c5emRFbHVjMlZ5ZENBbUppQndiM04wU1c1elpYSjBLR04xY25KbGJuUXNibVYzVG05a1pTazdYRzVjZEgxY2JseHVmVHRjYmx4dVVHbDJiM1JsWkV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExuTm9hV1owVUdsMmIzUWdQU0JtZFc1amRHbHZiaWh6YUdsbWRDbDdYRzVjZEd4bGRDQmpkWEp5Wlc1MElEMGdkR2hwY3k1d2FYWnZkRHRjYmx4dVhIUnNaWFFnY21sbmFIUlRhR2xtZER0Y2JseDBhV1lvYzJocFpuUWdQajBnTUNsN1hHNWNkRngwY21sbmFIUlRhR2xtZENBOUlIUnlkV1U3WEc1Y2RIMWNibHh1WEhSM2FHbHNaU2h6YUdsbWRDQWhQVDBnTUNsN1hHNWNkRngwYVdZb2NtbG5hSFJUYUdsbWRDbDdYRzVjZEZ4MFhIUmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXVaWGgwTzF4dVhIUmNkRngwS0dOMWNuSmxiblFnUFQwOUlIUm9hWE11ZEdGcGJDa2dQeUFvYzJocFpuUWdQU0F3S1NBNklITm9hV1owTFMwN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkR04xY25KbGJuUWdQU0JqZFhKeVpXNTBMbkJ5WlhZN1hHNWNkRngwWEhRb1kzVnljbVZ1ZENBOVBUMGdkR2hwY3k1b1pXRmtLU0EvSUNoemFHbG1kQ0E5SURBcElEb2djMmhwWm5Rckt6dGNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUjBhR2x6TG5CcGRtOTBJRDBnWTNWeWNtVnVkRHRjYmx4dVhIUnlaWFIxY200Z2RHaHBjeTV3YVhadmREdGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXphR2xtZEZCcGRtOTBWRzlJWldGa0lEMGdablZ1WTNScGIyNG9LWHRjYmx4MGRHaHBjeTV3YVhadmRDQTlJSFJvYVhNdWFHVmhaRHRjYm4wN1hHNWNibEJwZG05MFpXUk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzV6YUdsbWRGQnBkbTkwVkc5VVlXbHNJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBkR2hwY3k1d2FYWnZkQ0E5SUhSb2FYTXVkR0ZwYkR0Y2JuMDdYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1amNtVmhkR1VnUFNCbWRXNWpkR2x2YmloaGNuSmhlU2w3WEc1Y2RHRnljbUY1TG0xaGNDZ29aV3hsYldWdWRDazlQbnRjYmx4MFhIUjBhR2x6TG1sdWMyVnlkQ2hsYkdWdFpXNTBLVHRjYmx4MGZTbGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNTBjbUYyWlhKelpTQTlJR1oxYm1OMGFXOXVLR05oYkd4aVlXTnJMQ0J5YVdkb2RGUnZUR1ZtZENsN1hHNWNkR3hsZENCamRYSnlaVzUwSUQwZ2NtbG5hSFJVYjB4bFpuUWdQeUIwYUdsekxuUmhhV3dnT2lCMGFHbHpMbWhsWVdRN1hHNWNkSGRvYVd4bEtHTjFjbkpsYm5RcGUxeHVYSFJjZEdOaGJHeGlZV05yS0dOMWNuSmxiblF1Wld4bGJXVnVkQ2s3WEc1Y2RGeDBZM1Z5Y21WdWRDQTlJSEpwWjJoMFZHOU1aV1owSUQ4Z1kzVnljbVZ1ZEM1d2NtVjJJRG9nWTNWeWNtVnVkQzV1WlhoME8xeHVYSFI5WEc1OU8xeHVYRzVjYmxCcGRtOTBaV1JNYVc1clpXUk1hWE4wTG5CeWIzUnZkSGx3WlM1MGIwRnljbUY1SUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwWTI5dWMzUWdZWEp5WVhrZ1BTQmJYVHRjYmx4MGRHaHBjeTUwY21GMlpYSnpaU2dvWld4bGJXVnVkQ2s5UG50Y2JseDBYSFJoY25KaGVTNXdkWE5vS0dWc1pXMWxiblFwTzF4dVhIUjlLVnh1WEhSeVpYUjFjbTRnWVhKeVlYazdYRzU5TzF4dVhHNVFhWFp2ZEdWa1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVaMlYwVUdsMmIzUkZiR1Z0Wlc1MElEMGdablZ1WTNScGIyNG9LWHRjYmx4MGFXWW9kR2hwY3k1d2FYWnZkQ2w3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11Y0dsMmIzUXVaV3hsYldWdWREdGNibHgwZlZ4dVhIUnlaWFIxY200Z2JuVnNiRHRjYm4wN1hHNWNibEJwZG05MFpXUk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzV1WlhoMElEMGdablZ1WTNScGIyNG9LWHRjYmx4MFkyOXVjM1FnYm1WNGRDQTlJSFJvYVhNdWNHbDJiM1F1Ym1WNGRDQS9JSFJvYVhNdWNHbDJiM1F1Ym1WNGRDQTZJQ0IwYUdsekxuQnBkbTkwTzF4dVhIUjBhR2x6TG5CcGRtOTBJRDBnYm1WNGREdGNibHgwY21WMGRYSnVJRzVsZUhRN1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWNISmxkaUE5SUdaMWJtTjBhVzl1S0NsN1hHNWNkR052Ym5OMElIQnlaWFlnUFNCMGFHbHpMbkJwZG05MExuQnlaWFlnUHlCMGFHbHpMbkJwZG05MExuQnlaWFlnT2lBZ2RHaHBjeTV3YVhadmREdGNibHgwZEdocGN5NXdhWFp2ZENBOUlIQnlaWFk3WEc1Y2RISmxkSFZ5YmlCd2NtVjJPMXh1ZlR0Y2JseHVVR2wyYjNSbFpFeHBibXRsWkV4cGMzUXVjSEp2ZEc5MGVYQmxMbWx6VUdsMmIzUklaV0ZrSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwY21WMGRYSnVJSFJvYVhNdWNHbDJiM1FnUFQwOUlIUm9hWE11YUdWaFpEdGNibjA3WEc1Y2JsQnBkbTkwWldSTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXBjMUJwZG05MFZHRnBiQ0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkSEpsZEhWeWJpQjBhR2x6TG5CcGRtOTBJRDA5UFNCMGFHbHpMblJoYVd3N1hHNTlPMXh1WEc1UWFYWnZkR1ZrVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWNtVnpaWFFnUFNCbWRXNWpkR2x2YmlncGUxeHVYSFIwYUdsekxuQnBkbTkwSUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTVvWldGa0lEMGdiblZzYkR0Y2JseDBkR2hwY3k1MFlXbHNJRDBnYm5Wc2JEdGNibHgwZEdocGN5NXNaVzVuZEdnZ1BTQXdPMXh1ZlR0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSmxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJPYjJSbGUxeHVYSFJqYjI1emRISjFZM1J2Y2lobGJHVnRaVzUwS1h0Y2JseDBYSFIwYUdsekxtVnNaVzFsYm5RZ1BTQmxiR1Z0Wlc1ME8xeHVYSFJjZEhSb2FYTXVibVY0ZENBOUlHNTFiR3c3WEc1Y2RGeDBkR2hwY3k1d2NtVjJJRDBnYm5Wc2JEdGNibHgwZlZ4dWZWeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOU9iMlJsTG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcGl2b3RlZC1saW5rZWQtbGlzdC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiBjb3B5SnNvbihqc29uKXtcblx0Y29uc3Qgc3RyaW5nSnNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXHRyZXR1cm4gSlNPTi5wYXJzZShzdHJpbmdKc29uKTtcbn1cblxuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnJheSAsIGlkTmFtZSwgcmVwbGFjZVdpdGhJZCA9IGZhbHNlLCByZXR1cm5JZHMgPSBmYWxzZSl7XG5cdGxldCBvYmplY3QgPSBudWxsO1xuXHRsZXQgaWRzID0gcmV0dXJuSWRzID8gW10gOiB1bmRlZmluZWQ7XG5cdGlmKGFycmF5KXtcblx0XHRvYmplY3QgPSB7fTtcblx0XHRsZXQgaW5kZXgsIGlkLCBjaGlsZDtcblx0XHRmb3IoaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0XHRjaGlsZCA9IGFycmF5W2luZGV4XTtcblx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpe1xuXHRcdFx0XHRpZCA9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWQgPSBjaGlsZFtpZE5hbWVdO1xuXHRcdFx0fVxuXHRcdFx0b2JqZWN0W2lkXSA9IGNoaWxkO1xuXHRcdFx0cmVwbGFjZVdpdGhJZCAmJiAoYXJyYXlbaW5kZXhdID0gaWQpO1xuXHRcdFx0cmV0dXJuSWRzICYmIGlkcy5wdXNoKGlkKTtcblx0XHR9XG5cdH1cblx0aWYocmV0dXJuSWRzKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0b2JqOiBvYmplY3QsXG5cdFx0XHRrZXlzOiBpZHNcblx0XHR9XG5cdH1cblx0cmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVEaWZmIChiYXNlRGlmZiwgZGlmZlRvQWRkLCBvYmplY3RWZXJpZmllciwgaXNDb2xsZWN0aW9uT2JqZWN0ID0gZmFsc2UpIHtcblx0Y29uc3QgYmFzZVR5cGUgPSB0eXBlb2YgKGJhc2VEaWZmKTsgLy8gdGhlIHR5cGUgb2YgbnVsbCBpcyAnb2JqZWN0J1xuXHRjb25zdCBkaWZmVHlwZSA9IHR5cGVvZiAoZGlmZlRvQWRkKTtcblxuXHRpZiAoYmFzZURpZmYgPT0gbnVsbCB8fCBkaWZmVG9BZGQgPT0gbnVsbCB8fCBiYXNlVHlwZSAhPT0gZGlmZlR5cGUgfHwgIWlzQ29sbGVjdGlvbk9iamVjdCApIHtcblx0XHRiYXNlRGlmZiA9IGRpZmZUeXBlID09PSAnb2JqZWN0JyA/ICBjb3B5SnNvbihkaWZmVG9BZGQpIDogZGlmZlRvQWRkIC8vIHJlYWNoZWQgYm90dG9tIG1vc3QgbGV2ZWxcblx0fSBlbHNlICB7XG5cdFx0Y29uc3QgYmFzZUxvb2t1cCA9IGFycmF5VG9PYmplY3QoYmFzZURpZmYsICdpZCcsIHRydWUpO1xuXHRcdGNvbnN0IGFycmF5QXNPYmogPSBhcnJheVRvT2JqZWN0KGRpZmZUb0FkZCwgJ2lkJywgZmFsc2UsIHRydWUpO1xuXHRcdGNvbnN0IGRpZmZMb29rVXAgPSBhcnJheUFzT2JqLm9iajtcblx0XHRjb25zdCBkaWZmVG9BZGRLZXlzID0gYXJyYXlBc09iai5rZXlzO1xuXG5cdFx0Ly8gYXBwbHkgZWFjaCBzdGF0ZUFzSnNvbiBkaWZmIGFwcGVhcmluZyBpbiBkaWZmVG9BZGRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZUb0FkZEtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGlkID0gZGlmZlRvQWRkS2V5c1tpXTtcblx0XHRcdGNvbnN0IG9sZFN0YXRlID0gYmFzZUxvb2t1cFtpZF07XG5cdFx0XHRjb25zdCBuZXdTdGF0ZSA9IGRpZmZMb29rVXBbaWRdO1xuXG5cdFx0XHRpZihvbGRTdGF0ZSl7XG5cdFx0XHRcdGlmICh0eXBlb2Ygb2xkU3RhdGUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIG5ld1N0YXRlICE9PSAnc3RyaW5nJyl7XG5cdFx0XHRcdFx0XHRpZiAobmV3U3RhdGVbJ2NsYXNzRGVmTmFtZSddIT09IG9sZFN0YXRlWydjbGFzc0RlZk5hbWUnXSkgeyAvLyBkZWxldGUgb3BlcmF0aW9uIHdoZXJlIGNsYXNzTmFtZXMgYXJlIG5vdCBlcXVhbFxuXHRcdFx0XHRcdFx0XHRiYXNlTG9va3VwW2lkXSA9IGNvcHlKc29uKG5ld1N0YXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ29sbGVjdGlvbk9iamVjdCA9IG5ld1N0YXRlWydjbGFzc0RlZk5hbWUnXSA9PT0gb2JqZWN0VmVyaWZpZXI7XG5cdFx0XHRcdFx0XHRcdG9sZFN0YXRlWyd2YWx1ZSddID0gY29tYmluZURpZmYob2xkU3RhdGVbJ3ZhbHVlJ10sIG5ld1N0YXRlWyd2YWx1ZSddLG9iamVjdFZlcmlmaWVyLCBpc0NvbGxlY3Rpb25PYmplY3QpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQob2xkU3RhdGUgIT09IG5ld1N0YXRlKSAmJiAoYmFzZUxvb2t1cFtpZF0gPSBjb3B5SnNvbihuZXdTdGF0ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRiYXNlTG9va3VwW2lkXSA9IGNvcHlKc29uKG5ld1N0YXRlKTtcblx0XHRcdFx0YmFzZURpZmYucHVzaChpZCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0Ly8gY2hhbmdlIGJhc2VEaWZmIGJhY2sgZnJvbSBuYW1lcyB0byB0eXBlZCBzdGF0ZXNcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhc2VEaWZmLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRiYXNlRGlmZltpXSA9IGJhc2VMb29rdXBbYmFzZURpZmZbaV1dO1xuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIGJhc2VEaWZmO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaGVscGVyLmpzIiwiaW1wb3J0IGRpZmYgZnJvbSAnZGlmZic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vLi4vbGliJztcbmltcG9ydCB7RGlmZkxvZ2dlcn0gZnJvbSAnLi8uLi9saWInO1xuXG52YXIgb2JqID0ge1xuXHR2YWx1ZTogMCxcblx0Z2V0U3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH0sXG5cdHNldFN0YXRlOiBmdW5jdGlvbih2YWwpe1xuXHRcdHRoaXMudmFsdWUgPSB2YWw7XG5cdH0sXG5cdGFwcGx5RGlmZjogZnVuY3Rpb24odmFsKXtcblx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHR9LFxuXHRnZXREaWZmOiBmdW5jdGlvbih2YWx1ZSl7XG5cdFx0cmV0dXJuIGRpZmYodmFsdWUsdGhpcy5nZXRTdGF0ZSgpKVxuXHR9XG59XG5cblxuXG5mdW5jdGlvbiBzYXZlQ2FsbGJhY2sobG9nKXtcblx0Y29uc29sZS5sb2cobG9nKVxufVxuXG52YXIgbG9nZ2VyID0gbmV3IERpZmZMb2dnZXIob2JqLHNhdmVDYWxsYmFjayk7XG5cblxub2JqLnNldFN0YXRlKDEpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRTdGF0ZSgyKTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5vYmouc2V0U3RhdGUoMyk7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxub2JqLnNldFN0YXRlKDQpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRTdGF0ZSg1KTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgVW5kbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnVuZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci5yZWRvKCk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgcmVkbzogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnJlZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciByZWRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIHJlZG86ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcblxubG9nZ2VyLnJlZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgUmVkbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5vYmouc2V0U3RhdGUoNik7XG5sb2dnZXIuc2F2ZSh0cnVlKTtcblxubG9nZ2VyLnVuZG8oKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIucmVkbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIHJlZG86ICcsIG9iai52YWx1ZSk7XG5cblxuXG4vKlxuIGNvbnNvbGUubG9nKCdCZWZvcmUgVW5kbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xuXG5sb2dnZXIudW5kbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDIpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMiBTdGVwczogJywgb2JqLnZhbHVlKTtcblxub2JqLnNldFZhbHVlKDYpO1xubG9nZ2VyLnNhdmUodHJ1ZSk7XG5cbm9iai5zZXRWYWx1ZSg3KTtcbmxvZ2dlci5zYXZlKHRydWUpO1xuXG5sb2dnZXIudW5kbygpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gMSBTdGVwczogJywgb2JqLnZhbHVlKTsqL1xuXG5cblxuXG4vKmxvZ2dlci51bmRvKDcpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gNyBTdGVwcyBtb3JlIHRoYW4gYXZhaWxhYmxlIHN0ZXBzOiAnLCBvYmoudmFsdWUpO1xubG9nZ2VyLnJlZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgUmVkbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xubG9nZ2VyLnJlZG8oNyk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgUmVkbyA3IFN0ZXBzIG1vcmUgdGhhbiBhdmFpbGFibGUgc3RlcHM6ICcsIG9iai52YWx1ZSk7Ki9cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=