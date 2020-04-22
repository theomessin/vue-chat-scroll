import * as vueTestUtils from '@vue/test-utils';
import { directive } from '../src/directive';
import { scroll } from '../src/scroll';

jest.mock('../src/scroll');
beforeEach(() => { jest.clearAllMocks(); });

test('it automatically calls scrolls on init', () => {
  const Component: Vue.Component = {
    template: '<div v-chat-scroll />',
  };

  const localDirective = directive;
  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', localDirective);

  const wrapper = vueTestUtils.mount(Component, { localVue });
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);
});

test('it calls scroll when an item is added', async () => {
  const Component: Vue.Component = {
    data: () => ({ items: [] }),
    template: '<div v-chat-scroll><div v-for="item in items">{{ item }}</div></div>',
  };

  const localDirective = directive;
  localDirective.inserted = jest.fn();
  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', localDirective);
  const wrapper = vueTestUtils.mount(Component, { localVue });

  (wrapper.vm as any).$data.items.push('A new item');
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);
});

test('it calls scroll when an item is removed', async () => {
  const Component: Vue.Component = {
    data: () => ({ items: [1, 2, 3] }),
    template: '<div v-chat-scroll><div v-for="item in items">{{ item }}</div></div>',
  };

  const localDirective = directive;
  localDirective.inserted = jest.fn();
  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', localDirective);
  const wrapper = vueTestUtils.mount(Component, { localVue });

  (wrapper.vm as any).$data.items.pop();
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);
});

test('it obeys the enabled configuration parameter', async () => {
  const Component: Vue.Component = {
    data: () => ({ enabled: false, items: [1, 2, 3] }),
    template: '<div v-chat-scroll="{ enabled }"><div v-for="item in items">{{ item }}</div></div>',
  };

  const localDirective = directive;
  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', localDirective);
  const wrapper = vueTestUtils.mount(Component, { localVue });

  (wrapper.vm as any).$data.items.pop();
  await (wrapper.vm as any).$nextTick();
  expect(scroll).not.toHaveBeenCalled();

  (wrapper.vm as any).$data.enabled = true;
  (wrapper.vm as any).$data.items.pop();
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledTimes(1);
  expect(scroll).toHaveBeenCalledWith(wrapper.element);
});

test('it correctly works when prepending', async () => {
  const Component: Vue.Component = {
    data: () => ({ handlePrepend: true, items: [1, 2, 3] }),
    template: '<div v-chat-scroll="{ handlePrepend }"><div v-for="item in items">{{ item }}</div></div>',
  };

  const localDirective = directive;
  const localVue = vueTestUtils.createLocalVue();
  localVue.directive('chat-scroll', localDirective);
  const wrapper = vueTestUtils.mount(Component, { localVue });

  // Set the current wrapper to be 50 pixels tall.
  jest.spyOn(wrapper.element, 'scrollHeight', 'get').mockImplementation(() => 50);
  // We've scrolled all the way to the bottom.
  jest.spyOn(wrapper.element, 'scrollTop', 'get').mockImplementation(() => 50);

  (wrapper.vm as any).$data.items.pop();
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledWith(wrapper.element, false);

  // We've now scrolled all the way to the top.
  jest.spyOn(wrapper.element, 'scrollTop', 'get').mockImplementation(() => 0);
  // Now the current wrapper should be 75 pixels tall (25 pixel increase).
  jest.spyOn(wrapper.element, 'scrollHeight', 'get').mockImplementation(() => 75);

  (wrapper.vm as any).$data.items.unshift(0);
  await (wrapper.vm as any).$nextTick();
  expect(scroll).toHaveBeenCalledWith(wrapper.element, 25);
});
