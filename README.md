## Installing

#### Using a package manager (recommended)

The recommended way of installing _vue-chat-scroll_ is using the [npm package](https://www.npmjs.com/package/vue-chat-scroll/v/alpha) with the npm (or yarn) package manager:

```bash
npm i vue-chat-scroll@alpha
```

After installing the package, you must use the _vue-chat-scroll_ [plugin](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin) :

```js

import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);

new Vue(...);
```

#### Using a script tag

If working on a proof of concept or a fiddle, it can be easier to use a script tag. We recommend using a CDN such as unpkg or jsdelvr.

```html
<script src="https://unpkg.com/vue-chat-scroll@alpha/dist/index.js"></script>
```

_vue-chat-scroll_ will attempt to auto-register itself with Vue. This should work as long as `window.Vue` is defined.

## Usage

We aim to make using _vue-chat-scroll_ as straightforward as possible. Simply using the `v-chat-scroll` directive should take care of most use cases.

```html
<div v-chat-scroll>
  ...
</div>
```

You may configure the directive by passing an object as well. For example, the `enable` configuration flag:

```html
<div v-chat-scroll="{ enable: false }">
  ...
</div>
```

Please refer to the `Config` interface and `defaultConfig` object in [config.ts](src/config.ts) to find out more about what can be configured, as well as what the default configuration values are.

## Examples

🧸 Bear with us, all of this is work in progress. We'll be adding some examples of how this plugin can be used to build a fully-featured chat (such as Slack's one), or even a console looking log viewer.
