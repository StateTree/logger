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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Logger = __webpack_require__(1);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Logger2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _diff2 = __webpack_require__(2);

var _diff3 = _interopRequireDefault(_diff2);

var _LogEntry = __webpack_require__(3);

var _LogEntry2 = _interopRequireDefault(_LogEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function applyDiff(steps) {
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
				prevState = getter.call(context);
			}
		}
		// now after reaching the Log entry apply the diff to current state
		setter.call(context, _diff);
	}
};

var Logger = function Logger(diffMethod, saveCallback) {
	_classCallCheck(this, Logger);

	this.context;
	this.getter;
	this.setter;

	this.undoLog = [];
	this.redoLog = [];

	this.prevState = null;
	this.nextId = 0;

	this.diffMethod = diffMethod;
	this.saveDiffCallback = saveCallback;

	this.enable = true;
};

exports.default = Logger;


Logger.prototype.setContext = function (context, getter, setter) {
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
	if (this.enable) {
		var log = void 0;
		var getDiff = this.diffMethod ? this.diffMethod : _diff3.default;
		if (this.context) {
			var state = this.getter.call(this.context);
			var diffObject = getDiff(this.prevState, state);
			// Change occurred log them
			if (diffObject.current !== undefined) {
				log = new _LogEntry2.default(this.nextId++, diffObject.current, diffObject.prev);
				this.undoLog.push(log);
				this.prevState = state;
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(log);
	}
};

/***/ }),
/* 2 */
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


var _lib = __webpack_require__(0);

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

var logger = new _lib2.default(null, saveCallback);
logger.setContext(obj, obj.getValue, obj.setValue);

obj.setValue(1);
logger.save();

obj.setValue(2);
logger.save();

obj.setValue(3);
logger.save();

obj.setValue(4);
logger.save();

obj.setValue(5);
logger.save();

console.log('Before Undo 2 Steps: ', obj.value);
logger.undo(2);
console.log('After Undo 2 Steps: ', obj.value);
logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);

