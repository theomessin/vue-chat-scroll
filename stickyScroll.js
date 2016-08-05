Vue.directive('sticky-scroll', {
  bind: function() {

    //use browser MutationObserver object
    var observer = new MutationObserver(scrollToBottom);
    //looking for new children that will change the height
    var config = { childList: true };
    observer.observe(this.el, config);

    //need reference to this, otherwise 'this'=MutationObserver
    var me = this;

    function animateScroll(duration) {

      var start = me.el.scrollTop;
      var end = me.el.scrollHeight;
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
        me.el.scrollTop = position;
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
        me.el.scrollTop = me.el.scrollHeight;
      }
    }
  }
});

