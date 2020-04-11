import { PluginObject } from 'vue';
import { directive } from './directive';

export const plugin: PluginObject<any> = {
  install: (Vue) => {
    Vue.directive('chat-scroll', directive);
  },
};

export const bootstrap = () => {
  /* istanbul ignore else */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }
};
