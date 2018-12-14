(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-chat-scroll'] = factory());
}(this, (function () { 'use strict';

/**
* @name VueJS vChatScroll (vue-chat-scroll)
* @description Monitors an element and scrolls to the bottom if a new child is added
* @author Theodore Messinezis <theo@theomessin.com>
* @file v-chat-scroll  directive definition
*/

var scrollToBottom = function scrollToBottom(el, smooth) {
  if (typeof el.scroll === "function") {
    el.scroll({
      top: el.scrollHeight,
      behavior: smooth ? 'smooth' : 'instant'
    });
  } else {
    el.scrollTop = el.scrollHeight;
  }
};

var vChatScroll = {
  bind: function bind(el, binding) {
    var scrolled = false;

    el.addEventListener('scroll', function (e) {
      scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
    });

    new MutationObserver(function (e) {
      var config = binding.value || {};
      var pause = config.always === false && scrolled;
      if (config.scrollonremoved) {
        if (pause || e[e.length - 1].addedNodes.length != 1 && e[e.length - 1].removedNodes.length != 1) return;
      } else {
        if (pause || e[e.length - 1].addedNodes.length != 1) return;
      }
      scrollToBottom(el, config.smooth);
    }).observe(el, { childList: true, subtree: true });
  },
  inserted: scrollToBottom
};

/**
* @name VueJS vChatScroll (vue-chat-scroll)
* @description Monitors an element and scrolls to the bottom if a new child is added
* @author Theodore Messinezis <theo@theomessin.com>
* @file vue-chat-scroll plugin definition
*/

var VueChatScroll = {
  install: function install(Vue, options) {
    Vue.directive('chat-scroll', vChatScroll);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueChatScroll);
}

return VueChatScroll;

})));
