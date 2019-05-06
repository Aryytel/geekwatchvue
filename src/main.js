import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueGoogleMaps, {
  load: {
    key: ' AIzaSyBvCYpaGbQVOWB4_5XJem7HPnU13Qmujck',
    libraries: 'places',
  }});
