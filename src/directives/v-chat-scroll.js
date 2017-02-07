/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

const scrollToBottom = el => {el.scrollTop = el.scrollHeight;}

const vChatScroll = {
    bind: (el, binding) => {
        (new MutationObserver(e => {
            if (e[e.length - 1].addedNodes.length != 1) return;
            scrollToBottom(el);
        })).observe(el, {childList: true});
    },
    inserted: scrollToBottom
};

export default vChatScroll;