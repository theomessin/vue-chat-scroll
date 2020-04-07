(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['vue-chat-scroll'] = factory());
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

        if (scrolled && el.scrollTop === 0) {
          el.dispatchEvent(new Event("v-chat-scroll-top-reached"));
        }
      });
      new MutationObserver(function (e) {
        var config = binding.value || {};
        if (config.enabled === false) return;
        var pause = config.always === false && scrolled;
        var addedNodes = e[e.length - 1].addedNodes.length;
        var removedNodes = e[e.length - 1].removedNodes.length;

        if (config.scrollonremoved) {
          if (pause || addedNodes != 1 && removedNodes != 1) return;
        } else {
          if (pause || addedNodes != 1) return;
        }

        var smooth = config.smooth;
        var loadingRemoved = !addedNodes && removedNodes === 1;

        if (loadingRemoved && config.scrollonremoved && 'smoothonremoved' in config) {
          smooth = config.smoothonremoved;
        }

        scrollToBottom(el, smooth);
      }).observe(el, {
        childList: true,
        subtree: true
      });
    },
    inserted: function inserted(el, binding) {
      var config = binding.value || {};
      scrollToBottom(el, config.notSmoothOnInit ? false : config.smooth);
    }
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
