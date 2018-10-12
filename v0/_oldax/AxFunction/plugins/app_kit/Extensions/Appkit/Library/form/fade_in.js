AxFunction.Extensions.Appkit.Library.prototype.fadeIn = function(el, options={}){
  el.style.opacity = 0;
  el.style.display = "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();

  if ( options.complete ) options.complete()

};
