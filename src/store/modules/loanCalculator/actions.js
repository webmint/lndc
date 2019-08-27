import axios from '@/plugins/axios';

export default {
  setAmount({ commit }, payload) {
    commit('SET_AMOUNT', payload);
  },
  setDuration({ commit }, payload) {
    commit('SET_DURATION', payload);
  },
  calculateInstallment({ commit, dispatch, state }) {
    axios.post('/monthlyInstallment', {
      amount: state.amount,
      duration: state.duration,
    })
      .then((response) => {
        commit('SET_INSTALLMENT', response.data.monthlyInstallment);
      })
      .catch((error) => {
        dispatch('appNotification/toggleNotification', {
          showNotification: true,
          notificationColor: 'red',
          notificationMessage: 'Something went wrong',
        }, { root: true });
        console.log(error);
      });
  },
};
