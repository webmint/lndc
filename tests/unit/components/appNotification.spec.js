import { createLocalVue, mount } from '@vue/test-utils';
// import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-unresolved
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { SilenceWarnHack } from '@/helpers/SilenceWarnHack';
import AppNotification from '@/components/AppNotification';
import appNotification from '@/store/modules/appNotification/index';


const silenceWarnHack = new SilenceWarnHack();

describe('LoanCalculatorForm.vue', () => {
  let localVue;

  beforeAll(() => {
    silenceWarnHack.enable();
    localVue = createLocalVue();
    localVue.use(Vuetify);
    localVue.use(Vuex);
    silenceWarnHack.disable();
  });

  it('Component mounted', () => {
    const store = new Vuex.Store({
      modules: {
        appNotification: {
          namespaced: true,
          state: appNotification.state,
          getters: appNotification.getters,
          actions: appNotification.actions,
          mutations: appNotification.mutations,
        },
      },
    });
    const wrapper = mount(AppNotification, { store, localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('Notification not showed', () => {
    const store = new Vuex.Store({
      modules: {
        appNotification: {
          namespaced: true,
          state: appNotification.state,
          getters: appNotification.getters,
          actions: appNotification.actions,
          mutations: appNotification.mutations,
        },
      },
    });
    const wrapper = mount(AppNotification, { store, localVue });
    expect(wrapper.vm.showNotification).toBeFalsy();
  });
});
