import Vue from 'vue'
import Test from './Test'

Vue.config.productionTip = false

/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  data:{
    test:"1"
  },
  components: { Test }
})
