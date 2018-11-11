AxFunction.Extensions.Appkit.Library.prototype.fadeOut = function(el, options={}) {

  debugger


  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();

  if ( options.complete ) {
    debugger
    options.complete()
  }

};
