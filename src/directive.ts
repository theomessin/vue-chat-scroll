import { DirectiveOptions } from 'vue';
import { scroll } from './scroll';

export const directive: DirectiveOptions = {
  bind: (el) => {
    new MutationObserver(() => {
      scroll(el);
    }).observe(el, {
      childList: true,
      subtree: true,
    });
  },

  inserted: (el) => {
    scroll(el);
  },
};

export default directive;
