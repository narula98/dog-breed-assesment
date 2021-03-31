import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';
import router from './router'
import Vuelidate from 'vuelidate'

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
import store from './store'

Vue.component('jw-pagination', JwPagination);

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})


Vue.use(Vuelidate);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
