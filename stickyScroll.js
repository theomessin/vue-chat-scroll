Vue.directive('sticky-scroll', {
  bind: function() {

    //use browser MutationObserver object
    var observer = new MutationObserver(scrollToBottom);
    //looking for new children that will change the height
    var config = { childList: true };
    observer.observe(this.el, config);

    //need reference to this, otherwise 'this'=MutationObserver
    var me = this;
    function scrollToBottom() {
      if (me.arg === 'animate') {
        var timeToAnimate = Number(me.expression) || 300;
        $(me.el).animate({
          scrollTop: $(me.el).prop("scrollHeight")
        }, timeToAnimate);
      } else {
        //default is jump to bottom
        console.log('jumping');
        $(me.el)
          .scrollTop($(me.el)
          .prop("scrollHeight"));
      }
    }
  }
});
