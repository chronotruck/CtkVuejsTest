// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false
Vue.http.options.root = '192.168.1.7';
Vue.http.headers.common['Authorization'] = 'Bearer goodToken';

Vue.http.interceptors.push(function(request) {
  request.headers.set('Authorization', 'Bearer goodToken');
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http: {
    root: '192.168.1.7',
    headers: {
      Authorization: 'Bearer goodToken'
    }
  },
  components: { App },
  template: '<App/>'
})
