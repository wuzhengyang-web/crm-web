import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI);
// window.huige=axios;
// Vue.property.huige=axios;
//前端抽取

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
