# sticky-scroll
### a [vue.js](https://vuejs.org/guide/) directive that keeps an element scrolled to the bottom


#### what
sticky-scroll keeps an eye on your element and whenever content is added inside of it, it scrolls down so that the viewer can remain focused on the newest content!

### how
0. Include jQuery in your main html file (*relies on jQuery!*)
```
<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js'></script>
```

1. Include the sticky-scroll directive in your main html file
```
<script src=''></script>
```

2. Include as an attribute on the element you wish to always scroll to the bottom of
```
<div class='i-wish-this-would-scroll' v-sticky-scroll></div>
```

3. Optionally specify if you would like the scroll to 'animate' (default: jump)
```
<div class='i-wish-this-would-scroll' v-sticky-scroll:animate></div>
```
==> if animate: optionally specify milliseconds to animate (default= 300)
```
<div class='i-wish-this-would-scroll' v-sticky-scroll:animate=500></div>
```


### no, but how?!
sticky-scroll uses a wonderful, highly underrated browser feature: [mutation observers](https://developer.mozilla.org/en/docs/Web/API/MutationObserver). By creating a `new MutationObserver` and telling it which events to `.observe()`, you can do wonderful things! 
This method is much simpler than some implementations of sticky scrolling that use requestAnimationFrame.

License: WTFPL