logger.undo(7);
console.log('After Undo 7 Steps more than available steps: ', obj.value);
logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);
logger.redo(7);
console.log('After Redo 7 Steps more than available steps: ', obj.value);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzNzE0MjNiMTkxYzhmMjUwZmRmOCIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIiwid2VicGFjazovLy8uL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOlsiYXBwbHlEaWZmIiwic3RlcHMiLCJjb250ZXh0IiwidW5kb0xvZyIsInJlZG9Mb2ciLCJnZXR0ZXIiLCJzZXR0ZXIiLCJwcmV2U3RhdGUiLCJhYnNTdGVwcyIsIk1hdGgiLCJhYnMiLCJzdGVwc1JlbWFpbmluZyIsIm1pbiIsImxlbmd0aCIsImxvZ0VudHJ5IiwiZGlmZiIsInBvcCIsInVuc2hpZnQiLCJwcmV2Iiwic2hpZnQiLCJwdXNoIiwibmV4dCIsImNhbGwiLCJMb2dnZXIiLCJkaWZmTWV0aG9kIiwic2F2ZUNhbGxiYWNrIiwibmV4dElkIiwic2F2ZURpZmZDYWxsYmFjayIsImVuYWJsZSIsInByb3RvdHlwZSIsInNldENvbnRleHQiLCJjb25zb2xlIiwid2FybiIsInNldFNhdmVDYWxsYmFjayIsInJlbW92ZVNhdmVDYWxsYmFjayIsInVuZG8iLCJjYWxsYmFjayIsImlzTmFOIiwicmVkbyIsInNhdmUiLCJsb2ciLCJnZXREaWZmIiwic3RhdGUiLCJkaWZmT2JqZWN0IiwiY3VycmVudCIsInVuZGVmaW5lZCIsIkxvZ0VudHJ5IiwiaWQiLCJvYmoiLCJ2YWx1ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJ2YWwiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FD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RGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibG9nZ2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsb2dnZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM3MTQyM2IxOTFjOGYyNTBmZGY4IiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiaW1wb3J0IGRpZmYgZnJvbSAnZGlmZic7XG5pbXBvcnQgTG9nRW50cnkgZnJvbSAnLi9Mb2dFbnRyeSc7XG5cbmZ1bmN0aW9uIGFwcGx5RGlmZihzdGVwcykge1xuXHRjb25zdCB7Y29udGV4dCwgdW5kb0xvZywgcmVkb0xvZywgZ2V0dGVyLCBzZXR0ZXJ9ID0gdGhpcztcblx0bGV0IHsgcHJldlN0YXRlIH0gPSB0aGlzO1xuXHRjb25zdCBhYnNTdGVwcyA9IE1hdGguYWJzKHN0ZXBzKTtcblx0bGV0IHN0ZXBzUmVtYWluaW5nID0gTWF0aC5taW4oYWJzU3RlcHMsIHN0ZXBzIDwgMCA/IHVuZG9Mb2cubGVuZ3RoIDogcmVkb0xvZy5sZW5ndGgpO1xuXHRpZiAoc3RlcHNSZW1haW5pbmcgPiAwKSB7XG5cdFx0bGV0IGxvZ0VudHJ5LCBkaWZmO1xuXHRcdHdoaWxlIChzdGVwc1JlbWFpbmluZy0tID4gMCkge1xuXHRcdFx0aWYgKHN0ZXBzIDwgMCkgeyAvLyB1bmRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gdW5kb0xvZy5wb3AoKTtcblx0XHRcdFx0cmVkb0xvZy51bnNoaWZ0KGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5LnByZXY7XG5cdFx0XHR9IGVsc2UgeyAvL3JlZG9cblx0XHRcdFx0bG9nRW50cnkgPSByZWRvTG9nLnNoaWZ0KCk7XG5cdFx0XHRcdHVuZG9Mb2cucHVzaChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RlcHNSZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0cHJldlN0YXRlID0gZ2V0dGVyLmNhbGwoY29udGV4dCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIG5vdyBhZnRlciByZWFjaGluZyB0aGUgTG9nIGVudHJ5IGFwcGx5IHRoZSBkaWZmIHRvIGN1cnJlbnQgc3RhdGVcblx0XHRzZXR0ZXIuY2FsbChjb250ZXh0LCBkaWZmKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblx0Y29uc3RydWN0b3IoZGlmZk1ldGhvZCwgc2F2ZUNhbGxiYWNrKXtcblx0XHR0aGlzLmNvbnRleHQ7XG5cdFx0dGhpcy5nZXR0ZXI7XG5cdFx0dGhpcy5zZXR0ZXI7XG5cblx0XHR0aGlzLnVuZG9Mb2cgPSBbXTtcblx0XHR0aGlzLnJlZG9Mb2cgPSBbXTtcblxuXHRcdHRoaXMucHJldlN0YXRlID0gbnVsbDtcblx0XHR0aGlzLm5leHRJZCA9IDA7XG5cblx0XHR0aGlzLmRpZmZNZXRob2QgPSBkaWZmTWV0aG9kO1xuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFjaztcblxuXHRcdHRoaXMuZW5hYmxlID0gdHJ1ZTtcblx0fVxufVxuXG5Mb2dnZXIucHJvdG90eXBlLnNldENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBnZXR0ZXIsIHNldHRlcil7XG5cdGlmKCFnZXR0ZXIpe1xuXHRcdGNvbnNvbGUud2FybignQ29udGV4dCBnZXR0ZXIgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZighc2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgc2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMuZ2V0dGVyID0gZ2V0dGVyO1xuXHR0aGlzLnNldHRlciA9IHNldHRlcjtcblx0dGhpcy5wcmV2U3RhdGUgPSBnZXR0ZXIuY2FsbChjb250ZXh0KTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2V0U2F2ZUNhbGxiYWNrID0gZnVuY3Rpb24oc2F2ZUNhbGxiYWNrKXtcblx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrID0gc2F2ZUNhbGxiYWNrXG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnJlbW92ZVNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IG51bGw7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbihzdGVwcywgY2FsbGJhY2spe1xuXHRpZiAoaXNOYU4oc3RlcHMpKSB7XG5cdFx0c3RlcHMgPSAxO1xuXHR9XG5cdGFwcGx5RGlmZi5jYWxsKHRoaXMsIC1zdGVwcywgY2FsbGJhY2spO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZWRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCBzdGVwcywgY2FsbGJhY2spO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5lbmFibGUpe1xuXHRcdGxldCBsb2c7XG5cdFx0bGV0IGdldERpZmYgPSB0aGlzLmRpZmZNZXRob2QgPyB0aGlzLmRpZmZNZXRob2QgOiBkaWZmO1xuXHRcdGlmKHRoaXMuY29udGV4dCl7XG5cdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy5jb250ZXh0KTtcblx0XHRcdGNvbnN0IGRpZmZPYmplY3QgPSBnZXREaWZmKHRoaXMucHJldlN0YXRlLCBzdGF0ZSk7XG5cdFx0XHQvLyBDaGFuZ2Ugb2NjdXJyZWQgbG9nIHRoZW1cblx0XHRcdGlmIChkaWZmT2JqZWN0LmN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsb2cgPSBuZXcgTG9nRW50cnkodGhpcy5uZXh0SWQrKywgZGlmZk9iamVjdC5jdXJyZW50LCBkaWZmT2JqZWN0LnByZXYpO1xuXHRcdFx0XHR0aGlzLnVuZG9Mb2cucHVzaChsb2cpO1xuXHRcdFx0XHR0aGlzLnByZXZTdGF0ZSA9IHN0YXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgJiYgdGhpcy5zYXZlRGlmZkNhbGxiYWNrKGxvZyk7XG5cdH1cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ2dlci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3N0cmluZ0NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3N0cmluZ0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nQ29tcGFyZSk7XG5cbnZhciBfbnVtYmVyQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfbnVtYmVyQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1iZXJDb21wYXJlKTtcblxudmFyIF9kYXRlQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfZGF0ZUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZUNvbXBhcmUpO1xuXG52YXIgX2FycmF5Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfYXJyYXlDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FycmF5Q29tcGFyZSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfb2JqZWN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RDb21wYXJlKTtcblxudmFyIF9pcyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfaXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZE9ialR5cGUgPSB0eXBlb2Ygb2xkT2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvbGRPYmopO1xuICAgIHZhciBuZXdPYmpUeXBlID0gdHlwZW9mIG5ld09iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSBuZXdPYmpUeXBlKSByZXR1cm4gKDAsIF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0KShvbGRPYmpUeXBlLCBuZXdPYmpUeXBlKTtcblxuICAgIGlmIChvbGRPYmpUeXBlID09PSAnYm9vbGVhbicpIHJldHVybiAoMCwgX251bWJlckNvbXBhcmUyLmRlZmF1bHQpKE51bWJlcihvbGRPYmopLCBOdW1iZXIobmV3T2JqKSk7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gKDAsIF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gJ29iamVjdCcpIHJldHVybiAxO1xuXG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgRGF0ZSkpIHJldHVybiAoMCwgX2RhdGVDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgQXJyYXkpKSByZXR1cm4gKDAsIF9hcnJheUNvbXBhcmUyLmRlZmF1bHQpKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcbiAgICBpZiAoKDAsIF9pczIuZGVmYXVsdCkob2xkT2JqLCBPYmplY3QpKSByZXR1cm4gKDAsIF9vYmplY3RDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG5cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKSByZXN1bHQgPSAtMTtlbHNlIGlmIChyZXN1bHQgPiAxKSByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5nQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKSByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKSByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKSByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbnVtYmVyQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gZGF0ZUNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwgJiYgbmV3VmFsdWUgPT09IG51bGwpIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgbmV3VGltZSA9IG5ld1ZhbHVlLmdldFRpbWUoKTtcbiAgICBpZiAob2xkVGltZSA8IG5ld1RpbWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVGltZSA+IG5ld1RpbWUpIHJldHVybiAxO1xuXG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpICYmIGlzTmFOKG5ld1RpbWUpKSByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVGltZSkpIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdUaW1lKSkgcmV0dXJuIC0xO1xuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRhdGVDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgdmFyIG9sZE9iakxlbmd0aCA9IG9sZE9iai5sZW5ndGg7XG4gICAgdmFyIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aCkgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGRPYmpMZW5ndGg7IGkrKykge1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW2ldLCBuZXdPYmpbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9IDApIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYXJyYXlDb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3AgaW4gb2xkT2JqKSB7XG4gICAgICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KHByb3ApKSByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIGNvbXBhcmlzb25WYWx1ZSA9IHZvaWQgMDtcbiAgICBmb3IgKHByb3AgaW4gbmV3T2JqKSB7XG4gICAgICAgIGlmICghb2xkT2JqLmhhc093blByb3BlcnR5KHByb3ApKSByZXR1cm4gMTtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gKDAsIF9jb21wYXJlMi5kZWZhdWx0KShvbGRPYmpbcHJvcF0sIG5ld09ialtwcm9wXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT09IDApIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gb2JqZWN0Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub2JqZWN0Q29tcGFyZSA9IGV4cG9ydHMuYXJyYXlDb21wYXJlID0gZXhwb3J0cy5kYXRlQ29tcGFyZSA9IGV4cG9ydHMubnVtYmVyQ29tcGFyZSA9IGV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IGV4cG9ydHMuY29tcGFyZSA9IGV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxudmFyIF9kaWZmID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxudmFyIF9kaWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpZmYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGlmZjIuZGVmYXVsdDtcbmV4cG9ydHMuY29tcGFyZSA9IF9jb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5zdHJpbmdDb21wYXJlID0gX3N0cmluZ0NvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLm51bWJlckNvbXBhcmUgPSBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBfZGF0ZUNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmFycmF5Q29tcGFyZSA9IF9hcnJheUNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykgcmV0dXJuIFR5cGUgPT09IFN0cmluZztcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHJldHVybiBUeXBlID09PSBOdW1iZXI7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdib29sZWFuJykgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KSByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBpcztcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfY29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wYXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZGlmZihvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0dmFyIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkVmFsdWUsIG5ld1ZhbHVlKTtcblxuXHRpZiAoY29tcGFyaXNvblZhbHVlID09PSAwKSB7XG5cdFx0bmV3VmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHByZXY6IG9sZFZhbHVlLFxuXHRcdGN1cnJlbnQ6IG5ld1ZhbHVlXG5cdH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRpZmY7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTJORFF3TXpOall6bGxPV0l3WldWa00yTTBOaUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzlqYjIxd1lYSmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzlrWVhSbFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZZMjl0Y0dGeVpTOWhjbkpoZVVOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmIySnFaV04wUTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwybHpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5a2FXWm1MbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZiWEJoY21VaUxDSnZiR1JQWW1vaUxDSnVaWGRQWW1vaUxDSnZiR1JQWW1wVWVYQmxJaXdpYm1WM1QySnFWSGx3WlNJc0lrNTFiV0psY2lJc0lrUmhkR1VpTENKQmNuSmhlU0lzSWs5aWFtVmpkQ0lzSW5OMGNtbHVaME52YlhCaGNtVWlMQ0p2YkdSV1lXeDFaU0lzSW01bGQxWmhiSFZsSWl3aWFYTkRZWE5sVTJWdWMybDBhWFpsSWl3aVUzUnlhVzVuSWl3aWRHOU1iMk5oYkdWTWIzZGxja05oYzJVaUxDSnlaWE4xYkhRaUxDSnNiMk5oYkdWRGIyMXdZWEpsSWl3aWJuVnRZbVZ5UTI5dGNHRnlaU0lzSW1selRtRk9JaXdpWkdGMFpVTnZiWEJoY21VaUxDSnZiR1JVYVcxbElpd2laMlYwVkdsdFpTSXNJbTVsZDFScGJXVWlMQ0poY25KaGVVTnZiWEJoY21VaUxDSmpiMjF3WVhKcGMyOXVWbUZzZFdVaUxDSnZiR1JQWW1wTVpXNW5kR2dpTENKc1pXNW5kR2dpTENKdVpYZFBZbXBNWlc1bmRHZ2lMQ0pwSWl3aWIySnFaV04wUTI5dGNHRnlaU0lzSW5CeWIzQWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbVJsWm1GMWJIUWlMQ0pwY3lJc0ltOWlhaUlzSWxSNWNHVWlMQ0pDYjI5c1pXRnVJaXdpYVhOQmNuSmhlU0lzSW1ScFptWWlMQ0oxYm1SbFptbHVaV1FpTENKd2NtVjJJaXdpWTNWeWNtVnVkQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096dEJRemRFUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0QlFVVkJMRk5CUVZOQkxFOUJRVlFzUTBGQmFVSkRMRTFCUVdwQ0xFVkJRWGxDUXl4TlFVRjZRaXhGUVVOQk8wRkJRMGtzVVVGQlNVUXNWMEZCVjBNc1RVRkJaaXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEVMRlZCUVZVc1NVRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbERMRlZCUVZVc1NVRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTT3p0QlFVVktMRkZCUVU5RExHOUNRVUZ2UWtZc1RVRkJjRUlzZVVOQlFXOUNRU3hOUVVGd1FpeERRVUZRTzBGQlEwRXNVVUZCVDBjc2IwSkJRVzlDUml4TlFVRndRaXg1UTBGQmIwSkJMRTFCUVhCQ0xFTkJRVkE3TzBGQlJVRXNVVUZCU1VNc1pVRkJaVU1zVlVGQmJrSXNSVUZEU1N4UFFVRlBMRFpDUVVGalJDeFZRVUZrTEVWQlFUQkNReXhWUVVFeFFpeERRVUZRT3p0QlFVVktMRkZCUVVsRUxHVkJRV1VzVTBGQmJrSXNSVUZEU1N4UFFVRlBMRFpDUVVGalJTeFBRVUZQU2l4TlFVRlFMRU5CUVdRc1JVRkJPRUpKTEU5QlFVOUlMRTFCUVZBc1EwRkJPVUlzUTBGQlVEdEJRVU5LTEZGQlFVbERMR1ZCUVdVc1VVRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSaXhOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNaVUZCWlN4UlFVRnVRaXhGUVVOSkxFOUJRVThzTmtKQlFXTkdMRTFCUVdRc1JVRkJjMEpETEUxQlFYUkNMRU5CUVZBN08wRkJSVW9zVVVGQlNVTXNaVUZCWlN4UlFVRnVRaXhGUVVOSkxFOUJRVThzUTBGQlVEczdRVUZGU2l4UlFVRkpMR3RDUVVGSFJpeE5RVUZJTEVWQlFWZExMRWxCUVZnc1EwRkJTaXhGUVVOSkxFOUJRVThzTWtKQlFWbE1MRTFCUVZvc1JVRkJiMEpETEUxQlFYQkNMRU5CUVZBN1FVRkRTaXhSUVVGSkxHdENRVUZIUkN4TlFVRklMRVZCUVZkTkxFdEJRVmdzUTBGQlNpeEZRVU5KTEU5QlFVOHNORUpCUVdGT0xFMUJRV0lzUlVGQmNVSkRMRTFCUVhKQ0xFVkJRVFJDUml4UFFVRTFRaXhEUVVGUU8wRkJRMG9zVVVGQlNTeHJRa0ZCUjBNc1RVRkJTQ3hGUVVGWFR5eE5RVUZZTEVOQlFVb3NSVUZEU1N4UFFVRlBMRFpDUVVGalVDeE5RVUZrTEVWQlFYTkNReXhOUVVGMFFpeEZRVUU0UWtZc1QwRkJPVUlzUTBGQlVEczdRVUZGU2l4WFFVRlBMRU5CUVZBN1FVRkRTRHM3YTBKQlJXTkJMRTg3T3pzN096czdPenM3T3p0QlF6RkRaanRCUVVOQkxGTkJRVk5UTEdGQlFWUXNRMEZCZFVKRExGRkJRWFpDTEVWQlFXbERReXhSUVVGcVF5eEZRVUV5UTBNc1pVRkJNME1zUlVGQk5FUTdRVUZEZUVSQkxITkNRVUZyUWl4UFFVRlBRU3hsUVVGUUxFdEJRVEpDTEZkQlFUTkNMRWRCUVhsRFFTeGxRVUY2UXl4SFFVRXlSQ3hMUVVFM1JUczdRVUZGUVN4UlFVRkpSaXhaUVVGWkxFbEJRVm9zU1VGQmIwSkRMRmxCUVZrc1NVRkJjRU1zUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpSQ3haUVVGWkxFbEJRV2hDTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zV1VGQldTeEpRVUZvUWl4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZGQlFVbERMR1ZCUVVvc1JVRkJjVUk3UVVGRGFrSkdMRzFDUVVGWFJ5eFBRVUZQU0N4UlFVRlFMRVZCUVdsQ1NTeHBRa0ZCYWtJc1JVRkJXRHRCUVVOQlNDeHRRa0ZCVjBVc1QwRkJUMFlzVVVGQlVDeEZRVUZwUWtjc2FVSkJRV3BDTEVWQlFWZzdRVUZEU0RzN1FVRkZSQ3hSUVVGSlF5eFRRVUZUUml4UFFVRlBTQ3hSUVVGUUxFVkJRV2xDVFN4aFFVRnFRaXhEUVVFclFrd3NVVUZCTDBJc1EwRkJZanRCUVVOQkxGRkJRVWxKTEZOQlFWTXNRMEZCUXl4RFFVRmtMRVZCUTBsQkxGTkJRVk1zUTBGQlF5eERRVUZXTEVOQlJFb3NTMEZGU3l4SlFVRkpRU3hUUVVGVExFTkJRV0lzUlVGRFJFRXNVMEZCVXl4RFFVRlVPenRCUVVWS0xGZEJRVTlCTEUxQlFWQTdRVUZEU0RzN2EwSkJSV05PTEdFN096czdPenM3T3pzN096czdRVU40UW1Zc1UwRkJVMUVzWVVGQlZDeERRVUYxUWxBc1VVRkJka0lzUlVGQmFVTkRMRkZCUVdwRExFVkJRVEpET3p0QlFVVjJReXhSUVVGSlR5eE5RVUZOVWl4UlFVRk9MRXRCUVcxQ1VTeE5RVUZOVUN4UlFVRk9MRU5CUVhaQ0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1U4c1RVRkJUVklzVVVGQlRpeERRVUZLTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVkVzVFVGQlRWQXNVVUZCVGl4RFFVRktMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3TzBGQlJVb3NVVUZCU1VRc1YwRkJWME1zVVVGQlppeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPMEZCUTBvc1VVRkJTVVFzVjBGQlYwTXNVVUZCWml4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGZEJRVThzUTBGQlVEdEJRVU5JT3p0clFrRkZZMDBzWVRzN096czdPenM3T3pzN096dEJRMmhDWml4VFFVRlRSU3hYUVVGVUxFTkJRWEZDVkN4UlFVRnlRaXhGUVVFclFrTXNVVUZCTDBJc1JVRkJlVU03TzBGQlJYSkRMRkZCUVVsRUxHRkJRV0VzU1VGQllpeEpRVUZ4UWtNc1lVRkJZU3hKUVVGMFF5eEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRkZCUVVsRUxHRkJRV0VzU1VGQmFrSXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eGhRVUZoTEVsQlFXcENMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3TzBGQlJVb3NVVUZCUzFNc1ZVRkJWVllzVTBGQlUxY3NUMEZCVkN4RlFVRm1PMEZCUTBFc1VVRkJTME1zVlVGQlZWZ3NVMEZCVTFVc1QwRkJWQ3hGUVVGbU8wRkJRMEVzVVVGQlNVUXNWVUZCVlVVc1QwRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTTzBGQlEwb3NVVUZCU1VZc1ZVRkJWVVVzVDBGQlpDeEZRVU5KTEU5QlFVOHNRMEZCVURzN1FVRkZTaXhSUVVGSlNpeE5RVUZOUlN4UFFVRk9MRXRCUVd0Q1JpeE5RVUZOU1N4UFFVRk9MRU5CUVhSQ0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1Vvc1RVRkJUVVVzVDBGQlRpeERRVUZLTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVlzVFVGQlRVa3NUMEZCVGl4RFFVRktMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3TzBGQlJVb3NWMEZCVHl4RFFVRlFPMEZCUTBnN08ydENRVVZqU0N4WE96czdPenM3T3pzN096czdPMEZETTBKbU96czdPenM3UVVGRlFTeFRRVUZUU1N4WlFVRlVMRU5CUVhOQ2RFSXNUVUZCZEVJc1JVRkJPRUpETEUxQlFUbENMRVZCUTBFN1FVRkRTU3hSUVVGSlJDeFhRVUZYUXl4TlFVRm1MRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVUXNWVUZCVlN4SlFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVTXNWVUZCVlN4SlFVRmtMRVZCUTBrc1QwRkJUeXhEUVVGRExFTkJRVkk3TzBGQlJVb3NVVUZCU1hOQ0xIZENRVUZLTzBGQlEwRXNVVUZCUzBNc1pVRkJaWGhDTEU5QlFVOTVRaXhOUVVFelFqdEJRVU5CTEZGQlFVdERMR1ZCUVdWNlFpeFBRVUZQZDBJc1RVRkJNMEk3UVVGRFFTeFJRVUZKUkN4bFFVRmxSU3haUVVGdVFpeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPMEZCUTBvc1VVRkJTVVlzWlVGQlpVVXNXVUZCYmtJc1JVRkRTU3hQUVVGUExFTkJRVkE3TzBGQlJVb3NVMEZCU3l4SlFVRkxReXhKUVVGSkxFTkJRV1FzUlVGQmFVSkJMRWxCUVVsSUxGbEJRWEpDTEVWQlFXMURSeXhIUVVGdVF5eEZRVUYzUXp0QlFVTndRenRCUVVOQlNpd3dRa0ZCYTBJc2RVSkJRVkYyUWl4UFFVRlBNa0lzUTBGQlVDeERRVUZTTEVWQlFXMUNNVUlzVDBGQlR6QkNMRU5CUVZBc1EwRkJia0lzUTBGQmJFSTdRVUZEUVN4WlFVRkpTaXh0UWtGQmJVSXNRMEZCZGtJc1JVRkRTU3hQUVVGUFFTeGxRVUZRTzBGQlExQTdRVUZEUkN4WFFVRlBMRU5CUVZBN1FVRkRTRHM3YTBKQlJXTkVMRms3T3pzN096czdPenM3T3pzN1FVTTFRbVk3T3pzN096dEJRVVZCTEZOQlFWTk5MR0ZCUVZRc1EwRkJkVUkxUWl4TlFVRjJRaXhGUVVFclFrTXNUVUZCTDBJc1JVRkRRVHRCUVVOSkxGRkJRVWxFTEZkQlFWZERMRTFCUVdZc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUkN4VlFVRlZMRWxCUVdRc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUXl4VlFVRlZMRWxCUVdRc1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqczdRVUZIU2l4UlFVRkpORUlzWVVGQlNqdEJRVU5CTEZOQlFVdEJMRWxCUVV3c1NVRkJZVGRDTEUxQlFXSXNSVUZEUVR0QlFVTkpMRmxCUVVrc1EwRkJRME1zVDBGQlR6WkNMR05CUVZBc1EwRkJjMEpFTEVsQlFYUkNMRU5CUVV3c1JVRkRTU3hQUVVGUExFTkJRVU1zUTBGQlVqdEJRVU5RT3p0QlFVVkVMRkZCUVVsT0xIZENRVUZLTzBGQlEwRXNVMEZCUzAwc1NVRkJUQ3hKUVVGaE5VSXNUVUZCWWl4RlFVTkJPMEZCUTBrc1dVRkJTU3hEUVVGRFJDeFBRVUZQT0VJc1kwRkJVQ3hEUVVGelFrUXNTVUZCZEVJc1EwRkJUQ3hGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTzBGQlEwRk9MREJDUVVGclFpeDFRa0ZCVVhaQ0xFOUJRVTgyUWl4SlFVRlFMRU5CUVZJc1JVRkJjMEkxUWl4UFFVRlBORUlzU1VGQlVDeERRVUYwUWl4RFFVRnNRanRCUVVOQkxGbEJRVWxPTEc5Q1FVRnZRaXhEUVVGNFFpeEZRVU5KTEU5QlFVOUJMR1ZCUVZBN1FVRkRVRHRCUVVORUxGZEJRVThzUTBGQlVEdEJRVU5JT3p0clFrRkZZMHNzWVRzN096czdPenM3T3pzN096czdRVU5vUTJZN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0UlFVZFpSeXhQTzFGQlExSm9ReXhQTzFGQlEwRlRMR0U3VVVGRFFWRXNZVHRSUVVOQlJTeFhPMUZCUTBGSkxGazdVVUZEUVUwc1lUczdPenM3T3pzN096czdPMEZEWmtvc1UwRkJVMGtzUlVGQlZDeERRVUZaUXl4SFFVRmFMRVZCUVdsQ1F5eEpRVUZxUWl4RlFVRjFRanRCUVVOdVFpeFJRVUZKUkN4UFFVRlBMRWxCUVZBc1NVRkJaVUVzVDBGQlR5eEpRVUV4UWl4RlFVTkpMRTlCUVU4c1MwRkJVRHRCUVVOS0xGRkJRVWxCTEdWQlFXVkRMRWxCUVc1Q0xFVkJRMGtzVDBGQlR5eEpRVUZRTzBGQlEwb3NVVUZCU1VFc1UwRkJVek5DTEUxQlFXSXNSVUZEU1N4UFFVRlBMRWxCUVZBN08wRkJSVW9zVVVGQlNTeFBRVUZQTUVJc1IwRkJVQ3hMUVVGblFpeFJRVUZ3UWl4RlFVTkpMRTlCUVU5RExGTkJRVk4wUWl4TlFVRm9RanRCUVVOS0xGRkJRVWtzVDBGQlQzRkNMRWRCUVZBc1MwRkJaMElzVVVGQmNFSXNSVUZEU1N4UFFVRlBReXhUUVVGVE9VSXNUVUZCYUVJN1FVRkRTaXhSUVVGSkxFOUJRVTgyUWl4SFFVRlFMRXRCUVdkQ0xGTkJRWEJDTEVWQlEwa3NUMEZCVDBNc1UwRkJVME1zVDBGQmFFSTdRVUZEU2l4UlFVRkpSQ3hUUVVGVE5VSXNTMEZCWWl4RlFVTkpMRTlCUVU5QkxFMUJRVTA0UWl4UFFVRk9MRU5CUVdOSUxFZEJRV1FzUTBGQlVEczdRVUZGU2l4WFFVRlBMRXRCUVZBN1FVRkRTRHM3YTBKQlJXTkVMRVU3T3pzN096czdPenM3T3pzN1FVTndRbVk3T3pzN096dEJRVVZCTEZOQlFWTkxMRWxCUVZRc1EwRkJZelZDTEZGQlFXUXNSVUZCZDBKRExGRkJRWGhDTEVWQlFXbERPMEZCUTJoRExFdEJRVTFoTEd0Q1FVRnRRaXgxUWtGQlVXUXNVVUZCVWl4RlFVRnJRa01zVVVGQmJFSXNRMEZCZWtJN08wRkJSVUVzUzBGQlIyRXNiMEpCUVc5Q0xFTkJRWFpDTEVWQlFYbENPMEZCUTNoQ1lpeGhRVUZYTkVJc1UwRkJXRHRCUVVOQk96dEJRVVZGTEZGQlFVODdRVUZEVkVNc1VVRkJUVGxDTEZGQlJFYzdRVUZGVkN0Q0xGZEJRVk01UWp0QlFVWkJMRVZCUVZBN1FVRkpTRHM3YTBKQlJXTXlRaXhKSWl3aVptbHNaU0k2SW14cFlpOWthV1ptTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0prYVdabVhDSXNJRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0ltUnBabVpjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpWkdsbVpsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJRnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHRjYmlCY2RGeDBYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFhIUmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJRngwWEhSY2RGeDBaMlYwT2lCblpYUjBaWEpjYmlCY2RGeDBYSFI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQTJLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTJORFF3TXpOall6bGxPV0l3WldWa00yTTBOaUlzSW1sdGNHOXlkQ0J6ZEhKcGJtZERiMjF3WVhKbElHWnliMjBnSnk0dmMzUnlhVzVuUTI5dGNHRnlaU2RjYm1sdGNHOXlkQ0J1ZFcxaVpYSkRiMjF3WVhKbElHWnliMjBnSnk0dmJuVnRZbVZ5UTI5dGNHRnlaU2RjYm1sdGNHOXlkQ0JrWVhSbFEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJSaGRHVkRiMjF3WVhKbEoxeHVhVzF3YjNKMElHRnljbUY1UTI5dGNHRnlaU0JtY205dElDY3VMMkZ5Y21GNVEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCdlltcGxZM1JEYjIxd1lYSmxJR1p5YjIwZ0p5NHZiMkpxWldOMFEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCcGN5Qm1jbTl0SUNjdUx5NHVMMmx6SjF4dVhHNW1kVzVqZEdsdmJpQmpiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxS1Z4dWUxeHVJQ0FnSUdsbUlDaHZiR1JQWW1vZ1BUMDlJRzVsZDA5aWFpbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFpQTlQU0J1ZFd4c0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNCcFppQW9ibVYzVDJKcUlEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNibHh1SUNBZ0lHTnZibk4wSUNCdmJHUlBZbXBVZVhCbElEMGdkSGx3Wlc5bUtHOXNaRTlpYWlrN1hHNGdJQ0FnWTI5dWMzUWdJRzVsZDA5aWFsUjVjR1VnUFNCMGVYQmxiMllvYm1WM1QySnFLVHRjYmx4dUlDQWdJR2xtSUNodmJHUlBZbXBVZVhCbElDRTlQU0J1WlhkUFltcFVlWEJsS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNSeWFXNW5RMjl0Y0dGeVpTaHZiR1JQWW1wVWVYQmxMQ0J1WlhkUFltcFVlWEJsS1R0Y2JseHVJQ0FnSUdsbUlDaHZiR1JQWW1wVWVYQmxJRDA5UFNBblltOXZiR1ZoYmljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXMWlaWEpEYjIxd1lYSmxLRTUxYldKbGNpaHZiR1JQWW1vcExDQk9kVzFpWlhJb2JtVjNUMkpxS1NrN1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdQVDA5SUNkdWRXMWlaWEluS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm5WdFltVnlRMjl0Y0dGeVpTaHZiR1JQWW1vc0lHNWxkMDlpYWlrN1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWxSNWNHVWdQVDA5SUNkemRISnBibWNuS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNSeWFXNW5RMjl0Y0dGeVpTaHZiR1JQWW1vc0lHNWxkMDlpYWlrN1hHNWNiaUFnSUNCcFppQW9iMnhrVDJKcVZIbHdaU0FoUFQwZ0oyOWlhbVZqZENjcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVYRzRnSUNBZ2FXWWdLR2x6S0c5c1pFOWlhaXdnUkdGMFpTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmtZWFJsUTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpazdYRzRnSUNBZ2FXWWdLR2x6S0c5c1pFOWlhaXdnUVhKeVlYa3BLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWEp5WVhsRGIyMXdZWEpsS0c5c1pFOWlhaXdnYm1WM1QySnFMR052YlhCaGNtVXBPMXh1SUNBZ0lHbG1JQ2hwY3lodmJHUlBZbW9zSUU5aWFtVmpkQ2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1wbFkzUkRiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxTENCamIyMXdZWEpsS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUF3TzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMjl0Y0dGeVpUdGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZZMjl0Y0dGeVpTOWpiMjF3WVhKbExtcHpJaXdpTHk5b2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTFWVXk5a2IyTnpMMWRsWWk5S1lYWmhVMk55YVhCMEwxSmxabVZ5Wlc1alpTOUhiRzlpWVd4ZlQySnFaV04wY3k5VGRISnBibWN2Ykc5allXeGxRMjl0Y0dGeVpWeHVablZ1WTNScGIyNGdjM1J5YVc1blEyOXRjR0Z5WlNodmJHUldZV3gxWlN3Z2JtVjNWbUZzZFdVc0lHbHpRMkZ6WlZObGJuTnBkR2wyWlNrZ2UxeHVJQ0FnSUdselEyRnpaVk5sYm5OcGRHbDJaU0E5SUhSNWNHVnZaaUJwYzBOaGMyVlRaVzV6YVhScGRtVWdJVDA5SUNkMWJtUmxabWx1WldRbklEOGdhWE5EWVhObFUyVnVjMmwwYVhabElEb2dabUZzYzJVN1hHNWNiaUFnSUNCcFppQW9iMnhrVm1Gc2RXVWdQVDBnYm5Wc2JDQW1KaUJ1WlhkV1lXeDFaU0E5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQxWmhiSFZsSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JseHVJQ0FnSUdsbUlDaHBjME5oYzJWVFpXNXphWFJwZG1VcElIdGNiaUFnSUNBZ0lDQWdiMnhrVm1Gc2RXVWdQU0JUZEhKcGJtY29iMnhrVm1Gc2RXVXBMblJ2VEc5allXeGxURzkzWlhKRFlYTmxLQ2s3WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUQwZ1UzUnlhVzVuS0c1bGQxWmhiSFZsS1M1MGIweHZZMkZzWlV4dmQyVnlRMkZ6WlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQlRkSEpwYm1jb2IyeGtWbUZzZFdVcExteHZZMkZzWlVOdmJYQmhjbVVvYm1WM1ZtRnNkV1VwTzF4dUlDQWdJR2xtSUNoeVpYTjFiSFFnUENBdE1TbGNiaUFnSUNBZ0lDQWdjbVZ6ZFd4MElEMGdMVEU3WEc0Z0lDQWdaV3h6WlNCcFppQW9jbVZ6ZFd4MElENGdNU2xjYmlBZ0lDQWdJQ0FnY21WemRXeDBJRDBnTVR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhOMGNtbHVaME52YlhCaGNtVTdYRzVjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5amIyMXdZWEpsTDNOMGNtbHVaME52YlhCaGNtVXVhbk1pTENKY2JtWjFibU4wYVc5dUlHNTFiV0psY2tOdmJYQmhjbVVvYjJ4a1ZtRnNkV1VzSUc1bGQxWmhiSFZsS1NCN1hHNWNiaUFnSUNCcFppQW9hWE5PWVU0b2IyeGtWbUZzZFdVcElDWW1JR2x6VG1GT0tHNWxkMVpoYkhWbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlEQTdYRzRnSUNBZ2FXWWdLR2x6VG1GT0tHOXNaRlpoYkhWbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2FXWWdLR2x6VG1GT0tHNWxkMVpoYkhWbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1WEc0Z0lDQWdhV1lnS0c5c1pGWmhiSFZsSUR3Z2JtVjNWbUZzZFdVcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNCcFppQW9iMnhrVm1Gc2RXVWdQaUJ1WlhkV1lXeDFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdjbVYwZFhKdUlEQTdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc1MWJXSmxja052YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZiblZ0WW1WeVEyOXRjR0Z5WlM1cWN5SXNJbHh1Wm5WdVkzUnBiMjRnWkdGMFpVTnZiWEJoY21Vb2IyeGtWbUZzZFdVc0lHNWxkMVpoYkhWbEtTQjdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUFQwOUlHNTFiR3dnSmlZZ2JtVjNWbUZzZFdVZ1BUMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUdsbUlDaHZiR1JXWVd4MVpTQTlQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2FXWWdLRzVsZDFaaGJIVmxJRDA5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0IyWVhJZ0lHOXNaRlJwYldVZ1BTQnZiR1JXWVd4MVpTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ2RtRnlJQ0J1WlhkVWFXMWxJRDBnYm1WM1ZtRnNkV1V1WjJWMFZHbHRaU2dwTzF4dUlDQWdJR2xtSUNodmJHUlVhVzFsSUR3Z2JtVjNWR2x0WlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUdsbUlDaHZiR1JVYVcxbElENGdibVYzVkdsdFpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzVjYmlBZ0lDQnBaaUFvYVhOT1lVNG9iMnhrVkdsdFpTa2dKaVlnYVhOT1lVNG9ibVYzVkdsdFpTa3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHZiR1JVYVcxbEtTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlERTdYRzRnSUNBZ2FXWWdLR2x6VG1GT0tHNWxkMVJwYldVcEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzVjYmlBZ0lDQnlaWFIxY200Z01EdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWkdGMFpVTnZiWEJoY21VN1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwyTnZiWEJoY21VdlpHRjBaVU52YlhCaGNtVXVhbk1pTENKcGJYQnZjblFnWTI5dGNHRnlaU0JtY205dElDY3VMMk52YlhCaGNtVW5PMXh1WEc1bWRXNWpkR2x2YmlCaGNuSmhlVU52YlhCaGNtVW9iMnhrVDJKcUxDQnVaWGRQWW1vcFhHNTdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFpQTlQVDBnYm1WM1QySnFLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQnBaaUFvYjJ4a1QySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1SUNBZ0lHbG1JQ2h1WlhkUFltb2dQVDBnYm5Wc2JDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1WEc0Z0lDQWdiR1YwSUdOdmJYQmhjbWx6YjI1V1lXeDFaVHRjYmlBZ0lDQjJZWElnSUc5c1pFOWlha3hsYm1kMGFDQTlJRzlzWkU5aWFpNXNaVzVuZEdnN1hHNGdJQ0FnZG1GeUlDQnVaWGRQWW1wTVpXNW5kR2dnUFNCdVpYZFBZbW91YkdWdVozUm9PMXh1SUNBZ0lHbG1JQ2h2YkdSUFltcE1aVzVuZEdnZ1BDQnVaWGRQWW1wTVpXNW5kR2dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxVEdWdVozUm9JRDRnYm1WM1QySnFUR1Z1WjNSb0tWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNibHh1SUNBZ0lHWnZjaUFvZG1GeUlDQnBJRDBnTURzZ2FTQThJRzlzWkU5aWFreGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUM4dmNtVmpkWEp6YVhabElHTnZiWEJoY21semIyNGdiMllnWVhKeVlYa2daV3hsYldWdWRITmNiaUFnSUNBZ0lDQWdZMjl0Y0dGeWFYTnZibFpoYkhWbElEMGdZMjl0Y0dGeVpTaHZiR1JQWW1wYmFWMHNJRzVsZDA5aWFsdHBYU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMjF3WVhKcGMyOXVWbUZzZFdVZ0lUMGdNQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyMXdZWEpwYzI5dVZtRnNkV1U3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWVhKeVlYbERiMjF3WVhKbE8xeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOWpiMjF3WVhKbEwyRnljbUY1UTI5dGNHRnlaUzVxY3lJc0ltbHRjRzl5ZENCamIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaU2M3WEc1Y2JtWjFibU4wYVc5dUlHOWlhbVZqZEVOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3BYRzU3WEc0Z0lDQWdhV1lnS0c5c1pFOWlhaUE5UFQwZ2JtVjNUMkpxS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJR2xtSUNodVpYZFBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNWNiaUFnSUNCc1pYUWdjSEp2Y0R0Y2JpQWdJQ0JtYjNJZ0tIQnliM0FnYVc0Z2IyeGtUMkpxS1Z4dUlDQWdJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnVaWGRQWW1vdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNDa3BYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElHTnZiWEJoY21semIyNVdZV3gxWlR0Y2JpQWdJQ0JtYjNJZ0tIQnliM0FnYVc0Z2JtVjNUMkpxS1Z4dUlDQWdJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnZiR1JQWW1vdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNDa3BYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0FnSUNBZ0x5OXlaV04xY25OcGRtVWdZMjl0Y0dGeWFYTnZiaUJ2WmlCdlltcGxZM1FnY0hKdmNHVnlkSGxjYmlBZ0lDQWdJQ0FnWTI5dGNHRnlhWE52YmxaaGJIVmxJRDBnWTI5dGNHRnlaU2h2YkdSUFltcGJjSEp2Y0Ywc0lHNWxkMDlpYWx0d2NtOXdYU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMjF3WVhKcGMyOXVWbUZzZFdVZ0lUMDlJREFwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXRjR0Z5YVhOdmJsWmhiSFZsTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z01EdGNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc5aWFtVmpkRU52YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlM1cWN5SXNJbWx0Y0c5eWRDQnpkSEpwYm1kRGIyMXdZWEpsSUdaeWIyMGdKeTR2WTI5dGNHRnlaUzl6ZEhKcGJtZERiMjF3WVhKbEoxeHVhVzF3YjNKMElHNTFiV0psY2tOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMMjUxYldKbGNrTnZiWEJoY21VblhHNXBiWEJ2Y25RZ1pHRjBaVU52YlhCaGNtVWdabkp2YlNBbkxpOWpiMjF3WVhKbEwyUmhkR1ZEYjIxd1lYSmxKMXh1YVcxd2IzSjBJR0Z5Y21GNVEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2WVhKeVlYbERiMjF3WVhKbEoxeHVhVzF3YjNKMElHOWlhbVZqZEVOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMMjlpYW1WamRFTnZiWEJoY21VblhHNXBiWEJ2Y25RZ1kyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVV2WTI5dGNHRnlaU2RjYm1sdGNHOXlkQ0JrYVdabUlHWnliMjBnSnk0dlpHbG1aaWRjYmx4dVpYaHdiM0owSUh0Y2JpQWdJQ0JrYVdabUlHRnpJR1JsWm1GMWJIUXNYRzRnSUNBZ1kyOXRjR0Z5WlN4Y2JpQWdJQ0J6ZEhKcGJtZERiMjF3WVhKbExGeHVJQ0FnSUc1MWJXSmxja052YlhCaGNtVXNYRzRnSUNBZ1pHRjBaVU52YlhCaGNtVXNYRzRnSUNBZ1lYSnlZWGxEYjIxd1lYSmxMRnh1SUNBZ0lHOWlhbVZqZEVOdmJYQmhjbVZjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdmFXNWtaWGd1YW5NaUxDSm1kVzVqZEdsdmJpQnBjeWh2WW1vc0lGUjVjR1VwSUh0Y2JpQWdJQ0JwWmlBb2IySnFJRDA5SUc1MWJHd2dmSHdnYjJKcUlEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQnBaaUFvYjJKcUlHbHVjM1JoYm1ObGIyWWdWSGx3WlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ2FXWWdLRlI1Y0dVZ1BUMDlJRTlpYW1WamRDbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc1Y2JpQWdJQ0JwWmlBb2RIbHdaVzltS0c5aWFpa2dQVDA5SUNkemRISnBibWNuS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVkhsd1pTQTlQVDBnVTNSeWFXNW5PMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWW9iMkpxS1NBOVBUMGdKMjUxYldKbGNpY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlVlWEJsSUQwOVBTQk9kVzFpWlhJN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2Wmlodlltb3BJRDA5UFNBblltOXZiR1ZoYmljcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCVWVYQmxJRDA5UFNCQ2IyOXNaV0Z1TzF4dUlDQWdJR2xtSUNoVWVYQmxJRDA5UFNCQmNuSmhlU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRUZ5Y21GNUxtbHpRWEp5WVhrb2IySnFLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdhWE03WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJsekxtcHpJaXdpYVcxd2IzSjBJR052YlhCaGNtVWdabkp2YlNBbkxpOWpiMjF3WVhKbEwyTnZiWEJoY21Vbk8xeHVYRzVtZFc1amRHbHZiaUJrYVdabUtHOXNaRlpoYkhWbExDQnVaWGRXWVd4MVpTbDdYRzVjZEdOdmJuTjBJR052YlhCaGNtbHpiMjVXWVd4MVpTQTlJQ0JqYjIxd1lYSmxLRzlzWkZaaGJIVmxMQ0J1WlhkV1lXeDFaU2s3WEc1Y2JseDBhV1lvWTI5dGNHRnlhWE52YmxaaGJIVmxJRDA5UFNBd0tYdGNibHgwWEhSdVpYZFdZV3gxWlNBOUlIVnVaR1ZtYVc1bFpEdGNibHgwZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSHRjYmx4MFhIUndjbVYyT2lCdmJHUldZV3gxWlN4Y2JseDBYSFJqZFhKeVpXNTBPaUJ1WlhkV1lXeDFaVnh1WEhSOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JrYVdabU8xeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOWthV1ptTG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ0VudHJ5IHtcblx0Y29uc3RydWN0b3IoaWQsIG5leHQsIHByZXYpe1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5leHQgPSBuZXh0O1xuXHRcdHRoaXMucHJldiA9IHByZXY7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvTG9nRW50cnkuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vLi4vbGliJztcblxudmFyIG9iaiA9IHtcblx0dmFsdWU6IDAsXG5cdGdldFZhbHVlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24odmFsKXtcblx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNhdmVDYWxsYmFjayhsb2cpe1xuXHRjb25zb2xlLmxvZyhsb2cpXG59XG5cbnZhciBsb2dnZXIgPSBuZXcgTG9nZ2VyKG51bGwsc2F2ZUNhbGxiYWNrKTtcbmxvZ2dlci5zZXRDb250ZXh0KG9iaixvYmouZ2V0VmFsdWUsIG9iai5zZXRWYWx1ZSk7XG5cblxub2JqLnNldFZhbHVlKDEpO1xubG9nZ2VyLnNhdmUoKTtcblxub2JqLnNldFZhbHVlKDIpO1xubG9nZ2VyLnNhdmUoKTtcblxub2JqLnNldFZhbHVlKDMpO1xubG9nZ2VyLnNhdmUoKTtcblxub2JqLnNldFZhbHVlKDQpO1xubG9nZ2VyLnNhdmUoKTtcblxub2JqLnNldFZhbHVlKDUpO1xubG9nZ2VyLnNhdmUoKTtcblxuY29uc29sZS5sb2coJ0JlZm9yZSBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIudW5kbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBVbmRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5sb2dnZXIucmVkbygyKTtcbmNvbnNvbGUubG9nKCdBZnRlciBSZWRvIDIgU3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cbmxvZ2dlci51bmRvKDcpO1xuY29uc29sZS5sb2coJ0FmdGVyIFVuZG8gNyBTdGVwcyBtb3JlIHRoYW4gYXZhaWxhYmxlIHN0ZXBzOiAnLCBvYmoudmFsdWUpO1xubG9nZ2VyLnJlZG8oMik7XG5jb25zb2xlLmxvZygnQWZ0ZXIgUmVkbyAyIFN0ZXBzOiAnLCBvYmoudmFsdWUpO1xubG9nZ2VyLnJlZG8oNyk7XG5jb25zb2xlLmxvZygnQWZ0ZXIgUmVkbyA3IFN0ZXBzIG1vcmUgdGhhbiBhdmFpbGFibGUgc3RlcHM6ICcsIG9iai52YWx1ZSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=