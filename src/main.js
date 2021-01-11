import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios';
import './plugins/element.js'
var echarts = require('echarts');
Vue.use(Avue);
window.axios=axios
Vue.prototype.echarts =echarts
new Vue({
  render: h => h(App),
}).$mount('#app')
