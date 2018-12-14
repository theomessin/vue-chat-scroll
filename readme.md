# vue-chat-scroll

A plugin for Vue.js 2 that scrolls to the bottom of an element when new content is added within said element. [Check out our lovely demo](https://theomessin.github.io/vue-chat-scroll/).

## Installation

- NPM / Yarn
Run `npm install --save vue-chat-scroll`, or `yarn add vue-chat-scroll`

- With Modules

``` js
// ES6
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

// ES5
var Vue = require('vue')
Vue.use(require('vue-chat-scroll'))
```

- `<script>` Include

Just include `./dist/vue-chat-scroll.js` after Vue itself.

## Usage

There's nothing you need to do in JavaScript except for installation. To use the plugin, simply use the `v-chat-scroll` directive.

``` html
<ul class="messages" v-chat-scroll>
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```

#### Prevent scroll down when user has scrolled up & smooth scrolling

Alternatively, you can pass a config value to the directive:

``` html
<ul class="messages" v-chat-scroll="{always: false, smooth: true}">
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```

#### Scroll with dissapearing elements in chat window (see [#30](https://github.com/theomessin/vue-chat-scroll/issues/30))

If you have a "loading" animation that disappears when you receive a message from an external source, use the `scrollonremoved` option to ensure the scroll will happen after the element has been removed 

``` html
<ul class="messages" v-chat-scroll="{always: false, smooth: true, scrollonremoved:true}">
  <li class="message" v-for="n in messages">{{ n }}</li>
  <li v-if="loading">&bull;&bull;&bull;</li>
</ul>
```

## License

[MIT](http://opensource.org/licenses/MIT)
