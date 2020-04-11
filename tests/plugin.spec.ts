import { createLocalVue } from '@vue/test-utils';
import { bootstrap, plugin } from '../src/plugin';
import { directive } from '../src/directive';

test('it registers the directive', async () => {
  const localVue = createLocalVue();
  localVue.directive = jest.fn();
  localVue.use(plugin);
  expect(localVue.directive).toHaveBeenCalledTimes(1);
  expect(localVue.directive).toBeCalledWith('chat-scroll', directive);
});

test('it auto uses itself when window.Vue is defined', () => {
  window.Vue = createLocalVue();
  window.Vue.use = jest.fn();
  bootstrap(); // We assume this gets called automatically.
  expect(window.Vue.use).toHaveBeenCalledTimes(1);
  expect(window.Vue.use).toBeCalledWith(plugin);
});
