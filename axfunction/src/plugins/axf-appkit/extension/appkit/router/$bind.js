ax.extension.appkit.router.$bind = function() {

  return function ( controller ) {
    this.$controllers.push( controller )
    controller.$open( this.$state.path, this.$state.params )
    return this
  }

}
