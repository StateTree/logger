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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMjM5ZDhhZjc4OGZlZjlhYmY3YyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0xvZ0VudHJ5LmpzIl0sIm5hbWVzIjpbImFwcGx5RGlmZiIsInN0ZXBzIiwiY2FsbGJhY2siLCJjb250ZXh0IiwidW5kb0xvZyIsInJlZG9Mb2ciLCJnZXR0ZXIiLCJzZXR0ZXIiLCJwcmV2U3RhdGUiLCJhYnNTdGVwcyIsIk1hdGgiLCJhYnMiLCJzdGVwc1JlbWFpbmluZyIsIm1pbiIsImxlbmd0aCIsImxvZ0VudHJ5IiwiZGlmZiIsInBvcCIsInVuc2hpZnQiLCJwcmV2Iiwic2hpZnQiLCJwdXNoIiwibmV4dCIsInZhbHVlIiwiZGlmZkFwcGxpZWQiLCJjYWxsIiwiTG9nZ2VyIiwic2F2ZUNhbGxiYWNrIiwiZGlmZk1ldGhvZCIsIm5leHRJZCIsInNhdmVEaWZmQ2FsbGJhY2siLCJlbmFibGUiLCJwcm90b3R5cGUiLCJzZXRDb250ZXh0IiwiY29uc29sZSIsIndhcm4iLCJzZXRTYXZlQ2FsbGJhY2siLCJyZW1vdmVTYXZlQ2FsbGJhY2siLCJ1bmRvIiwiaXNOYU4iLCJyZWRvIiwic2F2ZSIsImxvZyIsImdldERpZmYiLCJzdGF0ZSIsImRpZmZPYmplY3QiLCJjdXJyZW50IiwidW5kZWZpbmVkIiwibmV4dExvZyIsIkxvZ0VudHJ5IiwiaWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QWhCLEVBQXNCSCxJQUF0QixFQUEyQjtBQUFBOztBQUMxQixNQUFLK0IsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsTUFBSzVCLElBQUwsR0FBWUEsSUFBWjtBQUNBLE1BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLEM7O2tCQUxtQjhCLFEiLCJmaWxlIjoibGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsb2dnZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibG9nZ2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxvZ2dlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzIzOWQ4YWY3ODhmZWY5YWJmN2MiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vTG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgZGlmZiBmcm9tICdkaWZmJztcbmltcG9ydCBMb2dFbnRyeSBmcm9tICcuL0xvZ0VudHJ5JztcblxuZnVuY3Rpb24gYXBwbHlEaWZmKHN0ZXBzLCBjYWxsYmFjaykge1xuXHRjb25zdCB7Y29udGV4dCwgdW5kb0xvZywgcmVkb0xvZywgZ2V0dGVyLCBzZXR0ZXJ9ID0gdGhpcztcblx0bGV0IHsgcHJldlN0YXRlIH0gPSB0aGlzO1xuXHRjb25zdCBhYnNTdGVwcyA9IE1hdGguYWJzKHN0ZXBzKTtcblx0bGV0IHN0ZXBzUmVtYWluaW5nID0gTWF0aC5taW4oYWJzU3RlcHMsIHN0ZXBzIDwgMCA/IHVuZG9Mb2cubGVuZ3RoIDogcmVkb0xvZy5sZW5ndGgpO1xuXHRpZiAoc3RlcHNSZW1haW5pbmcgPiAwKSB7XG5cdFx0bGV0IGxvZ0VudHJ5LCBkaWZmO1xuXHRcdHdoaWxlIChzdGVwc1JlbWFpbmluZy0tID4gMCkge1xuXHRcdFx0aWYgKHN0ZXBzIDwgMCkgeyAvLyB1bmRvXG5cdFx0XHRcdGxvZ0VudHJ5ID0gdW5kb0xvZy5wb3AoKTtcblx0XHRcdFx0cmVkb0xvZy51bnNoaWZ0KGxvZ0VudHJ5KTtcblx0XHRcdFx0ZGlmZiA9IGxvZ0VudHJ5LnByZXY7XG5cdFx0XHR9IGVsc2UgeyAvL3JlZG9cblx0XHRcdFx0bG9nRW50cnkgPSByZWRvTG9nLnNoaWZ0KCk7XG5cdFx0XHRcdHVuZG9Mb2cucHVzaChsb2dFbnRyeSk7XG5cdFx0XHRcdGRpZmYgPSBsb2dFbnRyeS5uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RlcHNSZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBkaWZmLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IHRydWU7XG5cdFx0Ly8gbm93IGFmdGVyIHJlYWNoaW5nIHRoZSBMb2cgZW50cnkgYXBwbHkgdGhlIGRpZmYgdG8gY3VycmVudCBzdGF0ZVxuXHRcdHNldHRlci5jYWxsKGNvbnRleHQsIGRpZmYsIGNhbGxiYWNrKTtcblx0fSBlbHNlIHtcblx0XHQvLyBzaW5jZSBwcmltaXRpdmUgYXJlIGltbXV0YWJsZSB3ZSBkb24ndCBjYWxsIHRoZW0gaW4gc3ByZWFkIGRlY2xhcmF0aW9uIGFib3ZlXG5cdFx0dGhpcy5kaWZmQXBwbGllZCA9IGZhbHNlO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKHNhdmVDYWxsYmFjayl7XG5cdFx0dGhpcy5jb250ZXh0O1xuXHRcdHRoaXMuZ2V0dGVyO1xuXHRcdHRoaXMuc2V0dGVyO1xuXHRcdHRoaXMuZGlmZk1ldGhvZDtcblxuXHRcdHRoaXMudW5kb0xvZyA9IFtdO1xuXHRcdHRoaXMucmVkb0xvZyA9IFtdO1xuXG5cdFx0dGhpcy5wcmV2U3RhdGUgPSBudWxsO1xuXHRcdHRoaXMubmV4dElkID0gMDtcblxuXHRcdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFjaztcblxuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVuYWJsZSA9IHRydWU7XG5cdH1cbn1cblxuTG9nZ2VyLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgZ2V0dGVyLCBzZXR0ZXIsIGRpZmZNZXRob2Qpe1xuXHRpZighZ2V0dGVyKXtcblx0XHRjb25zb2xlLndhcm4oJ0NvbnRleHQgZ2V0dGVyIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoIXNldHRlcil7XG5cdFx0Y29uc29sZS53YXJuKCdDb250ZXh0IHNldHRlciBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmdldHRlciA9IGdldHRlcjtcblx0dGhpcy5zZXR0ZXIgPSBzZXR0ZXI7XG5cdHRoaXMuZGlmZk1ldGhvZCA9IGRpZmZNZXRob2Q7XG5cdHRoaXMucHJldlN0YXRlID0gZ2V0dGVyLmNhbGwoY29udGV4dCk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLnNldFNhdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHNhdmVDYWxsYmFjayl7XG5cdHRoaXMuc2F2ZURpZmZDYWxsYmFjayA9IHNhdmVDYWxsYmFja1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5yZW1vdmVTYXZlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe1xuXHR0aGlzLnNhdmVEaWZmQ2FsbGJhY2sgPSBudWxsO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oc3RlcHMsIGNhbGxiYWNrKXtcblx0aWYgKGlzTmFOKHN0ZXBzKSkge1xuXHRcdHN0ZXBzID0gMTtcblx0fVxuXHRhcHBseURpZmYuY2FsbCh0aGlzLCAtc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKHN0ZXBzLCBjYWxsYmFjayl7XG5cdGlmIChpc05hTihzdGVwcykpIHtcblx0XHRzdGVwcyA9IDE7XG5cdH1cblx0YXBwbHlEaWZmLmNhbGwodGhpcywgc3RlcHMsIGNhbGxiYWNrKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuZGlmZkFwcGxpZWQpe1xuXHRcdHRoaXMuZGlmZkFwcGxpZWQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZih0aGlzLmVuYWJsZSl7XG5cdFx0bGV0IGxvZztcblx0XHRsZXQgZ2V0RGlmZiA9IHRoaXMuZGlmZk1ldGhvZCA/IHRoaXMuZGlmZk1ldGhvZCA6IGRpZmY7XG5cdFx0aWYodGhpcy5jb250ZXh0KXtcblx0XHRcdGNvbnN0IHN0YXRlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLmNvbnRleHQpO1xuXHRcdFx0Y29uc3QgZGlmZk9iamVjdCA9IGdldERpZmYodGhpcy5wcmV2U3RhdGUsIHN0YXRlKTtcblx0XHRcdC8vIENoYW5nZSBvY2N1cnJlZCBsb2cgdGhlbVxuXHRcdFx0aWYgKGRpZmZPYmplY3QuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxvZyA9IG5ldyBMb2dFbnRyeSh0aGlzLm5leHRJZCsrLCBkaWZmT2JqZWN0LmN1cnJlbnQsIGRpZmZPYmplY3QucHJldik7XG5cdFx0XHRcdGlmKHRoaXMucmVkb0xvZy5sZW5ndGggIT09IDApe1xuXHRcdFx0XHRcdGNvbnN0IG5leHRMb2cgPSB0aGlzLnJlZG9Mb2dbMF07XG5cdFx0XHRcdFx0bmV4dExvZy5wcmV2ID0gbG9nLm5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy51bmRvTG9nLnB1c2gobG9nKTtcblx0XHRcdFx0dGhpcy5wcmV2U3RhdGUgPSBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zYXZlRGlmZkNhbGxiYWNrICYmIHRoaXMuc2F2ZURpZmZDYWxsYmFjayhsb2cpO1xuXHR9XG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Mb2dnZXIuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zdHJpbmdDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9zdHJpbmdDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ0NvbXBhcmUpO1xuXG52YXIgX251bWJlckNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX251bWJlckNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyQ29tcGFyZSk7XG5cbnZhciBfZGF0ZUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2RhdGVDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RhdGVDb21wYXJlKTtcblxudmFyIF9hcnJheUNvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2FycmF5Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJheUNvbXBhcmUpO1xuXG52YXIgX29iamVjdENvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX29iamVjdENvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0Q29tcGFyZSk7XG5cbnZhciBfaXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX2lzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iaikge1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iaikgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIHZhciBvbGRPYmpUeXBlID0gdHlwZW9mIG9sZE9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2xkT2JqKTtcbiAgICB2YXIgbmV3T2JqVHlwZSA9IHR5cGVvZiBuZXdPYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSkgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gKDAsIF9udW1iZXJDb21wYXJlMi5kZWZhdWx0KShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJykgcmV0dXJuICgwLCBfbnVtYmVyQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJykgcmV0dXJuICgwLCBfc3RyaW5nQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKSByZXR1cm4gMTtcblxuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIERhdGUpKSByZXR1cm4gKDAsIF9kYXRlQ29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmICgoMCwgX2lzMi5kZWZhdWx0KShvbGRPYmosIEFycmF5KSkgcmV0dXJuICgwLCBfYXJyYXlDb21wYXJlMi5kZWZhdWx0KShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG4gICAgaWYgKCgwLCBfaXMyLmRlZmF1bHQpKG9sZE9iaiwgT2JqZWN0KSkgcmV0dXJuICgwLCBfb2JqZWN0Q29tcGFyZTIuZGVmYXVsdCkob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb21wYXJlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSkgcmVzdWx0ID0gLTE7ZWxzZSBpZiAocmVzdWx0ID4gMSkgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ0NvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSkgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSkgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG51bWJlckNvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKSByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKSByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSkgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKSByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkYXRlQ29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopIHtcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgICB2YXIgY29tcGFyaXNvblZhbHVlID0gdm9pZCAwO1xuICAgIHZhciBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKSByZXR1cm4gMTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFycmF5Q29tcGFyZTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKSByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgdmFyIHByb3AgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iaikge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBjb21wYXJpc29uVmFsdWUgPSB2b2lkIDA7XG4gICAgZm9yIChwcm9wIGluIG5ld09iaikge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9ICgwLCBfY29tcGFyZTIuZGVmYXVsdCkob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKSByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9iamVjdENvbXBhcmU7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9iamVjdENvbXBhcmUgPSBleHBvcnRzLmFycmF5Q29tcGFyZSA9IGV4cG9ydHMuZGF0ZUNvbXBhcmUgPSBleHBvcnRzLm51bWJlckNvbXBhcmUgPSBleHBvcnRzLnN0cmluZ0NvbXBhcmUgPSBleHBvcnRzLmNvbXBhcmUgPSBleHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RyaW5nQ29tcGFyZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfc3RyaW5nQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdDb21wYXJlKTtcblxudmFyIF9udW1iZXJDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9udW1iZXJDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWJlckNvbXBhcmUpO1xuXG52YXIgX2RhdGVDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9kYXRlQ29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRlQ29tcGFyZSk7XG5cbnZhciBfYXJyYXlDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9hcnJheUNvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJyYXlDb21wYXJlKTtcblxudmFyIF9vYmplY3RDb21wYXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9vYmplY3RDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdENvbXBhcmUpO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbnZhciBfZGlmZiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfZGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaWZmKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RpZmYyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBhcmUgPSBfY29tcGFyZTIuZGVmYXVsdDtcbmV4cG9ydHMuc3RyaW5nQ29tcGFyZSA9IF9zdHJpbmdDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5udW1iZXJDb21wYXJlID0gX251bWJlckNvbXBhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmRhdGVDb21wYXJlID0gX2RhdGVDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5hcnJheUNvbXBhcmUgPSBfYXJyYXlDb21wYXJlMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3RDb21wYXJlID0gX29iamVjdENvbXBhcmUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSkgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gaXM7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbXBhcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGRpZmYob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdHZhciBjb21wYXJpc29uVmFsdWUgPSAoMCwgX2NvbXBhcmUyLmRlZmF1bHQpKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cblx0aWYgKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCkge1xuXHRcdG5ld1ZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwcmV2OiBvbGRWYWx1ZSxcblx0XHRjdXJyZW50OiBuZXdWYWx1ZVxuXHR9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkaWZmO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EyTkRRd016TmpZemxsT1dJd1pXVmtNMk0wTmlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5amIyMXdZWEpsTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YkdsaUwyTnZiWEJoY21VdmJuVnRZbVZ5UTI5dGNHRnlaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlkyOXRjR0Z5WlM5a1lYUmxRMjl0Y0dGeVpTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2WTI5dGNHRnlaUzloY25KaGVVTnZiWEJoY21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMk52YlhCaGNtVXZiMkpxWldOMFEyOXRjR0Z5WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJHbGlMMmx6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOWthV1ptTG1weklsMHNJbTVoYldWeklqcGJJbU52YlhCaGNtVWlMQ0p2YkdSUFltb2lMQ0p1WlhkUFltb2lMQ0p2YkdSUFltcFVlWEJsSWl3aWJtVjNUMkpxVkhsd1pTSXNJazUxYldKbGNpSXNJa1JoZEdVaUxDSkJjbkpoZVNJc0lrOWlhbVZqZENJc0luTjBjbWx1WjBOdmJYQmhjbVVpTENKdmJHUldZV3gxWlNJc0ltNWxkMVpoYkhWbElpd2lhWE5EWVhObFUyVnVjMmwwYVhabElpd2lVM1J5YVc1bklpd2lkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVWlMQ0p5WlhOMWJIUWlMQ0pzYjJOaGJHVkRiMjF3WVhKbElpd2liblZ0WW1WeVEyOXRjR0Z5WlNJc0ltbHpUbUZPSWl3aVpHRjBaVU52YlhCaGNtVWlMQ0p2YkdSVWFXMWxJaXdpWjJWMFZHbHRaU0lzSW01bGQxUnBiV1VpTENKaGNuSmhlVU52YlhCaGNtVWlMQ0pqYjIxd1lYSnBjMjl1Vm1Gc2RXVWlMQ0p2YkdSUFltcE1aVzVuZEdnaUxDSnNaVzVuZEdnaUxDSnVaWGRQWW1wTVpXNW5kR2dpTENKcElpd2liMkpxWldOMFEyOXRjR0Z5WlNJc0luQnliM0FpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW1SbFptRjFiSFFpTENKcGN5SXNJbTlpYWlJc0lsUjVjR1VpTENKQ2IyOXNaV0Z1SWl3aWFYTkJjbkpoZVNJc0ltUnBabVlpTENKMWJtUmxabWx1WldRaUxDSndjbVYySWl3aVkzVnljbVZ1ZENKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN096czdPenRCUXpkRVFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dEJRVVZCTEZOQlFWTkJMRTlCUVZRc1EwRkJhVUpETEUxQlFXcENMRVZCUVhsQ1F5eE5RVUY2UWl4RlFVTkJPMEZCUTBrc1VVRkJTVVFzVjBGQlYwTXNUVUZCWml4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxFTEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS0xGRkJRVWxETEZWQlFWVXNTVUZCWkN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU096dEJRVVZLTEZGQlFVOURMRzlDUVVGdlFrWXNUVUZCY0VJc2VVTkJRVzlDUVN4TlFVRndRaXhEUVVGUU8wRkJRMEVzVVVGQlQwY3NiMEpCUVc5Q1JpeE5RVUZ3UWl4NVEwRkJiMEpCTEUxQlFYQkNMRU5CUVZBN08wRkJSVUVzVVVGQlNVTXNaVUZCWlVNc1ZVRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSQ3hWUVVGa0xFVkJRVEJDUXl4VlFVRXhRaXhEUVVGUU96dEJRVVZLTEZGQlFVbEVMR1ZCUVdVc1UwRkJia0lzUlVGRFNTeFBRVUZQTERaQ1FVRmpSU3hQUVVGUFNpeE5RVUZRTEVOQlFXUXNSVUZCT0VKSkxFOUJRVTlJTEUxQlFWQXNRMEZCT1VJc1EwRkJVRHRCUVVOS0xGRkJRVWxETEdWQlFXVXNVVUZCYmtJc1JVRkRTU3hQUVVGUExEWkNRVUZqUml4TlFVRmtMRVZCUVhOQ1F5eE5RVUYwUWl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zWlVGQlpTeFJRVUZ1UWl4RlFVTkpMRTlCUVU4c05rSkJRV05HTEUxQlFXUXNSVUZCYzBKRExFMUJRWFJDTEVOQlFWQTdPMEZCUlVvc1VVRkJTVU1zWlVGQlpTeFJRVUZ1UWl4RlFVTkpMRTlCUVU4c1EwRkJVRHM3UVVGRlNpeFJRVUZKTEd0Q1FVRkhSaXhOUVVGSUxFVkJRVmRMTEVsQlFWZ3NRMEZCU2l4RlFVTkpMRTlCUVU4c01rSkJRVmxNTEUxQlFWb3NSVUZCYjBKRExFMUJRWEJDTEVOQlFWQTdRVUZEU2l4UlFVRkpMR3RDUVVGSFJDeE5RVUZJTEVWQlFWZE5MRXRCUVZnc1EwRkJTaXhGUVVOSkxFOUJRVThzTkVKQlFXRk9MRTFCUVdJc1JVRkJjVUpETEUxQlFYSkNMRVZCUVRSQ1JpeFBRVUUxUWl4RFFVRlFPMEZCUTBvc1VVRkJTU3hyUWtGQlIwTXNUVUZCU0N4RlFVRlhUeXhOUVVGWUxFTkJRVW9zUlVGRFNTeFBRVUZQTERaQ1FVRmpVQ3hOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhGUVVFNFFrWXNUMEZCT1VJc1EwRkJVRHM3UVVGRlNpeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05CTEU4N096czdPenM3T3pzN096dEJRekZEWmp0QlFVTkJMRk5CUVZOVExHRkJRVlFzUTBGQmRVSkRMRkZCUVhaQ0xFVkJRV2xEUXl4UlFVRnFReXhGUVVFeVEwTXNaVUZCTTBNc1JVRkJORVE3UVVGRGVFUkJMSE5DUVVGclFpeFBRVUZQUVN4bFFVRlFMRXRCUVRKQ0xGZEJRVE5DTEVkQlFYbERRU3hsUVVGNlF5eEhRVUV5UkN4TFFVRTNSVHM3UVVGRlFTeFJRVUZKUml4WlFVRlpMRWxCUVZvc1NVRkJiMEpETEZsQlFWa3NTVUZCY0VNc1JVRkRTU3hQUVVGUExFTkJRVkE3UVVGRFNpeFJRVUZKUkN4WlFVRlpMRWxCUVdoQ0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VNc1dVRkJXU3hKUVVGb1FpeEZRVU5KTEU5QlFVOHNRMEZCUXl4RFFVRlNPenRCUVVWS0xGRkJRVWxETEdWQlFVb3NSVUZCY1VJN1FVRkRha0pHTEcxQ1FVRlhSeXhQUVVGUFNDeFJRVUZRTEVWQlFXbENTU3hwUWtGQmFrSXNSVUZCV0R0QlFVTkJTQ3h0UWtGQlYwVXNUMEZCVDBZc1VVRkJVQ3hGUVVGcFFrY3NhVUpCUVdwQ0xFVkJRVmc3UVVGRFNEczdRVUZGUkN4UlFVRkpReXhUUVVGVFJpeFBRVUZQU0N4UlFVRlFMRVZCUVdsQ1RTeGhRVUZxUWl4RFFVRXJRa3dzVVVGQkwwSXNRMEZCWWp0QlFVTkJMRkZCUVVsSkxGTkJRVk1zUTBGQlF5eERRVUZrTEVWQlEwbEJMRk5CUVZNc1EwRkJReXhEUVVGV0xFTkJSRW9zUzBGRlN5eEpRVUZKUVN4VFFVRlRMRU5CUVdJc1JVRkRSRUVzVTBGQlV5eERRVUZVT3p0QlFVVktMRmRCUVU5QkxFMUJRVkE3UVVGRFNEczdhMEpCUldOT0xHRTdPenM3T3pzN096czdPenM3UVVONFFtWXNVMEZCVTFFc1lVRkJWQ3hEUVVGMVFsQXNVVUZCZGtJc1JVRkJhVU5ETEZGQlFXcERMRVZCUVRKRE96dEJRVVYyUXl4UlFVRkpUeXhOUVVGTlVpeFJRVUZPTEV0QlFXMUNVU3hOUVVGTlVDeFJRVUZPTEVOQlFYWkNMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVOHNUVUZCVFZJc1VVRkJUaXhEUVVGS0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1ZFc1RVRkJUVkFzVVVGQlRpeERRVUZLTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlNVUXNWMEZCVjBNc1VVRkJaaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTTzBGQlEwb3NVVUZCU1VRc1YwRkJWME1zVVVGQlppeEZRVU5KTEU5QlFVOHNRMEZCVUR0QlFVTktMRmRCUVU4c1EwRkJVRHRCUVVOSU96dHJRa0ZGWTAwc1lUczdPenM3T3pzN096czdPenRCUTJoQ1ppeFRRVUZUUlN4WFFVRlVMRU5CUVhGQ1ZDeFJRVUZ5UWl4RlFVRXJRa01zVVVGQkwwSXNSVUZCZVVNN08wRkJSWEpETEZGQlFVbEVMR0ZCUVdFc1NVRkJZaXhKUVVGeFFrTXNZVUZCWVN4SlFVRjBReXhGUVVOSkxFOUJRVThzUTBGQlVEdEJRVU5LTEZGQlFVbEVMR0ZCUVdFc1NVRkJha0lzUlVGRFNTeFBRVUZQTEVOQlFWQTdRVUZEU2l4UlFVRkpReXhoUVVGaExFbEJRV3BDTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlMxTXNWVUZCVlZZc1UwRkJVMWNzVDBGQlZDeEZRVUZtTzBGQlEwRXNVVUZCUzBNc1ZVRkJWVmdzVTBGQlUxVXNUMEZCVkN4RlFVRm1PMEZCUTBFc1VVRkJTVVFzVlVGQlZVVXNUMEZCWkN4RlFVTkpMRTlCUVU4c1EwRkJReXhEUVVGU08wRkJRMG9zVVVGQlNVWXNWVUZCVlVVc1QwRkJaQ3hGUVVOSkxFOUJRVThzUTBGQlVEczdRVUZGU2l4UlFVRkpTaXhOUVVGTlJTeFBRVUZPTEV0QlFXdENSaXhOUVVGTlNTeFBRVUZPTEVOQlFYUkNMRVZCUTBrc1QwRkJUeXhEUVVGUU8wRkJRMG9zVVVGQlNVb3NUVUZCVFVVc1QwRkJUaXhEUVVGS0xFVkJRMGtzVDBGQlR5eERRVUZRTzBGQlEwb3NVVUZCU1VZc1RVRkJUVWtzVDBGQlRpeERRVUZLTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVjBGQlR5eERRVUZRTzBGQlEwZzdPMnRDUVVWalNDeFhPenM3T3pzN096czdPenM3TzBGRE0wSm1PenM3T3pzN1FVRkZRU3hUUVVGVFNTeFpRVUZVTEVOQlFYTkNkRUlzVFVGQmRFSXNSVUZCT0VKRExFMUJRVGxDTEVWQlEwRTdRVUZEU1N4UlFVRkpSQ3hYUVVGWFF5eE5RVUZtTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVVFzVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRlFPMEZCUTBvc1VVRkJTVU1zVlVGQlZTeEpRVUZrTEVWQlEwa3NUMEZCVHl4RFFVRkRMRU5CUVZJN08wRkJSVW9zVVVGQlNYTkNMSGRDUVVGS08wRkJRMEVzVVVGQlMwTXNaVUZCWlhoQ0xFOUJRVTk1UWl4TlFVRXpRanRCUVVOQkxGRkJRVXRETEdWQlFXVjZRaXhQUVVGUGQwSXNUVUZCTTBJN1FVRkRRU3hSUVVGSlJDeGxRVUZsUlN4WlFVRnVRaXhGUVVOSkxFOUJRVThzUTBGQlF5eERRVUZTTzBGQlEwb3NVVUZCU1VZc1pVRkJaVVVzV1VGQmJrSXNSVUZEU1N4UFFVRlBMRU5CUVZBN08wRkJSVW9zVTBGQlN5eEpRVUZMUXl4SlFVRkpMRU5CUVdRc1JVRkJhVUpCTEVsQlFVbElMRmxCUVhKQ0xFVkJRVzFEUnl4SFFVRnVReXhGUVVGM1F6dEJRVU53UXp0QlFVTkJTaXd3UWtGQmEwSXNkVUpCUVZGMlFpeFBRVUZQTWtJc1EwRkJVQ3hEUVVGU0xFVkJRVzFDTVVJc1QwRkJUekJDTEVOQlFWQXNRMEZCYmtJc1EwRkJiRUk3UVVGRFFTeFpRVUZKU2l4dFFrRkJiVUlzUTBGQmRrSXNSVUZEU1N4UFFVRlBRU3hsUVVGUU8wRkJRMUE3UVVGRFJDeFhRVUZQTEVOQlFWQTdRVUZEU0RzN2EwSkJSV05FTEZrN096czdPenM3T3pzN096czdRVU0xUW1ZN096czdPenRCUVVWQkxGTkJRVk5OTEdGQlFWUXNRMEZCZFVJMVFpeE5RVUYyUWl4RlFVRXJRa01zVFVGQkwwSXNSVUZEUVR0QlFVTkpMRkZCUVVsRUxGZEJRVmRETEUxQlFXWXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlJDeFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVZBN1FVRkRTaXhSUVVGSlF5eFZRVUZWTEVsQlFXUXNSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanM3UVVGSFNpeFJRVUZKTkVJc1lVRkJTanRCUVVOQkxGTkJRVXRCTEVsQlFVd3NTVUZCWVRkQ0xFMUJRV0lzUlVGRFFUdEJRVU5KTEZsQlFVa3NRMEZCUTBNc1QwRkJUelpDTEdOQlFWQXNRMEZCYzBKRUxFbEJRWFJDTEVOQlFVd3NSVUZEU1N4UFFVRlBMRU5CUVVNc1EwRkJVanRCUVVOUU96dEJRVVZFTEZGQlFVbE9MSGRDUVVGS08wRkJRMEVzVTBGQlMwMHNTVUZCVEN4SlFVRmhOVUlzVFVGQllpeEZRVU5CTzBGQlEwa3NXVUZCU1N4RFFVRkRSQ3hQUVVGUE9FSXNZMEZCVUN4RFFVRnpRa1FzU1VGQmRFSXNRMEZCVEN4RlFVTkpMRTlCUVU4c1EwRkJVRHRCUVVOS08wRkJRMEZPTERCQ1FVRnJRaXgxUWtGQlVYWkNMRTlCUVU4MlFpeEpRVUZRTEVOQlFWSXNSVUZCYzBJMVFpeFBRVUZQTkVJc1NVRkJVQ3hEUVVGMFFpeERRVUZzUWp0QlFVTkJMRmxCUVVsT0xHOUNRVUZ2UWl4RFFVRjRRaXhGUVVOSkxFOUJRVTlCTEdWQlFWQTdRVUZEVUR0QlFVTkVMRmRCUVU4c1EwRkJVRHRCUVVOSU96dHJRa0ZGWTBzc1lUczdPenM3T3pzN096czdPenM3UVVOb1EyWTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dFJRVWRaUnl4UE8xRkJRMUpvUXl4UE8xRkJRMEZUTEdFN1VVRkRRVkVzWVR0UlFVTkJSU3hYTzFGQlEwRkpMRms3VVVGRFFVMHNZVHM3T3pzN096czdPenM3TzBGRFprb3NVMEZCVTBrc1JVRkJWQ3hEUVVGWlF5eEhRVUZhTEVWQlFXbENReXhKUVVGcVFpeEZRVUYxUWp0QlFVTnVRaXhSUVVGSlJDeFBRVUZQTEVsQlFWQXNTVUZCWlVFc1QwRkJUeXhKUVVFeFFpeEZRVU5KTEU5QlFVOHNTMEZCVUR0QlFVTktMRkZCUVVsQkxHVkJRV1ZETEVsQlFXNUNMRVZCUTBrc1QwRkJUeXhKUVVGUU8wRkJRMG9zVVVGQlNVRXNVMEZCVXpOQ0xFMUJRV0lzUlVGRFNTeFBRVUZQTEVsQlFWQTdPMEZCUlVvc1VVRkJTU3hQUVVGUE1FSXNSMEZCVUN4TFFVRm5RaXhSUVVGd1FpeEZRVU5KTEU5QlFVOURMRk5CUVZOMFFpeE5RVUZvUWp0QlFVTktMRkZCUVVrc1QwRkJUM0ZDTEVkQlFWQXNTMEZCWjBJc1VVRkJjRUlzUlVGRFNTeFBRVUZQUXl4VFFVRlRPVUlzVFVGQmFFSTdRVUZEU2l4UlFVRkpMRTlCUVU4MlFpeEhRVUZRTEV0QlFXZENMRk5CUVhCQ0xFVkJRMGtzVDBGQlQwTXNVMEZCVTBNc1QwRkJhRUk3UVVGRFNpeFJRVUZKUkN4VFFVRlROVUlzUzBGQllpeEZRVU5KTEU5QlFVOUJMRTFCUVUwNFFpeFBRVUZPTEVOQlFXTklMRWRCUVdRc1EwRkJVRHM3UVVGRlNpeFhRVUZQTEV0QlFWQTdRVUZEU0RzN2EwSkJSV05FTEVVN096czdPenM3T3pzN096czdRVU53UW1ZN096czdPenRCUVVWQkxGTkJRVk5MTEVsQlFWUXNRMEZCWXpWQ0xGRkJRV1FzUlVGQmQwSkRMRkZCUVhoQ0xFVkJRV2xETzBGQlEyaERMRXRCUVUxaExHdENRVUZ0UWl4MVFrRkJVV1FzVVVGQlVpeEZRVUZyUWtNc1VVRkJiRUlzUTBGQmVrSTdPMEZCUlVFc1MwRkJSMkVzYjBKQlFXOUNMRU5CUVhaQ0xFVkJRWGxDTzBGQlEzaENZaXhoUVVGWE5FSXNVMEZCV0R0QlFVTkJPenRCUVVWRkxGRkJRVTg3UVVGRFZFTXNVVUZCVFRsQ0xGRkJSRWM3UVVGRlZDdENMRmRCUVZNNVFqdEJRVVpCTEVWQlFWQTdRVUZKU0RzN2EwSkJSV015UWl4Sklpd2labWxzWlNJNklteHBZaTlrYVdabUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKa2FXWm1YQ0lzSUZ0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbVJwWm1aY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVpHbG1abHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0EyS1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EyTkRRd016TmpZemxsT1dJd1pXVmtNMk0wTmlJc0ltbHRjRzl5ZENCemRISnBibWREYjIxd1lYSmxJR1p5YjIwZ0p5NHZjM1J5YVc1blEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCdWRXMWlaWEpEYjIxd1lYSmxJR1p5YjIwZ0p5NHZiblZ0WW1WeVEyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCa1lYUmxRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyUmhkR1ZEYjIxd1lYSmxKMXh1YVcxd2IzSjBJR0Z5Y21GNVEyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJGeWNtRjVRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQnZZbXBsWTNSRGIyMXdZWEpsSUdaeWIyMGdKeTR2YjJKcVpXTjBRMjl0Y0dGeVpTZGNibWx0Y0c5eWRDQnBjeUJtY205dElDY3VMeTR1TDJsekoxeHVYRzVtZFc1amRHbHZiaUJqYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUtWeHVlMXh1SUNBZ0lHbG1JQ2h2YkdSUFltb2dQVDA5SUc1bGQwOWlhaWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0c5c1pFOWlhaUE5UFNCdWRXeHNLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmlBZ0lDQnBaaUFvYm1WM1QySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmx4dUlDQWdJR052Ym5OMElDQnZiR1JQWW1wVWVYQmxJRDBnZEhsd1pXOW1LRzlzWkU5aWFpazdYRzRnSUNBZ1kyOXVjM1FnSUc1bGQwOWlhbFI1Y0dVZ1BTQjBlWEJsYjJZb2JtVjNUMkpxS1R0Y2JseHVJQ0FnSUdsbUlDaHZiR1JQWW1wVWVYQmxJQ0U5UFNCdVpYZFBZbXBVZVhCbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuUTI5dGNHRnlaU2h2YkdSUFltcFVlWEJsTENCdVpYZFBZbXBVZVhCbEtUdGNibHh1SUNBZ0lHbG1JQ2h2YkdSUFltcFVlWEJsSUQwOVBTQW5ZbTl2YkdWaGJpY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkVzFpWlhKRGIyMXdZWEpsS0U1MWJXSmxjaWh2YkdSUFltb3BMQ0JPZFcxaVpYSW9ibVYzVDJKcUtTazdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZHVkVzFpWlhJbktWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnRZbVZ5UTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpazdYRzRnSUNBZ2FXWWdLRzlzWkU5aWFsUjVjR1VnUFQwOUlDZHpkSEpwYm1jbktWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuUTI5dGNHRnlaU2h2YkdSUFltb3NJRzVsZDA5aWFpazdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1QySnFWSGx3WlNBaFBUMGdKMjlpYW1WamRDY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXhPMXh1WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1JHRjBaU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrWVhSbFEyOXRjR0Z5WlNodmJHUlBZbW9zSUc1bGQwOWlhaWs3WEc0Z0lDQWdhV1lnS0dsektHOXNaRTlpYWl3Z1FYSnlZWGtwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhKeVlYbERiMjF3WVhKbEtHOXNaRTlpYWl3Z2JtVjNUMkpxTEdOdmJYQmhjbVVwTzF4dUlDQWdJR2xtSUNocGN5aHZiR1JQWW1vc0lFOWlhbVZqZENrcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdlltcGxZM1JEYjIxd1lYSmxLRzlzWkU5aWFpd2dibVYzVDJKcUxDQmpiMjF3WVhKbEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlBd08xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTI5dGNHRnlaVHRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2WTI5dGNHRnlaUzlqYjIxd1lYSmxMbXB6SWl3aUx5OW9kSFJ3Y3pvdkwyUmxkbVZzYjNCbGNpNXRiM3BwYkd4aExtOXlaeTlsYmkxVlV5OWtiMk56TDFkbFlpOUtZWFpoVTJOeWFYQjBMMUpsWm1WeVpXNWpaUzlIYkc5aVlXeGZUMkpxWldOMGN5OVRkSEpwYm1jdmJHOWpZV3hsUTI5dGNHRnlaVnh1Wm5WdVkzUnBiMjRnYzNSeWFXNW5RMjl0Y0dGeVpTaHZiR1JXWVd4MVpTd2dibVYzVm1Gc2RXVXNJR2x6UTJGelpWTmxibk5wZEdsMlpTa2dlMXh1SUNBZ0lHbHpRMkZ6WlZObGJuTnBkR2wyWlNBOUlIUjVjR1Z2WmlCcGMwTmhjMlZUWlc1emFYUnBkbVVnSVQwOUlDZDFibVJsWm1sdVpXUW5JRDhnYVhORFlYTmxVMlZ1YzJsMGFYWmxJRG9nWm1Gc2MyVTdYRzVjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUFQwZ2JuVnNiQ0FtSmlCdVpYZFdZV3gxWlNBOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnYVdZZ0tHNWxkMVpoYkhWbElEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNibHh1SUNBZ0lHbG1JQ2hwYzBOaGMyVlRaVzV6YVhScGRtVXBJSHRjYmlBZ0lDQWdJQ0FnYjJ4a1ZtRnNkV1VnUFNCVGRISnBibWNvYjJ4a1ZtRnNkV1VwTG5SdlRHOWpZV3hsVEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdVM1J5YVc1bktHNWxkMVpoYkhWbEtTNTBiMHh2WTJGc1pVeHZkMlZ5UTJGelpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0JUZEhKcGJtY29iMnhrVm1Gc2RXVXBMbXh2WTJGc1pVTnZiWEJoY21Vb2JtVjNWbUZzZFdVcE8xeHVJQ0FnSUdsbUlDaHlaWE4xYkhRZ1BDQXRNU2xjYmlBZ0lDQWdJQ0FnY21WemRXeDBJRDBnTFRFN1hHNGdJQ0FnWld4elpTQnBaaUFvY21WemRXeDBJRDRnTVNsY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ01UdGNibHh1SUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElITjBjbWx1WjBOdmJYQmhjbVU3WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOWpiMjF3WVhKbEwzTjBjbWx1WjBOdmJYQmhjbVV1YW5NaUxDSmNibVoxYm1OMGFXOXVJRzUxYldKbGNrTnZiWEJoY21Vb2IyeGtWbUZzZFdVc0lHNWxkMVpoYkhWbEtTQjdYRzVjYmlBZ0lDQnBaaUFvYVhOT1lVNG9iMnhrVm1Gc2RXVXBJQ1ltSUdselRtRk9LRzVsZDFaaGJIVmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzlzWkZaaGJIVmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzVsZDFaaGJIVmxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnYVdZZ0tHOXNaRlpoYkhWbElEd2dibVYzVm1Gc2RXVXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnUGlCdVpYZFdZV3gxWlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SURFN1hHNGdJQ0FnY21WMGRYSnVJREE3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHNTFiV0psY2tOdmJYQmhjbVU3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2Ym5WdFltVnlRMjl0Y0dGeVpTNXFjeUlzSWx4dVpuVnVZM1JwYjI0Z1pHRjBaVU52YlhCaGNtVW9iMnhrVm1Gc2RXVXNJRzVsZDFaaGJIVmxLU0I3WEc1Y2JpQWdJQ0JwWmlBb2IyeGtWbUZzZFdVZ1BUMDlJRzUxYkd3Z0ppWWdibVYzVm1Gc2RXVWdQVDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lHbG1JQ2h2YkdSV1lXeDFaU0E5UFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0c1bGQxWmhiSFZsSUQwOVBTQnVkV3hzS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNWNiaUFnSUNCMllYSWdJRzlzWkZScGJXVWdQU0J2YkdSV1lXeDFaUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdkbUZ5SUNCdVpYZFVhVzFsSUQwZ2JtVjNWbUZzZFdVdVoyVjBWR2x0WlNncE8xeHVJQ0FnSUdsbUlDaHZiR1JVYVcxbElEd2dibVYzVkdsdFpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lHbG1JQ2h2YkdSVWFXMWxJRDRnYm1WM1ZHbHRaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc1Y2JpQWdJQ0JwWmlBb2FYTk9ZVTRvYjJ4a1ZHbHRaU2tnSmlZZ2FYTk9ZVTRvYm1WM1ZHbHRaU2twWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF3TzF4dUlDQWdJR2xtSUNocGMwNWhUaWh2YkdSVWFXMWxLU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREU3WEc0Z0lDQWdhV1lnS0dselRtRk9LRzVsZDFScGJXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1pHRjBaVU52YlhCaGNtVTdYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMk52YlhCaGNtVXZaR0YwWlVOdmJYQmhjbVV1YW5NaUxDSnBiWEJ2Y25RZ1kyOXRjR0Z5WlNCbWNtOXRJQ2N1TDJOdmJYQmhjbVVuTzF4dVhHNW1kVzVqZEdsdmJpQmhjbkpoZVVOdmJYQmhjbVVvYjJ4a1QySnFMQ0J1WlhkUFltb3BYRzU3WEc0Z0lDQWdhV1lnS0c5c1pFOWlhaUE5UFQwZ2JtVjNUMkpxS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0JwWmlBb2IyeGtUMkpxSUQwOUlHNTFiR3dwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQWdJR2xtSUNodVpYZFBZbW9nUFQwZ2JuVnNiQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dVhHNGdJQ0FnYkdWMElHTnZiWEJoY21semIyNVdZV3gxWlR0Y2JpQWdJQ0IyWVhJZ0lHOXNaRTlpYWt4bGJtZDBhQ0E5SUc5c1pFOWlhaTVzWlc1bmRHZzdYRzRnSUNBZ2RtRnlJQ0J1WlhkUFltcE1aVzVuZEdnZ1BTQnVaWGRQWW1vdWJHVnVaM1JvTzF4dUlDQWdJR2xtSUNodmJHUlBZbXBNWlc1bmRHZ2dQQ0J1WlhkUFltcE1aVzVuZEdncFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNCcFppQW9iMnhrVDJKcVRHVnVaM1JvSUQ0Z2JtVjNUMkpxVEdWdVozUm9LVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJQ0JwSUQwZ01Ec2dhU0E4SUc5c1pFOWlha3hsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDOHZjbVZqZFhKemFYWmxJR052YlhCaGNtbHpiMjRnYjJZZ1lYSnlZWGtnWld4bGJXVnVkSE5jYmlBZ0lDQWdJQ0FnWTI5dGNHRnlhWE52YmxaaGJIVmxJRDBnWTI5dGNHRnlaU2h2YkdSUFltcGJhVjBzSUc1bGQwOWlhbHRwWFNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdJVDBnTUNsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjF3WVhKcGMyOXVWbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQXdPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1lYSnlZWGxEYjIxd1lYSmxPMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlqYjIxd1lYSmxMMkZ5Y21GNVEyOXRjR0Z5WlM1cWN5SXNJbWx0Y0c5eWRDQmpiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlNjN1hHNWNibVoxYm1OMGFXOXVJRzlpYW1WamRFTnZiWEJoY21Vb2IyeGtUMkpxTENCdVpYZFBZbW9wWEc1N1hHNGdJQ0FnYVdZZ0tHOXNaRTlpYWlBOVBUMGdibVYzVDJKcUtWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNCcFppQW9iMnhrVDJKcUlEMDlJRzUxYkd3cFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUdsbUlDaHVaWGRQWW1vZ1BUMGdiblZzYkNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVYRzVjYmlBZ0lDQnNaWFFnY0hKdmNEdGNiaUFnSUNCbWIzSWdLSEJ5YjNBZ2FXNGdiMnhrVDJKcUtWeHVJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z1WlhkUFltb3VhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjQ2twWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJR052YlhCaGNtbHpiMjVXWVd4MVpUdGNiaUFnSUNCbWIzSWdLSEJ5YjNBZ2FXNGdibVYzVDJKcUtWeHVJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z2YkdSUFltb3VhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjQ2twWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNBZ0lDQWdMeTl5WldOMWNuTnBkbVVnWTI5dGNHRnlhWE52YmlCdlppQnZZbXBsWTNRZ2NISnZjR1Z5ZEhsY2JpQWdJQ0FnSUNBZ1kyOXRjR0Z5YVhOdmJsWmhiSFZsSUQwZ1kyOXRjR0Z5WlNodmJHUlBZbXBiY0hKdmNGMHNJRzVsZDA5aWFsdHdjbTl3WFNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjIxd1lYSnBjMjl1Vm1Gc2RXVWdJVDA5SURBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjl0Y0dGeWFYTnZibFpoYkhWbE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdNRHRjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHOWlhbVZqZEVOdmJYQmhjbVU3WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZiR2xpTDJOdmJYQmhjbVV2YjJKcVpXTjBRMjl0Y0dGeVpTNXFjeUlzSW1sdGNHOXlkQ0J6ZEhKcGJtZERiMjF3WVhKbElHWnliMjBnSnk0dlkyOXRjR0Z5WlM5emRISnBibWREYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzUxYldKbGNrTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDI1MWJXSmxja052YlhCaGNtVW5YRzVwYlhCdmNuUWdaR0YwWlVOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMMlJoZEdWRGIyMXdZWEpsSjF4dWFXMXdiM0owSUdGeWNtRjVRMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdllYSnlZWGxEYjIxd1lYSmxKMXh1YVcxd2IzSjBJRzlpYW1WamRFTnZiWEJoY21VZ1puSnZiU0FuTGk5amIyMXdZWEpsTDI5aWFtVmpkRU52YlhCaGNtVW5YRzVwYlhCdmNuUWdZMjl0Y0dGeVpTQm1jbTl0SUNjdUwyTnZiWEJoY21VdlkyOXRjR0Z5WlNkY2JtbHRjRzl5ZENCa2FXWm1JR1p5YjIwZ0p5NHZaR2xtWmlkY2JseHVaWGh3YjNKMElIdGNiaUFnSUNCa2FXWm1JR0Z6SUdSbFptRjFiSFFzWEc0Z0lDQWdZMjl0Y0dGeVpTeGNiaUFnSUNCemRISnBibWREYjIxd1lYSmxMRnh1SUNBZ0lHNTFiV0psY2tOdmJYQmhjbVVzWEc0Z0lDQWdaR0YwWlVOdmJYQmhjbVVzWEc0Z0lDQWdZWEp5WVhsRGIyMXdZWEpsTEZ4dUlDQWdJRzlpYW1WamRFTnZiWEJoY21WY2JuMWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZhVzVrWlhndWFuTWlMQ0ptZFc1amRHbHZiaUJwY3lodlltb3NJRlI1Y0dVcElIdGNiaUFnSUNCcFppQW9iMkpxSUQwOUlHNTFiR3dnZkh3Z2IySnFJRDA5SUc1MWJHd3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0JwWmlBb2IySnFJR2x1YzNSaGJtTmxiMllnVkhsd1pTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdhV1lnS0ZSNWNHVWdQVDA5SUU5aWFtVmpkQ2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUtHOWlhaWtnUFQwOUlDZHpkSEpwYm1jbktWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ZIbHdaU0E5UFQwZ1UzUnlhVzVuTzF4dUlDQWdJR2xtSUNoMGVYQmxiMllvYjJKcUtTQTlQVDBnSjI1MWJXSmxjaWNwWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJVZVhCbElEMDlQU0JPZFcxaVpYSTdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppaHZZbW9wSUQwOVBTQW5ZbTl2YkdWaGJpY3BYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlVlWEJsSUQwOVBTQkNiMjlzWldGdU8xeHVJQ0FnSUdsbUlDaFVlWEJsSUQwOVBTQkJjbkpoZVNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUVGeWNtRjVMbWx6UVhKeVlYa29iMkpxS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYVhNN1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YkdsaUwybHpMbXB6SWl3aWFXMXdiM0owSUdOdmJYQmhjbVVnWm5KdmJTQW5MaTlqYjIxd1lYSmxMMk52YlhCaGNtVW5PMXh1WEc1bWRXNWpkR2x2YmlCa2FXWm1LRzlzWkZaaGJIVmxMQ0J1WlhkV1lXeDFaU2w3WEc1Y2RHTnZibk4wSUdOdmJYQmhjbWx6YjI1V1lXeDFaU0E5SUNCamIyMXdZWEpsS0c5c1pGWmhiSFZsTENCdVpYZFdZV3gxWlNrN1hHNWNibHgwYVdZb1kyOXRjR0Z5YVhOdmJsWmhiSFZsSUQwOVBTQXdLWHRjYmx4MFhIUnVaWGRXWVd4MVpTQTlJSFZ1WkdWbWFXNWxaRHRjYmx4MGZWeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JseDBYSFJ3Y21WMk9pQnZiR1JXWVd4MVpTeGNibHgwWEhSamRYSnlaVzUwT2lCdVpYZFdZV3gxWlZ4dVhIUjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCa2FXWm1PMXh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlrYVdabUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dFbnRyeSB7XG5cdGNvbnN0cnVjdG9yKGlkLCBuZXh0LCBwcmV2KXtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uZXh0ID0gbmV4dDtcblx0XHR0aGlzLnByZXYgPSBwcmV2O1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0xvZ0VudHJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==