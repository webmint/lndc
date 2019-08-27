export default {
  TOGGLE_NOTIFICATION(state, payload) {
    Object.assign(state, {
      showNotification: payload.showNotification,
      notificationColor: payload.notificationColor,
      notificationMessage: payload.notificationMessage,
    });
  },
};
