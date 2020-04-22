import { DirectiveOptions } from 'vue';
import { Config, defaultConfig } from './config';
import { scroll } from './scroll';

const observers: WeakMap<Element, MutationObserver> = new WeakMap();
const heights: WeakMap<Element, number> = new WeakMap();

/**
 * This function is called when a mutation is observed.
 * The config is used to determine what to do.
 */
const mutationObserved = (el: Element, config: Config): void => {
  // if not enabled, do nothing.
  if (config.enabled === false) return;

  // if not handling prepend, simply scroll.
  if (config.handlePrepend === false) {
    scroll(el);
    return;
  }

  // if handling prepend, we need to calculate where to scroll to.
  // We're prepending if scrollTop is zero and heights has the el.
  // ScrollTop will be difference in scrollHeight before and after.
  const scrollTop = (el.scrollTop === 0 && heights.has(el))
    && (el.scrollHeight - heights.get(el));

  scroll(el, scrollTop);
  heights.set(el, el.scrollHeight);
};

/**
 * This object defines the directive itself.
 */
export const directive: DirectiveOptions = {
  inserted: (el, binding) => {
    const config: Config = { ...defaultConfig, ...binding.value };
    mutationObserved(el, config);
  },

  /**
   * When the directive binding is updated we have to update our MutationObserver.
   * We disconnect the old MutationObserver (if it already exists in observers).
   * We then create and save a new MutationObserver with the new callback.
   */
  update: (el, binding) => {
    if (observers.has(el)) observers.get(el).disconnect();
    const config: Config = { ...defaultConfig, ...binding.value };
    const mutationCallback: MutationCallback = () => { mutationObserved(el, config); };

    const mutationObserver = new MutationObserver(mutationCallback);
    mutationObserver.observe(el, { childList: true, subtree: true });
    observers.set(el, mutationObserver);
  },
};

export default directive;
