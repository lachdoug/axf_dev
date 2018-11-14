ax.extensions.appkit.lib.fadeIn = function(element, options={}){

  if ( element.style.display === "none" ) {
    this.fade( element, options )
  }

};
