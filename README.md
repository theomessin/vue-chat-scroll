# vue-sticky-scroll
## a vue.js directive that keeps an element scrolled to the bottom


vue-sticky-scroll keeps an eye on your element and whenever content is added inside of it, it scrolls down so that the viewer can remain focused on the newest content!

[view live demo on jsfiddle](https://jsfiddle.net/heatherbooker/13uf74vh/)

### usage instructions

Include it in your main html file:

```html
<script src='https://cdn.rawgit.com/heatherbooker/vue-sticky-scroll/master/stickyScroll.js'></script>
```

Add `v-sticky-scroll` as an attribute on the element you wish to always scroll to the bottom of:

```html
<div class='i-wish-this-would-scroll' v-sticky-scroll></div>
```

### options: animate

the scrolling will jump to the bottom by default.   
if you prefer a smooth scroll, add:
- argument 'animate'
- optional: expression <numOfMilliseconds> (default is 300)

```html
<div class='i-wish-this-would-scroll' v-sticky-scroll:animate></div>

<div class='i-wish-this-would-scroll' v-sticky-scroll:animate=500></div>
```


### how it works

vue-sticky-scroll uses a wonderful, highly underrated browser feature: [mutation observers](https://developer.mozilla.org/en/docs/Web/API/MutationObserver). By creating a `new MutationObserver` and telling it which events to `.observe()`, you can do wonderful things!  
This method is much simpler than some implementations of sticky scrolling that use requestAnimationFrame.

### license

WTFPL
