import { DirectiveOptions } from 'vue';
import { scroll } from './scroll';

interface Config {
  enabled: boolean,
};

/**
 * We use this state to keep track of all vue-chat-scroll root elements.
 * Here we store the Config which we can update when the binding is updated.
 */
const state: WeakMap<object, Config> = new WeakMap();

/**
 * This is function called when a mutation is observed.
 * The config is resolved using our state WeakMap.
 * This callback is common for ALL bindings.
 */
const mutationCallback = (el: Element) => {
  const config = state.get(el);
  if (config.enabled) scroll(el);
};

export const directive: DirectiveOptions = {
  bind: (el, binding) => {
    const value = binding.value || {};
    state.set(el, { enabled: value.enabled !== false });

    const mutationObserver = new MutationObserver(() => { mutationCallback(el); });
    mutationObserver.observe(el, { childList: true, subtree: true });
  },

  inserted: mutationCallback,

  update: (el, binding) => {
    const value = binding.value || {};
    state.set(el, { enabled: value.enabled !== false });
  },
};

export default directive;
