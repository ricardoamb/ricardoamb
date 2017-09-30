import Vue from 'vue'
import App from './App-Main.vue'
import router from './router'
import jQuery from 'jquery'
import Axios from 'axios'
import VueAxios from 'vue-axios'


global.jQuery = jQuery

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import 'fontawesome/index.js'

Vue.use(VueAxios, Axios)
Vue.config.productionTip = false

// global.apiURL = "https://ricardoamb.000webhostapp.com/wp-json/wp/v2/"; // Remote API REST
global.apiURL = "http://192.168.0.4/awesome/wp-json/wp/v2/"; // Local API REST

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
