# sticky-scroll
## a [vue.js](https://vuejs.org/guide/) directive that keeps an element scrolled to the bottom


### description
sticky-scroll keeps an eye on your element and whenever content is added inside of it, it scrolls down so that the viewer can remain focused on the newest content!

[view live demo on jsfiddle](https://jsfiddle.net/heatherbooker/13uf74vh/)

### usage instructions
*note*: relies on jquery

Include the sticky-scroll directive in your main html file:
```
<script src='https://cdn.rawgit.com/heatherbooker/sticky-scroll/master/stickyScroll.js'></script>
```

Then add 'v-sticky-scroll' as an attribute on the element you wish to always scroll to the bottom of
```
<div class='i-wish-this-would-scroll' v-sticky-scroll></div>
```

==> Optional: specify if you would like the scroll to 'animate' (default: jump), and if so, optionally specify the number of milliseconds (default is 300)
```
<div class='i-wish-this-would-scroll' v-sticky-scroll:animate></div>
<div class='i-wish-this-would-scroll' v-sticky-scroll:animate=500></div>
```


### how it works
sticky-scroll uses a wonderful, highly underrated browser feature: [mutation observers](https://developer.mozilla.org/en/docs/Web/API/MutationObserver). By creating a `new MutationObserver` and telling it which events to `.observe()`, you can do wonderful things! 
This method is much simpler than some implementations of sticky scrolling that use requestAnimationFrame.

### license
WTFPL
