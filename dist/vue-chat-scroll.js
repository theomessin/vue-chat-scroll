/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_v_chat_scroll_js__ = __webpack_require__(1);
/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-chat-scroll plugin definition
 */



var VueChatScroll = {
    install: function install(Vue, options) {
        Vue.directive('chat-scroll', __WEBPACK_IMPORTED_MODULE_0__directives_v_chat_scroll_js__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["default"] = VueChatScroll;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueChatScroll);
}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

var scrollToBottom = function scrollToBottom(el) {
    el.scrollTop = el.scrollHeight;
};

var vChatScroll = {
    bind: function bind(el, binding) {
        var timeout;
        var scrolled = false;

        el.addEventListener('scroll', function (e) {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
            }, 200);
        });

        new MutationObserver(function (e) {
            var config = binding.value || {};
            var pause = config.always === false && scrolled;
            if (pause || e[e.length - 1].addedNodes.length != 1) return;
            scrollToBottom(el);
        }).observe(el, { childList: true });
    },
    inserted: scrollToBottom
};

/* harmony default export */ __webpack_exports__["a"] = vChatScroll;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjE5MmQ1ZjQyZTc0YmY3YjZjNDI/Y2E3NCIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlLWNoYXQtc2Nyb2xsLmpzPzE0YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvdi1jaGF0LXNjcm9sbC5qcz8xYzhhIl0sIm5hbWVzIjpbIlZ1ZUNoYXRTY3JvbGwiLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsImRpcmVjdGl2ZSIsIndpbmRvdyIsInVzZSIsInNjcm9sbFRvQm90dG9tIiwiZWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ2Q2hhdFNjcm9sbCIsImJpbmQiLCJiaW5kaW5nIiwidGltZW91dCIsInNjcm9sbGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xpZW50SGVpZ2h0IiwiTXV0YXRpb25PYnNlcnZlciIsImNvbmZpZyIsInZhbHVlIiwicGF1c2UiLCJhbHdheXMiLCJsZW5ndGgiLCJhZGRlZE5vZGVzIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsImluc2VydGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2hFQTtBQUFBOzs7Ozs7O0FBT0E7O0FBRUEsSUFBSUEsZ0JBQWdCO0FBQ2hCQyxhQUFTLGlCQUFVQyxHQUFWLEVBQWVDLE9BQWYsRUFBd0I7QUFDN0JELFlBQUlFLFNBQUosQ0FBYyxhQUFkLEVBQTZCLDZFQUE3QjtBQUNIO0FBSGUsQ0FBcEI7O0FBTUEsOERBQWVKLGFBQWY7O0FBRUEsSUFBSSxPQUFPSyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPSCxHQUE1QyxFQUFpRDtBQUMvQ0csV0FBT0gsR0FBUCxDQUFXSSxHQUFYLENBQWVOLGFBQWY7QUFDRCxDOzs7Ozs7OztBQ25CRDs7Ozs7OztBQU9BLElBQU1PLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBU0MsRUFBVCxFQUFhO0FBQ2hDQSxPQUFHQyxTQUFILEdBQWVELEdBQUdFLFlBQWxCO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNQyxjQUFjO0FBQ2hCQyxVQUFNLGNBQVNKLEVBQVQsRUFBYUssT0FBYixFQUFzQjtBQUN4QixZQUFJQyxPQUFKO0FBQ0EsWUFBSUMsV0FBVyxLQUFmOztBQUVBUCxXQUFHUSxnQkFBSCxDQUFvQixRQUFwQixFQUE4QixVQUFTQyxDQUFULEVBQVk7QUFDdEMsZ0JBQUlILE9BQUosRUFBYVQsT0FBT2EsWUFBUCxDQUFvQkosT0FBcEI7QUFDYkEsc0JBQVVULE9BQU9jLFVBQVAsQ0FBa0IsWUFBVztBQUNuQ0osMkJBQVdQLEdBQUdDLFNBQUgsR0FBZUQsR0FBR1ksWUFBbEIsR0FBaUMsQ0FBakMsR0FBcUNaLEdBQUdFLFlBQW5EO0FBQ0gsYUFGUyxFQUVQLEdBRk8sQ0FBVjtBQUdILFNBTEQ7O0FBT0MsWUFBSVcsZ0JBQUosQ0FBcUIsVUFBU0osQ0FBVCxFQUFZO0FBQzlCLGdCQUFJSyxTQUFTVCxRQUFRVSxLQUFSLElBQWlCLEVBQTlCO0FBQ0EsZ0JBQUlDLFFBQVFGLE9BQU9HLE1BQVAsS0FBa0IsS0FBbEIsSUFBMkJWLFFBQXZDO0FBQ0EsZ0JBQUlTLFNBQVNQLEVBQUVBLEVBQUVTLE1BQUYsR0FBVyxDQUFiLEVBQWdCQyxVQUFoQixDQUEyQkQsTUFBM0IsSUFBcUMsQ0FBbEQsRUFBcUQ7QUFDckRuQiwyQkFBZUMsRUFBZjtBQUNILFNBTEEsQ0FBRCxDQUtJb0IsT0FMSixDQUtZcEIsRUFMWixFQUtnQixFQUFDcUIsV0FBVyxJQUFaLEVBTGhCO0FBTUgsS0FsQmU7QUFtQmhCQyxjQUFVdkI7QUFuQk0sQ0FBcEI7O0FBc0JBLHdEQUFlSSxXQUFmLEMiLCJmaWxlIjoidnVlLWNoYXQtc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjE5MmQ1ZjQyZTc0YmY3YjZjNDIiLCIvKipcbiAqIEBuYW1lIFZ1ZUpTIHZDaGF0U2Nyb2xsICh2dWUtY2hhdC1zY3JvbGwpXG4gKiBAZGVzY3JpcHRpb24gTW9uaXRvcnMgYW4gZWxlbWVudCBhbmQgc2Nyb2xscyB0byB0aGUgYm90dG9tIGlmIGEgbmV3IGNoaWxkIGlzIGFkZGVkXG4gKiBAYXV0aG9yIFRoZW9kb3JlIE1lc3NpbmV6aXMgPHRoZW9AdGhlb21lc3Npbi5jb20+XG4gKiBAZmlsZSB2dWUtY2hhdC1zY3JvbGwgcGx1Z2luIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgdkNoYXRTY3JvbGwgZnJvbSAnLi9kaXJlY3RpdmVzL3YtY2hhdC1zY3JvbGwuanMnO1xuXG52YXIgVnVlQ2hhdFNjcm9sbCA9IHtcbiAgICBpbnN0YWxsOiBmdW5jdGlvbiAoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZS5kaXJlY3RpdmUoJ2NoYXQtc2Nyb2xsJywgdkNoYXRTY3JvbGwpXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVnVlQ2hhdFNjcm9sbDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlQ2hhdFNjcm9sbClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdnVlLWNoYXQtc2Nyb2xsLmpzIiwiLyoqXHJcbiAqIEBuYW1lIFZ1ZUpTIHZDaGF0U2Nyb2xsICh2dWUtY2hhdC1zY3JvbGwpXHJcbiAqIEBkZXNjcmlwdGlvbiBNb25pdG9ycyBhbiBlbGVtZW50IGFuZCBzY3JvbGxzIHRvIHRoZSBib3R0b20gaWYgYSBuZXcgY2hpbGQgaXMgYWRkZWRcclxuICogQGF1dGhvciBUaGVvZG9yZSBNZXNzaW5lemlzIDx0aGVvQHRoZW9tZXNzaW4uY29tPlxyXG4gKiBAZmlsZSB2LWNoYXQtc2Nyb2xsICBkaXJlY3RpdmUgZGVmaW5pdGlvblxyXG4gKi9cclxuXHJcbmNvbnN0IHNjcm9sbFRvQm90dG9tID0gZnVuY3Rpb24oZWwpIHtcclxuICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodDtcclxufTtcclxuXHJcbmNvbnN0IHZDaGF0U2Nyb2xsID0ge1xyXG4gICAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcclxuICAgICAgICB2YXIgdGltZW91dDtcclxuICAgICAgICB2YXIgc2Nyb2xsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dCkgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsZWQgPSBlbC5zY3JvbGxUb3AgKyBlbC5jbGllbnRIZWlnaHQgKyAxIDwgZWwuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAobmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlnID0gYmluZGluZy52YWx1ZSB8fCB7fTtcclxuICAgICAgICAgICAgdmFyIHBhdXNlID0gY29uZmlnLmFsd2F5cyA9PT0gZmFsc2UgJiYgc2Nyb2xsZWQ7XHJcbiAgICAgICAgICAgIGlmIChwYXVzZSB8fCBlW2UubGVuZ3RoIC0gMV0uYWRkZWROb2Rlcy5sZW5ndGggIT0gMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBzY3JvbGxUb0JvdHRvbShlbCk7XHJcbiAgICAgICAgfSkpLm9ic2VydmUoZWwsIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuICAgIH0sXHJcbiAgICBpbnNlcnRlZDogc2Nyb2xsVG9Cb3R0b21cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZDaGF0U2Nyb2xsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy92LWNoYXQtc2Nyb2xsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==