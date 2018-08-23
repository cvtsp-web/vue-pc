import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import monitorError from './utils/monitor-error'
import monitorPerformance from './utils/monitor-performance'
import addGlobalComponent from './utils/addGlobalComponents'

Vue.config.productionTip = false

// monitor log of error
Vue.use(monitorError)

// monitor performance
Vue.use(monitorPerformance)

Vue.use(addGlobalComponent)

// development add devHelper
process.env.NODE_ENV === 'development' 
&& Vue.use(require('./components/DevHelper').default)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router: createRouter(),
  store: createStore(),
  components: { App },
  render: h => h(App)
});
