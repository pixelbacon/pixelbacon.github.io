// import '@babel/polyfill';
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// Plugins
import './plugins/vuetify';

// Stylesheet
import './styles/main.styl';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
