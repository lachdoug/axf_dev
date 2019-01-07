ax.extension.appkit.kontroller.$update = function ( options ) {

  return function () {
    if ( options.transition ) {
      this.children[0].$to( this.$content() )
    } else {
      this.$nodes = [ this.$content() ]
    }
  }

}
