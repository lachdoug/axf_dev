ax.extension.lib.animate.fade.out = function(element, options={}) {

  if ( element.style.display != 'none' ) {
    this.toggle( element, options )
  }

};
