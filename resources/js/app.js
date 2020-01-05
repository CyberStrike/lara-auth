import Vue from 'vue'
import App from './application/App'
import router from './application/router'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
