import { createLocalVue, mount } from '@vue/test-utils';
// import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-unresolved
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import { SilenceWarnHack } from '@/helpers/SilenceWarnHack';
import LoanCalculatorForm from '@/components/LoanCalculatorForm';
import loanCalculator from '@/store/modules/loanCalculator/index';


const silenceWarnHack = new SilenceWarnHack();

describe('LoanCalculatorForm.vue', () => {
  let localVue;

  beforeAll(() => {
    silenceWarnHack.enable();
    localVue = createLocalVue();
    localVue.use(Vuetify);
    localVue.use(Vuex);
    localVue.use(Vuelidate);
    silenceWarnHack.disable();
  });

  it('Component mounted', () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: loanCalculator.state,
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('amountErrors test required error', async () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: {
            amount: '',
          },
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    wrapper.vm.$v.$touch();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.amountErrors).toBe('Amount is required');
  });

  it('amountErrors test minValue error', async () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: {
            amount: 1,
          },
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    wrapper.vm.$v.$touch();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.amountErrors).toBe('Amount minimum is 10,000');
  });

  it('amountErrors test maxValue error', async () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: {
            amount: 10000000000000000,
          },
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    wrapper.vm.$v.$touch();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.amountErrors).toBe('Amount maximum is 100,000');
  });

  it('durationErrors test required error', async () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: {
            duration: '',
          },
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    wrapper.vm.$v.$touch();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.durationErrors).toBe('Duration is required');
  });

  it('durationErrors test minValue error', async () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: {
            duration: 0,
          },
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    wrapper.vm.$v.$touch();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.durationErrors).toBe('Duration minimum is 1');
  });

  it('durationErrors test maxValue error', async () => {
    const store = new Vuex.Store({
      modules: {
        loanCalculator: {
          namespaced: true,
          state: {
            duration: 10000000000000000,
          },
          getters: loanCalculator.getters,
          actions: loanCalculator.actions,
          mutations: loanCalculator.mutations,
        },
      },
    });
    const wrapper = mount(LoanCalculatorForm, { store, localVue });
    wrapper.vm.$v.$touch();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.durationErrors).toBe('Duration maximum is 5');
  });
});
