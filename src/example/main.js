window._ = require('lodash');
window.Vue = require('vue');

Vue.use(require('../vue-chat-scroll.js').default);
Vue.component('application', require('./components/application.vue'));

const app = new Vue({
    el: '#app'
});

