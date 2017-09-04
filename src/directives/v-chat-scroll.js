/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

const scrollToBottom = el => {
    el.scrollTop = el.scrollHeight;
};

const vChatScroll = {
    bind: (el, binding) => {
        let timeout;
        let scrolled = false;

        el.addEventListener('scroll', e => {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
            }, 200);
        });

        (new MutationObserver(e => {
            let config = binding.value || {};
            let pause = config.always === false && scrolled;
            if (pause || e[e.length - 1].addedNodes.length != 1) return;
            scrollToBottom(el);
        })).observe(el, {childList: true, subtree: true});
    },
    inserted: scrollToBottom
};

export default vChatScroll;
