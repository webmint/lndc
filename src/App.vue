<template>
  <v-app>
    <AppNotification />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    AppNotification: () => import('@/components/AppNotification'),
  },
};
</script>
