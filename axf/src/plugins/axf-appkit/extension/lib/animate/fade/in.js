ax.extension.lib.animate.fade.in = function(element, options={}){

  if ( element.style.display === 'none' ) {
    this.toggle( element, options )
  }

};
