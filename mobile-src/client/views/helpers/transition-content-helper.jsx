Session.setDefault('content-enter-finished', false);

TransitionContent = React.createMixin({
  componentWillEnter(done) {
    this.el = ReactDOM.findDOMNode(this);

    this.el.classList.add('content-enter-before');
    requestAnimationFrame(() => {
      this.el.classList.add("content-enter");
      this.el.classList.remove('content-enter-before');

      requestAnimationFrame(() => {
        this.el.classList.add("content-enter-active");
        arrival(this.el, () => {
          done();
          Session.set('content-enter-finished', true);
        });
      });

    });
  },
  componentWillLeave(done) {
    this.el = ReactDOM.findDOMNode(this);

    this.el.classList.remove('content-enter');
    this.el.classList.remove('content-enter-active');
    Tracker.autorun((c) => {
      if (Session.equals('content-enter-finished', true)) {
        requestAnimationFrame(() => {
          this.el.classList.add("content-leave");

          requestAnimationFrame(() => {
            this.el.classList.add("content-leave-active");
            arrival(this.el, () => {
              done()
              Session.set('content-enter-finished', false);
              c.stop();
            });
          });
        });

      }
    });
  }
});

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());