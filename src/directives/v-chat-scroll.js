/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

const scrollToBottom = function(el) {
    el.scrollTop = el.scrollHeight;
};

const vChatScroll = {
    bind: function(el, binding) {
        var timeout;
        var scrolled = false;

        el.addEventListener('scroll', function(e) {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
            }, 200);
        });

        (new MutationObserver(function(e) {
            var config = binding.value || {};
            var pause = config.always === false && scrolled;
            if (pause || e[e.length - 1].addedNodes.length != 1) return;
            scrollToBottom(el);
        })).observe(el, {childList: true});
    },
    inserted: scrollToBottom
};

export default vChatScroll;
