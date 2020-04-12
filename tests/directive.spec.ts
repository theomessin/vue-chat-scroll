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
