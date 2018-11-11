ax.extension.appkit.router.$update = function() {

  return function() {
    this.$controllers.forEach( function( controller ) {
      controller.$open( this.$state.path, this.$state.params )
    }.bind(this) )
  }

}
