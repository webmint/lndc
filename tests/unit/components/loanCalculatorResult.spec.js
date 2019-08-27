import { createLocalVue, mount } from '@vue/test-utils';
// import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-unresolved
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import { SilenceWarnHack } from '@/helpers/SilenceWarnHack';
import LoanCalculatorResult from '@/components/LoanCalculatorResult';
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
    const wrapper = mount(LoanCalculatorResult, { store, localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('amountErrors test required error', async () => {
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
    const wrapper = mount(LoanCalculatorResult, { store, localVue });
    expect(wrapper.vm.getInstallment).toBe(null);
  });
});
