ax.extension.appkit.router.$update = function() {

  return function() {
    this.$kontrollers.forEach( function( kontroller ) {
      kontroller.$open( this.$state.path, this.$state.params )
    }.bind(this) )
  }

}
