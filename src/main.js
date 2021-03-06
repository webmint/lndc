import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './plugins/vuelidate';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
