# vue-chat-scroll
[![](https://flat.badgen.net/npm/v/vue-chat-scroll?color=red)](https://www.npmjs.com/package/vue-chat-scroll) 
[![](https://flat.badgen.net/jsdelivr/hits/npm/vue-chat-scroll)](https://www.jsdelivr.com/package/npm/vue-chat-scroll) [![](https://flat.badgen.net/bundlephobia/minzip/vue-chat-scroll?color=orange)](https://bundlephobia.com/result?p=vue-chat-scroll) [![](https://flat.badgen.net/npm/license/vue-chat-scroll)](https://github.com/theomessin/vue-chat-scroll/blob/master/license.md)

A plugin for Vue.js 2 that scrolls to the bottom of an element when new content is added within said element. [See demo](https://theomessin.github.io/vue-chat-scroll/).

## Installation

### NPM (recommended)

```
npm install --save vue-chat-scroll
```

``` js
import Vue from 'vue'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
```

### Simple Script Tag

Just include `dist/vue-chat-scroll.js` _after including Vue_.
```html
<script src="https://cdn.jsdelivr.net/npm/vue-chat-scroll/dist/vue-chat-scroll.min.js"></script>
```

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

#### Smooth scrolling for updates but not the first time the container comes in view

``` html
<ul class="messages" v-chat-scroll="{smooth: true, notSmoothOnInit: true}">
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

If you want to avoid having smooth scroll in this situation (so it instantly scrolls to bottom after loading), but keep it when new messages come, use the `smoothonremoved` set to `false`, while being able to keep `smooth` set to `true` for later messages.
``` html
<ul class="messages" v-chat-scroll="{always: false, smooth: true, scrollonremoved:true, smoothonremoved: false}">
  <li class="message" v-for="n in messages">{{ n }}</li>
  <li v-if="loading">&bull;&bull;&bull;</li>
</ul>
```
This option only applies if `scrollonremoved` is set to `true`. When not defined behavior defaults to `smooth` property.

#### Disable vue-chat-scroll using configuration prop

You may use the `enabled` configuration property to control `v-chat-scroll`.

``` html
<ul class="messages" :v-chat-scroll="{enabled: enabled}">
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```
```js
data () => {
  enabled: false,
}
```

### Events

- **v-chat-scroll-top-reached**
Will be triggered when the top of scrollbar is reached. If you are using this event for prepending items to the list then also make sure that the config option **always** is set to false.
``` html
<ul class="messages" v-chat-scroll="{always: false}" @v-chat-scroll-top-reached="customMethod">
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```
