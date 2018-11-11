ax.extension.appkit.controller.$update = function ( options ) {

  return function () {
    if ( options.transition ) {
      this.children[0].$to( this.$content() )
    } else {
      this.$nodes = [ this.$content() ]
    }
  }

}
