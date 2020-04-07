/**
* @name VueJS vChatScroll (vue-chat-scroll)
* @description Monitors an element and scrolls to the bottom if a new child is added
* @author Theodore Messinezis <theo@theomessin.com>
* @file v-chat-scroll  directive definition
*/

const scrollToBottom = (el, smooth) => {
  if (typeof el.scroll === "function") {
    el.scroll({
      top: el.scrollHeight,
      behavior: smooth ? 'smooth' : 'instant'
    });
  } else {
    el.scrollTop = el.scrollHeight;
  }
};

const vChatScroll = {
  bind: (el, binding) => {
    let scrolled = false;

    el.addEventListener('scroll', e => {
      scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
      if (scrolled && el.scrollTop === 0) {
        el.dispatchEvent(new Event("v-chat-scroll-top-reached"));
      }
    });

    (new MutationObserver(e => {
      let config = binding.value || {};
      if (config.enabled === false) return;
      let pause = config.always === false && scrolled;
      const addedNodes = e[e.length - 1].addedNodes.length;
      const removedNodes = e[e.length - 1].removedNodes.length;

      if (config.scrollonremoved) {
        if (pause || addedNodes != 1 && removedNodes != 1) return;
      } else {
        if (pause || addedNodes != 1) return;
      }

      let smooth = config.smooth;
      const loadingRemoved = !addedNodes && removedNodes === 1;
      if (loadingRemoved && config.scrollonremoved && 'smoothonremoved' in config) {
        smooth = config.smoothonremoved;
      }
      scrollToBottom(el, smooth);
    })).observe(el, { childList: true, subtree: true });
  },
  inserted: (el, binding) => {
    const config = binding.value || {};
    scrollToBottom(el, config.notSmoothOnInit ? false : config.smooth);
  },
};

export default vChatScroll;
