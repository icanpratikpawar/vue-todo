import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.component("alert",require('./components/Alert.vue').default);
Vue.component("todo",require('./components/Todo.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
