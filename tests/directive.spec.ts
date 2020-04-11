import * as vueTestUtils from '@vue/test-utils';
import { directive } from '../src/directive';
import { scroll } from '../src/scroll';

jest.mock('../src/scroll');
// Clear all mocks before each test.
beforeEach(() => { jest.clearAllMocks(); });

test('it automatically calls scrolls on init', () => {
  const Component: Vue.Component = {
    template: '<div v-chat-scroll />',
  };

  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', directive);

  const wrapper = vueTestUtils.mount(Component, { localVue });
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);
});

test('it calls scroll when an item is added', async () => {
  const Component: Vue.Component = {
    data: () => ({ items: [] }),
    template: '<div v-chat-scroll><div v-for="item in items">{{ item }}</div></div>',
  };

  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', directive);

  const wrapper = vueTestUtils.mount(Component, { localVue });
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);

  (wrapper.vm as any).$data.items.push('A new item');
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(2);

  (wrapper.vm as any).$data.items.push('Here\'s two items in a row!');
  (wrapper.vm as any).$data.items.push('This should call scroll just once!');
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(3);
});

test('it calls scroll when an item is removed', async () => {
  const Component: Vue.Component = {
    data: () => ({ items: [1, 2, 3] }),
    template: '<div v-chat-scroll><div v-for="item in items">{{ item }}</div></div>',
  };

  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', directive);

  const wrapper = vueTestUtils.mount(Component, { localVue });
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);

  (wrapper.vm as any).$data.items.pop();
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(2);

  (wrapper.vm as any).$data.items.pop();
  (wrapper.vm as any).$data.items.pop();
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(3);
});
