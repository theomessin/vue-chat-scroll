import { DirectiveOptions, PluginObject } from 'vue';

function scrollElementToBottom(el: Element) {
  if (typeof el.scroll === 'function') el.scroll({ top: el.scrollHeight });
  else el.scrollTop = el.scrollHeight; // eslint-disable-line no-param-reassign
}

const directive: DirectiveOptions = {
  bind: (el) => {
    const observer = new MutationObserver((e) => {
      const nodesWereAdded = e[e.length - 1].addedNodes.length === 1;
      const nodesWereRemoved = e[e.length - 1].removedNodes.length === 1;
      if (nodesWereAdded === false && nodesWereRemoved === false) return;
      scrollElementToBottom(el);
    });

    observer.observe(el, {
      childList: true,
      subtree: true,
    });
  },

  inserted: (el) => {
    scrollElementToBottom(el);
  },
};

const plugin: PluginObject<any> = {
  install: (Vue) => {
    Vue.directive('chat-scroll', directive);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
