import { DirectiveOptions, PluginObject } from 'vue';

const directive: DirectiveOptions = {
  inserted: () => console.log,
  bind: (el) => {
    const observer = new MutationObserver((e) => {
      const nodesWereAdded = e[e.length - 1].addedNodes.length === 1;
      const nodesWereRemoved = e[e.length - 1].removedNodes.length === 1;
      if (nodesWereAdded === false && nodesWereRemoved === false) return;
      el.scroll({ top: el.scrollHeight });
    });

    observer.observe(el, {
      childList: true,
      subtree: true,
    });
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
