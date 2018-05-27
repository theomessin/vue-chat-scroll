/**
* @name VueJS vChatScroll (vue-chat-scroll)
* @description Monitors an element and scrolls to the bottom if a new child is added
* @author Theodore Messinezis <theo@theomessin.com>
* @file v-chat-scroll  directive definition
*/

const scrollToBottom = (el, smooth) => {
  el.scroll({
    top: el.scrollHeight,
    behavior: smooth ? 'smooth' : 'instant'
  });
};

const vChatScroll = {
  bind: (el, binding) => {
    let scrolled = false;

    el.addEventListener('scroll', e => {
      scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
    });

    (new MutationObserver(e => {
      let config = binding.value || {};
      let pause = config.always === false && scrolled;
      if (pause || e[e.length - 1].addedNodes.length != 1) return;
      scrollToBottom(el, config.smooth);
    })).observe(el, {childList: true});
  },
  inserted: scrollToBottom
};

export default vChatScroll;
