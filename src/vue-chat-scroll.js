/**
* @name VueJS vChatScroll (vue-chat-scroll)
* @description Monitors an element and scrolls to the bottom if a new child is added
* @author Theodore Messinezis <theo@theomessin.com>
* @file vue-chat-scroll plugin definition
*/

import vChatScroll from './directives/v-chat-scroll.js';

var VueChatScroll = {
  install: (Vue, options) => {
    Vue.directive('chat-scroll', vChatScroll)
  }
};

export default VueChatScroll;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueChatScroll)
}
