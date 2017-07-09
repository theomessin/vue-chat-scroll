# vue-chat-scroll

A plugin for Vue.js 2 that scrolls to the bottom of an element when new content is added within said element.

## Installation

- #### NPM / Yarn
  Run `npm install --save vue-chat-scroll`, or `yarn add vue-chat-scroll`

- #### With Modules

  ``` js
  // ES6
  import Vue from 'vue'
  import VueChatScroll from 'vue-chat-scroll'
  Vue.use(VueChatScroll)

  // ES5
  var Vue = require('vue')
  Vue.use(require('vue-chat-scroll'))
  ```

- #### `<script>` Include

  Just include `./dist/vue-chat-scroll.js` after Vue itself.

## Usage

There's nothing you need to do in JavaScript except for installation. To use the plugin, simply use the `v-chat-scroll` directive.

``` html
<ul class="messages" v-chat-scroll>
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```

#### Prevent scroll down when user has scrolled up

Alternatively, you can pass a config value to the directive:

``` html
<ul class="messages" v-chat-scroll="{always: false}">
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```

## License

[MIT](http://opensource.org/licenses/MIT)
