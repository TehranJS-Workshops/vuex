// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import axios from 'axios'
import './styles/index.css'

Vue.use(ElementUI, { locale })

Vue.config.debug = !isProd()
Vue.config.devtools = !isProd()
Vue.config.productionTip = isProd()

axios.defaults.baseURL = 'https://localhost:3443'

function isProd() {
  return process.env.NODE_ENV === 'production'
}
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
