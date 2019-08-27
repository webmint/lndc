<template>
  <v-snackbar
    v-model="showNotification"
    top
    :color="getNotificationColor"
    :timeout="notificationTimeout"
  >
    {{ getNotificationMessage }}
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppNotification',
  data() {
    return {
      notificationTimeout: 200000,
    };
  },
  computed: {
    ...mapGetters('appNotification', [
      'getShowNotification',
      'getNotificationColor',
      'getNotificationMessage',
    ]),
    showNotification: {
      get() {
        return this.getShowNotification;
      },
      set() {
        this.toggleNotification({
          showNotification: false,
          notificationColor: '',
          notificationMessage: '',
        });
      },
    },
  },
  methods: {
    ...mapActions('appNotification', [
      'toggleNotification',
    ]),
  },
};
</script>

<style scoped>

</style>
