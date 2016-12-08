(function() {

  // if we are in node.js enviro, require vue
  try {
    var Vue = require('vue');
  } catch (e) {
    // no worries, in browser enviro Vue should already be global
  }

  var vueStickyScroll = Vue.directive('sticky-bottom-scroll', {
    bind: function(el) {

      //use browser MutationObserver object
      var observer = new MutationObserver(scrollToBottom);
      //looking for new children that will change the height
      var config = { childList: true };
      observer.observe(el, config);

      //need reference to this, otherwise 'this'=MutationObserver
      var me = this;

      function animateScroll(duration) {

        var start = el.scrollTop;
        var end = el.scrollHeight;
        var change = end - start;
        var increment = 20;

        function easeInOut(currentTime, start, change, duration) {
          //by Robert Penner
          currentTime /= duration / 2;
          if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
          }
          currentTime -= 1;
          return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
        }

        function animate(elapsedTime) {

          elapsedTime += increment;
          var position = easeInOut(elapsedTime, start, change, duration);
          el.scrollTop = position;

          if (elapsedTime < duration) {
            setTimeout(function() {
              animate(elapsedTime);
            }, increment)
          }
        }
        animate(0);
      }

      function scrollToBottom() {
        if (me.arg === 'animate') {
          //default is 300
          var duration = Number(me.expression) || 300;
          animateScroll(duration);
        } else {
          //default is jump to bottom
          el.scrollTop = el.scrollHeight;
        }
      }
    }
  });

  // check whether we are in node.js enviro
  try {
    module.exports = vueStickyScroll;
  } catch (e) {
    // no worries, our directive will just be registered in browser
  }

})();
