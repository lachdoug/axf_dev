ax.extensions.appkit.lib.fadeOut = function(element, options={}) {

  // element.style.display
  // element.style.opacity = 1
  // element.style.display = "unset";
// debugger  
  if ( element.style.display !== "none" ) {
    this.fade( element, options )
  }

  // element.style.opacity = 1;
  //
  // // (function fade() {
  // //   if ((element.style.opacity -= 1) < 0) {
  // //     element.style.display = "none";
  // //
  // //     if ( options.complete ) {
  // //       console.log( ''+ options.complete )
  // //       options.complete()
  // //     }
  // //   } else {
  // //     console.log( element.style.opacity )
  // //     requestAnimationFrame(fade);
  // //   }
  // // })();
  //
  // let last = +new Date();
  // let time = options.time || 250
  // let tick = function() {
  //   element.style.opacity = +element.style.opacity - (new Date() - last) / time;
  //   last = +new Date();
  //
  //   if (+element.style.opacity > 0) {
  //     (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
  //   } else {
  //     element.style.display = 'none'
  //     if ( options.complete ) options.complete()
  //   }
  // };
  //
  // tick();



};
