window._ = require('lodash');
window.Vue = require('vue');

import VueChatScroll from '../vue-chat-scroll';
Vue.use(VueChatScroll);

Vue.component('application', require('./components/application.vue'));

const app = new Vue({
    el: '#app'
});

