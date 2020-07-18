import { mount, createLocalVue } from '@vue/test-utils';
import test from 'ava';
import Package from '@/src/Package.vue';

let wrapper;
const localVue = createLocalVue();

test.beforeEach(() => {
  wrapper = mount(Package, {
    localVue,
  });
});

test('is a Vue instance', (t) => {
  t.is(wrapper.isVueInstance(), true);
});

test('renders correct snapshot', (t) => {
  t.snapshot(wrapper.vm.$el.outerHTML);
});
