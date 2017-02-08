/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

const scrollToBottom = el => {el.scrollTop = el.scrollHeight;}
const vChatScroll = {
    bind: (el, binding) => {
        let wasAttachedToBottom = false;
        let timeoutId;

        el.addEventListener('scroll', e => {
          // must throttle as the event can be fired at a high rate
          if (timeoutId) {
            window.clearTimeout(timeoutId);
          }

          timeoutId = window.setTimeout(() => {
            // + 1 catches off by one errors in chrome
            wasAttachedToBottom = el.scrollTop + el.clientHeight + 1 >= el.scrollHeight;
          }, 200);
        });

        (new MutationObserver(e => {
            // default to always scroll
            let config = binding.value || {};
            let pauseScrolling = config.always === false && !wasAttachedToBottom;
            if (pauseScrolling || e[e.length - 1].addedNodes.length != 1) return;
            scrollToBottom(el);
        })).observe(el, {childList: true});
    },
    inserted: scrollToBottom
};

export default vChatScroll;
