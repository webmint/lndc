export default {
  SET_AMOUNT(state, payload) {
    Object.assign(state, { amount: payload });
  },
  SET_DURATION(state, payload) {
    Object.assign(state, { duration: payload });
  },
  SET_INSTALLMENT(state, payload) {
    Object.assign(state, { installment: payload });
  },
};
