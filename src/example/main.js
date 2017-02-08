window._ = require('lodash');
window.Vue = require('vue');

Vue.use(require('../vue-chat-scroll.js'));
Vue.component('application', require('./components/application.vue'));

const app = new Vue({
    el: '#app'
});

