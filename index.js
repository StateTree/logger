!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("logger",[],e):"object"==typeof exports?exports.logger=e():t.logger=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(null==t&&null==e)return 0;if(null==t)return 1;if(null==e)return-1;n||(t=String(t).toLocaleLowerCase(),e=String(e).toLocaleLowerCase());var r=String(t).localeCompare(e);return r<-1?r=-1:r>1&&(r=1),r},o=function(t,e){return isNaN(t)&&isNaN(e)?0:isNaN(t)?1:isNaN(e)?-1:t<e?-1:t>e?1:0},i=function(t,e){if(t===e)return 0;if(null==t)return 1;if(null==e)return-1;var n,r=t.length,o=e.length;if(r<o)return-1;if(r>o)return 1;for(var i=0;i<r;i++)if(0!=(n=a(t[i],e[i])))return n;return 0},u=function(t,e){if(t===e)return 0;if(null==t)return 1;if(null==e)return-1;var n=Object.keys(t),r=Object.keys(e),o=n.length,i=r.length;if(o===i&&0===o)return 0;if(o>i)return 1;if(o<i)return-1;for(var u,f,l=0;l<o;l++)if(u=n[l],!e.hasOwnProperty(u))return-1;for(l=0;l<i;l++)if(u=r[l],0!==(f=a(t[u],e[u])))return f;return 0},f=function(t,e){return null!=t&&null!=e&&(t instanceof e||("string"==typeof t?e===String:"number"==typeof t?e===Number:"boolean"==typeof t&&e===Boolean))};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=function(t,e){if(t===e)return 0;if(null==t)return 1;if(null==e)return-1;var n=l(t),a=l(e);return n!==a?r(n,a):"boolean"===n?o(Number(t),Number(e)):"number"===n?o(t,e):"string"===n?r(t,e):f(t,Date)?function(t,e){if(null===t&&null===e)return 0;if(null===t)return 1;if(null===e)return-1;var n=t.getTime(),r=e.getTime();return n<r?-1:n>r?1:0}(t,e):f(t,Array)?i(t,e):f(t,Object)?u(t,e):0};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return"object"!==c(t)||null===t?t:Array.isArray(t)?function(t){return t.map(function(t){return s(t)})}(t):function(t){var e={};return Object.keys(t).forEach(function(n){var r=t[n];e[n]=s(r)},{}),e}(t)}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if("object"!==p(t)&&"object"!==p(e))throw new Error("Expecting Object got obj1 type: ".concat(p(t)," and  obj2 type: ").concat(p(e)));for(var n,r,o,i=Object.keys(t),u=Object.keys(e),f=i.length,l=u.length,c=0,y=0,v=0,b={},h={},d={},m=0;m<f;m++)n=i[m],e.hasOwnProperty(n)?(d[n]=!0,r=t[n],o=e[n],a(r,o)&&(h[n]="object"===p(r)?s(r):r,b[n]="object"===p(o)?s(o):o,c++)):(r=t[n],h[n]="object"===p(r)?s(r):r,v++);for(m=0;m<l;m++)d[n=u[m]]||(o=e[n],h[n]="delete",b[n]="object"===p(o)?s(o):o,y++);return{forward:b,backward:h,count:y+c+v}}function v(t,e,n,r){n||(n=s);var o=p(t),i=p(e);if(!t||!e||o!==i)return"object"===i?n(e):e;t&&(t=n(t)),e&&(e=n(e));for(var u=Object.keys(e),f=0;f<u.length;f++){var l=u[f],a=t[l],c=e[l];r&&"delete"===c?delete t[l]:a&&"object"===p(a)&&"object"===p(c)?t[l]=b(a,c):t[l]=c}return t}function b(t,e,n){return v(t,e,n)}function h(t,e,n){return v(t,e,n,!0)}function d(t,e){return 0===a(t,e)&&(e=void 0),e}n.d(e,"default",function(){return d}),n.d(e,"compare",function(){return a}),n.d(e,"getDiff",function(){return y}),n.d(e,"combineDiff",function(){return b}),n.d(e,"applyDiff",function(){return h})}])},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.next=null,this.prev=null};n.d(e,"default",function(){return o});var o=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pivot=null,this.head=null,this.tail=null,this.length=0,e&&this.create(e)};o.prototype.insert=function(t,e,n){var o,i,u=new r(t);this.length++,this.pivot?this.pivot.next?(o=this.pivot,i=this.pivot.next,e&&e(o,u,i),u.next=o.next,u.prev=o,o.next=u,i.prev=u,this.pivot=u,n&&n(o,u,i)):(o=this.pivot,e&&e(o,u),o.next=u,u.prev=o,this.pivot=u,this.tail=u,n&&n(o,u)):(e&&e(u),this.pivot=u,this.head=u,n&&n(u))},o.prototype.shiftPivot=function(t){var e,n=this.pivot;for(t>=0&&(e=!0);0!==t;)e?(n=n.next)===this.tail?t=0:t--:(n=n.prev)===this.head?t=0:t++;return this.pivot=n,this.pivot},o.prototype.shiftPivotToHead=function(){this.pivot=this.head},o.prototype.shiftPivotToTail=function(){this.pivot=this.tail},o.prototype.create=function(t){var e=this;t.map(function(t){e.insert(t)})},o.prototype.traverse=function(t,e){for(var n=e?this.tail:this.head;n;)t(n.element),n=e?n.prev:n.next},o.prototype.toArray=function(){var t=[];return this.traverse(function(e){t.push(e)}),t},o.prototype.getPivotElement=function(){return this.pivot?this.pivot.element:null},o.prototype.next=function(){var t=this.pivot.next?this.pivot.next:this.pivot;return this.pivot=t,t},o.prototype.prev=function(){var t=this.pivot.prev?this.pivot.prev:this.pivot;return this.pivot=t,t},o.prototype.isPivotHead=function(){return this.pivot===this.head},o.prototype.isPivotTail=function(){return this.pivot===this.tail},o.prototype.reset=function(){this.pivot=null,this.head=null,this.tail=null,this.length=0}}])},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){var e=JSON.stringify(t);return JSON.parse(e)}function f(t,e){var n,r,o,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=arguments.length>3&&void 0!==arguments[3]&&arguments[3],f=null,l=u?[]:void 0;if(t)for(f={},n=0;n<t.length;n++)f[r="string"==typeof(o=t[n])?o:o[e]]=o,i&&(t[n]=r),u&&l.push(r);return u?{obj:f,keys:l}:f}function l(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=i(t),l=i(e);if(null!=t&&null!=e&&o===l&&r){for(var a=f(t,"id",!0),c=f(e,"id",!1,!0),s=c.obj,p=c.keys,y=0;y<p.length;y++){var v=p[y],b=a[v],h=s[v];if(b)if("string"!=typeof b){if("string"!=typeof h)if(h.classDefName!==b.classDefName)a[v]=u(h);else{var d=h.classDefName===n;b.value=combineDiff(b.value,h.value,n,d)}}else b!==h&&(a[v]=u(h));else a[v]=u(h),t.push(v)}for(var m=0;m<t.length;m++)t[m]=a[t[m]]}else t="object"===l?u(e):e;return t}function a(t){return"object"!==i(t)||null===t?t:Array.isArray(t)?function(t){return t.map(function(t){return a(t)})}(t):function(t){var e={};return Object.keys(t).forEach(function(n){var r=t[n];e[n]=a(r)},{}),e}(t)}var c=n(0);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,n){if(n){var r=e.element.forward,o=e.element.backward,i=n.element.forward,u=n.element.backward,f=Object(c.combineDiff)(u,r),l=Object(c.combineDiff)(i,o);e.forward=f,e.backward=l}}function y(t,e,n){for(var r,o;t>0;){"backward"===e?(r=n.pivot,n.shiftPivot(-1)):"forward"===e&&(r=n.shiftPivot(1));var i=r.element[e];o=Object(c.combineDiff)(o,i),t-=1}return o}function v(t,e,n){return"undo"===n?y(-e,"backward",t):y(e,"forward",t)}var b=function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.logList=new o.a([]),this.saveDiffCallback=null,this.enable=!0,this.lastActiveState=n?e:a(e)};function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e,n){if(n){var r=e.element.forward,o=e.element.backward,i=n.element.forward,u=l(n.element.backward.value,r.value,this.objectVerifier,!0),f=l(i.value,o.value,this.objectVerifier,!0);e.forward=u,e.backward=f}}function m(t,e,n,r){for(var o,i;t>0;){"backward"===e?(o=n.pivot,n.shiftPivot(-1)):"forward"===e&&(o=n.shiftPivot(1));var u=o.element[e];i=l(i,u.value,r,u.classDefName===r),t-=1}return i}function g(t,e,n,r){var o,i=this.context,u=this.logList;r&&(this.objectVerifier=r),o="undo"===e?m(-t,"backward",u,r):m(t,"forward",u,r);var f=this;i.applyDiff.call(i,o,function(){S.call(f),n()})}function S(){this.lastActiveState=this.context.getState()}b.prototype.setSaveCallback=function(t){this.saveDiffCallback=t},b.prototype.removeSaveCallback=function(){this.saveDiffCallback=null},b.prototype.undo=function(t){isNaN(t)&&(t=1);var e=v(this.logList,-t,"undo"),n=Object(c.applyDiff)(this.lastActiveState,e);return this.lastActiveState=n,a(n)},b.prototype.redo=function(t){isNaN(t)&&(t=1);var e=v(this.logList,t,"redo"),n=Object(c.applyDiff)(this.lastActiveState,e);return this.lastActiveState=n,a(n)},b.prototype.save=function(t){if(this.enable){var e=Object(c.getDiff)(this.lastActiveState,t),n=e.forward,r=e.backward;"object"===s(n)&&"object"===s(r)&&(this.logList.insert(e,p),this.lastActiveState=a(t)),this.saveDiffCallback&&this.saveDiffCallback(e)}},b.prototype.getCurrentLog=function(){return this.logList?this.logList.getPivotElement():null},b.prototype.clear=function(){this.logList.reset()};var j=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||console.error("Context cant be null"),e.applyDiff||console.error("Context needs to implement applyDiff method"),e.getState||console.error("Context needs to implement getState method"),e.getDiff||console.error("Context needs to implement getDiff method"),this.context=e,this.logList=new o.a([]),this.saveDiffCallback=null,this.enable=!0,this.objectVerifier=n,S.call(this),this.objectVerifier,d=d.bind(this)};j.prototype.setSaveCallback=function(t){this.saveDiffCallback=t},j.prototype.removeSaveCallback=function(){this.saveDiffCallback=null},j.prototype.undo=function(t,e,n){isNaN(t)&&(t=1),g.call(this,-t,"undo",e,n)},j.prototype.redo=function(t,e,n){isNaN(t)&&(t=1),g.call(this,t,"redo",e,n)},j.prototype.save=function(){if(this.enable){var t;if(this.context){var e=t=this.context.getDiff(this.lastActiveState,!0),n=e.forward,r=e.backward;"object"===h(n)&&"object"===h(r)&&(this.logList.insert(t,d),S.call(this))}this.saveDiffCallback&&this.saveDiffCallback(t)}},j.prototype.getCurrentLog=function(){return this.logList?this.logList.getPivotElement():null},j.prototype.clear=function(){this.logList.reset()},n.d(e,"default",function(){return b}),n.d(e,"DiffLogger",function(){return j})}])});