ax.extension.appkit.router.$bind = function() {

  return function ( kontroller ) {
    this.$kontrollers.push( kontroller )
    kontroller.$open( this.$state.path, this.$state.params )
    return this
  }

}
