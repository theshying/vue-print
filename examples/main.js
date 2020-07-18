import Vue from 'vue'
import App from './App.vue'
// import vResize from '@theshy/v-resize'
import vuePrint from '../src/index'
Vue.use(vuePrint)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
