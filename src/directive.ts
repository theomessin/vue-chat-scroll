import { DirectiveOptions } from 'vue';
import { Config, defaultConfig } from './config';
import { scroll } from './scroll';

/**
 * We use this state to keep track of all v-chat-scroll mutation observers.
 * When a directive binding is updated for an element, we can fetch the
 * existing MutationObserver, disconnect it, and replace the state
 * with the new MutationObserver (with the new Config callback).
 */
const state: WeakMap<object, MutationObserver> = new WeakMap();

/**
 * This function is called when a mutation is observed.
 * The config is used to determine what to do.
 */
const mutationObserved = (el: Element, config: Config) => {
  if (config.enabled) scroll(el);
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
   * We disconnect the old MutationObserver (if it exists in our previous state).
   * We then create (and save) a new MutationObserver with the new configuration.
   */
  update: (el, binding) => {
    if (state.has(el)) state.get(el).disconnect();
    const config: Config = { ...defaultConfig, ...binding.value };
    const mutationCallback: MutationCallback = () => { mutationObserved(el, config); };

    const mutationObserver = new MutationObserver(mutationCallback);
    mutationObserver.observe(el, { childList: true, subtree: true });
    state.set(el, mutationObserver);
  },
};

export default directive;
