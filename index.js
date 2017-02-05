/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll directive definition
 */

(function() {
    try { var Vue = require('vue'); } catch (e) {}

    const getScrollHeight = el => {return el.scrollHeight - el.clientHeight;}
    const scrollToBottom = el => {el.scrollTop = getScrollHeight(el);}

    const vChatScroll = Vue.directive('chat-scroll', {
        bind: (el, binding) => {
            (new MutationObserver(e => {
                if (e[e.length - 1].addedNodes.length != 1) return;
                if (el.scrollTop < (getScrollHeight(el) - e[0].addedNodes[0].offsetParent.offsetTop - 15)) return;
                scrollToBottom(el);
            })).observe(el, {childList: true});
        },
        inserted: scrollToBottom,
    });

    try { module.exports = vChatScroll; } catch (e) {}
})();
